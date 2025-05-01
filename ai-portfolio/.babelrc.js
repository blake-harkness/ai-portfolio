module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not dead'],
        },
        modules: false, // Preserve ES modules for better tree shaking
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: true,
      },
    ],
    // For dynamic imports and code splitting
    '@babel/plugin-syntax-dynamic-import',
    // For optional chaining
    '@babel/plugin-proposal-optional-chaining',
    // For nullish coalescing
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  env: {
    production: {
      plugins: [
        'transform-react-remove-prop-types',
        'transform-react-pure-class-components',
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
}; 