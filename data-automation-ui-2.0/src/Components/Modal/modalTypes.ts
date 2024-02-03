/* eslint-disable @typescript-eslint/no-explicit-any */
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
  customModalTypeIcon?: React.ReactElement | JSX.Element | null;
  setOpen?: (e?: any) => void;
}
