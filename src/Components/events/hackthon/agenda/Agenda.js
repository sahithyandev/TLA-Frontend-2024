import React, { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { Grid, Container } from "@mui/material";
>>>>>>> parent of 2a52b0a (Merge pull request #37 from sajeethan19/main)
import "./agenda.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import isOdd from "greet_name/isOdd";

function Agenda() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

<<<<<<< HEAD
  const [events, setEvents] = useState(events);
=======
  const [events, setEvents] = useState([]);
>>>>>>> parent of 2a52b0a (Merge pull request #37 from sajeethan19/main)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get('/ideathon');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
=======
        const response = await fetch('/ideathon');

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        setEvents(data);
      } catch (error) { 
        console.error('Error fetching events:', error);
      }
    };

>>>>>>> parent of 2a52b0a (Merge pull request #37 from sajeethan19/main)
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
      <h2>நேரவரிசை</h2>
      <div className="timelineCOntainer">
        <Timeline align={windowWidth > 490 ? "alternate" : "left"} className="tline">
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
                    isOdd(index) == "odd" && windowWidth > 490
                      ? "timelineBoxRight"
                      : "timelineBoxLeft"
                  }
                >
                  <h5>{event.time}</h5>
                  <h3>{event.title}</h3>
                  <h4>{event.content}</h4>
                  {event.link && (
                    <a href={event.link} className="link-button" target="_blank">
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
