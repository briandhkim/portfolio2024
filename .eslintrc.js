module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: ['react', 'prettier'],
    rules: {
        semi: ['warn', 'always'],
        'react/prop-types': 0,
        'prettier/prettier': [
            'warn',
            { endOfLine: 'auto' },
            { usePrettierrc: true },
        ],
        'no-unused-vars': ['warn'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
