import styled from 'styled-components'

export const CardContainer = styled.div`
	height: 585px;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
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
		img {
			filter: none;
		}
	}
	`
export const Media = styled.div`
	img {
		transition: all .25s linear;
		width: 100%;
		height: 100%;
		margin: 0;
		filter: grayscale(100%);
	}
`
export const Header = styled.div`
	padding: 1rem;
	h4 {
		font-size: 16pt;
		font-weight: 700;
		margin-bottom: 0;
	}

	span {
		color: #808080;
	}
`
export const Content = styled.div`
	padding: 2rem 1rem 1rem;
	// color: #606060;
	font-size: 11pt;
`
export const Actions = styled.div`
	margin-top:auto;
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
	justify-content: flex-end;
	margin-top: -24px;
	padding: 0 1rem;
`
export const MetaCapsule = styled.div`
	display: inline-block;
	z-index: 2;
	border-radius: 20px;
	color: white;
	// background-color: #794498;
	background-color: #3f3d56;
	margin: 0 0.2rem .5rem;
		margin-right: 0.2rem;
	padding: 0.4rem .7rem;
	font-size: 10pt;
	font-weight: 400;
	box-shadow: 
		0 2px 2px 0 rgba(0,0,0,0.14),
		0 1px 5px 0 rgba(0,0,0,0.12),
		0 3px 1px -2px rgba(0,0,0,0.2);
`
export const Tags = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`

export const TagCapsule = styled.div`
	display: inline-block;
	border-radius: 6px;
	color: #656565;
	background-color: #efefef;
	padding: .4rem;
	font-size: 10pt;
	font-weight: 400;
	margin: 0 5px .5rem;
	box-shadow: 
		0 2px 2px 0 rgba(0,0,0,0.14),
		0 1px 5px 0 rgba(0,0,0,0.12),
		0 3px 1px -2px rgba(0,0,0,0.2);
`