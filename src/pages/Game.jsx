/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import GameTable from "../components/GameTable/GameTable";
import ScoreTable from "../components/ScoreTable/ScoreTable";
import "./Game.css";
import RulesModal from "../components/RulesModal/RulesModal";

export default function Game() {
	const [score, setScore] = useState(JSON.parse(localStorage.getItem("score")) || 0);
	const [showRules, setShowRules] = useState(false);

	useEffect(() => {
		localStorage.setItem("score", JSON.stringify(score));
	}, [score]);

	return (
		<main>
			<div className="container game-page-container">
				<ScoreTable score={score} setScore={setScore} />
				<GameTable setScore={setScore} />
				<div className="rules-btn-wrapper">
					<PrimaryBtn
						content="Rules"
						style={{ maxWidth: "120px" }}
						onClick={() => setShowRules((prev) => !prev)}
					/>
				</div>
				{showRules && <RulesModal showRules={showRules} setShowRules={setShowRules} />}
			</div>
		</main>
	);
}
