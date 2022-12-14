import { useState } from 'react'
import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { ButtonsSliderDefault } from '@components/ButtonsSliderDefault'
import { OurBlogCard } from '@components/OurBlogCard'
import { OurBlogStyled, HeadingOurBlog, OurBlogCardsContainer } from './styled'

export const OurBlog: React.FC = () => {
	// todo вынести в отдельный хук
	const [cardIndex, setCardIndex] = useState(0)
	const [activityState, setActivityState] = useState([true, false])
	const handlePrevItem = () => {
		setCardIndex((prevState) => {
			if (cardIndex < 5) setActivityState([false, false])
			if (cardIndex === 1) setActivityState([true, false])
			return prevState - 1
		})
	}
	const handleNextItem = () => {
		setCardIndex((prevState) => {
			if (cardIndex + 1 !== 0) setActivityState([false, false])
			if (cardIndex === 2) setActivityState([false, true])
			return prevState + 1
		})
	}

	return (
		<OurBlogStyled>
			<HeadingOurBlog>
				<h2>Our Blog</h2>
				<ButtonsSliderDefault
					activityState={activityState}
					callbackPrev={handlePrevItem}
					callbackNext={handleNextItem}
				/>
			</HeadingOurBlog>
			<OurBlogCardsContainer>
				{BLOG_PAGE_POSTS.slice(cardIndex, cardIndex + 3).map((item) => (
					<OurBlogCard {...item} key={item.id} />
				))}
			</OurBlogCardsContainer>
		</OurBlogStyled>
	)
}
