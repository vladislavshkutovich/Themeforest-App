import styled from 'styled-components'

export const ContactUsStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: 12.5rem;
	row-gap: 6rem;

	border-top: 12rem solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 12rem solid ${({ theme }) => theme.colors.background};
`

export const ContactsStyled = styled.div`
	display: flex;
	flex-direction: column;

	& > h2 {
		${({ theme }) => theme.headlines.headline2}
		width: max-content;
		max-width: 54rem;
		margin-bottom: 2.4rem;
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};
		width: max-content;
		max-width: 54rem;
		margin-bottom: 6rem;
	}

	& > div {
		display: flex;
		flex-direction: column;
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};

		& > span {
			${({ theme }) => theme.paragraphs.paragraph2Bold}
			color: ${({ theme }) => theme.colors.black};
			margin-bottom: 2.4rem;
		}
	}
`

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	width: max-content;
	width: 45rem;
	padding: 5rem;

	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 0.6rem;
	${({ theme }) => theme.shadows.shadowCard2}

	& > h3 {
		${({ theme }) => theme.headlines.headline3}
		margin-bottom: 3rem;
	}

	& > label {
		${({ theme }) => theme.headlines.headline8}
		color: ${({ theme }) => theme.colors.grey};
	}

	& > input {
		${({ theme }) => theme.paragraphs.paragraph3Bold}
		border: none;
		border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey};
		padding: 0.25rem 0;
		margin-bottom: 2rem;
		outline: none;
	}

	& > button {
		align-self: flex-end;
		width: 13.7rem;
		height: 4.4rem;
		margin: 6rem 0 0 0;

		& > p {
			${({ theme }) => theme.headlines.headline7}
		}
	}
`