import { MENUS_LIST_TYPE } from './types';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import TableChartIcon from '@mui/icons-material/TableChart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Will Handle It Through DB Config
export const MENU_LIST: MENUS_LIST_TYPE = [
  { id: 1, name: 'Invoice Data', icon: <DataUsageIcon />, isVisible: true },
  {
    id: 2,
    name: 'SpreadSheets',
    icon: <TableChartIcon />,
    isVisible: true
  },
  {
    id: 3,
    name: 'Admin Panel',
    icon: <AdminPanelSettingsIcon />,
    isVisible: true
  },
  {
    id: 4,
    name: 'Settings',
    icon: <SettingsIcon />,
    isVisible: true
  },
  {
    id: 5,
    name: 'Profile',
    icon: <AccountCircleIcon />,
    isVisible: true
  }
];
