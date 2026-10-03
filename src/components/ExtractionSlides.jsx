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


/* ---------------------------------------------------------
   Slide 11
   --------------------------------------------------------- */

function ExtractionPrincipleSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Transfer, not instant purification</p>

        <h2>What extraction actually does</h2>

        <p>
          Extraction moves selected compounds from a biological matrix into
          another phase, usually a solvent in solid-liquid extraction.
          It does not magically isolate a pure target molecule.
        </p>
      </div>

      <div className="extraction-principle-flow">
        <article>
          <span>01</span>
          <strong>Plant material</strong>
          <p>
            The target is embedded among many other cellular components.
          </p>
        </article>

        <span className="extraction-principle-flow__arrow">
          -&gt;
        </span>

        <article>
          <span>02</span>
          <strong>Solvent contacts the matrix</strong>
          <p>
            Solvent enters accessible spaces and contacts extractable
            compounds.
          </p>
        </article>

        <span className="extraction-principle-flow__arrow">
          -&gt;
        </span>

        <article>
          <span>03</span>
          <strong>Compounds transfer</strong>
          <p>
            Soluble compounds move from the plant material into the liquid
            phase.
          </p>
        </article>

        <span className="extraction-principle-flow__arrow">
          -&gt;
        </span>

        <article className="extraction-principle-flow__result">
          <span>04</span>
          <strong>Crude extract</strong>
          <p>
            The liquid now contains the target plus other co-extracted
            substances.
          </p>
        </article>
      </div>

      <div className="extraction-two-outputs">
        <div>
          <span>Liquid phase</span>
          <strong>
            Target + other soluble material
          </strong>
        </div>

        <div>
          <span>Residual solid</span>
          <strong>
            Material not transferred into the solvent
          </strong>
        </div>
      </div>

      <div className="extraction-principle-takeaway">
        <strong>Extraction is selective transfer.</strong>

        <span>
          How selective it becomes depends on the target molecule, matrix,
          solvent and extraction conditions.
        </span>
      </div>
    </SlideChrome>
  )
}


/* ---------------------------------------------------------
   Slide 12
   --------------------------------------------------------- */

const polarityProfiles = [
  {
    id: 'low',
    label: 'Low polarity',
    solventExamples: 'n-Hexane, petroleum ether',
    chemicalTendency:
      'Favors relatively nonpolar and lipophilic constituents.',
    plantExamples:
      'Oils, waxes, lipophilic pigments and some terpenoid constituents',
    caution:
      'A metabolite class can contain members with different polarity, so family name alone is not enough.',
  },
  {
    id: 'middle',
    label: 'Intermediate polarity',
    solventExamples: 'Ethyl acetate, acetone',
    chemicalTendency:
      'Can recover compounds with intermediate polarity that partition poorly into very nonpolar or very polar solvents.',
    plantExamples:
      'Many aglycones and moderately polar natural products',
    caution:
      'Actual behavior depends on functional groups, ionization, matrix interactions and solvent mixtures.',
  },
  {
    id: 'high',
    label: 'High polarity',
    solventExamples: 'Alcohols, aqueous alcohol, water',
    chemicalTendency:
      'Favors more polar constituents and compounds able to interact strongly with polar solvents.',
    plantExamples:
      'Many phenolics, glycosides and other polar constituents',
    caution:
      'Water and alcohol mixtures can behave differently from either pure solvent, and high polarity does not mean universal extraction.',
  },
]

function PolarityProfileCard({ profile, compact = false }) {
  return (
    <article
      className={`polarity-profile ${
        compact ? 'polarity-profile--compact' : ''
      }`}
    >
      <div className="polarity-profile__heading">
        <span>{profile.label}</span>
        <h3>{profile.solventExamples}</h3>
      </div>

      <div className="polarity-profile__facts">
        <div>
          <span>Chemical tendency</span>
          <p>{profile.chemicalTendency}</p>
        </div>

        <div>
          <span>Illustrative plant constituents</span>
          <p>{profile.plantExamples}</p>
        </div>
      </div>

      <div className="polarity-profile__caution">
        <strong>Important:</strong>
        <span>{profile.caution}</span>
      </div>
    </article>
  )
}

function SolventPolaritySlide({ slide }) {
  const [activeId, setActiveId] = useState(polarityProfiles[1].id)

  const active =
    polarityProfiles.find((profile) => profile.id === activeId) ??
    polarityProfiles[1]

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">Solubility is chemical</p>

          <h2>Solvent choice follows chemistry</h2>

          <p>
            Polarity is one major guide to solvent selection. A useful
            starting principle is that chemically compatible compounds are
            more likely to dissolve together, but polarity is not the only
            variable controlling extraction.
          </p>
        </div>

        <div className="polarity-scale">
          {polarityProfiles.map((profile, index) => (
            <button
              type="button"
              key={profile.id}
              className={`polarity-scale__option ${
                profile.id === active.id ? 'is-selected' : ''
              }`}
              onClick={() => setActiveId(profile.id)}
              aria-pressed={profile.id === active.id}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{profile.label}</strong>
            </button>
          ))}
        </div>

        <PolarityProfileCard profile={active} />

        <div className="polarity-rule">
          <span>Target chemistry</span>
          <strong>+</strong>
          <span>matrix chemistry</span>
          <strong>+</strong>
          <span>solvent properties</span>
          <strong>-&gt;</strong>
          <span className="polarity-rule__result">
            extraction behavior
          </span>
        </div>
      </SlideChrome>

      <SlideChrome slide={slide} className="print-only">
        <div className="section-heading">
          <p className="eyebrow">Solubility is chemical</p>

          <h2>Solvent choice follows chemistry</h2>
        </div>

        <div className="polarity-print-grid">
          {polarityProfiles.map((profile) => (
            <PolarityProfileCard
              key={profile.id}
              profile={profile}
              compact
            />
          ))}
        </div>

        <div className="polarity-rule">
          <span>
            Polarity is a guide, not a universal solvent-selection rule.
          </span>
        </div>
      </SlideChrome>
    </>
  )
}


/* ---------------------------------------------------------
   Slide 13
   --------------------------------------------------------- */

const extractionMethods = [
  {
    id: 'maceration',
    label: 'Maceration',
    mechanism:
      'Plant material remains in contact with solvent for a defined period, often with occasional agitation.',
    energy: 'Low external energy',
    temperature: 'Often ambient or mild conditions',
    usefulWhen:
      'A simple solid-liquid contact method is appropriate and long contact time is acceptable.',
    watch:
      'Extraction can be slow and solvent use may be substantial.',
  },
  {
    id: 'soxhlet',
    label: 'Soxhlet',
    mechanism:
      'Heated solvent repeatedly evaporates, condenses and cycles through the solid plant material.',
    energy: 'Continuous heating',
    temperature: 'Hot solvent cycling',
    usefulWhen:
      'Repeated extraction of heat-stable material with a chosen solvent is appropriate.',
    watch:
      'Continuous heat makes the method unsuitable for some thermolabile constituents.',
  },
  {
    id: 'ultrasound',
    label: 'Ultrasound-assisted',
    mechanism:
      'Ultrasonic energy promotes mixing, cavitation and solvent contact with the plant matrix.',
    energy: 'Acoustic energy',
    temperature: 'Can operate at controlled temperatures',
    usefulWhen:
      'Enhanced solvent penetration and mass transfer are desirable.',
    watch:
      'Performance depends on power, time, temperature, solvent and matrix.',
  },
  {
    id: 'microwave',
    label: 'Microwave-assisted',
    mechanism:
      'Microwave energy rapidly interacts with suitable solvent and sample components, producing heating and structural disruption.',
    energy: 'Microwave energy',
    temperature: 'Rapid internal heating can occur',
    usefulWhen:
      'Fast energy transfer and shortened extraction time are useful for a compatible sample-solvent system.',
    watch:
      'Solvent properties, pressure, temperature and target stability must be controlled.',
  },
]

function ExtractionMethodCard({ method, compact = false }) {
  return (
    <article
      className={`extraction-method-card ${
        compact ? 'extraction-method-card--compact' : ''
      }`}
    >
      <p className="extraction-method-card__label">
        Method
      </p>

      <h3>{method.label}</h3>

      <p className="extraction-method-card__mechanism">
        {method.mechanism}
      </p>

      <div className="extraction-method-card__facts">
        <div>
          <span>Energy / contact</span>
          <strong>{method.energy}</strong>
        </div>

        <div>
          <span>Thermal context</span>
          <strong>{method.temperature}</strong>
        </div>

        <div>
          <span>Useful when</span>
          <strong>{method.usefulWhen}</strong>
        </div>

        <div>
          <span>Watch for</span>
          <strong>{method.watch}</strong>
        </div>
      </div>
    </article>
  )
}

function ExtractionMethodsSlide({ slide }) {
  const [activeId, setActiveId] = useState(extractionMethods[0].id)

  const active =
    extractionMethods.find((method) => method.id === activeId) ??
    extractionMethods[0]

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">Same goal, different contact strategy</p>

          <h2>Different extraction methods change how contact happens</h2>

          <p>
            Extraction methods do not create a different chemical target.
            They change how solvent, plant material, heat, mixing and energy
            interact during mass transfer.
          </p>
        </div>

        <div className="extraction-method-layout">
          <div
            className="extraction-method-tabs"
            role="list"
            aria-label="Extraction methods"
          >
            {extractionMethods.map((method) => (
              <button
                type="button"
                key={method.id}
                className={
                  method.id === active.id ? 'is-selected' : ''
                }
                onClick={() => setActiveId(method.id)}
                aria-pressed={method.id === active.id}
              >
                {method.label}
              </button>
            ))}
          </div>

          <ExtractionMethodCard method={active} />
        </div>

        <div className="extraction-method-principle">
          <strong>There is no universally best method.</strong>

          <span>
            Method selection depends on target stability, matrix,
            solvent compatibility, scale, time and downstream needs.
          </span>
        </div>
      </SlideChrome>

      <SlideChrome slide={slide} className="print-only">
        <div className="section-heading">
          <p className="eyebrow">Same goal, different contact strategy</p>

          <h2>Different extraction methods change how contact happens</h2>
        </div>

        <div className="extraction-method-print-grid">
          {extractionMethods.map((method) => (
            <ExtractionMethodCard
              key={method.id}
              method={method}
              compact
            />
          ))}
        </div>

        <div className="extraction-method-principle">
          <strong>No method is universally best.</strong>

          <span>
            Selection must match the target, matrix and process goal.
          </span>
        </div>
      </SlideChrome>
    </>
  )
}


/* ---------------------------------------------------------
   Slide 14
   --------------------------------------------------------- */

const downstreamSteps = [
  {
    number: '01',
    title: 'Crude extract',
    action:
      'Target compound is mixed with many other extracted constituents.',
    changes:
      'Extraction has occurred, but purity may still be low.',
  },
  {
    number: '02',
    title: 'Clarify',
    action:
      'Filter or centrifuge when needed to remove suspended particles.',
    changes:
      'Physical solids are removed from the liquid.',
  },
  {
    number: '03',
    title: 'Concentrate',
    action:
      'Remove some solvent by an appropriate evaporation or concentration step.',
    changes:
      'Solutes become more concentrated, but this alone does not guarantee greater purity.',
  },
  {
    number: '04',
    title: 'Fractionate',
    action:
      'Use partitioning or another separation strategy to divide the crude mixture into simpler fractions.',
    changes:
      'Groups of compounds are separated according to differing chemical behavior.',
  },
  {
    number: '05',
    title: 'Purify',
    action:
      'Use chromatography or another suitable separation technique to further isolate the target.',
    changes:
      'The target becomes more enriched relative to interfering compounds.',
  },
]

function CrudeToPurifiedSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Extraction is not the endpoint</p>

        <h2>The first liquid is still a crude mixture</h2>

        <p>
          After extraction, the target is usually accompanied by other
          soluble compounds. Downstream steps progressively simplify that
          mixture until the required enrichment or purity is reached.
        </p>
      </div>

      <div className="downstream-step-grid">
        {downstreamSteps.map((step) => (
          <article key={step.number}>
            <div className="downstream-step-grid__heading">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
            </div>

            <p>{step.action}</p>

            <strong>{step.changes}</strong>
          </article>
        ))}
      </div>

      <div className="downstream-distinction-grid">
        <div>
          <span>Concentration asks</span>
          <strong>
            How much material is present per amount of solvent or sample?
          </strong>
        </div>

        <div>
          <span>Purification asks</span>
          <strong>
            How much of the material is the target rather than contaminants?
          </strong>
        </div>
      </div>

      <div className="downstream-chain">
        <span>Biological matrix</span>
        <strong>-&gt;</strong>
        <span>crude extract</span>
        <strong>-&gt;</strong>
        <span>fractions</span>
        <strong>-&gt;</strong>
        <span className="downstream-chain__target">
          enriched / purified target
        </span>
      </div>
    </SlideChrome>
  )
}


export function ExtractionSlideRenderer({ slide }) {
  if (slide.id === 'extraction-principle') {
    return <ExtractionPrincipleSlide slide={slide} />
  }

  if (slide.id === 'solvent-polarity') {
    return <SolventPolaritySlide slide={slide} />
  }

  if (slide.id === 'extraction-methods') {
    return <ExtractionMethodsSlide slide={slide} />
  }

  if (slide.id === 'crude-to-purified') {
    return <CrudeToPurifiedSlide slide={slide} />
  }

  return null
}
