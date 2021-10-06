function concat<T extends string, Q extends string>(p: T, q: Q): `${T}${Q}` {
	return p + q as any;
}

let fooBar = "foo" + "bar";
let fooBarConcat: "foobar" = concat("foo", "bar");

"".concat()
