import styled from 'styled-components'

export const IntroductionStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin: 10rem 0 12rem 0;
	min-width: 100vw;

	text-align: center;

	& > * {
		width: minmax(min-content, 73rem);
		max-width: 73rem;
	}

	& > h6 {
		${({ theme }) => theme.headlines.headline6}
		color: ${({ theme }) => theme.colors.primary};
	}

	& > h1 {
		${({ theme }) => theme.headlines.headline1}
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph1}
		color: ${({ theme }) => theme.colors.grey};
	}
`