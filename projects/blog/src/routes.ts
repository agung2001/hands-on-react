import Home from './pages/Home';
// import Modals from './components/pages/Modals';
// import NotFound from './components/pages/NotFound';
// import Post from './components/pages/Post';
// import Posts from './components/pages/Posts';
// import Samples from './components/pages/Samples';
// import Tasks from './components/pages/Tasks';

const routes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
    isMenu: true,
  },
  //   {
  //     name: 'Posts',
  //     path: '/',
  //     element: Posts,
  //     isMenu: true,
  //   },
  //   {
  //     name: 'Post',
  //     path: '/post/:id',
  //     element: Post,
  //     isMenu: false,
  //   },
  //   {
  //     name: 'Modals',
  //     path: '/modals',
  //     element: Modals,
  //     isMenu: true,
  //   },
  //   {
  //     name: 'Tasks',
  //     path: '/tasks',
  //     element: Tasks,
  //     isMenu: true,
  //   },
  //   {
  //     name: 'Samples',
  //     path: '/samples',
  //     element: Samples,
  //     isMenu: true,
  //   },
  //   {
  //     name: 'NotFound',
  //     path: '*',
  //     element: NotFound,
  //     isMenu: false,
  //   },
];

export default routes;
