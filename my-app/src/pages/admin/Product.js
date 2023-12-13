import React from 'react';
import { useGetProjectsApiQuery } from "../store/projectsApi";
import CardAction from '../../components/CardAction';
import CreateProject from './CreateProject';

const Product = () => {
    const { data } = useGetProjectsApiQuery();
  console.log("data", data?.projects);
    return (
        <>
        <CreateProject />

        <div style={{display:'flex', flexWrap:'wrap', gap:'15px',paddingLeft:"10%", paddingTop:"2%"}}>
        {data?.projects?.map((item) => (
          <CardAction
            key={item?.id}
            title={item?.title}
            description={item?.description}
            imageUrl= {item?.image_link ?? "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
            altText="Custom Alt Text"
            buttonText="BUY NOW"
          />
        ))}
      </div>
      </>
    )
}

export default Product;