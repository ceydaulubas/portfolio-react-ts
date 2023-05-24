import { projectImage } from '../../assets/common/links';
const { blackJack, petAdopt, Tmbd, codeChat, halloweenShake, gipgy, weatherApi, easyInsurance, todoList, spaceX, shoppingCart, HappyCelebrationsHub, galleryWebPage } = projectImage;

export const projects = [
  {
    id: '11',
    photo: HappyCelebrationsHub,
    title: 'Happy Celebrations Hub!',
    year: 2023,
    description: '  Developed a web-based platform utilizing the Chat GPT API to generate and send personalized celebration messages, enhancing user engagement and helping busy individuals commemorate special occasions for their loved ones.',
    stack: 'React, Javascript, Bootstrap, MongoDB, Mongoose, Express.js, Node.js',
    github: 'https://github.com/ceydaulubas/suprise-fullstack-app-frontend',
    github2: 'https://github.com/ceydaulubas/suprise-fullstack-app',
    type: 'FullStack'
  },
  {
    id: '1',
    photo: petAdopt,
    title: 'Pet Adopt',
    year: 2020,
    description: '  This website provides easy access and adoption to cats and dogs waiting for adoption.',
    stack: 'MongoDB, Mongoose, Express.js, React, Node.js',
    github: 'https://github.com/ceydaulubas/petAdopt',
    type: 'FullStack'
  },
  {
    id: '3',
    photo: spaceX,
    title: 'SpaceX App',
    year: 2023,
    description: 'This web application allows users to search for upcoming SpaceX launches by the date and name of each launch. Also gives general information about SpaceX.',
    stack: 'React Js, Axios, Tailwind',
    github: 'https://github.com/ceydaulubas/my-spacex-app-react',
    website: 'https://my-spacex-app-react.netlify.app/',
    type: 'Frontend'
  },
  {
    id: '4',
    photo: shoppingCart,
    title: 'Shopping Cart',
    year: 2023,
    description: 'This project helps us filter items according to description, or tags. Moreover, you can add/remove the items to/from the shopping cart. It calculates the total amount of the cart.',
    stack: 'React, Typescript, Context, Bootstrap',
    github: 'https://github.com/ceydaulubas/shopping-cart',
    type: 'Frontend'
  },
  {
    id: '12',
    photo: galleryWebPage,
    title: 'Gallery Web Page',
    year: 2023,
    description: 'This project helps us filter items according to description, or tags. Moreover, you can add/remove the items to/from the shopping cart. It calculates the total amount of the cart.',
    stack: 'React, Javascript, Bootstrap',
    github: 'https://github.com/ceydaulubas/gallery-webpage-js',
    website: 'https://gallery-webpage-js.vercel.app/',
    type: 'Frontend'
  },
  {
    id: '0',
    photo: blackJack,
    title: 'Black Jack',
    year: 2020,
    description: 'Blackjack is a casino banking game.',
    stack: 'Pure Javascript',
    github: 'https://github.com/ceydaulubas/blackjack-game',
    website: 'https://blackjack-purejs.netlify.app/index.html',
    type: 'Game'
  },
  {
    id: '5',
    photo: weatherApi,
    title: 'Weather Forecast',
    year: 2021,
    description: 'Weather forecast website gives information about weather like current weather, coming days weather, min-max temperatures, etc.',
    stack: 'React Js, Axios, CSS',
    github: 'https://github.com/ceydaulubas/reactjs-weather-api',
    type: 'Frontend'
  },
  {
    id: '6',
    photo: Tmbd,
    title: 'TMBD Page',
    year: 2021,
    description: 'TMDB is a web page',
    stack: ' React Js, TMBD Api, Axios, SCSS, Material UI and bootstrap',
    github: 'https://github.com/ceydaulubas/TMDb-react-api',
    type: 'Frontend'
  },
  {
    id: '7',
    photo: todoList,
    title: 'ToDoList',
    year: 2021,
    description: 'The first project that I created using the Angular framework and mocked JSON file.',
    stack: ' Typecript, SCSS, Angular CLI',
    github: 'https://github.com/ceydaulubas/ToDoList-Angular-CLI-FakeBackEnd',
    type: 'FullStack'
  },
  {
    id: '8',
    photo: easyInsurance,
    title: 'Easy Insurance',
    year: 2021,
    description:
      ' Easy Insurance is an application that can see all invoices and add new invoices. Thanks to the filter feature people can filter and see invoices that they want to see directly.',
    stack: 'React, Webpack, Babel',
    github: 'https://github.com/ceydaulubas/react-webpack-babel',
    website: 'https://easy-insurance.netlify.app/',
    type: 'Frontend'
  },
  {
    id: '2',
    photo: codeChat,
    title: 'Code Chat',
    year: 2020,
    description: ' Social network platform for people who want to connect with other coders. - Group project in Ironhack.',
    stack: 'Node.js , Express.js, SCSS, MongoDB, Mongoose, Handlebars',
    github: 'https://github.com/eliachiarucci/codechat.git',
    type: 'FullStack'
  },
  {
    id: '9',
    photo: halloweenShake,
    title: 'Halloween Snake',
    year: 2020,
    description: ' Halloween Snake is a modified version of the Nostalgic snake game with the Halloween theme. First group project in Ironhack.',
    stack: ' Javascript, HTML, CSS',
    github: 'https://github.com/codebrokerad/halloweenSnake',
    website: 'https://codebrokerad.github.io/halloweenSnake/',
    type: 'Game'
  },
  {
    id: '10',
    photo: gipgy,
    title: 'Giphy Api',
    year: 2021,
    description: 'This app shows all gifs when you write a word that you want to see as a gif.',
    stack: 'React Js, Axios, CSS',
    github: 'https://github.com/ceydaulubas/giphy-api-react',
    website: 'https://giphy-api-react.netlify.app',
    type: 'Frontend'
  },

];
