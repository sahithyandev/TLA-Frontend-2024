import React, { useEffect, useState } from "react";
import "./agenda.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import isOdd from "greet_name/isOdd";
import axios from 'axios';
import events from "./eventList";

function Agenda() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [events, setEvents] = useState(events);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/ideathon');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);
  return (
    <>
      <h1>நேரவரிசை</h1>
      <div className="timelineCOntainer">
        <Timeline align={windowWidth > 560 ? "alternate" : "left"} className="tline">
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="inherit">
                  <FiberManualRecord className="dot" htmlColor="#002245" />
                </TimelineDot>
                {index - events.length === -1 ? "" : <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent className="tlbox">
                <div
                  className={
                    isOdd(index) === "odd" && windowWidth > 560
                      ? "timelineBoxRight"
                      : "timelineBoxLeft"
                  }
                >
                  <h6>{event.time}</h6>
                  <h3>{event.title}</h3>
                  <h4>{event.content}</h4>
                  {event.link && (
                    <a href={event.link} className="link-button" target="_blank" rel="noreferrer">
                      {event.linkDescription}
                    </a>
                  )}
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
