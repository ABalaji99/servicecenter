import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../apidata/Data';

const ServiceList = () => {
  return (
    <div>
      <h1>Service List</h1>
      <ul>
        {data.map(service => (
          <li key={service.id}>
            <Link to={`/service/${service.id}`}>
              <img src={service.servicelogo || 'default_logo.svg'} alt={service.serviceName} />
              {service.serviceName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
