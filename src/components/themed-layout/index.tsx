"use client";

import Image from "next/image";
import { Header } from "@components/header";
import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import React from "react";
import { Typography } from "antd";
import MilkymoIcon from "@app/splash1024.png";

const { Title } = Typography;
export const ThemedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={() => <Header sticky />}
      Sider={() => (
        <ThemedSiderV2
          Title={({ collapsed }) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={MilkymoIcon}
                width={24}
                height={24}
                alt="Milkymo Icon"
              />
              {/* This will render the Icon.co icon */}
              {!collapsed && (
                <h1 style={{ marginLeft: "10px", paddingTop: "10px" }}>
                  MilkyMo
                </h1>
              )}
            </div>
          )}
        />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
};
