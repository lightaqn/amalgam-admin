import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import "./userArray.css";

export default function UserArray() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((unit) => unit.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    {
      field: "user",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userArrayUser">
            <img className="userArrayImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 250,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "Number",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userArrayEdit">
                <Edit />
              </button>
            </Link>
            <DeleteOutline
              className="userArrayDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="containerHome">
      <Navbar />
      <div className="smContainerHome">
        <Sidebar />
        <div className="userArray">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}
