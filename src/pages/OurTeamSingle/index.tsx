import { memo } from 'react'
import { MainLayout } from '@layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import NotFoundPage from '@pages/NotFound'
import { OUR_TEAM_CONTENT_CARDS } from '@constants/ourTeamContentCards'
// eslint-disable-next-line import/no-cycle
import { HOME_PAGE_ROUTE, OUR_TEAM_ROUTE } from '@constants/router'
import { TeamMemberCard } from '@components/TeamMebmerCard'
import { ContactUs } from '@components/ContactUs'
import { IntroductionStyled } from './styled'

const OurTeamSinglePage: React.FC = () => {
	const { id: ourTeamSingleId } = useParams()

	const teamMemberCard = OUR_TEAM_CONTENT_CARDS.find((item) => item.id === ourTeamSingleId)
	if (!teamMemberCard) return <NotFoundPage />

	const { firstName, lastName } = teamMemberCard

	const emailFormText = `Want ${firstName} to share his expertise with you?`

	return (
		<MainLayout>
			<IntroductionStyled>
				<h2>
					{firstName} {lastName}
				</h2>
				<div>
					<Link to={HOME_PAGE_ROUTE}>Home</Link>
					<Link to={OUR_TEAM_ROUTE}>Our Team</Link>
					<h6>
						{firstName} {lastName}
					</h6>
				</div>
			</IntroductionStyled>
			<TeamMemberCard teamMemberCard={teamMemberCard} />
			<ContactUs headingText={emailFormText} text=" " />
		</MainLayout>
	)
}

export default memo(OurTeamSinglePage)
