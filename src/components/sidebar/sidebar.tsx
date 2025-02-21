import "./sidebar.scss";
import { Link } from "react-router-dom";

const SideBar = ({ isSidebarOpen, setSidebarOpen }) => {
  const sideBarMenuLis = [
    {
      className: "sideBarMenuLis",
      href: "/",
      text: "Dashboard",
      key: 0
    },
    {
      className: "sideBarMenuLis",
      href: "/registration-page",
      text: "Registration",
      key: 1
    },
    {
      className: "sideBarMenuLis",
      href: "/payments",
      text: "Payments",
      key: 2
    },
    {
      className: "sideBarMenuLis",
      href: "/store-settings",
      text: "Store Settings",
      key: 3
    },
    {
      className: "sideBarMenuLis",
      href: "/login-page",
      text: "Login",
      key: 4
    },
    {
      className: "sideBarMenuLis",
      href: "/test-table",
      text: "Test Table",
      key: 5
    },

  ];

  return (
    <div className={"menu " + (isSidebarOpen && "active")}>
      <ul>
        {sideBarMenuLis.map((li) => {
          return (
            <li className={li.className}>
              <Link to={li.href}>{li.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
