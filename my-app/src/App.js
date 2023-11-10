import React, { useEffect } from 'react';
import { useGetProjectsApiQuery } from './pages/store/projectsApi'; // Adjust the path accordingly

const ProjectsList = () => {
  const { data: projects, error, isLoading } = useGetProjectsApiQuery();

  useEffect(() => {
    // You can dispatch additional actions or handle data here
    if (error) {
      console.error('Error fetching projects:', error);
    }
  }, [error]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading projects data</p>;
  }

  console.log(projects?.projects);
  return (
    <div>
    {projects?.projects?.map(project => (
      <div key={project.id}>
        <img src={project.image_link} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>Price: ${project.price}</p>
      </div>
    ))}
  </div>
  );
};

export default ProjectsList;
