import React from 'react'
import {useHistory} from 'react-router-dom'
import { TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

export default function Search(props) {

  const {value, onChange, clearValue} = props;

  const history = useHistory()
  return (
    <div className="search"> 
       <TextField
        id="searchInput"
        placeholder="Search your favourite recipe..."
        value={value}
        onChange={onChange}
        onFocus={e=> history.push('/')}
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" style={!value.length? {opacity:"0"} : null } onClick={clearValue} >
              <CloseIcon/>
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}
