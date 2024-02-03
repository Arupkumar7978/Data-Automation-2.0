import { GenericComponentType } from './gobalTypes';
import { Components } from './Components';
import { fetchAllWorkbooks } from '.././Containers/SpreadSheets/Actions';

export const isValidScreenName = (
  screenName: string
): screenName is keyof GenericComponentType =>
  screenName in Components;

export const handleGetData = (dispatch) =>
  dispatch(fetchAllWorkbooks());
