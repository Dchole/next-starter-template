declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    MONGODB_DB: string;
    MONGODB_LOCAL: string;
  }
}
