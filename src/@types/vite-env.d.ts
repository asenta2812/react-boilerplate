/// <reference types="vite/client" />
/// <reference types="redux-persist" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
