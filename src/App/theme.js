const breakpoint = {
    mobileMax: 767,
};

const colorNames = {
    white: "#FFFFFF",
    black: "#000000",
    alabastersolid: "#FAFAFA",
    woodsmoke: "#111517",
    gray: "#848484",
    ebonyClay: "#2B3844",
    mirage: "#202C36",
};

export const lightTheme = {
    color: {
        primary: colorNames.alabastersolid,
        secondary: colorNames.white,
        text: colorNames.woodsmoke,
    },
    input: {
        text: colorNames.gray,
        icon: colorNames.gray,
    },
    select: {
        text: colorNames.woodsmoke,
        icon: colorNames.black,
    },
    breakpoint,
};

export const darkTheme = {
    color: {
        primary: colorNames.mirage,
        secondary: colorNames.ebonyClay,
        text: colorNames.white,
    },
    input: {
        text: colorNames.white,
        icon: colorNames.white,
    },
    select: {
        text: colorNames.white,
        icon: colorNames.white,
    },
    breakpoint,
};