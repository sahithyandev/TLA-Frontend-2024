import React from "react";
import {
    Grid, Container
} from '@mui/material';
import { Link } from "react-router-dom";
import "./BrammamIntro.css"

import eluthoviyamImg from "./images/eluthoviyam.png"
import meerigaiImg from "./images/meerigai.png"
import oliSuvaduImg from "./images/oli_suvadu.png"
import solalvarImg from "./images/solvalar.png"
const BrammamIntro = () => {
    const events = [
        {
            title: "எழுத்தோவியம்",
            descriiption: "தமிழ் மாணவர்களது சிந்தனையாக்க திறனை மேம்படுத்த தமிழ் இலக்கிய மன்றத்தினால் நடத்தப்படும் கட்டுரை மற்றும் சிறுகதையாக்க போட்டியே எழுத்தோவியம் ஆகும் ",
            img: eluthoviyamImg,
            link: "eluthoviyam"
        },
        {
            title: "ஒளிச்சுவடு",
            descriiption: "எமது தொழில்நுட்ப பல்கலைக்கழகத்தில் தொழில்நுட்ப துறை சார்ந்து மட்டுமல்லாது கலைத்துறையில் ஆர்வம் காட்டத்துடிக்கும் மாணவர்களின் திறமைகளுக்கு முன்னுரிமை கொடுத்து அவர்களது",
            img: oliSuvaduImg,
            link: "olisuvadu"
        },
        {
            title: "மீரிகை",
            descriiption: "தமிழ் சமூகத்தின்  கலையாக்க திறனை மேம்படுத்த தமிழ் இலக்கிய மன்றத்தினால் நடத்தப்படும் எண்ணிமச்சித்திர போட்டியே மீரிகை  ஆகும்",
            img: meerigaiImg,
            link: "meerigai"
        },
        {
            title: "சொலல்வலர் ",
            descriiption: "தமிழ் சமூகத்தின்  பேச்சாற்றல்  திறனை மேம்படுத்த தமிழ் இலக்கிய மன்றத்தினால் நடத்தப்படும்  போட்டியே சொல்வலர் ஆகும் ",
            img: solalvarImg,
            link: "solalvalar"
        }
    ]
    return (
        <>
            <div className="pongal-landing-container-div" style={{ "height": "fit-content" }}>
                <Container maxWidth=''>
                    <div className="pongal-landing-heading1"><span className="pongal-landing-heading-letter">பி</span>ரம்மம்</div>
                </Container>
                <Container maxWidth='md' className="event-container" sx={{ pb: 4 }}>
                    <Grid container
                        spacing={4}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        {events.map((event, index) => (
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} key={index}>
                                <Link to={event.link}>
                                    <div className="brammam-event-card">
                                        <div className="brammam-event-card-top">
                                            <div className="brammam-event-card-title"> {event.title}</div>
                                            <div><img src={event.img} alt="" style={{ "height": "150px", "paddingTop": "30px", "filter": "grayscale(100%)" }} /></div>
                                        </div>
                                        <div className="brammam-event-heading1">{event.descriiption}</div>
                                    </div>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </div>
        </>
    );
}

export default BrammamIntro;