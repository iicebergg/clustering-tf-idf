window.TEST_IDENTIFIER = 'math_geometry_2014';

const sampleQuestions = [
  {
    id: '1',
    text: 'Let p represent "Two angles are vertical angles."<br>Let q represent "The angles are congruent."<br><br>What is the symbolic representation of the following statement?<br><br><i>If two angles are congruent, then the angles are vertical angles.</i>',
    type: 'multiple-choice',
    options: [
      '<math><mi>q</mi><mo>→</mo><mi>p</mi></math>',
      '<math><mi>p</mi><mo>→</mo><mi>q</mi></math>',
      '<math><mo>∼</mo><mi>q</mi><mo>→</mo><mo>∼</mo><mi>p</mi></math>',
      '<math><mo>∼</mo><mi>p</mi><mo>→</mo><mo>∼</mo><mi>q</mi></math>'
    ],
    correctAnswer: 0,
    explanation: 'The statement "If two angles are congruent, then the angles are vertical angles" translates to q → p.'
  },
  {
    id: '2', 
    text: 'Beth is drawing the perpendicular bisector of <math><mover><mrow><mi>S</mi><mi>T</mi></mrow><mo>¯</mo></mover></math>.<br><br><img src="images/question_2.png" class="question-image" alt="Line segment ST with points W, X, Y, Z around it"><br><br>Which point is on the perpendicular bisector of <math><mover><mrow><mi>S</mi><mi>T</mi></mrow><mo>¯</mo></mover></math>?',
    type: 'multiple-choice',
    options: ['W', 'X', 'Y', 'Z'],
    correctAnswer: 1,
    explanation: 'Point X is equidistant from S and T, making it on the perpendicular bisector.'
  },
  {
    id: '3',
    text: 'In this figure, parallel lines a and b are intersected by line c.<br><br><img src="images/question_3.png" class="question-image" alt="Two parallel lines intersected by a transversal with angles labeled"><br><br>Which pair of angles is NOT supplementary?',
    type: 'multiple-choice',
    options: [
      '∠1 and ∠6',
      '∠3 and ∠8', 
      '∠2 and ∠7',
      '∠4 and ∠6'
    ],
    correctAnswer: 2,
    explanation: '∠2 and ∠7 are alternate exterior angles and are congruent, not supplementary.'
  },
  {
    id: '4',
    text: 'What type of construction is illustrated in the figure?<br><br><img src="images/question_4.png" class="question-image" alt="Construction diagram showing angle and segment"><br>',
    type: 'multiple-choice',
    options: [
      'The bisection of ∠D',
      'The bisection of <math><mover><mrow><mi>B</mi><mi>D</mi></mrow><mo>¯</mo></mover></math>',
      'An angle congruent to ∠D',
      'A line segment congruent to <math><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo>¯</mo></mover></math>'
    ],
    correctAnswer: 0,
    explanation: 'The construction shows the bisection of angle D.'
  },
  {
 id: '5',
 text: 'Which value for x is a counterexample to the following statement?<br><center>For all positive values of x, <math><msup><mi>x</mi><mn>3</mn></msup></math> ≥ x.</center>',
 type: 'multiple-choice',
 options: ['−1.0', '−0.1', '0.1', '1.0'],
 correctAnswer: 2,
 explanation: 'For small positive values between 0 and 1, cubing the number makes it smaller. For example, 0.1³ = 0.001, which is less than 0.1. This serves as a counterexample to the statement.'
 },
  {
    id: '6',
    text: 'An angle congruent to angle A is being constructed.<br><br><img src="images/question_6.png" class="question-image" alt="Angle construction diagram"><br><br>Which ray could be drawn to construct an angle congruent to ∠A?',
    type: 'multiple-choice',
    options: [
      '<math><mover><mrow><mi>B</mi><mi>C</mi></mrow><mo>→</mo></mover></math>',
      '<math><mover><mrow><mi>B</mi><mi>D</mi></mrow><mo>→</mo></mover></math>',
      '<math><mover><mrow><mi>B</mi><mi>E</mi></mrow><mo>→</mo></mover></math>',
      '<math><mover><mrow><mi>B</mi><mi>F</mi></mrow><mo>→</mo></mover></math>'
    ],
    correctAnswer: 0,
    explanation: 'Ray BC completes the construction of an angle congruent to angle A.'
  },
  {
    id: '7',
    text: 'Which diagram shows a pair of angle measures that prove lines a and b are parallel?',
    type: 'multiple-choice',
    options: [
    {url: 'images/question_7a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_7b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_7c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_7d.png', alt: 'Image failed to load. Please try again later.'}
    ],
    correctAnswer: 1,
    explanation: 'When corresponding angles are congruent or co-interior angles are supplementary, lines are parallel.'
  },
  {
    id: '8',
    text: 'Which is a valid conclusion that can be drawn from these statements?<br><br><i>If a quadrilateral is a rhombus, then it is a parallelogram.<br>If a quadrilateral is a parallelogram, then its opposite angles are congruent.</i>',
    type: 'multiple-choice',
    options: [
      'Every quadrilateral is a rhombus.',
      'Every parallelogram is a rhombus.',
      'Opposite angles of a rhombus are congruent.',
      'Opposite angles of a quadrilateral are congruent.'
    ],
    correctAnswer: 2,
    explanation: 'Using the transitive property: If a quadrilateral is a rhombus, then it is a parallelogram, and if it is a parallelogram, then its opposite angles are congruent. Therefore, opposite angles of a rhombus are congruent.'
  },
  {
    id: '9',
    text: 'This figure shows parallel stair railings through points M, N, P, and Q.<br><br><img src="images/question_9.png" class="question-image"><br><br>What is the value of x?',
    type: 'multiple-choice',
    options: ['29', '45', '61', '119'],
    correctAnswer: 2,
    explanation: 'Using properties of parallel lines cut by a transversal, co-interior angles are supplementary.'
  },
  {
    id: '10',
    text: 'Given: S(-1, 8) and T(7, -9)<br><br><img src="images/question_10.png" class="question-image" alt="Coordinate grid showing line ST"><br><br>What is the length of <math><mover><mrow><mi>S</mi><mi>T</mi></mrow><mo>¯</mo></mover></math>?',
    type: 'multiple-choice',
    options: [
      '<math><msqrt><mn>23</mn></msqrt></math>',
      '5',
      '<math><mn>5</mn><msqrt><mn>13</mn></msqrt></math>',
      '<math><msqrt><mn>353</mn></msqrt></math>'
    ],
    correctAnswer: 3,
    explanation: 'Using the distance formula: d = √[(7-(-1))² + (-9-8)²] = √[64 + 289] = √353'
  },
  {
 id: '6',
 text: 'The perimeter of △JKL is 200 centimeters.<br>• JK = 68 centimeters<br>• KL = 62 centimeters<br><br>Which statement is true about the interior angles of △JKL?',
 type: 'multiple-choice',
 options: ['m∠L is the greatest of the interior angles', 'm∠L is the least of the interior angles', 'm∠K is the greatest of the interior angles', 'm∠K is the least of the interior angles'],
 correctAnswer: 2,
 explanation: 'JL = 200 - 68 - 62 = 70 cm. Since JL is the longest side, the angle opposite to it (∠K) is the greatest angle in the triangle.'
 },
  {
    id: '12',
    text: 'Which best describes the construction in the diagram shown?<br><br><img src="images/question_12.png" class="question-image" alt="Construction showing perpendicular lines">',
    type: 'multiple-choice',
    options: [
      'The bisector of a line segment',
      'A line segment congruent to a given line segment',
      'A perpendicular to a given line at a point on the line',
      'A perpendicular to a given line from a point not on the line'
    ],
    correctAnswer: 3,
    explanation: 'The construction shows a perpendicular to a given line from a point not on the line.'
  },
  {
    id: '13',
    text: 'Which is the inverse of the following statement?<br><br><i>If the measure of an angle is 90°, then it is a right angle.</i>',
    type: 'multiple-choice',
    options: [
      'If the measure of an angle is not 90°, then it is not a right angle.',
      'If the measure of an angle is not 90°, then it is a right angle.',
      'If an angle is not a right angle, then its measure is not 90°.',
      'If an angle is a right angle, then its measure is 90°.'
    ],
    correctAnswer: 0,
    explanation: 'The inverse negates both the hypothesis and conclusion: ~p → ~q'
  },
  {
    id: '14',
    text: 'If TUVW is reflected across the line y = x, what are the coordinates of V′?<br><br><img src="images/question_14.png" class="question-image" alt="Quadrilateral TUVW on coordinate plane">',
    type: 'multiple-choice',
    options: [
      '(8, -3)',
      '(3, 8)',
      '(-3, -8)',
      '(-8, 3)'
    ],
    correctAnswer: 3,
    explanation: 'When reflecting across y = x, the coordinates (x, y) become (y, x). V is at (3, -8), so V′ is at (-8, 3).'
  },
  {
    id: '15',
    text: 'Lines r and s are cut by a transversal.<br><br><img src="images/question_15.png" class="question-image" alt="Two lines cut by transversal with angles marked"><br><br>What value of x proves that r ∥ s?',
    type: 'free-response',
    correctKeywords: ['43'],
    explanation: 'For lines to be parallel, corresponding angles must be equal. Setting (3x + 14)° = 143° gives x = 43.'
  },
  {
    id: '16',
    text: 'Given: P(5, 7) and T(-3, 3)<br><br>What is the slope of <math><mover><mrow><mi>P</mi><mi>T</mi></mrow><mo>→</mo></mover></math>?',
    type: 'multiple-choice',
    options: [
      '-2',
      '<math><mfrac><mrow><mo>-</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>',
      '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>',
      '2'
    ],
    correctAnswer: 2,
    explanation: 'Slope = (y₂ - y₁)/(x₂ - x₁) = (3 - 7)/(-3 - 5) = -4/-8 = 1/2'
  },
  {
    id: '17',
    text: 'For which polygon are both x = -1 and y = -2 lines of symmetry?',
    type: 'multiple-choice',
    options: [
    {url: 'images/question_17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_17d.png', alt: 'Image failed to load. Please try again later.'}
    ],
    correctAnswer: 2,
    explanation: 'Check which polygon has reflectional symmetry about both x = -1 and y = -2.'
  },
  {
    id: '18',
    text: 'The figure represents a ramp with handrails. Segments AB and DE are parallel to GH. Segments BC and EF are parallel to HJ. Segments AG and BH are parallel to CJ.<br><br><img src="images/question_18.png" class="question-image" alt="3D ramp diagram with labeled angles"><br>If m∠JCB = 115°, what is m∠CBA?',
    type: 'multiple-choice',
    options: ['65°', '90°', '115°', '155°'],
    correctAnswer: 3,
    explanation: 'Using properties of parallel lines and transversals in 3D space.'
  },
  {
    id: '19',
    text: 'Reuben attached a wire between two poles on a hill as shown.<br><br><img src="images/question_19.png" class="question-image" alt="Wire between poles forming triangle with 80 ft hypotenuse and 20° angle"><br><br>Which is closest to x, the distance between the two poles?',
    type: 'multiple-choice',
    options: ['27 ft', '29 ft', '60 ft', '75 ft'],
    correctAnswer: 3,
    explanation: 'Using trigonometry: x = 80 × cos(20°) ≈ 75 ft'
  },
  {
    id: '20',
    text: 'Triangles ABE, ADE, and CBE are shown on the coordinate grid, and all the vertices have coordinates that are integers.<br><br><img src="images/question_20.png" class="question-image" alt="Three triangles on coordinate grid"><br><br>Which statement is true?',
    type: 'multiple-choice',
    options: [
      'No two triangles are congruent.',
      'Only △ABE and △CBE are congruent.',
      'Only △ABE and △ADE are congruent.',
      'Triangle ABE, △ADE, and △CBE are all congruent.'
    ],
    correctAnswer: 3,
    explanation: 'All three triangles have the same side lengths when calculated using the distance formula.'
  },
  {
    id: '21',
    text: 'The lengths of two sides of a triangle are 24 inches and 43 inches. What is the range of possible lengths, in inches, for the third side, x, of this triangle?<br><br>___ < x < ___',
    type: 'drag-drop',
    options: ['9', '19', '20', '24', '30', '33.5', '67', '101.5'],
    dropZones: ['Minimum', 'Maximum'],
    correctAnswer: [1, 6],
    explanation: 'Triangle inequality theorem: The sum of any two sides must be greater than the third side. So 43 - 24 < x < 43 + 24, which gives 19 < x < 67.'
  },
  {
    id: '22',
    text: 'Which of the following sets of lengths can represent the measures of the sides of a right triangle?',
    type: 'multiple-choice',
    options: [
      '4, 5, 6',
      '5, 12, 15',
      '8, 10, 17',
      '20, 21, 29'
    ],
    correctAnswer: 3,
    explanation: 'Check using Pythagorean theorem: 20² + 21² = 400 + 441 = 841 = 29²'
  },
  {
    id: '23',
    text: 'Given the measures shown in the diagram, which two triangles are congruent?<br><br><img src="images/question_23.png" class="question-image" alt="Four triangles with angle and side measurements">',
    type: 'multiple-choice',
    options: [
      'Q and S',
      'R and T',
      'R and S',
      'Q and T'
    ],
    correctAnswer: 0,
    explanation: 'Triangles Q and S have two angles and included side equal (ASA congruence).'
  },
  {
    id: '24',
    text: 'Part of a marching band formed a triangle made with trumpet players on one side, clarinet players on one side, and flute players on the third side.<br><br>• The angle formed by the trumpet and flute players measured 45°.<br>• The angle formed by the flute and clarinet players measured 68°.<br><br>Which orders the sides of this triangle from least to greatest using the instrument names?',
    type: 'multiple-choice',
    options: [
      'Clarinet, trumpet, flute',
      'Clarinet, flute, trumpet',
      'Trumpet, flute, clarinet',
      'Flute, trumpet, clarinet'
    ],
    correctAnswer: 1,
    explanation: 'The third angle = 180° - 45° - 68° = 67°. Sides are ordered opposite to angles: smallest angle (45°) → clarinet, middle angle (67°) → flute, largest angle (68°) → trumpet.'
  },
  {
    id: '25',
    text: 'An equilateral triangle is folded in half.<br><br><img src="images/question_25.png" class="question-image" alt="Equilateral triangle with 14 cm base folded in half"><br><br>What is x, the height of the equilateral triangle?',
    type: 'multiple-choice',
    options: [
      '<math><mn>14</mn><msqrt><mn>3</mn></msqrt></math> cm',
      '14 cm',
      '<math><mn>7</mn><msqrt><mn>3</mn></msqrt></math> cm',
      '7 cm'
    ],
    correctAnswer: 2,
    explanation: 'For an equilateral triangle with side 14 cm, height = (side × √3)/2 = 14√3/2 = 7√3 cm'
  },
  {
    id: '26',
    text: 'Look at this triangle.<br><br><img src="images/question_26.png" class="question-image" alt="Triangle with sides 4 cm, 5.5 cm, 5.5 cm"><br><br>Which triangle is similar to the given triangle?',
    type: 'multiple-choice',
    options: [
    {url: 'images/question_26a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26d.png', alt: 'Image failed to load. Please try again later.'}
    ],
    correctAnswer: 0,
    explanation: 'Similar triangles have proportional sides. The ratio 3:4.125:4.125 equals 4:5.5:5.5 (ratio of 0.75).'
  },
  {
    id: '27',
    text: 'Given: Figure ABCD with diagonal AC<br>AB ≅ DC; BC ≅ AD<br><br>Complete the proof of △ABC ≅ △CDA by selecting reasons for the two statements.<br><br><img src="images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."><br><br>',
    type: 'drag-drop',
    options: ['Definition of congruent angles', 'Reflexive property', 'Side-Angle-Side (SAS) Theorem', 'Side-Side-Side (SSS) Theorem', 'Hypotenuse-Leg (HL) Theorem', 'Given'],
    dropZones: ['AC ≅ AC', '△ABC ≅ △CDA'],
    correctAnswer: [1, 3],
    explanation: 'AC ≅ AC by reflexive property, then all three sides are congruent, so SSS theorem applies.'
  },
  {
    id: '28',
    text: 'A spectator is viewing the six cars of a roller coaster as it travels down a hill at an amusement park.<br><br><img src="images/question_28.png" class="question-image" alt="Roller coaster at 38° angle, 20 ft horizontal"><br><br>Which is closest to the total length of the six cars?',
    type: 'multiple-choice',
    options: ['12.3 ft', '15.8 ft', '25.6 ft', '32.5 ft'],
    correctAnswer: 3,
    explanation: 'Using trigonometry: length = 20/cos(38°) ≈ 25.4 ft for the track, then account for 6 cars.'
  },
  {
    id: '29',
    text: 'Three triangles that do not overlap are shown on the coordinate grid. The coordinates of all vertices are integers.<br><br><img src="images/question_29.png" class="question-image" alt="Three triangles ABD, CBD, and ABE on coordinate grid"><br><br>Which statement is true?',
    type: 'multiple-choice',
    options: [
      '△ABD ~ △EBA',
      '△ABD ~ △DBC',
      '△CBD ~ △ABE',
      '△CBD ~ △EBA'
    ],
    correctAnswer: 2,
    explanation: 'Check angle measurements and side ratios for similarity.'
  },
  {
    id: '30',
    text: 'Using the information given, which congruence postulate or theorem can be used to prove that △PQR ≅ △TSR?<br><br><img src="images/question_30.png" class="question-image" alt="Two triangles with marked congruent parts">',
    type: 'multiple-choice',
    options: [
      'Side-Side-Side Postulate',
      'Side-Angle-Side Postulate',
      'Hypotenuse-Leg Theorem',
      'Angle-Angle-Side Theorem'
    ],
    correctAnswer: 3,
    explanation: 'The diagram shows two angles and a non-included side are congruent (AAS).'
  },
  {
    id: '31',
    text: 'Which could be the lengths of three sides of a triangle?',
    type: 'multiple-choice',
    options: [
      '6 cm, 14 cm, 8 cm',
      '9 cm, 11 cm, 21 cm',
      '8.5 cm, 17 cm, 10.6 cm',
      '14 cm, 4.7 cm, 4.7 cm'
    ],
    correctAnswer: 2,
    explanation: 'Check triangle inequality: the sum of any two sides must be greater than the third side.'
  },
  {
    id: '32',
    text: 'Given: Q lies on <math><mover><mrow><mi>P</mi><mi>R</mi></mrow><mo>¯</mo></mover></math> and S lies on <math><mover><mrow><mi>R</mi><mi>T</mi></mrow><mo>¯</mo></mover></math><br><br><img src="images/question_32.png" class="question-image" alt="Triangle with points Q and S"><br><br>Which condition proves △PRT ~ △QRS?',
    type: 'multiple-choice',
    options: [
      '∠PQS ≅ ∠TSQ',
      '∠PTR ≅ ∠TPR',
      '<math><mfrac><mrow><mi>Q</mi><mi>S</mi></mrow><mrow><mi>P</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>Q</mi><mi>R</mi></mrow><mrow><mi>S</mi><mi>R</mi></mrow></mfrac></math>',
      '<math><mfrac><mrow><mi>Q</mi><mi>R</mi></mrow><mrow><mi>P</mi><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>S</mi><mi>R</mi></mrow><mrow><mi>T</mi><mi>R</mi></mrow></mfrac></math>'
    ],
    correctAnswer: 3,
    explanation: 'For triangles to be similar by SAS, two sides must be proportional with included angle equal.'
  },
  {
    id: '33',
    text: 'Given: Parallelogram QRST where QR = 6x - 5 and RS = 4x + 13<br><br><img src="images/question_33.png" class="question-image" alt="Parallelogram QRST"><br><br>What value of x proves this parallelogram is a rhombus?',
    type: 'free-response',
    correctKeywords: ['9'],
    explanation: 'For a rhombus, all sides are equal. Setting 6x - 5 = 4x + 13 gives x = 9.'
  },
  {
    id: '34',
    text: 'The floor plan for a modern home is modeled by the composite of the regular nonagon and triangle shown.<br><br><img src="images/question_34.png" class="question-image" alt="Nonagon with attached triangle"><br><br>What is the measure of ∠JKL?',
    type: 'multiple-choice',
    options: ['150°', '160°', '165°', '175°'],
    correctAnswer: 1,
    explanation: 'Interior angle of regular nonagon = ((9-2) × 180°)/9 = 140°. The external angle at the junction needs calculation.'
  },
  {
    id: '35',
    text: 'Given: Circle P with center at (-4, 1)<br><br>Which equation could represent circle P?',
    type: 'multiple-choice',
    options: [
      '<math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>41</mn></math>',
      '<math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>41</mn></math>',
      '<math><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>41</mn></math>',
      '<math><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>41</mn></math>'
    ],
    correctAnswer: 2,
    explanation: 'Circle equation: (x - h)² + (y - k)² = r². With center (-4, 1): (x + 4)² + (y - 1)² = r²'
  },
  {
    id: '36',
    text: 'This container is composed of a right circular cylinder and a right circular cone.<br><br><img src="images/question_36.png" class="question-image" alt="Container with cylinder (24 ft diameter, 10 ft height) and cone (13 ft slant height)"><br><br>Which is closest to the surface area of the container?',
    type: 'multiple-choice',
    options: [
      '490 ft²',
      '754 ft²',
      '1,243 ft²',
      '1,696 ft²'
    ],
    correctAnswer: 3,
    explanation: 'Surface area = cylinder lateral + bottom + cone lateral = 2πrh + πr² + πrl'
  },
  {
    id: '37',
    text: 'Given: Circle J<br><br><img src="images/question_37.png" class="question-image" alt="Circle with angles marked"><br><br>What is the value of y?',
    type: 'multiple-choice',
    options: ['38', '50', '88', '92'],
    correctAnswer: 0,
    explanation: 'Using inscribed angle theorem and properties of circles.'
  },
  {
    id: '38',
    text: 'A cell phone box in the shape of a rectangular prism is shown. The height of the box is 4 cm.<br><br><img src="images/question_38.png" class="question-image" alt="Rectangular prism 18 cm × 13.5 cm × 4 cm"><br><br>The height of the original box will be increased by 3.5 centimeters. Which is closest to the total surface area of the new box?',
    type: 'multiple-choice',
    options: [
      '479 cm²',
      '707 cm²',
      '738 cm²',
      '959 cm²'
    ],
    correctAnswer: 3,
    explanation: 'New dimensions: 18 × 13.5 × 7.5. Surface area = 2(lw + lh + wh)'
  },
  {
    id: '39',
    text: 'Parallelogram ABCD is a rhombus with m∠EBC = 36°.<br><br><img src="images/question_39.png" class="question-image" alt="Rhombus with diagonals and angle marked"><br><br>What is the m∠DAE?',
    type: 'multiple-choice',
    options: ['36°', '54°', '108°', '144°'],
    correctAnswer: 1,
    explanation: 'In a rhombus, diagonals bisect angles. Using properties of rhombus angles.'
  },
  {
    id: '40',
    text: 'Circle O has a center at (-2, -2) and a diameter of 10 units.<br><br>Which point lies on circle O?',
    type: 'multiple-choice',
    options: [
      '(-6, -5)',
      '(-2, -2)',
      '(6, 4)',
      '(8, 8)'
    ],
    correctAnswer: 0,
    explanation: 'Check distance from center: √[(-6-(-2))² + (-5-(-2))²] = √[16 + 9] = √25 = 5 = radius'
  },
  {
    id: '41',
    text: 'An architect used this diagram to design a curved balcony. She drew a circle with a radius of 40 feet and a central angle of 70° to determine the length of railing needed for the balcony.<br><br><img src="images/question_41.png" class="question-image" alt="Circle sector with 70° angle and 40 ft radius"><br><br>Which is closest to the length of railing needed for the curved section of the balcony?',
    type: 'multiple-choice',
    options: ['24 ft', '49 ft', '251 ft', '977 ft'],
    correctAnswer: 1,
    explanation: 'Arc length = (θ/360°) × 2πr = (70/360) × 2π × 40 ≈ 49 ft'
  },
  {
    id: '42',
    text: 'A polygon is shown.<br><br><img src="images/question_42.png" class="question-image" alt="Hexagon with angle marked 150°"><br><br>What is the measure of ∠U?',
    type: 'multiple-choice',
    options: ['60°', '90°', '120°', '240°'],
    correctAnswer: 2,
    explanation: 'Sum of interior angles of hexagon = (6-2) × 180° = 720°. Using given angles to find ∠U.'
  },
  {
    id: '43',
    text: 'The volume of a cube is 64 cubic centimeters. What is the surface area of the cube?',
    type: 'multiple-choice',
    options: [
      '16 cm²',
      '96 cm²',
      '256 cm²',
      '384 cm²'
    ],
    correctAnswer: 1,
    explanation: 'If volume = 64, then side = ∛64 = 4 cm. Surface area = 6 × 4² = 96 cm²'
  },
  {
    id: '44',
    text: 'The diagonals of rectangle KLMN intersect at the point (2, 1). One of the vertices of rectangle KLMN is located at (-4, 5).<br><br><img src="images/question_44.png" class="question-image" alt="Coordinate grid"><br><br>Which of the following could be the location of another vertex of this rectangle?',
    type: 'multiple-choice',
    options: [
      '(8, -3)',
      '(3, -1)',
      '(-2, 3)',
      '(-10, 9)'
    ],
    correctAnswer: 0,
    explanation: 'Diagonals of a rectangle bisect each other. If one vertex is (-4, 5) and center is (2, 1), the opposite vertex is (8, -3).'
  },
  {
    id: '45',
    text: 'Given: Circle P<br><br><img src="images/question_45.png" class="question-image" alt="Circle with 5 cm radius and 130° sector"><br><br>Which is closest to the area of the shaded sector of circle P?',
    type: 'multiple-choice',
    options: [
      '11 cm²',
      '28 cm²',
      '50 cm²',
      '78 cm²'
    ],
    correctAnswer: 1,
    explanation: 'Area of sector = (θ/360°) × πr² = (130/360) × π × 25 ≈ 28 cm²'
  },
  {
    id: '46',
    text: 'The ratio of the lengths of the radii of two spheres is 3:5. What is the ratio of the volumes of these two spheres?',
    type: 'multiple-choice',
    options: [
      '3:5',
      '6:10',
      '9:25',
      '27:125'
    ],
    correctAnswer: 3,
    explanation: 'Volume ratio = (radius ratio)³ = 3³:5³ = 27:125'
  },
  {
    id: '47',
    text: 'This figure is composed of an isosceles trapezoid and a regular octagon.<br><br><img src="images/question_47.png" class="question-image" alt="Octagon with attached trapezoid"><br><br>What is the value of x?',
    type: 'multiple-choice',
    options: ['100', '125', '135', '190'],
    correctAnswer: 0,
    explanation: 'Interior angle of regular octagon = 135°. In isosceles trapezoid, base angles are equal.'
  },
  {
    id: '48',
    text: 'Plot the center of the circle defined by the equation <math><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mi>y</mi><mo>-</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup></math>.',
    type: 'point-select',
    image: {url: 'images/question_48.png', alt: 'Image failed to load. Please try again later.'},
    correctAnswer: { x: 0.285, y: 0.303 },
    explanation: 'From equation (x + 4)² + (y - 5)² = 9, the center is at (-4, 5).'
  },
  {
    id: '49',
    text: 'A rectangular pyramid is shown.<br><br><img src="images/question_49.png" class="question-image" alt="Rectangular pyramid with dimensions 12 cm × 9 cm × 8 cm"><br><br>What is the volume of the pyramid?',
    type: 'multiple-choice',
    options: [
      '864 cm³',
      '432 cm³',
      '288 cm³',
      '108 cm³'
    ],
    correctAnswer: 2,
    explanation: 'Volume = (1/3) × base area × height = (1/3) × 12 × 9 × 8 = 288 cm³'
  },
  {
    id: '50',
    text: 'A company is creating a new cylindrical container to replace its original cylindrical container.<br><br>• The new container will have 4 times the volume of the original container.<br>• The height of the new container will remain the same as the height of the original container.<br><br>The length of the radius of the new container will be—',
    type: 'multiple-choice',
    options: [
      '2 times the length of the radius of the original container',
      '4 times the length of the radius of the original container',
      '8 times the length of the radius of the original container',
      '16 times the length of the radius of the original container'
    ],
    correctAnswer: 0,
    explanation: 'Volume = πr²h. If volume is 4 times larger with same height, then r² is 4 times larger, so r is 2 times larger.'
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