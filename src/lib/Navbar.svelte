<script>
    $: scrollDir = 'none';

    let oldVal = 0;
	let newVal = 0;

    var isScrolling;
    var isHovered;

    var mobileMenuActive = false;

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

        
        
        if (window.innerWidth <= 900) {
            window.scrollBy(0, -20);

        }
    }
</script>


<nav class={`navbar ${scrollDir}`} on:mouseover={handleHover} on:focus={() => {console.log("were focused")}} on:mouseleave|preventDefault={handleMouseLeave}>
    <div class="logo-container">
        <img src="./images/letter-r.png" alt="logo for my portfolio" on:click|preventDefault={() => document.body.scrollIntoView({
            behavior: "smooth"
        })} on:keydown|preventDefault={() => document.body.scrollIntoView({
            behavior: "smooth"
        })}/>
    </div>
    <ul id="nav-links">
        <li><h1><a href="#about" on:click|preventDefault={scrollIntoView}>about</a></h1></li>
        <li><h1><a href="#projects" on:click|preventDefault={scrollIntoView}>projects</a></h1></li>
        <li><h1><a href="#contact" on:click|preventDefault={scrollIntoView}>contact</a></h1></li>
        <li><h1><a href="https://pdfhost.io/v/Y.0SzicBD_robertsheffieldresume" target="_blank">resume</a></h1></li>
    </ul>
</nav>


<style>
    a {
        scroll-behavior: smooth;
        font-size: 19px;
        font-weight: 100;
    }
    :root {
        --navbar-content-offset: 22px;
    }

    
    .mobile-menu-icon {
        z-index: 30;
        width: 20px;
        height: 20px;
        top: 0;
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        position: static;
        right: 0;
    }


    .mobile-menu-icon img {
        width: 20px;
        height: 20px;
        left: 0;
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
        
    }
    
    .logo-container img {
        background-color: var(--green);
        border-radius: 70%;
        width: 35px;
        height: 35px;
        border: 2px solid var(--green);
        position: relative;
        top: 50%;
        transform: translateY(-50%);
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
    }

    .navbar a:hover {
        border: none;
    }

    .resume {
        top: 0 !important;
    }


    .navbar h1 {
        color: var(--light-slate);
        cursor: pointer;
        margin: 0;
        font-size: 19px;
        font-weight: 100;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .navbar h1:hover {
        color: var(--green);
        transition: color 200ms linear;
        
    }


    .resume-button {
        background: none;
        border-radius: 5px;
        border: 1px solid var(--green);
        color: var(--green);
        padding: .5em .8em;
        margin: 0;
        font-size: 19px;
        font-weight: 100;
    }

    @media (max-width: 900px) {
        .navbar h1 {
            font-weight: 400;
            
        }

        .logo-container {
            display: none;
        }

        .navbar {
            height: 40px;
        }


        .navbar li {
            margin: 0 5px;
            font-size: 2px;
            text-align: center;
        }

        .navbar ul {
            min-width: 0;
            width: 100%;
            right: 0;
            padding: 0 .5em;
            top: 0;
        }

        .down {
            transform: translateY(0);
            box-shadow: 0 10px 30px -10px var(--navy-shadow);
        }


    }
</style>