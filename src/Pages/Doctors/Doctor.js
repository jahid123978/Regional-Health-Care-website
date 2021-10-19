import { CButton } from '@coreui/react';
import React from 'react';

const Doctor = ({doctor}) => {
    
    return (
        <div style={{backgroundColor: 'mintcream', color: '#0000FF', fontWeight: 'bold', width: '20rem', height: '490px' }}>
        <img style={{borderRadius: '50%', marginLeft: '40px',
            width: '250px', height: '250px', marginTop: '20px'}} src={doctor.img} />
             <div>
               <h1 style={{marginTop: '20px', fontSize: '30px'}}>{doctor.name}</h1>
                 <p style={{color: 'black', marginTop: '10px'}}>
                {doctor.specialist}
            </p>
         <CButton style={{border: '1px solid gray', backgroundColor: 'blue',
          color: 'white', padding: '10px 20px', borderRadius: '10px', marginTop: '10px'}}>Details</CButton>
     </div>
  </div>
    );
};

export default Doctor;