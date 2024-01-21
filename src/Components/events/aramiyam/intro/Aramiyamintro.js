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
                “அரமியம்” என்பது தமிழ் இளைஞர்களின் தொழில் வழிகாட்டுதல்
                நிகழ்வாகும். இது இலங்கையின் அனைத்து மாவட்டங்களிலும் உள்ள பள்ளி
                மற்றும் கல்லூரி மாணவர்களுக்கு இலவசமாக வழங்கப்படுகிறது. இந்த
                நிகழ்வு மூலம், மாணவர்கள் தங்கள் திறன்கள் மற்றும் ஆர்வங்களை
                அடிப்படையாகக் கொண்டு தங்களுக்கான சிறந்த தொழில் வாய்ப்புகளைக்
                கண்டறிய உதவுகிறது.
              </div>
            </Container>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default AramiyamIntro;
