import { CButton} from '@coreui/react';
import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({service}) => {
    const history = useHistory();
    const handleDetails = () => {
        history.push(`/details/${service.id}`);
    }

    return (
        <div style={{backgroundColor: 'mintcream', color: '#0000FF', fontWeight: 'bold', width: '20rem', height: '490px' }}>
                    <img style={{borderRadius: '50%', marginLeft: '40px',
                     width: '250px', height: '250px', marginTop: '20px'}} src={service.image} />
                         <div>
                           <h1 style={{marginTop: '20px', fontSize: '30px'}}>{service.name}</h1>
                             <p style={{color: 'black', marginTop: '10px'}}>
                            {service.Description}
                        </p>
                     <CButton style={{border: '1px solid gray', backgroundColor: 'blue',
                      color: 'white', padding: '10px 20px', borderRadius: '10px', marginTop: '10px'}} onClick={handleDetails}>Details</CButton>
                 </div>
              </div>
    );
};

export default Service;