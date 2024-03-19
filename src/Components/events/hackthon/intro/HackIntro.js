import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './HackIntro.css';
import {competition} from "../../../../shared/EventDetails";

function HackIntro() {
    return (
        <>
            <div>
                <Container maxWidth='' className="firstFrame">
                    <div className="pongal-landing-heading1">Hackthon</div>
                    <img src={competition[2].img} alt="pongal" className="thaipongal-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item >
                            <Container maxWidth="md">
                                <div className="intro-decription">{competition[2].descriiption}</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default HackIntro