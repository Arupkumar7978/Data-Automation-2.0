import { makeStyles } from '@mui/styles';
import { Theme } from 'Global/gobalTypes';

export const ContentRendererStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'absolute',
    display: 'flex',
    left: `${theme.utils.pxToRem(44)}`,
    height: `calc(100% - ${theme.utils.pxToRem(32)})`,
    top: `${theme.utils.pxToRem(32)}`,
    width: `calc(100% - ${theme.utils.pxToRem(56)})`,
    overflow: `auto`
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
