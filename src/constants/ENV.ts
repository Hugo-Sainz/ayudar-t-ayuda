export const ENV = {
    DATABASE_URL: import.meta.env.VITE_API_URL ?? "",
    NODE_ENV: import.meta.env.VITE_NODE_ENV ?? "development",
  
} as const;