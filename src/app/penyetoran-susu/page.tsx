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
  FilterDropdown,
} from "@refinedev/antd";
import { BaseRecord, HttpError, useMany } from "@refinedev/core";
import { Space, Table, Typography, Row, Col, Radio } from "antd";
import React, { useState, useEffect } from "react";
import { TotalCountCard } from "./components/total-count-card";
import { ITransactionsInterface } from "@providers/data-provider/transactions-provider";

const { Text } = Typography;

export default function PenyetoranSusu() {
  const { tableQueryResult, tableProps } = useTable({
    resource: "transactions",
    pagination: {
      mode: "off",
    },
    // errorNotification(error, values, resource) {
    //   return error, values, resource;
    // },
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const transactions = tableQueryResult.data?.data || [];
  const totalVolume = transactions
    .reduce((total, transaction) => total + (transaction.milk_volume || 0), 0)
    .toFixed(2);

  const [morningVolume, setMorningVolume] = useState(0);
  const [afternoonVolume, setAfternoonVolume] = useState(0);

  useEffect(() => {
    const today = moment().startOf("day");
    const morningStart = moment().startOf("day").hour(6); // Waktu awal pagi
    const morningEnd = moment().startOf("day").hour(12); // Waktu akhir pagi
    const afternoonStart = moment().startOf("day").hour(12); // Waktu awal sore
    const afternoonEnd = moment().startOf("day").hour(18); // Waktu akhir sore

    const morningTransactions = transactions.filter(
      (transaction) =>
        moment(transaction.createdAt).isSame(today, "day") &&
        moment(transaction.createdAt).isBetween(morningStart, morningEnd)
    );

    const afternoonTransactions = transactions.filter(
      (transaction) =>
        moment(transaction.createdAt).isSame(today, "day") &&
        moment(transaction.createdAt).isBetween(afternoonStart, afternoonEnd)
    );

    const morningTotalVolume = morningTransactions.reduce(
      (total, transaction) => total + (transaction.milk_volume || 0),
      0
    );

    const afternoonTotalVolume = afternoonTransactions.reduce(
      (total, transaction) => total + (transaction.milk_volume || 0),
      0
    );

    setMorningVolume(morningTotalVolume);
    setAfternoonVolume(afternoonTotalVolume);
  }, [transactions]);

  // Menyimpan admin_id dari setiap transaksi dalam sebuah array
  const adminIds = transactions?.map(({ admin_id }) => admin_id) || [];

  const { data: adminData, isLoading: dataIsLoading } = useMany({
    resource: "admins",
    ids: adminIds, // Menggunakan adminIds sebagai nilai untuk properti ids
  });

  return (
    <List
      title="Penyetoran susu"
      createButtonProps={{ children: "Buat Transaksi" }}
    >
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={8} xl={8}>
          <TotalCountCard
            resource="MORNING"
            totalCount={parseFloat(morningVolume.toFixed(2))}
          />
        </Col>
        <Col xs={24} sm={8} xl={8}>
          <TotalCountCard
            resource="AFTERNOON"
            totalCount={parseFloat(afternoonVolume.toFixed(2))}
          />
        </Col>
        <Col xs={24} sm={8} xl={8}>
          <TotalCountCard
            resource="TOTAL"
            totalCount={parseFloat(totalVolume)}
          />
        </Col>
      </Row>
      <Table {...tableProps} rowKey="id" style={{ marginTop: "32px" }}>
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
        <Table.Column
          dataIndex="time"
          title={"WAKTU"}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Radio.Group>
                <Radio value="Pagi">Pagi</Radio>
                <Radio value="Sore">Sore</Radio>
              </Radio.Group>
            </FilterDropdown>
          )}
        />
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
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
