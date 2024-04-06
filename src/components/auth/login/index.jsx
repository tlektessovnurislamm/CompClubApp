import React, { Fragment } from 'react'
import { TextField , Button , Typography} from '@mui/material'

const LoginPage = (props) => {
  const {setPassword , setEmail} = props
  return (
    <>          
      <Typography variant="h4" fontFamily='Oswald' textAlign='center'>Авторизация</Typography>
      <Typography variant="body1" marginBottom={2} fontFamily='Oswald' fontWeight={300} textAlign='center'>Введите вааш логин и пароль</Typography>
      <TextField fullWidth = {true} margin='normal' size='small' sx={{ marginTop: '0px' }} label="Email" variant="outlined" placeholder='Введите ваш E-mail' onChange={(e) => setEmail(e.target.value)} />
      <TextField type="password" fullWidth = {true} margin='normal' size='small' sx={{ marginTop: '0px' }} label="Password" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" sx={{fontFamily:'Oswald',width:'60%',marginBottom:1 , background:'#242424'}} size='small' variant="contained">Войти</Button>
      <Typography variant="body1" marginBottom={2} fontFamily='Oswald' fontWeight={300} textAlign='center'>У вас нет аккаунта?<span className='registertext'> Регистарция</span></Typography>
    </>
  )
}

export default LoginPage;
