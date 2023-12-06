import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel, Container, Typography } from '@mui/material';
import { useAddPostMutation } from '../../store/projectsApi'; // Update with the correct import path

const CreateProjectForm = () => {
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
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Create Project
      </Typography>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Project'}
        </Button>
        {isError && <p style={{ color: 'red' }}>Error creating project</p>}
      </form>
    </Container>
  );
};

export default CreateProjectForm;
