<script lang="ts">
	export let label: string = 'default label';
	export let checked: boolean;
</script>

<label class="checkbox">
	<input type="checkbox" bind:checked on:change />
	<span>{label}</span>
</label>

<style>
	.checkbox {
		display: inline-flex;
		cursor: pointer;
		position: relative;
	}

	.checkbox > span {
		color: #fff;
		padding: 0.5rem 0.75rem;
	}

	.checkbox > input {
		height: 25px;
		width: 25px;
		-webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance: none;
		appearance: none;
		border: 1px solid var(--green);
		border-radius: 4px;
		outline: none;
		transition-duration: 0.3s;
		background-color: var(--dark-gray);
		cursor: pointer;
	}

	.checkbox > input:checked {
		border: 1px solid #41b883;
		background-color: var(--green);
	}

	.checkbox > input:checked + span::before {
		content: '\2713';
		display: flex;
		position: absolute;
		font-size: 26px;
		color: #000;
		left: 0.6rem;
		top: 0.1rem;
	}

	.checkbox > input:active {
		border: 2px solid var(--green);
	}
</style>
