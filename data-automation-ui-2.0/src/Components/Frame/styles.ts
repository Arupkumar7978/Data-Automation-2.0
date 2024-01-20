import { makeStyles } from '@mui/styles';

export const sideNavBarStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.white,
    position: 'fixed',
    overflowX: 'hidden',
    display: 'flex',
    zIndex: 1,
    top: 0,
    left: 0,
    height: '100%',
    minWidth: '2.6rem',
    maxWidth: '2.6rem',
    paddingTop: '1.0rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  },
  headIconStyles: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.darkBlue,
    marginTop: '-16px'
  },
  dynamicIconsDiv: {
    display: 'grid',
    justifyContent: 'center !important',
    height: '50%',
    alignItems: 'center'
  },
  dynamicIcons: {
    maxHeight: '2rem',
    color: `${theme.palette.icons.White} !important`,
    transition: '0.3s ease-in',
    '&:hover': {
      // backgroundColor: `${theme.palette.buttons.onHover} !important`
    }
  },
  footerContent: {
    display: 'grid',
    justifyContent: 'center',
    height: '20%',
    alignItems: 'center'
  },
  brandLogo: {
    color: theme.palette.background.white
  },
  activeButton: {
    color: `${theme.palette.background.white} !important`,
    backgroundColor: `${theme.palette.background.darkBlue} !important`
  }
}));

export const HeaderStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    maxHeight: '2.25rem',
    width: '100%',
    position: 'sticky',
    zIndex: 1,
    backgroundColor: theme.palette.background.white,
    top: '0'
  },
  flexEndDiv: {
    // maxWidth: '30%',
    // minWidth: '15%',
    // columnGap: '3rem',
    // marginRight: '1.5rem',
    // marginLeft: '2.5rem',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-end'
  },
  Icons: {
    color: theme.palette.buttons.primary
  },
  // dynamicSearchfield: {
  //   width: '65%',
  //   height: '1.8rem !important'
  // },
  notificationIcon: {
    color: theme.palette.background.darkBlue
  },
  moon: {
    color: theme.palette.buttons.primary
  },
  sun: {
    color: theme.palette.buttons.yellow
  },
  headerAvatar: {}
}));
