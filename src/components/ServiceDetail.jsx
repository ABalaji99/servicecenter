import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './apidata/Data';


const ServiceDetail = () => {
  const { id } = useParams();
  const service = data.find(s => s.id.toString() === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h1>{service.serviceName}</h1>
      <img src={service.servicelogo} alt={service.serviceName} />
      <p>{service.description || 'No description available'}</p>
    </div>
  );
};

export default ServiceDetail;
