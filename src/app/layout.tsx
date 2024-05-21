import { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { Refine } from "@refinedev/core";
import { DevtoolsProvider } from "@providers/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { useNotificationProvider } from "@refinedev/antd";
import routerProvider from "@refinedev/nextjs-router";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@refinedev/antd/dist/reset.css";
import { ColorModeContextProvider } from "@contexts/color-mode";
import { authProvider } from "@providers/auth-provider";
import { SITE_DESC, SITE_TITLE } from "@utils/constanst";
import { dataProvider } from "@providers/data-provider";
import {
  CalendarOutlined,
  ContainerOutlined,
  CrownOutlined,
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const runtime = "edge";
export const dynamic = "force-static";

const APP_NAME = "MilkyMo";
const APP_DEFAULT_TITLE = "MilkyMo";
const APP_DESCRIPTION =
  "MilkyMo web app for managing data on dairy farming products";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    description: APP_DESCRIPTION,
  },
  icons: {
    icon: "/splash1024.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <html lang="id">
      <body>
        <Suspense>
          <RefineKbarProvider>
            <AntdRegistry>
              <ColorModeContextProvider defaultMode={defaultMode}>
                <DevtoolsProvider>
                  <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider}
                    notificationProvider={useNotificationProvider}
                    authProvider={authProvider}
                    resources={[
                      {
                        name: "Penyetoran Susu",
                        list: "/penyetoran-susu",
                        create: "/penyetoran-susu/create",
                        // edit: "/blog-posts/edit/:id",
                        // show: "/blog-posts/show/:id",
                        meta: {
                          label: "Penyetoran Susu",
                          icon: <DashboardOutlined />,
                          canDelete: false,
                        },
                      },
                      {
                        name: "Stok dan Penjualan Susu",
                        list: "/stok-penjualan-susu",
                        create: "/stok-penjualan-susu/create",
                        // edit: "/blog-posts/edit/:id",
                        // show: "/blog-posts/show/:id",
                        meta: {
                          label: "Stok Susu",
                          icon: <DashboardOutlined />,
                          canDelete: false,
                        },
                      },
                      {
                        name: "Daftar Peternak",
                        list: "/daftar-peternak",
                        create: "/daftar-peternak/create",
                        edit: "/daftar-peternak/edit/:id",
                        show: "/daftar-peternak/show/:id",
                        meta: {
                          canDelete: true,
                          label: "Daftar Peternak",
                          icon: <TeamOutlined />,
                        },
                      },
                      {
                        name: "Daftar Admin",
                        list: "/daftar-admin",
                        create: "/daftar-admin/create",
                        edit: "/daftar-admin/edit/:id",
                        show: "/daftar-admin/show/:id",
                        meta: {
                          label: "Daftar Admin",
                          icon: <TeamOutlined />,
                          canDelete: true,
                        },
                      },
                    ]}
                    options={{
                      // syncWithLocation: true,
                      warnWhenUnsavedChanges: true,
                      projectId: "DVmwvl-UBqF04-8TSpeC",
                    }}
                  >
                    {children}
                    <RefineKbar />
                  </Refine>
                </DevtoolsProvider>
              </ColorModeContextProvider>
            </AntdRegistry>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
