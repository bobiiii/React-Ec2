import { Chip } from '@mui/material'
import React from 'react'

const HerbsChips = () => {
  return (
    <div>
      <Chip
        label="NAD+ for Longevity"
        style={{
          border: '1px solid #000000',
          background: '#FDEA3F',
          borderRadius: '10px',
          fontSize: '10px',
          fontWeight: '400',
          height: '24px',
          width: '100px',
        }}
      />

      <Chip
        label="Blemish Busters"
        style={{
          border: '1px solid #BD3C37',
          color: '#BD3C37',
          background: '#fff',
          borderRadius: '10px',
          fontSize: '10px',
          fontWeight: '400',
          marginLeft: '5px',
          height: '24px',
          width: '100px',
        }}
      />

      <Chip
        label="Allergy Relief"
        style={{
          border: '1px solid #000000',
          background: '#FDEA3F',
          borderRadius: '10px',
          fontSize: '10px',
          fontWeight: '400',
          marginLeft: '5px',
          padding: '0px',
          height: '24px',
          width: '90px',
        }}
      />
    </div>
  )
}

export default HerbsChips
