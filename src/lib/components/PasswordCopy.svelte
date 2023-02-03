<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import src from '$lib/assets/copyIcon.png';
	import { toast } from '../stores/toast';
	import { password } from '../stores/password';
	import Typewriter from './Typewriter.svelte';

	let copyButton: HTMLButtonElement;

	onMount(() => {
		copyButton.addEventListener('click', () => {
			navigator.clipboard.writeText($password);
			toast.dispatchToast({
				message: 'Password copied to clipboard!',
				type: 'success'
			});
		});
	});
</script>

<div class="container">
	<Typewriter text={$password} />
	<button bind:this={copyButton}>
		<img {src} alt="copy password" />
	</button>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.8;
	}
</style>
