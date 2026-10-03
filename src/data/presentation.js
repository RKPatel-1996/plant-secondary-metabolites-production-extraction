export const PRESENTATION = {
  id: 'secondary-metabolites-production-extraction',
  title: 'Secondary Metabolite Production and Extraction from Plants',
  shortTitle: 'Secondary Metabolites',
  repoName: 'plant-secondary-metabolites-production-extraction',
  basePath: '/plant-secondary-metabolites-production-extraction/',
  totalSlides: 17,
  mobileBreakpoint: 700,
  desktopMode: 'fixed-viewport',
  mobileMode: 'vertical-reading',
  printMode: 'a4-landscape',
  narrative: [
    'Produce',
    'Enhance',
    'Harvest',
    'Prepare',
    'Extract',
    'Purify',
    'Measure',
  ],
}

export const CHAPTERS = [
  {
    id: 'molecule-exists',
    number: 1,
    title: 'The molecule already exists',
    slideRange: [1, 4],
  },
  {
    id: 'increase-production',
    number: 2,
    title: 'Increase what the biological system produces',
    slideRange: [5, 8],
  },
  {
    id: 'recovery-begins',
    number: 3,
    title: 'Production ends; recovery begins',
    slideRange: [9, 10],
  },
  {
    id: 'extract-molecule',
    number: 4,
    title: 'Get the molecule out',
    slideRange: [11, 14],
  },
  {
    id: 'measure-product',
    number: 5,
    title: 'How much useful product did we obtain?',
    slideRange: [15, 17],
  },
]

export const CHAPTER_BY_ID = Object.fromEntries(
  CHAPTERS.map((chapter) => [chapter.id, chapter]),
)
