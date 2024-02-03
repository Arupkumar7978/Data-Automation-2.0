/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalTypes from '../Components/Modal/modalTypes';
import {
  CollapsedMenuBarProps,
  HeaderProps
} from '../Components/Frame/types';

import { LazyExoticComponent, MemoExoticComponent } from 'react';

export type UIWINDOWProps = CollapsedMenuBarProps & HeaderProps;

type LazyComponent = LazyExoticComponent<
  MemoExoticComponent<() => JSX.Element>
>;

export interface GenericComponentType {
  InvoiceData: LazyComponent;
  SpreadSheets: LazyComponent;
}

export interface Theme {
  palette: {
    background: {
      default: string;
      white: string;
      darkBlue: string;
    };
    buttons: {
      primary: string;
      yellow: string;
      onHover: string;
    };
    icons: {
      Blue: string;
      White: string;
    };
    text: {
      main: string;
    };
  };
  utils: { pxToRem: (value: number) => string };
}

export type useModalPropsType = {
  open: boolean;
  modalType: ModalTypes['modalType'];
  headerConfig: ModalTypes['headerConfig'];
  ModalContentConfig: any[];
  footerContent?: React.ReactNode;
  setState?: (e?: any) => void;
  state?: any;
  customContent?: React.ReactNode;
};
