import { writable } from 'svelte/store';

interface ToastOtions {
	message: string;
	duration?: number;
	type: 'success' | 'error';
}

const initialValues = {
	message: '',
	duration: 3000,
	type: 'success'
};

function createToast() {
	const { subscribe, set } = writable<ToastOtions | null>();

	const clear = () => set(null);

	const dispatchToast = (options: ToastOtions) => {
		set(options);
		setTimeout(clear, options.duration || initialValues.duration);
	};

	return {
		subscribe,
		clear,
		dispatchToast
	};
}

export const toast = createToast();
