import React from "react";
import { Grid, Container } from "@mui/material";
import './jeevanathiintro.css';
import jeevanathi from "../../../../images/Events/Card Illustration/jeevanathi.png"


function JeevanathiIntro() {
  return (
    <>
     <div className="jeevanathi-landing-container-div">
                <Container maxWidth='' className="jeevanathi-landing-container">
                    <div className="jeevanathi-landing-heading1"><span className="jeevanathi-landing-heading-letter">ஜீ</span>வநதி</div>
                    <img src={jeevanathi} alt="jeevanathi" className="jeevanathi-icon" />
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm='12'>
                            <Container maxWidth="md">
                                <div className="intro-decription">இது மொறட்டுவை பல்கலைக்கழக தமிழ் இலக்கியமன்றத்தின் ஜீவ காருண்யப் பயணம். வறுமையில் தங்கள் வாழ்நிலைகளைத் தொலைத்துவிட்ட பின்தங்கிய மாவட்டத்தின் துயர் ஒழுகும் வறுமையினையும் மொறட்டுவைப் பல்கலைக்கழக தமிழ் இலக்கிய மன்றத்தின் இந்த ஜீவநதி என்ற பயணம் வெளியுலகை அறியச் செய்கிறது.</div>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
    </>
  );
}

export default JeevanathiIntro;
