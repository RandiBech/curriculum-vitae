import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  FormGroup,
  Stack,
  SvgIcon,
  Switch,
  Typography,
} from "@mui/material";
import React, { useContext, useMemo, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import {
  UserProfileContext,
  UserProfileContextType,
} from "./UserProfileProvider";

const UserProfileWorkExperience: React.FC = () => {
  const { user } = useContext(UserProfileContext) as UserProfileContextType;
  const [expanded, setExpanded] = useState<number>(-1);
  const [expandAll, setExpandAll] = useState(false);

  const onChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : -1);
    };

  const sortedWork = useMemo(() => {
    if (!user.workExperience) return [];
    return user.workExperience.sort((a, b) => {
      return b.start.unix() - a.start.unix();
    });
  }, [user.workExperience]);

  const onExpandAll = () => {
    setExpandAll(!expandAll);
  };

  return (
    <>
      <FormGroup sx={{ marginBottom: 2 }}>
        <FormControlLabel
          sx={{ display: "flex", justifyContent: "end" }}
          control={<Switch onClick={onExpandAll} />}
          label="Expand all"
        />
      </FormGroup>
      {sortedWork.map((work, index) => (
        <Accordion
          key={index}
          expanded={expanded === index || expandAll}
          onChange={onChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction={"row"}>
              <SvgIcon fontSize="large">
                <WorkIcon />
              </SvgIcon>
              <Box ml={2}>
                <Typography>{work.company}</Typography>
                <Typography color={"GrayText"}>{work.title}</Typography>
                <Typography color={"GrayText"} variant="caption">
                  {`Start: ${work.start.format("DD-MM-YYYY")}`}
                </Typography>
              </Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{work.description}</Typography>
            <Typography mt={1}>
              <b>Skills:</b> {work.skills}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default UserProfileWorkExperience;
