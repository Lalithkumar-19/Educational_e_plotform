import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
import FirstStep from './Steppers/FirstStep';
import Secondstep from './Steppers/Secondstep';
import ThirdStep from './Steppers/ThirdStep';

const steps = [
    {
        label: 'Course Title And Description',
        description: "Enter course meta details ",
        page: <FirstStep />

    },
    {
        label: 'Course circuilum and videos content',
        description: "Create sections for this course",
        page: <Secondstep />
    },
    {
        label: 'Course Notice board and Assignments board',
        description: "create notice board and assigments for this course",
        page: <ThirdStep />
    },
];

export default function Stepper() {
    const no_of_gains = 3;
    const [details, setDetails] = useState({
        title: "",
        description: "",
        gains: [],
        requirements: [],
        language: "",
        duration: "",
        skill_level: "",
        deadline: "",
        certificate: "",
        tags: ""
    })




    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 30,
                    width: 900,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: "auto", maxWidth: 900, width: '900px', p: 2 }}>

             <p style={{color:"coral",textAlign:"start",margin:"0",fontSize:"17px"}}>   { steps[activeStep].description}</p>
             {steps[activeStep].page}

            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ width: "900px" }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
