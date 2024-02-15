import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './thamilaruviintro.css';
import thamilaruviImg from '../../../../images/Events/Card Illustration/tamilaruvi.png';


function ThamilaruviIntro() {
    return (
        <>
            <div className="kovil-landing-container-div">
                <Container maxWidth='' className="kovil-landing-container">
                    <div className="kovil-landing-heading1"><span className="kovil-landing-heading-letter">த</span>மிழருவி</div>
                    <img src={thamilaruviImg} alt="kovil" className="kovil-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">தமிழ் சமூகத்தின் மிகப்பெரிய பேறுகளான கலை கல்வி மற்றும் கலாச்சாரம் ஆகியவற்றின் இன்றைய விருத்திக்கும் நாளைய இருப்பிற்கும் தூணாய் நிற்க முனையும் எம் மொறட்டுவை பல்கலைக்கழக தமிழ் மன்றம் வருடந்தோறும் தலைநகரில் இலட்சக்கணக்கானோர் முன்னிலையில் பிரமாண்டத்தின் உச்சமாக நடைபெறும் கலை நிகழ்வு "தமிழருவி" ஆகும்.</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default ThamilaruviIntro