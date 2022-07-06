import React from "react";
import { useRockPaperScissor } from "./useRockPaperScissor";

import { Container, Header, ScoreLabel, Main, OptionsColumn, OptionsButton } from "./RockPaperScissor.styles";

export default function RockPaperScissor() {
	const { options, optionsIcons,
		playerScore, computerScore,
		playerChoice, computerChoice,
		rounds, result,
		isPlayerWinning, isComputerWinning,
		handleClick, } = useRockPaperScissor();

	const iconSize = 85;

	return (
		<Container>
			<Header>
				<ScoreLabel>User score: <span style={{ color: isPlayerWinning ? "green" : "red" }}>{playerScore}</span></ScoreLabel>
				<h2>Rock Paper Scissor</h2>
				<ScoreLabel>Computer score: <span style={{ color: isComputerWinning ? "green" : "red" }}>{computerScore}</span></ScoreLabel>
			</Header>
			<Main>
				<OptionsColumn>
					{optionsIcons.map((Icon, index) => (
						<OptionsButton
							key={index}
							title={options[index]}
							selected={playerChoice === options[index]}
							onClick={() => handleClick(options[index])}
							disabled={false}
						>
							{<Icon size={iconSize} />}
						</OptionsButton>
					))}
				</OptionsColumn>

				{result && <p style={{ fontSize: 50 }}>{rounds} - {result}</p>}

				<OptionsColumn>
					{optionsIcons.map((Icon, index) => (
						<OptionsButton
							key={index}
							title={options[index]}
							selected={computerChoice === options[index]}
							disabled={true}
							isComputerButton={true}
						>
							{<Icon size={iconSize} />}
						</OptionsButton>
					))}
				</OptionsColumn>
			</Main>
		</Container>
	);
}
