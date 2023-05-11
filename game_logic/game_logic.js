export const chipsArray = ["paper", "rock", "scissor"];

//Defines who beats who. The key beats the value.
export const chipsHierarchy = {
	rock: "scissor",
	scissor: "paper",
	paper: "rock",
};

export function getWinner(playerChip, houseChip) {
	if (!chipsArray.includes(playerChip) || !chipsArray.includes(houseChip)) return "Invalid chip";

	if (playerChip === houseChip) return "draw";

	if (chipsHierarchy[playerChip] === houseChip) {
		return "player";
	}

	if (chipsHierarchy[houseChip] === playerChip) {
		return "house";
	}

	return "Oops, something went wrong.";
}
