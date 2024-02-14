import React from "react";
import { Link } from "react-router-dom";
import {
    Grid, Container
} from '@mui/material'
import './event.css'

import tamilaruvi from '../../../images/Events/Card Illustration/tamilaruvi.png'
import aramiyam from '../../../images/Events/Card Illustration/aramiyam.png'
import pongal from '../../../images/Events/Card Illustration/pongal.png'
import vanivila from '../../../images/Events/Card Illustration/vanivila.png'
import sotkanai from '../../../images/Events/Card Illustration/sotkanai.png'
import brammam from '../../../images/Events/Card Illustration/brammam.png'
import jeevanathi from '../../../images/Events/Card Illustration/jeevanathi.png'
import kovil from '../../../images/Events/Card Illustration/kovil.png'
import ppl from '../../../images/Events/Card Illustration/ppl.png'
import foodfestival from '../../../images/Events/Card Illustration/foodfestival.png'
import blooddonation from '../../../images/Events/Card Illustration/blooddonation.png'

import Heading from "../../../shared/Heading";

const cultureEvent = [
    {
        title: 'தைப்பொங்கல் ',
        img: pongal,
        link: '/events/thaipongal',
        descriiption: 'மதபேதமின்றி சூரியனுக்கும் விளைச்சலுக்கும் உதவிய கால்நடைகளுக்கு நன்றி கூறும் முகமாக தைமாதம் பல்கலைகழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பொங்கல் பொங்கி பாரம்பரிய கலாச்சார உடையில் தீப்பண்டங்களை விருந்தோம்பல் செய்து பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் கானும்'
    },
    {
        title: 'வாணி விழா',
        img: vanivila,
        link: '/events/comingSoon',
        descriiption:'அந்திமாலைப் பொழுதிலே பல்கலைக்கழக வளாகத்தில் ஆரம்பமாகும் இவ் நிகழ்வு கல்விக்கு சரஸ்வதியும், செல்வத்திற்கு லஷ்மியும், வீரத்திற்கு துர்க்கையும் ஆகிய முப்பெரும் தேவிகளுக்கான இறை வழிபாட்டுடன் ஆரம்பமாகி இசை, நடனம், வில்லுப்பாட்டு, பல்லியம் போன்ற கலை நிகழ்ச்சிகளுடன் இரவுப்பொழுதினிலே இனிதே நிறைவேறும்'
    },
    {
        title: 'தமிழருவி',
        img: tamilaruvi,
        link: '/events/comingSoon',
        descriiption: 'தமிழ் சமூகத்தின் மிகப்பெரிய பேறுகளான கலை கல்வி மற்றும் கலாச்சாரம் ஆகியவற்றின் இன்றைய விருத்திக்கும் நாளைய இருப்பிற்கும் தூணாய் நிற்க முனையும் எம் மொறட்டுவை பல்கலைகழக தமிழ் மன்றம் வருடந்தோறும் தலைநகரில் இலட்சக்கணக்கானோர் முன்னிலையில் பிரம்மாண்டத்தின் உச்சமாக நடைபெறும் கலை நிகழ்வு "தமிழருவி" ஆகும்'
    }
]

const competiton = [
    {
        title: 'சொற்கணை',
        img: sotkanai,
        link: '/events/sotkanai-main',
        descriiption: '’’சொற்கணை’’ என்பது மாபெரும் விவாதச்சமர். இலங்கையின் 25 மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல் எனும் கணை கொண்டு களமாடும் இறுதிகட்ட விவாத சமர் தலை நகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.'
    },
    {
        title: 'பிரம்மம்',
        img: brammam,
        link: '/events/comingSoon',
        descriiption:'தமிழ் பாடசாலை மாணவர்களின் சிந்தனையாக்கம், பேச்சாற்றல், கற்பனைத்திறன், தொழில்நுட்ப ஆற்றல் போன்ற திறமைகளை வெளிக்கொணர இப்போட்டிகள் நடாத்தப்படுகிறது. இப்போட்டிகள் முற்று முழுதாக இணையவழியிலே நடத்தப்படுகிறது. மாணவர்கள் வீட்டிலிருந்தே தமது திறமைகளை வெளிக்கொணரமுடியும்'
    }
]

const guidence = [
    {
        title: 'அரமியம்',
        img: aramiyam,
        link: '/events/aramiyam',
        descriiption:'பல்கலைக்கழகம் முடித்து தொழில் மற்றும் உயர்கல்விக்கு செல்ல இருக்கும் மாணவர்களின் எதிர்காலம் தொடர்பான கலந்துரையாடல்களும் தொழில் வழிகாட்டல்களும் மொரட்டுவை பல்கலைக்கழகத்தில் கல்விகற்ற பழைய மாணவர்களால் மேற்கோள்ளப்பட்டு வருகின்றன.'
    }
]

const social = [
    {
        title: 'ஜீவநதி',
        img: jeevanathi,
        link: '/events/comingSoon',
        descriiption: 'இது மொறட்டுவைப் பல்கலைக்கழக தமிழ் இலக்கிய மன்றத்தின் ஜீவ காருண்யப் பயணம். வறுமையில் தங்கள் வாழ் நிலைகளைத் தொலைத்து விட்ட பின் தங்கிய மாவட்டத்தின் துயர் ஒழுகும் வறுமையினையும் மொறட்டுவைப் பல்கலைக்கழக தமிழ் இலக்கிய மன்றத்தின் இந்த ஜீவநதி என்ற பயணம் வெளியுலகை அறியச் செய்கிறது.'
    },
    {
        title: 'இரத்ததான முகாம் ',
        img: blooddonation,
        link: '/events/comingsSoon',
        descriiption: 'சாதி மத பேதமின்றி எமது சொந்தங்களை உதவிக்கரம் கொடுத்து உயிரை காப்பாற்றும் வகையில் மேற்கொள்ளப்பட்டு வருகின்றது. இது மன்றத்தின் சாதி மத பேதத்தை கடந்து ஒவ்வொரு வருடமும் வீரநடை போடுகின்றது.'
    },
    {
        title:'கோவில்',
        img: kovil,
        link: '/events/comingSoon',
        descriiption:'வருடந்தோறும் இரத்மலானையில் உள்ள திருநந்தீஸ்வர ஆலயத்தில் சிவராத்திரி , நவராத்திரி மற்றும் தைப்பொங்கல் பூசைகள் தமிழ் இலக்கிய மன்றத்தால் சிறப்பாக நடாத்தபட்டு வருகின்றன. இந்நேரங்களில் மாணவர்களின் இறைவழிபாடுகள் மற்றும் சிரமதான பணிகள் நடைபெறுகின்றன'
    }
]

const carnival = [
    {
        title: 'PPL',
        img: ppl,
        link: '/events/ppl',
        descriiption:'மொரட்டுவ பல்கலைக்கழக தமிழ் மாணவர்களிடையே இடைத்தொடர்புகளை ஏற்படுத்த நடாத்தப்படும் துடுப்பாட்டநிகழ்வு'
    },
    {
        title:'உணவுத் திருவிழா',
        img: foodfestival,
        link: '/events/comingSoon',
        descriiption:'எமது பாரம்பரிய உணவுகளை சகோதர மொழி மாணவர்களுடன் பகிர்ந்துண்னும் நிகழ்வு'
    }
]


function Event() {
    return (
        <>
            <div className="event-container-div" id="event">
                <Container maxWidth='lg' className="event-container" sx={{ pb: 4 }}>
                    <Heading>கலை கலாச்சார நிகழ்வுகள்</Heading>
                    <div className="intro-heading1">பல்கலையில் பயிலும் தமிழ் மாணவர்களின் இயல், இசை, நாடகம் போன்ற கலைத்திறமைகளை வெளி உலகிற்கு பறைசாற்றிட மொறட்டுவை பல்கலைக்கழக தமிழ் மாணவர்களால் கோலாகலமாக நடத்தப்படும் நிகழ்வுகள்</div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={4}
                    >
                        {cultureEvent.map((event, index) => <>
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
                <Container maxWidth='lg' className="event-container" sx={{ pb: 4 }}>
                    <Heading>போட்டிகள்</Heading>
                    <div className="intro-heading1">தமிழர் தேசம் எங்கிலும் பரந்து வாழும் பாடசாலை மாணவர்களின் பல்முக திறமைகளுக்கு களம் அமைத்து அகில இலங்கைரீதியில் அந்த சாதனை வீர்ர்களுக்கு அங்கீகாரத்தை வழங்க தமிழ் இலக்கிய மன்றத்தால் பெருமையுடன் நடாத்தபடும் போட்டிகள்</div>
                    <Grid container
                        spacing={4}
                        columns={16}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        {competiton.map((event, index) => <>
                            <Grid item xs={5}>
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
            <div>
                <Container maxWidth='lg' className="event-container" sx={{ pb: 4 }}>
                    <Heading>தொழில் வழிகாட்டுதல்</Heading>
                    <div className="intro-heading1">தாங்கள் கடந்து வந்த அனுபவங்களையும் படிப்பினைகளையும் தமது தம்பி, தங்கைகளுக்கும் கூறி அவர்களை வழிநடத்தி அவர்களின் இலக்குகளை அடைய கைகோர்க்கும் சிரேஷ்ட மாணவர்களுக்கும் பல்கலைக்கழக மாணவர்களுக்குமான உறவுப்பாலம்</div>
                    <Grid container
                        spacing={4}
                        columns={16}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        {guidence.map((event, index) => <>
                            <Grid item xs={5}>
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
            <div className="event-container-div" id="event">
                <Container maxWidth='lg' className="event-container" sx={{ pb: 4 }}>
                    <Heading>சமூக தொடர்பு</Heading>
                    <div className="intro-heading1">ஏட்டுக்கல்வி முதல் பல்கலைக்கழகம் வரை தன்னை வழிப்படுத்தி ஒரு ஆளுமை மிக்க மாணவனாய் செதுக்கி தன்னை உருவாக்கிய இந்த சமூகத்திற்கு தன்னால் முடிந்த எதோ ஒன்றை செய்தே ஆகவேன்றும் என்ற ஒரு ஏக்கத்தின் வெளிப்பாடுகள்</div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={4}
                    >
                        {social.map((event, index) => <>
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
                <Container maxWidth='lg' className="event-container" sx={{ pb: 4 }}>
                    <Heading>களியாட்டங்கள்</Heading>
                    <div className="intro-heading1">பல்கலையில் பயிலும் தமிழ் மாணவர்களின் கலைத்திறமைகளை வெளி உலகிற்கு பறைசாற்றிடும் நிகழ்வுகள் பல்கலையில் பயிலும் தமிழ் மாணவர்களின் கலைத்திறமைகளை வெளி உலகிற்கு பறைசாற்றிடும் நிகழ்வுகள்</div>
                    <Grid container
                        spacing={4}
                        columns={16}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        {carnival.map((event, index) => <>
                            <Grid item xs={5}>
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
        </>
    );
}

export default Event