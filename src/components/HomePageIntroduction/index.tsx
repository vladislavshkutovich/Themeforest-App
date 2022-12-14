/* eslint-disable prettier/prettier */
/* eslint-disable no-irregular-whitespace */
import imageEnsome from '@assets/images/home1.png'
import imageSolutions from '@assets/images/home2.png'
import { ButtonCircle } from '@components/ButtonCircle'
import { ButtonDefault } from '@components/ButtonDefault'
import { SERVICES_ROUTE, SOLUTIONS_ROUTE } from '@constants/router'
import { useNavigate } from 'react-router-dom'
import {
	HeadingEnsome,
	ParagraphEnsome,
	ImageEnsome,
	HeadingNewest,
	ParagraphNewest,
	HeadingSolutions,
	ImageSolutions,
	BackgroundWrapperSolutions,
} from './styled'

export const HomePageIntroduction: React.FC = () => {
	const navigate = useNavigate()
	const handleNavigate = (route: string) => () => {
		navigate(route)
	}

	return (
		<>
			<HeadingEnsome>
				Find true power in your data with <span>Ensome</span>
			</HeadingEnsome>
			<ParagraphEnsome>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda,
				totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
				<ButtonCircle text="Learn More" callback={handleNavigate(SERVICES_ROUTE)} />
			</ParagraphEnsome>
			<ImageEnsome alt="People" src={imageEnsome} />

			<HeadingNewest>
				The <span>newest</span> business analytics platform
			</HeadingNewest>
			<ParagraphNewest>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo.
				<ButtonDefault text="Discover more" callback={handleNavigate(SOLUTIONS_ROUTE)} />
			</ParagraphNewest>

			<HeadingSolutions>
				Radically new solutions for data
				<span>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
					beatae vitae dicta sunt explicabo.
				</span>
				<ButtonDefault text="Learn more" callback={handleNavigate(SOLUTIONS_ROUTE)} />
			</HeadingSolutions>

			<ImageSolutions alt="People" src={imageSolutions} />
			<BackgroundWrapperSolutions />
		</>
	)
}
