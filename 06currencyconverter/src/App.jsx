
import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  return (
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style = {{backgroundImage:  `url(https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg)`}}>

    
    </div>
    </>
  )
}

export default App
