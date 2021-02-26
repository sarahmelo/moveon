import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetCountdown();
        resetChallenge();
        
    }

    return (
        <div className={style.challengeBoxContainer}>
            
            { activeChallenge ? (
                
                <div className={style.challengeActive}>
                    <header>Ganhe { activeChallenge.amount} xp</header>

                    <main>
                        <img src={ `icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>
                
                    <footer>
                        <button 
                        type="button"
                        className={style.challengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            Falhei</button>
                        <button 
                        type="button"
                        className={style.challengeSuccesButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completei</button>
                    </footer>
                </div>

            ) : (

                <div className={style.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>

                    <p>
                        <img src="icons/level.svg" alt="level"/>
                        Avance de level competando desagios.
                    </p>
                </div>

            ) }

        </div>
    )
}