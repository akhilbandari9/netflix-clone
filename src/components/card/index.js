import { createContext, useContext, useState } from 'react'
import {
	Container,
	Group,
	Image,
	Meta,
	Title,
	SubTitle,
	Text,
	Feature,
	FeatureTitle,
	FeatureText,
	FeatureClose,
	Maturity,
	Content,
	Entities,
	Item,
} from './styles/card'

export const FeatureContext = createContext()

const Card = ({ children, ...restProps }) => {
	const [showFeature, setShowFeature] = useState(false)
	const [itemFeature, setItemFeature] = useState({})

	return (
		<FeatureContext.Provider
			value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
		>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	)
}

Card.Group = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
)
Card.Feature = function CardFeature({ children, category, ...restProps }) {
	const { showFeature, itemFeature, setShowFeature } =
		useContext(FeatureContext)

	return showFeature ? (
		<Feature
			src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
			{...restProps}
		>
			<Content>
				<FeatureTitle>{itemFeature.title}</FeatureTitle>
				<FeatureText>{itemFeature.description}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>
					<img src='/images/icons/close.png' alt='Close' />
				</FeatureClose>

				<Group margin='30px 0' flexDirection='row' alignItem='center'>
					<Maturity rating={itemFeature.maturity}>
						{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
					</Maturity>
					<FeatureText fontWeight='bold'>{itemFeature.genre}</FeatureText>
				</Group>
				{children}
			</Content>
		</Feature>
	) : null
}
Card.FeatureTitle = ({ children, ...restProps }) => (
	<FeatureTitle {...restProps}>{children}</FeatureTitle>
)
Card.FeatureText = ({ children, ...restProps }) => (
	<FeatureText {...restProps}>{children}</FeatureText>
)
Card.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
)
Card.SubTitle = ({ children, ...restProps }) => (
	<SubTitle {...restProps}>{children}</SubTitle>
)
Card.Entities = ({ children, ...restProps }) => (
	<Entities {...restProps}>{children}</Entities>
)
Card.Text = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
)
Card.Meta = ({ children, ...restProps }) => (
	<Meta {...restProps}>{children}</Meta>
)
Card.Item = function CardItem({ item, children, ...restProps }) {
	const { setShowFeature, setItemFeature } = useContext(FeatureContext)
	return (
		<Item
			onClick={() => {
				setItemFeature(item)
				setShowFeature(true)
			}}
			{...restProps}
		>
			{children}
		</Item>
	)
}

Card.Image = ({ ...restProps }) => <Image {...restProps} />

export default Card
