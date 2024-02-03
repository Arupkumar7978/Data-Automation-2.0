import React from 'react';

type ReactOrJSXElement =
  | string
  | React.ReactElement
  | JSX.Element
  | React.ReactNode
  | null;

type headerTypes = {
  title: string;
  description?: string | undefined;
  hideCloseIcon?: boolean | undefined;
};

export default interface ModalTypes {
  children: ReactOrJSXElement;
  headerConfig: headerTypes;
  footerContent?: ReactOrJSXElement | undefined;
  onClose?: () => void;
  open: boolean;
  modalType: 'warning' | 'confirm' | 'error' | 'info' | 'custom';
  customModalTypeIcon?: any;
  handleOnModalFieldsChange?: any;
  fieldsValueState?: any;
}
