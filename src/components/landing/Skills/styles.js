import styled from 'styled-components'

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
	h2 {
		text-align: center;
	}
`

export const SkillsWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`
export const SkillsColumn = styled.div`
	flex: 1;
	padding: 0 3rem;
	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}	
`