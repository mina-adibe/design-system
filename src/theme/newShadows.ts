// Based on MUI shadows generator
// https://github.com/mui-org/material-ui/blob/57e8a88faeebba4d67aaaf6c5b178ebfe97264a6/packages/material-ui/src/styles/shadows.js

import { Shadows } from '@mui/material/styles/shadows';

// let shadowKeyUmbraOpacity = 0.1;
// let shadowKeyPenumbraOpacity = 0.06;
// let shadowAmbientShadowOpacity = 0.04;
let n = 24;

// // Easing Functions from @gre: https://gist.github.com/gre/1650294
// const EasingFunctions = {
//   // no easing, no acceleration
//   linear: function (t: number) {
//     return t;
//   },
//   // accelerating from zero velocity
//   easeInQuad: function (t: number) {
//     return t * t;
//   },
//   // decelerating to zero velocity
//   easeOutQuad: function (t: number) {
//     return t * (2 - t);
//   },
//   // acceleration until halfway, then deceleration
//   easeInOutQuad: function (t: number) {
//     return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//   },
//   // accelerating from zero velocity
//   easeInCubic: function (t: number) {
//     return t * t * t;
//   },
//   // decelerating to zero velocity
//   easeOutCubic: function (t: number) {
//     return --t * t * t + 1;
//   },
//   // acceleration until halfway, then deceleration
//   easeInOutCubic: function (t: number) {
//     return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//   },
//   // accelerating from zero velocity
//   easeInQuart: function (t: number) {
//     return t * t * t * t;
//   },
//   // decelerating to zero velocity
//   easeOutQuart: function (t: number) {
//     return 1 - --t * t * t * t;
//   },
//   // acceleration until halfway, then deceleration
//   easeInOutQuart: function (t: number) {
//     return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
//   },
//   // accelerating from zero velocity
//   easeInQuint: function (t: number) {
//     return t * t * t * t * t;
//   },
//   // decelerating to zero velocity
//   easeOutQuint: function (t: number) {
//     return 1 + --t * t * t * t * t;
//   },
//   // acceleration until halfway, then deceleration
//   easeInOutQuint: function (t: number) {
//     return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
//   },
// };

const color = [12, 24, 24];

const createShadow = (...px: number[]) => {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px rgba(${color.join(', ')}, ${px[3]})`,
    `${px[4]}px ${px[5]}px ${px[6]}px rgba(${color.join(', ')}, ${px[7]})`,
    `${px[8]}px ${px[9]}px ${px[10]}px rgba(${color.join(', ')}, ${px[11]})`,
  ].join(',');
};

export const generate = () => {
  const shadows: Shadows = [] as any;

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      shadows.push('none');
    } else {
      let j = (i - 1) / (n - 1);

      const opacityMultiplier = 0.3;
      const baseOpacity = 0.03;

      const opacity1 = +(baseOpacity + 0.03 - j * (opacityMultiplier + 0.1)).toFixed(1);
      const opacity2 = +(baseOpacity + 0.0 + j * (opacityMultiplier + 0.05)).toFixed(1);
      const opacity3 = +(baseOpacity + 0.01 + j * (opacityMultiplier + 0.03)).toFixed(1);

      const xOffset = 0;

      shadows.push(
        createShadow(
          xOffset,
          +(10 + j * 2).toFixed(1),
          +(20 + j * 8).toFixed(1),
          opacity1,

          xOffset,
          +(2 + j * 4).toFixed(1),
          +(10 - j * 5).toFixed(1),
          opacity2,

          xOffset,
          +(2 + j * 0.25).toFixed(1),
          +(15 + j * 8).toFixed(1),
          opacity3
        )
      );
    }
  }

  console.log(JSON.stringify(shadows));

  return shadows;
};
