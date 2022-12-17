// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            blue: 'rgb(29, 155, 240)',
            black: 'rgba(0,0,0,1.00)',
        },
    },
    media: {
        bp1: '(min-width: 480px)',
    },
    utils: {
        marginX: (value) => ({ marginLeft: value, marginRight: value }),
    },
});


globalCss(
    {
        "@import": "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Open+Sans:wght@400;500;700&display=swap",
        "*": { boxSizing: "border-box" },
        "*::after": { boxSizing: "border-box" },
        "*::before": { boxSizing: "border-box" },
        "html": { margin: 0, padding: 0 },
        "body": { color: "#3c4043", fontFamily: "'Open Sans', 'Noto Sans KR', sans-serif;", margin: 0, padding: 0 },
        "button": { cursor: "pointer", fontFamily: "'Open Sans', 'Noto Sans KR', sans-serif;" },
        "a": { cursor: "pointer", fontFamily: "'Open Sans', 'Noto Sans KR', sans-serif;" },
        "#root": { margin: 0, padding: 0 }
    }
)();
