<script lang="ts">
	export let label: string;
</script>

<div class="container">
	<button on:click>{label}</button>
</div>

<style>
	button {
		width: 100%;
		text-transform: uppercase;
		font-size: 18px;
		background-color: var(--green);
		color: #fff;
		border: none;
		padding: 1rem 2rem;
		color: black;
		cursor: pointer;
	}

	button:hover {
		background-color: var(--dark-gray);
		color: var(--green);
		outline: 1px solid var(--green);
	}
</style>
