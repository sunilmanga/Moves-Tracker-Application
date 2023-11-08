import './App.css'
import {useEffect, useState} from 'react'
import Home from './components/Home'
// import Counter from './components/Counter'

const App = () => {
  const [dayta, setDayta] = useState([])

  const Ap = () => {
    const data = fetch(
      'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b',
    )
      .then(dat => dat.json())
      .then(x => {
        const ha = x.Customer_Estimate_Flow
        setDayta(ha)
        console.log(data)
        const chd = ha.map(e => ({
          callback: e.call_back,
          customstatus: e.custom_status,
          datecreated: e.date_created,
          dateofcancel: e.date_of_cancel,
          dateofcomplete: e.date_of_complete,
          distance: e.distance,
          estimateAmount: e.estimateAmount,
          estimatecomparison: e.estimate_comparison,
          estimateid: e.v,
          estimatestatus: e.estimate_status,
        }))
        console.log(chd)
      })
  }

  useEffect(() => {
    Ap()
  }, [])

  return (
    <div>
      <Home e={dayta} />
    </div>
  )
}

export default App
