import React, { useState } from 'react';
import { TextField, Switch, FormControlLabel, Button, Dialog, DialogActions, DialogContent, CircularProgress, DialogTitle } from '@mui/material';
import { useAddPostMutation } from '../../pages/store/projectsApi';

const ProjectForm = ({ open, onClose, onSubmit }) => {
    const [createProject, { isLoading, isError }] = useAddPostMutation();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        image_link: '',
        published: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Set loading to true while waiting for the project creation
            createProject(formData);

            setFormData({})
            onSubmit(formData); // You may want to handle submission after project creation is complete


        } catch (error) {
            console.error('Error creating project:', error.message);
        }
    };
    if (isError ?? isLoading) {
        return <CircularProgress size={24} />
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create Project</DialogTitle>
            <DialogContent>
                <TextField
                    label="Title"
                    fullWidth
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <TextField
                    label="Description"
                    fullWidth
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <TextField
                    label="Price"
                    fullWidth
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <TextField
                    label="Image Link"
                    fullWidth
                    name="image_link"
                    value={formData.image_link}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <FormControlLabel
                    control={
                        <Switch
                            name="published"
                            checked={formData.published}
                            onChange={handleInputChange}
                        />
                    }
                    label="Published"
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" size="large" onClick={onClose}>Cancel</Button>
                <Button type="submit" onClick={handleSubmit} variant="contained" size="large" color="primary" disabled={isLoading}>
                    {isLoading ? <CircularProgress size={24} /> : "Save Project"}
                </Button>

            </DialogActions>
        </Dialog>
    );
};

export default ProjectForm;
