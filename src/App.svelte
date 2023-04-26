<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/Home.svelte"
	import Image from "./pages/Image.svelte";

	
	
	const routes = {
		'/': Home,
		'/image/:image-url': Image
	}
	
</script>

<main>
	<Router routes={routes} />
</main>

<style>
	@media (max-width: 900px) {

		main {
			display: block;
		}
	}
</style>