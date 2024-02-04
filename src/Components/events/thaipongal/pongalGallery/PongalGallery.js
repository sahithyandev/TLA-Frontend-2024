import React from "react";
import {
    Grid, Container
} from '@mui/material'
import Heading from "../../../../shared/Heading";
import ImageGallery from "../../../../shared/imageGallery/ImageGallery";
import './pongalGallery.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const images = [
    {
        img:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/325312674_486167480263202_7615301905268082255_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeG5unVkbg0iWhcPCIVEwQwAnPb9kqnjHuKc9v2SqeMe4q8Qo4O4yTBYnVYzHnGQ5kt1BY0J8ZnLohc1YP0k8C-l&_nc_ohc=NHyVEcW-dj4AX9KjEo9&_nc_oc=AQm0-pG4VEnf3c3swYq6Lv-uXAHJIFjmqbno1Xe3cT7l60QDaB25jd6Z4YD6mYszPrBasfvPZmMRSMi5mIs0sI92&_nc_ht=scontent-sin6-1.xx&oh=00_AfBLl7u3qPTmbvWcsOIjYIbycTTGCZfdvJ_X_kaqmkF3Nw&oe=65C1BD22',
        thumbnail:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/325312674_486167480263202_7615301905268082255_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeG5unVkbg0iWhcPCIVEwQwAnPb9kqnjHuKc9v2SqeMe4q8Qo4O4yTBYnVYzHnGQ5kt1BY0J8ZnLohc1YP0k8C-l&_nc_ohc=NHyVEcW-dj4AX9KjEo9&_nc_oc=AQm0-pG4VEnf3c3swYq6Lv-uXAHJIFjmqbno1Xe3cT7l60QDaB25jd6Z4YD6mYszPrBasfvPZmMRSMi5mIs0sI92&_nc_ht=scontent-sin6-1.xx&oh=00_AfBLl7u3qPTmbvWcsOIjYIbycTTGCZfdvJ_X_kaqmkF3Nw&oe=65C1BD22'
    },
    {
        img:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/325657203_476768201285258_4828018180252818768_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFnQwpl0ZsgJoLl1_ng4QDeqqWnvQXIme6qpae9BciZ7okrg2Dokgv-LEu6mmXohKtPJLWP_iao-G3mrbp0WTie&_nc_ohc=UGEGphLdJI8AX_zIIzn&_nc_ht=scontent-sin6-1.xx&oh=00_AfCJEVXDJ9dpSlR9DFRND300-FmI9JUZzE7COW6jRlMpxw&oe=65C2890C',
        thumbnail:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/325657203_476768201285258_4828018180252818768_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFnQwpl0ZsgJoLl1_ng4QDeqqWnvQXIme6qpae9BciZ7okrg2Dokgv-LEu6mmXohKtPJLWP_iao-G3mrbp0WTie&_nc_ohc=UGEGphLdJI8AX_zIIzn&_nc_ht=scontent-sin6-1.xx&oh=00_AfCJEVXDJ9dpSlR9DFRND300-FmI9JUZzE7COW6jRlMpxw&oe=65C2890C'
    },
    {
        img:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325348063_701131838310154_2734354953852833086_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFEXfyC_bnFv5zUYHUCxDKsI233Y5R6sjUjbfdjlHqyNaiv1hwZVm-sJ9PCq-GV-Wz3UsUfHDTuLUIPfFjz-Ecp&_nc_ohc=_wBxHYDmYQ0AX-gtF67&_nc_ht=scontent-sin6-4.xx&oh=00_AfDKurmfPea0ytACN-iBcH9_svhYaFdXIKDqw0dTbjz8TA&oe=65C2EBDC',
        thumbnail:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325348063_701131838310154_2734354953852833086_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFEXfyC_bnFv5zUYHUCxDKsI233Y5R6sjUjbfdjlHqyNaiv1hwZVm-sJ9PCq-GV-Wz3UsUfHDTuLUIPfFjz-Ecp&_nc_ohc=_wBxHYDmYQ0AX-gtF67&_nc_ht=scontent-sin6-4.xx&oh=00_AfDKurmfPea0ytACN-iBcH9_svhYaFdXIKDqw0dTbjz8TA&oe=65C2EBDC'
    },
    {
        img:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325358979_495014776105660_2550882055406519752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFHVOkdb5hrT9pFGvolChpZBCYRm91782sEJhGb3Xvza10Hu-ZWJiCrmDZUWuwC9pz3TJp4a1gKnRfKc328muRS&_nc_ohc=w4EowfDlAY0AX-sNZOs&_nc_ht=scontent-sin6-4.xx&oh=00_AfCU7gCv1APBgZxuNuOUwF4BXDDIAoGzygG8gjapyRoo_Q&oe=65C217FA',
        thumbnail:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325358979_495014776105660_2550882055406519752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFHVOkdb5hrT9pFGvolChpZBCYRm91782sEJhGb3Xvza10Hu-ZWJiCrmDZUWuwC9pz3TJp4a1gKnRfKc328muRS&_nc_ohc=w4EowfDlAY0AX-sNZOs&_nc_ht=scontent-sin6-4.xx&oh=00_AfCU7gCv1APBgZxuNuOUwF4BXDDIAoGzygG8gjapyRoo_Q&oe=65C217FA'
    },
    {
        img: "https://live.staticflickr.com/65535/52606422409_c381d93e2d_o.jpg",
        thumbnail: 'https://live.staticflickr.com/65535/52606422409_8599e04626_w.jpg',
    },
    {
        img:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325473160_1211010726482151_4428328995123984065_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFygr0rpta8VAQEWetXtW3SeTZHy8G2Cn15NkfLwbYKfdPimTIIcrmzLPwM6PjU9VxPhICRh0fJZQLE31X6j_Ol&_nc_ohc=NA5TIzD2LPsAX-IpLQY&_nc_ht=scontent-sin6-4.xx&oh=00_AfD6ryqGfUiqWfVDW-Qk8HsfniPNG72uVYEohIatWj0hUA&oe=65C269B3',
        thumbnail:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325473160_1211010726482151_4428328995123984065_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFygr0rpta8VAQEWetXtW3SeTZHy8G2Cn15NkfLwbYKfdPimTIIcrmzLPwM6PjU9VxPhICRh0fJZQLE31X6j_Ol&_nc_ohc=NA5TIzD2LPsAX-IpLQY&_nc_ht=scontent-sin6-4.xx&oh=00_AfD6ryqGfUiqWfVDW-Qk8HsfniPNG72uVYEohIatWj0hUA&oe=65C269B3'
    },
    {
        img: "https://live.staticflickr.com/65535/52606668793_697efab0a6_o.jpg",
        thumbnail: 'https://live.staticflickr.com/65535/52606668793_cf09949085_w.jpg',
    },
    {
        img:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/324736781_587389733181736_7674283793295925038_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGVkG8HiLFAbg6CVgMcUOteMPlfx5U80Scw-V_HlTzRJ5tOM_V3LxF-WYjQu9rY86E_aVxBpOqRG4SAcwBjyAVp&_nc_ohc=Jwq9BESGXdoAX_tGTcg&_nc_ht=scontent-sin6-1.xx&oh=00_AfDy3c9kxiKrHX_Bi8oKT2CKaJ9F8rOOn3EptJuWjlpljg&oe=65C33CC3',
        thumbnail:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/324736781_587389733181736_7674283793295925038_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGVkG8HiLFAbg6CVgMcUOteMPlfx5U80Scw-V_HlTzRJ5tOM_V3LxF-WYjQu9rY86E_aVxBpOqRG4SAcwBjyAVp&_nc_ohc=Jwq9BESGXdoAX_tGTcg&_nc_ht=scontent-sin6-1.xx&oh=00_AfDy3c9kxiKrHX_Bi8oKT2CKaJ9F8rOOn3EptJuWjlpljg&oe=65C33CC3'
    },
    {
        img: 'https://live.staticflickr.com/65535/52606422549_f8c59bac2b_o.jpg',
        thumbnail: 'https://live.staticflickr.com/65535/52606422549_f571a4b03d_w.jpg',
    },
    {
        img:'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/325431950_4194458254112163_8775243074430059246_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGuWU28c801_8Hg1lYHT8tvpCYh6iS9jLGkJiHqJL2MsdOX-8eHRJ-8RcKwxpAITTk02OwC_5xEuwjlpZIOxvXH&_nc_ohc=mdpqrxQ1i70AX-mJ4qu&_nc_ht=scontent-sin6-2.xx&oh=00_AfAzuh2JK_cZW7geDW5PvIgbfmkd4g7YrH9CMPwJ98c5_Q&oe=65C215F7',
        thumbnail:'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/325431950_4194458254112163_8775243074430059246_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGuWU28c801_8Hg1lYHT8tvpCYh6iS9jLGkJiHqJL2MsdOX-8eHRJ-8RcKwxpAITTk02OwC_5xEuwjlpZIOxvXH&_nc_ohc=mdpqrxQ1i70AX-mJ4qu&_nc_ht=scontent-sin6-2.xx&oh=00_AfAzuh2JK_cZW7geDW5PvIgbfmkd4g7YrH9CMPwJ98c5_Q&oe=65C215F7'
    },
    {
        img:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/324738804_548838733847993_4089102393768789533_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeELFLIsDLC1gO1yVeOvSrXjpxfQY3BMOWqnF9BjcEw5ammMnn4mOK5FgT3vn7KgzZzlS-9xolTGnxX91FbDD3LM&_nc_ohc=pcpUUxLMD78AX-OJ-6K&_nc_oc=AQkxlJYqXTR2HendFYrcxsEL6ax7CzHa8aTtAY7pE0yPnqOJdtLKhLtIXd-4ogjd_Ps9KQK8Icd48ZCrJujjxA8R&_nc_ht=scontent-sin6-1.xx&oh=00_AfCxIeyqvzU7EYGQMsRRyPV1aHMlhUFBwohOdnUvRz67Og&oe=65C265B4',
        thumbnail:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/324738804_548838733847993_4089102393768789533_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeELFLIsDLC1gO1yVeOvSrXjpxfQY3BMOWqnF9BjcEw5ammMnn4mOK5FgT3vn7KgzZzlS-9xolTGnxX91FbDD3LM&_nc_ohc=pcpUUxLMD78AX-OJ-6K&_nc_oc=AQkxlJYqXTR2HendFYrcxsEL6ax7CzHa8aTtAY7pE0yPnqOJdtLKhLtIXd-4ogjd_Ps9KQK8Icd48ZCrJujjxA8R&_nc_ht=scontent-sin6-1.xx&oh=00_AfCxIeyqvzU7EYGQMsRRyPV1aHMlhUFBwohOdnUvRz67Og&oe=65C265B4'
    },
    {
        img: "https://live.staticflickr.com/65535/52606166211_c84bb1ed45_o.jpg",
        thumbnail: 'https://live.staticflickr.com/65535/52606166211_1fa353177d_w.jpg',
    },
    {
        img: "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/324733197_1201849540762627_3299599145628359928_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHpmygeCGVHZxemU_t7OURMvVzF1K3QTv-9XMXUrdBO_9ZPpqwkuStTsOk5CTrf57hUOSCGxZ3hv-d8NEGCIiGU&_nc_ohc=6YrUJgqwLvIAX8_btqz&_nc_oc=AQlw39d_hignhR0-i3K0eYLB4XUqqosYBkM2hMDnxxOyWXI5BfUebz2xvbjHpCVzAerUvBEc0cVFyMMRYi9EMr-3&_nc_ht=scontent-sin6-2.xx&oh=00_AfDs2C-Ht_Acy-8UeYXqxI0cuOWASwnR_tClQuphB5wswQ&oe=65C23E01",
        thumbnail: 'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/324733197_1201849540762627_3299599145628359928_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHpmygeCGVHZxemU_t7OURMvVzF1K3QTv-9XMXUrdBO_9ZPpqwkuStTsOk5CTrf57hUOSCGxZ3hv-d8NEGCIiGU&_nc_ohc=6YrUJgqwLvIAX8_btqz&_nc_oc=AQlw39d_hignhR0-i3K0eYLB4XUqqosYBkM2hMDnxxOyWXI5BfUebz2xvbjHpCVzAerUvBEc0cVFyMMRYi9EMr-3&_nc_ht=scontent-sin6-2.xx&oh=00_AfDs2C-Ht_Acy-8UeYXqxI0cuOWASwnR_tClQuphB5wswQ&oe=65C23E01',
    },
    {
        img:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/324860543_962131381437286_7634408711924885231_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHWyDtKpoMxNYs-7JcFnppC9AEDP5p8ktX0AQM_mnyS1Vqdq6qnrWylAzBgIzevzdamzEm5XOy8nI2ERe2mfkuf&_nc_ohc=YVIlcG3G-lgAX8ulObj&_nc_ht=scontent-sin6-1.xx&oh=00_AfDV8-yQ6caZw4EhU0t4AAz_NzinGDGiLQvjIAORuL7OSA&oe=65C30007',
        thumbnail:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/324860543_962131381437286_7634408711924885231_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHWyDtKpoMxNYs-7JcFnppC9AEDP5p8ktX0AQM_mnyS1Vqdq6qnrWylAzBgIzevzdamzEm5XOy8nI2ERe2mfkuf&_nc_ohc=YVIlcG3G-lgAX8ulObj&_nc_ht=scontent-sin6-1.xx&oh=00_AfDV8-yQ6caZw4EhU0t4AAz_NzinGDGiLQvjIAORuL7OSA&oe=65C30007'
    },
    {
        img: "https://live.staticflickr.com/65535/52606586710_25fd620e61_o.jpg",
        thumbnail: 'https://live.staticflickr.com/65535/52606586710_7d732ab053_w.jpg',
    },
    {
        img:'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/324844971_1205945013692837_1662584999534205095_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFNDoubuNWVlk623sORYFaB8VKmYxmFFCXxUqZjGYUUJbQCS8hqvA3SADjJ0kUYGK9MCbTsvXmZnN2H9_Rs1KeR&_nc_ohc=4bVZSVLZr2MAX-ysaW5&_nc_ht=scontent-sin6-2.xx&oh=00_AfAn7sC-j5-2pmYR8-5okZ3enYcKcU-7SojF3UphfKBM4A&oe=65C39D34',
        thumbnail:'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/324844971_1205945013692837_1662584999534205095_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFNDoubuNWVlk623sORYFaB8VKmYxmFFCXxUqZjGYUUJbQCS8hqvA3SADjJ0kUYGK9MCbTsvXmZnN2H9_Rs1KeR&_nc_ohc=4bVZSVLZr2MAX-ysaW5&_nc_ht=scontent-sin6-2.xx&oh=00_AfAn7sC-j5-2pmYR8-5okZ3enYcKcU-7SojF3UphfKBM4A&oe=65C39D34'
    },
    {
        img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325377967_499724218959209_7056636407615124217_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeE0Jmid7aLFeI3x_UZ9JtkfFIgWWULVPCMUiBZZQtU8IydSlE7e3Ojmm4PToTzZOEYiV_BL-FeiGKQqFmgTEPRH&_nc_ohc=_E3BkCt61g8AX9JkIKw&_nc_ht=scontent-sin6-4.xx&oh=00_AfATP8NO68U25CiIroW49-KS8IJakLhf9nGJAwsJursEaw&oe=65C1FB34",
        thumbnail: 'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325377967_499724218959209_7056636407615124217_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeE0Jmid7aLFeI3x_UZ9JtkfFIgWWULVPCMUiBZZQtU8IydSlE7e3Ojmm4PToTzZOEYiV_BL-FeiGKQqFmgTEPRH&_nc_ohc=_E3BkCt61g8AX9JkIKw&_nc_ht=scontent-sin6-4.xx&oh=00_AfATP8NO68U25CiIroW49-KS8IJakLhf9nGJAwsJursEaw&oe=65C1FB34',
    },
    {
        img:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/324789270_1147831275907230_1083191004410367089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeF5Njxn1Yd-pMXGnRYk8iWMzzemlaTiYo_PN6aVpOJij4HwW6zwPlhGXGh7utzJbYK1TdQsCeLHHGY8KuAtEM7j&_nc_ohc=JhXo1tAT0ZsAX-slty_&_nc_ht=scontent-sin6-4.xx&oh=00_AfCFASIQMRaSXs7CDTQkF1q0uBYi64PoMfyQ9SKZYsf32g&oe=65C2F24D',
        thumbnail:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/324789270_1147831275907230_1083191004410367089_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeF5Njxn1Yd-pMXGnRYk8iWMzzemlaTiYo_PN6aVpOJij4HwW6zwPlhGXGh7utzJbYK1TdQsCeLHHGY8KuAtEM7j&_nc_ohc=JhXo1tAT0ZsAX-slty_&_nc_ht=scontent-sin6-4.xx&oh=00_AfCFASIQMRaSXs7CDTQkF1q0uBYi64PoMfyQ9SKZYsf32g&oe=65C2F24D'
    },
    {
        img:"https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325445243_901633547940107_3047675843375371950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEI8sp0Y3PKVeFnMXgr4PQa5RVgQApKq1jlFWBACkqrWHdCHp1zG3ZQz-hTWYrdfmOH-z57k4R4-OZifFdeYA-t&_nc_ohc=vb3CEb27t3sAX_uCWNS&_nc_ht=scontent-sin6-4.xx&oh=00_AfDSya70xxgioUb7LpJIySYE3BKZveCqZHQQYPGwpLYhmw&oe=65C2CA46",
        thumbnail:'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/325445243_901633547940107_3047675843375371950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEI8sp0Y3PKVeFnMXgr4PQa5RVgQApKq1jlFWBACkqrWHdCHp1zG3ZQz-hTWYrdfmOH-z57k4R4-OZifFdeYA-t&_nc_ohc=vb3CEb27t3sAX_uCWNS&_nc_ht=scontent-sin6-4.xx&oh=00_AfDSya70xxgioUb7LpJIySYE3BKZveCqZHQQYPGwpLYhmw&oe=65C2CA46'
    },
]




function PongalGallery() {
    return (
        <div className="gallery-container-div">
            <Container maxWidth='lg' className="gallery-container">
                <Heading >கலை காட்சி கூடம்</Heading>
                <ImageGallery images={images} />
            </Container>
        </div>
        // <Container maxWidth='lg'>
        //     <Heading >கலை காட்சி கூடம்</Heading>
        //     <ImageList
        //         variant="quilted"
        //         cols={4}
        //         rowHeight={300}
        //     >
        //         {images.map((item) => (
        //             <ImageListItem key={item.img} 
        //                 sx={{ m: 0.5, borderRadius: '50%' }}
        //                 >
        //                 <img className="gallery-images"
        //                     {...srcset(item.img, 121)}
        //                     //  alt={images.title}
        //                     loading="lazy"
        //                 />
        //             </ImageListItem>
        //         ))}

        //         {/* <div style={{ height: '10vh' }}></div> */}
        //     </ImageList>
        // </Container>
    );
}

export default PongalGallery