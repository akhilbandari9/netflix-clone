import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin: auto;
	max-width: 80%;
`
export const Name = styled.div`
	color: #808080;
	text-overflow: ellipsis;
	font-size: 16px;
	margin-top: 10px;
	cursor: pointer;

	&:hover {
		font-weight: bold;
		color: #e5e5e5;
	}
`

export const Title = styled.h1`
	width: 100%;
	color: white;
	font-size: 48px;
	text-align: center;
	font-weight: 500;
`
export const Picture = styled.img`
	width: 100%;
	max-width: 150px;
	height: auto;
	border: 3px solid black;
	cursor: pointer;
	border-radius: 8px;
`
export const Item = styled.div`
	max-height: 200px;
	max-width: 2000px;
	list-style-type: none;
	text-align: center;
	margin-right: 30px;

	&:hover > ${Picture} {
		border: 3px solid white;
	}

	&:hover > ${Name} {
		font-weight: bold;
		color: white;
	}

	&:last-of-type {
		margin-right: 0;
	}
`
export const List = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: row;
`
