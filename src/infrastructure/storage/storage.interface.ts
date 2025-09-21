export interface StorageService {
  getDocumentUrl(key: string): Promise<string>
}
