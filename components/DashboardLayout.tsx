import React, { ReactNode, useState } from "react";

import DashboardHeader from "./parts/DashboardHeader";
import SideHeader from "./parts/SideHeader";
import Footer from "./parts/Footer";
import MetaHead from "./MetaHead";
import { AppContextProvider } from './AppContext';

type Props = {
  headTitle: string;
  isFullWidth?: boolean;
  children: ReactNode;
};

export default function Layout({ headTitle, children }: Props) {
  return (
    <>
      <MetaHead title={headTitle} />
      <AppContextProvider>
      <div data-theme="light" className="overflow-hidden relative">
        <DashboardHeader />
        <section className="flex flex-row overflow-x-hidden flex-auto">
          <SideHeader />
          <main className="bg_color_dash main_body w-full relative">
            <div className="middle_section">{children}</div>
          </main>
        </section>
      </div>
      </AppContextProvider>
    </>
  );
}
