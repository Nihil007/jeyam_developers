import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Public components */
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import PostMyLand from "./components/pages/post";
import Explore from "./components/pages/explore";
import Commercial from "./components/pages/explorepages/commercial";
import Residential from "./components/pages/explorepages/residential";
import Industrial from "./components/pages/explorepages/industrial";
import Rawland from "./components/pages/explorepages/rawland";
import Thirumangalam from "./components/pages/explorepages/thirumangalam";
import PropertyCommercial from "./components/pages/explorepages/propcommercial";

/* Admin components */
import AdminNavbar from "./components/admin/adminNavbar";
import AdminFooter from "./components/admin/adminFooter";
import AdminDashboard from "./components/pages/admin/dashboard";  
import ManageLands from "./components/pages/admin/lands";  
import ManageUsers from "./components/pages/admin/users";  
import UsersDetails from "./components/pages/admin/userdetails";
import NewLand from "./components/pages/admin/addland";
import EditLand from "./components/pages/admin/editland";
import Enquiries from "./components/pages/admin/enquiries";

/* PUBLIC LAYOUT */
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[linear-gradient(rgba(6,32,12,0.75),rgba(6,32,12,0.75)),url('/bg.webp')] bg-cover bg-center">
      <NavBar />
      <main className="pt-6">{children}</main>
      <Footer />
    </div>
  );
};

/* ADMIN LAYOUT */
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <main className="pt-20 px-6">{children}</main>
      <AdminFooter />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/explore" element={<PublicLayout><Explore /></PublicLayout>} />
        <Route path="/explore/commercial" element={<PublicLayout><Commercial /></PublicLayout>} />
        <Route path="/explore/thirumangalam" element={<PublicLayout><Thirumangalam /></PublicLayout>} />
        <Route path="/explore/propcommercial" element={<PublicLayout><PropertyCommercial /></PublicLayout>} />
        <Route path="/explore/residential" element={<PublicLayout><Residential /></PublicLayout>} />
        <Route path="/explore/industrial" element={<PublicLayout><Industrial /></PublicLayout>} />
        <Route path="/explore/rawland" element={<PublicLayout><Rawland /></PublicLayout>} />
        <Route path="/post" element={<PublicLayout><PostMyLand /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

        {/* ---------- ADMIN ROUTES ---------- */}
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        {/* Add more admin routes here */}
        <Route path="/admin/users" element={<AdminLayout><ManageUsers /></AdminLayout>} />
        <Route path="/admin/lands" element={<AdminLayout><ManageLands /></AdminLayout>} />
        <Route path="/admin/users/userdetails" element={<AdminLayout><UsersDetails /></AdminLayout>} />
        <Route path="/admin/lands/addland" element={<AdminLayout><NewLand /></AdminLayout>} />
        <Route path="/admin/lands/editland" element={<AdminLayout><EditLand /></AdminLayout>} />
        <Route path="/admin/enquiries" element={<AdminLayout><Enquiries /></AdminLayout>} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
