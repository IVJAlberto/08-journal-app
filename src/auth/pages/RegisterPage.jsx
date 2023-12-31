
import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';


const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSummitted, setFormSummitted] = useState(false);

  const { status, errorMessage} = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { formState, displayName,email, password, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm(formData, formValidations );

  // console.log( displayNameValid );

  const onSubmit = (event) => {
    setFormSummitted(true);
    event.preventDefault();
    if( !isFormValid) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
        <AuthLayout titulo='Crear cuenta'>
          <h1>FormValid { isFormValid ? 'Valido' : 'Incorrecto'}</h1>
          <form 
            className='animate__animated animate__fadeIn animate__faster'
            onSubmit={ onSubmit }
          >
            <Grid container>
              <Grid item xs={12} sx={ {mt: 2} }>
                <TextField 
                  label="Nombre completo" 
                  type="text" 
                  placeholder='Fluke Ario'
                  fullWidth
                  name='displayName'
                  value={ displayName }
                  onChange={ onInputChange }
                  error={ !!displayNameValid && formSummitted}
                  helperText={ displayNameValid }
                /> 
              </Grid>

              <Grid item xs={12} sx={ {mt: 2} }>
                <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder='Correo@google.com'
                  fullWidth
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
                  error={ !!emailValid && formSummitted}
                  helperText={ emailValid }
                /> 
              </Grid>

              <Grid item xs={12} sx={ {mt: 1} }>
                <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder='Contraseña' 
                  fullWidth
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                  error={ !!passwordValid && formSummitted }
                  helperText={ passwordValid }
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
                <Grid item xs={12}>
                  <Button 
                   disabled={ isCheckingAuthentication }
                    type='submit'
                    variant="contained" 
                    fullWidth>
                    Crear cuenta
                  </Button>
                </Grid>
              </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta?</Typography>
                <Link component={ RouterLink } color='inherit' to="/auth/login">
                  Ingresar.
                </Link>
            </Grid>

            </Grid>
          </form>
        </AuthLayout>


  )
}
