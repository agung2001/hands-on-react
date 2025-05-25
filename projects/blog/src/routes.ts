import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';

// import Modals from './components/pages/Modals';
// import NotFound from './components/pages/NotFound';
// import Samples from './components/pages/Samples';
// import Tasks from './components/pages/Tasks';

const routes = [
  {
    name: 'Posts',
    path: '/',
    element: Posts,
    isMenu: true,
  },
  {
    name: 'Post',
    path: '/post/:id',
    element: Post,
    isMenu: false,
  },
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
