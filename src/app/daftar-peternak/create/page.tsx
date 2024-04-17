"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import React from "react";

export default function CategoryCreate() {
  const { formProps, saveButtonProps } = useForm({ resource: "users/create" });

  return (
    <Create saveButtonProps={saveButtonProps} title="Buat Akun Peternak">
      <Form {...formProps} title="Buat Akun Peternak" layout="vertical">
        <Form.Item
          label={"ID PETERNAK"}
          name={["id_peternak"]}
          rules={[
            {
              required: true,
              message: "Id peternak wajib diisi",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"NAMA"}
          name={["name"]}
          rules={[
            {
              required: true,
              message: "Nama wajib diisi",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"NO. TELEPON"}
          name={["phone_number"]}
          rules={[
            {
              required: true,
              message: "No. telephone wajib diisi",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"ALAMAT"}
          name={["address"]}
          rules={[
            {
              required: true,
              message: "Alamat wajib diisi",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"EMAIL"} name={["email"]} rules={[{}]}>
          <Input />
        </Form.Item>
        <Form.Item label={"PASSWORD"} name={["password"]} rules={[{}]}>
          <Input defaultValue={"member"} />
        </Form.Item>
      </Form>
    </Create>
  );
}
