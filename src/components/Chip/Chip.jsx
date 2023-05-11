// import { ReactComponent as PaperIcon } from "../../assets/icon-paper.svg";
import paperIcon from "../../assets/icon-paper.svg";
import scissorIcon from "../../assets/icon-scissors.svg";
import rockIcon from "../../assets/icon-rock.svg";
import "./Chip.css";
import PropTypes from "prop-types";

Chip.propTypes = {
	chip: PropTypes.string,
	size: PropTypes.string,
};

export default function Chip({ chip, size }) {
	const chipIcons = {
		paper: paperIcon,
		scissor: scissorIcon,
		rock: rockIcon,
	};

	return (
		<div className={`chip-wrapper ${size === "big" && "big"}`}>
			<div className="chip-container">
				<img src={chipIcons[chip]} alt="" />
			</div>
			<div className={`chip-border ${chip}`}></div>
			<div className={`chip-border-depth ${chip}`}></div>
		</div>
	);
}
