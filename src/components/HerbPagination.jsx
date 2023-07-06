import React from 'react'
import Pagination from '@mui/material/Pagination'
import { styled } from '@mui/material'

const CustomPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    '& .MuiPaginationItem-root': {
      '&.Mui-selected': {
        background: '#E5F8E6',
        color: '#333333',
        // borderRadius: '50%',
      },
      fontWeight: '700',
      fontSize: '18px',
      color: '#333333',
    },
  },
}))

const HerbPagination = () => {
  return (
    <div>
      <CustomPagination
        count={10}
        shape="rounded"
        size="large"
        sx={{
          backgroundColor: 'transparent',
        }}
      />
    </div>
  )
}

export default HerbPagination
