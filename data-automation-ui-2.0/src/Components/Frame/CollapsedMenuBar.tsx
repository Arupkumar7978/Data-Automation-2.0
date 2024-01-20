import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import { sideNavBarStyles } from './styles';
import Fade from '@mui/material/Fade';
import { CollapsedMenuBarProps } from './types';
import { memo } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { BASE_URI } from '../../Configurations/Routers/constants';

const SideNavbar = (props: CollapsedMenuBarProps) => {
  console.log('SideNavBar Rendered');
  const { menuItems } = props;

  const classes = sideNavBarStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headIconStyles}>
        <Button variant="text">
          <MotionPhotosAutoIcon className={classes.brandLogo} />
        </Button>
      </div>

      <div className={classes.dynamicIconsDiv}>
        {menuItems
          ?.filter(({ id, isVisible }) => id < 4 && isVisible)
          .map((menu) => {
            return (
              <>
                <Tooltip
                  title={menu.name}
                  placement="right-end"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  key={menu.id}
                >
                  <NavLink
                    to={`/${BASE_URI}/${menu.name
                      .replace(' ', '-')
                      .toLowerCase()}`}
                    className={({ isActive, isPending }) =>
                      isActive ? 'active' : isPending ? 'pending' : ''
                    }
                  >
                    <Button
                      key={menu.id}
                      className={clsx(classes.dynamicIcons, {
                        [classes.activeButton]: menu.name === ''
                      })}
                    >
                      {menu.icon}
                    </Button>
                  </NavLink>
                </Tooltip>
              </>
            );
          })}
      </div>

      <div className={classes.footerContent}>
        {menuItems
          ?.filter(({ id, isVisible }) => id > 3 && isVisible)
          .map((menu) => {
            return (
              <Tooltip
                title={menu.name}
                placement="right-end"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                key={menu.id}
              >
                <Button
                  key={menu.id}
                  className={clsx(classes.dynamicIcons, {
                    [classes.activeButton]:
                      menu.name?.toLowerCase() === ''
                  })}
                >
                  {menu.icon}
                </Button>
              </Tooltip>
            );
          })}
      </div>
    </div>
  );
};

export default memo(SideNavbar);
