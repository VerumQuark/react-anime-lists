import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#222532",
    secondary: "#393E53",
    accent: "#181B25",
    identifiers: {
      seen: "#6CC75D",
      watching: "#CAD873",
      future: "#EB942F",
      liked: "#D445A4",
    },
    text: "#FFFFFF",
    topBar: "linear-gradient(180deg, #222532 0%, #1B1F2E 100%)",
    actionSelect: "#0E0F12",
    edit: "#540E8B",
    remove: "#942424",
  },
};

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	font-family: 'Fira Code', monospace !important;
}
body, html, #root, #modal, #error, #loader {
  /* max-height: 100vh; */
  max-width: 100vw;
  overflow-x: hidden;
}

html, body, #root {
  min-height: 100vh;
  background-color: ${theme.colors.primary};
}

#modal, #error, #loader {
  z-index: 999;
}
`;

export default GlobalStyles;

export { theme };
