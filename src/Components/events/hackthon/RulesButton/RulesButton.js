import React from 'react'
import "./RulesButton.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { rules } from './rules';
import bullet from "./bullet.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function RulesButton() {
  // write expanded rules displaying method here.
  const [open, setOpen] = useState(false);

  const [rules, setRules] = useState([]);

  useEffect(() => {
      const fetchEvents = async () => {
          try {
              const response = await fetch('/ideathon-rules');

              if (!response.ok) {
                  throw new Error('Failed to fetch events');
              }

              const data = await response.json();
              setRules(data);
          } catch (error) {
              console.error('Error fetching events:', error);
          }
      };
      fetchEvents();
    }, []);

  const [rules, setRules] = useState([]);

  useEffect(() => {
      const fetchEvents = async () => {
          try {
              const response = await fetch('/ideathon-rules');

              if (!response.ok) {
                  throw new Error('Failed to fetch events');
              }

              const data = await response.json();
              setRules(data);
          } catch (error) {
              console.error('Error fetching events:', error);
          }
      };
      fetchEvents();
    }, []);

  return (
    <>
      <div className='btnContainer'>
        <Accordion className='acc'>
          <AccordionSummary
            className='rulesBtn'
            sx={{backgroundColor:"#E3E7EB"}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            போட்டி விதிமுறைகள்
          </AccordionSummary>
          <AccordionDetails>
            <div id="modal-modal-description" >
              <div>
                {rules.map((rules, index) => (
                  <ul key={index}>
                    <li className='listItem'><img className='bulletImg' src={bullet}  alt='>'/>{rules.rule}</li>
                  </ul>
                ))}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default RulesButton