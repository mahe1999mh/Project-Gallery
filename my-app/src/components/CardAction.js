// CardComponent.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';

// Functional Component
const CardAction = (props) => {
  const { title, description, imageUrl, altText, buttonText } = props;

  return (
    <Card sx={{ width: 300, height: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={altText}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:'flex', justifyContent:'space-between'}}>
        <Button size="small" >
          {buttonText}
        </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
  );
};

export default CardAction;
