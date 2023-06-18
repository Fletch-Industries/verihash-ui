import React, { useState } from 'react'
import useStyles from './home-style'
import Button from '@mui/material/Button'
import { Grid, Typography, TextField, Container } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { VeriHash } from 'fletch-verihash'

const Home = () => {
  const classes = useStyles()
  const [secret, setSecret] = useState('')

  // TODO: Support more
  const [keySlice1, setKeySlice1] = useState()
  const [keySlice2, setKeySlice2] = useState()

  const veriHash = new VeriHash()

  const hashSecret = async () => {
    toast.dark('Hashing secret data...')
    const result = await veriHash.create(secret)
    console.log(result)
    toast.dismiss()
    toast.dark(result)
  }

  const validateData = async () => {
    toast.dark('Validating data...')
    const result = await veriHash.validate(secret, [keySlice1, keySlice2])
    console.log(result)
    toast.dismiss()
    toast.dark(result ? 'Data is Valid! ✅' : 'Data is not valid! ❌')
  }

  return (
    <div className={classes.background}>
      <ToastContainer
        position='top-center'
        containerId='alertToast'
        autoClose={7000}
      />
      <Container maxWidth='lg'>
        <Grid container justify='center' direction='column'>
          <Grid item align='center' className={classes.heading}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>VeriHash</Typography>
          </Grid>
          <Grid item align='center' className={classes.text}>
            <Typography variant='h6'>Input data you want to hash and store securely on the blockchain</Typography>
          </Grid>
          <Grid item container align='center' direction='column'>
            <Grid item container spacing={3} align='center' direction='column' className={classes.inputField}>
              <Grid item>
                <TextField id='registerVinNumber' label='secret data' variant='filled' color='primary' value={secret} onChange={(e) => setSecret(e.target.value)} />
              </Grid>
            </Grid>
            <Grid item align='center' className={classes.button}>
              <Button variant='contained' color='secondary' id='register' onClick={hashSecret}>Hash Data</Button>
            </Grid>
          </Grid>
          <Grid item align='center' className={classes.button}>
            <Grid item>
              <TextField label='slice key' variant='filled' color='primary' value={keySlice1} onChange={(e) => setKeySlice1(e.target.value)} />
            </Grid>
            <Grid item>
              <TextField label='slice key' variant='filled' color='primary' value={keySlice2} onChange={(e) => setKeySlice2(e.target.value)} />
            </Grid>
            <Button variant='contained' color='secondary' id='register' onClick={validateData}>Verify Data</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
