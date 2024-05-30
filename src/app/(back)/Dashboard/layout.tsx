import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2> I am Back Only Pages Layout</h2>
      {children}
    </div>
  );
}
