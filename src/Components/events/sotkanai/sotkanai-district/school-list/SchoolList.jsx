import React, { useState } from 'react';
import './SchoolList.css';
import { LocationCity } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Button = ({ text }) => {
  return (
    <button className="button-school font-landing-des1 ">
      <LocationCity />
      {text}
    </button>
  );
};

const SchoolList = () => {
  const initialButtons = [
    { text: 'யாழ் / இந்துக் கல்லூரி' },
    { text: 'யாழ் / இந்துக் கல்லூரி' },
    { text: 'யாழ் / இந்துக் கல்லூரி' },
    { text: 'யாழ் / இந்துக் கல்லூரி' },
    { text: 'யாழ் / இந்துக் கல்லூரி' },
    { text: 'யாழ் / இந்துக் கல்லூரி' },
    { text: 'யாழ் / இந்துக் கல்லூரி' },
    { text: 'யாழ் / இந்துக் கல்லூரி' },
  ];
  const [buttons, setButtons] = useState(initialButtons.slice(0, 6)); // Initially show only two rows
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setButtons(initialButtons);
    } else {
      setButtons(initialButtons.slice(0, 6)); // Show only two rows
    }
  };

  return (
    <div className='set-width'>
      <div className="button-school-container">
        {buttons.map((button, index) => (
          <Button key={index} text={button.text} />
        ))}
      </div>
      {!showAll && (
        <div className='button-school-container-arrow'>

        <button onClick={toggleShowAll} className="button-school">
        <KeyboardArrowDownIcon />
        </button>
        </div>
      )}
    </div>
  );
};

export default SchoolList;
