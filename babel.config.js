const sharedPresets = [
  '@babel/typescript',
  [
    '@babel/preset-react',
    {
      runtime: 'automatic',
    },
  ],
];
const shared = {
  ignore: ['src/**/*.stories.ts'],
  presets: sharedPresets,
  plugins: ['@babel/plugin-transform-runtime'],
};

module.exports = {
  env: {
    esmUnbundled: shared,
    esmBundled: {
      ...shared,
      presets: [
        [
          '@babel/env',
          {
            targets: '> 0.25%, not dead',
          },
        ],
        ...sharedPresets,
      ],
    },
    cjs: {
      ...shared,
      presets: [
        [
          '@babel/env',
          {
            modules: 'commonjs',
          },
        ],
        ...sharedPresets,
      ],
    },
  },
};
