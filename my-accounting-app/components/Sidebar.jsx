// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav style={{ width: "200px", background: "#f4f4f4", padding: "20px" }}>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/customers">Khách hàng</Link></li>
        <li><Link to="/invoices">Hóa đơn</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;