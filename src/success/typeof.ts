function test(par: number | null) {
	if (typeof par == "object") {
		console.log(par.toString());
	}
}