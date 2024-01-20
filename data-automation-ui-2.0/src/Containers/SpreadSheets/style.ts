import { makeStyles } from '@mui/styles';

export const spreadSheetStyles = makeStyles((theme) => ({
  spreadSheetsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
    width: '100%'
  },
  primaryActions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  commonButtonStyle: {
    backgroundColor: `${theme.palette.background.darkBlue} !important`,
    '&:hover': {
      backgroundColor: `${theme.palette.background.darkBlue} !important`
    }
  },
  commonTextfieldStyles: {
    borderColor: `${theme.palette.background.darkBlue} !important`,
    '& :focus': {
      borderColor: `${theme.palette.background.darkBlue} !important`
    }
  }
}));
