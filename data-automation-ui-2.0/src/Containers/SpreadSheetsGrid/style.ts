import { makeStyles } from '@mui/styles';
import { Theme } from 'Global/gobalTypes';

const commonDisplayStyle = {
  display: 'flex',
  width: '100%'
};

export const spreadSheetStyles = makeStyles((theme: Theme) => ({
  root: {
    ...commonDisplayStyle,
    flexDirection: 'column',
    gap: theme.utils.pxToRem(8)
  },
  tableToolbarActions: {
    display: 'flex',
    paddingInline: theme.utils.pxToRem(12),
    gap: theme.utils.pxToRem(12)
  },
  gridContainer: {
    ...commonDisplayStyle
  },
  sectionHeader: {
    ...commonDisplayStyle,
    gap: theme.utils.pxToRem(4),
    height: theme.utils.pxToRem(32),
    justifyContent: 'space-between'
  },
  commonButtonStyle: {
    color: theme.palette.background.darkBlue
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: theme.utils.pxToRem(8),
    paddingTop: theme.utils.pxToRem(12)
  }
}));
