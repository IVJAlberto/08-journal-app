
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'


const formData = {
    email: 'fluke@gmail.com',
    password: '123456',
    displayName: 'Fluke Ario'
}

export const RegisterPage = () => {

  const { displayName,email, password, onInputChange} = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
        <AuthLayout titulo='Crear cuenta'>

          <form 
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
                /> 
              </Grid>

              <Grid item xs={12} sx={ {mt: 1} }>
                <TextField 
                  label="Contrasenha" 
                  type="password" 
                  placeholder='Contrasenha'
                  fullWidth
                  name='contrasena'
                  value={ password }
                  onChange={ onInputChange }
                /> 
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1 , mb: 2}}>
                <Grid item xs={12}>
                  <Button 
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
