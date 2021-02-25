import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {

    const { challengesCompleted } = useContext( challengesContext );

    return(
        <div className={ style.completedChallengesContainer}>
        <span>Desafios completados</span>
        <span>5</span>

        </div>
    );
}