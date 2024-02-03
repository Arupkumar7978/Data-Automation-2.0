import { makeStyles } from '@mui/styles';
import { Theme } from 'Global/gobalTypes';

export const ContentRendererStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    display: 'flex',
    left: `${theme.utils.pxToRem(60)}`,
    height: `calc(100% - ${theme.utils.pxToRem(60)})`,
    top: `${theme.utils.pxToRem(48)}`,
    width: `calc(100% - ${theme.utils.pxToRem(70)})`,
    overflow: `hidden scroll`
  }
}));
export const ModalRendererStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: theme.utils.pxToRem(12)
  },
  textFieldDiv: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: theme.utils.pxToRem(4),
    '& .MuiFormHelperText-root': {
      marginLeft: 'unset !important'
    }
  }
}));
