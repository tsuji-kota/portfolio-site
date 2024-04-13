"use client";
import { Avatar, AvatarGroup, Tab, Box } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import React, { useState } from "react";
import { Histories } from "./Components";

import "../styles/Header.css";

export const Header = () => {
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="headers">
      <AvatarGroup max={7} className="AvaterGroups">
        <Avatar className="avatar" sx={{ width: 49, height: 49 }} alt="Y">
          Y
        </Avatar>
        <Avatar sx={{ width: 49, height: 49 }} alt="u">
          u
        </Avatar>
        <Avatar sx={{ width: 49, height: 49 }} alt="k">
          K
        </Avatar>
        <Avatar sx={{ width: 49, height: 49 }} alt="k">
          H
        </Avatar>
        <Avatar sx={{ width: 49, height: 49 }} alt="e">
          o
        </Avatar>
        <Avatar sx={{ width: 49, height: 49 }} alt="e" src="">
          e
        </Avatar>
        <Avatar
          sx={{ width: 49, height: 49 }}
          alt="e"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Yukhoe_by_kimishowota_in_Utsunomiya%2C_Tochigi.jpg/240px-Yukhoe_by_kimishowota_in_Utsunomiya%2C_Tochigi.jpg"
        ></Avatar>
        <Avatar
          sx={{ width: 49, height: 49 }}
          className="avatar"
          alt="e"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Yukhoe_by_kimishowota_in_Utsunomiya%2C_Tochigi.jpg/240px-Yukhoe_by_kimishowota_in_Utsunomiya%2C_Tochigi.jpg"
        ></Avatar>
      </AvatarGroup>
      <TabContext value={tabValue}>
        <TabList className="tablist" onChange={handleChange}>
          <Tab label="HISTROY" value="1" />
          <Tab label="ABOUT Me" value="2" />
        </TabList>
        <Box className="tabpanelBox">
          <TabPanel className="tabpanel-container" value="1">
            <Histories />
          </TabPanel>
          <TabPanel className="tabpanel-container" value="2">
            About Me
          </TabPanel>
        </Box>
      </TabContext>
    </div>
  );
};
