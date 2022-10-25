import styled from 'styled-components'

export const OvervirewStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;

	height: max-content;
	margin: 12rem 0;

	& > div {
		display: flex;
		flex-direction: row;
	}
`

export const HeadingOverview = styled.p`
	${({ theme }) => theme.headlines.headline2}
	margin-bottom: 5rem;
	width: minmax(min-content, 92rem);
	max-width: 92rem;
`

export const ParagraphOverview = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	margin: 0 0 5rem 5rem;
	width: minmax(min-content, 54rem);
	max-width: 54rem;
`

export const AchivementsOverview = styled.p`
	display: flex;
	flex-direction: column;
	align-items: center;
	${({ theme }) => theme.paragraphs.paragraph2}
	color: ${({ theme }) => theme.colors.grey};
	margin: 3rem;
	max-width: 16rem;
	max-height: 10rem;

	& > span {
		font-weight: 800;
		color: ${({ theme }) => theme.colors.primary};
		font-size: ${({ theme }) => theme.fontSizes.achivements};
		padding: 1rem;
	}
`

export const LogosContainer = styled.div`
	display: flex;
	max-width: min-content;
`

export const Logo = styled.img`
	width: 18.5rem;
	height: 13.2rem;
`
