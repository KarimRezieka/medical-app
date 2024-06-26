import React, { ReactNode } from "react";
import Navbar from '../../components/Frontend/Navbar'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
}
