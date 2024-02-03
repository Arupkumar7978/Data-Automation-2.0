export const getDisableState = (label: string) => {
  if (label === 'Refresh') return false;
  return true;
};
