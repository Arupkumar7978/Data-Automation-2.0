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
