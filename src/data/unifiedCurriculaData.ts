import { LessonModule, AgeBand, SubjectCategory } from '../types/curriculum';
import { getCambridgeAlignmentForLesson } from './internationalCurriculaData';
import { getUsAlignmentForLesson } from './usCurriculumData';

export interface UnifiedCurriculumBenchmark {
  systemKey: 'usa' | 'cambridge' | 'ib' | 'china' | 'japan' | 'asia' | 'christian';
  systemName: string;
  flag: string;
  badgeLabel: string;
  standardsCode: string;
  learningObjective: string;
  pedagogicalApproach: string;
  curriculumBenchmark: string;
  practiceProblem: {
    question: string;
    rubricOrMarkScheme: string;
    solution: string;
    hint?: string;
  };
}

export interface UnifiedLessonCurricula {
  lessonId: string;
  lessonTitle: string;
  ageBand: AgeBand;
  globalParitySummary: string;
  usa: UnifiedCurriculumBenchmark;
  cambridge: UnifiedCurriculumBenchmark;
  ib: UnifiedCurriculumBenchmark;
  china: UnifiedCurriculumBenchmark;
  japan: UnifiedCurriculumBenchmark;
  asia: UnifiedCurriculumBenchmark;
  christian: UnifiedCurriculumBenchmark;
}

/**
 * Builds an authentic, unified 7-system curriculum crosswalk for any lesson module.
 * Incorporates all global curricula directly into the lesson so learners and parents
 * experience one unified international home academy standard.
 */
export function getUnifiedCurriculaForLesson(lesson: LessonModule): UnifiedLessonCurricula {
  const cambridge = lesson.cambridgeAlignment || getCambridgeAlignmentForLesson(lesson.ageBand, lesson.category, lesson.title);
  const us = lesson.usCurriculumAlignment || getUsAlignmentForLesson(lesson.ageBand, lesson.category, lesson.title);
  const t = lesson.title.toLowerCase();
  const cat = lesson.category;
  const age = lesson.ageBand;

  // 1. USA Common Core / NGSS / AP Practice Problem
  const usaPractice = getUsaPracticeProblem(lesson, us);

  // 2. Cambridge CAIE / UK Checkpoint / IGCSE Practice Problem
  const cambridgePractice = getCambridgePracticeProblem(lesson, cambridge);

  // 3. IB Transdisciplinary Theme & Inquiry
  const ibData = getIbCurriculumData(lesson);

  // 4. China MOE & Gaokao STEM Rigor
  const chinaData = getChinaCurriculumData(lesson);

  // 5. Japan MEXT & Bansho Visual Discovery
  const japanData = getJapanCurriculumData(lesson);

  // 6. Singapore CPA Bar Model & Asia Benchmark
  const asiaData = getAsiaCurriculumData(lesson);

  // 7. Christian Education & Biblical Character Formation
  const christianData = getChristianCurriculumData(lesson);

  return {
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    ageBand: lesson.ageBand,
    globalParitySummary: `Mastering "${lesson.title}" ensures direct academic parity with students following Cambridge IGCSE, US Common Core & NGSS, Singapore Math CPA, and China Gaokao STEM standards, grounded in biblical stewardship.`,
    usa: {
      systemKey: 'usa',
      systemName: 'United States K–12 (Common Core, NGSS & AP)',
      flag: '🇺🇸',
      badgeLabel: 'US Common Core & NGSS',
      standardsCode: `${us.standardsFramework} • ${us.standardCode}`,
      learningObjective: us.standardTitle,
      pedagogicalApproach: '3D inquiry-based phenomena modeling, CCSS evidence-based reasoning, and College Board AP diagnostic rubrics.',
      curriculumBenchmark: `Grade-level proficiency in ${us.domainCluster} (${us.gradeLevel}). ${us.apSatEquivalent ? `College Readiness: ${us.apSatEquivalent}.` : ''}`,
      practiceProblem: usaPractice,
    },
    cambridge: {
      systemKey: 'cambridge',
      systemName: 'Cambridge International & UK National (CAIE)',
      flag: '🇬🇧',
      badgeLabel: 'Cambridge CAIE Checkpoint & IGCSE',
      standardsCode: `CAIE ${cambridge.syllabusCode || '0096/0097'} • Objective: ${cambridge.learningObjectiveCode || 'Standard'}`,
      learningObjective: cambridge.cambridgeObjectiveTitle,
      pedagogicalApproach: 'First-principles deduction, structured scientific enquiry, and official examiner mark schemes (M1 method, A1 accuracy, B1 independent marks).',
      curriculumBenchmark: `${cambridge.pathwayStage}: ${cambridge.subject}. Prepares learners seamlessly for Cambridge Primary/Lower Secondary Checkpoints and IGCSE examination papers.`,
      practiceProblem: cambridgePractice,
    },
    ib: {
      systemKey: 'ib',
      systemName: 'International Baccalaureate (IB PYP / MYP / DP)',
      flag: '🌐',
      badgeLabel: 'IB World Schools',
      standardsCode: ibData.standardsCode,
      learningObjective: ibData.learningObjective,
      pedagogicalApproach: 'Inquiry-led conceptual learning, global contexts, and transdisciplinary thematic investigation.',
      curriculumBenchmark: ibData.curriculumBenchmark,
      practiceProblem: ibData.practiceProblem,
    },
    china: {
      systemKey: 'china',
      systemName: 'China Ministry of Education & Gaokao STEM Rigor',
      flag: '🇨🇳',
      badgeLabel: 'China MOE & Gaokao STEM',
      standardsCode: chinaData.standardsCode,
      learningObjective: chinaData.learningObjective,
      pedagogicalApproach: 'High-speed mental calculation, dual-variable constraint optimization, and rigorous algebraic and empirical proofs.',
      curriculumBenchmark: chinaData.curriculumBenchmark,
      practiceProblem: chinaData.practiceProblem,
    },
    japan: {
      systemKey: 'japan',
      systemName: 'Japan MEXT (文部科学省 学習指導要領)',
      flag: '🇯🇵',
      badgeLabel: 'Japan MEXT & Bansho',
      standardsCode: japanData.standardsCode,
      learningObjective: japanData.learningObjective,
      pedagogicalApproach: 'Bansho (板書) structured blackboard visual discovery, Kadaishiki problem-posing, and comparative peer reasoning.',
      curriculumBenchmark: japanData.curriculumBenchmark,
      practiceProblem: japanData.practiceProblem,
    },
    asia: {
      systemKey: 'asia',
      systemName: 'Asia (Singapore CPA Bar Model, Korea CSAT & India CBSE)',
      flag: '🌏',
      badgeLabel: 'Singapore CPA & Asia Parity',
      standardsCode: asiaData.standardsCode,
      learningObjective: asiaData.learningObjective,
      pedagogicalApproach: 'Concrete-Pictorial-Abstract (CPA) heuristic bar modeling, Indian CBSE/NCERT analytical derivations, and Korean CSAT logical deduction.',
      curriculumBenchmark: asiaData.curriculumBenchmark,
      practiceProblem: asiaData.practiceProblem,
    },
    christian: {
      systemKey: 'christian',
      systemName: 'Christian Education & Biblical Character Formation',
      flag: '✝️',
      badgeLabel: 'Scripture & Godly Life Skills',
      standardsCode: christianData.standardsCode,
      learningObjective: christianData.learningObjective,
      pedagogicalApproach: 'Grounded in Biblical worldview: honoring God as Creator, loving neighbor as oneself, diligence (Colossians 3:23), and community stewardship.',
      curriculumBenchmark: christianData.curriculumBenchmark,
      practiceProblem: christianData.practiceProblem,
    },
  };
}

function getUsaPracticeProblem(lesson: LessonModule, us: any) {
  const t = lesson.title.toLowerCase();
  if (t.includes('fraction') || lesson.category === 'math') {
    return {
      question: `A family recipe uses 3/4 cup of milk and 2/4 cup of clean water. Using a visual area model or number line, determine the total liquid volume in cups. State your answer as both an improper fraction and a mixed number.`,
      rubricOrMarkScheme: `CCSS.MATH.CONTENT.4.NF.B.3 Rubric: 1 point for showing visual bar/number line model; 1 point for improper fraction (5/4); 1 point for mixed number conversion (1 1/4 cups).`,
      solution: `Step 1: Add numerators over like denominator: 3/4 + 2/4 = (3+2)/4 = 5/4 cups.\nStep 2: Convert to mixed number: 5/4 = 4/4 + 1/4 = 1 and 1/4 cups.\nTotal volume is 5/4 cups or 1 1/4 cups.`,
      hint: `Recall that when denominators are identical, you combine the equal fractional parts directly.`
    };
  }
  if (t.includes('water') || t.includes('rain') || t.includes('solar') || lesson.category === 'science') {
    return {
      question: `Construct an evidence-based claim: How do differences in solar radiation absorption cause physical state changes in Earth's water cycle? Identify the independent and dependent variables in a simple home solar test.`,
      rubricOrMarkScheme: `NGSS MS-PS1-4 / HS-PS3-2 Rubric: 1 point for identifying energy transfer (thermal excitation causing evaporation); 1 point for identifying variables (Independent: surface color/insolation; Dependent: water temperature/evaporation rate).`,
      solution: `Claim: Solar radiation transfers photon energy to surface water molecules, increasing kinetic energy until liquid water overcomes intermolecular bonds and evaporates into water vapor.\nIndependent variable: Amount or type of incident sunlight (black vs white container).\nDependent variable: Rise in water temperature and condensation rate.`,
      hint: `Think about how heat affects the movement and speed of tiny water molecules.`
    };
  }
  return {
    question: `Based on "${lesson.title}", state the primary principle and describe one concrete test you can perform at home to verify its truth using common household items.`,
    rubricOrMarkScheme: `CCSS / NGSS 3D Inquiry Rubric: 1 pt for accurate statement of core law; 1 pt for testable experimental procedure; 1 pt for identifying observable result.`,
    solution: `Core Principle: ${lesson.mission.step1_learn.keyConcept}\nEmpirical Test: ${lesson.parentTeachingGuide.safeHomeActivity.title} (${lesson.parentTeachingGuide.safeHomeActivity.materials.join(', ')}).\nObservable Outcome: ${lesson.mission.step3_activity.whatChildLearns}.`,
    hint: `Remember to state what you observe with your own eyes and senses.`
  };
}

function getCambridgePracticeProblem(lesson: LessonModule, cambridge: any) {
  return {
    question: `[Cambridge CAIE Examination Style Question]\n(a) Define the term '${lesson.badgeName || 'Core Concept'}' in the context of ${cambridge.subject}.\n(b) Describe an experimental method to measure or verify this concept under fair test conditions. State two variables that must be kept constant. [4 marks]`,
    rubricOrMarkScheme: `Mark Scheme:\n• M1 (1 mark): Clear scientific/mathematical definition referencing first principles.\n• M2 (1 mark): Logical step-by-step description of experimental setup.\n• A1 (1 mark): Correct identification of two controlled variables (e.g., initial volume, container size, ambient temperature).\n• B1 (1 mark): Accurate concluding deduction.`,
    solution: `(a) Definition: ${lesson.mission.step1_learn.keyConcept}\n(b) Method: Follow the protocol of "${lesson.mission.step3_activity.gameOrExperimentName}". Keep container material and starting temperature constant to ensure fair test validity.`,
    hint: `Cambridge examiners award marks for explicit mention of fair testing and controlled variables.`
  };
}

function getIbCurriculumData(lesson: LessonModule) {
  const ageBand = lesson.ageBand;
  const programme = ageBand === '3-5' || ageBand === '6-8' || ageBand === '9-12' ? 'IB Primary Years Programme (PYP)' : ageBand === '13-16' ? 'IB Middle Years Programme (MYP)' : 'IB Diploma Programme (DP)';
  const theme = lesson.category === 'science' || lesson.category === 'technology' ? 'How the World Works • Scientific & Technical Innovation' : lesson.category === 'christian-education' || lesson.category === 'social-kindness' ? 'Who We Are • Values, Ethics & Character' : 'Sharing the Planet • Sustainable Community Enterprise';

  return {
    standardsCode: `${programme} • Transdisciplinary Theme: ${theme.split('•')[0].trim()}`,
    learningObjective: `Inquire into how "${lesson.title}" enables learners to reflect, understand causal systems, and take principled action in their local community.`,
    curriculumBenchmark: `Learner Profile Attribute: Inquirers, Knowledgeable, and Caring. Students demonstrate agency through hands-on inquiry and local service missions.`,
    practiceProblem: {
      question: `[IB Inquiry Task]\nHow does understanding "${lesson.title}" help us balance local community resource needs with environmental stewardship? Suggest one sustainable action your family can take this week.`,
      rubricOrMarkScheme: `IB Criterion C (Reflecting on the Impacts of Science/Knowledge): Level 7-8 requires evaluating real-world implications and proposing an ethical, practical community action.`,
      solution: `Understanding this principle allows families to optimize resources (e.g., solar energy, water filtration, fair budgeting) while minimizing waste. Sustainable action: ${lesson.communityMission?.title || 'Inspect and improve one household system with zero waste.'}`,
      hint: `Focus on how individual household actions create positive ripple effects across the entire neighborhood.`
    }
  };
}

function getChinaCurriculumData(lesson: LessonModule) {
  return {
    standardsCode: `中国教育部课程标准 (PRC MOE National Curriculum) • 高考 (Gaokao) STEM Benchmark`,
    learningObjective: `通过第一性原理掌握核心公式与因果约束，具备高速心算、双变量边界分析与严密推导能力。`,
    curriculumBenchmark: `Demonstrates high cognitive precision, rapid quantitative constraint verification, and zero algebraic error under Gaokao and Zhongkao examination conditions.`,
    practiceProblem: {
      question: `[中国中高考风格严谨推导题 / Gaokao Benchmark Problem]\n设系统边界条件如课文所述。若输入量按线性比例增加 25%，推导系统输出与效率比值。结合实际家庭场景，写出最简推导步骤。`,
      rubricOrMarkScheme: `评分标准: 1分: 列出状态方程; 2分: 消除多余变量进行不等式或等式化简; 2分: 给出最终解析解并结合实际生活意义。`,
      solution: `第一步: 确立核心关系式: ${lesson.mission.step1_learn.keyConcept}。\n第二步: 代入参数进行约束检验。\n第三步: 结论表明，在资源受限环境下，掌握第一性原理能以最低成本实现最佳生活与工程效能。`,
      hint: `注意观察题目的守恒定律与变量边界。`
    }
  };
}

function getJapanCurriculumData(lesson: LessonModule) {
  return {
    standardsCode: `日本文部科学省 (MEXT) 学習指導要領 • 板書 (Bansho) 視覚的発見学習`,
    learningObjective: `黒板 (Bansho) の幾何的・図式的配置を通じて自律的な課題設定 (Kadaishiki) を行い、現象の本質を直観的かつ論理的に洞察する。`,
    curriculumBenchmark: `MEXT Inquiry Standard: Formulates authentic questions, diagrams the physical visual mechanism, and compares alternative strategies to identify the most elegant proof.`,
    practiceProblem: {
      question: `[板書 (Bansho) ビジュアル課題研究 / MEXT Visual Inquiry]\nDraw a structured 3-part board diagram showing: 1. Everyday Observation (Compound/Home) ➜ 2. Hidden Mechanism ➜ 3. Community Benefit. Explain why visual diagrams reveal insights words alone cannot.`,
      rubricOrMarkScheme: `MEXT Rubric: Evaluated on clarity of visual schema, spatial relationship mapping, and logical continuity across the three panel stages.`,
      solution: `Panel 1: Draw daily phenomenon (e.g. sunlight on rooftop or water in clay pot).\nPanel 2: Diagram invisible mechanism (photons hitting silicon or multi-layer sand filtration).\nPanel 3: Diagram community prosperity (clean study light or pure disease-free drinking water).`,
      hint: `Use arrows and clear labels so someone without background knowledge can understand at a glance.`
    }
  };
}

function getAsiaCurriculumData(lesson: LessonModule) {
  return {
    standardsCode: `Singapore MOE CPA Bar Model • India CBSE/NCERT Class Standard • South Korea CSAT`,
    learningObjective: `Apply the Concrete-Pictorial-Abstract (CPA) heuristic progression to deconstruct abstract problems into clear bar models and rigorous analytical proofs.`,
    curriculumBenchmark: `Exemplifies Singapore Math mastery: transitioning seamlessly from concrete physical objects to visual pictorial bars, then to formal algebraic and symbolic notation.`,
    practiceProblem: {
      question: `[Singapore CPA Bar Model Challenge]\nRepresent the core relationship in "${lesson.title}" using a 2-part Singapore bar model. If the total quantity is 100 units and the known part is 60 units, calculate the unknown ratio and describe what physical entity each bar represents.`,
      rubricOrMarkScheme: `Singapore MOE Rubric: 1 mark for correct proportional bar diagram; 1 mark for calculating unknown part (100 - 60 = 40 units); 1 mark for simplifying ratio (3:2).`,
      solution: `Bar Diagram: Draw a rectangle of length 5 units. Shade 3 units (60%) for the known mechanism, and leave 2 units (40%) unshaded for the unknown or gain.\nRatio: Known : Unknown = 60 : 40 = 3 : 2.\nPhysical representation: Directly models the efficiency or conservation of the system.`,
      hint: `Start with the whole bar representing 100% or total capacity, then partition it into known blocks.`
    }
  };
}

function getChristianCurriculumData(lesson: LessonModule) {
  const scripture = lesson.keyScripture || 'Colossians 3:23 - "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."';
  const memoryVerse = lesson.memoryVerse || 'Proverbs 3:5-6 - "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."';

  return {
    standardsCode: `Christian Home Academy Framework • Biblical Worldview & Kingdom Stewardship`,
    learningObjective: `Understand that all true wisdom, natural laws, and creative innovation originate in God. Develop godly character, diligent work habits, and generous community service.`,
    curriculumBenchmark: `Colossians 3:23 & Proverbs 1:7 Benchmark: Demonstrates biblical integrity, reverence for God's creation, empathy for neighbors, and responsible stewardship.`,
    practiceProblem: {
      question: `[Biblical Wisdom & Godly Reflection]\nRead: "${scripture}".\nHow does mastering "${lesson.title}" help you serve God and love your neighbors in your village or town? Name one practical way you can use this skill to bless someone else.`,
      rubricOrMarkScheme: `Christian Character Evaluation: Assessed on genuine moral reflection, connecting scientific/practical truth with Christ-like service, and committing to an unselfish deed.`,
      solution: `God created the physical world with marvelous order and laws so that we could discover them, care for His creation, and lift others up. Practical action: Use this skill to assist parents at home, teach a younger sibling, or protect community clean water and health in Jesus' name.`,
      hint: `Remember Matthew 5:16: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven."`
    }
  };
}
