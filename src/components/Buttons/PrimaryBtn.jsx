import "./PrimaryBtn.css";

export default function PrimaryBtn({ content, filled, style, onClick }) {
	return (
		<button className={`primary-btn ${filled && "filled"}`} style={style} onClick={onClick}>
			{content}
		</button>
	);
}
