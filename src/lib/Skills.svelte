<div class="skills">
    <p>Here are some of the technologies I've been working with:</p>
    <ul>
        <li><p>JavaScript</p></li>
        <li><p>Svelte</p></li>
        <li><p>Rust</p></li>
        <li><p>Docker</p></li>
        <li><p>Django</p></li>
        <li><p>PostgreSQL</p></li>
        <li><p>Firebase</p></li>
        <li><p>Git</p></li>
    </ul>
</div>

<style>
    .skills {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .skills p {
        color: var(--slate);
        font-size: 20px;
        width: 58ch;
        margin: 0 auto;
    }
    .skills ul {
        width: 625px;
        padding: 0;
        margin: 20px auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        list-style-type: disc;
        color: var(--green)
    }

    .skills li {
        list-style-type: none;
        font-weight: 100;
        display: flex;
        justify-content: space-between;
    }

    .skills li p {
        color: var(--lightest-slate);
        margin: 0;
        width: 15ch
    }

    .skills li p::before {
        content: "";
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: var(--green);
        border-radius: 50%;
        margin: 0;
        margin-right: 10px;
        vertical-align: middle;
    }


    @media (max-width: 900px) {
        .skills p {
            width: 80%;
        }

        .skills ul {
            width: 80%;
        }

        .skills li p {
            color: var(--lightest-slate);
            margin: 0;  
        }

        
    }
</style>