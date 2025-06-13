type User = {
	id: number;
	age: number;
	name: string;
};

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type RequiredUser = Required<PartialUser>;
type PickedUser = Pick<User, "id" | "name">;
type OmittedUser = Omit<User, "age">;

type Union = "a" | "b" | "c";
type ExtractedUnion = Extract<Union, "a" | "b">;
type ExcludedUnion = Exclude<Union, "a" | "b">;
type NonNullableType = NonNullable<string | null | undefined>;
