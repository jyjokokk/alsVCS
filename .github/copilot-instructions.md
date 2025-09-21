## alsVCS – AI Assistant Working Guide

Focused instructions to help an AI agent contribute productively. Keep responses concise, follow existing patterns, and prefer explicitness over magic.

### 1. Purpose & High-Level Architecture

Ableton Live Set Version Control REST API (TypeScript + Express + PostgreSQL via TypeORM). Layers:

- application/config: central environment-driven configuration singleton (`ConfigService`) returning structured `AppConfig` (server + database).
- infrastructure/database: database bootstrap (`DatabaseService`) and repository contracts (currently only interfaces).
- entities: TypeORM entity classes (e.g. `UserEntity`).
- server: HTTP concerns (middlewares, routes, DTOs) – expand here, keep domain logic out of controllers.
- common: shared utilities (`array-utils.ts`), custom errors.

Guiding principle: decouple configuration and infrastructure; inject data (like database config) rather than pulling singletons deep inside logic. Try to follow clean architecture principles.

### 2. Runtime & Build Workflow

- Build: `yarn build` (clears `dist/` via `prebuild`, then `tsc`). Output path uses `rootDir: .` so compiled entry is `dist/src/app.js` (start script explicitly calls that).
- Dev: `yarn dev` (nodemon on `src/app.ts`).
- Lint: `yarn lint` (ESLint flat config, TypeScript + Prettier integration expected; enforce `import type` via `@typescript-eslint/consistent-type-imports` if added).
- Test: `yarn test` (Jest + coverage). Keep new unit tests colocated with source or in existing `common/utils` pattern.
- Format & autofix: `yarn format` (Prettier then ESLint --fix).

### 3. Docker & Deployment Notes

Multi-stage Dockerfile builds then copies only production deps + compiled `dist/`. Start command: `node dist/src/app.js` (do not assume flattened `dist/app.js` unless `tsconfig` rootDir changes to `src`).
Cloud Run deployment uses Artifact Registry image naming: `<region>-docker.pkg.dev/<project>/<repo>/<service>:<sha>`. Ensure region matches `gcloud auth configure-docker` step.

### 4. Configuration Pattern

`ConfigService` is a lazy-loaded singleton wrapping dotenv environment. Do NOT read `process.env` elsewhere—request needed config either at the composition root (`app.ts`) and pass downward, or request it from the `ConfigService` at the needed location (respecting the injection pattern). When adding config, extend `AppConfig` + update constructor mapping.

### 5. Database Layer Conventions

- Follow the Data Mapper pattern; avoid active record.
- While the project uses typeORM, the idea is to keep domain logic decoupled from ORM specifics, and only use TypeORM where necessary for infrastructure concerns (e.g. Entity definitions, connection management).
- While the project currently uses TypeORM's `synchronize: true` for schema sync, plan to switch to explicit migrations for production safety.
- `DatabaseService.initialize(config)` must be passed an explicit `DatabaseConfig` the first time (no hidden global fetches).
- Entities imported explicitly (no glob patterns); add new entities directly to the `entities` array to avoid runtime path issues.
- Future repository implementations should implement `Repository<T>` interface; keep interfaces free of TypeORM-specific generics unless intentionally exposing them.

### 6. Error Handling

Custom errors live in `common/errors/errors.ts`. Prefer throwing domain/infrastructure specific error classes rather than raw Error. Controllers (when added) should translate errors to HTTP responses (add a global error middleware if expanding surface area).

### 7. Coding & Style Conventions

- Use explicit `import type { ... }` for type-only imports (configure ESLint rule if not already).
- Unused parameters prefixed with `_` to satisfy lint rules (`@typescript-eslint/no-unused-vars` with ignore pattern).
- Prefer pure utility functions in `common/utils`; keep them framework-agnostic and add minimal Jest specs (follow existing `*.spec.ts` naming).
- Avoid static singletons in domain logic; only `ConfigService` and `DatabaseService` are intentionally static.

### 8. Adding Features (Example Flow)

1. Define/extend entity (e.g. `ProjectEntity`).
2. Add migration logic later (currently using `synchronize: true` – flag for future: switch to migrations for production safety).
3. Create service in `application/<domain>/<name>.service.ts` containing business rules.
4. Expose via route + DTO under `server/routes` + `server/dtos` (ensure validation – consider adding Zod schemas leveraging existing `zod` dependency).

### 9. Testing Guidance

- Unit test pure utilities & services (mock DB where needed). Avoid hitting real Postgres in unit tests; abstract repository behind interface and provide in-memory stub.
- Keep coverage meaningful; avoid snapshot bloat.

### 10. Safe Change Checklist (Agent)

- When modifying startup or build: verify `yarn build` still emits `dist/src/app.js` or adjust start script/Dockerfile accordingly.
- If adding env vars: document in README and reflect in `ConfigService` mapping.
- If introducing new lint rules: ensure `yarn lint` passes before concluding.
- When adding entities: update `DatabaseService` entities list and consider data migrations roadmap.

### 11. Known Future Improvements (Do NOT implement silently)

- Replace `synchronize: true` with migrations.
<!-- - Implement concrete repositories and dependency injection container. -->
- Add global error handling middleware + request validation layer.

Focus on incremental, low-risk improvements unless explicitly asked for architectural refactors.
