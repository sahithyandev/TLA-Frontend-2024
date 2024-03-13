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
      "இந்த கருத்தரங்கில், நல்ல அபிப்ராயத்தை ஏற்படுத்தவும், வேலை வாய்ப்புகளை அதிகரிக்கவும் நன்கு வடிவமைக்கப்பட்ட ரெஸ்யூமை வடிவமைப்பதன் முக்கியத்துவத்தைப் பற்றி விவாதித்தோம்.",
    time: "காலை 9:00",
    date: "28.05.2023",
    speaker: {
      name: "ஹஸ்தினி சிவயோகநாதன்",
      position: "Manager, Waveguide Operations Program management, Meta",
      profileImg:
        "https://live.staticflickr.com/65535/53570913426_bc6c7ebdf8_w.jpg",
    },
    youtubeLink:
      "https://www.youtube.com/watch?v=pwnnY_qR1EU&t=524s&ab_channel=TLAUOM",
  },
  {
    id: 2,
    title: "cv உருவாக்குதல் பற்றிய அறிவுரை",
    description:
      "பல்கலைக்கழக மாணவர்கள் மத்தியில் அதிகளவில் காணப்படும் ஒரு கேள்வி இளமாணி பட்டத்தின் பின்னரான கல்வி? முதுமாணி கல்வி பற்றிய அறிமுகம் ,முதுமாணி கல்விக்கான அடிப்படைத் தகுதிகள், புலமைப்பரிசில்களை எவ்வாறு பெற்றுக்கொள்வது பற்றிய தகவல்களையும் உங்கள் மத்தியில் காணப்படும் ஐயங்களை தீர்த்திட நிலவொளியில் இணைந்திடுங்கள்.",
    time: "காலை 9:00",
    date: "13.03.2022",
    speaker: {
      name: "திரு.அரவிந்தன், விஸ்வகுமார் அரவிந்தன், உதயசங்கர் தயாசிவம்",
      position:
        "(பேராசிரியர், University of Southern Queensland, Australia), (இணை பேராசிரியர், Wichita State University, USA), (சிரேஷ்ட விரிவுரையாளர், University of Moratuwa, Sri Lanka)",
      profileImg: profileImg01,
    },
    youtubeLink:
      "https://www.facebook.com/TLAuom/videos/%E0%AE%85%E0%AE%B0%E0%AE%AE%E0%AE%BF%E0%AE%AF%E0%AE%AE%E0%AF%8D/524139205806796/",
  },
];

function Seminar() {
  return (
    <div className="seminar-container">
      <Container sx={{ pb: 4 }}>
        <Heading className="heading">கருத்தரங்குகள்</Heading>
        <Grid
          className="card-container"
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center "}
          flexShrink={1}
          spacing={4}
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
