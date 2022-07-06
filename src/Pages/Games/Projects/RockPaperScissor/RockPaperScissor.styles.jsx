import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

	background-color: rgba(255, 255, 255, 0.1);
`;

export const Header = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const ScoreLabel = styled.p`
	font-size: 24px;
	span{
		font-weight: "bold"
	}
`;

export const Main = styled.div`
	width: 100%;
	height: 75%;

	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const OptionsColumn = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

const OptionsButtonHoverAnimation = keyframes`
 0% { transform: rotate(0deg);}
 25% { transform: rotate(-45deg);} 
 75% { transform: rotate(45deg);} 
 100% { transform: rotate(0deg);} 
`;


const hoverStyle = css`
	&:hover {
			background-color: green;
			border: 1px solid white;
			transform: scale(1.1);
			cursor: pointer;
			animation: ${OptionsButtonHoverAnimation} 5s ease-in-out infinite;
	}
`;
const hoverStyleDisabled = css`
	&:hover {
			background-color: red;
			border: 1px solid white;
	}
`;
export const OptionsButton = styled.button`
	width: 100px;
	height: 100px;

	border: 5px solid ${props => props.selected ? "yellow" : "black"};
	border-radius: 50%;
	background-color: white;

	opacity: ${props => props.disabled ? 0.75 : 1};

	transform: scaleX(${props => props.isComputerButton ? -1 : 1});

	transition: 0.5s;

	${props => props.isComputerButton ? hoverStyleDisabled : hoverStyle}
`;
