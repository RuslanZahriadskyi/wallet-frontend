import React from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import '../../../scss/main.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoriesOperation,
  categoriesSelectors,
} from '../../../redux/category';

const filter = createFilterOptions();
const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Poppins',

    padding: 0,
    marginBottom: 40,
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: 'translate(34px, 20px) scale(1);',
    },
    '& .MuiAutocomplete-hasPopupIcon .MuiAutocomplete-hasPopupIcon': {
      padding: 0,
    },
    // '& .MuiInputBase-root': {
    //   padding: 0,
    // },
    // '& .MuiInputBase-input': {
    //   padding: 0,
    // },
  },
  inputRoot: {
    fontFamily: 'Poppins',
    fontSize: '18px',
    '&[class*="MuiOutlinedInput-root"]': {
      padding: 0,
    },
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      padding: 0,
      paddingBottom: 10,
      paddingLeft: 20,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      borderBottom: '1px solid #E0E0E0',
      borderRadius: 0,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderBottom: '2px solid black',
    },
    // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'purple',
    // },
  },
  paper: {
    // ...theme.typography.body1,
    overflow: 'hidden',
    // backdropFilter: 50,
    // background: 'grey',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: `blur('50px')`,
  },
  listbox: {
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '44vh',
    overflow: 'auto',
    fontSize: 18,
  },
  option: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // '&[aria-selected="true"]': {
    //   color: '#24CCA7',
    //   backgroundColor: '#fff',
    // },
    '&[data-focus="true"]': {
      color: '#FF6596',
      backgroundColor: '#fff',
    },
  },
}));

export default function Category({ value, onChange, error, errorText }) {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.getAllUserCategory);

  const classes = useStyles();
  return (
    <Autocomplete
      classes={classes}
      value={value}
      onChange={(event, newValue) => {
        if (newValue === null) {
          return onChange('category', '');
        }
        if (typeof newValue.value === 'string') {
          const test = categories.some(
            category => category.value === newValue.value,
          );
          if (!test) {
            const newCategory = { category: newValue.value.slice(5, -1) };
            dispatch(categoriesOperation.createCategory(newCategory));
          }

          onChange('category', newValue.value);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            value: `Add "${params.inputValue}"`,
          });
        }
        return filtered;
      }}
      id="category"
      options={categories}
      getOptionSelected={(option, { multiple, value }) => {
        if (!multiple) {
          return option.value;
        }

        return false;
      }}
      getOptionLabel={option => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          if (option.includes('Add')) {
            return option.slice(5, -1);
          }
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.value;
      }}
      renderOption={option => option.value}
      renderInput={params => (
        <TextField
          {...params}
          placeholder="Выберите категорию"
          variant="outlined"
          error={Boolean(error)}
          helperText={errorText}
        />
      )}
    />
  );
}
