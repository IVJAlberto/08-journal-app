
import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
        <AuthLayout titulo='Crear cuenta'>

          <form >
            <Grid container>
              <Grid item xs={12} sx={ {mt: 2} }>
                <TextField 
                  label="Nombre completo" 
                  type="text" 
                  placeholder='Fluke Ario'
                  fullWidth
                /> 
              </Grid>

              <Grid item xs={12} sx={ {mt: 2} }>
                <TextField 
                  label="Correo" 
                  type="email" 
                  placeholder='Correo@google.com'
                  fullWidth
                /> 
              </Grid>

              <Grid item xs={12} sx={ {mt: 1} }>
                <TextField 
                  label="Contrasenha" 
                  type="password" 
                  placeholder='Contrasenha'
                  fullWidth
                /> 
              </Grid>

              <Grid container spacing={2} sx={{ mt: 1 , mb: 2}}>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>
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
