import { useState } from 'react'
import { CHAPTER_BY_ID } from '../data/presentation.js'
import { PlantGlyph } from './PlantGlyphs.jsx'

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

function OpeningProblemSlide({ slide }) {
  return (
    <SlideChrome slide={slide} className="slide-card--hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            From plant to product
          </p>

          <h1>The plant made it. Now what?</h1>

          <p className="hero-question">
            Production is only the beginning.
          </p>

          <p className="hero-hint">
            The target molecule is still embedded in complex biological
            material. We now have to preserve it, release it, separate it
            from everything else and determine how much useful product
            we recovered.
          </p>
        </div>

        <div
          className="hero-map metabolite-hero-map"
          aria-hidden="true"
        >
          <div className="hero-map__core metabolite-hero-core">
            <PlantGlyph type="plant" size={108} />
            <span className="metabolite-hero-core__label">
              produced
            </span>
          </div>

          <div className="metabolite-process-step metabolite-process-step--one">
            <span>1</span>
            <strong>Enhance</strong>
          </div>

          <div className="metabolite-process-step metabolite-process-step--two">
            <span>2</span>
            <strong>Harvest</strong>
          </div>

          <div className="metabolite-process-step metabolite-process-step--three">
            <span>3</span>
            <strong>Prepare</strong>
          </div>

          <div className="metabolite-process-step metabolite-process-step--four">
            <span>4</span>
            <strong>Extract</strong>
          </div>

          <div className="metabolite-process-step metabolite-process-step--five">
            <span>5</span>
            <strong>Purify</strong>
          </div>

          <div className="metabolite-process-step metabolite-process-step--six">
            <span>6</span>
            <strong>Measure</strong>
          </div>
        </div>
      </div>
    </SlideChrome>
  )
}

function DefinitionTermCard({
  kind,
  glyph,
  label,
  title,
  points,
}) {
  return (
    <div className={`definition-card definition-card--${kind}`}>
      <div className="definition-card__icon">
        <PlantGlyph type={glyph} size={68} />
      </div>

      <p className="definition-card__label">{label}</p>
      <h3>{title}</h3>

      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

function MetaboliteDefinitionSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">
          Terminology changed as understanding improved
        </p>

        <h2>Secondary or specialized metabolite?</h2>

        <p>
          These terms largely refer to the same broad chemical space.
          The newer wording emphasizes that these compounds often perform
          specific biological and ecological functions.
        </p>
      </div>

      <div className="metabolite-definition-grid">
        <DefinitionTermCard
          kind="engineering"
          glyph="plant"
          label="Traditional course term"
          title="Secondary metabolite"
          points={[
            'Historically distinguished from primary metabolism.',
            'Still widely used in teaching, textbooks and biotechnology.',
          ]}
        />

        <div
          className="metabolite-definition-bridge"
          aria-label="Terminology transition"
        >
          <span>historically called</span>
          <strong>→</strong>
          <span>in current literature</span>
        </div>

        <DefinitionTermCard
          kind="bio"
          glyph="leaf"
          label="Current scientific term"
          title="Specialized metabolite"
          points={[
            'Often varies among species, tissues, stages and environments.',
            'Can support defense, signaling, stress adaptation and interactions.',
          ]}
        />
      </div>

      <div className="core-definition metabolite-definition-core">
        <span>Key correction</span>

        <strong>
          Secondary does not mean unimportant. These metabolites can make
          major contributions to plant fitness and survival.
        </strong>
      </div>

      <p className="metabolite-course-language">
        In this lesson we retain <strong>secondary metabolite</strong> because
        it matches the course terminology, while also introducing
        <strong> specialized metabolite</strong>.
      </p>
    </SlideChrome>
  )
}

const metaboliteFamilies = [
  {
    id: 'phenylpropanoids',
    shortLabel: 'Phenylpropanoids',
    title: 'Phenylpropanoids and related phenolics',
    summary:
      'A large biosynthetic family derived largely from phenylalanine through the shikimate-linked phenylpropanoid pathway.',
    examples: 'Flavonoids, anthocyanins, lignin-related compounds',
    roles: 'Pigmentation, antioxidation, signaling and defense',

    fingerprint: {
      label: 'C6-C3 framework',
      definingChemistry: 'Phenyl ring + three-carbon side chain',
      biosyntheticCue: 'Phenylalanine',
      pathwayCue: 'PAL -> C4H -> 4CL',
      molecules: [
        {
          name: 'Cinnamic acid',
          cid: '444539',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/444539',
        },
        {
          name: 'p-Coumaric acid',
          cid: '637542',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/637542',
        },
        {
          name: 'Eugenol',
          cid: '3314',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/3314',
        },
      ],
    },
  },

  {
    id: 'terpenes',
    shortLabel: 'Terpenes',
    title: 'Terpenes and terpenoids',
    summary:
      'A chemically diverse family assembled from five-carbon isoprenoid building blocks.',
    examples: 'Monoterpenes, sesquiterpenes, diterpenes, triterpenes',
    roles: 'Defense, volatile signaling, attraction and stress responses',

    fingerprint: {
      label: 'C5 building blocks',
      definingChemistry: 'IPP + DMAPP',
      biosyntheticCue: 'MVA and MEP pathways',
      pathwayCue: 'C10 / C15 / C20 / C30 / C40',
      molecules: [
        {
          name: 'alpha-Pinene',
          cid: '6654',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/6654',
        },
        {
          name: 'Geraniol',
          cid: '637566',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/637566',
        },
        {
          name: 'beta-Caryophyllene',
          cid: '5281515',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/5281515',
        },
      ],
    },
  },

  {
    id: 'alkaloids',
    shortLabel: 'Alkaloids',
    title: 'Alkaloids',
    summary:
      'A broad group of nitrogen-containing specialized metabolites produced through several distinct biosynthetic routes.',
    examples: 'Nicotine, caffeine, morphine, berberine',
    roles: 'Defense, ecological interactions and bioactive natural products',

    fingerprint: {
      label: 'Nitrogen-containing',
      definingChemistry: 'Nitrogen is a characteristic feature',
      biosyntheticCue: 'Often amino-acid derived',
      pathwayCue: 'Indole / tropane / purine / isoquinoline',
      molecules: [
        {
          name: 'Nicotine',
          cid: '89594',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/89594',
        },
        {
          name: 'Caffeine',
          cid: '2519',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/2519',
        },
        {
          name: 'Berberine',
          cid: '2353',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/2353',
        },
      ],
    },
  },

  {
    id: 'other',
    shortLabel: 'Other',
    title: 'Other specialized metabolites',
    summary:
      'Plant specialized metabolism extends well beyond three headline families and contains many additional compound groups.',
    examples: 'Glucosinolates, benzoxazinoids, cyanogenic compounds and peptides',
    roles: 'Defense, signaling, chemical interaction and environmental adaptation',

    fingerprint: {
      label: 'Heterogeneous group',
      definingChemistry: 'No single shared chemical scaffold',
      biosyntheticCue: 'Multiple biosynthetic origins',
      pathwayCue: 'Glucosinolates / cyanogens / benzoxazinoids / oxylipins',
      molecules: [
        {
          name: 'Sinigrin',
          cid: '6911854',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/6911854',
        },
        {
          name: 'Linamarin',
          cid: '11128',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/11128',
        },
        {
          name: 'DIMBOA',
          cid: '2358',
          url: 'https://pubchem.ncbi.nlm.nih.gov/compound/2358',
        },
      ],
    },
  },
]


function FamilyFingerprint({ family }) {
  const fingerprint = family.fingerprint

  return (
    <aside
      className="family-fingerprint"
      aria-label={`${family.shortLabel} chemical fingerprint`}
    >
      <div className="family-fingerprint__header">
        <div>
          <p>Class fingerprint</p>
          <h3>{family.shortLabel}</h3>
        </div>

        <span>{fingerprint.label}</span>
      </div>

      <div className="family-fingerprint__facts">
        <div>
          <span>Defining chemistry</span>
          <strong>{fingerprint.definingChemistry}</strong>
        </div>

        <div>
          <span>Biosynthetic cue</span>
          <strong>{fingerprint.biosyntheticCue}</strong>
        </div>
      </div>

      <div className="family-fingerprint__pathway">
        <span>Structural / pathway cue</span>
        <strong>{fingerprint.pathwayCue}</strong>
      </div>

      <div className="family-fingerprint__molecules">
        <span>Representative molecules · PubChem</span>

        <div>
          {fingerprint.molecules.map((molecule) => (
            <a
              key={molecule.cid}
              href={molecule.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${molecule.name}, PubChem CID ${molecule.cid}`}
            >
              <strong>{molecule.name}</strong>
              <small>CID {molecule.cid} ↗</small>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}


function MetaboliteFamiliesSlide({ slide }) {
  const [activeId, setActiveId] = useState(metaboliteFamilies[0].id)

  const active =
    metaboliteFamilies.find((family) => family.id === activeId) ??
    metaboliteFamilies[0]

  return (
    <SlideChrome slide={slide}>
      <div className="metabolite-family-topline">
        <div className="section-heading">
          <p className="eyebrow">Chemical diversity</p>

          <h2>Many molecules, several major chemical families</h2>

          <p>
            Plants make an enormous variety of specialized metabolites.
            Grouping them by chemical family gives us a useful map before
            we start thinking about production and recovery.
          </p>
        </div>

        <FamilyFingerprint family={active} />
      </div>

      <div className="metabolite-family-layout">
        <div
          className="metabolite-family-tabs"
          role="list"
          aria-label="Major specialized metabolite families"
        >
          {metaboliteFamilies.map((family) => (
            <button
              type="button"
              key={family.id}
              className={`metabolite-family-tab ${
                family.id === active.id ? 'is-selected' : ''
              }`}
              onClick={() => setActiveId(family.id)}
              aria-pressed={family.id === active.id}
            >
              {family.shortLabel}
            </button>
          ))}
        </div>

        <article className="metabolite-family-inspector">
          <p className="metabolite-family-inspector__label">
            Selected chemical family
          </p>

          <h3>{active.title}</h3>

          <p className="metabolite-family-summary">
            {active.summary}
          </p>

          <div className="metabolite-family-facts">
            <div>
              <span>Examples</span>
              <strong>{active.examples}</strong>
            </div>

            <div>
              <span>Common biological roles</span>
              <strong>{active.roles}</strong>
            </div>
          </div>
        </article>
      </div>

      <div className="metabolite-family-caution">
        <strong>Do not overgeneralize.</strong>

        <span>
          One chemical family can contain compounds with very different
          functions, locations and recovery behavior.
        </span>
      </div>
    </SlideChrome>
  )
}

const matrixComponents = [
  {
    id: 'water',
    label: 'Water',
    kind: 'matrix',
  },
  {
    id: 'carbohydrates',
    label: 'Carbohydrates',
    kind: 'matrix',
  },
  {
    id: 'proteins',
    label: 'Proteins',
    kind: 'matrix',
  },
  {
    id: 'pigments',
    label: 'Pigments',
    kind: 'matrix',
  },
  {
    id: 'lipids',
    label: 'Lipids',
    kind: 'matrix',
  },
  {
    id: 'cell-wall',
    label: 'Cell-wall material',
    kind: 'matrix',
  },
  {
    id: 'other-metabolites',
    label: 'Other metabolites',
    kind: 'matrix',
  },
  {
    id: 'target',
    label: 'TARGET',
    kind: 'target',
  },
]

function BiologicalMatrixSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">The recovery problem</p>

        <h2>A plant is not a bottle of pure compound</h2>

        <p>
          The molecule we want is part of a complex biological matrix.
          Recovery begins with separating one chemical target from
          everything surrounding it.
        </p>
      </div>

      <div className="biological-matrix-layout">
        <div className="biological-matrix-visual">
          <div className="biological-matrix-visual__label">
            Plant tissue or culture
          </div>

          <div className="biological-matrix-cloud">
            {matrixComponents.map((component) => (
              <span
                key={component.id}
                className={`biological-matrix-chip biological-matrix-chip--${component.kind}`}
              >
                {component.label}
              </span>
            ))}
          </div>
        </div>

        <div className="biological-matrix-lessons">
          <article>
            <span>01</span>
            <div>
              <strong>The target may be a small fraction</strong>
              <p>
                Valuable does not mean abundant. The desired metabolite can
                be surrounded by much larger amounts of other material.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <strong>Everything else can interfere</strong>
              <p>
                Pigments, lipids, proteins and other metabolites may enter
                the extract alongside the target.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <strong>Recovery is therefore selective</strong>
              <p>
                We must release the target, move it into a recoverable phase
                and progressively separate it from unwanted material.
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="biological-matrix-takeaway">
        <span>Starting material</span>
        <strong>complex biological matrix</strong>
        <span aria-hidden="true">→</span>
        <span>Goal</span>
        <strong>recoverable target molecule</strong>
      </div>
    </SlideChrome>
  )
}

export function OpeningSlideRenderer({ slide }) {
  if (slide.id === 'opening-problem') {
    return <OpeningProblemSlide slide={slide} />
  }

  if (slide.id === 'metabolite-definition') {
    return <MetaboliteDefinitionSlide slide={slide} />
  }

  if (slide.id === 'metabolite-families') {
    return <MetaboliteFamiliesSlide slide={slide} />
  }

  if (slide.id === 'biological-matrix') {
    return <BiologicalMatrixSlide slide={slide} />
  }

  return null
}
