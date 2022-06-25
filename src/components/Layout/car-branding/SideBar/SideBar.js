import React, { useState } from "react";
import { ReactComponent as UCARSLogo } from "@assets/icons/UCARSLogo.svg";
import { ReactComponent as TaskIcon } from "@assets/icons/task.svg";
import { ReactComponent as MenuFold } from "@assets/icons/menu-fold.svg";
import { ReactComponent as SettingIcon } from "@assets/icons/setting.svg";
import { ReactComponent as CarIcon } from "@assets/icons/car-icon.svg";
import { ReactComponent as ArrowDown } from "@assets/icons/drop-down.svg";
import "./SideBar.scss";

function SideBar() {
  const ListTasks = () => {
    const tasks = ["Tasks", "Modules", "Notification"];
    return tasks.map((task, index) => {
      return (
        <div key={index} className="wrapper-sidebar__task-item">
          <TaskIcon />
          <p>{task}</p>
        </div>
      );
    });
  };
  return (
    <div className="wrapper-sidebar">
      <div className="wrapper-sidebar__header">
        <UCARSLogo className="logo" />
        <MenuFold />
      </div>
      <div className="wrapper-sidebar__task-item wrapper-sidebar__item--active">
        <CarIcon />
        <p>Car Brand</p>
      </div>
      <div className="wrapper-sidebar__task-item--folder">
        <div>
          <TaskIcon />
          <p>Folder</p>
        </div>
        <ArrowDown className="arrow"/>
      </div>
      <ListTasks />
      <div>
        <div className="wrapper-sidebar__divider">&nbsp;</div>
        <div className="wrapper-sidebar__task-item">
          <SettingIcon />
          <p>Setting</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
