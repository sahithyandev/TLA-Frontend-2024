import React from "react";
import {
    Grid, Container
} from '@mui/material'
import Heading from "../../../../shared/Heading";
import ImageGallery from "../../../../shared/imageGallery/ImageGallery";
import './kovilGallery.css'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const images = [
    {
        img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/335360128_118435884526103_876307056654754001_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGpQd6Uu2T_QqEY9i17DqsOwnsfA8Q7n_zCex8DxDuf_GQoVCE9TYUELV5jlFfzk90UpXRIVd4IKZW2hEP5cx6u&_nc_ohc=zS5qPJx9NNoAX822I63&_nc_ht=scontent-sin6-4.xx&oh=00_AfBi559F6LRLwd4WHqJCaVWKInOIQ0egsoSDyHeIU8UV6Q&oe=65C275B4",
        thumbnail: 'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/335360128_118435884526103_876307056654754001_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGpQd6Uu2T_QqEY9i17DqsOwnsfA8Q7n_zCex8DxDuf_GQoVCE9TYUELV5jlFfzk90UpXRIVd4IKZW2hEP5cx6u&_nc_ohc=zS5qPJx9NNoAX822I63&_nc_ht=scontent-sin6-4.xx&oh=00_AfBi559F6LRLwd4WHqJCaVWKInOIQ0egsoSDyHeIU8UV6Q&oe=65C275B4',
    },
    {
        img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/332923437_561716832654041_6185834124642505927_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeG9RGhWGJZzIaM_WfaQw2sr8LBhYnJ3FEXwsGFicncURfLXzAcyzAtVUgQu86fg7N43xyilpB1shLM01YRc8BS2&_nc_ohc=zMsUfKV9tyEAX9TivW8&_nc_ht=scontent-sin6-4.xx&oh=00_AfCi8EX6i6nrpowIhe07MyXFKrQ3IGY4BkXaQ-P7NpFh_w&oe=65C1EA30",
        thumbnail: 'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/332923437_561716832654041_6185834124642505927_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeG9RGhWGJZzIaM_WfaQw2sr8LBhYnJ3FEXwsGFicncURfLXzAcyzAtVUgQu86fg7N43xyilpB1shLM01YRc8BS2&_nc_ohc=zMsUfKV9tyEAX9TivW8&_nc_ht=scontent-sin6-4.xx&oh=00_AfCi8EX6i6nrpowIhe07MyXFKrQ3IGY4BkXaQ-P7NpFh_w&oe=65C1EA30',
    },
    {
        img:'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/72944010_2525166951051325_7425467154444582912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeGy5z1jzxSwxAgEkdsYdf6-HTr7IVmV9lEdOvshWZX2UX5-QOZwdATUKEfC9AGnLrlL3KZLHyKKnqiatV51uB4C&_nc_ohc=ljJrwbXT9eQAX-5klNe&_nc_ht=scontent-sin6-4.xx&oh=00_AfBhimIDJEx4NW7H-V0Z9P2EkWslLILY2q-X3dHbhZTfWA&oe=65E490B4',
        thumbnail:'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/72944010_2525166951051325_7425467154444582912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeGy5z1jzxSwxAgEkdsYdf6-HTr7IVmV9lEdOvshWZX2UX5-QOZwdATUKEfC9AGnLrlL3KZLHyKKnqiatV51uB4C&_nc_ohc=ljJrwbXT9eQAX-5klNe&_nc_ht=scontent-sin6-4.xx&oh=00_AfBhimIDJEx4NW7H-V0Z9P2EkWslLILY2q-X3dHbhZTfWA&oe=65E490B4'
    },
    {
        img: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/335495695_3497234193833298_4917621733695972684_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEPkq-Ce5InXV_EVs7rrPWYwTPstt9YGx_BM-y231gbH_x0AAiUTBTs8xPQlsPNdTT_dxKDRKDhyfdAj-dtaM2m&_nc_ohc=yF1Om_L8SN4AX8BbE7D&_nc_ht=scontent-sin6-1.xx&oh=00_AfCDAhfJlWc062Bj583h1FjwII_SAByv4nVaxHb2Jt68Ug&oe=65C1C379",
        thumbnail: 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/335495695_3497234193833298_4917621733695972684_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEPkq-Ce5InXV_EVs7rrPWYwTPstt9YGx_BM-y231gbH_x0AAiUTBTs8xPQlsPNdTT_dxKDRKDhyfdAj-dtaM2m&_nc_ohc=yF1Om_L8SN4AX8BbE7D&_nc_ht=scontent-sin6-1.xx&oh=00_AfCDAhfJlWc062Bj583h1FjwII_SAByv4nVaxHb2Jt68Ug&oe=65C1C379',
    },
    {
        img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/335476777_1215594089079628_4383884728123261215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEOiCiRHqiHx10U3xsn_T7gdAo12sTCBnx0CjXaxMIGfOTW35AT08R-GRzZNiHk_h9gateZ23mlxOQzgqq9poBo&_nc_ohc=nBsYkVsuXHYAX9OUapp&_nc_ht=scontent-sin6-4.xx&oh=00_AfBl9hbj6xOi94G70kKdM3h0ylSnMK1dB3QJQ5EJ9UJMSg&oe=65C1ADA0",
        thumbnail: 'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/335476777_1215594089079628_4383884728123261215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEOiCiRHqiHx10U3xsn_T7gdAo12sTCBnx0CjXaxMIGfOTW35AT08R-GRzZNiHk_h9gateZ23mlxOQzgqq9poBo&_nc_ohc=nBsYkVsuXHYAX9OUapp&_nc_ht=scontent-sin6-4.xx&oh=00_AfBl9hbj6xOi94G70kKdM3h0ylSnMK1dB3QJQ5EJ9UJMSg&oe=65C1ADA0',
    },
    {
        img:'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/72168759_2525159854385368_2647626636794527744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHnsh_7iNcC7uJ2rlwR0PZ33HDBswGdegDccMGzAZ16APgJ0M32nc0eUd9kk6LwsMF9_woubN2LMo8jrCpPtcjg&_nc_ohc=zp1ML7Jr-pYAX8OdWod&_nc_ht=scontent-sin6-3.xx&oh=00_AfAquuho-nxisqHOqBnoP2ySUPjWPK047OnYONgrMYlj6g&oe=65E4AA28',
        thumbnail:'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/72168759_2525159854385368_2647626636794527744_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHnsh_7iNcC7uJ2rlwR0PZ33HDBswGdegDccMGzAZ16APgJ0M32nc0eUd9kk6LwsMF9_woubN2LMo8jrCpPtcjg&_nc_ohc=zp1ML7Jr-pYAX8OdWod&_nc_ht=scontent-sin6-3.xx&oh=00_AfAquuho-nxisqHOqBnoP2ySUPjWPK047OnYONgrMYlj6g&oe=65E4AA28'
    },
    {
        img: 'https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/335599301_934644614408224_5414829723221379103_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEEOHqGvYujdVUTvi-EysjXaxkWOhGHsa1rGRY6EYexrfrbXCVfra5Bm3ScJ4MEgrB7z7INeQyCUriHKLGNB93z&_nc_ohc=-s-zDfruWBYAX-R3czL&_nc_oc=AQk2zjX9kMinekGWNOVVDrL614nwY9-Ed4jDUTQz7AH_LrRQqVQqzZwFcPNSPjz2XXlyx1FQd-anSzg7S0tWquHS&_nc_ht=scontent-sin6-3.xx&oh=00_AfD3sNt-kc1T_2N71LdSzrKFibPAyeeMyry8PkxDxyiG8Q&oe=65C1BC14',
        thumbnail: 'https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/335599301_934644614408224_5414829723221379103_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEEOHqGvYujdVUTvi-EysjXaxkWOhGHsa1rGRY6EYexrfrbXCVfra5Bm3ScJ4MEgrB7z7INeQyCUriHKLGNB93z&_nc_ohc=-s-zDfruWBYAX-R3czL&_nc_oc=AQk2zjX9kMinekGWNOVVDrL614nwY9-Ed4jDUTQz7AH_LrRQqVQqzZwFcPNSPjz2XXlyx1FQd-anSzg7S0tWquHS&_nc_ht=scontent-sin6-3.xx&oh=00_AfD3sNt-kc1T_2N71LdSzrKFibPAyeeMyry8PkxDxyiG8Q&oe=65C1BC14',
    },
    {
        img: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/332656887_1421957561944209_7902687461176327970_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEnuo-TbSBXtsWKRmKecp1hx0CGHPSiD8XHQIYc9KIPxWWlHXN2KYjM3hVcgOGE0Gp7QXSLYW6UetpuW_jxsSjE&_nc_ohc=HA5nmjc62qwAX_1RnaB&_nc_ht=scontent-sin6-1.xx&oh=00_AfBFGFMOB8Ec7FgL7RHhZkwYUhufrz33z695AFxpGKEs4Q&oe=65C2EB04",
        thumbnail: 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/332656887_1421957561944209_7902687461176327970_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEnuo-TbSBXtsWKRmKecp1hx0CGHPSiD8XHQIYc9KIPxWWlHXN2KYjM3hVcgOGE0Gp7QXSLYW6UetpuW_jxsSjE&_nc_ohc=HA5nmjc62qwAX_1RnaB&_nc_ht=scontent-sin6-1.xx&oh=00_AfBFGFMOB8Ec7FgL7RHhZkwYUhufrz33z695AFxpGKEs4Q&oe=65C2EB04',
    },
    {
        img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/332843518_598451911668048_5449875116358063376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeE_satctgTJb44VAhroMtcminD1OG-SW22KcPU4b5Jbbe0aUPLUvrkB4KQFaeLEFjspQa6HTpcihY4ar96sksvc&_nc_ohc=6CBOu9T_swQAX_7z4AR&_nc_ht=scontent-sin6-4.xx&oh=00_AfC3HRt7aS8pP_K9md8kQmHfRxfaC4xfWmRRgYrxiL8REA&oe=65C2E076",
        thumbnail: 'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/332843518_598451911668048_5449875116358063376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeE_satctgTJb44VAhroMtcminD1OG-SW22KcPU4b5Jbbe0aUPLUvrkB4KQFaeLEFjspQa6HTpcihY4ar96sksvc&_nc_ohc=6CBOu9T_swQAX_7z4AR&_nc_ht=scontent-sin6-4.xx&oh=00_AfC3HRt7aS8pP_K9md8kQmHfRxfaC4xfWmRRgYrxiL8REA&oe=65C2E076',
    },
    {
        img:'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/72692177_2525158131052207_2876845352005140480_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEC-bi780lUxvnQ_y4cGlHP4JPRJtFb_MXgk9Em0Vv8xehEw3s4FzNHg6t_QwU1baNSvf_QQfAH2B-nm2woYlWf&_nc_ohc=D2Nb8l8F40kAX9s_fQu&_nc_ht=scontent-sin6-2.xx&oh=00_AfBKr759OhOhaKDseS8C553LAxe7nYe4vu7zHAUcjP_INA&oe=65E497FE',
        thumbnail:'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/72692177_2525158131052207_2876845352005140480_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEC-bi780lUxvnQ_y4cGlHP4JPRJtFb_MXgk9Em0Vv8xehEw3s4FzNHg6t_QwU1baNSvf_QQfAH2B-nm2woYlWf&_nc_ohc=D2Nb8l8F40kAX9s_fQu&_nc_ht=scontent-sin6-2.xx&oh=00_AfBKr759OhOhaKDseS8C553LAxe7nYe4vu7zHAUcjP_INA&oe=65E497FE'
    },
    {
        img: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/332786163_3842955935931295_1630168182813088901_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGOk92hLlCUtAilv5zZdWEpUO99NQOMuL5Q7301A4y4vigj9ZBW_CJY1WpVMTFu5WJ3zFg72FeQkjlfKcscErbr&_nc_ohc=IUE4SbqZyZUAX_G5_jh&_nc_ht=scontent-sin6-3.xx&oh=00_AfA_2mMKzdlFDgPe_zQuRt0t-2Wsrpxq8cXjeu_xkCmqZw&oe=65C25D19",
        thumbnail: 'https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/332786163_3842955935931295_1630168182813088901_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGOk92hLlCUtAilv5zZdWEpUO99NQOMuL5Q7301A4y4vigj9ZBW_CJY1WpVMTFu5WJ3zFg72FeQkjlfKcscErbr&_nc_ohc=IUE4SbqZyZUAX_G5_jh&_nc_ht=scontent-sin6-3.xx&oh=00_AfA_2mMKzdlFDgPe_zQuRt0t-2Wsrpxq8cXjeu_xkCmqZw&oe=65C25D19',
    },
    
]




function KovilGallery() {
    return (
        <div className="gallery-container-div">
            <Container maxWidth='lg' className="gallery-container">
                <Heading >கலை காட்சி கூடம்</Heading>
                <ImageGallery images={images} />
            </Container>
        </div>
    );
}

export default KovilGallery