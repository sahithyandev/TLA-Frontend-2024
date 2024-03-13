import { useRoutes } from 'react-router-dom';

import Home from './Pages/Home'
import Thaipongal from './Pages/Thaipongal';
import SotkanaiMain from './Pages/Sotkanai-main';
import SotkanaiDistrict from './Pages/Sotkanai-district';
import Aramiyam from './Pages/Aramiyam';
import Jeevanathi from './Pages/Jeevanathi';
import Kovil from './Pages/Kovil';
import ComingSoon from './shared/comingSoon/ComingSoon';
import BloodDonation from './Pages/Blood-donation';
import FoodFestival from './Pages/Food-festival';
import VaniVilla from './Pages/Vani-villa';
import Thamilaruvi from './Pages/Thamilaruvi';
import PPL from "./Pages/PPL";
import Brammam from './Pages/Brammam';
import BrammamEventAbout from './Components/events/brammam/aboutEvent/BrammamEventAbout';
import ExtraInfo from './Components/events/brammam/ExtraInfo/ExtraInfo';
import MovieNight from './Pages/Movie-night';

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
                        path:'vani-villa',
                        element:<VaniVilla/>
                    },
                    {    
                        element: <Jeevanathi />
                    },
                    {
                        path: 'kovil',
                        element: <Kovil />
                    },
                    {
                        path: 'blood-donation',
                        element: <BloodDonation />
                    },
                    {
                        path: 'food-festival',
                        element: <FoodFestival />
                    },
                    {
                        path:'thamilaruvi',
                        element:<Thamilaruvi/>

                    },
                    {
                        path: 'brammam',
                        element: <Brammam />

                    },
                    {
                        path: 'brammam/:event',
                        element: <BrammamEventAbout />

                    },
                    {
                        path: 'brammam/:event/rules',
                        element: <ExtraInfo />

                    },
                    {
                        path: 'comingSoon',
                        element: <ComingSoon />
                    },
                    {
                        path: 'ppl',
                        element: <PPL />
                    },
                    {
                        path:'movie-night',
                        element:<MovieNight/>
                    }
                ]
            },
        ])
    );
}

export default Router;
