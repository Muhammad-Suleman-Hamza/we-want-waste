import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import PolicyIcon from "@mui/icons-material/Policy";
import PaymentIcon from "@mui/icons-material/Payment";
import YardSkip4 from '../assets/type-1-yarder-skip.jpg';
import YardSkip6 from '../assets/type-2-yarder-skip.jpg';
import YardSkip8 from '../assets/type-2-yarder-skip.jpg';
import YardSkip10 from '../assets/type-2-yarder-skip.jpg';
import YardSkip12 from '../assets/type-2-yarder-skip.jpg';
import YardSkip14 from '../assets/type-2-yarder-skip.jpg';
import YardSkip16 from '../assets/type-2-yarder-skip.jpg';
import YardSkip20 from '../assets/type-3-yarder-skip.jpg';
import YardSkip40 from '../assets/type-3-yarder-skip.jpg';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export const yardImages = [
    YardSkip4,
    YardSkip6,
    YardSkip8,
    YardSkip10,
    YardSkip12,
    YardSkip14,
    YardSkip16,
    YardSkip20,
    YardSkip40,
];

export const steps = [
    { label: "Postcode", icon: <LocationOnIcon sx={{ color: '#90caf9 !important' }} /> },
    { label: "Waste Type", icon: <DeleteIcon sx={{ color: '#90caf9 !important' }} /> },
    { label: "Select Skip", icon: <ShoppingCartIcon sx={{ color: '#90caf9 !important' }} /> },
    { label: "Permit Check", icon: <PolicyIcon sx={{ color: 'white !important' }} /> },
    { label: "Choose Date", icon: <CalendarTodayIcon sx={{ color: 'white !important' }} /> },
    { label: "Payment", icon: <PaymentIcon sx={{ color: 'white !important' }} /> },
];
