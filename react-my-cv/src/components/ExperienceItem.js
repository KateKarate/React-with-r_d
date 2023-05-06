import React from 'react';

function ExperienceItem({ title, description, name, link }) {
  return (
    <div className='main-info'>
      <p><strong>Name of employer:</strong> {link ? <a href={link} target="_blank" rel="noreferrer">{name}</a> : name }</p>
      <p><strong>Job title:</strong> {title}</p>
      <p><strong>Role description:</strong> {description}</p>
    </div>
  );
}

export default ExperienceItem;
