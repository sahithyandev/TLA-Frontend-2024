import React from "react";
import { Grid, Container } from "@mui/material";
import "./aramiyamIntro.css";
import aramiyamimg from "../../../../images/Events/Card Illustration/aramiyamintro.png";
import jeevanathi from "../../../../images/Events/Card Illustration/jeevanathi.png"


function JeevanathiIntro() {
  return (
    <>
      <div className="aramiyam-landing-container-div">
        <Container maxWidth="lg" className="aramiyam-landing-container ">
          <div className="aramiyam-landing-heading1">
            <span className="aramiyam-landing-heading-letter">ஜீ</span>வநதி
          </div>
          <img src={jeevanathi} alt="aramiyam" className="aramiyam-icon" style={{ maxWidth: '30%', height: '30%' }}/>
          <Grid sx={{ marginTop: "30px" }}>
            <Container maxWidth="lg">
              <div className="intro-decription">
              இது மொறட்டுவை பல்கலைக்கழக தமிழ் இலக்கியமன்றத்தின் ஜீவ காருண்யப் பயணம். வறுமையில் தங்கள் வாழ்நிலைகளைத் தொலைத்துவிட்ட பின்தங்கிய மாவட்டத்தின் துயர் ஒழுகும் வறுமையினையும் மொறட்டுவைப் பல்கலைக்கழக தமிழ் இலக்கிய மன்றத்தின் இந்த ஜீவநதி என்ற பயணம் வெளியுலகை அறியச் செய்கிறது.
              </div>
            </Container>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default JeevanathiIntro;
