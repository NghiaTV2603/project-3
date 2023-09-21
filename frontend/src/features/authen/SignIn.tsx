import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import { useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect } from 'react';
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

export default function SignIn() {
   // eslint-disable-next-line @typescript-eslint/no-shadow
   const theme = useTheme();
   const colors: ColorPalette = tokens(theme.palette.mode);
   const { isLogin, loading } = useAppSelector((state) => state.auth);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   useEffect(() => {
      if (isLogin) {
         navigate('/');
      }
   }, [isLogin]);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const dataFetch = {
         email: data.get('email'),
         password: data.get('password'),
      };
      dispatch(login(dataFetch));
   };

   return (
      <Container component="main" maxWidth="xs">
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
               Sign in
            </Typography>
            <Box
               component="form"
               onSubmit={handleSubmit}
               noValidate
               sx={{ mt: 1 }}
            >
               <TextField
                  margin="normal"
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
               />
               <TextField
                  margin="normal"
                  variant="filled"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
               />
               <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
               />
               <LoadingButton
                  loading={loading}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
               >
                  Sign In
               </LoadingButton>
               <Grid container>
                  <Grid item xs>
                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                     <Link
                        href="#"
                        variant="body2"
                        sx={{ color: colors.grey[100] }}
                     >
                        Forgot password?
                     </Link>
                  </Grid>
                  <Grid item>
                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                     <Link
                        href="register"
                        variant="body2"
                        sx={{ color: colors.grey[100] }}
                     >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Don't have an account? Sign Up
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
         <Copyright />
      </Container>
   );
}
