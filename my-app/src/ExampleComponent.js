// ExampleComponent.js
import React, { useEffect } from 'react';
import { useGetProjectsAdminQuery } from './pages/store/projectsApi';

const ExampleComponent = () => {
  // Execute the query hook
  const { data, error, isLoading } = useGetProjectsAdminQuery();

  useEffect(() => {
    // Log the data to the console when it changes
    if (data) {
      console.log('Projects Data:', data);
    }

    // Log errors to the console
    if (error) {
      if (error.status === 401) {
        console.error('Unauthorized. Please log in.');
      } else {
        console.error('Non-JSON error response:', error);

        // Log the plain text error message
        console.error('Error message:', error.data);
      }
    }
  }, [data, error]);

  // Display loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Render your component based on the fetched data */}
      {/* For example, you can map over the data and render project names */}
      {data && data.projects.map((project) => <p key={project.id}>{project.id}</p>)}
    </div>
  );
};

export default ExampleComponent;
