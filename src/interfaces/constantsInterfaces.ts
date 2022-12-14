export interface IPagesRoutes {
	id: string
	path: string
	element: JSX.Element
}

export interface ILinkItems {
	name: string
	route: string
}

export interface IHomepageBenefitsCard {
	icon: string
	heading: string
	text: string
	key: string
}

export interface ITestimonials {
	photo: string
	name: string
	position: string
	text: string
	key: string
}

export interface IOurPricingCard {
	title: string
	cost: string
	description: string[]
	key: string
}

export interface IServicesContentCard {
	id: string
	image: string
	title: string
	text: string
	key: string
}

export interface IServicesSingleItem {
	id: string
	baseRoute: string
	title: string
	subtitle: string
	key: string
}

export interface IOurTeamContentCard {
	id: string
	firstName: string
	lastName: string
	email: string
	role: string
	photo: string
	description: string
	links: string[]
	baseRoute: string
}

export interface IFAQsContentCard {
	id: string
	title: string
	text: string
	isOpen: boolean
}

export interface ISolutionsContentCard {
	id: string
	image: string
	title: string
	text: string
}

interface ISolutionsSingleItemContent {
	name: string
	heading: string
	image?: string
	text: string
	list?: string[]
}

export interface ISolutionsSingleItem {
	id: string
	baseRoute: string
	title: string
	content: ISolutionsSingleItemContent[]
}

export interface IInitialFormValues {
	[key: string]: string
}

export interface IItemLink {
	name: string
	route: string
}
