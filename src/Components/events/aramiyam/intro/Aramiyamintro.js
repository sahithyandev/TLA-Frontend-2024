import React from "react";
import { Grid, Container } from "@mui/material";
import "./aramiyamIntro.css";
import aramiyamimg from "../../../../images/Events/Card Illustration/aramiyamintro.png";

function AramiyamIntro() {
  return (
    <>
      <div className="aramiyam-landing-container-div">
        <Container maxWidth="" className="aramiyam-landing-container">
          <div className="aramiyam-landing-heading1">
            <span className="aramiyam-landing-heading-letter">அ</span>ரமியம்
          </div>
          <img src={aramiyamimg} alt="aramiyam" className="aramiyam-icon" />
          <Grid sx={{ marginTop: "30px" }}>
            <Container maxWidth="md">
              <div className="intro-decription">
              தாங்கள் கடந்து வந்த அனுபவங்களையும் படிப்பினைகளையும் தமது தம்பி, தங்கைகளுக்கும் கூறி அவர்களை வழிநடத்தி அவர்களின் இலக்குகளை அடைய கைகோர்க்கும் சிரேஷ்ட மாணவர்களுக்கும் பல்கலைக்கழக மாணவர்களுக்குமான உறவுப்பாலம்
              </div>
            </Container>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default AramiyamIntro;
