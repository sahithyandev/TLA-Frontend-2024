import { useRoutes } from 'react-router-dom';

import Home from './Pages/Home'
import Thaipongal from './Pages/Thaipongal';
import SotkanaiMain from './Pages/Sotkanai-main';
import SotkanaiDistrict from './Pages/Sotkanai-district';
import Aramiyam from './Pages/Aramiyam';
import Jeevanathi from './Pages/Jeevanathi';
import ComingSoon from './shared/comingSoon/ComingSoon';

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
                        path: 'sotkanai-main',
                        element: <SotkanaiMain />
                    },
                    {
                        path: 'sotkanai-district',
                        element: <SotkanaiDistrict />
                    },
                    {
                        path: 'aramiyam',
                        element: <Aramiyam />
                    },
                    {
                        path: 'jeevanathi',
                        element:<Jeevanathi/>
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
