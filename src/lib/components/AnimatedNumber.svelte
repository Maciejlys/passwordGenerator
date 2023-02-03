<script lang="ts">
	import { fly, slide } from 'svelte/transition';

	export let value = 0;
	$: first = value >= 10 ? value.toFixed(0).at(0) : 0;
	$: second = value.toFixed(0).at(-1);
</script>

<span class="number">
	{#if first !== 0}
		{#key first}
			<span in:fly={{ y: -20 }} out:slide class="first">
				{first}
			</span>
		{/key}
	{/if}
	{#key second}
		<span in:fly={{ y: -20 }} out:slide class="second">
			{second}
		</span>
	{/key}
</span>

<style>
	.number {
		position: relative;
		color: var(--green);
		font-size: 2rem;
		font-weight: 700;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	span {
		position: absolute;
	}

	.second {
		right: 0;
	}
</style>
