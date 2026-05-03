// Barrel — exports all constants

// --- Currencies ---
export * from "./currencies";

// --- Default Tabs ---
export * from "./default-tabs";

// --- Error Messages ---
export * from "./error-messages";

// --- Restaurant open check ---
export * from "./isRestaurantOpen";

// --- Orders ---
export * from "./orders";

// --- Rating ---
export * from "./rating";

// --- Locale ---
export const DEFAULT_LOCALE = "en";

// --- LocalStorage keys ---
export const USER_CURRENT_LOCATION_LS_KEY = "user-current-location";

// --- Language types ---
export const languageTypes = [
    { code: "en", value: "English" },
    { code: "ar", value: "عربي" },
    { code: "de", value: "Deutsch" },
    { code: "fr", value: "Français" },
    { code: "km", value: "ភាសាខ្មែរ" },
    { code: "zh", value: "中文" },
];

// --- Toast severity styles ---
import {
    faCheckCircle,
    faExclamationCircle,
    faInfoCircle,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export const SEVERITY_STYLES: Record<
    "error" | "success" | "info" | "warn",
    { textColor: string; icon: any }
> = {
    error: { textColor: "#ef4444", icon: faTimesCircle },
    success: { textColor: "#22c55e", icon: faCheckCircle },
    info: { textColor: "#3b82f6", icon: faInfoCircle },
    warn: { textColor: "#f59e0b", icon: faExclamationCircle },
};
