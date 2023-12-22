import React, { useEffect, useState } from "react";
import MyTable from "../../components/Table";
import {
  useGetAllUserDataQuery,
  useGetProjectsApiQuery,
} from "../store/projectsApi";
import { Box } from "@mui/material";

const Users = () => {
  const [tableData, setTableData] = useState([]);
  const { data, isSuccess } = useGetProjectsApiQuery(); // all projrct data
  const { data: getAllUser } = useGetAllUserDataQuery(); //all user data api
  console.log("getAllUser", getAllUser);

  const tableColumns = [
    { id: "id", label: "ID" },
    { id: "title", label: "Title" },
    { id: "published", label: "Published" },
    { id: "price", label: "Price" },
  ];

  useEffect(() => {
    if (isSuccess) {
      setTableData(data?.projects);
    }
  }, [isSuccess, data?.projects]);

  return (
    <Box sx={{ pt: 2 }}>
      <MyTable columns={tableColumns} data={tableData} />
    </Box>
  );
};

export default Users;
