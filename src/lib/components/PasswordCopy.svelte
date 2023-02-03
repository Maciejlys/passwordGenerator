<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import src from '$lib/assets/copyIcon.png';
	import { toast } from '../stores/toast';
	import { password } from '../stores/password';
	import { fly, slide } from 'svelte/transition';

	let copyButton: HTMLButtonElement;

	onMount(() => {
		copyButton.addEventListener('click', () => {
			navigator.clipboard.writeText($password);
			toast.dispatchToast('Password copied to clipboard');
		});
	});
</script>

<div class="container">
	{#key $password}
		<div class="password" in:fly out:slide>{$password}</div>
	{/key}
	<button bind:this={copyButton}>
		<img {src} alt="" />
	</button>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.password {
		font-size: 1.5rem;
		font-weight: 700;
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
