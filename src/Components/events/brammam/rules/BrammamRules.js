import React from 'react';
import './BrammamRules.css';
import { Grid, Container, Button } from '@mui/material';
import { useState } from 'react';
const BrammamRules = ({ eventData }) => {
    const [showRules, setShowRules] = useState(false);

    const handleButtonClick = () => {
        setShowRules(!showRules);
    };
    return (<React.Fragment>
        <div>

            <div className="centerx ">
                <Button
                    variant="contained "
                    className='rules-landing-heading1'
                    onClick={handleButtonClick} >
                    {eventData["name"]} - போட்டி விதிமுறைகள்
                </Button>
            </div>
            {showRules && (
                <Grid item sm='12'>
                    <Container maxWidth="md" >
                        <div className="rules-decription">
                            <ol type='1'>
                                {
                                    eventData["rules"].map((rule, index) => {
                                        return <li key={index}>{rule}</li>
                                    })
                                }
                            </ol>
                        </div>

                    </Container>
                </Grid>
            )}

        </div>
    </React.Fragment>);
}

export default BrammamRules;