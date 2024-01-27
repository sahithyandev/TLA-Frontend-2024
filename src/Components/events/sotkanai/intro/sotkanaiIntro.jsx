import React from "react";
import {
    Grid, Container
} from '@mui/material';
import './sotkanaiIntro.css';
import sotkanaiImg from '../../../../images/Events/Card Illustration/sotkanai.png';


function SotkanaiIntro() {
    return (
        <>
            <div className="sotkanai-landing-container-div">
                <Container maxWidth='' className="sotkanai-landing-container">
                    <div className="sotkanai-landing-heading1"><span className="sotknai-landing-heading-letter">சொ</span>ற்கணை</div>
                    <img src={sotkanaiImg} alt="sotknai" className="sotkanai-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">
                                "சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25 மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல் எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத சமர் தலைநகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default SotkanaiIntro;