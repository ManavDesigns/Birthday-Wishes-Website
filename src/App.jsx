import { useState } from 'react';
import CinemaIntro from '@/components/CinemaIntro';
import WelcomeFlow from '@/components/WelcomeFlow';
import BirthdayHero from '@/components/BirthdayHero';
import GiftSection from '@/components/GiftSection';
import PhotoGallery from '@/components/PhotoGallery';
import SecretLetters from '@/components/SecretLetters';
import FinalSurprise from '@/components/FinalSurprise';
import BackgroundMusic from '@/components/BackgroundMusic';
import StepNavigation from '@/components/StepNavigation';
import Doodles from '@/components/art/Doodles';

export default function App() {
  // Steps: 'curtain' -> 'welcome' -> 'gifts' -> 'memories' -> 'letters' -> 'finale'
  const [step, setStep] = useState('curtain');
  const [restartKey, setRestartKey] = useState(0);
  const [musicTrigger, setMusicTrigger] = useState(false);

  function goToStep(nextStep) {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Curtain Explore clicked -> auto-transition to Welcome
  function handleCurtainComplete() {
    setMusicTrigger(true);
    goToStep('welcome');
  }

  // Welcome YES clicked (or any Please screen YES) -> auto-transition to Gifts
  function handleWelcomeYes() {
    setMusicTrigger(true);
    goToStep('gifts');
  }

  // Celebrate Again: Restarts complete surprise experience from the very first Curtain Intro
  function handleCelebrateAgain() {
    setStep('curtain');
    setRestartKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Doodles />
      <BackgroundMusic autoStart={musicTrigger} />

      {/* STEP 1: Curtain Intro Screen */}
      {step === 'curtain' && (
        <CinemaIntro
          key={`curtain-${restartKey}`}
          onEnter={handleCurtainComplete}
        />
      )}

      {/* STEP 2: Welcome & YES/NO Pleading Flow */}
      {step === 'welcome' && (
        <main>
          <WelcomeFlow
            key={`welcome-${restartKey}`}
            onYes={handleWelcomeYes}
          />
        </main>
      )}

      {/* STEP 3: Five Gifts Room */}
      {step === 'gifts' && (
        <main>
          <BirthdayHero />
          <GiftSection key={`gifts-${restartKey}`} />
          <StepNavigation
            currentStepIndex={1}
            totalSteps={4}
            stepTitle="Five Gifts Room 🎁"
            previousLabel="← Welcome"
            nextLabel="Photo Memories ➜"
            onPrevious={() => goToStep('welcome')}
            onNext={() => goToStep('memories')}
            showPrevious={true}
            showNext={true}
          />
        </main>
      )}

      {/* STEP 4: Photo Memories Gallery */}
      {step === 'memories' && (
        <main>
          <PhotoGallery key={`photos-${restartKey}`} />
          <StepNavigation
            currentStepIndex={2}
            totalSteps={4}
            stepTitle="Photo Memories 📸"
            previousLabel="← Five Gifts"
            nextLabel="Secret Letters ➜"
            onPrevious={() => goToStep('gifts')}
            onNext={() => goToStep('letters')}
            showPrevious={true}
            showNext={true}
          />
        </main>
      )}

      {/* STEP 5: Five Secret Letters Collection */}
      {step === 'letters' && (
        <main>
          <SecretLetters key={`letters-${restartKey}`} />
          <StepNavigation
            currentStepIndex={3}
            totalSteps={4}
            stepTitle="Five Secret Letters 💌"
            previousLabel="← Photo Memories"
            nextLabel="Birthday Finale ➜"
            onPrevious={() => goToStep('memories')}
            onNext={() => goToStep('finale')}
            showPrevious={true}
            showNext={true}
          />
        </main>
      )}

      {/* STEP 6: Final Birthday Celebration */}
      {step === 'finale' && (
        <main>
          <FinalSurprise
            key={`finale-${restartKey}`}
            onCelebrateAgain={handleCelebrateAgain}
          />
          <StepNavigation
            currentStepIndex={4}
            totalSteps={4}
            stepTitle="Celebration Finale 🎉"
            previousLabel="← Secret Letters"
            nextLabel="Celebrate Again ✨"
            onPrevious={() => goToStep('letters')}
            onNext={handleCelebrateAgain}
            showPrevious={true}
            showNext={true}
          />
        </main>
      )}
    </>
  );
}
