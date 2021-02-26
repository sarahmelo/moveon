import { cpus } from 'os';
import { useState, useEffect, useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive,
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return(
    <div>
        <div className={ style.countdownContainer }>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            
            <span>:</span>

            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        
        { hasFinished ? (
            <button 
            disabled
            type="button" 
            className={style.countdownButton} 
        >           
            Ciclo encerrado
        </button>
        ) : (
            <div>
                { isActive ? (
            <button type="button" 
                className={ `${style.countdownButton} ${style.countdownButtonActive}` } 
                onClick={resetCountdown}
            >           
                { isActive ? 'Abandonar ciclo' : 'Iniciar ciclo'}
            </button>

        ) : (
            <button type="button" 
                className={ style.countdownButton } 
                onClick={startCountdown}
            >
                { isActive ? 'Abandonar ciclo' : 'Iniciar ciclo'}
            </button>
        ) }
        
            </div>
        )}

        
    </div>
    )
}