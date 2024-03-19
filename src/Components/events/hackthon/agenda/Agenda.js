import React from "react";
import { Grid, Container } from "@mui/material";
import "./agenda.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import isOdd from "greet_name/isOdd";
import eventlist from "./eventList";

function Agenda() {
  const events = eventlist;
  return (
    <>
      <h1>நேரவரிசை</h1>
      <div className="timelineCOntainer">
        <Timeline align="alternate" className="tline">
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="inherit">
                  <FiberManualRecord className="dot" htmlColor="#002245" />
                </TimelineDot>
                {index - events.length === -1 ? "" : <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div
                  className={
                    isOdd(index) !== "odd"
                      ? "timelineBoxLeft"
                      : "timelineBoxRight"
                  }
                >
                  <h6>{event.time}</h6>
                  <h5>{event.title}</h5>
                  <h4>{event.content}</h4>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}

export default Agenda;
