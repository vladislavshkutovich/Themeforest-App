import { ReactNode } from 'react'

export interface IErrorBoundaryProps {
	children: ReactNode
}

export interface IErrorBoundaryState {
	hasError: boolean | string
}

export interface IMainLayout {
	children?: React.ReactNode
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

export interface IOurBlogCard {
	image: string
	date: string
	title: string
	text: string
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
