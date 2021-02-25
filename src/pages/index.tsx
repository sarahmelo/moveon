import Head from 'next/head'

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import style from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={ style.container }>
      <Head>
        <title>Início | mode.it</title>
      </Head>
      
      <ExperienceBar/>

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  )
}
