import React from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import '../../../scss/main.scss';

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
    maxHeight: '50vh',
    overflow: 'auto',
    fontSize: 18,
  },
  option: {
    '&[aria-selected="true"]': {
      color: '#24CCA7',
      backgroundColor: '#fff',
    },
    '&[data-focus="true"]': {
      color: '#FF6596',
      backgroundColor: '#fff',
    },
  },
}));

export default function Category({ value, onChange, error, errorText }) {
  const classes = useStyles();
  return (
    <Autocomplete
      classes={classes}
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue.value === 'string') {
          onChange('category', newValue.value);
        } else if (newValue.value && newValue.inputValue) {
          // Create a new value from the user input
          console.log(newValue.value);
          console.log(newValue.inputValue);

          onChange('category', newValue.value);
        } else {
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
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="category"
      options={category}
      getOptionLabel={option => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option.slice(5, -1);
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          console.log(option.inputValue);
          return option.inputValue;
        }
        // Regular option
        return option.value;
      }}
      renderOption={option => option.value}
      //   style={{ width: '100%' }}
      freeSolo
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

const category = [
  { value: 'house' },
  { value: 'car' },
  { value: 'kids' },
  { value: 'sallary' },
  { value: 'sallary' },
  { value: 'sallary' },
  { value: 'sallary' },
  { value: 'sallary' },
  { value: 'sallary' },
];
