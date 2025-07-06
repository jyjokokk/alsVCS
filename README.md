# alsVCS

A TypeScript/ExpressJS API of cloud hosted Ableton Live Set version control system.

## Features

- Track changes to `.als`, `.midi` and `.adg` files
- Commit, diff, and restore project versions
- RESTful endpoints for integration with your workflow
- Hosted in the cloud, so your data will be accessible on any machine

## Getting Started

```bash
git clone https://github.com/yourusername/alsVCS.git
cd alsVCS
yarn install
yarn dev
```

## API Overview

- `POST /sets` — Add a new Ableton Live Set
- `GET /sets/:id/versions` — List all versions
- `POST /sets/:id/commit` — Commit changes
- `POST /sets/:id/restore` — Restore a previous version

## License

MIT
