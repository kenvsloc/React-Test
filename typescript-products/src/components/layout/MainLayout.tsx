// src/components/layout/MainLayout.tsx
import NavBar from "../common/HeaderBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;