<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fly, slide } from 'svelte/transition';
	import { toast } from '../stores/toast';

	let showToast = false;

	const unsub = toast.subscribe((tst) => {
		if ($toast?.message !== undefined) {
			showToast = true;
		} else {
			showToast = false;
		}
	});

	const handleClick = () => {
		toast.clear();
	};

	onDestroy(unsub);
</script>

{#if showToast}
	<button class="wrapper" transition:fly={{ y: -20 }} on:click|once={handleClick}>
		<div
			class="toast"
			class:success={$toast?.type === 'success'}
			class:error={$toast?.type === 'error'}
		>
			{$toast?.message}
		</div>
	</button>
{/if}

<style>
	button {
		appearance: none;
		background: transparent;
		outline: none;
		border: none;
		cursor: pointer;
	}

	.wrapper {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.toast {
		background-color: var(--light-grey);
		padding: 1rem 1.5rem;
		border-radius: 16px;
		font-size: 1.2rem;
		font-weight: 700;
	}

	.error {
		color: red;
	}

	.success {
		color: var(--green);
	}
</style>
