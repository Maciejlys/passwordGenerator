<script lang="ts">
	import { initialPassword } from '$lib/stores/password';

	function typewriter(node: any, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t: any) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	export let text: string;
</script>

{#key text}
	<p in:typewriter={{ speed: 1.5 }} class:placeholder={text === initialPassword}>
		{text}
	</p>
{/key}

<style>
	p {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
	}

	.placeholder {
		color: grey;
	}
</style>
