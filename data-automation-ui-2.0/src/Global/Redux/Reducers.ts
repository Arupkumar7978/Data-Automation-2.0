import { combineReducers } from 'redux';
import WorkbookReducer from '../../Containers/SpreadSheetsGrid/Reducer';

export default combineReducers({
  commonWorkspaceAndWorkbook: WorkbookReducer
});
