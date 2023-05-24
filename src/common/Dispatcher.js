import store from 'app/store';
import Opening from 'common/Opening.js';
import * as heuristicsBar from 'features/heuristicsBarSlice';
import * as history from 'features/historySlice';
import * as board from 'features/board/boardSlice';
import * as infoAlert from 'features/alert/infoAlertSlice';
import * as fenMode from 'features/mode/fenModeSlice';
import * as pgnMode from 'features/mode/pgnModeSlice';
import * as variantConst from 'features/mode/variantConst';

export default class Dispatcher {
  static initGui = (dispatch) => {
    dispatch(heuristicsBar.resetBar());
    dispatch(pgnMode.openingAnalysisTable({ open: false }));
    dispatch(pgnMode.gameTable({ open: false }));
    dispatch(infoAlert.close());
    dispatch(history.goTo({ back: 0 }));
    dispatch(board.start());
    dispatch(fenMode.start());
    dispatch(fenMode.set({ variant: variantConst.CLASSICAL }));
  };

  static openingAnalysisByMovetext = (dispatch, movetext) => {
    let rows = Opening.byMovetext(movetext);
    if (rows) {
      dispatch(pgnMode.openingAnalysisTable({ open: true, rows: rows }));
    } else {
      dispatch(pgnMode.openingAnalysisTable({ open: false }));
    }
  };

  static openingAnalysisBySameMovetext = (dispatch, movetext) => {
    let rows = Opening.bySameMovetext(movetext);
    if (rows) {
      dispatch(pgnMode.openingAnalysisTable({ open: true, rows: rows }));
    } else {
      dispatch(pgnMode.openingAnalysisTable({ open: false }));
    }
  };

  static activeVariant = () => {
    if (store.getState().fenMode.active) {
      return store.getState().fenMode.variant;
    } else if(store.getState().gmMode.active) {
      return store.getState().gmMode.variant;
    } else if(store.getState().pgnMode.active) {
      return store.getState().pgnMode.variant;
    } else if(store.getState().playMode.active) {
      return store.getState().playMode.variant;
    } else if(store.getState().stockfishMode.active) {
      return store.getState().stockfishMode.variant;
    }

    return false;
  };
}
