import React, { ReactNode } from "react";
import MetaHead from "./MetaHead";

type Props = {
  headTitle: string;
  isFullWidth?: boolean;
  children: ReactNode;
};

export default function BlankLayout({
  headTitle,
  isFullWidth,
  children,
}: Props) {
  return (
    <>
      <MetaHead title={headTitle} />
      <div data-theme="light" className="overflow-hidden relative">
        <div className={`mx-auto isolate`}>
          {children}
          </div>
      </div>
    </>
  );
}
