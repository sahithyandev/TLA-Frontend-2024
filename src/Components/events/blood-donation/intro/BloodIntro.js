import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './bloodintro.css';
import blooddonationimg from '../../../../images/Events/Card Illustration/blooddonation.png';


function BloodIntro() {
    return (
        <>
            <div className="blood-landing-container-div">
                <Container maxWidth='' className="blood-landing-container">
                    <div className="blood-landing-heading1"><span className="blood-landing-heading-letter">இ</span>ரத்ததானம்</div>
                    <img src={blooddonationimg} alt="blood" className="blood-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">சாதி மத பேதமின்றி எமது சொந்தங்களை உதவிக்கரம் கொடுத்து உயிரைக்காப்பாற்றும் வகையில் மேற்கொள்ளப்பட்டு வருகின்றது.இது மன்றத்தின் சாதி மத பேதத்தை கடந்து ஒவ்வொரு வருடமும் வீர நடை போடுகின்றது.</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default BloodIntro