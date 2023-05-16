<script>
    import { onMount } from "svelte";
    import Swiper, { Navigation, Pagination } from "swiper";
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    
    export let project;
    

    onMount(() => {
        const swiper = new Swiper('.swiper-container', {
            modules: [Pagination, Navigation],
            slidesPerView: 1,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    var out = ''
                    for (let i = 1; i < total+1; i++) {
                        if (i == current) {
                            out = out + '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'" style="margin: 0 4px; cursor: pointer;"></span>';
                        } else {
                            out = out + '<span class="swiper-pagination-bullet" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'" style="margin: 0 4px; cursor: pointer"></span>';
                        }
                    };
                    return out;
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    });
</script>

<div class="swiper-outer">
    <div class="swiper swiper-container" id="swiper-container" on:scroll|preventDefault|stopPropagation={() => {
        return false;
    }}>
        <div class="swiper-wrapper">
            {#each project.img as img}
                <div class="swiper-slide">
                    <img src={img} alt={project.title} on:click={() => window.open(img)} on:keydown={() => window.open(img)}>
                </div>
            {/each}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev btn"></div>
        <div class="swiper-button-next btn"></div>
    </div>
    
    
</div>

<style>
    .swiper-outer {
        position: relative;
        overflow-y: visible !important;
    }


    .swiper-pagination {
        transform: translateY(0px);
    }


    img {
        object-fit: cover;
        width: 100%;
        cursor: pointer;
        
    }

    /* .btn {
        color: var(--green);
    } */

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

        .swiper-pagination {
            transform: translateY(2px);
        }

             
    }
</style>