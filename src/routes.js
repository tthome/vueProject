import AppHome from './pages/AppHome';
const AppMedium = () => import('./pages/AppMedium');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/medium',
        name: 'Medium',
        component: AppMedium
    }
];

export default routes;
