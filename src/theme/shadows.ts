const COLOR = [0, 0, 0].join(',');

const color = (opacity: number) => `rgba(${COLOR},${opacity})`;

const OPACITY_LAYERS = [0.1, 0.075, 0.05];

// Generates the X offset for a given height
const genXOffset = (i: number) => 0.5 ** (i - 1) * 0.2;

const genYOffset = (i: number) => [0.4, 0.3, 0.1][i - 1];

const genBlur = (i: number) => 2 + 2 * i;

const genInset = (i: number) => [-0.2, 0, 0.1][i - 1];

const sh = (e: number, v: number) => {
  const cx = Math.floor(e * genXOffset(v));
  const cy = Math.floor(e * genYOffset(v));
  const cb = Math.floor(e * genBlur(v));
  const ci = genInset(v);

  return [cx, cy, cb, ci].map((p) => `${p}px`).join(' ');
};

export const createShadow = (e: number, n: number = 3) => {
  return Array(n)
    .fill(0)
    .map((_, i) => sh(e, i + 1))
    .map((v, index) => `${v} ${color(OPACITY_LAYERS[index])}`);
};

const generateShadows = () => {
  return [
    'none',
    ...new Array(24).fill(0).map((_, index) => {
      return createShadow(index + 1);
    }),
  ];
};

export default generateShadows;
