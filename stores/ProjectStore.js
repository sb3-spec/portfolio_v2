import { writable } from 'svelte/store';

export const ProjectStore = writable([
    {
        title: 'The Carbon Platform Company',
        img: ["./images/portfolio-projects/carbon_platform/the_carbon_platform_1.jpg", "./images/portfolio-projects/carbon_platform/the_carbon_platform_2.jpg"],
        description: "I'm the lead fullstack software engineer and am responsible for the \
            development and maintenance of the entirety of the site. The front end \
            is built with Svelte and leverages Algolia to provide fast search indexing. \
            The back end is powered by a Django server and PostgreSQL database, which are \
            hosted on Railway and AWS, respectively.",
        keyInfo: {
            "Hurdles": "The biggest issue that I faced was slow server response times. The culprit was a combination of inefficent SQL queries \
            and unnecessary calls to the server.",
            "Solutions":
                "One of the measures I took to reduce database query times was to cap the amount of data the server would send for different components.\
                In the future, setting up a database pool connection would also reduce load times, as opening the database for every query is expensive.",
        },
        features: [
            "Instant search/auto-complete through Algolia",
            "Calculate your carbon footprint and find products that would help lower your carbon footprint", 
            "Find articles and blogs that would help reduce your carbon footprint"
        ],
        tech: [
            "Svelte", "Django", "AWS", "Algolia", "Postgres"
        ],
        liveLink: '',
        githubLinks: {
            client: 'https://github.com/sb3-spec/eco-marketplace-web_client-v1',
            server: 'https://github.com/sb3-spec/eco-marketplace-backend-v1'
        }

        
    },
    {
        title: 'Digital Cookbook',
        img: ["./images/portfolio-projects/digital_cookbook/login.jpg", "./images/portfolio-projects/digital_cookbook/dashboard.jpg", 
        "./images/portfolio-projects/digital_cookbook/recipe-large.jpg", "./images/portfolio-projects/digital_cookbook/new_recipe.jpg"],
        description: "This is a full-stack web application I made to help keep track of the different recipes I use. \
            When cooking, I often had to sift through cooking articles to get to the recipe at the bottom. This application serves \
            to hold all the recipes you need in a centralized location. \
            The back end is powered by a Rust server and PostgreSQL database, which are \
            hosted on Railway using a Docker Image.",
        keyInfo: {
            "Hurdles": 
                "The hardest part of this project was writing the JavaScript logic for handling the addition of new steps and ingredients to the new recipe form. \
                I needed to make sure that I was able to capture all of the added input fields and format them for processing on the backend. ",
            "Solutions":
                "The only thing I needed to solve the problem was time, and I know feel much more confident in my ability to produce highly complex client side applications.\
                ",
        },
        features: [
            "Firebase authentication",
            "Create and view custom recipes", 
        ],
        tech: [
            "Svelte", "Rust", "Docker", "Firebase", "Postgres"
        ],
        liveLink: 'https://digital-cookbook.netlify.app/',
        githubLinks: {
            client: 'https://github.com/sb3-spec/cookbook-web-client',
            server: 'https://github.com/sb3-spec/cookbook_api'
        }

        

    },
    {
        title: 'Tutoring Log v2',
        img: ["./images/portfolio-projects/tutoring-portal-2/dashboard.jpg"],
        description: "This is the second iteration of the tutoring portal I made \
        to track the classes I have and the amount that my clients owe per month.",
        keyInfo: {
            "Hurdles": "At the start, the most difficult aspect was setting up the api routing to make \
            grabbing the appropriate data feel intuitive.",
            "Solutions":
                "I set up the routing so calls to a postgres model branch of \
                api would handle both the model as well as the children of the object.",
        },
        features: [
            "User authentication with Auth0",
            "Get client dues by month", 
            "Search sessions by month and year"
        ],
        tech: [
            "Svelte", "Express", "Postgres"
        ],
        liveLink: 'https://superlative-sundae-a5ee1c.netlify.app/',
        githubLinks: {
            client: 'https://github.com/sb3-spec/tutoring-portal-2-client',
            server: 'https://github.com/sb3-spec/tutoring-portal-backend'
        }

        
    },

    {
        title: 'Tutoring Log v1',
        img: ["./images/portfolio-projects/tutoring-portal-1/dashboard.jpg"],
        description: "The first iteration of my custom logging software uses Next.js for both the back and front, \
            with Redis as the database. It is used to track the classes I have and the amount that my clients owe for the month.",
        keyInfo: {
            "Hurdles": "One of the challenges I faced early in development \
            was efficiently grabbing data from the server without making repetitive \
            calls.",
            "Solutions": "My solution was making calls to the server at a central location near the root of my folder-- \
            the information would down the tree of components through props. If I were to do this again, \
            I would utilize a state manager like Redux to solve the problem more elegantly.",
        },
        features: [
            "session logging",
            "get client dues by month", 
            "search sessions by month and year"
        ],
        tech: [
            "Next", "Express", "Redis"
        ],
        link: '',
        githubLinks: {
            client: '', 
            server: "", 
            default: "https://github.com/sb3-spec/tutoring_portal"
        }   
    },

    {
        title: 'Twitter Clone',
        img: ["./images/portfolio-projects/twitter_clone/twitter_clone_home.jpg", 
         "./images/portfolio-projects/twitter_clone/twitter_clone_profile.jpg"],
        description: "Twitter clone i built.",
        keyInfo: {
            "Hurdles": "I was confused on how to handle the user's authentication state \
            to allow for automatic authentication for a period of time after the user signs in.",
            "Solutions": "To solve the problem, I leveraged Auth0's refresh web tokens to make auth requests if they were still valid.",
        },
        features: [
            "Custom tweet feed",
            "Follow recommendations", 
            "Trending Tweets"
        ],
        tech: [
            "React", "Django REST Framework", "Postgres"
        ],
        liveLink: '',
        githubLinks: {
            client: 'https://github.com/sb3-spec/twitter_clone_client',
            server: 'https://github.com/sb3-spec/twitter_clone_back'
        }

        
    }
])