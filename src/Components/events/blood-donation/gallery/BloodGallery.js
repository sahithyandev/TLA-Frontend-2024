import React from "react";
import {
    Grid, Container
} from '@mui/material'
import Heading from "../../../../shared/Heading";
import ImageGallery from "../../../../shared/imageGallery/ImageGallery";
import './bloodGallery.css'

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const images = [
    {
        img: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/36869733_2190789681155722_4724970135956226048_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeE1NOTGMEJExShAhkfxsFvA3qSoUtSmf4repKhS1KZ_igj-gpHbEweCKwoT1VrTCYtI5GQq1L7zwlzmb5XYJVM2&_nc_ohc=5f1CHMBB5LMAX-ib_h0&_nc_ht=scontent-sin6-1.xx&oh=00_AfC0L2vg24iPqguZg4ZjoVo24bYhdm53V2SnNk8lZtmncA&oe=65E4ABF8",
        thumbnail: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/36869733_2190789681155722_4724970135956226048_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeE1NOTGMEJExShAhkfxsFvA3qSoUtSmf4repKhS1KZ_igj-gpHbEweCKwoT1VrTCYtI5GQq1L7zwlzmb5XYJVM2&_nc_ohc=5f1CHMBB5LMAX-ib_h0&_nc_ht=scontent-sin6-1.xx&oh=00_AfC0L2vg24iPqguZg4ZjoVo24bYhdm53V2SnNk8lZtmncA&oe=65E4ABF8',
    },
    {
        img:'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/64518720_2439572016277486_7904370490578305024_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEPbOoLEDywXK1OK2TgAYRF_dH-79mw6wH90f7v2bDrAX1QNhJG5cblQElxxLuSZ4oNy2Abiqr9mAFYsXDI6lVH&_nc_ohc=PI9R9rw0M-4AX8f2L11&_nc_ht=scontent-sin6-2.xx&oh=00_AfDt4n8vXbCh8VSBtGzt5wMJ1hkG5CLt11V4iLIuzqpfvg&oe=65E48CDB',
        thumbnail: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/64518720_2439572016277486_7904370490578305024_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEPbOoLEDywXK1OK2TgAYRF_dH-79mw6wH90f7v2bDrAX1QNhJG5cblQElxxLuSZ4oNy2Abiqr9mAFYsXDI6lVH&_nc_ohc=PI9R9rw0M-4AX8f2L11&_nc_ht=scontent-sin6-2.xx&oh=00_AfDt4n8vXbCh8VSBtGzt5wMJ1hkG5CLt11V4iLIuzqpfvg&oe=65E48CDB'
    },
    {
        img: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/36798870_2190787214489302_153527407041576960_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHzaRaCxLTIfnOYrzYfbAxmCt9tDlCXPO8K320OUJc87zG9Mb8mpfPhE9w_-L0mIo9oDZEuoliEBYNhtuK6QqJv&_nc_ohc=nX_R1bW68YkAX9rsd-Y&_nc_ht=scontent-sin6-2.xx&oh=00_AfD7oh1juAHcNxjhdYWI-_9JJi4a4dENEDVhxXJY6dZbGA&oe=65E49F7D",
        thumbnail: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/36798870_2190787214489302_153527407041576960_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHzaRaCxLTIfnOYrzYfbAxmCt9tDlCXPO8K320OUJc87zG9Mb8mpfPhE9w_-L0mIo9oDZEuoliEBYNhtuK6QqJv&_nc_ohc=nX_R1bW68YkAX9rsd-Y&_nc_ht=scontent-sin6-2.xx&oh=00_AfD7oh1juAHcNxjhdYWI-_9JJi4a4dENEDVhxXJY6dZbGA&oe=65E49F7D',
    },
    {
        img: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/63506749_2439567352944619_5932441801146236928_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHFKnmiMTLNEYXyfZnvpI8hEnJPP-9CXSESck8_70JdIRwDJiDpxB3DkL_ejBIahaCaR2ZTZcQT5m_5l4ytoZlg&_nc_ohc=_iUPOcoKyhEAX8zkmbE&_nc_ht=scontent-sin6-2.xx&oh=00_AfDbbHAd5BBp6oJ0By6PQ1up6Yzl_NdSAkRSR-Bt5FKwbg&oe=65E49639",
        thumbnail: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/63506749_2439567352944619_5932441801146236928_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHFKnmiMTLNEYXyfZnvpI8hEnJPP-9CXSESck8_70JdIRwDJiDpxB3DkL_ejBIahaCaR2ZTZcQT5m_5l4ytoZlg&_nc_ohc=_iUPOcoKyhEAX8zkmbE&_nc_ht=scontent-sin6-2.xx&oh=00_AfDbbHAd5BBp6oJ0By6PQ1up6Yzl_NdSAkRSR-Bt5FKwbg&oe=65E49639',
    },
    {
        img: "https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/36850504_2190788997822457_6349539402544316416_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEFvNDttB_2Q-vj_X9V0xLjlIbYGhRysFqUhtgaFHKwWrW5d_0OJ1OuAAu92fMQFdkyovpfjidhddy5XFzSIl73&_nc_ohc=mR1L0JIIYtcAX9g_UeF&_nc_ht=scontent-sin6-4.xx&oh=00_AfAyRDxwyicd4uRgbFqQcQVDdvJ0E5FTjmb6HmhDQ2qOCw&oe=65E4A55A",
        thumbnail: 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/36850504_2190788997822457_6349539402544316416_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeEFvNDttB_2Q-vj_X9V0xLjlIbYGhRysFqUhtgaFHKwWrW5d_0OJ1OuAAu92fMQFdkyovpfjidhddy5XFzSIl73&_nc_ohc=mR1L0JIIYtcAX9g_UeF&_nc_ht=scontent-sin6-4.xx&oh=00_AfAyRDxwyicd4uRgbFqQcQVDdvJ0E5FTjmb6HmhDQ2qOCw&oe=65E4A55A',
    },
    {
        img: "https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/64219770_2439568942944460_6864795827202686976_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHgDjaCXz9SCi7vmZWIoYu0o1vDatyfQzWjW8Nq3J9DNbiVVx-m5yFH1d1RVjsLyUEHWuGL7rJF65M7WvxkcRdf&_nc_ohc=9Fw3Pcgp8wMAX9-OGgf&_nc_ht=scontent-sin6-4.xx&oh=00_AfB2qYD-ypSK-9Ahx3pNOohO546wrMP75nyiY2YgD-7wow&oe=65E49B04",
        thumbnail: 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/64219770_2439568942944460_6864795827202686976_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeHgDjaCXz9SCi7vmZWIoYu0o1vDatyfQzWjW8Nq3J9DNbiVVx-m5yFH1d1RVjsLyUEHWuGL7rJF65M7WvxkcRdf&_nc_ohc=9Fw3Pcgp8wMAX9-OGgf&_nc_ht=scontent-sin6-4.xx&oh=00_AfB2qYD-ypSK-9Ahx3pNOohO546wrMP75nyiY2YgD-7wow&oe=65E49B04',
    },
    {
        img: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64360661_2439574292943925_4015292374442835968_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeFqmoMZvOsGJw0ULrWjYbcZTWYa_Z9FAVlNZhr9n0UBWcaDux2gKBEdpDZ7qS6WEDB1pNuZRdNwH7DlLyc8it95&_nc_ohc=qlG54fECmkMAX_C3-Y6&_nc_ht=scontent-sin6-3.xx&oh=00_AfD6ozJ6TdKUDZOyZbY7ILPOn8I9fDnnzay86SUqh9ux2g&oe=65E49F8D",
        thumbnail: 'https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/64360661_2439574292943925_4015292374442835968_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeFqmoMZvOsGJw0ULrWjYbcZTWYa_Z9FAVlNZhr9n0UBWcaDux2gKBEdpDZ7qS6WEDB1pNuZRdNwH7DlLyc8it95&_nc_ohc=qlG54fECmkMAX_C3-Y6&_nc_ht=scontent-sin6-3.xx&oh=00_AfD6ozJ6TdKUDZOyZbY7ILPOn8I9fDnnzay86SUqh9ux2g&oe=65E49F8D',
    },
    {
        img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/64783749_2439566699611351_7964871873810923520_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeGWvQA4QUq1PTUeMd158GPT_9wuZuLbFx__3C5m4tsXH92nqLei0R58qBkZBMDyt_Pw8Cp5qO5cDErRwJc4djJr&_nc_ohc=3xJuLPV-GH4AX-khcpd&_nc_ht=scontent-sin6-1.xx&oh=00_AfCi5YDHPbxEiAxhdUcZVCtLdmKSjr53USvfRBR1svbLCA&oe=65E4AA66',
        thumbnail:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/64783749_2439566699611351_7964871873810923520_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_eui2=AeGWvQA4QUq1PTUeMd158GPT_9wuZuLbFx__3C5m4tsXH92nqLei0R58qBkZBMDyt_Pw8Cp5qO5cDErRwJc4djJr&_nc_ohc=3xJuLPV-GH4AX-khcpd&_nc_ht=scontent-sin6-1.xx&oh=00_AfCi5YDHPbxEiAxhdUcZVCtLdmKSjr53USvfRBR1svbLCA&oe=65E4AA66'
    }
]




function BloodGallery() {
    return (
        <div className="gallery-container-div">
            <Container maxWidth='lg' className="gallery-container">
                <Heading >கலை காட்சி கூடம்</Heading>
                <ImageGallery images={images} />
            </Container>
        </div>
    );
}

export default BloodGallery