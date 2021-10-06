declare function changeCase<T extends string, Q extends boolean>(value: T, low: Q):
	Q extends true ? Lowercase<T> : Q extends false ? Uppercase<T> : string


changeCase("FOO", true); //type "foo"
changeCase("foo", false); //type "FOO"


//good
function simpleChangeCase(value: string, low: boolean): string {
	return low ? value.toLowerCase() : value.toUpperCase();
}
