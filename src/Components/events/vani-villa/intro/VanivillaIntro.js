import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './vanivillaintro.css';
import vaniVillaImg from '../../../../images/Events/Card Illustration/vanivila.png';


function VaniVillaIntro() {
    return (
        <>
            <div className="kovil-landing-container-div">
                <Container maxWidth='' className="kovil-landing-container">
                    <div className="kovil-landing-heading1"><span className="kovil-landing-heading-letter">வா</span>ணி விழா</div>
                    <img src={vaniVillaImg} alt="kovil" className="kovil-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">அந்திமாலைப் பொழுதிலே பல்கலைக்கழக வளாகத்தில் ஆரம்பமாகும் இவ் நிகழ்வு கல்விக்கு சரஸ்வதியும், செல்வத்திற்கு லஷ்மியும், வீரத்திற்கு துர்க்கையும் ஆகிய முப்பெரும் தேவிகளுக்கான இறை வழிபாட்டுடன் ஆரம்பமாகி இசை, நடனம், வில்லுப்பாட்டு, பல்லியம் போன்ற கலை நிகழ்ச்சிகளுடன் இரவுப்பொழுதினிலே இனிதே நிறைவேறும்</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default VaniVillaIntro