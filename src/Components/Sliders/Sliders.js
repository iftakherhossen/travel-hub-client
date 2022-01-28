import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Slide1 from '../../images/slide1.jpg';
import Slide2 from '../../images/slide2.jpg';
import Slide3 from '../../images/slide3.jpg';
import Slide4 from '../../images/slide4.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        id: 1,
        imgPath: Slide1,
    },
    {
        id: 2,
        imgPath: Slide2,
    },
    {
        id: 3,
        imgPath: Slide3,
    },
    {
        id: 4,
        imgPath: Slide4,
    }
];


const Sliders = () => {
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.id}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 1,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 1,
                                }}
                                src={step.imgPath}
                                alt="Nature slides"
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
    );
};

export default Sliders;