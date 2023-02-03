import type { Option, OptionType } from '$lib/types/options.type';
import { writable } from 'svelte/store';

const initialPassword = 'P4A$sW0rD';

function createPassword() {
	const { subscribe, set } = writable<string>(initialPassword);

	const generatePassword = (length: number, options: Record<OptionType, Option>) => {
		let charset = '';
		let passwrod = '';
		if (options.Uppercased.value) {
			charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}
		if (options.Lowercased.value) {
			charset += 'abcdefghijklmnopqrstuvwxyz';
		}
		if (options.Numbers.value) {
			charset += '0123456789';
		}
		if (options.Symbols.value) {
			charset += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
		}
		for (let i = 0, n = charset.length; i < length; ++i) {
			passwrod += charset.charAt(Math.floor(Math.random() * n));
		}
		set(passwrod);
		if (!passwrod) {
			set(initialPassword);
		}
	};

	return {
		subscribe,
		generatePassword
	};
}

export const password = createPassword();
