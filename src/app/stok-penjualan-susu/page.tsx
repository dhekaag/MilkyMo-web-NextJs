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
import { Space, Table, Typography, Row, Col } from "antd";
import React from "react";
import { TotalCountCard } from "./components/total-count-card";
import { ITransactionsInterface } from "@providers/data-provider/transactions-provider";

const { Text } = Typography;

export default function PenyetoranSusu() {
  const { tableQueryResult, tableProps } = useTable({
    resource: "transactions",
    pagination: {
      mode: "off",
    },
  });

  const transactions = tableQueryResult.data?.data || [];
  const totalVolume = transactions
    .reduce((total, transaction) => total + (transaction.milk_volume || 0), 0)
    .toFixed(2);

  // Menghitung total volume transaksi hari ini
  const today = moment().startOf("day");
  const totalTodayVolume = transactions
    .filter((transaction) => moment(transaction.createdAt).isSame(today, "day"))
    .reduce((total, transaction) => total + (transaction.milk_volume || 0), 0)
    .toFixed(2);

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
      title="Stok Dan Penjualan Susu"
      createButtonProps={{ children: "Buat Transaksi" }}
    >
      {/* <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCard
            resource="TODAY"
            totalCount={parseFloat(totalTodayVolume)}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCard
            resource="TOTAL"
            totalCount={parseFloat(totalVolume)}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <TotalCountCard
            resource="PENJUALAN"
            totalCount={parseFloat(totalVolume)}
          />
        </Col>
      </Row> */}
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="createdAt"
          title={"TANGGAL"}
          render={(createdAt) => moment(createdAt).format("DD-MM-YYYY")}
        />
        <Table.Column dataIndex="user_name" title={"STOK AWAL"} />
        <Table.Column dataIndex="milk_volume" title={"PENERIMAAN PAGI"} />

        <Table.Column
          dataIndex="createdAt"
          title={"PENJUALAN"}
          render={(createdAt) => moment(createdAt).format("DD-MM-YYYY")}
        />
        <Table.Column
          dataIndex="createdAt"
          title={"PENERIMAAN SORE"}
          render={(createdAt) => moment(createdAt).format("HH:mm")}
        />
        <Table.Column
          dataIndex="admin_id"
          title={"STOK AKHIR"}
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
              <DeleteButton hideText size="small" recordItemId={id_peternak} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
