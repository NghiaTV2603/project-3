import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch } from 'react-redux';
import { tokens, ColorPalette } from '../../app/theme';
import { useAppSelector } from '../../hooks/useRedux';
import { login } from './authSlice';

function Copyright() {
   return (
      <Typography variant="body2" color="text.secondary" align="center">
         {'Copyright © '}
         <Link color="inherit" href="https://mui.com/">
            Your Website
         </Link>{' '}
         {new Date().getFullYear()}.
      </Typography>
   );
}

export default function SignUp() {
   // eslint-disable-next-line @typescript-eslint/no-shadow
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
   };

   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign up
            </Typography>
            <Box
               component="form"
               noValidate
               onSubmit={handleSubmit}
               sx={{ mt: 3 }}
            >
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <FormControlLabel
                        control={
                           <Checkbox value="allowExtraEmails" color="primary" />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                     />
                  </Grid>
               </Grid>
               <LoadingButton
                  loading
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
               >
                  Sign Up
               </LoadingButton>
               <Grid container justifyContent="flex-end">
                  <Grid item>
                     <Link
                        href="login"
                        variant="body2"
                        sx={{ color: colors.grey[100] }}
                     >
                        Already have an account? Sign in
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
         <Copyright />
      </Container>
   );
}
