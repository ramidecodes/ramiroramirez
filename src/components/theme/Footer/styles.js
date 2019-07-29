import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 28rem 0 4rem 0;
	background-image: url('../illustrations/footer.svg');
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;

	@media (max-width: 1960px) {
		padding: 12rem 0 2rem;
	}
`

export const Flex = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 1rem !important;
	@media (max-width: 680px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`

export const Details = styled.div`
	h4 {
		margin-bottom: .5rem;
	}
	@media (max-width: 680px) {
		margin-bottom: 2rem;
	}
`
