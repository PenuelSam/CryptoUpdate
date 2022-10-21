import React from 'react'
import CoinDetail from '../Components/CoinDetail'
import HistoryChart from '../Components/HistoryChart'

const CryptoDetail = () => {
  return (
    <div className='wrapper-container mt-10'>
      <HistoryChart />
      <CoinDetail />
    </div>
  )
}

export default CryptoDetail
