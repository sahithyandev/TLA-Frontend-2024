import React from 'react'
import "./prize.css"
function Prize() {
    return (
        <>
            <div style={{textAlign:"center"}}>
                <h1>பரிசில்கள் விபரம்</h1>
                <div className='prizeContainer'>
                    <div className='prizeInfo'>
                        <h3>1ம், 2ம் மற்றும் 3ம் இடங்களுக்கு பெறுமதி மிக்க பரிசில்கள் வழங்கப்படும்</h3>
                        <h3>பங்குபற்றிய மாணவர்களுக்கு இலத்திரனியல் சான்றிதழ்கள் வழங்கப்படும்</h3>
                        <h3>பரிசளிப்பு வைபம் தமிழருவி விழாவில் நடைபெறும்</h3>
                    </div>
                    <div className='wishInfo'>
                        <h3>பங்குபற்றும் மாணவர்களுக்கு எங்கள் “நிரலி” ஒழுங்கமைப்பு குழுவின் வாழ்த்துக்கள்.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prize