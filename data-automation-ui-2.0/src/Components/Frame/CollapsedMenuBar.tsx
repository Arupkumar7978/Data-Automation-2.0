import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import { sideNavBarStyles } from './styles';
import Fade from '@mui/material/Fade';
import { CollapsedMenuBarProps } from './types';
import { memo } from 'react';
import clsx from 'clsx';

const SideNavbar = (props: CollapsedMenuBarProps) => {
  console.log('SideNavBar Rendered');
  const { currentScreenName, menuItems, onMenuItemClick } = props;

  const classes = sideNavBarStyles();

  const handleDynamicScreencontent = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    if (![''].includes(name)) {
      onMenuItemClick(event, name);
    }
  };

  console.log('currentScreenName', currentScreenName);

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
                      menu.name === currentScreenName
                  })}
                  onClick={(event) =>
                    handleDynamicScreencontent(event, menu.name)
                  }
                >
                  {menu.icon}
                </Button>
              </Tooltip>
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
                      menu.name?.toLowerCase() ===
                      currentScreenName?.toLowerCase()
                  })}
                  onClick={(event) =>
                    handleDynamicScreencontent(event, menu.name)
                  }
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
