import React, { useState } from 'react';
import { UserLoginSyles } from './styles';
import {
  FIREBASE_AUTH_SOURCES,
  USER_LOGIN_SECTION_CONFIG
} from '../../Global/Constants';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { IoMdMail } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const UserLogin = (props: UserLoginProps) => {
  const classes = UserLoginSyles();

  const [showPassword, setShowPassword] = useState(false);

  const GET_ASIDEBAR_SECTION_COMPONENT = () => (
    <div>
      <h1 className={classes.produtTitleContext}>
        {USER_LOGIN_SECTION_CONFIG.NAME}
      </h1>
      <span className={classes.subTitle}>
        {USER_LOGIN_SECTION_CONFIG.USER_LOGIN_SUB_TITLE}
      </span>
      <span className={classes.notAMember}>
        {USER_LOGIN_SECTION_CONFIG.ASK_FOR_MEMBERSHIP}
      </span>
      <Button variant="contained" className={classes.buttonContext}>
        {USER_LOGIN_SECTION_CONFIG.JOIN_US_NOW}
      </Button>
    </div>
  );

  const FOOTER_CONTENTS_LIST = [
    'Sign Up',
    'Log In',
    'Services',
    'About',
    'Developers',
    'Careers',
    'Privacy',
    'Terms',
    'Help'
  ];
  const GET_FOOTER_CONTENTS = () => (
    <>
      <div className={classes.footerLinks}>
        {FOOTER_CONTENTS_LIST.map((contentName, index) => (
          <>
            <span className={classes.footerContent}>
              {contentName}
            </span>
            {index < FOOTER_CONTENTS_LIST.length - 1 && (
              <span>|</span>
            )}
          </>
        ))}
      </div>
      <h1 className={classes.copyRights}>
        Copyrights © 2024-25 | Data Automation
      </h1>
    </>
  );

  return (
    <>
      <section>
        <GET_ASIDEBAR_SECTION_COMPONENT />
        <div className={classes.formContainer}>
          <div className={classes.formbody}>
            <span className={classes.commontextStyles}>
              Continue with
            </span>
            <div className={classes.fireBaseLoginContainer}>
              <div>
                {FIREBASE_AUTH_SOURCES?.map(
                  ({ provider, source }) => (
                    <div
                      className={classes.firebaseGenericAuthButton}
                    >
                      <div className={classes.authButtonswrapper}>
                        <img
                          className={classes.authProviderLogo}
                          src={source}
                          alt={provider}
                        />
                      </div>
                      <p className={classes.authProviderName}>
                        {(provider as string).toUpperCase()}
                      </p>
                    </div>
                  )
                )}
                <h4 className={classes.commontextStyles}>- OR -</h4>
              </div>
              <div className={classes.userInputContainer}>
                <TextField
                  size="small"
                  fullWidth
                  label="Email Address"
                  // focused
                  // required
                  type="email"
                  // helperText="Please enter your email address"
                  margin="normal"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <IoMdMail />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Password"
                  // focused
                  // required
                  type={showPassword ? 'text' : 'password'}
                  // helperText="Please enter your password"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowPassword((prev) => !prev)
                          }
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ backgroundColor: 'black' }}
                >
                  LOG IN
                </Button>
                <Typography variant="caption">
                  Forgot your password ? No worries just Click Here
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <GET_FOOTER_CONTENTS />
      </section>
    </>
  );
};

export default React.memo(UserLogin);
