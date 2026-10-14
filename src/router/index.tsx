import { createBrowserRouter, type RouteObject } from 'react-router-dom'; // change this
import Drawer from '../pages/navigation/drawer';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Drawer />,
    
  },
];

export const router = createBrowserRouter(routes);