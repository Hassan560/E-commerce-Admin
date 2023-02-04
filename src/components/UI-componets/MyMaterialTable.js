import React, { Fragment } from "react";
import MaterialTable from "material-table";

const MyMaterialTable = ({ columns, data, formName, onDelete, onEdit }) => {
  return (
    <Fragment>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <MaterialTable
        columns={columns}
        data={data}
        title={formName}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Book",
            onClick: (event, rowData) => onEdit(event, rowData),
          },
          {
            icon: "delete",
            tooltip: "Delete Book",
            onClick: (event, rowData) => onDelete(event, rowData),
          },
        ]}
        options={{ actionsColumnIndex: -1 }}
      />
    </Fragment>
  );
};

export default MyMaterialTable;
