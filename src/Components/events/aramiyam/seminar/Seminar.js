import React from "react";
import Heading from "../../../../shared/Heading";
import { Container, Grid } from "@mui/material";
import SeminarCard from "./seminarCard/SeminarCard";
import profileImg01 from "../../../../images/Events/aramiyam/profile01.png";
import "./seminar.css";

const SeminarData = [
  {
    id: 1,
    title: "CV உருவாக்குதல் பற்றிய அறிவுரை",
    description:
      "தொழில் உலகத்துக்கு பிரவேசிக்க இருக்கும் மாணவர்களுக்கு CV உருவாக்குதல் மற்றும் அது தொடர்பான கருத்தரங்கு",
    time: "காலை 9:00",
    date: "28.05.2023",
    speaker: {
      name: "Gasthini Sivayoganathan",
      position: "Manager, Waveguide Operations Program management, Meta",
      profileImg: "https://live.staticflickr.com/65535/53570913426_bc6c7ebdf8_w.jpg",
    },
    youtubeLink:
      "https://www.youtube.com/watch?v=pwnnY_qR1EU&t=524s&ab_channel=TLAUOM",
  }
];

function Seminar() {
  return (
    <div className="seminar-container">
      <Container  sx={{ pb: 4 }}>
        <Heading className='heading'>கருத்தரங்குகள்</Heading>
        <Grid
          className="card-container"
          container
          direction="row"
          flexShrink={1}
          justifyContent="space-around"
          alignItems="center"
          spacing={0.001}
        >
          {SeminarData.map((seminarData) => {
            return (
              <SeminarCard key={seminarData.id} SeminarData={seminarData} />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Seminar;
