import React, { useState, useEffect } from "react";
import { useGetProjectsApiQuery, useGetAllProjectDataQuery } from "../store/projectsApi";
// import CardAction from "../../components/CardAction";
import CreateProject from "./CreateProject";
import { Box } from "@mui/material";
import MyTable from "../../components/Table";



const Product = () => {
  const [tableData, setTableData] = useState([]);
  const { data } = useGetProjectsApiQuery();
  const { data: getAllProject, isSuccess } = useGetAllProjectDataQuery();

  console.log("data", data);
  const tableColumns = [
    { id: "id", label: "ID" },
    { id: "title", label: "Title" },
    { id: "published", label: "Published" },
    { id: "price", label: "Price" },
  ];

  useEffect(() => {
    if (isSuccess) {
      setTableData(getAllProject?.projects);
    }
  }, [isSuccess, getAllProject?.projects]);

  return (
    <>
      <CreateProject />

      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          paddingLeft: "10%",
          paddingTop: "2%",
        }}
      >
        {data?.projects?.map((item) => (
          <CardAction
            key={item?.id}
            title={item?.title}
            description={item?.description}
            imageUrl={
              item?.image_link ??
              "https://mui.com/static/images/cards/contemplative-reptile.jpg"
            }
            altText="Custom Alt Text"
            buttonText="BUY NOW"
          />
        ))}
      </div> */}
      <Box sx={{ pt: 2 }}>
        <MyTable columns={tableColumns} data={tableData} />
      </Box>
    </>
  );
};

export default Product;
