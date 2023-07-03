import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const PageNotFound = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column", flexGrow:"1", alignItems:"center", justifyContent:"center"}}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page not found</Typography>      
      <Button component={Link} variant="outlined" size="large" to={`/profile/`} sx={{mt:2}}>To main page</Button>
    </Box>
  );
};

export default PageNotFound;
