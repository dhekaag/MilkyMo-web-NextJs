"use client";

import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import React from "react";

export default function EditDaftarPeternak() {
  const { formProps, saveButtonProps, queryResult, id } = useForm({
    resource: "users",
  });

  const blogPostsData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label={"ID PETERNAK"} name={["id_peternak"]} rules={[{}]}>
          <Input defaultValue={id} readOnly />
        </Form.Item>
        <Form.Item label={"NAMA"} name={["name"]} rules={[{}]}>
          <Input />
        </Form.Item>
        <Form.Item label={"NO. TELEPON"} name={["phone_number"]} rules={[{}]}>
          <Input />
        </Form.Item>
        <Form.Item label={"ALAMAT"} name={["address"]} rules={[{}]}>
          <Input />
        </Form.Item>
        <Form.Item label={"EMAIL"} name={["email"]} rules={[{}]}>
          <Input />
        </Form.Item>
        <Form.Item label={"PASSWORD"} name={["password"]} rules={[{}]}>
          <Input defaultValue={"member"} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
