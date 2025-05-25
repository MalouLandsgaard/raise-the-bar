import { KeyPrefix } from "i18next";
import { FallbackNs, useTranslation as _useTranslation, UseTranslationOptions } from "react-i18next";

export const useTranslation = <KPrefix extends KeyPrefix<FallbackNs<"default">> = undefined>(
  keyPrefix: UseTranslationOptions<KPrefix>["keyPrefix"]
) => {
  return _useTranslation("default", { keyPrefix });
};
