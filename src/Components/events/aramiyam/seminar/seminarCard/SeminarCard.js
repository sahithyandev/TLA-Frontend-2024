import React from "react";
import "./seminarcard.css";
import youtubeImg from "../../../../../images/Events/aramiyam/Youtube.png";
import { Container, Grid } from "@mui/material";
import { Gif } from "@mui/icons-material";

function SeminarCard({ SeminarData }) {
  return (
    <div className="frame seminarCard">
      <div className="frame seminar-heading">கருத்தரங்கு {SeminarData.id}</div>
      <Grid className="frame seminar-card-content" container spacing={2}>
        <Grid
          direction={"column"}
          item
          md={4}
          xs={12}
          className="profile-frame"
        >
          <img className="profile-img" src={SeminarData.speaker.profileImg} />
          <div className="profile-content">
            <div className="profile-content profile-heading">பெயர் :</div>
            <div className="profile-content profile-text">
              {SeminarData.speaker.name}
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-content profile-heading">பதவி :</div>
            <div className="profile-content profile-text">
              {SeminarData.speaker.position}
            </div>
          </div>
        </Grid>
        <Grid className="seminar-content" item md={8} xs={12}>
          <div className="seminar-content">
            <div className="profile-content seminar-title">
              {SeminarData.title}
            </div>
            <div className="profile-content seminar-description">
              {SeminarData.description}
            </div>
          </div>
          <Grid className="seminar-content time-content-container" container>
            <Grid className="time-content" item md={6} xs={12}>
              <div className="time-content time-heading">நேரம்</div>
              <div className="time-content time-text">{SeminarData.time}</div>
            </Grid>
            <Grid className="time-content" item md={6} xs={12}>
              <div className="time-content time-heading">திகதி</div>
              <div className="time-content time-text">{SeminarData.date}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <a
        href={SeminarData.youtubeLink}
        target="_blank"
        style={{
          marginTop: "1.5rem",
          marginRight: "8rem",
          alignSelf: "flex-end",
        }}
      >
        {" "}
        <img src={youtubeImg} alt="YouTube Video Preview" />
      </a>
    </div>
  );
}

export default SeminarCard;
