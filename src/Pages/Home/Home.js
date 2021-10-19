import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../Context/useAuth';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const {service} = useAuth();
    console.log(service.id);
    return (
        <div>
            {/* <h1>I am a world class software Engineer</h1> */}
           
            <video autoPlay loop muted 
            >
                <source src="https://regionalonehealth-valeoonlinemarke.netdna-ssl.com/wp-content/uploads/2019/01/Hype-Cut-1-3kbps.m4v?x16063" type="video/mp4" />
            
            </video>
            <div className="" style={{backgroundColor: '#21407e', color: 'white', padding: '40px'}}>
                <div>
                 <h1>Schedule an Appointment</h1>
                 <p>Regional One Health is home to a world-class team of primary care providers <br /> and specialists. Our comprehensive health system offers convenient
                      locations  <br /> through Memphis to provide preventative and follow-up care.</p>
                </div>
                <div style={{marginTop: '40px'}} >
                    <button className="text-white block bg-blue-700 hover:bg-teal-600 mx-auto p-4 rounded-full py-3 px-6>Book By Phone">Book By Phone</button>
                </div>
            </div>
            <div>
                <img src="https://regionalonehealth-valeoonlinemarke.netdna-ssl.com/wp-content/uploads/2020/01/Blog-header_home_page-1.jpg?x16063" alt="" />
            </div>
            <div style={{marginTop: '40px', marginBottom: '40px'}}>
                <h1 style={{marginBottom: '20px', fontSize: '40px', fontWeight: 'bold'}}>Our Services</h1>
                <div className="card-container">
                {
                    service.map(service => <Service
                    key = {service.id} 
                   service = {service} ></Service>)
                }
                </div>
              
            </div>
        </div>
    );
};

export default Home;