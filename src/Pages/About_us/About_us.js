import React from 'react';
import './About_us.css';

const About_us = () => {
    return (
        <div>
            <img style={{width: "100%"}} src="http://www.sevenhillshospital.com/images/medium/sevenhills-about-us.jpg?i=89517" alt="" />
           <div className="about-container" style={{position: "relative", fontFamily: "Times Roman", top: "-600px", fontWeight: "bold", color: "blue"}}>
           <h1 style={{fontSize: "30px"}}>Regional One Health Hospital</h1>
            <p style={{fontSize: "20px"}}>Regional One Health Group has over two decades of experience in the <br />
             healthcare sector, and is known for providing quality healthcare <br />
              and valuable experience to all domestic and international patients. <br />
               Our healthcare offerings are supported by a team of compassionate and <br />
                dedicated medical professionals who have rich knowledge and experience in <br />
                 their respective domains.</p>
                 <button style={{border: '1px solid gray', backgroundColor: 'blue',
          color: 'white', padding: '10px 20px', borderRadius: '10px', marginTop: '30px'}}>Know More</button>
           </div>
          <div className="about-story" style={{display: 'flex'}}>
          <div style={{margin: "5px 30px", bottom: '300px', position: 'relative', fontFamily: "Times Roman"}}>
               <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>Our Attractive Duty</h1>
               <p>Regional one Health houses a unique portfolio of services that keep healthcare professionals abreast of the latest and most significant developments within their clinical, surgical or management area.

                 Covering all aspects of the hospital environment, hospitalmanagement.net provides both clinical and senior administrative staff with instant access to a comprehensive reference source introducing technologies, services and procedures our audience can employ to improve the management of their facilities.</p>
           </div>
           <div style={{margin: "5px 30px", position: 'relative', bottom: '300px', fontFamily: "Times Roman"}}>
               <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>Our Story</h1>
               <p>As the largest not-for-profit​ healthcare system in Texas and one of the largest in the United States, Baylor Scott and White Health was born from the 2013 combination of Baylor Health Care System and Scott & White Healthcare. Today, Baylor Scott & White includes 52 hospitals, more than 800 patient care sites, more than 7,300 active physicians, over 49,000 employees and the Scott and White Health Plan</p>
           </div>
          </div>
          <div className="about-mission" style={{position: 'relative', bottom: '200px'}}>
              <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>Our strategy</h1>
              <img style={{width: '100%', height: '50%'}} src="https://www.bswhealth.com/SiteCollectionImages/marketing/about/core.jpg" alt="" />
          </div>
        </div>
    );
};

export default About_us;