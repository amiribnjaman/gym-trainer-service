import React, { useState, useEffect } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(data => data.json())
            .then(res => setServices(res))
    }, [])

    return (
        <div className='mt-24  mb-14 container w-11/12 mx-auto'>
            <div className=' mb-7'>
            <h2 className='font-bold text-2xl'>SERVICES</h2>
            <hr />
            </div>
            <div className='grid md:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;