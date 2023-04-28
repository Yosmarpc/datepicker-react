import React from 'react'
import './App.css'
import Filter from './components/Filter'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App () {
  return (
    <div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Filter />
      </LocalizationProvider>
    </div>
  )
}

export default App
