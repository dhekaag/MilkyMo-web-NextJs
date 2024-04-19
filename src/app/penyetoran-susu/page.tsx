"use client";

import moment from "moment";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, HttpError, useMany } from "@refinedev/core";
import { Space, Table, Typography } from "antd";
import React from "react";
import { log } from "console";

const { Text } = Typography;

export default function PenyetoranSusu() {
  const { tableQueryResult, tableProps } = useTable({
    resource: "transactions",
    pagination: {
      mode: "off",
    },
  });
  const transactions = tableQueryResult.data?.data;
  console.log(transactions);

  // Menyimpan admin_id dari setiap transaksi dalam sebuah array
  const adminIds = transactions?.map(({ admin_id }) => admin_id) || [];

  const { data: adminData, isLoading: dataIsLoading } = useMany({
    resource: "admins",
    ids: adminIds, // Menggunakan adminIds sebagai nilai untuk properti ids
  });

  if (dataIsLoading) {
    console.log("Loading admin fetch data...");
  }
  if (adminData) {
    console.log("admin data : " + adminData?.data);
  }

  return (
    <List
      title="Penyetoran susu"
      createButtonProps={{ children: "Buat Transaksi" }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="user_id" title={"ID PETERNAK"} />
        <Table.Column dataIndex="user_name" title={"NAMA PETERNAK"} />
        <Table.Column dataIndex="milk_volume" title={"VOLUME SUSU"} />

        <Table.Column
          dataIndex="createdAt"
          title={"TANGGAL"}
          render={(createdAt) => moment(createdAt).format("DD-MM-YYYY")}
        />
        <Table.Column
          dataIndex="createdAt"
          title={"JAM"}
          render={(createdAt) => moment(createdAt).format("HH:mm")}
        />
        <Table.Column dataIndex="time" title={"WAKTU"} />
        <Table.Column
          dataIndex="admin_id"
          title={"NAMA PENGURUS"}
          render={(value) =>
            dataIsLoading ? (
              <>Loading...</>
            ) : (
              adminData?.data?.find((data) => {
                console.log(data.id_admin);
                return data.id_admin === value;
              })?.name
            )
          }
        />
        <Table.Column
          title={"Lainnya"}
          dataIndex="user_id"
          render={(id_peternak) => (
            <Space>
              <EditButton hideText size="small" recordItemId={id_peternak} />
              <ShowButton hideText size="small" recordItemId={id_peternak} />
              <DeleteButton
                hideText
                size="small"
                recordItemId={id_peternak}
                resource="users"
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
