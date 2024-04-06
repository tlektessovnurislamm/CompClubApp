import React from 'react'
import { TextField , Button , Typography} from '@mui/material'

export default function RegisterPage() {
  return (
    <>          
      <Typography variant="h4" fontFamily='Oswald' textAlign='center'>Регистрация</Typography>
      <Typography variant="body1" marginBottom={2} fontFamily='Oswald' fontWeight={300} textAlign='center'>Введите данные для регистрации</Typography>
      <TextField fullWidth = {true} margin='normal' size='small' sx={{ marginTop: '0px' }} label="Name" variant="outlined" placeholder='Введите ваш имя' />
      <TextField fullWidth = {true} margin='normal' size='small' sx={{ marginTop: '0px' }} label="Email" variant="outlined" placeholder='Введите ваш E-mail' />
      <TextField type="password" fullWidth = {true} margin='normal' size='small' sx={{ marginTop: '0px' }} label="Password" variant="outlined" placeholder='Введите ваш пароль' />
      <TextField type="password" fullWidth = {true} margin='normal' size='small' sx={{ marginTop: '0px' }} label="Password" variant="outlined" placeholder='Повторите ваш пароль' />
      <Button sx={{fontFamily:'Oswald',width:'60%',marginBottom:1 , background:'#242424'}} size='small' variant="contained">Регистрация</Button>
      <Typography variant="body1" marginBottom={2} fontFamily='Oswald' fontWeight={300} textAlign='center'>У вас есть аккаунта?<span className='registertext'> Войти</span></Typography>
    </>
  )
}
