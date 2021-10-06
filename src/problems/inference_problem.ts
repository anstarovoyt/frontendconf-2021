function rand(): "min" | "max" {
	let result = Math.random() < 0.5 ? "min" : "max";

	return result;
}
