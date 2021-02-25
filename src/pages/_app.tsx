import '../styles/global.css'

import { challengesContext, ChallengesProvide } from '../contexts/ChallengesContext'

import React, { useState } from 'react'

function MyApp({ Component, pageProps }) {
  
  return ( 
    <ChallengesProvide>
      <Component {...pageProps} />
      </ChallengesProvide>
  )
}

export default MyApp
