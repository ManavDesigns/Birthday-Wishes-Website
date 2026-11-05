import { ChevronLeft, ChevronRight } from 'lucide-react';
import './StepNavigation.css';

export default function StepNavigation({
  currentStepIndex,
  totalSteps = 4,
  stepTitle,
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
  previousLabel = 'Previous',
  nextLabel = 'Next',
}) {
  return (
    <nav className="step-nav-container" aria-label="Step navigation">
      {showPrevious && onPrevious ? (
        <button
          type="button"
          className="step-nav-btn step-nav-btn--prev"
          onClick={onPrevious}
        >
          <ChevronLeft size={18} />
          <span>{previousLabel}</span>
        </button>
      ) : (
        <div className="step-nav-placeholder" aria-hidden="true" />
      )}

      {currentStepIndex && (
        <div className="step-nav-indicator">
          <span className="step-nav-count">
            {`Step ${currentStepIndex} of ${totalSteps}`}
          </span>
          {stepTitle && <span className="step-nav-title">{stepTitle}</span>}
        </div>
      )}

      {showNext && onNext ? (
        <button
          type="button"
          className="step-nav-btn step-nav-btn--next"
          onClick={onNext}
        >
          <span>{nextLabel}</span>
          <ChevronRight size={18} />
        </button>
      ) : (
        <div className="step-nav-placeholder" aria-hidden="true" />
      )}
    </nav>
  );
}
