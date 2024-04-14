"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Footer } from "@/components/Components";
import "./admin.css";

interface AboutFieldData {
  id: string;
  profile_id: string;
  title: string;
  markdown: string;
}

interface HistoryFieldData {
  id: string;
  profile_id: string;
  event_name: string;
  tag: string;
  img_path: string;
  make_time: string;
  contents: string;
}
const data = [
  {
    id: "1",
    profile_id: "tsuji kota",
    title: "BACKGRAUND",
    markdown:
      '## Headinggggg\n  This is a Markdown document\n  - List item 1\n  - List item 2\n  ## Subheading\n  ![OpenAI Logo](https://s3-ap-northeast-1.amazonaws.com/storage.withnews.jp/2020/07/16/e/90/e901117a-l.jpg "OpenAIのロゴ")\n  \n  \n  Here\'s some text with **bold** and *italic* formatting.',
  },
  {
    id: "2",
    profile_id: "tsuji kota",
    title: "BACKGRA111111D",
    markdown: `
  ## Heading
  This is a Markdown document.
  - List item 3
  - List item 4
  
  ## Subheading
  
  Here's some text with **bold** and *italic* formatting.`,
  },
];

const Admin = () => {
  const [fields, setFields] = useState<AboutFieldData[]>([
    { id: "0", title: "", markdown: "", profile_id: "" },
  ]);
  const [historyFields, setHistoryFields] = useState<HistoryFieldData[]>([
    {
      id: "0",
      profile_id: "",
      event_name: "",
      tag: "",
      img_path: "",
      make_time: "",
      contents: "",
    },
  ]);
  const handleSelectChange = (id: string, event: SelectChangeEvent) => {
    const newFields = historyFields.map((field) => {
      if (field.id === id) {
        return { ...field, tag: event.target.value };
      } else {
        return field;
      }
    });
    setHistoryFields(newFields);
  };

  const handleTextChange = (id: string, event: any) => {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, markdown: event.target.value };
      } else {
        return field;
      }
    });
    setFields(newFields);
  };

  const handleTitleChange = (id: string, event: any) => {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, title: event.target.value };
      } else {
        return field;
      }
    });
    setFields(newFields);
  };
  const handleEventnameChange = (id: string, event: any) => {
    const newFields = historyFields.map((field) => {
      if (field.id === id) {
        return { ...field, event_name: event.target.value };
      } else {
        return field;
      }
    });
    setHistoryFields(newFields);
  };
  const handleContentsChange = (id: string, event: any) => {
    const newFields = historyFields.map((field) => {
      if (field.id === id) {
        return { ...field, contents: event.target.value };
      } else {
        return field;
      }
    });
    setHistoryFields(newFields);
  };

  const handleSend = (event: any) => {
    console.log(fields);
    console.log(historyFields);
  };

  const handleAddField = (event: any) => {
    const newField = {
      id: fields.length.toString(),
      title: "",
      markdown: "",
      profile_id: "",
    };
    setFields([...fields, newField]);
  };

  const handleAddHistoryFrom = (event: any) => {
    const newField = {
      id: historyFields.length.toString(),
      profile_id: "",
      event_name: "",
      tag: "",
      img_path: "",
      make_time: "",
      contents: "",
    };
    setHistoryFields([...historyFields, newField]);
  };

  return (
    <div>
      <div className="nobiru">
        <h1>Admin Page</h1>

        <Box mt="5px">
          <Typography
            variant="h6"
            sx={{ fontFamily: "Roboto", fontWeight: 10, marginBottom: 2 }}
          >
            INFORMATION
          </Typography>
          <TextField id="outlined-basic" label="name" variant="outlined" />
        </Box>
        <Box mt="30px">
          <Typography
            variant="h6"
            sx={{ fontFamily: "Roboto", fontWeight: 10, marginBottom: 2 }}
          >
            ABOUT
          </Typography>
          {fields.map((field) => {
            return (
              <Box
                key={field.id}
                mt="10px"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <TextField
                  value={field.title}
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  sx={{ width: "20%" }}
                  onChange={(event) => handleTitleChange(field.id, event)}
                />

                <TextField
                  value={field.markdown}
                  id="outlined-multiline-static"
                  label="please write here markdown"
                  multiline
                  rows={4}
                  onChange={(event) => handleTextChange(field.id, event)}
                  sx={{ width: "50%" }}
                />
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            variant="outlined"
            sx={{ width: "55px" }}
            onClick={(event) => handleAddField(event)}
          >
            +
          </Button>
        </Box>

        <Box mt="30px">
          <Typography
            variant="h6"
            sx={{ fontFamily: "Roboto", fontWeight: 10, marginBottom: 2 }}
          >
            HISTORY
          </Typography>
          {historyFields.map((field) => {
            return (
              <Box
                key={field.id}
                mt="10px"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <TextField
                  value={field.event_name}
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  sx={{ width: "20%" }}
                  onChange={(event) => handleEventnameChange(field.id, event)}
                />

                <FormControl
                  sx={{
                    width: "20%",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={field.tag}
                    label="Tag"
                    onChange={(event) => handleSelectChange(field.id, event)}
                  >
                    <MenuItem value={"開発"}>開発</MenuItem>
                    <MenuItem value={"ストーリー"}>ストーリー</MenuItem>
                    <MenuItem value={"研究"}>研究</MenuItem>
                    <MenuItem value={"趣味"}>趣味</MenuItem>
                  </Select>
                </FormControl>

                <input type='file'/>

                <TextField
                  value={field.contents}
                  id="outlined-multiline-static"
                  label="please write here markdown"
                  multiline
                  rows={4}
                  onChange={(event) => handleContentsChange(field.id, event)}
                  sx={{ width: "50%" }}
                />
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{ width: "55px", marginTop: "20px" }}
            onClick={(event) => handleAddHistoryFrom(event)}
          >
            +
          </Button>

          <Button
            variant="outlined"
            sx={{ width: "55px", marginTop: "20px" }}
            onClick={(event) => handleSend(event)}
          >
            send
          </Button>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
