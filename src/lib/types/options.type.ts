export enum OptionType {
	Uppercased = 'Uppercased',
	Lowercased = 'Lowercased',
	Numbers = 'Numbers',
	Symbols = 'Symbols'
}

export type Option = {
	value: boolean;
	label: string;
};
