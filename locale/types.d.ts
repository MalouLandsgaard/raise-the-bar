import { defaultLanguage, defaultNamespace, resources } from ".";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNamespace;
    resources: (typeof resources)[typeof defaultLanguage];
  }
}
