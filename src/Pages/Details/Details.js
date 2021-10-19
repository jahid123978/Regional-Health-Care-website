import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../Context/useAuth';

const Details = () => {
    const [department, setDepartmet] = useState({});
    const {detailsId} = useParams();
    const history = useHistory();
    const {service} = useAuth();
    console.log(service);

    useEffect(()=>{
      
      const neItem = service.find(data => data.id == detailsId);
      setDepartmet(neItem);
      console.log(neItem);
    }, [service])
  
    const handleToGoHome = () => {
        history.push('/home');
    }
    return (
      <div style={{backgroundColor: 'mintcream', color: '#0000FF', fontWeight: 'bold', width: '35rem', height: '550px' }}>
      <img style={{borderRadius: '50%', marginLeft: '40px',
       width: '250px', height: '250px', marginTop: '20px'}} src={department.image} alt="Nothing" />
           <div>
             <h1 style={{marginTop: '20px', fontSize: '30px'}}>{department.name}</h1>
             <h3>Risk: {department.risk}</h3>
               <p style={{color: 'black', marginTop: '10px'}}>
                {department.Description}
              </p>
       <CButton style={{border: '1px solid gray', backgroundColor: 'blue',
        color: 'white', padding: '10px 20px', borderRadius: '10px', marginTop: '10px'}} onClick={handleToGoHome}>Go Back Home</CButton>
   </div>
</div>
    );
};

export default Details;