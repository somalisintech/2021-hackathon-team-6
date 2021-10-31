import { createContext, useState } from 'react'
// import axios from 'axios'

export const CO2EContext = createContext()

export const CO2EProvider = (props) => {
  const [fuel, setFuel] = useState(null)
  const [publicTransport, setPublicTransport] = useState(null)
  const [flight, setFlight] = useState(null)
  const [motorBike, setMotorBike] = useState(null)

  const handleFuel = () => {}
  const handlePT = () => {}
  const handleFlight = () => {}
  const handleMB = () => {}

  return (
    <CO2EContext.Provider value={{
      fuel,
      setFuel,
      publicTransport,
      setPublicTransport,
      flight,
      setFlight,
      motorBike,
      setMotorBike,
      handleFuel,
      handlePT,
      handleFlight,
      handleMB
    }}>
      {props.children}
    </CO2EContext.Provider>
  )
}