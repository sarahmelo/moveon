import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(challengesContext);
    
    return (
        <div className={ style.profileContainer }>
            <img src="https://github.com/sarahmelo.png" alt="Sarah"/>
            <div>
                <strong>Sarah Melo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }</p>
            </div>
        </div>
    )
}