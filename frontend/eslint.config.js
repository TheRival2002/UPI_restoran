import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports';
import tsEslint from 'typescript-eslint';
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";

export default tsEslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tsEslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: tsEslint.parser,
        },
        plugins: {
            "unused-imports": unusedImports,
            "@typescript-eslint": tsEslint.plugin,
            "react-hooks": reactHooks,
            'react-refresh': reactRefresh,
            prettier,
            react
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            indent: [2, 4, {
                MemberExpression: 1,
                SwitchCase: 1,
            }],

            quotes: [2, "single", "avoid-escape"],
            "no-unused-vars": 0,
            "no-param-reassign": 0,
            "no-multiple-empty-lines": ["error", {
                max: 1,
            }],
            "array-bracket-spacing": ["error", "always", {
                objectsInArrays: false,
                arraysInArrays: false,
            }],
            "object-curly-spacing": [2, "always", {
                objectsInObjects: false,
                arraysInObjects: false,
            }],
            "no-extra-semi": "error",
            semi: "error",
            "@typescript-eslint/naming-convention": 0,
            "@typescript-eslint/no-use-before-define": 0,
            "@typescript-eslint/no-explicit-any": 0,
            "react/jsx-no-useless-fragment": [1, {
                allowExpressions: true,
            }],
            "prefer-destructuring": [1, {
                object: true,
                array: false,
            }],
            "react/no-unstable-nested-components": [1, {
                allowAsProps: true,
            }],
            "@typescript-eslint/no-unused-vars": [1, {
                args: "none",
                caughtErrors: "none",
            }],
            "react/jsx-no-duplicate-props": [1, {
                ignoreCase: false,
            }],
            "unused-imports/no-unused-imports": 1,
            "unused-imports/no-unused-vars": [0, {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            }],
        },
    },
)
