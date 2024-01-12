import { lazy } from 'react';
import { GenericComponentType } from './gobalTypes';

export const Components: GenericComponentType = {
  InvoiceData: lazy(() => import('../Containers/InvoiceData/index')),
  SpreadSheets: lazy(() => import('../Containers/SpreadSheets/index'))
};
