import * as React from 'react';
import { useState } from 'react';
import { Switch, FormControlLabel, Button, TextField, Dialog, DialogActions, DialogContent } from '@mui/material';
import { useAddPostMutation } from '../store/projectsApi'; //update correct path
import DialogTitle from '@mui/material/DialogTitle';

const CreateProject = () => {
    const [createProject, { isLoading, isError }] = useAddPostMutation();

    // State to manage form data
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        image_link: '',
        published: false,
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // To Handle open and close
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        createProject(formData)
            .then((result) => {
                // Handle success
                console.log('Project created successfully:', result.data);
            })
            .catch((error) => {
                // Handle error
                console.error('Error creating project:', error.message);
            });
    };

    return (
        <React.Fragment>
            <div style={{ marginTop: 40 }}>
                <div style={{ backgroundColor: 'grey', textAlign: 'right' }}>
                    <Button style={{ color: 'white' }} onClick={handleClickOpen}>
                        Create Project
                    </Button>
                </div>

                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>Create Project</DialogTitle>
                    <DialogContent >
                        {/* <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Project Title"
                        type="text"
                    // variant="standard"
                    /> */}


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
                        {isError && <p style={{ color: 'red' }}>Error creating project</p>}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit"
                            onClick={handleSubmit} variant="contained" color="primary" disabled={isLoading}>
                            {isLoading ? 'Creating...' : 'Create Project'}
                        </Button>

                    </DialogActions>
                </Dialog>

            </div>
        </React.Fragment>
    );
}

export default CreateProject;