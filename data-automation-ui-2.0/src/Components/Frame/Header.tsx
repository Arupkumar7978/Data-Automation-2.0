import React, { memo, useState } from 'react';
import { HeaderStyles } from './styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { HeaderProps } from './types';

const HeaderIndex = (props: HeaderProps) => {
  console.log('Header Rendered');

  const { handleMode, mode } = props;

  const classes = HeaderStyles();

  const [toggleSearch, settoggleSearch] =
    React.useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleDarkMode = () => {
    if (mode) handleMode(false);
    else handleMode(true);
  };
  const cleanSearch = () => setSearchInput('');
  const onSearchIconClick = () => {
    settoggleSearch((prev) => !prev);
    cleanSearch();
  };
  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchInput(event.target.value);
  };
  React.useEffect(() => {
    setTimeout(() => {
      if (searchInput.length === 0) {
        settoggleSearch(false);
      }
    }, 10000);
  }, [searchInput.length]);

  return (
    <>
      <div className={classes.root}>
        {/* <div className={classes.dynamicSearchfield}>
          {toggleSearch && (
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search here .."
              fullWidth
              size="small"
              onChange={onChange}
              value={searchInput}
              onBlur={cleanSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              variant="outlined"
            />
          )}
        </div> */}
        <div className={classes.flexEndDiv}>
          {/* <IconButton onClick={onSearchIconClick}>
            {!toggleSearch ? (
              <SearchIcon className={classes.Icons} />
            ) : (
              <ClearIcon className={classes.Icons} />
            )}
          </IconButton> */}

          <IconButton onClick={handleDarkMode}>
            {mode ? (
              <WbSunnyOutlinedIcon className={classes.sun} />
            ) : (
              <DarkModeIcon className={classes.moon} />
            )}
          </IconButton>

          <IconButton>
            <Badge
              badgeContent=""
              variant="dot"
              overlap="circular"
              invisible={false}
              color="info"
            >
              <NotificationsIcon
                className={classes.notificationIcon}
              />
            </Badge>
          </IconButton>

          {/* <Avatar
            src={
              'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
            }
            className={classes.headerAvatar}
          /> */}
        </div>
      </div>
    </>
  );
};

export default memo(HeaderIndex);
