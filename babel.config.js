// {
//   "presets": [
//     [
//       "@babel/preset-env",
//       {
//         "modules": "commonjs"
//       }
//     ],
//     [
//       "@babel/preset-react",
//       {
//         "runtime": "automatic"
//       }
//     ],
//     "@babel/preset-typescript"
//   ]
// }

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
