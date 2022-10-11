import styled from 'styled-components'

export const HeaderStyled = styled.div`
	width: 100vw;
	height: 10vh;
	max-height: 12.6rem;
	background-color: ${({ theme }) => theme.colors.background};
	display: flex;
	align-content: center;
	justify-content: space-around;

	& > * {
		${({ theme }) => theme.headlines.headline7}
		cursor: pointer;
	}
`

export const LogoStyled = styled.img`
	width: 14.1rem;
	height: 4.6rem;
	display: flex;
	justify-self: center;
	align-self: center;
`

export const LinksContainerStyled = styled.div`
	gap: 5%;
	display: flex;
	justify-self: center;
	align-self: center;
`

export const LinkStyled = styled.div`
	& > * {
		color: ${({ theme }) => theme.colors.grey};
		text-decoration: none;
	}
`
