<script>
    import { onDestroy } from "svelte";


    import Project from "./Project.svelte";
    import Section from "./Section.svelte";

    import {ProjectStore} from '../../stores/ProjectStore';

    let projects = [];

    
    const unsubscribeProjects = ProjectStore.subscribe(data => {
        projects = data;
    });

    onDestroy(() => {
        unsubscribeProjects();
    });

</script>

<Section title="projects" id="projects">
    <ul class="project-list">
        {#each projects as project}
            <li>
                <Project {project}/>
            </li>
        {/each}
    </ul>
</Section>

<style>
    .project-list { 
        list-style: none;
        width: 100%;
        flex-direction: column;
        padding: 0;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .project-list li {
        width: 100%;
    }
</style>