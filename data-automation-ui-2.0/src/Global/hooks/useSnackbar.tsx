import Snackbar from '@mui/material/Snackbar';

const useSnackbar = () => {
  return (
    <Snackbar
      open
      onClose={() => {}}
      message="I love snacks"
      key="unquie-key"
      autoHideDuration={1200}
    />
  );
};

export default useSnackbar;
