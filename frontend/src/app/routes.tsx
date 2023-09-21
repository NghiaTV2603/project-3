import MainLayout from '../layouts/MainLayout';
import Home from '../features/home/Home';
import NotFoundPage from '../layouts/NotFoundPage';
import SignIn from '../features/authen/SignIn';
import SignUp from '../features/authen/SignUp';
import UserSettings from '../features/settings/UserSettings';
import ServerSetting from '../features/ServerSettings';
import ChannelSetting from '../features/ChannelSettings';

interface Route {
   path: string;
   element: JSX.Element;
   children?: Route[];
}

const routes: Route[] = [
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/home',
            element: <Home />,
         },
         {
            path: '/server/*',
            element: <Home />,
         },
         {
            path: '/user-settings',
            element: <UserSettings />,
         },
         {
            path: '/server-settings',
            element: <ServerSetting />,
         },
         {
            path: '/channel-settings',
            element: <ChannelSetting />,
         },
         { path: '*', element: <NotFoundPage /> },
      ],
   },
   {
      path: '/auth',
      element: <MainLayout />,
      children: [
         { path: 'login', element: <SignIn /> },
         { path: 'register', element: <SignUp /> },
         { path: '*', element: <NotFoundPage /> },
      ],
   },
];

export default routes;
