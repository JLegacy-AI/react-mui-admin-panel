import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../themes";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const faq = [
    {
      summary: "How ChatGPT works?",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate possimus, quaerat obcaecati omnis commodi ratione repellat tenetur laboriosam odio vel earum architecto tempora assumenda fugit impedit aliquam, dignissimos repudiandae?",
    },
    {
      summary: "Why gasoline prices increasing?",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate possimus, quaerat obcaecati omnis commodi ratione repellat tenetur laboriosam odio vel earum architecto tempora assumenda fugit impedit aliquam, dignissimos repudiandae?",
    },
    {
      summary: "Does Ecommerce collapse in 2024?",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate possimus, quaerat obcaecati omnis commodi ratione repellat tenetur laboriosam odio vel earum architecto tempora assumenda fugit impedit aliquam, dignissimos repudiandae?",
    },
    {
      summary: "What Machine Learning Algorithms used to learn human language?",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate possimus, quaerat obcaecati omnis commodi ratione repellat tenetur laboriosam odio vel earum architecto tempora assumenda fugit impedit aliquam, dignissimos repudiandae?",
    },
    {
      summary:
        "How Scientists determine that MARS is habitant for human specie?",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate possimus, quaerat obcaecati omnis commodi ratione repellat tenetur laboriosam odio vel earum architecto tempora assumenda fugit impedit aliquam, dignissimos repudiandae?",
    },
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions By The Users" />

      {faq.map((question) => (
        <Accordion
          sx={{
            backgroundColor: colors.primary[400],
          }}
          defaultExpanded
        >
          <AccordionSummary expandIcon={<ExpandMore />} border>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              {question.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
