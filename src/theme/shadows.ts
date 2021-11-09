const COLOR = [0, 0, 0].join(',')

const color = (opacity: number) => `rgba(${COLOR},${opacity})`

const OPACITY_LAYERS = [0.10, 0.075, 0.05]

const x = (i: number) => [0.2, 0.1, 0.05][i - 1]

const y = (i: number) => [0.4, 0.3, 0.1][i - 1]

const b = (i: number) => [4, 6, 8][i - 1]

const i = (i: number) => [-0.2, 0, 0.1][i - 1]

const sh = (e: number, v: number) => {
    const cx = Math.floor(e * x(v))
    const cy = Math.floor(e * y(v))
    const cb = Math.floor(e * b(v))
    const ci = i(v)

    return [cx, cy, cb, ci].map(v => `${v}px`).join(' ')
}

export const createShadow = (e: number) => {

    return [sh(e, 1), sh(e, 2), sh(e, 3)].map((v, i) => `${v} ${color(OPACITY_LAYERS[i])}`).join(',')
}

const generateShadows = () => {
    return ['none', ...(new Array(24).fill(0).map((_, i) => {
        return createShadow(i + 1)
    }))]
}

export default generateShadows;