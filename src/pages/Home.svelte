<script>
    import Navbar from "../lib/Navbar.svelte";
    import About from "../lib/About.svelte";
    import Projects from "../lib/Projects.svelte";
    import Contact from "../lib/Contact.svelte";
</script>

<div class="home">
    <header>
		<Navbar />
	</header>
	<div class="intro" id="intro">
		<h3>My name is</h3>
        <h1 class="name">Robert Sheffield</h1>
        <h1 class="sub-header">I build web applications</h1>
	</div>
	<div class="content">
		<About />
		<Projects />
		<Contact />
	</div>
</div>

<style>

	header {
		position: sticky;
		top: 0;
		z-index: 20;
	}

	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		top: 200px;
	}

	.content::-webkit-scrollbar {
  		width: 10px;
	}

	.content::-webkit-scrollbar-track {
		background-color: var(--navy) !important;
	}


	.intro {
		display: flex;
        flex-direction: column;
        text-align: center;
		position: relative;
		top: 100px;
		z-index: -1;
	}

	.intro h1 {
		font-size: 80px;
		font-weight: 400;
        margin: 0;
	}

	.sub-header {
		color: var(--slate)
	}

	.intro h3 {
		font-size: 30px;
		color: var(--green);
		font-weight: 400;
	}

	@media (max-width: 900px) {


		.intro h1 {
			font-size: 45px;
		}

		.content {
			display: block;
			padding-bottom: 40vh;
		}
	}
</style>