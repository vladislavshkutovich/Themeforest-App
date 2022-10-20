import React, { useState } from 'react'
import { ButtonDefault } from '@components/ButtonDefault'
import { IHomepagePriceCard } from '@interfaces/index'
import { ReactComponent as CheckMark } from '@assets/icons/check_mark.svg'
import { ButtonsSwitch } from '@components/ButtonsSwitch'
import { Wrapper, PriceCard } from './styled'

export const HomePagePriceCard: React.FC<IHomepagePriceCard> = ({
	title,
	cost,
	description,
	key,
}) => {
	const [buttonStates, setButtonStates] = useState([true, false])
	const handleActivity = () => {
		setButtonStates(() => [!buttonStates[0], !buttonStates[1]])
	}

	return (
		<PriceCard key={key}>
			<h6>{title}</h6>
			<div>
				<p>{cost}</p>
				<ButtonsSwitch activityState={buttonStates} callback={handleActivity} />
			</div>
			<Wrapper>
				<ButtonDefault text="Choose plan" />
				<ul>
					{description.map((item) => (
						<li>
							<CheckMark />
							{item}
						</li>
					))}
				</ul>
			</Wrapper>
		</PriceCard>
	)
}
