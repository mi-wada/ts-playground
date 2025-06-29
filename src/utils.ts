export type Option<T> = { kind: "some"; value: T } | { kind: "none" };
export function Some<T>(value: T): Option<T> {
	return { kind: "some", value };
}
export function None<T>(): Option<T> {
	return { kind: "none" };
}

export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
export function Ok<T, E = never>(value: T): Result<T, E> {
	return { ok: true, value };
}
export function Err<T = never, E = unknown>(error: E): Result<T, E> {
	return { ok: false, error };
}
