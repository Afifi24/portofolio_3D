import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    threejs,
    
  } from "../assets";
  import youtube from '../assets/youtube.png'
  import game from '../assets/game.png'
  import recipe from '../assets/recippe.png'
  import fitness from '../assets/fitness.png'
  import country from '../assets/country.png'
  import bank from '../assets/bank.jpeg'
  import player from '../assets/player.png'
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web development",
      icon: web,
    },
    {
      title: "Responsive design",
      icon: mobile,
    },
    {
      title: "web design",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  
  const projects = [
    {
      name: "Youtube-Clone",
      description:
        "YouTube clone built with ReactJS and Tailwind. The clone mimics the layout and functionality of the popular video-sharing platform, allowing users to search for and view videos, as well as view related videos.",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "#restapi",
          color: "green-text-gradient",
        },
        {
          name: "#tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/Afifi24/youtube-clone",
      demo:'https://youtube-clone-87kj.vercel.app/',
    },
    {
      name: "Game Finder",
      description:
        " By using the app, users can easily discover and explore various games from a variety of categories, including popular, upcoming, and new releases. The app provides users with detailed information about each game.",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "#restapi",
          color: "green-text-gradient",
        },
        {
          name: "#scss",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/Afifi24/games-app",
      demo:'https://games-app-five.vercel.app/',
    },
    {
      name: "Recipe-App",
      description:
        "Is a web app that helps users discover and explore a wide variety of recipes. The app allows users to search for recipes based on ingredients, meal types, and dietary preferences..",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "#restapi",
          color: "green-text-gradient",
        },
        {
          name: "#styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: recipe,
      source_code_link: "https://github.com/Afifi24/full-Recipe-app",
      demo:'https://full-recipe-app-three.vercel.app/'
    },
    {
      name: "fitness website",
      description:
        "The website features a user-friendly interface, allowing visitors to easily navigate through the site and find the information they need. It includes informative articles on topics such as exercise routines.",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "#styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: fitness,
      source_code_link: "https://github.com/Afifi24/newwebsite",
      demo:'https://newwebsite-eight.vercel.app/'
    },
    {
      name: "Country Explorer",
      description:
        "Web application that provides a user-friendly interface for exploring and learning about different countries around the world. The app uses the REST Countries API to display various details about each country.",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "#restapi",
          color: "green-text-gradient",
        },
        {
          name: "#Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: country,
      source_code_link: "https://github.com/Afifi24/rest-countries-api",
      demo:'https://rest-countries-api-afifi24.vercel.app/'
    },
    {
      name: "Bank modern UI",
      description:
        "Is a sleek and intuitive design that incorporates modern elements with traditional banking functionality. The navigation is user-friendly, allowing customers to easily access their account. ",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "#Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://github.com/Afifi24/bank_modern_app",
      demo:'https://bank-modern-app-sigma.vercel.app/'
    },
    {
      name: "Music-Player",
      description:
        "Is a modern music player that allows  users to listen to the music song with next, back and playlists functionality. ",
      tags: [
        {
          name: "#react",
          color: "blue-text-gradient",
        },
        {
          name: "",
          color: "green-text-gradient",
        },
        {
          name: "#Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: player,
      source_code_link: "https://github.com/Afifi24/music-app",
      demo:'https://music-app-lac.vercel.app/'
    },
  ];
  
  export { services, technologies, projects };