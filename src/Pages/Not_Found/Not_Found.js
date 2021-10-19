import React from 'react';
import { useHistory } from 'react-router';

const Not_Found = () => {
const history = useHistory();
const hanldeGoHome = () =>{
    history.push('/home');
}
    return (
        <div>
            
            <img src="https://media.istockphoto.com/vectors/concept-404-error-page-flat-cartoon-style-vector-illustration-vector-id1149316411?k=20&m=1149316411&s=612x612&w=0&h=wzSCBQVVh76LWzeEQP01DDEhpm983Y6_tsqlZ46goZ0=" alt="" />
            <button onClick={hanldeGoHome} style={{position: 'relative', 
            bottom: '300px', border: '1px solid black',
            backgroundColor: 'blue', color: 'white', borderRadius: '5px', padding: '10px 20px'}}>Go Home</button>
        </div>
    );
};

export default Not_Found;