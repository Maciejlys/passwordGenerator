<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import PasswordCopy from '$lib/components/PasswordCopy.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import CharacterLength from '$lib/components/CharacterLength.svelte';
	import OptionsGroup from '$lib/components/OptionsGroup.svelte';
	import PasswordStrenght from '$lib/components/PasswordStrenght.svelte';
	import { password } from '$lib/stores/password';
	import { length, options } from '$lib/stores/options';

	const handleClick = () => {
		password.generatePassword($length, $options);
	};
</script>

<svelte:head>
	<title>Password Generator</title>
	<link rel="icon" href="%sveltekit.assets%/favicon.ico" />
</svelte:head>

<Toast />
<div class="container">
	<p>Password Generator</p>
	<Card>
		<PasswordCopy />
	</Card>
	<Card>
		<CharacterLength />
		<OptionsGroup />
		<PasswordStrenght />
		<Button label="Generate" on:click={handleClick} />
	</Card>
</div>

<style>
	.container {
		width: 100%;
		max-width: 500px;
		display: grid;
		gap: 1rem;
	}

	p {
		text-align: center;
		font-weight: 600;
		letter-spacing: 0.06em;
		font-size: 1.2rem;
	}
</style>
