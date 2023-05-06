import React, { useState } from 'react';
import ExperienceItem from './ExperienceItem';

function Experience() {
  const [experiences, setExperiences] = useState([
    {
      title: 'Substitute teacher',
      description: 'General support of all the staff members, substituting absent teachers.',
      name: 'Utrecht International School',
      link: 'https://www.isutrecht.nl/staffmembers/katya-hyrenko/',
    },
    {
      title: 'ESL teacher, Cambridge speaking examiner',
      description: 'Created and executed engaging ESL lesson plans according to syllabus requirements, provided a nurturing and supportive learning environment that encouraged student responsibility and incorporated challenging instructional strategies, adapted the curriculum to provide individual, small group, and/or remedial instruction to meet the needs of individual students and subgroups of students, provided basic, intermediate, and advanced English language lessons to 30+ students aged 3 - 55, provided tailored feedback to students and parents, identifying constructive areas for improvement, delivered classes to 30+ students via Zoom, adapting to student needs.',
      name: 'OEA Vietnam',
      link: 'https://oea-vietnam.com/en/home/',
    },
  ]);

  const [newExperience, setNewExperience] = useState({
    title: '',
    description: '',
    name: '',
    link: '',
  });

  const handleAddExperience = () => {
    const link = newExperience.link.startsWith("http") ? newExperience.link : `https://${newExperience.link}`;
  
    setExperiences([...experiences, {...newExperience, link}]);
    setNewExperience({
      title: '',
      description: '',
      name: '',
      link: '',
    });
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  return (
    <div className='experience'>
      <h1 className='main-heading'>Work Experience</h1>
      <ExperienceItem {...experiences[0]} />
      <br />
      {experiences.slice(1).map((experience, index) => (
        <div key={index}>
          <hr />
          <ExperienceItem {...experience} />
        </div>
      ))}
      <br />
      <form>
        <h2>Add new experience</h2>
        <label>
          Job title:
          <input type="text" name="title" value={newExperience.title} onChange={handleInputChange} />
        </label>
        <label>
          Job description:
          <textarea name="description" value={newExperience.description} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Name of employer:
          <input type="text" name="name" value={newExperience.name} onChange={handleInputChange} />
        </label>
        <label>
          Link to employer:
          <input type="text" name="link" value={newExperience.link} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAddExperience}>Add experience</button>
      </form>
    </div>
  );
}

export default Experience;
