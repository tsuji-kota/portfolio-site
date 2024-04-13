import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header, Contents, Footer } from "@/components/components";
import "./about.css";
interface Contents {
  id: string;
  profile_id: string;
  title: string;
  markdown: string;
}

const data2 = "# Hi, *Pluto*!";

const data = [
  {
    id: "1",
    profile_id: "tsuji kota",
    title: "BACKGRAUND",
    markdown: `
## Heading
This is a Markdown document
- List item 1
- List item 2
## Subheading
![OpenAI Logo](https://s3-ap-northeast-1.amazonaws.com/storage.withnews.jp/2020/07/16/e/90/e901117a-l.jpg "OpenAIのロゴ")


Here's some text with **bold** and *italic* formatting.`,
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

const About = () => {
  return (
    <div>

      <div className="nobiru">
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            marginTop: "10px",
          }}
          
        >
          <Stack>
            {data.map(({ id, markdown, title }, index) => (
              <div key={id}>
                <Box
                  sx={{
                    marginTop: "10px",
                    padding: "45px",
                    border: "2px solid black",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                    variant="h4"
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 50,
                    }}
                  >
                    {title}
                  </Typography>

                  <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
                </Box>
              </div>
            ))}
          </Stack>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default About;
