import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../../apidata/Data';



const Services = () => {
  const { id } = useParams();
  const service = data.find(s => s.id.toString() === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Define related services logic (for example, services with consecutive IDs)
  const relatedServices = data.filter(s => s.id !== service.id && (s.id === service.id - 1 || s.id === service.id + 1));

  return (
    <div>
      <h1>{service.serviceName}</h1>
      <img src={service.servicelogo || 'default_logo.svg'} alt={service.serviceName} />
      <p>{service.description || 'No description available'}</p>

      <h2>Related Services</h2>
      <ul>
        {relatedServices.map(relatedService => (
          <li key={relatedService.id}>
            <Link to={`/service/${relatedService.id}`}>
              <img src={relatedService.servicelogo || 'default_logo.svg'} alt={relatedService.serviceName} />
              {relatedService.serviceName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
