<script>
    import Section from "./Section.svelte";

    function handleCopy() {
        navigator.clipboard.writeText('sheffira2@gmail.com');

        alert("Email successfully copied")
    }
</script>

<Section title={"Contact"} id={"contact"} className="contact">
    <div class="contact">
        <a href="https://www.linkedin.com/in/robert-sheffield-a119a9140/" target="_blank" title="LinkedIn Profile"><h3>LinkedIn</h3></a>
        <h3 on:click={handleCopy}>Email</h3>
    </div>
</Section>

<style>
    .contact {
        text-align: center;
    }

    .contact h3 {
        font-weight: 100;
        font-size: 25px;
        color: var(--light-slate);
    }

    .contact h3:hover {
        color: var(--green);
        cursor: pointer;
        transform: translateY(-10%);
        transition: all 200ms ease-in-out;
    }

    
</style>