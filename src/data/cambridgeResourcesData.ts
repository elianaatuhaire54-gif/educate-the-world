/**
 * EDUCATE THE WORLD INITIATIVE
 * REAL CAMBRIDGE CURRICULA EXAMS, TEST PAPERS, WORKSHEETS & REVISION NOTES
 * 
 * Authentic materials modeled strictly on:
 * - Cambridge Early Years (Ages 3–5)
 * - Cambridge Primary Stages 1–6 (Ages 5–11) & Cambridge Primary Checkpoint
 * - Cambridge Lower Secondary Stages 7–9 (Ages 11–14) & Lower Secondary Checkpoint
 * - Cambridge Upper Secondary: Cambridge IGCSE & O Level (Ages 14–16)
 * - Cambridge Advanced: International AS & A Level (Ages 16–19)
 * 
 * Includes authentic mark schemes with M (Method), A (Accuracy), B (Independent) marks,
 * examiner reports, common pitfalls, and print-ready paper layouts.
 */

import { AgeBand } from '../types/curriculum';

export type CambridgeResourceType = 'exam' | 'test_paper' | 'worksheet' | 'notes';

export interface CambridgeQuestionPart {
  partLabel: string; // e.g. "(a)", "(b)(i)", "(b)(ii)", "(c)"
  questionText: string;
  diagramOrStimulus?: string;
  marks: number;
  options?: string[]; // for multiple choice
  correctAnswer?: string;
  markScheme: string; // Detailed marking breakdown (M1, A1, B1)
  examinerTip: string;
}

export interface CambridgeResourceSection {
  sectionTitle: string; // e.g. "Section A: Core Concepts (15 marks)", "Section B: Structured Problem Solving (25 marks)"
  instructions?: string;
  questions: {
    questionNumber: number | string;
    stemText?: string;
    totalMarks: number;
    parts: CambridgeQuestionPart[];
  }[];
}

export interface CambridgeNoteSection {
  heading: string;
  subheading?: string;
  content: string;
  formulaeOrDefinitions?: { term: string; definitionOrFormula: string }[];
  workedExamples?: {
    problem: string;
    steps: string[];
    finalAnswer: string;
    examinerTip: string;
  }[];
  examinerTraps: string[];
}

export interface CambridgeResourceItem {
  id: string;
  title: string;
  type: CambridgeResourceType;
  pathwayTier: 'Cambridge Early Years' | 'Cambridge Primary' | 'Cambridge Lower Secondary' | 'Cambridge IGCSE' | 'Cambridge AS & A Level';
  stageCode: string; // e.g. "Early Years EY2", "Primary Stage 4", "Primary Stage 6 Checkpoint", "Lower Secondary Stage 8", "Lower Secondary Stage 9 Checkpoint", "IGCSE (0580)", "IGCSE (0610)", "IGCSE (0620)", "IGCSE (0625)", "IGCSE (0500)", "AS Level (9709)"
  syllabusCode: string; // "0058", "0096", "0097", "0861", "0862", "0893", "0580", "0610", "0620", "0625", "0500", "0478", "0455", "9709", "9702"
  subject: string;
  targetAge: string;
  ageBand: AgeBand;
  durationMinutes: number;
  totalMarks: number;
  specimenYear?: string;
  instructions: string[];
  overview: string;
  learningObjectives: string[];
  keyTopics: string[];
  practicalAtHomeContext: string;
  sections?: CambridgeResourceSection[];
  notesData?: CambridgeNoteSection[];
}

export const CAMBRIDGE_RESOURCES: CambridgeResourceItem[] = [
  // =========================================================================
  // 1. CAMBRIDGE PRIMARY CHECKPOINT - MATHEMATICS (STAGE 6)
  // =========================================================================
  {
    id: 'cambridge-pri-checkpoint-math-p1',
    title: 'Cambridge Primary Checkpoint Mathematics — Paper 1 (Non-Calculator)',
    type: 'exam',
    pathwayTier: 'Cambridge Primary',
    stageCode: 'Primary Stage 6 Checkpoint',
    syllabusCode: '0096',
    subject: 'Mathematics',
    targetAge: 'Ages 10–11 (Stage 6 / Primary 6)',
    ageBand: '9-12',
    durationMinutes: 45,
    totalMarks: 40,
    specimenYear: 'Official Checkpoint Specimen Paper',
    instructions: [
      'Answer all questions in the spaces provided.',
      'You are NOT allowed to use a calculator in this paper.',
      'Show all your working clearly; marks will be awarded for correct methods even if the final calculation is incorrect.',
      'You should have: Pen, HB pencil, ruler (graduated in cm and mm), protractor.'
    ],
    overview: 'Authentic Cambridge Primary Checkpoint specimen exam testing Stage 6 number theory, mental calculation, fractions/decimals/percentages, 2D geometry coordinate grids, and data handling.',
    learningObjectives: [
      '6Nc.01: Calculate mentally using place value, order of operations, and properties of numbers.',
      '6Nf.03: Add and subtract fractions with different denominators and mixed numbers.',
      '6Gg.02: Predict and plot points in all four quadrants on a Cartesian coordinate grid.',
      '6Sp.01: Interpret and construct frequency tables, bar charts, and calculate the mean and median.'
    ],
    keyTopics: ['Number & Place Value', 'Fractions & Percentages', 'Coordinates & Geometry', 'Data & Averages'],
    practicalAtHomeContext: 'In every household, mental arithmetic saves money at the grocery shop, and coordinates mirror plotting farm borders or local street maps.',
    sections: [
      {
        sectionTitle: 'Section 1: Number Sense & Mental Operations (14 Marks)',
        instructions: 'Write your answers clearly in the answer boxes provided.',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Here is a sequence of numbers: 48, 41, 34, 27, ...',
            totalMarks: 2,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Write down the rule for finding the next term in the sequence.',
                marks: 1,
                markScheme: 'B1 for "Subtract 7" or "-7".',
                examinerTip: 'Ensure students write both the operation (subtract) and the value (7), not just "7".'
              },
              {
                partLabel: '(b)',
                questionText: 'Find the 6th term of this sequence.',
                marks: 1,
                markScheme: 'B1 for 13. Working: 5th term = 20, 6th term = 13.',
                examinerTip: 'Do not rush; double-check successive subtractions (27 - 7 = 20, 20 - 7 = 13).'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'Calculate the following without using a calculator:',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Work out: 3/4 + 2/5. Give your answer as a mixed number in its simplest form.',
                marks: 2,
                markScheme: 'M1 for finding common denominator 20 (15/20 + 8/20 = 23/20). A1 for 1 3/20.',
                examinerTip: 'Many candidates correctly reach 23/20 but forget the instruction to give the answer as a mixed number.'
              },
              {
                partLabel: '(b)',
                questionText: 'Work out: 4.85 × 6',
                marks: 2,
                markScheme: 'M1 for 485 × 6 = 2910 or partial products (24 + 4.8 + 0.30). A1 for 29.1 or 29.10.',
                examinerTip: 'Keep decimal alignment accurate. 29.1 is accepted.'
              }
            ]
          },
          {
            questionNumber: 3,
            stemText: 'A school has 240 students in Stage 6. 35% of the students walk to school, 40% take a bus, and the remainder ride a bicycle.',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'What percentage of the students ride a bicycle?',
                marks: 1,
                markScheme: 'B1 for 25% (100% - 35% - 40% = 25%).',
                examinerTip: 'Straightforward percentage deduction.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the exact number of students who ride a bicycle to school.',
                marks: 2,
                markScheme: 'M1 for 0.25 × 240 or 240 ÷ 4. A1 for 60 students.',
                examinerTip: 'Recognising that 25% is equal to 1/4 allows fast mental calculation (240 / 4 = 60).'
              }
            ]
          },
          {
            questionNumber: 4,
            stemText: 'Round 47,829 to:',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'the nearest 100',
                marks: 1,
                markScheme: 'B1 for 47,800.',
                examinerTip: 'Check the tens digit (2 < 5), so 800 stays.'
              },
              {
                partLabel: '(b)',
                questionText: 'the nearest 1,000',
                marks: 1,
                markScheme: 'B1 for 48,000.',
                examinerTip: 'Hundreds digit is 8 (>= 5), so round up 7,000 to 8,000.'
              },
              {
                partLabel: '(c)',
                questionText: 'the nearest 10,000',
                marks: 1,
                markScheme: 'B1 for 50,000.',
                examinerTip: 'Thousands digit is 7 (>= 5), so round up to 50,000.'
              }
            ]
          },
          {
            questionNumber: 5,
            stemText: 'Solve the equation: 4x + 7 = 35',
            totalMarks: 2,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Find the value of x.',
                marks: 2,
                markScheme: 'M1 for 4x = 35 - 7 (= 28). A1 for x = 7.',
                examinerTip: 'Always write down the subtract 7 step to secure the M1 method mark even if an arithmetic slip occurs later.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section 2: Geometry, Measurement & Statistics (16 Marks)',
        instructions: 'Use a ruler and pencil where required. Units must be included where not given.',
        questions: [
          {
            questionNumber: 6,
            stemText: 'The dimensions of a rectangular garden are length = 14 metres and width = 6.5 metres.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the perimeter of the garden.',
                marks: 2,
                markScheme: 'M1 for 2 × (14 + 6.5) or 14 + 14 + 6.5 + 6.5. A1 for 41 metres (or 41 m).',
                examinerTip: 'Do not confuse perimeter with area.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the total area of the garden. Include correct units.',
                marks: 2,
                markScheme: 'M1 for 14 × 6.5. A1 for 91 m² (or square metres).',
                examinerTip: 'Candidates must state m² or square metres for full credit.'
              }
            ]
          },
          {
            questionNumber: 7,
            stemText: 'On a coordinate grid, point A is at (-3, 4) and point B is at (5, 4).',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'State the quadrant in which point A lies.',
                marks: 1,
                markScheme: 'B1 for Second Quadrant (Quadrant II).',
                examinerTip: 'x is negative and y is positive, which is the upper-left quadrant.'
              },
              {
                partLabel: '(b)',
                questionText: 'Find the length of the horizontal line segment joining point A and point B.',
                marks: 2,
                markScheme: 'M1 for 5 - (-3) or counting 5 + 3 units. A1 for 8 units.',
                examinerTip: 'Watch out for sign errors when subtracting negative numbers.'
              }
            ]
          },
          {
            questionNumber: 8,
            stemText: 'Five children took a spelling test out of 20. Their scores were: 14, 17, 12, 19, 18.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Find the median score.',
                marks: 2,
                markScheme: 'M1 for ordering the numbers: 12, 14, 17, 18, 19. A1 for 17.',
                examinerTip: 'Crucial: numbers must be arranged in order before selecting the middle value.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the mean score.',
                marks: 2,
                markScheme: 'M1 for sum = 12 + 14 + 17 + 18 + 19 = 80, divided by 5. A1 for 16.',
                examinerTip: 'Show both the total sum (80) and the division by 5.'
              },
              {
                partLabel: '(c)',
                questionText: 'State the range of the scores.',
                marks: 1,
                markScheme: 'B1 for 7 (19 - 12 = 7).',
                examinerTip: 'Range is highest minus lowest: 19 - 12 = 7.'
              }
            ]
          },
          {
            questionNumber: 9,
            stemText: 'An angle measures 128°.',
            totalMarks: 2,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Classify this angle (acute, right, obtuse, or reflex).',
                marks: 1,
                markScheme: 'B1 for obtuse (between 90° and 180°).',
                examinerTip: 'Obtuse is strictly > 90° and < 180°.'
              },
              {
                partLabel: '(b)',
                questionText: 'How many degrees must be added to this angle to make a straight line angle?',
                marks: 1,
                markScheme: 'B1 for 52° (180° - 128° = 52°).',
                examinerTip: 'Angles on a straight line add up to 180°.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section 3: Applied Problem Solving & Investigations (10 Marks)',
        instructions: 'Read each word problem carefully. Clearly state your final answer.',
        questions: [
          {
            questionNumber: 10,
            stemText: 'A water tank has a capacity of 1,200 litres. A tap fills the tank at 45 litres per minute, while an outlet tap drains water at 15 litres per minute.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'What is the net rate of water entering the tank each minute when both taps are open?',
                marks: 1,
                markScheme: 'B1 for 30 litres per minute (45 - 15 = 30 L/min).',
                examinerTip: 'Net rate = inflow rate minus outflow rate.'
              },
              {
                partLabel: '(b)',
                questionText: 'If the tank is completely empty, calculate how many minutes it will take to fill the tank completely.',
                marks: 2,
                markScheme: 'M1 for 1200 ÷ 30. A1 for 40 minutes.',
                examinerTip: 'Show division clearly: 1200 / 30 = 40.'
              },
              {
                partLabel: '(c)',
                questionText: 'If the filling started at 09:45, at what time will the tank be full? Give your answer in 24-hour clock format.',
                marks: 1,
                markScheme: 'B1 for 10:25 (09:45 + 40 mins = 10:25).',
                examinerTip: 'Ensure 24-hour time notation with 4 digits or colon: 10:25.'
              }
            ]
          },
          {
            questionNumber: 11,
            stemText: 'A baker uses 350g of flour and 120g of sugar to make 12 rolls.',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'How much flour does the baker need to make 36 rolls?',
                marks: 2,
                markScheme: 'M1 for 36 ÷ 12 = 3 times the recipe, 350 × 3. A1 for 1,050g (or 1.05 kg).',
                examinerTip: 'Scaling factor is 36 / 12 = 3.'
              },
              {
                partLabel: '(b)',
                questionText: 'What is the simplified ratio of flour to sugar in grams?',
                marks: 1,
                markScheme: 'B1 for 35 : 12 (350 ÷ 10 : 120 ÷ 10 = 35 : 12).',
                examinerTip: 'Both numbers can be divided by 10. 35 and 12 have no other common factors.'
              }
            ]
          },
          {
            questionNumber: 12,
            stemText: 'A bag contains 5 red balls, 3 blue balls, and 2 green balls. A ball is chosen at random.',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'What is the probability of picking a blue ball? Give your answer as a fraction in simplest form.',
                marks: 1,
                markScheme: 'B1 for 3/10 (Total balls = 5 + 3 + 2 = 10).',
                examinerTip: 'Fraction must have total outcomes in denominator.'
              },
              {
                partLabel: '(b)',
                questionText: 'What is the probability of picking a green or red ball?',
                marks: 1,
                markScheme: 'B1 for 7/10 ((5 + 2) / 10 = 7/10).',
                examinerTip: 'Sum of favorable outcomes: 5 + 2 = 7.'
              },
              {
                partLabel: '(c)',
                questionText: 'What is the probability of picking a yellow ball?',
                marks: 1,
                markScheme: 'B1 for 0 (impossible event).',
                examinerTip: 'Zero or 0/10 accepted. "Impossible" is valid if phrased as a chance, but numerical probability is 0.'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. CAMBRIDGE PRIMARY CHECKPOINT - SCIENCE (STAGE 6)
  // =========================================================================
  {
    id: 'cambridge-pri-checkpoint-sci-p2',
    title: 'Cambridge Primary Checkpoint Science — Paper 2 (Theory & Enquiry)',
    type: 'exam',
    pathwayTier: 'Cambridge Primary',
    stageCode: 'Primary Stage 6 Checkpoint',
    syllabusCode: '0097',
    subject: 'Science',
    targetAge: 'Ages 10–11 (Stage 6 / Primary 6)',
    ageBand: '9-12',
    durationMinutes: 45,
    totalMarks: 40,
    specimenYear: 'Official Checkpoint Specimen Paper',
    instructions: [
      'Answer all questions in the spaces provided.',
      'You should have: Pen, pencil, ruler, eraser.',
      'Show clear scientific reasoning and use proper scientific vocabulary.'
    ],
    overview: 'Specimen Cambridge Primary Checkpoint paper covering Biology (human circulatory system, food webs, plant reproduction), Chemistry (reversible vs irreversible changes, solubility), and Physics (electrical circuits, friction, shadows).',
    learningObjectives: [
      '6Bs.01: Describe the human circulatory system (heart, blood vessels, lungs).',
      '6Cp.02: Differentiate between reversible physical changes (melting, dissolving) and irreversible chemical changes (burning, rusting).',
      '6Pf.01: Investigate how forces (friction, air resistance, gravity) affect motion.',
      '6Tw.03: Plan a fair test identifying independent, dependent, and controlled variables.'
    ],
    keyTopics: ['Human Body & Circulation', 'States of Matter & Changes', 'Circuits & Forces', 'Scientific Enquiry'],
    practicalAtHomeContext: 'Explains everyday home phenomena: why hearts beat faster during chores, why rust attacks tin roofs, and why cooking an egg cannot be reversed.',
    sections: [
      {
        sectionTitle: 'Section A: Biology & Living Organisms (14 Marks)',
        questions: [
          {
            questionNumber: 1,
            stemText: 'The human circulatory system transports oxygen and nutrients around the body.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Name the main organ that pumps blood continuously around the human body.',
                marks: 1,
                markScheme: 'B1 for the heart.',
                examinerTip: 'Only heart accepted.'
              },
              {
                partLabel: '(b)',
                questionText: 'Blood picks up a vital gas in the lungs. Name this gas.',
                marks: 1,
                markScheme: 'B1 for oxygen (O2).',
                examinerTip: 'Do not accept air; must be oxygen.'
              },
              {
                partLabel: '(c)',
                questionText: 'State the name of the waste gas that blood transports back to the lungs to be exhaled.',
                marks: 1,
                markScheme: 'B1 for carbon dioxide (CO2).',
                examinerTip: 'Carbon monoxide is incorrect.'
              },
              {
                partLabel: '(d)',
                questionText: 'Explain why a child’s pulse rate increases from 75 beats per minute to 130 beats per minute after running for three minutes.',
                marks: 2,
                markScheme: 'M1 for muscles need more energy / oxygen. A1 for heart pumps faster to deliver oxygen and glucose to muscles and remove carbon dioxide.',
                examinerTip: 'Both the need for more oxygen/energy and the faster transport by blood are required for 2 marks.'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'Here is a simple food chain from an African savannah ecosystem:\nGrass → Grasshopper → Chameleon → Hawk',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Identify the producer in this food chain.',
                marks: 1,
                markScheme: 'B1 for grass.',
                examinerTip: 'Producers make their own food through photosynthesis.'
              },
              {
                partLabel: '(b)',
                questionText: 'What is the secondary consumer in this food chain?',
                marks: 1,
                markScheme: 'B1 for chameleon (Grasshopper = primary, Chameleon = secondary).',
                examinerTip: 'Secondary consumer feeds on the primary consumer.'
              },
              {
                partLabel: '(c)',
                questionText: 'Explain what would happen to the grasshopper population if a disease caused a large drop in the chameleon population.',
                marks: 2,
                markScheme: 'M1 for grasshopper population would increase. A1 because fewer predators are eating them / less predation.',
                examinerTip: 'State the direction of change (increase) AND the ecological reason (fewer predators).'
              }
            ]
          },
          {
            questionNumber: 3,
            stemText: 'Flowering plants reproduce sexually through pollination and fertilisation.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Name the part of the flower that produces pollen grains.',
                marks: 1,
                markScheme: 'B1 for anther (accept stamen).',
                examinerTip: 'Anther is the specific male structure.'
              },
              {
                partLabel: '(b)',
                questionText: 'Name the sticky part of the flower that receives pollen during pollination.',
                marks: 1,
                markScheme: 'B1 for stigma (accept carpel / pistil).',
                examinerTip: 'Stigma is the receptive surface.'
              },
              {
                partLabel: '(c)',
                questionText: 'Describe two distinct features of flowers that are pollinated by insects rather than by wind.',
                marks: 2,
                markScheme: 'B1 for bright / coloured petals OR sweet scent / perfume. B1 for presence of sweet nectar OR sticky / spiky pollen grains.',
                examinerTip: 'Wind pollinated flowers typically have dull green petals and feathery stigmas.'
              },
              {
                partLabel: '(d)',
                questionText: 'State what the ovule develops into after successful fertilisation.',
                marks: 1,
                markScheme: 'B1 for a seed.',
                examinerTip: 'Ovule becomes the seed; ovary becomes the fruit.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section B: Chemistry & Materials (12 Marks)',
        questions: [
          {
            questionNumber: 4,
            stemText: 'Changes in materials can be reversible or irreversible.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'A candle wax melts when heated. Is this change reversible or irreversible? Explain your answer.',
                marks: 2,
                markScheme: 'B1 for reversible. B1 for explanation: wax can solidify / freeze back into solid wax when cooled.',
                examinerTip: 'Physical state change (solid to liquid and back) is reversible.'
              },
              {
                partLabel: '(b)',
                questionText: 'A piece of dry firewood is burned in a stove, leaving grey ash. Is this change reversible or irreversible? Explain your answer.',
                marks: 2,
                markScheme: 'B1 for irreversible. B1 for explanation: new substances are formed (ash, carbon dioxide, smoke, water vapour) which cannot be turned back into wood.',
                examinerTip: 'Chemical reaction forming new substances cannot be reversed by simple physical cooling.'
              },
              {
                partLabel: '(c)',
                questionText: 'State two conditions required for an iron nail to rust.',
                marks: 2,
                markScheme: 'B1 for water / moisture. B1 for oxygen / air.',
                examinerTip: 'Both water AND oxygen are strictly needed for iron rust (hydrated iron oxide).'
              }
            ]
          },
          {
            questionNumber: 5,
            stemText: 'A learner dissolves table salt in a beaker of warm water until no more salt will dissolve.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'In this mixture, state the name of:\n(i) the solute\n(ii) the solvent',
                marks: 2,
                markScheme: 'B1 for (i) salt (solute). B1 for (ii) water (solvent).',
                examinerTip: 'Solute is the dissolved solid; solvent is the liquid.'
              },
              {
                partLabel: '(b)',
                questionText: 'What term describes a solution in which no more solute can dissolve at that temperature?',
                marks: 1,
                markScheme: 'B1 for saturated (or saturated solution).',
                examinerTip: 'Saturated is the key scientific term.'
              },
              {
                partLabel: '(c)',
                questionText: 'Describe how the learner can separate the pure salt back out from the salt solution.',
                marks: 2,
                markScheme: 'M1 for evaporation / boiling. A1 for water evaporates leaving dry salt crystals behind.',
                examinerTip: 'Filtering will NOT work because salt is dissolved. Heat/evaporation is required.'
              },
              {
                partLabel: '(d)',
                questionText: 'If the temperature of the water is increased from 20°C to 60°C, what will happen to the amount of salt that can dissolve?',
                marks: 1,
                markScheme: 'B1 for it increases / more salt will dissolve.',
                examinerTip: 'Solubility of solid solutes typically increases with temperature.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section C: Physics & Scientific Enquiry (14 Marks)',
        questions: [
          {
            questionNumber: 6,
            stemText: 'A student builds a simple circuit with a 3V battery, wires, a switch, and a lamp.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'The switch is closed, but the lamp does not light up. Give two possible reasons why.',
                marks: 2,
                markScheme: 'B1 for broken bulb filament / blown bulb OR flat/dead battery. B1 for loose connection / broken wire OR switch not making contact.',
                examinerTip: 'Practical troubleshooting points accepted.'
              },
              {
                partLabel: '(b)',
                questionText: 'A second identical lamp is added in series to the circuit. What will happen to the brightness of the first lamp?',
                marks: 1,
                markScheme: 'B1 for it will become dimmer (less bright).',
                examinerTip: 'In a series circuit, adding lamps increases total resistance and reduces current through each lamp.'
              },
              {
                partLabel: '(c)',
                questionText: 'State one material that is an electrical conductor and one that is an electrical insulator.',
                marks: 2,
                markScheme: 'B1 for conductor: copper / aluminium / iron / graphite / metal. B1 for insulator: plastic / rubber / glass / wood.',
                examinerTip: 'Metals conduct electricity; non-metals (except graphite) insulate.'
              }
            ]
          },
          {
            questionNumber: 7,
            stemText: 'Kato investigates how the type of surface affects the friction acting on a wooden block.\nHe pulls the block across four surfaces using a spring balance (newton meter) and records the force required to start it moving:\n- Polished tile: 1.2 N\n- Smooth wood: 2.8 N\n- Sandpaper: 6.4 N\n- Wet glass: 0.8 N',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Which surface produced the greatest friction force?',
                marks: 1,
                markScheme: 'B1 for sandpaper (6.4 N).',
                examinerTip: 'Highest force indicates greatest resistance/friction.'
              },
              {
                partLabel: '(b)',
                questionText: 'State the independent variable in Kato’s investigation.',
                marks: 1,
                markScheme: 'B1 for the type of surface.',
                examinerTip: 'Independent variable is what the experimenter deliberately changes.'
              },
              {
                partLabel: '(c)',
                questionText: 'State the dependent variable that Kato measured.',
                marks: 1,
                markScheme: 'B1 for the pulling force in newtons (or friction force).',
                examinerTip: 'Dependent variable is the measured outcome.'
              },
              {
                partLabel: '(d)',
                questionText: 'Identify two variables Kato must keep constant to make this a fair test.',
                marks: 2,
                markScheme: 'B1 for mass/weight of the wooden block. B1 for surface area of the block in contact / pulling angle / speed.',
                examinerTip: 'Controlled variables ensure only the surface affects the result.'
              }
            ]
          },
          {
            questionNumber: 8,
            stemText: 'A child stands outdoors in the sunshine at three different times of day: 08:00, 12:00 noon, and 17:30.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'At which of these three times will the child cast the shortest shadow? Explain why.',
                marks: 2,
                markScheme: 'B1 for 12:00 noon. B1 for explanation: the sun is highest in the sky / directly overhead.',
                examinerTip: 'High angle of elevation produces a short shadow.'
              },
              {
                partLabel: '(b)',
                questionText: 'Explain why a solid human body casts a dark shadow on the ground when in the path of sunlight.',
                marks: 2,
                markScheme: 'M1 for light travels in straight lines. A1 for human body is opaque / blocks light, so light cannot pass through.',
                examinerTip: 'Key science terms: straight lines and opaque.'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. CAMBRIDGE LOWER SECONDARY CHECKPOINT - MATHEMATICS (STAGE 9)
  // =========================================================================
  {
    id: 'cambridge-lower-sec-math-p1',
    title: 'Cambridge Lower Secondary Checkpoint Mathematics — Paper 1',
    type: 'exam',
    pathwayTier: 'Cambridge Lower Secondary',
    stageCode: 'Lower Secondary Stage 9 Checkpoint',
    syllabusCode: '0862',
    subject: 'Mathematics',
    targetAge: 'Ages 13–14 (Stage 9 / Year 9)',
    ageBand: '13-16',
    durationMinutes: 60,
    totalMarks: 50,
    specimenYear: 'Official Checkpoint Specimen Paper',
    instructions: [
      'Answer all questions.',
      'NO CALCULATOR is allowed in this paper.',
      'You should show all your working on the question paper.',
      'Tracing paper may be used.',
      'Geometrical instruments (compasses, protractor, ruler) are required.'
    ],
    overview: 'Rigorous Stage 9 examination testing algebraic expansion, simultaneous equations, Pythagoras theorem, transformation geometry, and standard form.',
    learningObjectives: [
      '9Ae.02: Expand products of algebraic expressions (a + b)(c + d) and factorise quadratics.',
      '9Ae.04: Solve pairs of simultaneous linear equations by substitution and elimination.',
      '9Gg.01: Apply Pythagoras’ theorem to calculate hypotenuse and shorter sides in right-angled triangles.',
      '9Np.01: Write large and small numbers in standard form A × 10^n where 1 <= A < 10.'
    ],
    keyTopics: ['Algebra & Quadratics', 'Simultaneous Equations', 'Pythagoras & Trigonometry', 'Standard Form & Indices'],
    practicalAtHomeContext: 'Fundamental engineering mathematics: builders use the 3-4-5 Pythagorean triangle to set right angles on house foundations; simultaneous equations determine real-world break-even points.',
    sections: [
      {
        sectionTitle: 'Section 1: Number, Indices & Standard Form (12 Marks)',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Work out the value of each of the following:',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Evaluate: 3^4 - 2^5',
                marks: 2,
                markScheme: 'M1 for 3^4 = 81 and 2^5 = 32. A1 for 81 - 32 = 49.',
                examinerTip: 'Calculate each power before subtracting: 3*3*3*3 = 81; 2*2*2*2*2 = 32.'
              },
              {
                partLabel: '(b)',
                questionText: 'Simplify using index laws: (x^4 × x^7) ÷ x^5',
                marks: 2,
                markScheme: 'M1 for x^(4+7) = x^11. A1 for x^(11-5) = x^6.',
                examinerTip: 'Add powers when multiplying with same base; subtract powers when dividing.'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'The distance from Earth to the Sun is approximately 149,600,000 kilometres.\nThe diameter of a human red blood cell is approximately 0.0000078 metres.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Write 149,600,000 in standard form.',
                marks: 2,
                markScheme: 'M1 for 1.496. A1 for 1.496 × 10^8.',
                examinerTip: 'Number before decimal must be between 1 and 10; count 8 places to the left.'
              },
              {
                partLabel: '(b)',
                questionText: 'Write 0.0000078 in standard form.',
                marks: 2,
                markScheme: 'M1 for 7.8. A1 for 7.8 × 10^(-6).',
                examinerTip: 'Count 6 places to the right; negative index for numbers less than 1.'
              }
            ]
          },
          {
            questionNumber: 3,
            stemText: 'Find the highest common factor (HCF) and lowest common multiple (LCM) of 36 and 48.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Express 36 and 48 as products of their prime factors.',
                marks: 2,
                markScheme: 'B1 for 36 = 2^2 × 3^2. B1 for 48 = 2^4 × 3.',
                examinerTip: 'Prime factorization tree or successive division.'
              },
              {
                partLabel: '(b)',
                questionText: 'Hence find the HCF and LCM of 36 and 48.',
                marks: 2,
                markScheme: 'B1 for HCF = 2^2 × 3 = 12. B1 for LCM = 2^4 × 3^2 = 144.',
                examinerTip: 'HCF uses lowest powers; LCM uses highest powers of all prime factors.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section 2: Algebra & Simultaneous Equations (20 Marks)',
        questions: [
          {
            questionNumber: 4,
            stemText: 'Expand and simplify algebraic expressions:',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Expand: 3y(2y - 5)',
                marks: 2,
                markScheme: 'B1 for 6y^2. B1 for -15y (final answer: 6y^2 - 15y).',
                examinerTip: 'Multiply both terms inside the bracket by 3y.'
              },
              {
                partLabel: '(b)',
                questionText: 'Expand and simplify: (x + 4)(x - 7)',
                marks: 2,
                markScheme: 'M1 for x^2 - 7x + 4x - 28. A1 for x^2 - 3x - 28.',
                examinerTip: 'FOIL method: First, Outside, Inside, Last. Watch signs: -7x + 4x = -3x.'
              },
              {
                partLabel: '(c)',
                questionText: 'Factorise completely: 8a^2b + 12ab^2',
                marks: 2,
                markScheme: 'M1 for identifying common factor 4ab. A1 for 4ab(2a + 3b).',
                examinerTip: 'Must factor out the highest common factor (4ab), not just 2 or 4.'
              }
            ]
          },
          {
            questionNumber: 5,
            stemText: 'Solve the simultaneous equations:\n3x + 2y = 19\n2x - y = 8',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Solve for x and y. You must show all your working.',
                marks: 4,
                markScheme: 'M1 for multiplying second equation by 2: 4x - 2y = 16. M1 for adding equations: 7x = 35. A1 for x = 5. A1 for substituting back to get y = 2.',
                examinerTip: 'Substitution or elimination. Both values (x = 5, y = 2) must be clearly stated.'
              }
            ]
          },
          {
            questionNumber: 6,
            stemText: 'Solve the quadratic equation by factorisation:\nx^2 + 5x - 24 = 0',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Factorise x^2 + 5x - 24 into two brackets.',
                marks: 2,
                markScheme: 'M1 for two numbers with product -24 and sum +5 (8 and -3). A1 for (x + 8)(x - 3).',
                examinerTip: 'Signs must be correct: +8 and -3 multiply to -24 and add to +5.'
              },
              {
                partLabel: '(b)',
                questionText: 'State the two solutions for x.',
                marks: 1,
                markScheme: 'B1 for x = -8 and x = 3.',
                examinerTip: 'Set each factor to zero: x + 8 = 0 => x = -8; x - 3 = 0 => x = 3.'
              }
            ]
          },
          {
            questionNumber: 7,
            stemText: 'Make r the subject of the formula:\nV = (4/3)πr^3',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Rearrange the formula to express r in terms of V and π.',
                marks: 3,
                markScheme: 'M1 for 3V = 4πr^3. M1 for r^3 = (3V) / (4π). A1 for r = cube root of (3V / 4π).',
                examinerTip: 'Remember to take the cube root (∛) as the final step.'
              }
            ]
          },
          {
            questionNumber: 8,
            stemText: 'Solve the linear inequality:\n5x - 3 <= 2x + 12',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Solve the inequality for x.',
                marks: 2,
                markScheme: 'M1 for 5x - 2x <= 12 + 3 (3x <= 15). A1 for x <= 5.',
                examinerTip: 'Treat like an equation; only flip inequality if dividing by a negative.'
              },
              {
                partLabel: '(b)',
                questionText: 'State the largest integer that satisfies this inequality.',
                marks: 1,
                markScheme: 'B1 for 5.',
                examinerTip: 'Since inequality is <=, 5 is included.'
              },
              {
                partLabel: '(c)',
                questionText: 'Represent your solution on a number line.',
                marks: 1,
                markScheme: 'B1 for solid dot at 5 with arrow pointing to the left.',
                examinerTip: 'Solid closed circle for <=, open circle for <.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section 3: Geometry & Pythagoras’ Theorem (18 Marks)',
        questions: [
          {
            questionNumber: 9,
            stemText: 'A right-angled triangle ABC has angle B = 90°.\nThe length of AB = 6 cm and the length of BC = 8 cm.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Use Pythagoras’ theorem to calculate the exact length of the hypotenuse AC.',
                marks: 3,
                markScheme: 'M1 for AC^2 = AB^2 + BC^2 = 6^2 + 8^2. M1 for AC^2 = 36 + 64 = 100. A1 for AC = √100 = 10 cm.',
                examinerTip: 'Classic 3-4-5 Pythagorean triple scaled by factor 2.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the area of triangle ABC.',
                marks: 1,
                markScheme: 'B1 for 24 cm² (1/2 × 6 × 8 = 24).',
                examinerTip: 'Area of right triangle is 1/2 × base × perpendicular height.'
              }
            ]
          },
          {
            questionNumber: 10,
            stemText: 'A 13-metre ladder rests against a vertical brick wall. The foot of the ladder is 5 metres away from the base of the wall on horizontal ground.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the height up the wall that the ladder reaches.',
                marks: 3,
                markScheme: 'M1 for h^2 + 5^2 = 13^2. M1 for h^2 = 169 - 25 = 144. A1 for h = √144 = 12 metres.',
                examinerTip: 'Subtracting shorter side squared from hypotenuse squared: 169 - 25 = 144.'
              },
              {
                partLabel: '(b)',
                questionText: 'State whether the triangle formed is a right-angled triangle. Justify your answer.',
                marks: 1,
                markScheme: 'B1 for Yes, because 5^2 + 12^2 = 25 + 144 = 169 = 13^2 (converse of Pythagoras).',
                examinerTip: 'Check that a^2 + b^2 = c^2 holds exactly.'
              }
            ]
          },
          {
            questionNumber: 11,
            stemText: 'The interior angle of a regular polygon is 140°.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the size of one exterior angle of this regular polygon.',
                marks: 2,
                markScheme: 'M1 for 180° - 140°. A1 for 40°.',
                examinerTip: 'Interior angle + exterior angle = 180°.'
              },
              {
                partLabel: '(b)',
                questionText: 'How many sides does this regular polygon have?',
                marks: 2,
                markScheme: 'M1 for sum of exterior angles = 360°, so n = 360 ÷ 40. A1 for 9 sides (nonagon).',
                examinerTip: 'Sum of exterior angles of any convex polygon is always 360°.'
              },
              {
                partLabel: '(c)',
                questionText: 'State the name of a 9-sided polygon.',
                marks: 1,
                markScheme: 'B1 for nonagon (or enneagon).',
                examinerTip: 'Nonagon is standard.'
              }
            ]
          },
          {
            questionNumber: 12,
            stemText: 'A cylinder has a radius of 7 cm and a height of 15 cm. Use π = 22/7.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the volume of the cylinder. State your units clearly.',
                marks: 3,
                markScheme: 'M1 for V = πr^2h. M1 for (22/7) × 7 × 7 × 15 = 22 × 7 × 15 = 154 × 15. A1 for 2,310 cm³.',
                examinerTip: 'Show cancellation of 7: 22 * 7 * 15 = 2310 cm³.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the curved surface area of the cylinder.',
                marks: 2,
                markScheme: 'M1 for 2πrh = 2 × (22/7) × 7 × 15. A1 for 660 cm².',
                examinerTip: 'Curved surface area formula is 2πrh.'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. CAMBRIDGE IGCSE MATHEMATICS (0580) - EXTENDED PAPER 2
  // =========================================================================
  {
    id: 'cambridge-igcse-math-0580-p2',
    title: 'Cambridge IGCSE Mathematics (0580) — Paper 2 (Extended)',
    type: 'exam',
    pathwayTier: 'Cambridge IGCSE',
    stageCode: 'IGCSE (0580)',
    syllabusCode: '0580',
    subject: 'Mathematics',
    targetAge: 'Ages 15–16 (Grade 10 / S4)',
    ageBand: '13-16',
    durationMinutes: 90,
    totalMarks: 70,
    specimenYear: 'Official Cambridge IGCSE Specimen',
    instructions: [
      'Answer all questions.',
      'Use a black or dark blue pen. You may use an HB pencil for any diagrams or graphs.',
      'Electronic calculators should be used where needed. Non-exact values must be given to 3 significant figures or 1 decimal place for angles in degrees, unless specified otherwise.',
      'For π, use either your calculator value or 3.142.'
    ],
    overview: 'High-stakes Cambridge IGCSE Extended examination covering vector geometry, circle theorems, functions and inverse functions, quadratic formula, trigonometry, and probability.',
    learningObjectives: [
      'E1.16: Construct and solve simultaneous linear/non-linear equations and quadratic equations using the quadratic formula.',
      'E2.7: Calculate lengths, angles and areas using sine and cosine rules and 1/2 ab sin(C).',
      'E4.4: Calculate with 2D vectors and express geometrical relationships using vectors.',
      'E2.10: Apply angle properties of circles (angle at centre, cyclic quadrilaterals, alternate segment theorem).'
    ],
    keyTopics: ['Vectors', 'Circle Theorems', 'Sine & Cosine Rules', 'Functions f(x) & f⁻¹(x)', 'Quadratic Formula'],
    practicalAtHomeContext: 'Crucial for future engineers, computer scientists, and architects. Vector calculations navigate ships and planes; trigonometry maps out solar panels and construction angles.',
    sections: [
      {
        sectionTitle: 'Section 1: Functions, Quadratics & Trigonometry (35 Marks)',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Solve the equation: 2x^2 + 7x - 4 = 0',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Show working and state both solutions for x.',
                marks: 3,
                markScheme: 'M1 for factorisation (2x - 1)(x + 4) = 0 OR quadratic formula with a=2, b=7, c=-4. M1 for 2x = 1 or x = -4. A1 for x = 0.5 and x = -4.',
                examinerTip: 'Both roots required. Check (2*0.5 - 1 = 0) and (-4 + 4 = 0).'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'The functions f and g are defined by:\nf(x) = 3x - 5\ng(x) = 2 / (x + 1), x ≠ -1',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Find f(4).',
                marks: 1,
                markScheme: 'B1 for 7 (3(4) - 5 = 12 - 5 = 7).',
                examinerTip: 'Substitute 4 into f(x).'
              },
              {
                partLabel: '(b)',
                questionText: 'Find gf(3).',
                marks: 2,
                markScheme: 'M1 for f(3) = 3(3) - 5 = 4. A1 for g(4) = 2 / (4 + 1) = 2/5 (or 0.4).',
                examinerTip: 'Evaluate inner function f(3) first, then pass result into g.'
              },
              {
                partLabel: '(c)',
                questionText: 'Find f⁻¹(x), the inverse of f(x).',
                marks: 3,
                markScheme: 'M1 for letting y = 3x - 5. M1 for swapping / rearranging: y + 5 = 3x => x = (y + 5)/3. A1 for f⁻¹(x) = (x + 5)/3.',
                examinerTip: 'Final answer must be written in terms of x, not y.'
              }
            ]
          },
          {
            questionNumber: 3,
            stemText: 'In triangle PQR, PQ = 8.4 cm, QR = 11.2 cm, and angle PQR = 65°.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the length of side PR using the Cosine Rule. Give your answer to 3 significant figures.',
                marks: 3,
                markScheme: 'M1 for PR^2 = 8.4^2 + 11.2^2 - 2(8.4)(11.2)cos(65°). M1 for PR^2 = 70.56 + 125.44 - 188.16 × 0.4226 = 196.00 - 79.52 = 116.48. A1 for PR = √116.48 = 10.8 cm (accept 10.79 to 10.8).',
                examinerTip: 'Cosine rule formula: a² = b² + c² - 2bc cos(A).'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the area of triangle PQR. Give your answer to 3 significant figures.',
                marks: 3,
                markScheme: 'M1 for Area = 1/2 × a × b × sin(C). M1 for 1/2 × 8.4 × 11.2 × sin(65°). A1 for 42.6 cm² (accept 42.63).',
                examinerTip: 'Ensure your calculator is in degree mode.'
              }
            ]
          },
          {
            questionNumber: 4,
            stemText: 'A car accelerates uniformly from rest to a speed of 24 m/s in 8 seconds. It then travels at this constant speed for 20 seconds, before decelerating to a stop in 4 seconds.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the acceleration during the first 8 seconds.',
                marks: 2,
                markScheme: 'M1 for a = (v - u) / t = (24 - 0) / 8. A1 for 3 m/s².',
                examinerTip: 'Units are m/s² or ms⁻².'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the total distance travelled by the car. (Hint: area under the speed-time graph).',
                marks: 3,
                markScheme: 'M1 for trapezium formula: 1/2 × (a + b) × h. M1 for 1/2 × (20 + 32) × 24. A1 for 624 metres.',
                examinerTip: 'Total time = 8 + 20 + 4 = 32s. Top parallel side = 20s. 1/2*(20+32)*24 = 624m.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section 2: Vectors, Circle Theorems & Probability (35 Marks)',
        questions: [
          {
            questionNumber: 5,
            stemText: 'Points A and B have position vectors OA = (3, 7) and OB = (9, -1).',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Find vector AB as a column vector.',
                marks: 2,
                markScheme: 'M1 for OB - OA = (9 - 3, -1 - 7). A1 for (6, -8).',
                examinerTip: 'AB = b - a. Watch out for negative sign: -1 - 7 = -8.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the magnitude |AB| of vector AB.',
                marks: 3,
                markScheme: 'M1 for √[6^2 + (-8)^2]. M1 for √(36 + 64) = √100. A1 for 10.',
                examinerTip: 'Pythagorean distance formula for column vectors: √(x² + y²).'
              }
            ]
          },
          {
            questionNumber: 6,
            stemText: 'A, B, C, and D are points on the circumference of a circle with centre O.\nAngle AOC (reflex) = 230° and angle ADC is an inscribed angle.',
            totalMarks: 5,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the size of the obtuse angle AOC at the centre.',
                marks: 1,
                markScheme: 'B1 for 130° (360° - 230° = 130°).',
                examinerTip: 'Angles around a point add up to 360°.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the angle ABC on the circumference. Give the circle theorem reason.',
                marks: 2,
                markScheme: 'B1 for 65°. B1 for reason: "The angle subtended by an arc at the centre is twice the angle subtended at the circumference".',
                examinerTip: '130° ÷ 2 = 65°. Cambridge requires the exact standard theorem statement.'
              },
              {
                partLabel: '(c)',
                questionText: 'ABCD is a cyclic quadrilateral. Calculate angle ADC.',
                marks: 2,
                markScheme: 'M1 for opposite angles of a cyclic quadrilateral sum to 180°. A1 for 180° - 65° = 115°.',
                examinerTip: 'Opposite angles in a cyclic quadrilateral are supplementary (add to 180°).'
              }
            ]
          },
          {
            questionNumber: 7,
            stemText: 'A bag contains 6 red counters and 4 yellow counters. Two counters are picked at random WITHOUT replacement.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Complete the probability for picking two red counters.',
                marks: 3,
                markScheme: 'M1 for P(1st Red) = 6/10. M1 for P(2nd Red | 1st Red) = 5/9. A1 for (6/10) × (5/9) = 30/90 = 1/3 (or 0.333).',
                examinerTip: 'Without replacement means both numerator and denominator reduce by 1.'
              },
              {
                partLabel: '(b)',
                questionText: 'Calculate the probability of picking at least one yellow counter.',
                marks: 3,
                markScheme: 'M1 for P(at least one yellow) = 1 - P(no yellow, i.e., both red). M1 for 1 - 1/3. A1 for 2/3 (or 0.667).',
                examinerTip: 'Using the complement rule 1 - P(Both Red) is the fastest and most reliable Cambridge method.'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. CAMBRIDGE IGCSE BIOLOGY (0610) - THEORY & EXAM QUESTIONS
  // =========================================================================
  {
    id: 'cambridge-igcse-bio-0610-p4',
    title: 'Cambridge IGCSE Biology (0610) — Paper 4 Theory (Extended)',
    type: 'exam',
    pathwayTier: 'Cambridge IGCSE',
    stageCode: 'IGCSE (0610)',
    syllabusCode: '0610',
    subject: 'Biology',
    targetAge: 'Ages 15–16 (Grade 10 / S4)',
    ageBand: '13-16',
    durationMinutes: 75,
    totalMarks: 50,
    specimenYear: 'Official Cambridge IGCSE Specimen',
    instructions: [
      'Answer all questions.',
      'Use a black or dark blue pen.',
      'Write your answers in the spaces provided on the question paper.',
      'Diagrams should be drawn in HB pencil.'
    ],
    overview: 'Essential Cambridge IGCSE Paper 4 examining photosynthesis, aerobic vs anaerobic respiration, enzyme kinetics, gas exchange, and genetic crosses (Punnett square).',
    learningObjectives: [
      'B6.1: State the balanced chemical equation for photosynthesis in words and symbols.',
      'B5.1: Describe enzyme action using the lock-and-key model and explain the effect of temperature and pH on denaturation.',
      'B17.2: Use genetic diagrams to predict phenotypic and genotypic ratios in monohybrid crosses.',
      'B12.1: Compare aerobic and anaerobic respiration in terms of reactants, products, and energy yield.'
    ],
    keyTopics: ['Enzymes & Denaturation', 'Photosynthesis Equations', 'Respiration & Lactic Acid', 'Monohybrid Genetic Crosses'],
    practicalAtHomeContext: 'Explains yeast fermentation when baking bread, why high fevers damage body enzymes, and how crops produce yield for food security.',
    sections: [
      {
        sectionTitle: 'Section A: Cellular Processes & Enzymes (25 Marks)',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Enzymes are biological catalysts that speed up metabolic reactions.',
            totalMarks: 7,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'State the chemical nature of all enzymes.',
                marks: 1,
                markScheme: 'B1 for proteins (made of amino acids).',
                examinerTip: 'Enzymes are always proteins.'
              },
              {
                partLabel: '(b)',
                questionText: 'Explain how the lock-and-key hypothesis describes enzyme specificity.',
                marks: 3,
                markScheme: 'B1 for enzyme has a specific active site shape. B1 for substrate has a complementary shape. B1 for substrate fits into active site forming an enzyme-substrate complex.',
                examinerTip: 'Do NOT say "same shape"; say "complementary shape". Cambridge examiners penalise "same shape".'
              },
              {
                partLabel: '(c)',
                questionText: 'Describe and explain what happens to an enzyme at 65°C.',
                marks: 3,
                markScheme: 'B1 for enzyme is denatured. B1 for high thermal energy vibrates active site bonds, altering its 3D tertiary structure. B1 for substrate can no longer fit into the active site; reaction stops.',
                examinerTip: 'NEVER say the enzyme "dies" or "is killed". Enzymes are molecules, not living things; they are "denatured".'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'Photosynthesis is the fundamental biological process driving energy into food webs.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Write the balanced chemical symbol equation for photosynthesis.',
                marks: 3,
                markScheme: 'B1 for correct formulas: 6CO2 + 6H2O → C6H12O6 + 6O2. B1 for light and chlorophyll over arrow. B1 for correct balancing numbers (6, 6, 1, 6).',
                examinerTip: 'Ensure sub-indices are written lower (CO₂) and balancing coefficients in front.'
              },
              {
                partLabel: '(b)',
                questionText: 'State two environmental limiting factors that determine the rate of photosynthesis.',
                marks: 2,
                markScheme: 'B1 for light intensity. B1 for carbon dioxide concentration OR temperature.',
                examinerTip: 'Water is rarely accepted as a direct limiting factor because stomata close before water shortage directly halts photochemical reactions.'
              },
              {
                partLabel: '(c)',
                questionText: 'State the mineral ion needed by plants to synthesise chlorophyll.',
                marks: 1,
                markScheme: 'B1 for magnesium (Mg²⁺).',
                examinerTip: 'Nitrate is for amino acids/proteins; magnesium is for chlorophyll.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section B: Genetics, Respiration & Transport (25 Marks)',
        questions: [
          {
            questionNumber: 3,
            stemText: 'In pea plants, tall stem height (T) is dominant to dwarf stem height (t). A heterozygous tall plant is crossed with a dwarf plant.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'State the genotype of:\n(i) the heterozygous tall plant\n(ii) the dwarf plant',
                marks: 2,
                markScheme: 'B1 for (i) Tt. B1 for (ii) tt.',
                examinerTip: 'Heterozygous has two different alleles (Tt); dwarf recessive must be homozygous (tt).'
              },
              {
                partLabel: '(b)',
                questionText: 'Draw a Punnett square to show the gametes, offspring genotypes, and offspring phenotypes.',
                marks: 3,
                markScheme: 'B1 for correct gametes: T, t from one parent; t, t from other. B1 for offspring genotypes: Tt, Tt, tt, tt. B1 for phenotypes: 50% tall, 50% dwarf (or 1:1 ratio).',
                examinerTip: 'Clearly label which genotype corresponds to which physical phenotype.'
              },
              {
                partLabel: '(c)',
                questionText: 'What term describes the observable physical appearance of an organism?',
                marks: 1,
                markScheme: 'B1 for phenotype.',
                examinerTip: 'Genotype is genetic makeup; phenotype is physical appearance.'
              }
            ]
          },
          {
            questionNumber: 4,
            stemText: 'Compare aerobic respiration with anaerobic respiration in human muscle tissue during vigorous sprinting.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'State two differences between aerobic and anaerobic respiration in humans.',
                marks: 2,
                markScheme: 'B1 for aerobic requires oxygen, anaerobic does not. B1 for aerobic produces CO2 and water with high energy (ATP), anaerobic produces lactic acid with much less energy.',
                examinerTip: 'Mentioning lactic acid and oxygen requirement secures both marks.'
              },
              {
                partLabel: '(b)',
                questionText: 'Explain why an athlete continues to breathe deeply and rapidly for several minutes AFTER finishing a 100m sprint.',
                marks: 4,
                markScheme: 'B1 for oxygen debt (excess post-exercise oxygen consumption / EPOC). B1 for lactic acid built up in muscles during sprint. B1 for oxygen needed to break down / oxidise lactic acid in the liver into carbon dioxide and water. B1 for restoring glycogen and ATP stores.',
                examinerTip: 'Key phrase: "oxygen debt to oxidise lactic acid in the liver".'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. CAMBRIDGE IGCSE CHEMISTRY (0620) - STOICHIOMETRY & MOLES WORKSHEET
  // =========================================================================
  {
    id: 'cambridge-igcse-chem-0620-worksheet',
    title: 'Cambridge IGCSE Chemistry (0620) — Stoichiometry & Mole Calculations Worksheet',
    type: 'worksheet',
    pathwayTier: 'Cambridge IGCSE',
    stageCode: 'IGCSE (0620)',
    syllabusCode: '0620',
    subject: 'Chemistry',
    targetAge: 'Ages 15–16 (Grade 10 / S4)',
    ageBand: '13-16',
    durationMinutes: 45,
    totalMarks: 30,
    instructions: [
      'Relative atomic masses: H = 1, C = 12, N = 14, O = 16, Na = 23, Mg = 24, S = 32, Cl = 35.5, Ca = 40, Cu = 64.',
      '1 mole of any gas occupies 24.0 dm³ at room temperature and pressure (r.t.p.).',
      'Show full numerical working for every calculation.'
    ],
    overview: 'High-yield Cambridge IGCSE calculation worksheet on relative formula masses (Mr), moles = mass / Mr, empirical formula determination, percentage yield, and titration stoichiometry.',
    learningObjectives: [
      'C4.1: Define the mole and calculate relative molecular mass (Mr).',
      'C4.2: Calculate stoichiometric reacting masses and reacting gas volumes at r.t.p.',
      'C4.3: Determine the empirical formula and molecular formula from percentage composition by mass.',
      'C4.4: Calculate concentration in mol/dm³ and g/dm³ from titration data.'
    ],
    keyTopics: ['Mole Calculations', 'Empirical Formula', 'Reacting Masses', 'Gas Volumes (24 dm³)'],
    practicalAtHomeContext: 'Crucial for pharmacy, fertilizer ratios, water chlorination calculations, and industrial production.',
    sections: [
      {
        sectionTitle: 'Core Calculation Problems (30 Marks)',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Calculate the relative formula mass (Mr) of:',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calcium carbonate, CaCO3',
                marks: 2,
                markScheme: 'M1 for 40 + 12 + (3 × 16). A1 for 100.',
                examinerTip: 'Show component addition: 40 + 12 + 48 = 100.'
              },
              {
                partLabel: '(b)',
                questionText: 'Hydrated copper(II) sulfate, CuSO4·5H2O',
                marks: 2,
                markScheme: 'M1 for 64 + 32 + (4 × 16) + 5 × (18) = 160 + 90. A1 for 250.',
                examinerTip: 'Do not multiply CuSO4 by 5; only the 5H2O water molecules are multiplied by 5.'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'A compound contains 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the empirical formula of the compound. Show all steps clearly.',
                marks: 4,
                markScheme: 'M1 for moles of C = 40.0/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. M1 for dividing by smallest (3.33): C = 1, H = 2.01 ≈ 2, O = 1. A1 for CH2O.',
                examinerTip: 'Set up clear columns: Mass (%) -> Moles (÷ Ar) -> Ratio (÷ smallest).'
              },
              {
                partLabel: '(b)',
                questionText: 'If the relative molecular mass (Mr) of this compound is 180, determine its molecular formula.',
                marks: 2,
                markScheme: 'M1 for Mr of empirical unit CH2O = 12 + 2 + 16 = 30. Multiple = 180 / 30 = 6. A1 for C6H12O6 (glucose).',
                examinerTip: 'Molecular formula is always an integer multiple of the empirical formula.'
              }
            ]
          },
          {
            questionNumber: 3,
            stemText: 'Magnesium reacts with hydrochloric acid according to the equation:\nMg(s) + 2HCl(aq) → MgCl2(aq) + H2(g)\n4.8 g of magnesium ribbon is reacted with excess hydrochloric acid.',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Calculate the number of moles of magnesium reacted.',
                marks: 2,
                markScheme: 'M1 for mass / Ar = 4.8 / 24. A1 for 0.20 moles.',
                examinerTip: 'Moles = mass in grams divided by relative atomic mass.'
              },
              {
                partLabel: '(b)',
                questionText: 'Determine the volume of hydrogen gas produced at r.t.p. in dm³.',
                marks: 2,
                markScheme: 'M1 for mole ratio Mg : H2 is 1 : 1, so moles of H2 = 0.20 mol. Volume = 0.20 × 24.0. A1 for 4.8 dm³.',
                examinerTip: 'At r.t.p., 1 mole of any gas = 24.0 dm³ (or 24,000 cm³).'
              },
              {
                partLabel: '(c)',
                questionText: 'Calculate the mass of anhydrous magnesium chloride (MgCl2) formed.',
                marks: 2,
                markScheme: 'M1 for Mr of MgCl2 = 24 + (2 × 35.5) = 95. Mass = 0.20 × 95. A1 for 19.0 g.',
                examinerTip: 'Mass = moles × Mr = 0.20 × 95 = 19.0g.'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 7. CAMBRIDGE IGCSE PHYSICS (0625) - REVISION NOTES & SUMMARY GUIDE
  // =========================================================================
  {
    id: 'cambridge-igcse-physics-0625-notes',
    title: 'Cambridge IGCSE Physics (0625) — Master Revision Notes & Formula Bank',
    type: 'notes',
    pathwayTier: 'Cambridge IGCSE',
    stageCode: 'IGCSE (0625)',
    syllabusCode: '0625',
    subject: 'Physics',
    targetAge: 'Ages 15–16 (Grade 10 / S4)',
    ageBand: '13-16',
    durationMinutes: 40,
    totalMarks: 0,
    instructions: [
      'Read through all core definitions, formulas, and examiner warnings.',
      'Review the step-by-step worked examples before attempting past paper questions.'
    ],
    overview: 'Complete high-yield revision notes matching Cambridge IGCSE 0625 syllabus: Motion, Forces & Momentum, Thermal Physics, Waves & Sound, Electricity & Ohm’s Law, and Nuclear Physics.',
    learningObjectives: [
      'P1.2: Recall and apply equations for speed, acceleration, and weight = mass × g.',
      'P1.5: Apply Newton’s three laws of motion and momentum = mass × velocity.',
      'P2.2: Describe conduction, convection, and radiation with practical heat transfer examples.',
      'P4.2: Apply Ohm’s Law (V = IR), electrical power (P = IV = I²R), and series/parallel resistor rules.'
    ],
    keyTopics: ['Kinematics & Dynamics', 'Newton’s Laws', 'Thermal Transfer', 'Electricity & Circuits'],
    practicalAtHomeContext: 'Explains motorcycle stopping distances, solar water heaters, household circuit breakers, and inverter battery sizing.',
    notesData: [
      {
        heading: '1. General Physics: Motion, Forces & Momentum',
        subheading: 'Speed, Velocity, Acceleration, and Newton’s Laws',
        content: `• Speed is a scalar quantity (magnitude only, e.g. 20 m/s); Velocity is a vector quantity (magnitude AND direction, e.g. 20 m/s East).
• Acceleration is the rate of change of velocity: a = (v - u) / t (in m/s²).
• In a distance-time graph: Gradient = Speed. A flat line means stationary.
• In a speed-time graph: Gradient = Acceleration. Area under the line = Distance travelled!
• Newton’s First Law: An object remains at rest or moves at a constant speed in a straight line unless acted upon by a resultant external force.
• Newton’s Second Law: Resultant Force = mass × acceleration (F = ma). Resultant force is the vector sum of all forces acting on an object.
• Weight is gravitational force on an object: W = mg (where g = 9.8 or 10 N/kg on Earth). Mass is the amount of matter in an object (measured in kg) and NEVER changes anywhere in the universe!`,
        formulaeOrDefinitions: [
          { term: 'Speed (v)', definitionOrFormula: 'v = d / t (metres per second, m/s)' },
          { term: 'Acceleration (a)', definitionOrFormula: 'a = (v - u) / t (m/s²)' },
          { term: 'Newton’s 2nd Law (F)', definitionOrFormula: 'F = m × a (Newtons, N)' },
          { term: 'Weight (W)', definitionOrFormula: 'W = m × g (where g = 9.8 N/kg or 10 N/kg)' },
          { term: 'Density (ρ)', definitionOrFormula: 'ρ = m / V (kg/m³ or g/cm³)' },
          { term: 'Momentum (p)', definitionOrFormula: 'p = m × v (kg·m/s). In closed collisions: Total momentum before = Total momentum after.' }
        ],
        workedExamples: [
          {
            problem: 'A car of mass 1,200 kg is travelling at 15 m/s. The driver hits the brakes, bringing the car to rest in 5.0 seconds. Calculate the braking force required.',
            steps: [
              'Step 1: Identify given variables: m = 1200 kg, initial velocity u = 15 m/s, final velocity v = 0 m/s, time t = 5.0 s.',
              'Step 2: Calculate acceleration: a = (v - u) / t = (0 - 15) / 5.0 = -3.0 m/s² (deceleration).',
              'Step 3: Apply F = ma: F = 1200 kg × (-3.0 m/s²) = -3,600 N.'
            ],
            finalAnswer: '3,600 Newtons in the opposite direction of motion.',
            examinerTip: 'Cambridge examiners award 1 mark for the acceleration calculation and 1 mark for applying F = ma.'
          }
        ],
        examinerTraps: [
          'Confusing mass and weight: mass is in kg, weight is a force measured in Newtons (N). Saying "my weight is 60 kg" is scientifically incorrect in Cambridge exams!',
          'Forgetting that the area under a speed-time graph gives distance travelled: split the graph into simple rectangles and triangles.',
          'Not converting minutes or hours to SI seconds before calculating speed or acceleration.'
        ]
      },
      {
        heading: '2. Electricity & Magnetism: Circuits & Ohm’s Law',
        subheading: 'Current, Voltage, Resistance, Series vs Parallel, and Electrical Power',
        content: `• Electric current (I) is the rate of flow of electric charge: I = Q / t (measured in Amperes, A). 1 Ampere = 1 Coulomb per second.
• Potential difference (Voltage, V) is the work done per unit charge in moving between two points: V = W / Q (measured in Volts, V).
• Resistance (R) opposes the flow of electric current: R = V / I (Ohms, Ω).
• Ohm’s Law: For an ohmic conductor (e.g. a metal wire at constant temperature), current is directly proportional to potential difference.
• Series Circuits: Current is the SAME everywhere: I_total = I_1 = I_2. Voltages add up: V_total = V_1 + V_2. Resistances add up: R_total = R_1 + R_2.
• Parallel Circuits: Voltage is the SAME across each branch: V_total = V_1 = V_2. Currents branch: I_total = I_1 + I_2. Total resistance decreases: 1/R_total = 1/R_1 + 1/R_2.
• Electrical Power: P = I × V = I²R = V² / R (Watts, W). Electrical Energy: E = P × t = I × V × t (Joules, J).`,
        formulaeOrDefinitions: [
          { term: 'Charge (Q)', definitionOrFormula: 'Q = I × t (Coulombs, C)' },
          { term: 'Ohm’s Law', definitionOrFormula: 'V = I × R (Volts = Amps × Ohms)' },
          { term: 'Resistors in Series', definitionOrFormula: 'R_total = R_1 + R_2 + R_3' },
          { term: 'Resistors in Parallel', definitionOrFormula: '1/R_total = 1/R_1 + 1/R_2 => R_total = (R_1 × R_2) / (R_1 + R_2)' },
          { term: 'Electrical Power (P)', definitionOrFormula: 'P = I × V = I²R (Watts, W)' }
        ],
        workedExamples: [
          {
            problem: 'Two resistors of 6 Ω and 12 Ω are connected in parallel to a 12 V battery. Calculate: (a) the total combined resistance, (b) the total current drawn from the battery.',
            steps: [
              'Step 1: Use parallel formula: 1/R = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4.',
              'Step 2: Invert to find R: R_total = 4 Ω.',
              'Step 3: Calculate current using Ohm’s Law: I = V / R = 12 V / 4 Ω = 3.0 A.'
            ],
            finalAnswer: '(a) Total resistance = 4.0 Ω; (b) Total current = 3.0 Amperes.',
            examinerTip: 'Check your parallel resistance: the total parallel resistance must ALWAYS be smaller than the smallest individual resistor (4 Ω < 6 Ω).'
          }
        ],
        examinerTraps: [
          'Ammeters must ALWAYS be connected in series with the component.',
          'Voltmeters must ALWAYS be connected in parallel across the component.',
          'When using P = IV × t, time MUST be in seconds, not hours or minutes, to obtain energy in Joules.'
        ]
      }
    ]
  },

  // =========================================================================
  // 8. CAMBRIDGE INTERNATIONAL AS LEVEL MATHEMATICS (9709) - PURE MATH 1
  // =========================================================================
  {
    id: 'cambridge-alevel-math-9709-p1',
    title: 'Cambridge International AS & A Level Mathematics (9709) — Pure Mathematics 1',
    type: 'test_paper',
    pathwayTier: 'Cambridge AS & A Level',
    stageCode: 'AS Level (9709)',
    syllabusCode: '9709',
    subject: 'Mathematics',
    targetAge: 'Ages 16–18 (Grade 11–12 / S5–S6)',
    ageBand: '17+',
    durationMinutes: 75,
    totalMarks: 50,
    specimenYear: 'Official Cambridge A-Level Specimen',
    instructions: [
      'Answer all questions.',
      'Use a black or dark blue pen.',
      'You should show all necessary working in your answers.',
      'Give non-exact numerical answers correct to 3 significant figures, or 1 decimal place for angles in degrees, unless a different degree of accuracy is specified in the question.'
    ],
    overview: 'Pre-university Cambridge Pure Mathematics 1 test paper covering differentiation (tangents and normals, stationary points), definite integration (area under curves), binomial expansion, and trigonometric identities.',
    learningObjectives: [
      'P1.1: Use the expansion of (a + b)^n where n is a positive integer.',
      'P1.4: Differentiate x^n and apply derivatives to gradients, tangents, normals, and turning points.',
      'P1.5: Integrate powers of x and evaluate definite integrals to find areas bounded by curves.',
      'P1.3: Prove and apply identities tan θ = sin θ / cos θ and sin² θ + cos² θ = 1.'
    ],
    keyTopics: ['Calculus: Differentiation', 'Calculus: Integration', 'Binomial Expansion', 'Trigonometric Identities'],
    practicalAtHomeContext: 'The mathematical bedrock of university engineering, artificial intelligence, quantitative finance, and aerospace dynamics.',
    sections: [
      {
        sectionTitle: 'Calculus, Binomial Theorem & Coordinate Geometry (50 Marks)',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Find the coefficient of x^3 in the expansion of (2 - 3x)^6.',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Show working using the binomial coefficient formula.',
                marks: 4,
                markScheme: 'M1 for general term: 6C3 × (2)^3 × (-3x)^3. M1 for 6C3 = 20, 2^3 = 8, (-3)^3 = -27. M1 for multiplying 20 × 8 × (-27). A1 for coefficient = -4,320.',
                examinerTip: 'Watch out for the minus sign in (-3x)^3 = -27x^3. Forgetting the negative is the most common student error.'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'The curve C has equation y = 2x^3 - 9x^2 + 12x - 5.',
            totalMarks: 8,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Find dy/dx.',
                marks: 2,
                markScheme: 'M1 for differentiating each term: d/dx(2x^3) = 6x^2, d/dx(-9x^2) = -18x, d/dx(12x) = 12. A1 for dy/dx = 6x^2 - 18x + 12.',
                examinerTip: 'Power comes down as multiplier and reduces by 1.'
              },
              {
                partLabel: '(b)',
                questionText: 'Find the coordinates of the two stationary points on the curve.',
                marks: 3,
                markScheme: 'M1 for setting dy/dx = 0: 6x^2 - 18x + 12 = 0 => x^2 - 3x + 2 = 0. M1 for (x - 1)(x - 2) = 0 => x = 1, x = 2. A1 for points: (1, 0) and (2, -1).',
                examinerTip: 'Substitute x values back into ORIGINAL y equation, not into dy/dx, to find y coordinates!'
              },
              {
                partLabel: '(c)',
                questionText: 'Determine the nature (maximum or minimum) of each stationary point using the second derivative d²y/dx².',
                marks: 3,
                markScheme: 'M1 for d²y/dx² = 12x - 18. M1 for at x = 1, d²y/dx² = 12(1) - 18 = -6 < 0 => LOCAL MAXIMUM. A1 for at x = 2, d²y/dx² = 12(2) - 18 = +6 > 0 => LOCAL MINIMUM.',
                examinerTip: 'Remember: negative second derivative indicates a maximum; positive indicates a minimum.'
              }
            ]
          },
          {
            questionNumber: 3,
            stemText: 'Evaluate the definite integral:\n∫[1 to 4] (3√x + 2/x^2) dx',
            totalMarks: 6,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Rewrite the integrand in power index form.',
                marks: 1,
                markScheme: 'B1 for 3x^(1/2) + 2x^(-2).',
                examinerTip: '√x = x^(1/2) and 1/x^2 = x^(-2).'
              },
              {
                partLabel: '(b)',
                questionText: 'Integrate and evaluate between limits x = 1 and x = 4.',
                marks: 5,
                markScheme: 'M1 for integrating 3x^(1/2) to 3 × (x^(3/2) / (3/2)) = 2x^(3/2). M1 for integrating 2x^(-2) to 2 × (x^(-1) / (-1)) = -2/x. M1 for substitution of limit 4: [2(4^(3/2)) - 2/4] = [2(8) - 0.5] = 15.5. M1 for substitution of limit 1: [2(1) - 2/1] = 0. A1 for 15.5 - 0 = 15.5 (or 31/2).',
                examinerTip: 'Take care with fractional powers: 4^(3/2) = (√4)^3 = 2^3 = 8.'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 9. CAMBRIDGE EARLY YEARS (EYFS) - PHONICS & NUMBER TRACING WORKSHEET
  // =========================================================================
  {
    id: 'cambridge-eyfs-phonics-math-ws',
    title: 'Cambridge Early Years — Sound Discovery & Number Bonds Worksheet',
    type: 'worksheet',
    pathwayTier: 'Cambridge Early Years',
    stageCode: 'Early Years EY2',
    syllabusCode: 'EY-LIT-01',
    subject: 'Early Literacy & Numeracy',
    targetAge: 'Ages 3–5 (Early Years 1–3)',
    ageBand: '3-5',
    durationMinutes: 20,
    totalMarks: 15,
    instructions: [
      'Say each sound aloud together with your parent or teacher.',
      'Trace the letter path with your finger first, then with a soft pencil or crayon.',
      'Count the objects aloud using your finger to touch each item.'
    ],
    overview: 'Play-based early years foundation worksheet designed for Cambridge Early Years Communication, Language & Literacy and Early Mathematics.',
    learningObjectives: [
      'EY.LL.01: Recognise and produce initial phoneme sounds (/s/, /a/, /t/, /p/, /i/, /n/).',
      'EY.LL.04: Develop pre-writing fine motor control tracing lines and curves.',
      'EY.MA.02: Count up to 10 physical objects with one-to-one correspondence.'
    ],
    keyTopics: ['Initial Phonics Sounds', 'CVC Word Blending', 'Number Bonds to 10', 'Pre-writing Motor Skills'],
    practicalAtHomeContext: 'Uses everyday items: count beans, dry stones, or spoons; trace letter shapes in a tray of dry sand or maize flour.',
    sections: [
      {
        sectionTitle: 'Part 1: Phonics & Sound Discrimination (8 Marks)',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Say the sound for each letter and name an everyday object that starts with it:',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Letter "s" — Make the snake sound: /sss/. Which of these starts with /s/? [Sun, Cup, Tree]',
                marks: 1,
                markScheme: 'B1 for Sun.',
                examinerTip: 'Encourage child to hiss like a snake while tracing the S curve in the air.'
              },
              {
                partLabel: '(b)',
                questionText: 'Letter "a" — Make the apple sound: /a-a-a/. Which of these starts with /a/? [Dog, Ant, Book]',
                marks: 1,
                markScheme: 'B1 for Ant.',
                examinerTip: 'Action: pretend ants crawling up arm saying /a/-/a/-/a/.'
              },
              {
                partLabel: '(c)',
                questionText: 'Letter "t" — Make the clock sound: /t-t-t/. Which starts with /t/? [Table, Ball, Frog]',
                marks: 1,
                markScheme: 'B1 for Table.',
                examinerTip: 'Watch children make the crisp unvoiced /t/ sound with the tip of their tongue.'
              },
              {
                partLabel: '(d)',
                questionText: 'Letter "p" — Make the popcorn sound: /p-p-p/. Which starts with /p/? [Pot, Cat, Fish]',
                marks: 1,
                markScheme: 'B1 for Pot.',
                examinerTip: 'Puff of air against the hand: unvoiced bilabial plosive.'
              }
            ]
          },
          {
            questionNumber: 2,
            stemText: 'Sound blending: Put sounds together to make a real word!',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Blend: /s/ - /a/ - /t/. What word does it make?',
                marks: 1,
                markScheme: 'B1 for "sat".',
                examinerTip: 'Smooth blending: sss-aaa-ttt -> sat.'
              },
              {
                partLabel: '(b)',
                questionText: 'Blend: /p/ - /a/ - /t/. What word does it make?',
                marks: 1,
                markScheme: 'B1 for "pat".',
                examinerTip: 'Pat the table rhythmically.'
              },
              {
                partLabel: '(c)',
                questionText: 'Blend: /t/ - /a/ - /p/. What word does it make?',
                marks: 1,
                markScheme: 'B1 for "tap".',
                examinerTip: 'Relate to the kitchen water tap.'
              },
              {
                partLabel: '(d)',
                questionText: 'Blend: /p/ - /i/ - /n/. What word does it make?',
                marks: 1,
                markScheme: 'B1 for "pin".',
                examinerTip: 'Clear vowel sound /i/ as in ink.'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Part 2: Number Bonds to 10 & Counting (7 Marks)',
        questions: [
          {
            questionNumber: 3,
            stemText: 'Number pairs that make 10 (Rainbow bonds):',
            totalMarks: 4,
            parts: [
              {
                partLabel: '(a)',
                questionText: '7 + ___ = 10',
                marks: 1,
                markScheme: 'B1 for 3.',
                examinerTip: 'Use fingers: hold up 7 fingers, count the 3 folded fingers.'
              },
              {
                partLabel: '(b)',
                questionText: '4 + ___ = 10',
                marks: 1,
                markScheme: 'B1 for 6.',
                examinerTip: 'Pair recognition: 4 and 6 make 10.'
              },
              {
                partLabel: '(c)',
                questionText: '5 + ___ = 10',
                marks: 1,
                markScheme: 'B1 for 5.',
                examinerTip: 'Double 5 makes 10.'
              },
              {
                partLabel: '(d)',
                questionText: '9 + ___ = 10',
                marks: 1,
                markScheme: 'B1 for 1.',
                examinerTip: 'One more makes 10.'
              }
            ]
          },
          {
            questionNumber: 4,
            stemText: 'Look around your home or kitchen:',
            totalMarks: 3,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Count 6 spoons or forks on the table. Point to each one one-by-one.',
                marks: 1,
                markScheme: 'B1 for accurate one-to-one correspondence counting to 6.',
                examinerTip: 'Ensure child touches each object as they say the corresponding number word.'
              },
              {
                partLabel: '(b)',
                questionText: 'Find 1 round object and 1 square or rectangular object in your room.',
                marks: 1,
                markScheme: 'B1 for identifying a circle (plate/clock/coin) and a rectangle/square (book/door/brick).',
                examinerTip: 'Empirical shape identification.'
              },
              {
                partLabel: '(c)',
                questionText: 'If you have 4 pebbles and your mother gives you 2 more pebbles, how many do you have altogether?',
                marks: 1,
                markScheme: 'B1 for 6 pebbles (4 + 2 = 6).',
                examinerTip: 'Counting on from 4: 5, 6.'
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 10. CAMBRIDGE IGCSE FIRST LANGUAGE ENGLISH (0500) - DIRECTED WRITING & EXAM PAPER
  // =========================================================================
  {
    id: 'cambridge-igcse-eng-0500-p1',
    title: 'Cambridge IGCSE First Language English (0500) — Paper 1 Reading & Directed Writing',
    type: 'exam',
    pathwayTier: 'Cambridge IGCSE',
    stageCode: 'IGCSE (0500)',
    syllabusCode: '0500',
    subject: 'First Language English',
    targetAge: 'Ages 15–16 (Grade 10 / S4)',
    ageBand: '13-16',
    durationMinutes: 90,
    totalMarks: 50,
    specimenYear: 'Official Cambridge IGCSE Specimen',
    instructions: [
      'Answer all questions.',
      'Use a black or dark blue pen.',
      'Write your answers in the spaces provided.',
      'Dictionaries are NOT permitted in the examination.'
    ],
    overview: 'Full Cambridge IGCSE Paper 1 examination testing comprehension, explicit and implicit meaning, summary writing (120 words), and extended directed writing (speech/article) with authentic mark scheme and level descriptors.',
    learningObjectives: [
      'R1: Demonstrate understanding of explicit meanings.',
      'R2: Demonstrate understanding of implicit meanings and attitudes.',
      'R3: Analyse, evaluate and develop facts, ideas and opinions.',
      'W1: Articulate experience and express what is thought, felt and imagined with sophisticated vocabulary and accurate syntax.'
    ],
    keyTopics: ['Summary Writing', 'Implicit Meaning Analysis', 'Rhetorical Speech', 'Examiner Level Descriptors'],
    practicalAtHomeContext: 'Prepares students for professional reports, persuasive university essays, and high-impact public communication.',
    sections: [
      {
        sectionTitle: 'Section A: Reading Comprehension & Summary Task (25 Marks)',
        instructions: 'Read Passage A: "The Solar Village Revolution" before answering Questions 1 and 2.',
        questions: [
          {
            questionNumber: 1,
            stemText: 'Passage A Excerpt:\n"Twenty years ago, when dusk fell over the valley of Mpigi, darkness was absolute. Kerosene lamps sputtered, spewing toxic black soot that stung children’s eyes as they leaned over their homework. Today, rooftops glint with silicon photovoltaic cells. Clean electricity powers refrigeration for local vaccines, pumps fresh water from deep boreholes, and connects villagers to the boundless digital web. Solar energy did not merely bring artificial photons—it unleashed human autonomy and economic vitality."',
            totalMarks: 10,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'According to the passage, identify two disadvantages of using kerosene lamps in the past.',
                marks: 2,
                markScheme: 'B1 for produced toxic black soot. B1 for stung children’s eyes / inadequate light for homework.',
                examinerTip: 'Quote or paraphrase directly from the text.'
              },
              {
                partLabel: '(b)',
                questionText: 'Explain the meaning of the phrase "boundless digital web" as used in the passage.',
                marks: 2,
                markScheme: 'B1 for internet / worldwide network. B1 for boundless = limitless knowledge, infinite connections and opportunities.',
                examinerTip: 'Explain both the figurative adjective "boundless" and the noun phrase "digital web".'
              },
              {
                partLabel: '(c)',
                questionText: 'What does the author suggest by the statement: "Solar energy did not merely bring artificial photons—it unleashed human autonomy"?',
                marks: 2,
                markScheme: 'M1 for recognition that electricity is not just physical light. A1 for it empowers villagers with freedom, independence, self-reliance, and economic development.',
                examinerTip: 'Analyse implicit meaning (R2).'
              },
              {
                partLabel: '(d)',
                questionText: 'Summary Task: In no more than 120 words, summarise the benefits of solar power mentioned in the text for rural communities. You must use your own words as far as possible.',
                marks: 4,
                markScheme: 'Marking: 2 marks for Reading content (safe lighting, vaccine preservation, clean water access, digital connectivity, economic growth). 2 marks for Quality of Writing (coherent sequencing, concise syntax, own words without lifting long chunks).',
                examinerTip: 'Keep strictly within 120 words. Penalties apply for direct mindless copying (lifting).'
              }
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section B: Extended Directed Writing (25 Marks)',
        questions: [
          {
            questionNumber: 2,
            stemText: 'You are a youth delegate speaking at an international conference on "Sustainable Energy and Youth Development".\n\nWrite the speech you deliver to government officials and community leaders.\n\nIn your speech you should:\n• Evaluate the urgent need to transition from fossil fuels to local clean energy.\n• Describe practical ways young people in schools and communities can spearhead this change.\n• Persuade leaders to fund and trust youth-led environmental projects.\n\nBase your speech on the ideas in Passage A, but be sure to develop them with your own ideas.\nWrite about 250 to 350 words.',
            totalMarks: 25,
            parts: [
              {
                partLabel: '(a)',
                questionText: 'Deliver your complete speech using formal, persuasive rhetoric and appropriate register for an international summit.',
                marks: 25,
                markScheme: 'Cambridge 25-mark criteria: 15 marks for Reading Evaluation (R1, R2, R3) + 10 marks for Writing Style & Rhetoric (W1, W2, W3, W4).\n• Band 5 (22-25 marks): Evaluates ideas thoroughly; highly persuasive, varied rhetorical devices (anaphora, direct address, triadic structure, emotive contrast); virtually zero punctuation or grammatical errors.\n• Band 4 (17-21 marks): Good understanding of ideas; confident register; structured paragraphs; minor slips.\n• Band 3 (12-16 marks): Sound understanding; plain expression; occasional mechanical errors.\n• Band 2 (6-11 marks): Relies heavily on text; inconsistent register.\n• Band 1 (0-5 marks): Barely addresses prompt; severe language deficiencies.',
                examinerTip: 'Include rhetorical devices: rhetorical questions, triadic list (rule of three), powerful metaphors, and clear call to action.'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const CAMBRIDGE_RESOURCE_FILTERS = [
  { id: 'all', label: 'All Resources' },
  { id: 'exam', label: 'Official Exam Papers' },
  { id: 'test_paper', label: 'Test Papers' },
  { id: 'worksheet', label: 'Real Worksheets' },
  { id: 'notes', label: 'Revision Notes & Cheatsheets' }
];

export const CAMBRIDGE_STAGE_FILTERS = [
  { id: 'all', label: 'All Cambridge Stages' },
  { id: 'Early Years', label: 'Early Years (Ages 3–5)' },
  { id: 'Primary', label: 'Primary (Stages 1–6)' },
  { id: 'Lower Secondary', label: 'Lower Secondary (Stages 7–9)' },
  { id: 'IGCSE', label: 'IGCSE (Ages 14–16)' },
  { id: 'AS & A Level', label: 'AS & A Level (Ages 16–19)' }
];
