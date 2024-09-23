import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

	@font-face {
		font-family: 'NanumSquareNeoLight';
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-aLt.eot);
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-aLt.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-aLt.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-aLt.ttf) format("truetype");
	}

	@font-face {
		font-family: 'NanumSquareNeo';
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.eot);
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.ttf) format("truetype");
	}

	@font-face {
		font-family: 'NanumSquareNeoBold';
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-cBd.eot);
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-cBd.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-cBd.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-cBd.ttf) format("truetype");
	}

	@font-face {
		font-family: 'NanumSquareNeoExtraBold';
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot);
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-dEb.ttf) format("truetype");
	}

	@font-face {
		font-family: 'NanumSquareNeoHeavy';
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-eHv.eot);
		src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-eHv.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-eHv.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-eHv.ttf) format("truetype");
	}

	@font-face {
		font-family: 'PartialSansKR';
		src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}
	
	/* latin-ext */
	@font-face {
		font-family: 'EduHand';
		font-style: normal;
		font-weight: 400 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/eduauvicwanthand/v1/C8c94dY1tX2x0uuiUHFS4y7ERV-jfqJ6x06dH9MtW4Q.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	/* latin */
	@font-face {
		font-family: 'EduHand';
		font-style: normal;
		font-weight: 400 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/eduauvicwanthand/v1/C8c94dY1tX2x0uuiUHFS4y7ERV-jfqJ6x06dEdMt.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
    font-family: 'NanumBarunpen';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenR.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenR.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenR.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenR.ttf) format("truetype");
	}

	@font-face {
			font-family: 'NanumBarunpenB';
			src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenB.eot);
			src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenB.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenB.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumBarunpen/NanumBarunpenB.ttf) format("truetype");
	}

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

	&::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
		border-radius: 0.3125rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
		background-color: white;
		border-radius: 0 0.3125rem 0.3125rem 0;
		width: 10px;
  }

	header {
		font-family: NanumSquareNeo;
		color: rgba(70, 70, 70, 1);
	}

	body {
		font-family: NanumSquareNeo;
		color: rgba(70, 70, 70, 1);

		a {
			font-family: inherit;
			text-decoration: none;
			color: inherit;
		}
	}
`

export default GlobalStyle
