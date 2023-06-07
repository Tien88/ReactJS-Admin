import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>An Important question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Your Favorite Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Some Random Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>The Final Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Build a COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
