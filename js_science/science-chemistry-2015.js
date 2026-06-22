window.TEST_IDENTIFIER = 'science_chemistry_2015';

const sampleQuestions = [
  {
    id: 1,
    type: 'multiple-choice',
    text: 'A student measures the mass of a 1.00 g aluminum rod as 0.99 g. The best estimate of the percent error associated with this measurement is —',
    options: ['0.01%', '0.1%', '1%', '10%'],
    correctAnswer: 2,
    explanation: 'Percent error = |measured value - actual value| / actual value × 100% = |0.99 - 1.00| / 1.00 × 100% = 0.01 / 1.00 × 100% = 1%. The correct answer is C.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    text: 'The most efficient way to determine whether a reaction is an exothermic chemical reaction is to use —',
    options: ['an oxygen probe', 'a temperature probe', 'a pressure probe', 'a pH probe'],
    correctAnswer: 1,
    explanation: 'Exothermic reactions release heat energy, causing the temperature to increase. A temperature probe is the most efficient way to measure this temperature change. The correct answer is B.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    text: '<center>2Al(C₂H₃O₂)₃ + 3Ba(SO₄) → Al₂(SO₄)₃ + 3Ba(C₂H₃O₂)₂</center><br>Which type of chemical reaction does this equation represent?',
    options: ['Synthesis', 'Neutralization', 'Oxidation-reduction', 'Double-replacement'],
    correctAnswer: 3,
    explanation: 'In this reaction, the cations (Al³⁺ and Ba²⁺) and anions (C₂H₃O₂⁻ and SO₄²⁻) switch partners. This is characteristic of a double-replacement reaction. The correct answer is D.'
  },
  {
    id: 4,
    type: 'free-response',
    text: 'What is the oxidation number of an oxide ion?',
    correctKeywords: ['-2', '2-'],
    explanation: 'An oxide ion (O²⁻) has gained 2 electrons, giving it an oxidation number of -2. The correct answer is -2 or 2-.'
  },
  {
    id: 5,
    type: 'multiple-choice',
    text: 'What is the molarity of a solution with 0.2 moles of potassium permanganate (KMnO₄) dissolved in enough water to make a 500.0 mL solution?',
    options: ['0.0004 M', '0.1 M', '0.4 M', '100 M'],
    correctAnswer: 2,
    explanation: 'Molarity = moles of solute / liters of solution = 0.2 mol / 0.500 L = 0.4 M. The correct answer is C.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    text: 'When 92.0 g of ethanol (C₂H₅OH) are vaporized at its boiling point of 78.3°C, it requires 78.6 kJ of energy. What is the approximate molar heat of vaporization of ethanol in kJ/mol?',
    options: ['0.854', '1.17', '39.3', '78.3'],
    correctAnswer: 2,
    explanation: 'First, calculate the moles of ethanol: Molar mass of C₂H₅OH = 2(12) + 6(1) + 16 = 46 g/mol. Moles = 92.0 g / 46 g/mol = 2.0 mol. Molar heat of vaporization = 78.6 kJ / 2.0 mol = 39.3 kJ/mol. The correct answer is C.'
  },
  {
    id: 7,
    type: 'free-response',
    text: 'What is the density (in g/mL) of an aqueous solution that has a mass of 10.081 g and 12.5 mL? Your answer must use significant digits.',
    correctKeywords: ['0.806', '.806'],
    explanation: 'Density = mass / volume = 10.081 g / 12.5 mL = 0.80648 g/mL. With correct significant figures (3 sig figs based on 12.5 mL), the answer is 0.806 g/mL.'
  },
  {
    id: 8,
    type: 'multiple-choice',
    text: 'Which element has 16 neutrons, 15 protons, and 15 electrons?',
    options: ['Sulfur (S)', 'Phosphorus (P)', 'Gallium (Ga)', 'Zinc (Zn)'],
    correctAnswer: 1,
    explanation: 'The number of protons determines the element. An atom with 15 protons is phosphorus (P). The mass number would be 15 + 16 = 31, which corresponds to phosphorus-31. The correct answer is B.'
  },
  {
    id: 9,
    type: 'multiple-choice',
    text: '<center>Al(<i>s</i>) + 3AgNO₃(<i>aq</i>) → Al(NO₃)₃(<i>aq</i>) + 3Ag(<i>s</i>)</center><br>This equation represents which type of chemical reaction?',
    options: ['Single-replacement', 'Double-replacement', 'Decomposition', 'Synthesis'],
    correctAnswer: 0,
    explanation: 'In this reaction, Al(s) + 3AgNO₃(aq) → Al(NO₃)₃(aq) + 3Ag(s), aluminum replaces silver in the silver nitrate compound. This is a single-replacement reaction. The correct answer is A.'
  },
  {
    id: 10,
    type: 'multiple-choice',
    text: 'In the formula for barium chloride, (BaCl₂), barium (Ba) is written first because it is —',
    options: ['a single atom', 'a larger atom', 'the positive ion', 'the negative ion'],
    correctAnswer: 2,
    explanation: 'In chemical formulas for ionic compounds, the cation (positive ion) is always written first, followed by the anion (negative ion). Barium forms Ba²⁺ ions. The correct answer is C.'
  },
  {
    id: 11,
    type: 'multiple-choice',
    text: 'Which of these laboratory techniques is best to separate a solid from a liquid to recover the liquid?',
    options: ['Titration', 'Chromatography', 'Filtering', 'Vaporization'],
    correctAnswer: 2,
    explanation: 'Filtering is the best technique to separate a solid from a liquid while recovering the liquid. The liquid passes through the filter paper while the solid remains behind. The correct answer is C.'
  },
  {
    id: 12,
    type: 'multiple-choice',
    text: 'Which of these is NOT required to ensure that stock solutions are free of contamination?',
    options: ['Store all solutions in brown bottles', 'Do not place dropping pipettes in stock solution bottles', 'Never return excess chemicals to stock bottles', 'Replace tops on reagent bottles after use'],
    correctAnswer: 0,
    explanation: 'Brown bottles are used to protect light-sensitive chemicals, not to prevent contamination. Options B, C, and D are all important practices to prevent contamination of stock solutions. The correct answer is A.'
  },
  {
    id: 13,
    type: 'multiple-choice',
    text: 'Which of these values is most responsible for changing the boiling and freezing points of a solvent?',
    options: ['Molar mass of the solvent', 'Electronegativity of the solvent', 'Weight of the solute particles', 'Number of the solute particles'],
    correctAnswer: 3,
    explanation: 'Colligative properties (like boiling point elevation and freezing point depression) depend on the number of solute particles, not their identity or mass. The correct answer is D.'
  },
  {
    id: 14,
    type: 'multiple-choice',
    text: 'What is the name of the compound with the formula NH₄NO₃?',
    options: ['Ammonium nitrate', 'Nitrogen nitrate', 'Nitrogen hydrogen oxide', 'Ammonium nitrogen trioxide'],
    correctAnswer: 0,
    explanation: 'NH₄NO₃ contains the ammonium ion (NH₄⁺) and the nitrate ion (NO₃⁻). The compound name is ammonium nitrate. The correct answer is A.'
  },
  {
    id: 15,
    type: 'free-response',
    text: 'Calculate the number of moles of Li₃PO₄ in 2.2 L of a 0.60 M Li₃PO₄ solution.',
    correctKeywords: ['1.3', '1.32', '1.33', '1.4', '1', '1.', '2', '2.'],
    explanation: 'Moles = Molarity × Volume = 0.60 M × 2.2 L = 1.32 moles. The correct answer is approximately 1.3 moles.'
  },
  {
    id: 16,
    type: 'multiple-choice',
    text: '<center>N₂ + 3F₂ ⇌ 2NF₃</center><br>Equilibrium has been reached for the reaction shown. Which conclusion is correct?',
    options: [
      'The N₂ and F₂ together will form at a faster rate than the NF₃.',
      'The partial pressures of N₂, F₂, and NF₃ will stay constant.',
      'The NF₃ will form at a faster rate than the N₂ and F₂ together.',
      'The partial pressure of NF₃ will keep changing.'
    ],
    correctAnswer: 1,
    explanation: 'At equilibrium, the rate of the forward reaction equals the rate of the reverse reaction, so the concentrations (and partial pressures for gases) of all species remain constant. The correct answer is B.'
  },
  {
    id: 17,
    type: 'multiple-choice',
    text: 'If 89.6 joules of heat are needed to heat 20.0 grams of iron from 30.0°C to 40.0°C, what is the specific heat of the iron in J/(g·°C)?',
    options: ['0.448', '2.23', '8.96', '896'],
    correctAnswer: 0,
    explanation: 'Using q = mcΔT, we can solve for c: c = q / (mΔT) = 89.6 J / (20.0 g × 10.0°C) = 89.6 / 200 = 0.448 J/(g·°C). The correct answer is A.'
  },
  {
    id: 18,
    type: 'multiple-choice',
    text: '<img src="images/question_18.png" class="question-image"><br><br>Which of the four substances on this pH scale is slightly basic?',
    options: ['Calcium hydroxide', 'Human blood', 'Whole milk', 'Lemon juice'],
    correctAnswer: 1,
    explanation: 'A slightly basic substance has a pH just above 7. From the scale, human blood has a pH around 7.4, which is slightly basic. Calcium hydroxide (pH ~12) is strongly basic. The correct answer is B.'
  },
  {
    id: 19,
    type: 'multiple-choice',
    text: 'Which element will most likely form covalent bonds with fluorine?',
    options: ['Carbon', 'Potassium', 'Neon', 'Tin'],
    correctAnswer: 0,
    explanation: 'Covalent bonds form between nonmetals. Carbon is a nonmetal that will share electrons with fluorine to form covalent bonds (as in CF₄). Potassium is a metal that would form ionic bonds. Neon is a noble gas that doesn\'t form bonds. The correct answer is A.'
  },
  {
    id: 20,
    type: 'multiple-choice',
    text: 'The physical process of evaporation involves —',
    options: ['ion formation', 'electron sharing', 'transferring valence electrons', 'overcoming intermolecular forces'],
    correctAnswer: 3,
    explanation: 'Evaporation is a physical change where molecules gain enough energy to overcome intermolecular forces and escape from the liquid phase to the gas phase. No chemical bonds are broken or formed. The correct answer is D.'
  },
  {
    id: 21,
    type: 'multiple-choice',
    text: '<center>___C₂H₄ + ___O₂ → ___CO₂ + ___H₂O</center><br>How many moles of O₂ are in the chemical equation when balanced using the lowest whole numbers?',
    options: ['5', '4', '3', '2'],
    correctAnswer: 2,
    explanation: 'Balancing C₂H₄ + O₂ → CO₂ + H₂O: C₂H₄ + 3O₂ → 2CO₂ + 2H₂O. Checking: C: 2=2, H: 4=4, O: 6=6. The coefficient for O₂ is 3. The correct answer is C.'
  },
  {
    id: 22,
    type: 'multiple-choice',
    text: '<img src="images/question_22.png" class="question-image"><br><br>While English physicist J. J. Thomson was carrying out experiments on cathode rays, he was able to determine that the rays consisted of particles he called "corpuscles." These particles were later named —',
    options: ['protons', 'electrons', 'gamma rays', 'neutrons'],
    correctAnswer: 1,
    explanation: 'J. J. Thomson discovered electrons through his cathode ray tube experiments. He initially called them "corpuscles" but they were later named electrons. The correct answer is B.'
  },
  {
    id: 23,
    type: 'multiple-choice',
    text: 'In the Haber process, nitrogen (N₂) and hydrogen (H₂) are directly combined to form ammonia (NH₃). Which illustration contains the stoichiometric quantities of the reactants for this reaction?',
    options: [
    {url: 'images/question_23a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_23b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_23c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_23d.png', alt: 'Image failed to load. Please try again later.'}
    ],
    correctAnswer: 3,
    explanation: 'The balanced equation is N₂ + 3H₂ → 2NH₃. The stoichiometric ratio requires 1 mole of N₂ for every 3 moles of H₂. Option D shows 1 N₂ molecule (double circles) and 3 H₂ molecules (filled double circles). The correct answer is D.'
  },
  {
    id: 24,
    type: 'multiple-choice',
    text: '<img src="images/question_24.png" class="question-image"><br><br>A beaker of water is placed in a large sealed jar that is attached to a vacuum pump. As air is pumped out of the jar, the water begins to boil because —',
    options: [
      'the temperature of the water decreases as the surrounding pressure decreases',
      'the lower pressure inside the jar causes the water to contract',
      'the air pressure in the jar has been lowered until it is equal to the vapor pressure of the water',
      'the pressure on the water is insufficient to hold the hydrogen and oxygen atoms together, resulting in a decomposition reaction'
    ],
    correctAnswer: 2,
    explanation: 'Water boils when its vapor pressure equals the external pressure. By lowering the air pressure with a vacuum pump until it equals the vapor pressure of the water, the water will boil even at room temperature. The correct answer is C.'
  },
  {
    id: 25,
    type: 'multiple-select',
    text: 'According to the periodic table of the elements, which elements belong to the same period?',
    options: ['Aluminum', 'Germanium', 'Antimony', 'Arsenic', 'Gallium'],
    correctAnswer: [1, 3, 4],
    explanation: 'Germanium (Ge), Arsenic (As), and Gallium (Ga) are all in Period 4 of the periodic table. Aluminum is in Period 3, and Antimony is in Period 5. The correct answers are Germanium, Arsenic, and Gallium.'
  },
  {
    id: 26,
    type: 'multiple-choice',
    text: 'How many moles are in 2.04 × 10²⁴ molecules of H₂O?',
    options: ['0.295 mol', '3.39 mol', '1.13 × 10²⁴ mol', '1.44 × 10⁴⁸ mol'],
    correctAnswer: 1,
    explanation: 'Moles = number of molecules / Avogadro\'s number = (2.04 × 10²⁴) / (6.02 × 10²³) = 3.39 mol. The correct answer is B.'
  },
  {
    id: 27,
    type: 'multiple-choice',
    text: 'What is the name for FeCl₃ using the IUPAC nomenclature rules?',
    options: ['Iron chloride', 'Iron(II) chloride', 'Iron trichloride', 'Iron(III) chloride'],
    correctAnswer: 3,
    explanation: 'In FeCl₃, iron has an oxidation state of +3 (since each Cl is -1). Using IUPAC nomenclature for transition metals, the Roman numeral indicates the oxidation state: Iron(III) chloride. The correct answer is D.'
  },
  {
    id: 28,
    type: 'free-response',
    text: 'An expandable container of oxygen gas has a volume of 125 mL at a temperature of 25.0°C. What volume will the gas occupy at 55.0°C?',
    correctKeywords: ['137', '137.', '137.5', '137.6', '138', '138.', '140', '140.', '130', '130.'],
    explanation: 'Using Charles\'s Law: V₁/T₁ = V₂/T₂. Converting to Kelvin: T₁ = 25.0 + 273 = 298 K, T₂ = 55.0 + 273 = 328 K. V₂ = V₁ × T₂/T₁ = 125 mL × 328/298 = 137.6 mL ≈ 138 mL.'
  },
  {
    id: 29,
    type: 'multiple-choice',
    text: 'Which of these correctly describes how organic catalysts operate in biological reactions?',
    options: [
      'They are used up in the reactions.',
      'They lower the overall energy of the reactions.',
      'They lower the activation energy of the reactions.',
      'They keep the temperature of the reactions constant.'
    ],
    correctAnswer: 2,
    explanation: 'Enzymes (organic catalysts) work by lowering the activation energy required for a reaction to occur. They are not consumed in the reaction and do not change the overall energy of the reaction. The correct answer is C.'
  },
  {
    id: 30,
    type: 'multiple-choice',
    text: 'What volume will 35.9 g of hydrogen gas (H₂) occupy at STP?',
    options: ['399 L', '798 L', '804 L', '1,620 L'],
    correctAnswer: 0,
    explanation: 'Moles of H₂ = 35.9 g / 2.02 g/mol = 17.8 mol. At STP, 1 mole of gas occupies 22.4 L. Volume = 17.8 mol × 22.4 L/mol = 399 L. The correct answer is A.'
  },
  {
    id: 31,
    type: 'multiple-choice',
    text: '<center>___Ca(NO₃)₂ + H₃PO₄ → ___Ca₃(PO₄)₂ + ___HNO₃</center><br>When this equation is balanced, the coefficient in front of H₃PO₄ is —',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Balancing Ca(NO₃)₂ + H₃PO₄ → Ca₃(PO₄)₂ + HNO₃: 3Ca(NO₃)₂ + 2H₃PO₄ → Ca₃(PO₄)₂ + 6HNO₃. The coefficient in front of H₃PO₄ is 2. The correct answer is B.'
  },
  {
    id: 32,
    type: 'multiple-choice',
    text: 'Increasing the volume of a sealed container will cause the gas particles within the container to —',
    options: ['form a liquid', 'collide more frequently', 'increase in molecular attraction', 'exhibit lower pressure'],
    correctAnswer: 3,
    explanation: 'According to Boyle\'s Law, increasing volume at constant temperature causes pressure to decrease. With more space, gas particles collide with the walls less frequently, resulting in lower pressure. The correct answer is D.'
  },
  {
    id: 33,
    type: 'multiple-choice',
    text: '<img src="images/question_33.png" class="question-image"><br><br>Each of four groups of students determined and recorded the melting point of a solid compound. If the actual melting point is 113°C, which group had the best precision?',
    options: ['Group 1', 'Group 2', 'Group 3', 'Group 4'],
    correctAnswer: 3,
    explanation: 'Precision refers to how close measurements are to each other, not to the actual value. Group 4 has values of 110, 111, 111, 110 (range of 1°C), showing the best precision. The correct answer is D.'
  },
  {
    id: 34,
    type: 'multiple-choice',
    text: 'Consider any set of three adjacent elements in the same period on the periodic table. For which characteristic is the average for the three elements always equal to the value of the middle element?',
    options: ['Atomic number', 'Atomic mass', 'Number of neutrons', 'Number of isotopes'],
    correctAnswer: 0,
    explanation: 'Atomic numbers increase by 1 for each adjacent element. For three adjacent elements (n-1, n, n+1), the average is always n, the middle element\'s atomic number. The correct answer is A.'
  },
  {
    id: 35,
    type: 'multiple-choice',
    text: 'A substance has a molecular formula of C₈H₁₀N₄O₂. The empirical formula is —',
    options: ['C₂H₆N₂O', 'C₄H₅N₂O', 'C₉H₇N₃O', 'CHNO'],
    correctAnswer: 1,
    explanation: 'To find the empirical formula, divide all subscripts by the greatest common factor. GCF of 8, 10, 4, 2 is 2. C₈H₁₀N₄O₂ ÷ 2 = C₄H₅N₂O. The correct answer is B.'
  },
  {
    id: 36,
    type: 'drag-drop',
    text: 'Create the formula for diboron trioxide using the symbols provided.',
    options: ['B', 'b', 'O', 'o', '1', '2', '3', '4'],
    dropZones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'],
    correctAnswer: [0, 5, 2, 6],
    explanation: 'Diboron trioxide contains 2 boron atoms (di-) and 3 oxygen atoms (tri-). The correct formula is B₂O₃, written as B, 2, O, 3.'
  },
  {
    id: 37,
    type: 'multiple-choice',
    text: 'What is the name for the compound AlI₃?',
    options: ['Aluminum(I) iodide', 'Aluminum triiodide', 'Aluminum(III) iodide', 'Aluminum iodide'],
    correctAnswer: 3,
    explanation: 'Aluminum always has a +3 oxidation state, so Roman numerals are not needed. Since there\'s only one possible compound between Al and I, the name is simply aluminum iodide. The correct answer is D.'
  },
  {
    id: 38,
    type: 'multiple-choice',
    text: '<center>2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O</center><br>How many moles of carbon dioxide (CO₂) are produced when reacting 6.00 moles of butane (C₄H₁₀) in excess oxygen (O₂)?',
    options: ['1.50 mol', '24.0 mol', '66.0 mol', '1,060 mol'],
    correctAnswer: 1,
    explanation: 'From the equation 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O, the ratio of C₄H₁₀ to CO₂ is 2:8 or 1:4. Moles of CO₂ = 6.00 mol × (8/2) = 24.0 mol. The correct answer is B.'
  },
  {
    id: 39,
    type: 'multiple-choice',
    text: 'Which structure represents a nonpolar molecule?',
    options: [
    {url: 'images/question_39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39d.png', alt: 'Image failed to load. Please try again later.'}
    ],
    correctAnswer: 0,
    explanation: 'Structure A shows ethene (C₂H₄), which is a nonpolar molecule due to its symmetrical structure. The other options show molecules with polar bonds that don\'t cancel out (formaldehyde, ethanol, and chloromethane). The correct answer is A.'
  },
  {
    id: 40,
    type: 'multiple-choice',
    text: 'Using only one trial to collect data in an experiment —',
    options: [
      'makes it easier to determine a valid conclusion',
      'reduces the percent error in the results',
      'causes the conclusion to be less reliable',
      'requires data with more significant figures'
    ],
    correctAnswer: 2,
    explanation: 'Using only one trial provides no way to check for consistency or identify errors. Multiple trials increase reliability and allow for calculation of averages and error analysis. The correct answer is C.'
  },
  {
    id: 41,
    type: 'multiple-choice',
    text: 'A common product of acid-base neutralization reactions is —',
    options: ['hydrogen', 'water', 'carbon dioxide', 'oxygen'],
    correctAnswer: 1,
    explanation: 'Acid-base neutralization reactions produce a salt and water. For example: HCl + NaOH → NaCl + H₂O. Water is always a product. The correct answer is B.'
  },
  {
    id: 42,
    type: 'multiple-choice',
    text: '<img src="images/question_42.png" class="question-image"><br><br>Based on the information provided, which solution is a base and a weak electrolyte?',
    options: ['NaHCO₃', 'HClO', 'NaNO₃', 'CH₃NH₂'],
    correctAnswer: 3,
    explanation: 'A base has pH > 7, and a weak electrolyte produces a dim light bulb. CH₃NH₂ has pH 8.0 (basic) and a dim bulb (weak electrolyte). NaHCO₃ is basic but a strong electrolyte (bright). The correct answer is D.'
  },
  {
    id: 43,
    type: 'multiple-choice',
    text: '<img src="images/question_43.png" class="question-image"><br><br>What is the half-life of Americium-242?',
    options: ['11 hours', '16 hours', '32 hours', '64 hours'],
    correctAnswer: 1,
    explanation: 'Half-life is the time for half the sample to decay. Starting at 80 μg, half (40 μg) remains at about 16 hours on the graph. The correct answer is B.'
  },
  {
    id: 44,
    type: 'multiple-choice',
    text: '<img src="images/question_44.png" class="question-image"><br><br>Two electrons are shared equally in bromine (Br₂). What type of bond is represented between the bromine atoms in this Lewis structure?',
    options: ['Nonpolar covalent bond', 'Polar covalent bond', 'Metallic bond', 'Ionic bond'],
    correctAnswer: 0,
    explanation: 'When electrons are shared equally between two identical atoms, the bond is nonpolar covalent. In Br₂, both atoms have the same electronegativity, so the electron sharing is equal. The correct answer is A.'
  },
  {
    id: 45,
    type: 'multiple-choice',
    text: 'A student is studying the effects of several solutions on the prevention of the browning of apples. The student used solutions having different pH values and immersed three apple slices in equal volumes of each of the solutions. Which of these is the independent variable in this investigation?',
    options: ['pH of solution', 'Shade of brown', 'Number of apple slices', 'Volume of solutions'],
    correctAnswer: 0,
    explanation: 'The independent variable is what the experimenter deliberately changes. In this experiment, the pH of the solutions is varied while other factors (volume, number of slices) are controlled. The correct answer is A.'
  },
  {
    id: 46,
    type: 'multiple-choice',
    text: 'An experiment produced 0.10 g CO₂ with a volume of 0.056 L at STP. If the accepted density of CO₂ at STP is 1.96 g/L, what is the approximate percent error?',
    options: ['110%', '92%', '71%', '8.2%'],
    correctAnswer: 3,
    explanation: 'Experimental density = mass/volume = 0.10 g / 0.056 L = 1.79 g/L. Percent error = |accepted - experimental| / accepted × 100% = |1.96 - 1.79| / 1.96 × 100% = 0.17/1.96 × 100% = 8.7% ≈ 8.2%. The correct answer is D.'
  }
];

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

// Independent Results Manager for Non-Scaled Tests
(function() {
  'use strict';
  
  console.log(`Non-scaled test results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
  // Override the results manager to use test-specific storage
  function createTestSpecificResultsManager() {
    if (!window.resultsManager) {
      console.log('Results manager not found, creating test-specific fallback');
      return;
    }
    
    // Store reference to original methods
    const originalLoadAllResults = window.resultsManager.loadAllResults.bind(window.resultsManager);
    const originalSaveTestResult = window.resultsManager.saveTestResult.bind(window.resultsManager);
    
    // Override loadAllResults to use test-specific storage
    window.resultsManager.loadAllResults = function() {
      try {
        const stored = localStorage.getItem(TEST_STORAGE_KEY);
        this.results = stored ? JSON.parse(stored) : [];
        console.log(`Loaded ${this.results.length} results for ${window.TEST_IDENTIFIER}`);
        return this.results;
      } catch (error) {
        console.error('Error loading test-specific results:', error);
        return [];
      }
    };
    
    // Override saveTestResult to use test-specific storage
    window.resultsManager.saveTestResult = function(resultData) {
      // Enhanced result data with test identification (no scaled scores)
      const enhancedResultData = {
        ...resultData,
        testType: window.TEST_IDENTIFIER.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      };
      
      console.log(`Saving ${window.TEST_IDENTIFIER} result: ${enhancedResultData.correctAnswers}/${enhancedResultData.totalQuestions} correct (${enhancedResultData.score}%)`);
      
      // Store for immediate use
      window.tempEnhancedResult = enhancedResultData;
      
      // Create the result object
      const result = {
        id: 'result_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        score: enhancedResultData.score,
        totalQuestions: enhancedResultData.totalQuestions,
        correctAnswers: enhancedResultData.correctAnswers,
        timeSpent: enhancedResultData.timeSpent || 0,
        answers: enhancedResultData.answers || [],
        testType: enhancedResultData.testType
      };
      
      // Load current results, add new one, and save
      this.results = this.loadAllResults();
      this.results.unshift(result);
      
      // Keep only the most recent 50 results
      if (this.results.length > 50) {
        this.results = this.results.slice(0, 50);
      }
      
      // Save to test-specific storage
      try {
        localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(this.results));
        console.log('Test-specific result saved successfully:', result.id);
        
        // Trigger immediate enhancement after saving (for any custom enhancements)
        setTimeout(() => {
          console.log('Triggering immediate enhancement after save');
          enhanceResultsWithRetry();
        }, 10);
        
        return result;
      } catch (error) {
        console.error('Error saving test-specific result:', error);
        return null;
      }
    };
    
    // Reload results with the new system
    window.resultsManager.results = window.resultsManager.loadAllResults();
    
    // Override displayResults to ensure proper timing
    if (window.resultsManager.displayResults) {
      const originalDisplayResults = window.resultsManager.displayResults.bind(window.resultsManager);
      
      window.resultsManager.displayResults = function() {
        console.log('Results manager displayResults called');
        
        // Call original display
        const result = originalDisplayResults.apply(this, arguments);
        
        // Immediately attempt any custom enhancements
        setTimeout(() => {
          console.log('Post-displayResults enhancement trigger');
          enhanceResultsWithRetry();
        }, 10);
        
        return result;
      };
    }
  }
  
  // Enhanced finishTest override for immediate result processing
  function enhanceFinishTest() {
    // Wait for finishTest to be available
    const waitForFinishTest = () => {
      if (typeof window.finishTest === 'function') {
        const originalFinishTest = window.finishTest;
        
        window.finishTest = function() {
          console.log('Enhanced finishTest called - processing results immediately');
          
          // Get current test data
          const correctAnswers = window.currentTestAnswers ? 
            window.currentTestAnswers.filter(answer => answer.correct).length : 0;
          const totalQuestions = window.questions ? window.questions.length : 0;
          const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
          
          console.log(`Test completed: ${correctAnswers}/${totalQuestions} → ${score}%`);
          
          // Store enhanced data for immediate use
          window.tempEnhancedResult = {
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            testType: window.TEST_IDENTIFIER.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
          };
          
          // Call original finishTest
          const result = originalFinishTest.apply(this, arguments);
          
          // Immediately process results with multiple attempts
          setTimeout(() => enhanceResultsWithRetry(), 50);
          setTimeout(() => enhanceResultsWithRetry(), 150);
          setTimeout(() => enhanceResultsWithRetry(), 300);
          setTimeout(() => enhanceResultsWithRetry(), 500);
          
          return result;
        };
        
        console.log('finishTest function enhanced for immediate result processing');
      } else {
        // Retry if finishTest not yet available
        setTimeout(waitForFinishTest, 100);
      }
    };
    
    waitForFinishTest();
  }
  
  // Results enhancement with retry logic (for custom enhancements if needed)
  function enhanceResultsWithRetry(retryCount = 0) {
    const maxRetries = 10;
    
    console.log(`Attempting to enhance results (attempt ${retryCount + 1})`);
    
    // Check if we're on results page
    const resultsPage = document.getElementById('results');
    if (!resultsPage || !resultsPage.classList.contains('active')) {
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 100);
      }
      return;
    }
    
    const resultsSummary = document.getElementById('results-summary');
    if (!resultsSummary) {
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 100);
      }
      return;
    }
    
    // Check if results content is actually displayed
    const scoreCircle = resultsSummary.querySelector('.score-circle');
    if (!scoreCircle) {
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 100);
      }
      return;
    }
    
    // For non-scaled tests, we mainly just ensure the basic results are displayed
    // You can add custom enhancements here if needed for specific test types
    
    console.log('Basic results enhancement completed for non-scaled test');
    
    // Add any test-specific enhancements here
    // For example: addCustomTestInfo(), enhanceWithSpecialScoring(), etc.
    
    return true;
  }
  
  // MutationObserver to watch for results changes
  function setupResultsObserver() {
    const resultsSection = document.getElementById('results');
    if (!resultsSection) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
          // Check if results summary was updated
          const resultsSummary = document.getElementById('results-summary');
          if (resultsSummary) {
            const scoreCircle = resultsSummary.querySelector('.score-circle');
            if (scoreCircle) {
              console.log('Results detected via MutationObserver, enhancing...');
              setTimeout(() => enhanceResultsWithRetry(), 50);
            }
          }
        }
      });
    });
    
    observer.observe(resultsSection, {
      childList: true,
      subtree: true,
      attributes: false
    });
    
    console.log('Results MutationObserver setup complete');
  }
  
  // Legacy function compatibility
  function enhanceResultsDisplay() {
    return enhanceResultsWithRetry();
  }
  
  function checkAndEnhanceResults() {
    return enhanceResultsWithRetry();
  }
  
  function initialize() {
    console.log(`Initializing ${window.TEST_IDENTIFIER} independent results system`);
    
    createTestSpecificResultsManager();
    enhanceFinishTest();
    setupResultsObserver();
    
    // Backup polling system (reduced frequency since we have better detection now)
    const checkInterval = setInterval(() => {
      const resultsPage = document.getElementById('results');
      if (resultsPage && resultsPage.classList.contains('active')) {
        enhanceResultsWithRetry();
        clearInterval(checkInterval);
      }
    }, 1000);
    
    setTimeout(() => clearInterval(checkInterval), 20000);
    
    // Enhanced click listeners
    document.addEventListener('click', function(e) {
      if (e.target && (e.target.id === 'results-btn' || e.target.id === 'view-results')) {
        console.log('Navigation to results detected');
        setTimeout(() => enhanceResultsWithRetry(), 100);
        setTimeout(() => enhanceResultsWithRetry(), 300);
        setTimeout(() => enhanceResultsWithRetry(), 600);
      }
    });
    
    console.log(`${window.TEST_IDENTIFIER} independent results system initialized`);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();