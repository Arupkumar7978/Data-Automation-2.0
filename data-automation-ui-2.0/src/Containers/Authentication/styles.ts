import { makeStyles } from '@mui/styles';

export const UserLoginSyles = makeStyles(() => ({
  produtTitleContext: {
    fontSize: '4.2rem',
    position: 'absolute',
    left: '5%',
    top: '20%',
    color: '#1c1e21e8'
  },
  subTitle: {
    fontSize: '1.3rem',
    fontWeight: '500',
    position: 'absolute',
    left: '10%',
    top: '40%',
    color: '#1c1e21e8'
  },
  notAMember: {
    fontSize: '35px',
    position: 'absolute',
    color: '#1c1e21e8',
    left: '20%',
    top: '53%',
    fontWeight: '500'
  },
  buttonContext: {
    fontSize: '15px',
    position: 'absolute',
    color: '#1c1e21',
    background: '#1c1e21e8 !important',
    left: '25%',
    top: '360px',
    fontWeight: '500',
    backgroundColor: '#1c1e21e8'
  },
  formContainer: {
    position: 'absolute',
    left: '65%',
    top: '10%'
  },
  formbody: {
    boxShadow: ` 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)`,
    width: '28vw',
    height: '68vh',
    borderRadius: '0.5rem',
    padding: '0.5rem 0.75rem',
    backgroundColor: '#ffff'
  },
  commontextStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // color: '#1c1e21b8',
    color: '#c2c2c7'
  },
  fireBaseLoginContainer: {},
  firebaseGenericAuthButton: {
    width: '44%',
    height: '42px',
    display: 'inline-block',
    backgroundColor: 'rgba(24,119,242,1)',
    borderRadius: '2px',
    boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.25)',
    margin: '10px',
    cursor: 'pointer',
    userSelect: 'none'
  },
  authButtonswrapper: {
    position: 'absolute',
    marginTop: '1px',
    marginLeft: '1px',
    width: '40px',
    height: '40px',
    borderRadius: '2px',
    backgroundColor: '#fff'
  },
  authProviderLogo: {
    position: 'absolute',
    marginTop: '11px',
    marginLeft: '11px',
    width: '18px',
    height: '18px'
  },
  authProviderName: {
    float: 'right',
    margin: `14px 23px 0 0`,
    color: '#fff',
    fontSize: '11px',
    letterSpacing: '0.2px'
  },
  footerLinks: {
    position: 'absolute',
    bottom: '3%',
    left: '35%',
    display: 'flex',
    justifyContent: 'space-between',
    width: '63%',
    fontSize: '12px'
  },
  footerContent: {
    color: '#181b20b7',
    transition: '0.2s ease-out',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
      cursor: 'pointer'
    }
  },
  copyRights: {
    bottom: '3%',
    position: 'absolute',
    fontSize: '10px',
    color: '#181b20b7',
    left: '5%'
  },
  userInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    justifyContent: 'center',
    width: '100%'
  }
}));
