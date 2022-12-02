import { useEffect, ChangeEventHandler } from 'react'
import { CategoriesList } from '@components/CategoriesList'
import { SearchBar } from '@components/SearchBar'
import { BlogSingleItem } from '@components/BlogSingleItem'
import { BlogPopularPosts } from '@components/BlogPopularPosts'
import { BlogRelatedPosts } from '@components/BlogRelatedPosts'
import { ButtonWithTag } from '@components/ButtonWithTag'
import { IBlogPost } from '@interfaces/index'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectAllTags,
	selectSearchedPosts,
	selectRelatedPosts,
	selectPopularPosts,
} from '@store/selectors'
import {
	searchPosts,
	setCurrentPost,
	setPopularPosts,
	setRelatedPosts,
} from '@store/slices/blogSlice'
import {
	BlogSingleContentStyled,
	NavigationStyled,
	ContentStyled,
	TagsContainerStyled,
} from './styled'

export const BlogSingleContent: React.FC<{ currentPost: IBlogPost }> = ({ currentPost }) => {
	const searchedPosts = useSelector(selectSearchedPosts)
	const relatedPosts = useSelector(selectRelatedPosts)
	const popularPosts = useSelector(selectPopularPosts)
	const allTags = useSelector(selectAllTags)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setCurrentPost(currentPost))
		if (relatedPosts.length === 0) {
			dispatch(setRelatedPosts())
		}
		if (popularPosts.length === 0) {
			dispatch(setPopularPosts())
		}
	}, [dispatch, currentPost, relatedPosts, popularPosts])

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		dispatch(searchPosts(e.target.value.toLowerCase()))
	}

	return (
		<BlogSingleContentStyled>
			<ContentStyled>
				<BlogSingleItem currentPost={currentPost} />
				<BlogRelatedPosts />
			</ContentStyled>

			<NavigationStyled>
				<SearchBar callback={handleSearch} data={searchedPosts[0]} />

				<h4>All posts</h4>
				<CategoriesList list={searchedPosts} />

				<BlogPopularPosts />

				<h4>Tags</h4>
				<TagsContainerStyled>
					{allTags.map((item) => (
						<ButtonWithTag key={item} text={item} isSelected={false} />
					))}
				</TagsContainerStyled>
			</NavigationStyled>
		</BlogSingleContentStyled>
	)
}
