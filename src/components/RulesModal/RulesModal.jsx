/* eslint-disable react/prop-types */
import RulesImg from "../../assets/image-rules.svg";

import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";
import "./RulesModal.css";
export default function RulesModal({ setShowRules }) {
	return (
		<>
			<div className="rules-modal-wrapper">
				<h2 className="rules-title">Rules</h2>
				<button onClick={() => setShowRules(false)}>
					<CloseIcon />
				</button>

				<img src={RulesImg}></img>
			</div>
			<div className="modal-overlay" onClick={() => setShowRules(false)}></div>
		</>
	);
}
