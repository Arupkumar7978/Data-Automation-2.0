import { combineReducers } from 'redux';
import WorkbookReducer from '../../Containers/SpreadSheets/Reducer';

export default combineReducers({
  workbook: WorkbookReducer
});
