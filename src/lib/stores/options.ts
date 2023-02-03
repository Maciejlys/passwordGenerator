import { OptionType, type Option } from '$lib/types/options.type';
import { writable } from 'svelte/store';

export const lenght = writable<number>(10);
export const options = writable<Record<OptionType, Option>>({
	[OptionType.Uppercased]: {
		value: false,
		label: 'Include Uppercase Letters'
	},
	[OptionType.Lowercased]: {
		value: false,
		label: 'Include Lowercase Letters'
	},
	[OptionType.Numbers]: {
		value: false,
		label: 'Include Numbers'
	},
	[OptionType.Symbols]: {
		value: false,
		label: 'Include Symbols'
	}
});
