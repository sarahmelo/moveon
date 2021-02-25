import { cpus } from 'os';
import { useState, useEffect, useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const { startNewChallenge } = useContext(challengesContext);


    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            },1000)
        } else if ( isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

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