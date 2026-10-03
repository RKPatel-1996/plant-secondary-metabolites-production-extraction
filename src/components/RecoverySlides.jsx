import { useState } from 'react'
import { CHAPTER_BY_ID } from '../data/presentation.js'

function SlideChrome({ slide, children, className = '' }) {
  const chapter = CHAPTER_BY_ID[slide.chapterId]

  return (
    <article className={`slide-card ${className}`}>
      <div className="slide-card__meta">
        <span>
          {String(chapter.number).padStart(2, '0')} · {chapter.title}
        </span>

        <span>{String(slide.number).padStart(2, '0')}</span>
      </div>

      <div className="slide-content">{children}</div>
    </article>
  )
}


function HarvestBoundarySlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">The downstream boundary</p>

        <h2>Harvest is the boundary</h2>

        <p>
          Before harvest, our main concern is biological production and
          accumulation. After harvest, the priority changes to preserving
          the chemical state of the sample and recovering the target.
        </p>
      </div>

      <div className="harvest-boundary">
        <section className="harvest-boundary__side harvest-boundary__side--before">
          <span>Before harvest</span>

          <h3>Keep the biological system producing</h3>

          <ul>
            <li>Growth and metabolism continue.</li>
            <li>The target metabolite may still be synthesized or consumed.</li>
            <li>Culture and environmental conditions remain important.</li>
          </ul>
        </section>

        <div className="harvest-boundary__gate">
          <span>HARVEST</span>
          <strong>→</strong>
          <small>transition point</small>
        </div>

        <section className="harvest-boundary__side harvest-boundary__side--after">
          <span>After harvest</span>

          <h3>Protect the sample and recover the molecule</h3>

          <ul>
            <li>Biological composition can still change after collection.</li>
            <li>Enzymes, oxidation, heat and light may affect some targets.</li>
            <li>Preparation now influences extraction and measurement.</li>
          </ul>
        </section>
      </div>

      <div className="harvest-boundary-takeaway">
        <strong>Harvest does not automatically preserve the metabolite.</strong>

        <span>
          The next steps must be chosen to minimize unwanted change before
          extraction.
        </span>
      </div>
    </SlideChrome>
  )
}


const preparationSteps = [
  {
    id: 'collect',
    number: '01',
    title: 'Collect the correct material',
    purpose:
      'Choose the tissue, culture or organ in which the target has accumulated.',
    decisions:
      'Identity, developmental stage, treatment state and harvest time matter.',
    result: 'Defined biological starting material',
  },
  {
    id: 'stabilize',
    number: '02',
    title: 'Stabilize when necessary',
    purpose:
      'Limit unwanted chemical or enzymatic changes between harvest and extraction.',
    decisions:
      'Depending on the target, material may be processed fresh, cooled, frozen, dried or otherwise stabilized.',
    result: 'Sample state preserved as far as practical',
  },
  {
    id: 'reduce',
    number: '03',
    title: 'Reduce particle size',
    purpose:
      'Expose more internal material so the extraction solvent can contact the sample efficiently.',
    decisions:
      'Cutting, crushing, grinding or homogenization may be used at different scales.',
    result: 'Greater accessible surface area',
  },
  {
    id: 'standardize',
    number: '04',
    title: 'Standardize the sample',
    purpose:
      'Make samples comparable before extraction and quantitative measurement.',
    decisions:
      'Control mass, moisture basis, particle size and sample handling where relevant.',
    result: 'Defined extraction input',
  },
]


function PreparationStepCard({ step, compact = false }) {
  return (
    <article
      className={`preparation-step-card ${
        compact ? 'preparation-step-card--compact' : ''
      }`}
    >
      <div className="preparation-step-card__heading">
        <span>{step.number}</span>

        <div>
          <p>Preparation decision</p>
          <h3>{step.title}</h3>
        </div>
      </div>

      <div className="preparation-step-card__content">
        <div>
          <span>Why?</span>
          <p>{step.purpose}</p>
        </div>

        <div>
          <span>What may change?</span>
          <p>{step.decisions}</p>
        </div>

        <div>
          <span>Output</span>
          <strong>{step.result}</strong>
        </div>
      </div>
    </article>
  )
}


function MaterialPreparationSlide({ slide }) {
  const [activeId, setActiveId] = useState(preparationSteps[0].id)

  const activeIndex = preparationSteps.findIndex(
    (step) => step.id === activeId,
  )

  const active =
    preparationSteps[activeIndex] ??
    preparationSteps[0]

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">From biomass to extraction input</p>

          <h2>Prepare the biological material</h2>

          <p>
            Sample preparation is not just housekeeping. Each decision can
            affect how much target is preserved, released and eventually
            measured.
          </p>
        </div>

        <div className="preparation-sequence">
          {preparationSteps.map((step, index) => (
            <button
              type="button"
              key={step.id}
              className={`preparation-sequence__step ${
                step.id === active.id ? 'is-selected' : ''
              }`}
              onClick={() => setActiveId(step.id)}
              aria-pressed={step.id === active.id}
            >
              <span>{step.number}</span>
              <strong>{step.title}</strong>

              {index < preparationSteps.length - 1 ? (
                <em aria-hidden="true">→</em>
              ) : null}
            </button>
          ))}
        </div>

        <PreparationStepCard step={active} />

        <div className="preparation-principle">
          <strong>No single preparation sequence fits every metabolite.</strong>

          <span>
            The correct choices depend on chemical stability, tissue type,
            extraction method and the measurement goal.
          </span>
        </div>
      </SlideChrome>

      <SlideChrome slide={slide} className="print-only">
        <div className="section-heading">
          <p className="eyebrow">From biomass to extraction input</p>

          <h2>Prepare the biological material</h2>

          <p>
            Representative preparation decisions before extraction.
          </p>
        </div>

        <div className="preparation-print-grid">
          {preparationSteps.map((step) => (
            <PreparationStepCard
              key={step.id}
              step={step}
              compact
            />
          ))}
        </div>

        <div className="preparation-principle">
          <strong>No single preparation sequence fits every metabolite.</strong>

          <span>
            Preparation must be matched to the target molecule and analytical
            objective.
          </span>
        </div>
      </SlideChrome>
    </>
  )
}


export function RecoverySlideRenderer({ slide }) {
  if (slide.id === 'harvest-boundary') {
    return <HarvestBoundarySlide slide={slide} />
  }

  if (slide.id === 'material-preparation') {
    return <MaterialPreparationSlide slide={slide} />
  }

  return null
}
