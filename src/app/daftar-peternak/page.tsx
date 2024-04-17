"use client";

import { IPeternakInterface } from "@providers/data-provider/peternak-provider";
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
import { Space, Table } from "antd";
import React from "react";

export default function DaftarPeternak() {
  const { tableQueryResult, tableProps } = useTable({
    resource: "users",
    pagination: {
      mode: "off",
    },
  });
  const peternak = tableQueryResult.data?.data;
  console.log(peternak);

  return (
    <List
      title="Daftar Peternak"
      createButtonProps={{ children: "Buat Akun Peternak" }}
    >
      <Table {...tableProps} rowKey="id_peternak">
        <Table.Column dataIndex="id_peternak" title={"ID PETERNAK"} />
        <Table.Column dataIndex="name" title={"NAMA"} />
        <Table.Column dataIndex="email" title={"EMAIL"} />
        <Table.Column dataIndex="phone_number" title={"NO. TELEPON"} />
      </Table>
    </List>
  );
}
