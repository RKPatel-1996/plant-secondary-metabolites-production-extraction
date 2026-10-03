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


const productionPlatforms = [
  {
    label: 'Whole plant',
    note: 'Metabolite accumulates within intact organs and tissues.',
  },
  {
    label: 'Organ or tissue',
    note: 'Leaves, roots, shoots or other selected material become the source.',
  },
  {
    label: 'Cell suspension',
    note: 'Cultured cells become the metabolite-producing biological system.',
  },
  {
    label: 'Hairy root',
    note: 'Fast-growing transformed roots can maintain root-type metabolism.',
  },
]


function ProductionPlatformBridgeSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Bridge from the previous lesson</p>

        <h2>The production platform is only the starting point</h2>

        <p>
          We already know that the biological production system may be an
          intact plant, an organ, cultured cells or roots. Now the question
          changes: how much target metabolite does that system actually
          accumulate, and how do we recover it?
        </p>
      </div>

      <div className="production-platform-grid">
        {productionPlatforms.map((platform) => (
          <article key={platform.label}>
            <span>Production system</span>
            <h3>{platform.label}</h3>
            <p>{platform.note}</p>
          </article>
        ))}
      </div>

      <div className="production-bridge-chain">
        <div>
          <span>Previous question</span>
          <strong>Where is production happening?</strong>
        </div>

        <span className="production-bridge-chain__arrow">
          →
        </span>

        <div>
          <span>New question</span>
          <strong>How much product accumulates?</strong>
        </div>

        <span className="production-bridge-chain__arrow">
          →
        </span>

        <div>
          <span>Then</span>
          <strong>How do we recover it?</strong>
        </div>
      </div>
    </SlideChrome>
  )
}


const accumulationFactors = [
  {
    number: '01',
    title: 'Genotype and species',
    text:
      'Different genetic backgrounds can contain different pathways, enzymes and capacities for metabolite accumulation.',
  },
  {
    number: '02',
    title: 'Tissue and developmental stage',
    text:
      'A compound may accumulate preferentially in a particular organ, tissue or stage of development.',
  },
  {
    number: '03',
    title: 'Environment and stress',
    text:
      'Light, temperature, water status, pathogens and other signals can change specialized metabolism.',
  },
  {
    number: '04',
    title: 'Culture conditions',
    text:
      'In vitro systems can respond to nutrients, hormones, aeration, growth phase and other cultivation conditions.',
  },
]


function AccumulationVariesSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Production is dynamic</p>

        <h2>Metabolite accumulation is variable</h2>

        <p>
          The presence of a biosynthetic pathway does not guarantee a fixed
          amount of product. Accumulation depends on the biological system
          and the conditions experienced by that system.
        </p>
      </div>

      <div className="accumulation-factor-grid">
        {accumulationFactors.map((factor) => (
          <article key={factor.number}>
            <span>{factor.number}</span>

            <div>
              <h3>{factor.title}</h3>
              <p>{factor.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="accumulation-equation">
        <span>Same target molecule</span>
        <strong>+</strong>
        <span>different biology or conditions</span>
        <strong>→</strong>
        <span className="accumulation-equation__result">
          different accumulation
        </span>
      </div>
    </SlideChrome>
  )
}


const elicitorTypes = [
  {
    title: 'Biotic signals',
    examples: 'Microbial components, fungal extracts and related cues',
    note: 'Can mimic biological challenge.',
  },
  {
    title: 'Chemical signals',
    examples: 'Methyl jasmonate, jasmonic acid and salicylic acid',
    note: 'Can activate stress and defense signaling networks.',
  },
  {
    title: 'Physical signals',
    examples: 'UV exposure, wounding and selected abiotic stresses',
    note: 'Can trigger stress-responsive metabolism.',
  },
]


function ElicitationSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Production enhancement</p>

        <h2>Elicitation: use a signal to redirect metabolism</h2>

        <p>
          An elicitor is a biological, chemical or physical signal used to
          stimulate cellular responses. In suitable systems, that response
          can increase the accumulation of a desired specialized metabolite.
        </p>
      </div>

      <div className="elicitation-flow">
        <div className="elicitation-flow__node">
          <span>1</span>
          <strong>Elicitor</strong>
          <p>Apply a defined signal.</p>
        </div>

        <span className="elicitation-flow__arrow">→</span>

        <div className="elicitation-flow__node">
          <span>2</span>
          <strong>Perception + signaling</strong>
          <p>The plant system senses and responds.</p>
        </div>

        <span className="elicitation-flow__arrow">→</span>

        <div className="elicitation-flow__node">
          <span>3</span>
          <strong>Pathway response</strong>
          <p>Gene expression and metabolic activity may change.</p>
        </div>

        <span className="elicitation-flow__arrow">→</span>

        <div className="elicitation-flow__node elicitation-flow__node--result">
          <span>4</span>
          <strong>Changed accumulation</strong>
          <p>The target metabolite may increase.</p>
        </div>
      </div>

      <div className="elicitor-type-grid">
        {elicitorTypes.map((type) => (
          <article key={type.title}>
            <h3>{type.title}</h3>
            <strong>{type.examples}</strong>
            <p>{type.note}</p>
          </article>
        ))}
      </div>

      <div className="elicitation-caution">
        <strong>Elicitation is not a guaranteed boost.</strong>
        <span>
          Response depends on species, culture type, elicitor, dose,
          exposure time and the target pathway.
        </span>
      </div>
    </SlideChrome>
  )
}


const elicitationEvidence = [
  {
    id: 'resveratrol',
    plant: 'Vitis vinifera',
    system: 'Cell suspension',
    treatment: 'Methyl jasmonate + UV-C',
    target: 'Resveratrol',
    fold: '64x',
    secondary: 'Viniferin: 1,343x',
    interpretation:
      'A strong example showing that an elicitation treatment can produce very large changes in specialized metabolite accumulation.',
  },
  {
    id: 'berberine',
    plant: 'Tinospora cordifolia',
    system: 'Cell culture',
    treatment: 'Elicitation treatment',
    target: 'Berberine',
    fold: '5.57x',
    secondary: null,
    interpretation:
      'The response is substantial, but much smaller than the Vitis example. Different systems produce different magnitudes of response.',
  },
  {
    id: 'atropine',
    plant: 'Hyoscyamus species',
    system: 'Hairy root culture',
    treatment: 'Elicitation treatment',
    target: 'Atropine',
    fold: '4x',
    secondary: null,
    interpretation:
      'Hairy-root systems can also respond to elicitation by changing alkaloid accumulation.',
  },
  {
    id: 'cajanus',
    plant: 'Cajanus cajan',
    system: 'Hairy root culture',
    treatment: 'Elicitation treatment',
    target: 'Cajaninstilbene acid',
    fold: '277x',
    secondary: null,
    interpretation:
      'Some combinations of biological system, pathway and elicitor can yield exceptionally large reported fold changes.',
  },
]


function EvidenceCard({ item, compact = false }) {
  return (
    <article
      className={`elicitation-evidence-card ${
        compact ? 'elicitation-evidence-card--compact' : ''
      }`}
    >
      <div className="elicitation-evidence-card__meta">
        <span>{item.plant}</span>
        <span>{item.system}</span>
      </div>

      <p className="elicitation-evidence-card__treatment">
        {item.treatment}
      </p>

      <div className="elicitation-evidence-card__result">
        <div>
          <span>Target</span>
          <strong>{item.target}</strong>
        </div>

        <div>
          <span>Reported change</span>
          <strong>{item.fold}</strong>
        </div>
      </div>

      {item.secondary ? (
        <p className="elicitation-evidence-card__secondary">
          {item.secondary}
        </p>
      ) : null}

      {!compact ? (
        <p className="elicitation-evidence-card__interpretation">
          {item.interpretation}
        </p>
      ) : null}
    </article>
  )
}


function ElicitationEvidenceSlide({ slide }) {
  const [activeId, setActiveId] = useState(elicitationEvidence[0].id)

  const active =
    elicitationEvidence.find((item) => item.id === activeId) ??
    elicitationEvidence[0]

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">Published examples</p>

          <h2>Does elicitation actually make a difference?</h2>

          <p>
            Yes, it can. Published plant-culture studies report substantial
            increases in target metabolites after elicitation, but the
            magnitude is highly system-dependent.
          </p>
        </div>

        <div className="elicitation-evidence-layout">
          <div
            className="elicitation-evidence-tabs"
            role="list"
            aria-label="Published elicitation examples"
          >
            {elicitationEvidence.map((item) => (
              <button
                type="button"
                key={item.id}
                className={
                  item.id === active.id ? 'is-selected' : ''
                }
                onClick={() => setActiveId(item.id)}
                aria-pressed={item.id === active.id}
              >
                <span>{item.plant}</span>
                <strong>{item.target}</strong>
                <em>{item.fold}</em>
              </button>
            ))}
          </div>

          <EvidenceCard item={active} />
        </div>

        <div className="elicitation-evidence-warning">
          <strong>Do not compare fold change as if all studies were identical.</strong>
          <span>
            Plant species, culture type, baseline abundance, treatment,
            timing and analytical endpoints differ between experiments.
          </span>
        </div>
      </SlideChrome>

      <SlideChrome slide={slide} className="print-only">
        <div className="section-heading">
          <p className="eyebrow">Published examples</p>

          <h2>Does elicitation actually make a difference?</h2>

          <p>
            Representative examples summarized from the elicitation
            literature.
          </p>
        </div>

        <div className="elicitation-evidence-print-grid">
          {elicitationEvidence.map((item) => (
            <EvidenceCard
              key={item.id}
              item={item}
              compact
            />
          ))}
        </div>

        <div className="elicitation-evidence-warning">
          <strong>Fold changes are study-specific.</strong>
          <span>
            They should not be treated as directly comparable performance
            values across different biological systems.
          </span>
        </div>
      </SlideChrome>
    </>
  )
}


export function ProductionSlideRenderer({ slide }) {
  if (slide.id === 'production-platform-bridge') {
    return <ProductionPlatformBridgeSlide slide={slide} />
  }

  if (slide.id === 'accumulation-varies') {
    return <AccumulationVariesSlide slide={slide} />
  }

  if (slide.id === 'elicitation') {
    return <ElicitationSlide slide={slide} />
  }

  if (slide.id === 'elicitation-evidence') {
    return <ElicitationEvidenceSlide slide={slide} />
  }

  return null
}
