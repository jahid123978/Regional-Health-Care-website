import React from 'react';
import useAuth from '../Context/useAuth';
import Doctor from './Doctor';
import './Doctors.css'

const Doctors = () => {
    const {doctor}  = useAuth();
    return (
        <div>
            <h1 style={{border: "1px solid black",
             fontSize: "30px", backgroundColor: "pink",
             fontFamily: "Times Roman",}}>World famous Doctors are Our Hospital You can find your <br />
              desirable doctors for your operation</h1>
            
          <div className="card-container">
          {
                doctor.map(doctor => <Doctor
                key={doctor.id}
                doctor = {doctor}></Doctor>)
            }
          </div>
        </div>
    );
};

export default Doctors;