"use client";

import {
  CreateButton,
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

export default function DaftarAdmin() {
  const { tableProps } = useTable({
    resource: "admins",
    pagination: {
      mode: "off",
    },
  });

  return (
    <List
      createButtonProps={{ children: "Buat Akun Admin" }}
      title="Daftar Admin"
    >
      <Table {...tableProps} rowKey="id_admin">
        <Table.Column dataIndex="id_admin" title={"ID ADMIN"} />
        <Table.Column dataIndex="name" title={"NAMA"} />
        <Table.Column dataIndex="email" title={"EMAIL"} />
        <Table.Column dataIndex="phone_number" title={"NO. TELEPON"} />
        <Table.Column dataIndex="role" title={"ROLE"} />
      </Table>
    </List>
  );
}
