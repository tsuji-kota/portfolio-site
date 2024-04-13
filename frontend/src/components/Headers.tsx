"use client";

import { Box, Tab } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import React, { useState } from "react";

import { Histories } from "./Components";

export const Headers = () => {
  const [tabValue, setTabValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <TabContext value={tabValue}>
        <TabList onChange={handleChange}>
          <Tab label="HISTROY" value="1" />
          <Tab label="ABOUT Me" value="2" />
        </TabList>

        <TabPanel value="1">
          <Histories />
        </TabPanel>
        <TabPanel value="2">About Me</TabPanel>
      </TabContext>
    </div>
  );
};
