import React from "react";
import { Link } from "react-router-dom";
import {
    Grid, Container
} from '@mui/material'
import './event.css'
import img from '../../../images/Events/Card Illustration/ani1.png'
import img2 from '../../../images/Events/Card Illustration/ani2.png'
import img3 from '../../../images/Events/Card Illustration/ani3.png'
import img4 from '../../../images/Events/Card Illustration/ani4.png'
import img5 from '../../../images/Events/Card Illustration/ani5.png'
import img6 from '../../../images/Events/Card Illustration/ani6.png'
import Heading from "../../../shared/Heading";

const event = [
    {
        title: 'தைப்பொங்கல் ',
        img: img4,
        link: '/events/thaipongal',
        descriiption: 'மதபேதமின்றி சூரியனுக்கும் விளைச்சலுக்கும் உதவிய கால்நடைகளுக்கு நன்றி கூறும் முகமாக தைமாதம் பல்கலைகழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பொங்கல் பொங்கி பாரம்பரிய கலாச்சார உடையில் தீப்பண்டங்களை விருந்தோம்பல் செய்து பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் கானும்'
    },
    {
        title: 'சொற்கணை',
        img: img,
        link: '/events/sotkanai',
        descriiption: '’’சொற்கணை’’ என்பது மாபெரும் விவாதச்சமர். இலங்கையின் 25 மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல் எனும் கணை கொண்டு களமாடும் இறுதிகட்ட விவாத சமர் தலை நகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.'
    },
    {
        title: 'தமிழருவி',
        img: img2,
        link: '/events/comingSoon',
        descriiption: 'தமிழ் சமூகத்தின் மிகப்பெரிய பேறுகளான கலை கல்வி மற்றும் கலாச்சாரம் ஆகியவற்றின் இன்றைய விருத்திக்கும் நாளைய இருப்பிற்கும் தூணாய் நிற்க முனையும் எம் மொறட்டுவை பல்கலைகழக தமிழ் மன்றம் வருடந்தோறும் தலைநகரில் இலட்சக்கணக்கானோர் முன்னிலையில் பிரம்மாண்டத்தின் உச்சமாக நடைபெறும் கலை நிகழ்வு "தமிழருவி" ஆகும்'
    },
    {
        title: 'ஒளிச்சுவடு',
        img: img3,
        link: '/events/comingSoon',
        descriiption: 'எமது தொழில்நுட்ப பல்கலைக்கழகத்தில் மாணவர்களின் தொழிநுட்ப துறை சார்ந்து மட்டுமல்லாது கலைதுறையில் ஆர்வம் காட்டத்துடிக்கும் மாணவர்களின் திறமைகளுக்கு முன்னுரிமை கொடுத்து அவர்களது அருமையை வெளிக்கொணரும் ஒளிப்பட போட்டியே "ஒளிச்சுவடு" ஆகும்'
    },
    {
        title: 'இரத்ததான முகாம் ',
        img: img5,
        link: '/events/aramiyam',
        descriiption: 'சாதி மத பேதமின்றி எமது சொந்தங்களை உதவிக்கரம் கொடுத்து உயிரை காப்பாற்றும் வகையில் மேற்கொள்ளப்பட்டு வருகின்றது. இது மன்றத்தின் சாதி மத பேதத்தை கடந்து ஒவ்வொரு வருடமும் வீரநடை போடுகின்றது.'
    },
    {
        title: 'ஜீவநதி',
        img: img6,
        link: '/events/comingSoon',
        descriiption: 'இது மொறட்டுவைப் பல்கலைக்கழக தமிழ் இலக்கிய மன்றத்தின் ஜீவ காருண்யப் பயணம். வறுமையில் தங்கள் வாழ் நிலைகளைத் தொலைத்து விட்ட பின் தங்கிய மாவட்டத்தின் துயர் ஒழுகும் வறுமையினையும் மொறட்டுவைப் பல்கலைக்கழக தமிழ் இலக்கிய மன்றத்தின் இந்த ஜீவநதி என்ற பயணம் வெளியுலகை அறியச் செய்கிறது.'
    },
    //  {
    //     title: 'சொற்கணை',
    //     img: img,
    //     descriiption: '’’சொற்கணை’’ என்பது மாபெரும் விவாதச்சமர். இலங்கையின் 25 மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல் எனும் கணை கொண்டு களமாடும் இறுதிகட்ட விவாத சமர் தலை நகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.'
    // },
    // {
    //     title: 'தமிழருவி',
    //     img: img2,
    //     descriiption: 'தமிழ் சமூகத்தின் மிகப்பெரிய பேறுகளான கலை கல்வி மற்றும் கலாச்சாரம் ஆகியவற்றின் இன்றைய விருத்திக்கும் நாளைய இருப்பிற்கும் தூணாய் நிற்க முனையும் எம் மொறட்டுவை பல்கலைகழக தமிழ் மன்றம் வருடந்தோறும் தலைநகரில் இலட்சக்கணக்கானோர் முன்னிலையில் பிரம்மாண்டத்தின் உச்சமாக நடைபெறும் கலை நிகழ்வு "தமிழருவி" ஆகும்'
    // },
]





function Event() {
    return (
        <div className="event-container-div" id="event">
            <Container maxWidth='lg' className="event-container" sx={{ pb: 4 }}>
                <Heading>எமது நிகழ்வுகள்</Heading>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={4}
                >
                    {event.map((event, index) => <>
                        <Grid item xl='4' lg='4' md='4' sm='6' xs='12' key={index} >
                            <Link to={event.link}>
                                <div className="event-card">
                                    <div className="event-card-top">
                                        <div className="event-card-title"> {event.title}</div>
                                        <div><img src={event.img} alt="" className="event-img" /></div>
                                    </div>
                                    <div className="event-heading1">{event.descriiption}</div>
                                </div>
                            </Link>
                        </Grid>
                    </>
                    )}
                </Grid>
            </Container>
        </div>
    );
}

export default Event