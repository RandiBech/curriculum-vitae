import React, { useContext, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  SvgIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  UserProfileContext,
  UserProfileContextType,
} from "./UserProfileProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";

const UserProfileEducation: React.FC = () => {
  const { user } = useContext(UserProfileContext) as UserProfileContextType;
  const [expanded, setExpanded] = useState<number>(-1);

  const onChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : -1);
    };

  const sortedEducations = useMemo(() => {
    if (!user.education) return [];
    return user.education.sort((a, b) => {
      return b.start.unix() - a.start.unix();
    });
  }, [user.education]);

  if (sortedEducations.length === 0) {
    return (
      <Box>
        <Typography>No educations</Typography>
      </Box>
    );
  }

  return (
    <>
      {sortedEducations.map((education, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={onChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction={"row"}>
              <SvgIcon fontSize="large">
                <SchoolIcon />
              </SvgIcon>
              <Box ml={2}>
                <Typography>{education.school}</Typography>
                <Typography color={"GrayText"}>
                  {education.education}
                </Typography>
                <Typography color={"GrayText"} variant="caption">
                  {`Start: ${education.start.format("DD-MM-YYYY")}`}
                </Typography>
              </Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Major:</b> {education.major ?? "-"}
            </Typography>
            <Typography mt={1}>{education.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default UserProfileEducation;
