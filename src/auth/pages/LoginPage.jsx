
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { useMemo } from 'react'
import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword  } from '../../store/auth/thunks'

export const LoginPage = () => {

  const { status, errorMessage} = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange} = useForm({
    email: 'fluke@gmail.com',
    password: '123456',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();
    // dispatch( checkingAuthentication() );
    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSingIn = () => {
    dispatch( startGoogleSignIn() );
  }

    

  return (
        <AuthLayout titulo='login'>

          <form 
            className='animate__animated animate__fadeIn animate__faster'
            onSubmit={ onSubmit }
          >
            <Grid container>
              <Grid item xs={12} sx={ {mt: 2} }>
                <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder='Correo@google.com'
                  fullWidth
                  name = "email"
                  value={ email }
                  onChange={ onInputChange }
                /> 
              </Grid>

              <Grid item xs={12} sx={ {mt: 1} }>
                <TextField 
                  label="Contrasenha" 
                  type="password" 
                  placeholder='Contrasenha'
                  fullWidth
                  name = "password"
                  value={ password }
                  onChange={ onInputChange }
                /> 
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1 , mb: 2}}>
              <Grid 
                  item 
                  xs={12}
                  display= { !!errorMessage ? '' : 'none' }
                >
                  <Alert severity='error'>
                    { errorMessage}
                  </Alert>
                </Grid>
                
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1 , mb: 2}}>
                <Grid item xs={12} sm={ 6 }>
                  <Button 
                    disabled= { isAuthenticating }
                    type='submit' 
                    variant="contained" 
                    fullWidth
                    >
                    Login
                  </Button>
                </Grid>

                <Grid item xs={12} sm={ 6 }>
                  <Button 
                    disabled= { isAuthenticating }
                    variant="contained"
                    fullWidth
                    onClick={ onGoogleSingIn }>
                  <Google/>
                      <Typography sx={{ml:1}}>
                        Google
                      </Typography>
                  </Button>
                </Grid>

              </Grid>


            <Grid container direction='row' justifyContent='end'>
                <Link component={ RouterLink } color='inherit' to="/auth/register">
                  Crear una cuenta.
                </Link>
            </Grid>

            </Grid>
          </form>
        </AuthLayout>


  )
}
