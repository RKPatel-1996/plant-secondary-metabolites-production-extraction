import { CHAPTER_BY_ID } from '../data/presentation.js'
import { OpeningSlideRenderer } from './OpeningSlides.jsx'
import { ProductionSlideRenderer } from './ProductionSlides.jsx'
import { RecoverySlideRenderer } from './RecoverySlides.jsx'
import { ExtractionSlideRenderer } from './ExtractionSlides.jsx'
import { FinalSlideRenderer } from './FinalSlides.jsx'

function RegisteredSlidePlaceholder({ slide }) {
  const chapter = CHAPTER_BY_ID[slide.chapterId]

  return (
    <article className="slide-card">
      <div className="slide-card__meta">
        <span>
          {String(chapter.number).padStart(2, '0')} · {chapter.title}
        </span>

        <span>{String(slide.number).padStart(2, '0')}</span>
      </div>

      <div className="slide-content">
        <div className="section-heading">
          <p className="eyebrow">Registered learning slide</p>
          <h2>{slide.title}</h2>
        </div>

        <div className="placeholder-state">
          <p>
            This slide is registered in the accepted learning flow but has not
            yet been visually implemented.
          </p>

          <span className="placeholder-state__status">
            {slide.interaction === 'none'
              ? 'Static lesson'
              : `Planned interaction · ${slide.interaction}`}
          </span>
        </div>
      </div>
    </article>
  )
}

export function SlideRenderer({ slide }) {
  if (
    slide.id === 'opening-problem' ||
    slide.id === 'metabolite-definition' ||
    slide.id === 'metabolite-families' ||
    slide.id === 'biological-matrix'
  ) {
    return <OpeningSlideRenderer slide={slide} />
  }

  if (
    slide.id === 'production-platform-bridge' ||
    slide.id === 'accumulation-varies' ||
    slide.id === 'elicitation' ||
    slide.id === 'elicitation-evidence'
  ) {
    return <ProductionSlideRenderer slide={slide} />
  }

  if (
    slide.id === 'harvest-boundary' ||
    slide.id === 'material-preparation'
  ) {
    return <RecoverySlideRenderer slide={slide} />
  }

  if (
    slide.id === 'extraction-principle' ||
    slide.id === 'solvent-polarity' ||
    slide.id === 'extraction-methods' ||
    slide.id === 'crude-to-purified'
  ) {
    return <ExtractionSlideRenderer slide={slide} />
  }

  if (
    slide.id === 'yield-concentration-purity' ||
    slide.id === 'resveratrol-case' ||
    slide.id === 'recovery-challenge'
  ) {
    return <FinalSlideRenderer slide={slide} />
  }

  return <RegisteredSlidePlaceholder slide={slide} />
}
