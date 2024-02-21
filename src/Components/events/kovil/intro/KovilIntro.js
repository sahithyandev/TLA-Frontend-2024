import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './kovilintro.css';
import kovilimg from '../../../../images/Events/Card Illustration/kovil.png';


function KovilIntro() {
    return (
        <>
            <div className="kovil-landing-container-div">
                <Container maxWidth='' className="kovil-landing-container">
                    <div className="kovil-landing-heading1"><span className="kovil-landing-heading-letter">கோ</span>வில்</div>
                    <img src={kovilimg} alt="kovil" className="kovil-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">வருடந்தோறும் இரத்மலானையில் உள்ள திருநந்தீஸ்வர ஆலயத்தில் சிவராத்திரி , நவராத்திரி மற்றும் தைப்பொங்கல் பூசைகள் தமிழ் இலக்கிய மன்றத்தால் சிறப்பாக நடாத்தபட்டு வருகின்றன. இந்நேரங்களில் மாணவர்களின் இறைவழிபாடுகள் மற்றும் சிரமதான பணிகள் நடைபெறுகின்றன</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default KovilIntro