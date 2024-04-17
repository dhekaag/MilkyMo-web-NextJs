import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
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
                        name: "Daftar Peternak",
                        list: "/daftar-peternak",
                        create: "/daftar-peternak/create",
                        edit: "/daftar-peternak/edit/:id",
                        show: "/daftar-peternak/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                      {
                        name: "Daftar Admin",
                        list: "/daftar-admin",
                        create: "/daftar-admin/create",
                        edit: "/daftar-admin/edit/:id",
                        show: "/daftar-admin/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                      {
                        name: "Penyetoran Susu",
                        list: "/penyetoran-susu",
                        // create: "/blog-posts/create",
                        // edit: "/blog-posts/edit/:id",
                        // show: "/blog-posts/show/:id",
                        // meta: {
                        //   canDelete: true,
                        // },
                      },

                      {
                        name: "blog_posts",
                        list: "/blog-posts",
                        create: "/blog-posts/create",
                        edit: "/blog-posts/edit/:id",
                        show: "/blog-posts/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                      {
                        name: "categories",
                        list: "/categories",
                        create: "/categories/create",
                        edit: "/categories/edit/:id",
                        show: "/categories/show/:id",
                        meta: {
                          canDelete: true,
                        },
                      },
                    ]}
                    options={{
                      // syncWithLocation: true,
                      warnWhenUnsavedChanges: true,
                      useNewQueryKeys: true,
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
