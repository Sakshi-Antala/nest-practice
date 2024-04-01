import { Menubar } from "primereact/menubar";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopMenuBar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {navigate('/') }
    },
    {
      label: "Task",
      icon: "pi pi-list",
      command: () => {navigate('/task') }
    },
    {
      label: "Account",
      icon: "pi pi-user",
      items: [
        {
          label: "Profile",
          icon: "pi pi-user",
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
        },
      ],
    },
  ];
  return (
    <div>
      <Menubar model={items} />
    </div>
  );
};

export default TopMenuBar;
