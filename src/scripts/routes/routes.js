import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/search': Home,
  '/search/:id': Search,
};

export default routes;
