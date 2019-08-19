import styled from 'styled-components'

export const Button = styled.button`
	cursor: pointer;
	border-radius: 6px;
	font-weight: 400;
	box-shadow:
		0 2px 2px 0 rgba(0, 0, 0, 0.14), 
		0 3px 1px -2px rgba(0, 0, 0, 0.2), 
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
	
	transition: 
		box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
		transform 0.2s cubic-bezier(0.4, 0, 1, 1);
	:hover {
		box-shadow: 
			0 10px 20px rgba(0,0,0,0.19), 
			0 6px 6px rgba(0,0,0,0.23);
		transform: scale(1.03);
	}
	padding: 0.7rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: white;
	background: #8f14bc;
	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		// background: white;
		// color: #8f14b;
		padding: .5rem .8rem;
	`}
`
