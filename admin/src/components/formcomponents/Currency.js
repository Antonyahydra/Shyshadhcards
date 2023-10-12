import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const currency = [
  'Dollar - $',
  'Euro - €',
  'Pound - £',
  'Yen - ¥',
  'Franc - ₣',
  'Rupee - ₹',
  'Dinar - د.' 
];

function getStyles(currency, currencyname, theme) {
  return {
    fontWeight:
      currencyname.indexOf(currency) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CurrencySelect() {
  const theme = useTheme();
  const [currencyname, setcurrencyname] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcurrencyname(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={currencyname}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select Currency</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select Currency</em>
          </MenuItem>
          {currency.map((currency) => (
            <MenuItem
              key={currency}
              value={currency}
              style={getStyles(currency, currencyname, theme)}
            >
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}