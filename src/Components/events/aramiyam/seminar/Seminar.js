import React from "react";
import Heading from "../../../../shared/Heading";
import { Container, Grid } from "@mui/material";
import SeminarCard from "./seminarCard/SeminarCard";
import profileImg01 from "../../../../images/Events/aramiyam/profile01.png";

const SeminarData = [
  {
    id: 1,
    title: "cv உருவாக்குதல் பற்றிய அறிவுரை",
    description:
      "அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்",
    time: "காலை 9:00",
    date: "22.03.2024",
    speaker: {
      name: "X",
      position: "X`s Position",
      profileImg: profileImg01,
    },
    youtubeLink:
      "https://www.youtube.com/watch?v=pwnnY_qR1EU&t=524s&ab_channel=TLAUOM",
  },
  {
    id: 2,
    title: "cv உருவாக்குதல் பற்றிய அறிவுரை",
    description:
      "அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்... அது பற்றிய சிறிய விளக்கம்",
    time: "காலை 9:00",
    date: "22.03.2024",
    speaker: {
      name: "Y",
      position: "Y`s Position",
      profileImg: profileImg01,
    },
    youtubeLink:
      "https://www.youtube.com/watch?v=pwnnY_qR1EU&t=524s&ab_channel=TLAUOM",
  },
];

function Seminar() {
  return (
    <div>
      <Container className="seminar-container" sx={{ pb: 4 }}>
        <Heading>கருத்தரங்குகள்</Heading>

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
