import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop: '15vh'
  },
  text: {
    marginTop: '0.5vh'
  },
  inputField: {
    marginTop: '2.5vh'
  },
  button: {
    marginTop: '2vh'
  },
  background: {
    backgroundImage: 'url(/images/mainBKG.jpg)',
    backgroundOrigin: 'border-box',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  },
  solidBackground: {
    backgroundColor: 'white',
    opacity: '0.75'
  }
}))

export default useStyles
