"use client";
import React from "react";
import { useLogin } from "@refinedev/core";
import {
  Row,
  Col,
  Layout as AntdLayout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
} from "antd";
import type { AuthPageProps } from "@refinedev/core";
import "./styles.css";
import { FormProps } from "antd/lib";

const { Text, Title } = Typography;

export interface ILoginForm {
  userId: string;
  password: string;
  remember: boolean;
}

export const AuthPage: React.FC = (props: AuthPageProps) => {
  const [form] = Form.useForm<ILoginForm>();

  const { mutate: login } = useLogin<ILoginForm>();

  const CardTitle = (
    <Title level={3} className="title">
      MilkyMo
    </Title>
  );
  return (
    <AntdLayout className="layout">
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col xs={22}>
          <div className="container">
            <div className="imageContainer">
              {/* <img src="./refine.svg" alt="Refine Logo" /> */}
            </div>
            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
              <Form<ILoginForm>
                layout="vertical"
                form={form}
                onFinish={(values) => {
                  login(values);
                }}
                requiredMark={false}
                initialValues={{
                  remember: false,
                }}
              >
                <Form.Item
                  name="userId"
                  label="id admin"
                  rules={[
                    { required: true, message: "Tolong masukkan ID anda!" },
                  ]}
                >
                  <Input size="large" placeholder="Masukkan id admin" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Tolong masukkan password anda!",
                    },
                  ]}
                  style={{ marginBottom: "12px" }}
                >
                  <Input.Password placeholder="●●●●●●●●" size="large" />
                </Form.Item>
                <div style={{ marginBottom: "32px" }}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      Remember me
                    </Checkbox>
                  </Form.Item>

                  <a
                    style={{
                      float: "right",
                      fontSize: "12px",
                    }}
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button type="primary" size="large" htmlType="submit" block>
                  MASUK
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </AntdLayout>
  );
};
