import challenges from '../../challenges.json'

import { createContext, ReactNode, useState } from 'react';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvide({ children } : ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
  
    const [activeChallenge, setActiveChellenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4,2)

    function levelUp() {
    setLevel(level + 1)
    }

    function startNewChallenge() {
      const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
      const challenge = challenges[randomChallengeIndex];

      setActiveChellenge(challenge)
    }
    
    function resetChallenge() {
        setActiveChellenge(null);
    }

    return (
        <challengesContext.Provider
            value={{ 
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
            }}
        >
            {children}
        </challengesContext.Provider>
    )
}