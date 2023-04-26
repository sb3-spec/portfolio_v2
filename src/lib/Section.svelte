<script>
    export let title;
    export let id;
    export let className = '';

    
</script>

<div class={`section-container ${className}`} id={id}>
    <h1>{title}</h1>
    <div class="section-content">
        <slot>

        </slot>
    </div>
</div>


<style>
    .section-container {
        min-width: 900px;
        min-height: 40vh;
        margin: 250px auto 0 auto;
        display: flex;
        flex-direction: column;
    }

    .section-container h1 {
        margin-bottom: 35px !important;
        font-size: 40px;
        font-weight: 400;
        text-align: center;
    }

    .contact {
        margin-top: 100px !important;
    }

    .section-container h1::before {
        content: "";
        height: 1px;
        position: relative;
        top: -10px;
        left: -10px;
        width: 30%;
        background-color: var(--slate);
        max-width: 270px;
        display: inline-block;
    }

    .section-container h1::after {
        content: "";
        height: 1px;
        width: 30%; 
        top: -10px;
        right: -10px;
        position: relative;
        background-color: var(--slate);
        max-width: 270px;
        display: inline-block;
    }

    @media (max-width: 900px) {
        

        .section-container {
            min-width: 0;
            min-height: 0;
        }

        .section-container h1 {
            font-size: 25px;
        }
    }
</style>