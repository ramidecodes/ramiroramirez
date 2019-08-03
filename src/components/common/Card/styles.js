import styled from 'styled-components'

export const CardContainer = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	padding: 0;
	background: #fff;
	overflow: hidden;
	border-radius: 6px;
	box-shadow:
		0 2px 2px 0 rgba(0, 0, 0, 0.14), 
		0 3px 1px -2px rgba(0, 0, 0, 0.2), 
		0 1px 5px 0 rgba(0, 0, 0, 0.12);

	transition: all .25s linear;
	:hover {
		box-shadow: 
			0 10px 20px rgba(0,0,0,0.19), 
			0 6px 6px rgba(0,0,0,0.23);
		transform: scale(1.03);
		// img {
		// 	transition: all .25s linear;
		// 	filter: none;
		// }
	}
`
export const Media = styled.div`
	img {
		width: 100%;
		height: 100%;
		margin: 0;
		// filter: blur(2px);
	}
`
export const Header = styled.div`
	padding: 1rem;
	h4 {
		color: #212121;
		font-size: 18pt;
		font-weight: 400;
		margin-bottom: 0;
	}

	span {
		color: #808080;
	}
`
export const Content = styled.div`
	padding: 1rem;
	color: #606060;
	font-size: 12pt;
`
export const Actions = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem;
	border-top: 1px solid #ddd;
	div {
		// display: flex;
		&:first-child {
			margin-right: 0.5rem;
		}

		img {
			margin: 0;
		}

		span {
			color: #000;
			margin-left: 0.5rem;
		}
	}
`
export const Meta = styled.div`
	display: flex;
	flex-flow: row no-wrap;
	justify-content: space-between;
	margin-top: -24px;
	padding: 0 1rem;
`
export const MetaCapsule = styled.div`
	display: inline-block;
	z-index: 2;
	border-radius: 20px;
	color: white;
	background-color: #794498;
	margin: 0 0.2rem .5rem;
		margin-right: 0.2rem;
	padding: 0.4rem .7rem;
	font-size: 12pt;
	font-weight: 400;
	box-shadow: 
		0 2px 2px 0 rgba(0,0,0,0.14),
		0 1px 5px 0 rgba(0,0,0,0.12),
		0 3px 1px -2px rgba(0,0,0,0.2);
`
export const Tags = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`

export const TagCapsule = styled.div`
	display: inline-block;
	border-radius: 6px;
	color: #656565;
	background-color: #e4e4e4;
	padding: .4rem .6rem;
	font-size: 10pt;
	font-weight: 700;
	margin: 0 0 .5rem;
`