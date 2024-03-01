import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  SvgIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { UserProfileContext } from "./UserProfileProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";

const UserProfileEducation: React.FC = () => {
  const context = useContext(UserProfileContext);
  const [expanded, setExpanded] = useState<number>(-1);

  const onChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : -1);
    };
  console.log(context?.user.education);
  return (
    <>
      {context?.user.education.map((education, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={onChange(index)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
          >
            <Stack direction={"row"}>
              <SvgIcon fontSize="large">
                <SchoolIcon />
              </SvgIcon>
              <Box ml={2}>
                <Typography>{education.school}</Typography>
                <Typography color={"GrayText"}>
                  {education.education}
                </Typography>
              </Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{education.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default UserProfileEducation;
