module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:import/recommended'],
  settings: {
    'import/resolver': [{
      alias: {
        map: [
          ['@Constants', './constants'],
          ['@Store', './store'],
          ['@Pages', './pages'],
          ['@Components', './components'],
          ['@Server', './server'],
          ['@Public', './public'],
          ['@Config', './config'],
          ['@Middleware', './middleware'],
          ['@Assets', './assets'],
        ],
      },
      node: {
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
      typescript: {},
    }, 'webpack'],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
