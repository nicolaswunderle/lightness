import * as convert from "../../node_modules/color-convert";

export const hexTohslCSS = hex => {
    const tabHsl = convert.hex.hsl(hex);
    return `${tabHsl[0]}deg ${tabHsl[1]}% ${tabHsl[2]}%`;
};

export const hslTohex = hsl => "#"+convert.hsl.hex(hsl);

export const hexToArrayhsl = (hex) => {
    const regex = /^#[0-9A-F]{6}$/i;
    if (!regex.test(hex)) {
        throw new Error(`${hex} is not a valid Hexadecimal color.`)
    }
    const hsl = convert.hex.hsl(hex);
    const arrayhsl = [];
    for (let i = 0; i <= 100; i = i + 10) {
        arrayhsl.push([hsl[0], hsl[1], i]);
    }
    return arrayhsl;
};