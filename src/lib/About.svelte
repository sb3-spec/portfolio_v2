<script>
    import Section from "./Section.svelte";
    import Skills from "./Skills.svelte";

</script>

<Section title="about me" id="about">
        <div class="about">
            <p>
                My name is Robert and I am a full-stack
                software engineer who works primarily
                with Node.js, Express.js, React, and Python.
                Recently, I've been using Svelte for my client apps.
                I have a solid grasp of user authentication,
                both relational and nonrelational databases,
                as well as the HTTP life cycle.
            </p>
            <Skills />
        </div>
</Section>

<style>    
    .about {
        color: var(--lightest-slate);
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .about p {
        color: var(--slate);
        font-size: 1.25em;
        margin: 0 auto;
        max-width: 58ch;
    }

    @media (max-width: 900px) { 
        .about p {
            max-width: 80%;
            font-size: 20px;
        }
    }
    
</style>