import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import ProjectForm from '../../components/ProjectForm/ProjectForm'; 
const CreateProject = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateProject = (formData) => {
        // Handle the form data submission here
        console.log('Form data submitted:', formData);
        setOpen(false); // Close the dialog after submission
    };

    return (
        <React.Fragment>
            <div style={{ marginTop: 40, paddingLeft: '3%', paddingRight: '3%' }}>
                <Box sx={{ backgroundColor: "#eceff1", textAlign: 'right', height: "5%", borderRadius: "15px" }}>
                    <Button variant="contained" style={{ color: '#eceff1', margin: "8px" }} onClick={handleClickOpen}>
                        Add Project
                    </Button>
                </Box>

                <ProjectForm open={open} onClose={handleClose} onSubmit={handleCreateProject} />
            </div>
        </React.Fragment>
    );
}

export default CreateProject;
