"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

interface AuthData {
  admin_id: string;
}

export default function BuatTransaksi() {
  const { formProps, saveButtonProps } = useForm({
    resource: "transactions",
  });
  const [id_admin, setIdAdmin] = useState<string>("");

  useEffect(() => {
    const auth = Cookies.get("auth");
    if (auth) {
      const authData = JSON.parse(auth);
      setIdAdmin(authData.id_admin);
    }
  }, []); // Membuat useEffect hanya dijalankan sekali pada saat rendering pertama

  // Inisialisasi formProps.initialValues dengan id_admin

  return (
    <Create saveButtonProps={saveButtonProps} title="Buat Transaksi">
      <Form {...formProps} title="Buat Akun Peternak" layout="vertical">
        <Form.Item
          label={"ID PETERNAK"}
          name={["user_id"]}
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
          name={["user_name"]}
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
          label={"WAKTU"}
          name={["time"]}
          rules={[
            {
              required: true,
              message: "Waktu wajib diisi",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Volume susu"}
          name={["milk_volume"]}
          rules={[
            {
              required: true,
              message: "Nama wajib diisi",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"ID ADMIN"} name={["admin_id"]}>
          <Input defaultValue={id_admin} />
        </Form.Item>
      </Form>
    </Create>
  );
}
