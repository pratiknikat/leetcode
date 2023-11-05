import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import parse from "html-react-parser";

export const ProblemStatement = (props) => {
  const [value, setValue] = React.useState("1");
  const problem = props.problem;

  const HtmlRenderer = ({ htmlString }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{
        typography: "body1",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
        height: "90vh",
        backgroundColor: "White",
        overflow: "scroll",
      }}
    >
      <TabContext value={value}>
        <Box style={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={{
                textTransform: "inherit",
                fontSize: "12px",
                padding: "0px",
              }}
              label="Description"
              value="1"
            />
            <Tab
              style={{ textTransform: "lowercase" }}
              label="Solutions"
              value="2"
            />
            <Tab
              style={{ textTransform: "lowercase" }}
              label="Submit"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <HtmlRenderer htmlString={problem} />
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};
