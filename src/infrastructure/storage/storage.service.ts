import type { StorageService } from './storage.interface'

export class StorageServiceImpl implements StorageService {
  constructor() {}

  async getDocumentUrl(key: string): Promise<string> {
    // Placeholder implementation
    return Promise.resolve(`https://storage.example.com/${key}`)
  }
}
