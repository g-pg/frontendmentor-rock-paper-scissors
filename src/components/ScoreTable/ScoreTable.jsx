/* eslint-disable react/prop-types */
import "./ScoreTable.css";
import { ReactComponent as ResetIcon } from "../../assets/icon-reset.svg";
export default function ScoreTable({ score, setScore }) {
	return (
		<section>
			<div className="container">
				<div className="score-table-wrapper">
					<h1 className="game-title">
						Rock
						<br />
						Papers
						<br />
						Scissors
					</h1>
					<div className="score-wrapper">
						<h2>Score</h2>
						<h3>{score}</h3>
						<div
							className="reset-icon-wrapper"
							title="Reset score"
							onClick={() => setScore(0)}
						>
							<ResetIcon />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
