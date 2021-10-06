function test(par: unknown) {
	if (typeof par == "object") {
		console.log(par.toString());
	}
}
