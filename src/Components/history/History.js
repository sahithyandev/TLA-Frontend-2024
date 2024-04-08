import React from "react";
import "./history.css";
import img1 from "../../images/HistoryPage/1.jpeg";
import img2 from "../../images/HistoryPage/2.jpeg";
import img3 from "../../images/HistoryPage/3.jpeg";
import img41 from "../../images/HistoryPage/4_1.jpeg";
import img42 from "../../images/HistoryPage/4_2.jpeg";
import img5 from "../../images/HistoryPage/5.jpeg";

const History = () => {
    return (
        <div className="history">
            <div class="container">
                <h1>எமது வரலாறு</h1>
                <p>
                    "சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25
                    மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல்
                    எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத சமர் தலைநகரில்
                    பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும்
                    கோலாகலமாக நடைபெறுவதாகும்.
                </p>
                <img src={img1} alt="sample" class="img1" />
                <p>
                    "சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25
                    மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள் சொல்
                    எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத சமர் தலைநகரில்
                    பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும்
                    கோலாகலமாக நடைபெறுவதாகும்.
                </p>

                <div class="sub-container">
                    <div class="container1_img">
                        <img src={img2} alt="sample" />
                    </div>
                    <div class="container1_text test">
                        "சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25
                        மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள்
                        சொல் எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத சமர்
                        தலைநகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர்
                        முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.
                    </div>
                </div>

                <div class="sub-container">
                    <div class="container2_text">
                        "சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25
                        மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள்
                        சொல் எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத சமர்
                        தலைநகரில் பிரதான மண்டபத்தில் பல்லாயிரக்கணக்கானோர்
                        முன்னிலையில் மிகவும் கோலாகலமாக நடைபெறுவதாகும்.
                    </div>
                    <div class="container2_img">
                        <img src={img3} alt="sample" />
                    </div>
                </div>

                <div class="sub-container">
                    <div class="container3_img">
                        <div>
                            <img src={img41} class="bookimage1" alt="sample" />
                        </div>
                        <div>
                            <img src={img42} class="bookimage1" alt="sample" />
                        </div>
                    </div>
                    <div class="container3_text">
                        <p class="para">
                            "சொற்கணை" என்பது மாபெரும் விவாதச்சமர்.இலங்கையின் 25
                            மாவட்டங்களில் தேர்வு செய்யப்பட்ட சிறந்த விவாத அணிகள்
                            சொல் எனும் கணை கொண்டு களமாடும் இறுதிக்கட்ட விவாத
                            சமர் தலைநகரில் பிரதான மண்டபத்தில்
                            பல்லாயிரக்கணக்கானோர் முன்னிலையில் மிகவும் கோலாகலமாக
                            நடைபெறுவதாகும்.
                        </p>
                    </div>
                </div>
                <img src={img5} alt="sample" class="img5" />
            </div>
        </div>
    );
};

export default History;
