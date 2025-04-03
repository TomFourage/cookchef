import { Outlet } from "react-router-dom";
import AdminNav from "./components/AdminNav/AdminNav";
import { Suspense } from "react";

function Admin() {
  return (
    <div className="d-flex flex-fill p-20">
      <AdminNav />
      <div className="d-flex flex-column flex-fill">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default Admin;
