import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField
} from '@mui/material';
import Opening from 'common/Opening.js';
import * as infoAlert from 'features/alert/infoAlertSlice';
import * as pgnMode from 'features/mode/pgnModeSlice';
import OpeningSearchResultTable from 'features/mode/pgn/table/OpeningSearchResultTable.js';

const SearchNameDialog = ({ props }) => {
  const state = useSelector(state => state);
  const [openings, setOpenings] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    const openings = Opening.byName(event.target.elements.name.value);
    setOpenings(openings);
    if (openings.length === 0) {
      dispatch(pgnMode.searchNameDialog({ open: false }));
      dispatch(infoAlert.show({ info: 'No results were found. Please try again.' }));
    }
  }

  return (
    <Dialog open={state.pgnMode.dialogs.searchName.open} maxWidth="sm" fullWidth={true}>
      <DialogTitle>
        Name
        <IconButton onClick={() => {
          setOpenings([]);
          dispatch(pgnMode.searchNameDialog({ open: false }));
        }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSearch}>
          <TextField
            id="SearchNameDialog-TextField-name"
            fullWidth
            required
            name="name"
            label="Name"
            variant="filled"
            margin="normal"
          />
          <Button
            id="SearchNameDialog-Button-search"
            fullWidth
            type="submit"
            variant="outlined"
            sx={{ mt: 2 }}
          >
            Search
          </Button>
        </form>
        <OpeningSearchResultTable props={{ openings: openings }} />
      </DialogContent>
    </Dialog>
  );
}

export default SearchNameDialog;
