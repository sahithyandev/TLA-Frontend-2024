import React from "react";
import { Grid, Container } from "@mui/material";
import "./agenda.css";
import Heading from "../../../../shared/Heading";
// import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot'


function Agenda() {
    const events = [
        {
            "time":"17th April 2024",
            "title":"Registrations Opening",
            "content":"தைமாதம் பல்கலைக்கழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் காணும்"
        },
        {
            "time":"18th April 2024",
            "title":"Registrations Opening",
            "content":"தைமாதம் பல்கலைக்கழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் காணும்"
        },
        {
            "time":"19th April 2024",
            "title":"Registrations Opening",
            "content":"தைமாதம் பல்கலைக்கழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் காணும்"
        },
        {
            "time":"17th April 2024",
            "title":"Registrations Opening",
            "content":"தைமாதம் பல்கலைக்கழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் காணும்"
        },
        {
            "time":"17th April 2024",
            "title":"Registrations Opening",
            "content":"தைமாதம் பல்கலைக்கழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் காணும்"
        }
    ];

    return (
        <>
            <h1>நேரவரிசை</h1>
            <div className="timelineCOntainer">
                <Timeline align="alternate" className="tline">
                
                    {events.map((event, index) => <>
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot className="dot" color="#002245;" variant="default"/>
                                {(index-events.length)===-1? "":<TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="timelineBox">
                                    <h6>{event.time}</h6>
                                    <h5>{event.title}</h5>
                                    <h4>{event.content}</h4>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        </>
                        )}
                </Timeline>
            </div>
            
        </>
    );
}

export default Agenda;
