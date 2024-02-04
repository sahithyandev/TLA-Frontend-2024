import React from "react";
import {
    Grid, Container
} from '@mui/material'
import './landing.css'
import Img from '../../../images/LandingPage/V01.png'
function Landing() {
    return (
        <div className="landing-container-div" id="landing">
            <Container maxWidth='' className="landing-container">
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item sm='6'>
                        <div className="landing-heading1"><span className="landing-heading-letter">தி</span>த்திக்கும் தமிழில் நித்திலம் சொரிய
                            எத்திக்கும் அதிர்ந்திட சங்கே முழங்கு!</div>
                    </Grid>
                    <Grid
                        container item sm='6'
                    >
                        <img src={Img} alt='' className="landing-img" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Landing