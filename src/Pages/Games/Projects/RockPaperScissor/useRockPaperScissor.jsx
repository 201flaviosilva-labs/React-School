import { useState, useEffect } from "react";
import { GiRock, GiPaper, GiScissors } from "react-icons/gi";
import { randomInt, Games } from "201flaviosilva-utils";

export function useRockPaperScissor() {
	const options = ["Rock", "Paper", "Scissors"];
	const optionsIcons = [GiRock, GiPaper, GiScissors];

	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);

	const [rounds, setRounds] = useState(0);

	const [playerChoice, setPlayerChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);

	const [result, setResult] = useState(null);

	const isPlayerWinning = playerScore > computerScore;
	const isComputerWinning = playerScore < computerScore;


	function handleClick(option) {
		setPlayerChoice(option);
		setComputerChoice(options[randomInt(0, 2)]);
		setRounds(rounds + 1);
	}

	function formateOption(opt) {
		switch (opt) {
			case options[0]:
				return "r";
			case options[1]:
				return "p";
			case options[2]:
				return "s";
			default:
				break;
		}
	}

	function formateResult(res) {
		switch (res) {
			case 0:
				setResult("Tie");
				break;
			case 1:
				setResult("You win");
				setPlayerScore(playerScore + 1);
				break;
			case 2:
				setResult("You lose");
				setComputerScore(computerScore + 1);
				break;

			default:
				break;
		}
	}

	useEffect(() => {
		const res = Games.rockPaperScissor(formateOption(playerChoice), formateOption(computerChoice));
		formateResult(res);
	}, [rounds]);

	return {
		options, optionsIcons,
		playerScore, setPlayerScore,
		computerScore, setComputerScore,
		rounds, setRounds,
		playerChoice, setPlayerChoice,
		computerChoice, setComputerChoice,
		result, setResult,
		isPlayerWinning, isComputerWinning,
		handleClick,
	};
}
