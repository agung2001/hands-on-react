import Home from './pages/Home';
import Modals from './pages/Modals';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Sample from './pages/Sample';
import Tasks from './pages/Tasks';

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
  {
    name: 'Modals',
    path: '/modals',
    element: Modals,
    isMenu: true,
  },
  {
    name: 'Tasks',
    path: '/tasks',
    element: Tasks,
    isMenu: true,
  },
  {
    name: 'Samples',
    path: '/samples',
    element: Sample,
    isMenu: true,
  },
  //   {
  //     name: 'NotFound',
  //     path: '*',
  //     element: NotFound,
  //     isMenu: false,
  //   },
];

export default routes;
