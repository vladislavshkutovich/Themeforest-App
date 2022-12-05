import blogSingleImage1 from '@assets/images/blog_single_1.png'
import blogSingleImage2 from '@assets/images/blog_single_2.png'
import blogSingleImage3 from '@assets/images/blog_single_3.png'
import blogSingleImage4 from '@assets/images/blog_single_4.png'
import blogSingleImage5 from '@assets/images/blog_single_5.png'
import blogSingleImage6 from '@assets/images/blog_single_6.png'
import blogSingleImage7 from '@assets/images/blog_single_7.png'
import blogSingleImage8 from '@assets/images/blog_single_8.png'
import blogSingleImage9 from '@assets/images/blog_single_9.png'
import blogSingleImage10 from '@assets/images/blog_single_10.png'
import blogSingleImage11 from '@assets/images/blog_single_11.png'
import blogSingleImage12 from '@assets/images/blog_single_12.png'
import blogSingleImage13 from '@assets/images/blog_single_13.png'
import blogSingleImage14 from '@assets/images/blog_single_14.png'
import blogSingleImage15 from '@assets/images/blog_single_15.png'
import { IBlogPost } from '@interfaces/index'
import { BLOG_BASE_ROUTE } from './router'

const commonPreviewText = `Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, euismod augue bibendum...`
const commonText = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla rhoncus consectetur eros non iaculis “Vivamus lectus enim, convallis nec dapibus vel, semper id ante. Morbi pulvinar sapien nulla, eu dignissim enim ullamcorper vitae”.
Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate, augue luctus dignissim pretium, elit magna placerat elit, at venenatis lacus arcu eget quam. Fusce nec cursus mi, sed blandit.
Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliq uam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. Praesent mollis velit ac accumsan ultrices. Ut convallis ipsum pulvinar ante maximus suscipit.
Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel orci consectetur, eu euismod augue bibendum. In volutpat libero velit, et mattis tortor placerat eget.
Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum lobortis orci, sit amet fermentum ex nunc ac diam.`

export const BLOG_PAGE_POSTS: IBlogPost[] = [
	{
		id: 'blog-1',
		title: 'When we lose our principles, we invite chaos.',
		previewText: commonPreviewText,
		text: commonText,
		date: '22 June 2022',
		image: blogSingleImage1,
		author: 'Elliot Alderson',
		category: 'Software development',
		tags: ['Data', 'Future', 'Information security'],
		viewsCount: 125,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-2',
		title: 'It was perfect. Perfect. Everything. Down to the last minute details.',
		previewText: commonPreviewText,
		text: commonText,
		date: '23 June 2022',
		image: blogSingleImage2,
		author: 'Homelander',
		category: 'Information security',
		tags: ['Management', 'Information security', 'CMR'],
		viewsCount: 4890,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-3',
		title:
			'A dog who bites every owner he had can only be disciplined with a firm hand or... put down.',
		previewText: commonPreviewText,
		text: commonText,
		date: '24 June 2022',
		image: blogSingleImage3,
		author: 'Gustavo Fring',
		category: 'Internet of things',
		tags: ['Proxy', 'CMR'],
		viewsCount: 135,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-4',
		title: 'And what will you do when this is all turned off around the world?',
		previewText: commonPreviewText,
		text: commonText,
		date: '25 June 2022',
		image: blogSingleImage4,
		author: 'Kazimir Zalupenko',
		category: 'Digital transformation',
		tags: ['App', 'Media'],
		viewsCount: 985,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-5',
		title: '5 web portal examples your business can learn from',
		previewText: commonPreviewText,
		text: commonText,
		date: '26 June 2022',
		image: blogSingleImage5,
		author: 'Vought Inc.',
		category: 'Healthcare it',
		tags: ['App', 'Big data', 'CMR', 'Media'],
		viewsCount: 1175,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-6',
		title: 'Surprise meeting with fans',
		previewText: commonPreviewText,
		text: commonText,
		date: '27 June 2022',
		image: blogSingleImage6,
		author: 'Homelander',
		category: 'Healthcare it',
		tags: ['CIO', 'Team', 'Media', 'Proxy'],
		viewsCount: 1365,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-7',
		title: 'The best work is done in silence',
		previewText: commonPreviewText,
		text: commonText,
		date: '28 June 2022',
		image: blogSingleImage7,
		author: 'Salamanca Brothers',
		category: 'Information security',
		tags: ['Future', 'Media', 'Proxy'],
		viewsCount: 5980,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-8',
		title: 'Business analysis helps you  in finance',
		previewText: commonPreviewText,
		text: commonText,
		date: '24 June 2022',
		image: blogSingleImage8,
		author: 'Elliot Alderson',
		category: 'Digital transformation',
		tags: ['Startup', 'Data', 'Media'],
		viewsCount: 78,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-9',
		title: 'Benefits of chemistry',
		previewText: commonPreviewText,
		text: commonText,
		date: '25 June 2022',
		image: blogSingleImage9,
		author: 'Walter White',
		category: 'Digital transformation',
		tags: ['CIO', 'Data analytics', 'Team'],
		viewsCount: 784,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-10',
		title: 'The only way to solving modern problems',
		previewText: commonPreviewText,
		text: commonText,
		date: '29 June 2022',
		image: blogSingleImage10,
		author: 'Ted Mosby',
		category: 'Healthcare it',
		tags: ['App', 'Big data', 'Media'],
		viewsCount: 7815,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-11',
		title: '2022 chemistry trends explained with benefits',
		previewText: commonPreviewText,
		text: commonText,
		date: '31 June 2022',
		image: blogSingleImage11,
		author: 'Walter White',
		category: 'Software development',
		tags: ['Data', 'Future', 'Startup'],
		viewsCount: 135,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-12',
		title: 'Lorenzo von Matterhorn',
		previewText: commonPreviewText,
		text: commonText,
		date: '30 June 2022',
		image: blogSingleImage12,
		author: 'Lorenzo von Matterhorn',
		category: 'Information security',
		tags: ['Management', 'Information security', 'Team'],
		viewsCount: 1484,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-13',
		title: 'Business analysis helps you  in finance',
		previewText: commonPreviewText,
		text: commonText,
		date: '28 June 2022',
		image: blogSingleImage13,
		author: 'Lorenzo von Matterhorn',
		category: 'Internet of things',
		tags: ['App', 'Management', 'CIO'],
		viewsCount: 889,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-14',
		title: 'New Vought headquatters',
		previewText: commonPreviewText,
		text: commonText,
		date: '26 June 2022',
		image: blogSingleImage14,
		author: 'Vought Inc.',
		category: 'Healthcare it',
		tags: ['CMR', 'Proxy', 'Team'],
		viewsCount: 12053,
		baseRoute: BLOG_BASE_ROUTE,
	},
	{
		id: 'blog-15',
		title: 'Better gifts from close relatives',
		previewText: commonPreviewText,
		text: commonText,
		date: '25 June 2022',
		image: blogSingleImage15,
		author: 'Lalo Salamanca',
		category: 'Digital transformation',
		tags: ['App', 'Media', 'Big Data'],
		viewsCount: 9568,
		baseRoute: BLOG_BASE_ROUTE,
	},
]
