import { useRoutes } from 'react-router-dom';

import Home from './Pages/Home'
import Thaipongal from './Pages/Thaipongal';
import Sotkanai from './Pages/Sotkanai';
import ComingSoon from './Pages/comingSoon/ComingSoon';

function Router() {
    return (
        useRoutes([
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/events',
                children: [
                    {
                        path: 'thaipongal',
                        element: <Thaipongal />
                    },
                    {
                        path: 'sotkanai',
                        element: <Sotkanai />
                    },
                    {
                        path: 'comingSoon',
                        element: <ComingSoon />
                    },
                ]
            },
        ])
    );
}

export default Router;
