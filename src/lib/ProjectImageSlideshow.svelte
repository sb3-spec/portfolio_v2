<script>
    import { onMount } from "svelte";
    import Swiper, { Navigation } from "swiper";
    import 'swiper/css';
    import 'swiper/css/navigation';
    
    export let project;


    onMount(() => {
        const swiper = new Swiper('.swiper-container', {
            modules: [Navigation],
            slidesPerView: 1,
            // spaceBetween: 100,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    });
</script>

<div class="swiper swiper-container">
    <div class="swiper-wrapper">
        {#each project.img as img}
            <div class="swiper-slide">
                <img src={img} alt={project.title} on:click={() => window.open(img)} on:keydown={() => window.open(img)}>
            </div>
        {/each}
    </div>
    <div class="swiper-button-prev btn"></div>
    <div class="swiper-button-next btn"></div>
</div>

<style>
    .swiper-container {
        left: 0;
        position: relative;
        width: 100%;
    }

    img {
        object-fit: cover;
        width: 100%;
        cursor: pointer;
        
    }

    @media (max-width: 900px) {
        img {
            width: 80%;
            object-fit: cover;
            position: relative;
            border-radius: 3px;
        }

        .btn {
            display: none;
        }
    }
</style>