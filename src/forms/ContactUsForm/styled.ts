import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.headlines.headline4}
		}
	}

	& > div {
		display: flex;

		& > label {
			${({ theme }) => theme.headlines.headline8}
			color: ${({ theme }) => theme.colors.grey};
		}
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InputStyled = styled.input<any>`
	${({ theme }) => theme.paragraphs.paragraph3Bold}
	border: none;
	border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey};
	padding: 0.25rem 0;
	margin-bottom: 2rem;
	outline: none;
`

export const ErrorMessage = styled.p`
	margin-left: auto;
	${({ theme }) => theme.paragraphs.paragraph3}
	color: ${({ theme }) => theme.colors.error};
`
