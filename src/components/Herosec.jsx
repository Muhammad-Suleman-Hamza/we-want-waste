import '../styles/herosec.css';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Box,
  Step,
  Fade,
  Chip,
  Select,
  Button,
  Stepper,
  Divider,
  MenuItem,
  StepLabel,
  InputLabel,
  Typography,
  FormControl,
} from '@mui/material';
import { steps } from '../utlis/constants';

const Herosec = ({ yardSkips }) => {
  const [loaded, setLoaded] = useState(false);
  const [selectedYard, setSelectedYard] = useState(yardSkips[0]);

  const handleChange = (e) => {
    const result = yardSkips.find(yard => yard.id === e.target.value);
    setSelectedYard(result);
  };

  const SkipHireStepper = () => {
    const [activeStep, setActiveStep] = useState(2);

    return (
      <Stepper
        activeStep={activeStep}
        className="stepper-container"
        sx={{
          padding: 2,
          '.MuiStepConnector-line': {
            borderColor: '#90caf9',
          },
          '.MuiStepLabel-label': {
            color: 'white', // Default label color
          },
          '.MuiStepLabel-label.Mui-completed': {
            color: '#90caf9', // Completed step
          },
          '.MuiStepLabel-label.Mui-active': {
            color: '#90caf9', // Active step
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={() => step.icon}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

    );
  };

  return (
    <>
      {SkipHireStepper()}
      <Box
        className="herosec-container"
        sx={{
          p: { xs: 2, md: 3, lg: 4, xl: 6 },
        }}
      >

        <Grid
          container
          className="herosec-grid-container"
          spacing={{ xs: 3, md: 3, lg: 4, xl: 6 }}
        >
          {/* IMAGE COLUMN */}
          <Grid size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 6 }}>
            <Fade in={loaded} timeout={600}>
              <Box className="image-column">
                <Box
                  component="img"
                  src={selectedYard.image}
                  onLoad={() => setLoaded(true)}
                  alt={`${selectedYard.size} yard skip`}
                  sx={{ height: { xs: 350, sm: 500, md: 550, lg: 600, xl: 600 } }}
                />

                {/* Hire period chip - positioned top-right */}
                <Chip
                  color="info"
                  size="medium"
                  className='hire-chip'
                  label={`${selectedYard.hire_period_days} day hire period`}
                />
              </Box>
            </Fade>
          </Grid>

          {/* DETAILS COLUMN */}
          <Grid
            className="details-column"
            size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 6 }}
          >
            <Fade in={loaded} timeout={600}>
              <Box sx={{ color: 'white', width: '100%' }}>
                <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 1 }}>
                  {selectedYard.size} Yard Skip
                </Typography>

                <Box className="chip-container">
                  <Chip
                    size="medium"
                    className='chip'
                    color={selectedYard.allowed_on_road ? 'info' : 'error'}
                    label={selectedYard.allowed_on_road ? 'Allowed on Road' : 'Not Allowed on Road'}
                  />
                  <Chip
                    size="medium"
                    className='chip'
                    color={selectedYard.allows_heavy_waste ? 'info' : 'error'}
                    label={selectedYard.allows_heavy_waste ? 'Allowed Heavy Waste' : 'Not Allowed Heavy Waste'}
                  />
                </Box>

                <Typography variant="h3" className='price'>
                  ${selectedYard.price_before_vat.toFixed(2)}
                </Typography>

                <Divider className='divider' />

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel id="yard-select-label" sx={{ color: '#90caf9' }}>Select Size</InputLabel>
                  <Select
                    className='select'
                    label="Select Size"
                    value={selectedYard.id}
                    onChange={handleChange}
                    labelId="yard-select-label"
                    sx={{
                      '.MuiSelect-icon': {
                        color: '#90caf9',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(144,202,249,0.6)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#90caf9',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#90caf9',
                      },
                    }}
                  >
                    {yardSkips?.map((yard) => (
                      <MenuItem key={yard.id} value={yard.id}>
                        {yard.size} Yards
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Box className='price-box'>
                  <Typography variant="body1" className='price-text'>
                    <strong>Base Price:</strong>{' '}
                    <Box component="span" className='price-highlight'>
                      ${selectedYard.price_before_vat.toFixed(2)}
                    </Box>
                  </Typography>

                  <Typography variant="body1" className='price-text'>
                    <strong>VAT ({selectedYard.vat}%):</strong>{' '}
                    <Box component="span" className='price-highlight'>
                      ${(selectedYard.price_before_vat * selectedYard.vat / 100).toFixed(2)}
                    </Box>
                  </Typography>

                  <Typography variant="body1" className='price-text'>
                    <strong>Delivery:</strong>{' '}
                    <Box component="span" className='price-highlight'>
                      {selectedYard.transport_cost === null || selectedYard.transport_cost === 0
                        ? 'Free'
                        : `$${Number(selectedYard.transport_cost).toFixed(2)}`}
                    </Box>
                  </Typography>

                  <Divider className='price-divider' />

                  <Typography
                    variant="h5"
                    className='total-price'
                  >
                    Total: ${(
                      selectedYard.price_before_vat * (1 + selectedYard.vat / 100) +
                      (selectedYard.transport_cost ?? 0)
                    ).toFixed(2)}
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  className='add-button'
                  startIcon={<ShoppingCartIcon />}
                >
                  Add This Skip
                </Button>
              </Box>
            </Fade>
          </Grid>

          {/* DETAILS COLUMN */}
          <Grid size={{ xs: 12 }}>
            <Fade in={loaded} timeout={600}>
              <Box sx={{ color: 'white' }}>
                <Typography
                  variant="body2"
                  className='note-column'
                  sx={{ marginTop: { sm: 0, md: -1, lg: -1, xl: -3 } }}
                >
                  Imagery and information shown throughout this website may not reflect the exact shape or size specification. Colours may vary. Options and/or accessories may be featured at additional cost.
                </Typography>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Herosec;
