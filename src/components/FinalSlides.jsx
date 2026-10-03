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
   Slide 15
   --------------------------------------------------------- */

const measurementQuestions = [
  {
    id: 'yield',
    label: 'Extraction yield',
    question: 'How much total extract did I recover?',
    example:
      'Mass of dried crude extract relative to the amount of starting plant material.',
    tells:
      'Overall material recovered by the extraction process.',
    doesNotTell:
      'It does not tell us how much of that extract is the target metabolite.',
    formula: 'extract mass / starting material mass',
  },
  {
    id: 'concentration',
    label: 'Target concentration',
    question: 'How much target is present in a defined amount of sample?',
    example:
      'Milligrams of resveratrol per litre of culture, or per gram of dry sample.',
    tells:
      'Amount of the specific target relative to a defined volume or mass.',
    doesNotTell:
      'A concentrated sample can still contain substantial amounts of other compounds.',
    formula: 'target amount / sample volume or mass',
  },
  {
    id: 'purity',
    label: 'Purity',
    question: 'What fraction of this material is actually the target?',
    example:
      'Target compound relative to all material present in the recovered fraction.',
    tells:
      'How enriched the target is relative to other components.',
    doesNotTell:
      'High purity does not automatically mean that most of the original target was recovered.',
    formula: 'target amount / total recovered material',
  },
  {
    id: 'recovery',
    label: 'Recovery',
    question: 'How much of the available target survived the process?',
    example:
      'Target recovered at the end compared with target present before the recovery process.',
    tells:
      'How much target was retained through the chosen downstream workflow.',
    doesNotTell:
      'Recovery and purity are independent: a highly pure fraction can still have poor recovery.',
    formula: 'target recovered / target initially available',
  },
]

function MeasurementQuestionCard({ item, compact = false }) {
  return (
    <article
      className={`measurement-question-card ${
        compact ? 'measurement-question-card--compact' : ''
      }`}
    >
      <p className="measurement-question-card__label">
        {item.label}
      </p>

      <h3>{item.question}</h3>

      <p className="measurement-question-card__example">
        {item.example}
      </p>

      <div className="measurement-question-card__facts">
        <div>
          <span>It tells us</span>
          <strong>{item.tells}</strong>
        </div>

        <div>
          <span>It does not tell us</span>
          <strong>{item.doesNotTell}</strong>
        </div>
      </div>

      <div className="measurement-question-card__formula">
        <span>Conceptual ratio</span>
        <strong>{item.formula}</strong>
      </div>
    </article>
  )
}

function YieldConcentrationPuritySlide({ slide }) {
  const [activeId, setActiveId] = useState(measurementQuestions[0].id)

  const active =
    measurementQuestions.find((item) => item.id === activeId) ??
    measurementQuestions[0]

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">Do not collapse different measurements</p>

          <h2>Yield, concentration, purity and recovery are different questions</h2>

          <p>
            A successful recovery process cannot be described with one number.
            We need to state exactly what was measured and what that quantity
            means.
          </p>
        </div>

        <div className="measurement-question-tabs">
          {measurementQuestions.map((item) => (
            <button
              type="button"
              key={item.id}
              className={
                item.id === active.id ? 'is-selected' : ''
              }
              onClick={() => setActiveId(item.id)}
              aria-pressed={item.id === active.id}
            >
              {item.label}
            </button>
          ))}
        </div>

        <MeasurementQuestionCard item={active} />

        <div className="measurement-distinction">
          <strong>
            More crude extract does not necessarily mean more target.
          </strong>

          <span>
            Quantifying a specific metabolite usually requires a selective
            analytical measurement rather than simply weighing the extract.
          </span>
        </div>
      </SlideChrome>

      <SlideChrome slide={slide} className="print-only">
        <div className="section-heading">
          <p className="eyebrow">Different measurements</p>

          <h2>Yield, concentration, purity and recovery are different questions</h2>
        </div>

        <div className="measurement-print-grid">
          {measurementQuestions.map((item) => (
            <MeasurementQuestionCard
              key={item.id}
              item={item}
              compact
            />
          ))}
        </div>
      </SlideChrome>
    </>
  )
}


/* ---------------------------------------------------------
   Slide 16
   --------------------------------------------------------- */

const resveratrolWorkflow = [
  {
    number: '01',
    phase: 'Biological platform',
    title: 'Vitis vinifera cell suspension',
    text:
      'Cultured grape cells provide the biological system that synthesizes resveratrol.',
  },
  {
    number: '02',
    phase: 'Production enhancement',
    title: 'Elicitation',
    text:
      'Jasmonic acid and beta-glucan were among the treatments used to stimulate resveratrol production.',
  },
  {
    number: '03',
    phase: 'Capture during production',
    title: 'XAD-7 adsorption',
    text:
      'Amberlite XAD-7 resin captured secreted resveratrol from the culture environment during the process.',
  },
  {
    number: '04',
    phase: 'Recovery from resin',
    title: 'Methanol extraction',
    text:
      'Separated XAD-7 beads were extracted with methanol to move adsorbed stilbenes into a liquid analytical sample.',
  },
  {
    number: '05',
    phase: 'Measurement',
    title: 'HPLC determination',
    text:
      'The recovered stilbenes were separated chromatographically and resveratrol was quantified against analytical standards.',
  },
]

function ResveratrolCaseSlide({ slide }) {
  return (
    <SlideChrome slide={slide}>
      <div className="section-heading">
        <p className="eyebrow">Integrated published case</p>

        <h2>Resveratrol: production to measurement</h2>

        <p>
          A grape cell-culture study shows how biological production,
          elicitation, in-situ capture, extraction and analytical measurement
          can connect within one experimental workflow.
        </p>
      </div>

      <div className="resveratrol-workflow">
        {resveratrolWorkflow.map((step, index) => (
          <article key={step.number}>
            <div className="resveratrol-workflow__number">
              {step.number}
            </div>

            <div className="resveratrol-workflow__content">
              <span>{step.phase}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>

            {index < resveratrolWorkflow.length - 1 ? (
              <strong
                className="resveratrol-workflow__arrow"
                aria-hidden="true"
              >
                -&gt;
              </strong>
            ) : null}
          </article>
        ))}
      </div>

      <div className="resveratrol-result-grid">
        <div>
          <span>Reported high-production condition</span>

          <strong>approximately 2400 mg/L resveratrol</strong>

          <p>
            Reported at day 10 for the combined treatment with 200 g/L XAD-7,
            10 micromolar jasmonic acid and beta-glucan.
          </p>
        </div>

        <div>
          <span>What this case demonstrates</span>

          <strong>
            Production enhancement and product capture can be designed
            together.
          </strong>

          <p>
            Removing secreted product from the culture environment can become
            part of the production strategy rather than a completely separate
            final operation.
          </p>
        </div>
      </div>

      <div className="resveratrol-boundary-note">
        <strong>Scope boundary:</strong>

        <span>
          This study demonstrates elicitation, in-situ adsorption, recovery
          from the resin and HPLC measurement. It should not be presented as
          a complete industrial purification train.
        </span>
      </div>
    </SlideChrome>
  )
}


/* ---------------------------------------------------------
   Slide 17
   --------------------------------------------------------- */

const recoveryChallengeStages = [
  {
    id: 'preparation',
    stage: 'Prepare',
    prompt:
      'The target is heat-sensitive and light-sensitive. What preparation logic is strongest?',
    options: [
      {
        id: 'prep-a',
        label:
          'Protect from light, limit unnecessary heat and process the material promptly.',
        correct: true,
        rationale:
          'Preparation should preserve the target before trying to extract it.',
      },
      {
        id: 'prep-b',
        label:
          'Use prolonged high-temperature treatment regardless of target stability.',
        correct: false,
        rationale:
          'A heat-sensitive target creates a reason to avoid unnecessary thermal exposure.',
      },
      {
        id: 'prep-c',
        label:
          'Ignore sample state because extraction will correct any earlier degradation.',
        correct: false,
        rationale:
          'Extraction cannot recover molecules that were already chemically degraded.',
      },
    ],
  },
  {
    id: 'solvent',
    stage: 'Choose solvent',
    prompt:
      'The target is a moderately polar phenolic. What is the best starting reasoning?',
    options: [
      {
        id: 'solvent-a',
        label:
          'Select a solvent system with polarity compatible with the target and matrix.',
        correct: true,
        rationale:
          'Solvent selection begins with target chemistry, matrix chemistry and process constraints.',
      },
      {
        id: 'solvent-b',
        label:
          'Always use the most nonpolar solvent because it extracts fewer compounds.',
        correct: false,
        rationale:
          'Selectivity is useful only if the target itself can enter the chosen solvent.',
      },
      {
        id: 'solvent-c',
        label:
          'Use the same solvent for every secondary metabolite.',
        correct: false,
        rationale:
          'Different metabolites have different chemical properties and solubility behavior.',
      },
    ],
  },
  {
    id: 'method',
    stage: 'Extract',
    prompt:
      'How should an extraction method be selected for this heat-sensitive target?',
    options: [
      {
        id: 'method-a',
        label:
          'Choose a method that provides sufficient contact while controlling temperature and exposure time.',
        correct: true,
        rationale:
          'Mass transfer must be balanced against target stability and process needs.',
      },
      {
        id: 'method-b',
        label:
          'Choose the method with the highest temperature because hotter extraction is always better.',
        correct: false,
        rationale:
          'More heat can accelerate transfer but may also damage thermolabile compounds.',
      },
      {
        id: 'method-c',
        label:
          'Method does not matter as long as a solvent is present.',
        correct: false,
        rationale:
          'Contact, mixing, energy, time and temperature all affect extraction behavior.',
      },
    ],
  },
  {
    id: 'measurement',
    stage: 'Measure',
    prompt:
      'You need the amount of the specific phenolic target. What should the final measurement distinguish?',
    options: [
      {
        id: 'measure-a',
        label:
          'Specific target concentration from total crude-extract mass.',
        correct: true,
        rationale:
          'Crude-extract yield and target concentration answer different questions.',
      },
      {
        id: 'measure-b',
        label:
          'Assume every milligram of dried extract is the target compound.',
        correct: false,
        rationale:
          'A crude extract usually contains many co-extracted substances.',
      },
      {
        id: 'measure-c',
        label:
          'Report only solvent volume and call it recovery.',
        correct: false,
        rationale:
          'Recovery requires information about the amount of target retained through the process.',
      },
    ],
  },
]

function ChallengeStage({
  challenge,
  selectedId,
  onSelect,
  showFeedback,
}) {
  return (
    <div className="recovery-challenge-stage">
      <p className="recovery-challenge-stage__label">
        {challenge.stage}
      </p>

      <h3>{challenge.prompt}</h3>

      <div className="recovery-challenge-options">
        {challenge.options.map((option) => {
          const selected = selectedId === option.id

          return (
            <button
              type="button"
              key={option.id}
              className={selected ? 'is-selected' : ''}
              onClick={() => onSelect(option.id)}
              aria-pressed={selected}
            >
              <span>{option.label}</span>
            </button>
          )
        })}
      </div>

      {showFeedback && selectedId ? (
        <div className="recovery-challenge-feedback">
          {challenge.options
            .filter((option) => option.id === selectedId)
            .map((option) => (
              <div key={option.id}>
                <strong>
                  {option.correct
                    ? 'Reasoning fits the stated constraints.'
                    : 'Reconsider this choice.'}
                </strong>

                <p>{option.rationale}</p>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  )
}

function RecoveryChallengeSlide({ slide }) {
  const [stageIndex, setStageIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const challenge = recoveryChallengeStages[stageIndex]
  const selectedId = answers[challenge.id] ?? null

  const completedCount = recoveryChallengeStages.filter(
    (stage) => answers[stage.id],
  ).length

  const selectAnswer = (optionId) => {
    setAnswers((current) => ({
      ...current,
      [challenge.id]: optionId,
    }))
  }

  return (
    <>
      <SlideChrome slide={slide} className="screen-only-content">
        <div className="section-heading">
          <p className="eyebrow">Synthesis challenge</p>

          <h2>Design the recovery strategy</h2>

          <p>
            Scenario: a valuable intracellular phenolic is present in plant
            tissue. It is moderately polar, heat-sensitive and light-sensitive.
            Your goal is to produce a reliable analytical sample.
          </p>
        </div>

        <div className="recovery-challenge-progress">
          {recoveryChallengeStages.map((stage, index) => (
            <button
              type="button"
              key={stage.id}
              className={
                index === stageIndex ? 'is-selected' : ''
              }
              onClick={() => setStageIndex(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{stage.stage}</strong>
            </button>
          ))}
        </div>

        <ChallengeStage
          challenge={challenge}
          selectedId={selectedId}
          onSelect={selectAnswer}
          showFeedback
        />

        <div className="recovery-challenge-summary">
          <span>
            Decisions completed: {completedCount} / {recoveryChallengeStages.length}
          </span>

          <strong>
            The goal is not to memorize one universal protocol. It is to
            connect target chemistry and stability to each downstream decision.
          </strong>
        </div>
      </SlideChrome>

      <SlideChrome slide={slide} className="print-only">
        <div className="section-heading">
          <p className="eyebrow">Synthesis challenge</p>

          <h2>Design the recovery strategy</h2>

          <p>
            Heat-sensitive, light-sensitive, moderately polar intracellular
            phenolic from plant tissue.
          </p>
        </div>

        <div className="recovery-challenge-print-grid">
          {recoveryChallengeStages.map((challengeItem) => {
            const recommended =
              challengeItem.options.find((option) => option.correct)

            return (
              <article key={challengeItem.id}>
                <span>{challengeItem.stage}</span>
                <h3>{challengeItem.prompt}</h3>
                <strong>{recommended.label}</strong>
                <p>{recommended.rationale}</p>
              </article>
            )
          })}
        </div>

        <div className="recovery-challenge-summary">
          <strong>
            Recovery design follows constraints; it does not begin with a
            universally best solvent or extraction device.
          </strong>
        </div>
      </SlideChrome>
    </>
  )
}


export function FinalSlideRenderer({ slide }) {
  if (slide.id === 'yield-concentration-purity') {
    return <YieldConcentrationPuritySlide slide={slide} />
  }

  if (slide.id === 'resveratrol-case') {
    return <ResveratrolCaseSlide slide={slide} />
  }

  if (slide.id === 'recovery-challenge') {
    return <RecoveryChallengeSlide slide={slide} />
  }

  return null
}
