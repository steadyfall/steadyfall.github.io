import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
    ...nextCoreWebVitals,
    ...nextTypescript,
    prettierConfig,
    {
        plugins: {
            prettier,
        },

        rules: {
            // Code quality
            "no-console": "warn",
            "no-debugger": "error",
            "no-unused-vars": "off", // Handled by TS version above

            // Import sorting and cleanliness
            "import/order": ["error", {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],

                "newlines-between": "always",

                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            }],

            "import/newline-after-import": "error",
            "import/no-duplicates": "error",

            // Prettier takes over formatting rules now
            "prettier/prettier": "error",
        },
    },
]);
