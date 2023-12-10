import React from 'react';
import CardAction from '../../components/CardAction';

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
           
        <CardAction
        title="Custom Title"
        description="Custom Description"
        imageUrl="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        altText="Custom Alt Text"
        buttonText="BUY NOW"
      />
        </div>
    )
}

export default Blog;