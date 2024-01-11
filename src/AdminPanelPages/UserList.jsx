import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "./data";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserEdit_Modal from "../Modals/UserEdit_Modal";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function UserList({ setselected }) {
  const [data, setData] = useState([]);

  const Fetch_All_Users = async () => {
    try {
      const res = await axios.get("http://localhost:5000/get_all_users?token=" + localStorage.getItem("instructor-token"));
      if (res.status === 200) {
        const row_data = res.data.map((item, index) => ({
          ...item,
          id: index + 1, // Assuming your IDs should start from 1
        }));
        setData(row_data);
      }
      else {
        toast.error("internal server error occured");
      }

    } catch (error) {
      toast.error("we are unable to connect to our servers");
      console.log(error);
    }
  }
  useEffect(() => {
    Fetch_All_Users();
  }, []);

  const handleDelete = async (id) => {
    try {
      let res = await axios.put("http://localhost:5000/delete_single_user?id=" + id);
      if (res.status === 200) {
        toast.success("deleted successfully");
        setData(data.filter((item) => item._id !== id));
      }
      else {
        toast.error("internal error occured");
      }
    } catch (error) {
      toast.error("connection to server failed");
    }
  }


  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "UserName",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={"http://localhost:5000/"+params.row.dp} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "profession", headerName: "Profession", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <UserEdit_Modal data={data} setdata={setData} User_id={params.row._id} key={params._id} />

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Toaster gutter={3} />

      {
        data.length > 0 ? (<>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
          />
        </>) : (<div style={{ textAlign: "center" }}><CircularProgress color="primary" content="Fetching data" /></div>)
      }
    </div>
  );
}