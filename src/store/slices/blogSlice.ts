/* eslint-disable prettier/prettier */
import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { BLOG_PAGE_ALL_TOPICS, BLOG_PAGE_TAGS } from '@constants/blogPageTags'
import { IBlogPost, IBlogSliceState, IShowMorePosts } from '@interfaces/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IBlogSliceState = {
	currentPost: BLOG_PAGE_POSTS[0],
	allPosts: BLOG_PAGE_POSTS,
	filteredPosts: BLOG_PAGE_POSTS,

	allTopicsTag: BLOG_PAGE_ALL_TOPICS,
	restTags: BLOG_PAGE_TAGS,
	currentTags: BLOG_PAGE_TAGS,

	searchedPosts: BLOG_PAGE_POSTS,
	popularPosts: [],
	relatedPosts: [],

	popularPostsCount: 3,
	popularPostsAreOver: false,
	relatedPostsCount: 3,
	relatedPostsAreOver: false,
}

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		setCurrentPost(state, action: PayloadAction<IBlogPost>) {
			state.currentPost = action.payload
		},

		updatePosts(state) {
			state.relatedPosts = state.filteredPosts
				.filter(
					(item) =>
						item.tags.some((tag) => state.currentPost.tags.includes(tag)) &&
						item.id !== state.currentPost.id,
				)
				.sort((prev, next) => next.viewsCount - prev.viewsCount)
			state.popularPosts = state.filteredPosts.sort((prev, next) => next.viewsCount - prev.viewsCount)
			state.searchedPosts = state.filteredPosts
		},

		resetTags(state) {
			state.currentTags = state.restTags
			state.allTopicsTag.isActive = !state.allTopicsTag.isActive
			state.filteredPosts = state.allPosts
			// eslint-disable-next-line no-return-assign
			state.restTags.forEach((item) => (item.isActive = false))
		},

		toggleTag(state, action) {
			const clickedTag = state.restTags.find((item) => item.title === action.payload)
			if (clickedTag) clickedTag.isActive = !clickedTag.isActive

			state.allTopicsTag.isActive = !state.restTags.some((item) => item.isActive)
			state.currentTags = state.restTags.filter((item) => item.isActive)

			state.filteredPosts =
				state.currentTags.length === 0
					? state.allPosts
					: state.allPosts.filter(
							(item) =>
								item.tags.some((postTag) => state.currentTags.map((tag) => tag.title).includes(postTag)) &&
								item.id !== state.currentPost.id,
					  )
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		showMorePosts(state: any, action: PayloadAction<IShowMorePosts>) {
			const { count, posts, postsCount, countAreOver } = action.payload
			const nextCount = state[postsCount] + count
			if (nextCount < state[posts].length) {
				state[postsCount] += count
			} else {
				state[postsCount] += count
				state[countAreOver] = true
			}
		},

		searchPosts(state, action: PayloadAction<string>) {
			state.searchedPosts = state.filteredPosts.filter((item) =>
				item.title.toLowerCase().includes(action.payload),
			)
		},
	},
})

export const { setCurrentPost, updatePosts, toggleTag, resetTags, showMorePosts, searchPosts } =
	blogSlice.actions
export default blogSlice.reducer
