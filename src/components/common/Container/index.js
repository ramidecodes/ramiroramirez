import styled from 'styled-components'

export const Container = styled.div`
	max-width: 1280px;
	margin: 0 auto 5rem;
	width: 90%;
	@media (min-width: 601px) {
		width: 90%;
	}

	@media (min-width: 993px) {
		width: 80%;
	}
	@media (max-width: 993px) {
		margin: 0 auto;
	}
`
