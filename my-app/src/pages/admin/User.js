import React, { useEffect, useState } from "react";
import MyTable from "../../components/Table";
import {
  useDeleteProjectMutation,
  useGetAllProjectDataQuery,
  useGetAllUserDataQuery,
  useGetProjectsApiQuery,
} from "../store/projectsApi";
import { Box } from "@mui/material";

const Users = () => {
  const [tableData, setTableData] = useState([]);
  const { data } = useGetProjectsApiQuery(); // all projrct data
  const { data: getAllUser } = useGetAllUserDataQuery(); //all user data api
  const [deleteProject] = useDeleteProjectMutation(); // Delete project
  const { data: getAllProject, isSuccess } = useGetAllProjectDataQuery();
  console.log("getAllUser", data, deleteProject, getAllProject, getAllUser);

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
    <Box sx={{ pt: 2 }}>
      <MyTable columns={tableColumns} data={tableData} />
    </Box>
  );
};

export default Users;
