import { projectImage } from '../../assets/common/links';
const { blackJack, petAdopt, Tmbd, codeChat, halloweenShake, gipgy, weatherApi, easyInsurance, todoList } = projectImage;

export const projects = [
  {
    id: '0',
    photo: blackJack,
    title: 'Black Jack',
    year: '2020',
    description: 'Blackjack is a casino banking game.',
    stack: 'Pure Javascript',
    github: 'https://github.com/ceydaulubas/blackjack-game',
    website: 'https://blackjack-purejs.netlify.app/index.html',
  },
  {
    id: '1',
    photo: petAdopt,
    title: 'Pet Adopt',
    year: '2020',
    description: '  This website provides easy access and adoption to cats and dogs waiting for adoption.',
    stack: 'MongoDB, Mongoose, Express.js, React, Node.js',
    github: 'https://github.com/ceydaulubas/petAdopt',
  },
  {
    id: '2',
    photo: codeChat,
    title: 'Code Chat',
    year: '2020',
    description: ' Social network platform for people who want to connect with other coders. - Group project in Ironhack.',
    stack: 'Node.js , Express.js, SCSS, MongoDB, Mongoose, Handlebars',
    github: 'https://github.com/eliachiarucci/codechat.git'
  },
  {
    id: '3',
    photo: weatherApi,
    title: 'Weather Forecast',
    year: '2021',
    description: 'Weather forecast website gives information about weather like current weather, coming days weather, min-max temperatures, etc.',
    stack: 'React Js, Axios, CSS',
    github: 'https://github.com/ceydaulubas/reactjs-weather-api',
  },
  {
    id: '4',
    photo: Tmbd,
    title: 'TMBD Page',
    year: '2021',
    description: 'TMDB is a web page',
    stack: ' React Js, TMBD Api, Axios, SCSS, Material UI and bootstrap',
    github: 'https://github.com/ceydaulubas/TMDb-react-api',
  },
  {
    id: '5',
    photo: todoList,
    title: 'ToDoList',
    year: '2021',
    description: 'The first project that I created using the Angular framework and mocked JSON file.',
    stack: ' Typecript, SCSS, Angular CLI',
    github: 'https://github.com/ceydaulubas/ToDoList-Angular-CLI-FakeBackEnd',
  },
  {
    id: '6',
    photo: easyInsurance,
    title: 'Easy Insurance',
    year: '2021',
    description:
      ' Easy Insurance is an application that can see all invoices and add new invoices. Thanks to the filter feature people can filter and see invoices that they want to see directly.',
    stack: 'React, Webpack, Babel',
    github: 'https://github.com/ceydaulubas/react-webpack-babel',
    website: 'https://easy-insurance.netlify.app/',
  },
  {
    id: '7',
    photo: halloweenShake,
    title: 'Halloween Snake',
    year: '2020',
    description: ' Halloween Snake is a modified version of the Nostalgic snake game with the Halloween theme. First group project in Ironhack.',
    stack: ' Javascript, HTML, CSS',
    github: 'https://github.com/codebrokerad/halloweenSnake',
    website: 'https://codebrokerad.github.io/halloweenSnake/',
  },
  {
    id: '8',
    photo: gipgy,
    title: 'Giphy Api',
    year: '2021',
    description: 'This app shows all gifs when you write a word that you want to see as a gif.',
    stack: 'React Js, Axios, CSS',
    github: 'https://github.com/ceydaulubas/giphy-api-react',
    website: 'https://giphy-api-react.netlify.app',
  },
];
