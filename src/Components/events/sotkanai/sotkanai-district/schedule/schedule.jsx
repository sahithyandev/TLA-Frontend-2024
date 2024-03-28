import React from "react";
import "./schedule.css";
import { Container } from "@mui/material";
import SotkanaiData from "../../Sotkanai-Data";


import { CalendarMonth,AccessTime,LocationOn } from "@mui/icons-material";
const Schedule = ({ districtName, districtSchedule }) => {
  const provinces = SotkanaiData.provinces;



  return (
    <React.Fragment>
      <div className="sotkanai-landing-container-div">
        <div className="set-width">
          <Container maxWidth="" className="sotkanai-landing-container">
            <div className="sotkanai-district-landing-heading1">
              சொற்கணை-{districtName} மாவட்டம்
            </div>
            <div className="head-landing-container">
              <div className="head-landing-heading1">சொற்கணை-2024</div>
              <div className="head-landing-body1">
                <div className="head-landing-des1">
                  <CalendarMonth />
                  <div className="head-landing-des2">{districtSchedule.date}</div>
                </div>
                <div className="head-landing-des1">
                  <AccessTime />
                  <div className="head-landing-des2">{districtSchedule.time}</div>
                </div>
                <div className="head-landing-des1">
                  <LocationOn />
                  <div className="head-landing-des2">{districtSchedule.venue}</div>
                </div>
              </div>
              <div className="head-landing-register">பள்ளிகளை பதிவு செய்ய</div>
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};


export default Schedule;
