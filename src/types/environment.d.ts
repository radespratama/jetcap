export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_REPO: string;
      ENV: "test" | "dev" | "prod" | "local";
    }
  }
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
