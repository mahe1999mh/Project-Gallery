import React, { useEffect, useState } from "react";
import MyTable from "../../components/Table";
import {
  useGetAllUserDataQuery,
} from "../store/projectsApi";
import { Box } from "@mui/material";

const Users = () => {
  const [tableData, setTableData] = useState([]);
  const { data } = useGetAllUserDataQuery();
  const { data: getAllUser, isSuccess } = useGetAllUserDataQuery(); //all user data api
  console.log("getAllUser", data, getAllUser);

  const tableColumns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "phoneNumber", label: "Phone Number" },
    { id: "password", label: "Password" },
  ];

  useEffect(() => {
    if (isSuccess) {
      setTableData(getAllUser);
    }
  }, [isSuccess, getAllUser]);

  return (
    <Box sx={{ pt: 2 }}>
      <MyTable columns={tableColumns} data={tableData} />
    </Box>
  );
};

export default Users;
