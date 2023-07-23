type ParamData = {
	name: string;
	type: string;
	description: string;
};

type MethodData = {
	name: string;
	returnType: string;
	description: string;
	paramData?: ParamData[];
};

type PropertyData = {
	property: string;
	type: string;
	description: string;
};

type EnumData = {
	member: string;
	value: string;
	description: string;
};

type ConstructorData = {
	call: string;
	description: string;
	parameters?: ParamData[];
};

type ExampleData = {
	description: string;
	examples: {
		title: string;
		description: string;
		example: string;
	}[];
};

export type PrimitiveData = {
	type: string;
	description: string;
};

export type {
	ParamData,
	MethodData,
	PropertyData,
	EnumData,
	ConstructorData,
	ExampleData,
};
