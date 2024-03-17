import ContactCard from "../Components/events/hackthon/ContactCard/ContactCard";
import RulesButton from "../Components/events/hackthon/RulesButton/RulesButton";
import Agenda from "../Components/events/hackthon/agenda/Agenda";
import HackIntro from "../Components/events/hackthon/intro/HackIntro";
import { Helmet } from "react-helmet";

const Hackthon = () => {
    return (
        <>
            <Helmet>
                <title>Hackthon</title>
                <meta name="description" content="மதபேதமின்றி சூரியனுக்கும் விளைச்சலுக்கும் உதவிய கால்நடைகளுக்கு நன்றி கூறும் முகமாக தைமாதம் பல்கலைகழக வளாகத்தினுள் பாரம்பரியத்தை பறைசாற்றும் வகையில் பொங்கல் பொங்கி பாரம்பரிய கலாச்சார உடையில் தீப்பண்டங்களை விருந்தோம்பல் செய்து பாரம்பரிய தமிழர் விளையாட்டுக்களுடன் விழாக்கோலம் கானும்." />
                <meta name="keywords" content="TLA, Tamil Literary Association, Thai Pongal" />
            </Helmet>
                <HackIntro />
                <RulesButton/>
                <Agenda/>
                <ContactCard/>
        </>
    );
}

export default Hackthon;