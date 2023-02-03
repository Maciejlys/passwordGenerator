<script>
	import Card from './Card.svelte';
	import { length, options } from '../stores/options';
	import StrengthLevel from './StrengthLevel.svelte';

	let optionsAmount = 0;
	$: strength =
		optionsAmount > 0
			? $length > 5
				? Math.trunc(((optionsAmount / 4 + $length * 0.06) / 2) * 4)
				: 0
			: 0;

	options.subscribe((options) => {
		optionsAmount = Object.values(options)
			.map((option) => option.value)
			.filter(Boolean).length;
	});
</script>

<Card dark>
	<div class="container">
		<p>STRENGTH</p>
		<StrengthLevel {strength} />
	</div>
</Card>

<style>
	p {
		margin: 0;
		font-weight: 600;
		letter-spacing: 0.06em;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
