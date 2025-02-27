import infoAlertReducer from 'features/alert/infoAlertSlice';
import warningAlertReducer from 'features/alert/warningAlertSlice';
import boardReducer from 'features/board/boardSlice';
import fenModeReducer from 'features/mode/fenModeSlice';
import sanModeReducer from 'features/mode/sanModeSlice';
import ravModeReducer from 'features/mode/ravModeSlice';
import playModeReducer from 'features/mode/playModeSlice';
import stockfishModeReducer from 'features/mode/stockfishModeSlice';
import navReducer from 'features/nav/navSlice';
import panelReducer from 'features/panel/panelSlice';
import wsReducer from 'features/ws/wsSlice';
import heuristicsBarReducer from 'features/heuristicsBarSlice';
import progressDialogReducer from 'features/progressDialogSlice';

const rootReducer = {
  infoAlert: infoAlertReducer,
  warningAlert: warningAlertReducer,
  board: boardReducer,
  fenMode: fenModeReducer,
  sanMode: sanModeReducer,
  ravMode: ravModeReducer,
  playMode: playModeReducer,
  stockfishMode: stockfishModeReducer,
  nav: navReducer,
  panel: panelReducer,
  ws: wsReducer,
  heuristicsBar: heuristicsBarReducer,
  progressDialog: progressDialogReducer,
};

export default rootReducer;
