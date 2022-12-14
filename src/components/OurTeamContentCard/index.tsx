import { IOurTeamContentCard } from '@interfaces/index'
import { Link } from 'react-router-dom'
import { ContentCardStyled } from './styled'

export const OurTeamContentCard: React.FC<IOurTeamContentCard> = ({
	id,
	firstName,
	lastName,
	role,
	photo,
}) => {
	return (
		<ContentCardStyled>
			<Link to={id} key={id}>
				<img src={photo} alt="Services Icon" />
			</Link>
			<h5>
				{firstName} {lastName}
			</h5>
			<p>{role}</p>
		</ContentCardStyled>
	)
}
