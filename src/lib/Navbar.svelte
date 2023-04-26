<script>
    $: scrollDir = 'none';

    let oldVal = 0;
	let newVal = 0;

    var isScrolling;
    var isHovered;

    function handleHover() {
        isHovered = true;
        scrollDir = "up";
    };

    function handleMouseLeave() {
        isHovered = false;
    };
    
    window.addEventListener('scroll', (e) => {
        newVal = -window.pageYOffset;

        window.clearTimeout(isScrolling);
        
        isScrolling = setTimeout(() => {
            if (isHovered || newVal === 0) {return};
            scrollDir = 'down';
        }, 1000);

		


        
        if (newVal === 0) {

            scrollDir = 'none';
        } else if (oldVal < newVal) {
			scrollDir = 'up';

		} else if (oldVal > newVal) {
			scrollDir = 'down';
		}

		oldVal = newVal;

	});

    



    function scrollIntoView({ target }) {
        scrollDir = "down";
        const el = document.querySelector(target.getAttribute('href'));

        if (!el) {return;}
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>


<nav class={`navbar ${scrollDir}`} on:mouseover={handleHover} on:focus={() => {console.log("were focused")}} on:mouseleave|preventDefault={handleMouseLeave}>
    <div class="logo-container">
        <img src="./images/letter-r.png" alt="logo for my portfolio" on:click|preventDefault={() => document.body.scrollIntoView({
            behavior: "smooth"
        })}/>
    </div>
    <ul>
        <li><h1><a href="#about" on:click|preventDefault={scrollIntoView}>about</a></h1></li>
        <li><h1><a href="#projects" on:click|preventDefault={scrollIntoView}>projects</a></h1></li>
        <li><h1><a href="#contact" on:click|preventDefault={scrollIntoView}>contact</a></h1></li>
        <li><a href="https://pdfhost.io/v/Y.0SzicBD_robertsheffieldresume" target="_blank"><button type="button"><h1 class='resume'>Resume</h1></button></a></li>
    </ul>
</nav>


<style>
    a {
        scroll-behavior: smooth;
    }
    :root {
        --navbar-content-offset: 22px;
    }
    


    .navbar {
        width: 100%;
        display: flex;
        top: 0;
        justify-content: space-between;
        position: sticky;
        transition: all 300ms ease-in;
        height: 85px;
        background-color: var(--navy);
        z-index: 10;
    }


    .up {
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
        transform: translateY(0);
    }

    .down { 
        transform: translateY(-100px);
    }

    .logo-container {
        position: relative;
        left: 40px;
        top: var(--navbar-content-offset)
    }
    
    .logo-container img {
        background-color: var(--green);
        border-radius: 70%;
        width: 35px;
        height: 35px;
        border: 2px solid var(--green);
    }

    .logo-container img:hover {
        cursor: pointer;
        transform: translateY(-5%);
        transition: all 200ms ease-in-out;
    }

    .navbar ul {
        margin: 0;
        height: 100%;
        position: relative;
        right: 40px;
        padding: 0;
        display: flex;
        justify-content: space-between;
        list-style: none;
        min-width: 450px;
        top: var(--navbar-content-offset)
    }

    .navbar a:hover {
        border: none;
    }

    .resume {
        top: 0 !important;
    }


    .navbar h1 {
        position: relative;
        top: .5em;
        color: var(--light-slate);
        cursor: pointer;
        margin: 0;
        font-size: 19px;
        font-weight: 100;
    }

    .navbar h1:hover {
        color: var(--green);
        transition: color 200ms linear;
        
    }


    .navbar button {
        background: none;
        border-radius: 5px;
        border: 1px solid var(--green);
        color: var(--green);
        padding: .5em .8em;
        margin: 0;
    }

    .navbar button:hover {
        color: var(--green);
        background-color: rgba(100 255 218 / .1);
        transition: all 200ms linear;
        cursor: pointer;
    }

    @media (max-width: 900px) {
        .navbar h1 {
            font-weight: 400;
        }

        .logo-container img {
            display: none;
        }


        .navbar li {
            margin: 0 5px;
        }

        .navbar ul {
            min-width: 0;
            width: 100%;
            right: 0;
            padding: 0 .5em;
        }
    }
</style>