/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from "react";
import "./GameTable.css";
import Chip from "../Chip/Chip";
import Triangle from "../../assets/bg-triangle.svg";
import { chipsArray, getWinner } from "../../../game_logic/game_logic";
import { getRandomNum } from "../../../utils/getRandomNum";
import PrimaryBtn from "../Buttons/PrimaryBtn";

export default function GameTable({ setScore }) {
	const [gameState, setGameState] = useState("choose");
	const [playerChip, setPlayerChip] = useState("");
	const [houseChip, setHouseChip] = useState("");

	const showGame = useCallback(() => {
		if (gameState === "choose") {
			return (
				<Choose
					setGameState={setGameState}
					setPlayerChip={setPlayerChip}
					setHouseChip={setHouseChip}
				/>
			);
		}
		if (gameState === "fight") {
			return (
				<Fight
					playerChip={playerChip}
					houseChip={houseChip}
					setHouseChip={setHouseChip}
					gameState={gameState}
					setGameState={setGameState}
					setScore={setScore}
				/>
			);
		}
	}, [gameState, playerChip, houseChip, setScore]);

	return (
		<section className="game-table-section">
			<div className="container">
				<div className="game-table">{showGame()}</div>
			</div>
		</section>
	);
}

export function Choose({ setGameState, setPlayerChip, setHouseChip }) {
	const [rendered, setRendered] = useState(false);
	function handleClick(chip) {
		setPlayerChip(chip);
		setGameState("fight");
		setHouseChip(chipsArray[getRandomNum(0, chipsArray.length - 1)]);
	}

	return (
		<>
			<div className="triangle-wrapper">
				<img src={Triangle} aria-hidden onLoad={() => setRendered(true)} />

				{rendered &&
					chipsArray.map((chip, i) => {
						return (
							<div
								key={i}
								className={`chip-btn ${chip}`}
								onClick={() => handleClick(chip)}
							>
								<Chip chip={chip} />
							</div>
						);
					})}
			</div>
		</>
	);
}

export function Fight({ playerChip, houseChip, setGameState, setScore }) {
	const [winner, setWinner] = useState("");
	const [alternateChips, setAlternateChips] = useState("");

	useEffect(() => {
		if (!winner) {
			for (let i = 0; i < 20; i++) {
				setTimeout(() => {
					setAlternateChips(chipsArray[i % chipsArray.length]);

					if (i === 19) {
						setAlternateChips(houseChip);
						setTimeout(() => {
							setWinner(getWinner(playerChip, houseChip));
						}, 500);
					}
				}, i * 150);
			}
		}
	}, []);

	useEffect(() => {
		if (winner === "player") {
			setScore((prev) => prev + 1);
		}
	}, [winner]);

	const outcomeText = {
		player: "You win",
		house: "You Lose",
		draw: "Draw",
	};

	return (
		<div className="battlefield-wrapper">
			<div className="column player-column">
				<h4 className="pick-title">You picked</h4>
				<div className={winner === "player" ? "winner-chip" : undefined}>
					<Chip chip={playerChip} size="big" />
				</div>
			</div>

			<div className="column outcome-column" style={{ opacity: winner ? "1" : "0" }}>
				<h4 className="outcome">{winner ? outcomeText[winner] : "You Win"}</h4>
				<PrimaryBtn
					content="Play Again"
					filled
					style={{ maxWidth: "200px" }}
					onClick={() => setGameState("choose")}
				/>
			</div>

			<div className="column house-column">
				<h4 className="pick-title">The House picked</h4>
				<div className={winner === "house" ? "winner-chip" : undefined}>
					<Chip chip={winner ? houseChip : alternateChips} size="big" />
				</div>
			</div>
		</div>
	);
}
