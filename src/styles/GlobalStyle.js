import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --dark: #272E36;
        --dark-lite: #3c434c;
        --black: #181C22;
        --white: #FFFFFF;
        --red: #DB5656;
        --red-dark: #ad3c3d;
        --grey: #C3C3C4;
        --blue: #3A62E8;
        --pink: #853762;
        --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;
        --border-radius: 4px;
        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    html, body, #root {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    ::selection {
        background-color: var(--slate);
        color: var(--lightest-slate);
    }
`;

export default GlobalStyle;
