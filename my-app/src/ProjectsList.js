import React from 'react';
import { useAdminProjectsQuery } from './pages/store/adminProjectsApi';

const ProjectsLists = () => {
    // Using the custom query hook
    const { data: projects, error, isLoading } = useAdminProjectsQuery();

    console.log(projects?.projects);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    return (
        <div>
            <h1>Projects List</h1>
            <ul>
                {projects?.projects?.map((project) => (
                    <li key={project?.id}>{project?.title}</li>
                ))}?
            </ul>
        </div>
    );
};

export default ProjectsLists;
