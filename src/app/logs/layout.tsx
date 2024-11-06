import type { PropsWithChildren } from "react";

const LogsLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="font-[family-name:var(--font-geist-sans)] py-10">
      {children}
    </main>
  );
};

export default LogsLayout;
