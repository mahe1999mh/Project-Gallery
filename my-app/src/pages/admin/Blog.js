import React from "react";
import CardAction from "../../components/CardAction";
import { useGetProjectsApiQuery } from "../store/projectsApi";

const Blog = () => {
  const { data } = useGetProjectsApiQuery();
  console.log("data", data?.projects);
  return (
    <div style={{display:'flex', gap:'10px', paddingTop:"5%"}}>
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
  );
};

export default Blog;
