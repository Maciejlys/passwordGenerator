import { writable } from 'svelte/store';

interface ToastOtions {
	message: string;
	duration: number;
}

function createToast() {
	const { subscribe, set } = writable<ToastOtions | null>();

	const clear = () => set(null);

	const dispatchToast = (message: string, duration = 3000) => {
		set({ message, duration });
		setTimeout(clear, duration);
	};

	return {
		subscribe,
		clear,
		dispatchToast
	};
}

export const toast = createToast();
