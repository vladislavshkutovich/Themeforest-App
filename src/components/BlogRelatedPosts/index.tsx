// import { useEffect } from 'react'
import { selectRelatedPosts } from '@store/selectors'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RelatedPostsStyled } from './styled'

export const BlogRelatedPosts: React.FC = () => {
	const relatedPosts = useSelector(selectRelatedPosts)

	return (
		<RelatedPostsStyled>
			<h3>Related posts</h3>
			<ul>
				{relatedPosts.map((item) => (
					<Link to={`${item.baseRoute}/${item.id}`} key={item.id}>
						<img src={item.image} alt="Post" />
						<div>
							<h5>{item.date}</h5>
							<h6>{item.title}</h6>
							<p>{item.previewText}</p>
						</div>
					</Link>
				))}
			</ul>
		</RelatedPostsStyled>
	)
}
