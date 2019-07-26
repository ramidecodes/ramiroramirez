import styled from 'styled-components'

export const Wrapper = styled.div`
	// background-image: url('../illustrations/details.svg');
	// background-size: contain;
	// background-position: left top;
	// background-repeat: no-repeat;
	padding: 4rem 0;
	h2 {
		text-align: center;
		margin-bottom: 0;
	}
`

export const SkillsWrapper = styled.div`
	padding: 4rem 0 0;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`
export const SkillsColumn = styled.div`
	flex: 1;
	margin: 0 2.5rem;
	padding: 3rem 2rem;
	display: flex;
	flex-flow: column;
	align-items: center;
	text-align: center;
	box-shadow: 0 1px 6px -1px hsla(0, 0%, 0%, 0.85);
	border-radius: 15px;
	h3 {
		font-size: 18pt;
	}
	@media (max-width: 960px) {
		padding: 2rem 0;
		width: 100%;
		margin: 0 0 3rem;
	}
	ul {
		margin-left: 0;
		li {
			list-style-type: none;
			font-size: 14pt
		}
	}
`