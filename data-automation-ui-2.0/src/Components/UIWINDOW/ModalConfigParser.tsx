/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalRendererStyles } from './styles';
import { TextField, Typography } from '@mui/material';

const GetFields = (
  config: any,
  handleOnChange?: any,
  fieldsValueState?: any
) => {
  const classes = ModalRendererStyles();
  const { fieldType, filedProps, label, name, helperText } = config;
  switch (fieldType) {
    case 'TEXTFIELD':
      return (
        <div className={classes.textFieldDiv}>
          {label && (
            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
              {label}
            </Typography>
          )}
          <TextField
            {...filedProps}
            size="small"
            fullWidth
            variant="outlined"
            name={name}
            onChange={handleOnChange}
            helperText={helperText}
            value={fieldsValueState?.[name]}
          />
        </div>
      );
      break;

    default:
      return <TextField />;
      break;
  }
};

export const GetModalConfigs = (
  contentConfig: any,
  handleOnChange?: any,
  fieldsValueState?: any
) => {
  const classes = ModalRendererStyles();
  return (
    <>
      <div className={classes.root}>
        {contentConfig?.map((config: any) =>
          GetFields(config, handleOnChange, fieldsValueState)
        )}
      </div>
    </>
  );
};
