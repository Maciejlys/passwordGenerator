<script lang="ts">
	export let value = 10;
	export let min = 0;
	export let max = 100;
</script>

<div class="wrapper">
	<div class="container">
		<input type="range" class="bottom" bind:value {min} {max} />
		<input type="range" class="top" bind:value {min} {max} />
	</div>
</div>

<style>
	.container {
		position: relative;
	}

	.container > input {
		position: absolute;
	}

	input[type='range'] {
		-webkit-appearance: none;
		width: 100%;
		height: 10px;
		background: var(--dark-grey);
		outline: none;
	}

	/* Chrome */

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #fff;
		cursor: pointer;
		margin-top: -9px;
	}

	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 10px;
		cursor: pointer;
		background: var(--dark-gray);
		border-radius: 1.3px;
		border: 0.2px solid #010101;
	}

	/* Firefox */

	input[type='range']::-moz-range-track {
		width: 100%;
		height: 10px;
		cursor: pointer;
		background: var(--dark-gray);
		border-radius: 1.3px;
		border: 0.2px solid #010101;
	}

	input[type='range']::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #fff;
		cursor: pointer;
	}

	/* IE */

	input[type='range']::-ms-track {
		width: 100%;
		height: 10px;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	input[type='range']::-ms-thumb {
		width: 25px;
		height: 25px;
		background: #fff;
		cursor: pointer;
	}

	input[type='range']::-ms-track {
		width: 100%;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	input[type='range']::-ms-fill-lower {
		background: var(--green);
		border: 0.2px solid #010101;
		border-radius: 2.6px;
		box-shadow: 1px 1px 1px #0d0d0d, 0px 0px 1px #0d0d0d;
	}

	/* Trailing color */

	.bottom {
		overflow: hidden;
		z-index: 2;
	}

	.bottom::-webkit-slider-thumb {
		display: hidden;
		box-shadow: -400px 0 0 390px var(--green);
	}

	.bottom::-moz-range-thumb {
		box-shadow: -400px 0 0 390px var(--green);
	}
</style>
