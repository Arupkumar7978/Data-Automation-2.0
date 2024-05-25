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
    gap: theme.utils.pxToRem(8),
    margin: '1rem 0 0 1rem'
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
    alignItems: 'center',
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
  },
  backArrowContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.utils.pxToRem(8)
  },
  backArrowButton: {
    padding: theme.utils.pxToRem(4),
    borderRadius: theme.utils.pxToRem(4)
  },
  loaderDiv: {
    width: `calc(100% - ${theme.utils.pxToRem(70)})`,
    display: 'flex',
    height: `calc(100% - ${theme.utils.pxToRem(60)})`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foldersTree: {
    width: '25%',
    backgroundColor: theme.palette.background.white,
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  },
  treeAndGridContainer: {
    display: 'flex',
    gap: theme.utils.pxToRem(8),
    width: '100%'
  },
  treeCompHeader: {
    display: 'flex',
    width: '100%',
    whiteSpace: 'nowrap'
  },
  treeHeader: {
    display: 'flex',
    width: '100%',
    gap: theme.utils.pxToRem(8),
    alignItems: 'center',
    height: theme.utils.pxToRem(16),
    padding: '0.75rem',
    marginTop: '0.4rem',
    backgroundColor: `var(--secondary-hover)`
  }
}));
