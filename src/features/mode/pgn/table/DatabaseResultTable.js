import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import Dispatcher from 'common/Dispatcher';
import * as modeConst from 'features/mode/modeConst';
import * as pgnMode from 'features/mode/pgnModeSlice';
import * as variantConst from 'features/mode/variantConst';
import * as nav from 'features/nav/navSlice';
import WsAction from 'features/ws/WsAction';
import * as progressDialog from 'features/progressDialogSlice';

const styles = {
  tableContainer: {
    mt: 1,
  },
  eventCell: {
    width: '20%',
  },
  yearCell: {
    width: '5%',
  },
  ecoCell: {
    width: '5%',
  },
  whiteCell: {
    width: '20%',
  },
  blackCell: {
    width: '20%',
  },
  eloCell: {
    width: '5%',
  },
  resultCell: {
    width: '10%',
  },
  actionCell: {
    width: '10%',
  },
  clickable: {
    cursor: 'pointer',
    backgroundColor: '#ececec',
  },
};

const DatabaseResultTable = ({props}) => {
  const dispatch = useDispatch();

  const handleLoad = (item) => {
    dispatch(pgnMode.searchGamesDialog({ open: false }));
    dispatch(progressDialog.open());
    dispatch(nav.setDatabase());
    Dispatcher.initGui(dispatch);
    WsAction.start(variantConst.CLASSICAL, modeConst.PGN, {
      movetext: item.movetext
    });
    dispatch(pgnMode.gameTable({
      game: {
        Event: item.Event,
        Site: item.Site,
        Date: item.Date,
        White: item.White,
        Black: item.Black,
        'White ELO': item.WhiteElo,
        'Black ELO': item.BlackElo,
        Result: item.Result,
        ECO: item.ECO
      }
    }));
  };

  return (
    <TableContainer
      sx={styles.tableContainer}
      component={Paper}
    >
      <Table stickyHeader aria-label="simple table">
        {
          props.result.length > 0
            ? <TableHead>
                <TableRow>
                  <TableCell sx={styles.eventCell} align="left">Event</TableCell>
                  <TableCell sx={styles.yearCell} align="left">Year</TableCell>
                  <TableCell sx={styles.ecoCell} align="left">ECO</TableCell>
                  <TableCell sx={styles.whiteCell} align="left">White</TableCell>
                  <TableCell sx={styles.eloCell} align="left">ELO</TableCell>
                  <TableCell sx={styles.blackCell} align="left">Black</TableCell>
                  <TableCell sx={styles.eloCell} align="left">ELO</TableCell>
                  <TableCell sx={styles.resultCell} align="left">Result</TableCell>
                </TableRow>
              </TableHead>
            : null
        }
        <TableBody>
          {
            props.result.map((item, i) => (
              <TableRow
                key={i}
                hover={true}
                sx={styles.clickable}
                onClick={() => handleLoad(item)}
              >
                <TableCell sx={styles.eventCell} align="left">{item.Event}</TableCell>
                <TableCell sx={styles.yearCell} align="left">{parseInt(item.Date)}</TableCell>
                <TableCell sx={styles.ecoCell} align="left">{item.ECO}</TableCell>
                <TableCell sx={styles.whiteCell} align="left">{item.White}</TableCell>
                <TableCell sx={styles.eloCell} align="left">{item.WhiteElo}</TableCell>
                <TableCell sx={styles.blackCell} align="left">{item.Black}</TableCell>
                <TableCell sx={styles.eloCell} align="left">{item.BlackElo}</TableCell>
                <TableCell sx={styles.resultCell} align="left">{item.Result}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DatabaseResultTable;
