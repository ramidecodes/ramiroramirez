import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Item = styled.div`
	width: 100%;
	height: 100%;
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
	}
	h4 {
		color: #212121;
	}

	p {
		color: #707070;
	}
`

export const Content = styled.div`
	padding: 1rem 0;
`

export const Stats = styled.div`
	display: flex;
	align-items: center;

	div {
		display: flex;
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
