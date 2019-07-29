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
	// background-color: #612478;
	// color: white;
	border-radius: 6px;
	box-shadow:
		0 2px 2px 0 rgba(0, 0, 0, 0.14), 
		0 3px 1px -2px rgba(0, 0, 0, 0.2), 
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
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