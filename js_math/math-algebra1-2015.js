window.TEST_IDENTIFIER = 'math_algebra1_2015';

const sampleQuestions = [
  {
    id: '1',
    text: 'Which expression represents four less than half a number, n?',
    type: 'multiple-choice',
    options: [
      '<math><mn>4</mn><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>n</mi></math>',
      '<math><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>n</mi><mo>-</mo><mn>4</mn></math>',
      '<math><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>(</mo><mn>4</mn><mo>-</mo><mi>n</mi><mo>)</mo></math>',
      '<math><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>(</mo><mi>n</mi><mo>-</mo><mn>4</mn><mo>)</mo></math>'
    ],
    correctAnswer: 1,
    explanation: 'Four less than half a number means we take half the number (1/2)n and subtract 4 from it: (1/2)n - 4.'
  },
  {
    id: '2',
    text: 'Which of the following binomials is a factor of <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mi>x</mi><mo>-</mo><mn>6</mn></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mi>x</mi><mo>-</mo><mn>1</mn></math>',
      '<math><mi>x</mi><mo>-</mo><mn>2</mn></math>',
      '<math><mi>x</mi><mo>-</mo><mn>3</mn></math>',
      '<math><mi>x</mi><mo>-</mo><mn>6</mn></math>'
    ],
    correctAnswer: 2,
    explanation: 'Factoring x² - x - 6, we need two numbers that multiply to -6 and add to -1. These are -3 and 2, giving us (x - 3)(x + 2).'
  },
  {
    id: '3',
    text: 'Identify each expression that is in simplest radical form.',
    type: 'multiple-select',
    options: [
      '<math><mi>x</mi><msqrt><mn>50</mn><mi>y</mi></msqrt></math>',
      '<math><mn>64</mn><msqrt><mi>x</mi></msqrt></math>',
      '<math><mn>7</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><msqrt><mn>2</mn><mi>x</mi><mi>y</mi></msqrt></math>',
      '<math><msqrt><mn>12</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>4</mn></msup></msqrt></math>'
    ],
    correctAnswer: [1, 2],
    explanation: '64√x and 7x³y√(2xy) are in simplest radical form. The others can be simplified further.'
  },
  {
    id: '4',
    text: 'Which expression is equivalent to <math><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>(</mo><mn>30</mn><mi>x</mi><mo>-</mo><mn>24</mn><mi>y</mi><mo>)</mo><mo>-</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>(</mo><mn>32</mn><mi>x</mi><mo>-</mo><mn>16</mn><mi>y</mi><mo>)</mo></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mi>x</mi><mo>-</mo><mn>6</mn><mi>y</mi></math>',
      '<math><mi>x</mi><mo>-</mo><mn>2</mn><mi>y</mi></math>',
      '<math><mn>2</mn><mi>x</mi><mo>-</mo><mn>4</mn><mi>y</mi></math>',
      '<math><mn>9</mn><mi>x</mi><mo>-</mo><mn>6</mn><mi>y</mi></math>'
    ],
    correctAnswer: 1,
    explanation: 'Distributing: (1/6)(30x - 24y) - (1/8)(32x - 16y) = 5x - 4y - 4x + 2y = x - 2y.'
  },
  {
    id: '5',
    text: 'Which is equivalent to <math><mroot><mn>48</mn><mn>3</mn></mroot></math> in simplest form?',
    type: 'multiple-choice',
    options: [
      '<math><mn>2</mn><mroot><mn>6</mn><mn>3</mn></mroot></math>',
      '<math><mn>6</mn><mroot><mn>2</mn><mn>3</mn></mroot></math>',
      '<math><mn>16</mn></math>',
      '<math><mn>24</mn></math>'
    ],
    correctAnswer: 0,
    explanation: '48 = 8 × 6 = 2³ × 6, so ∛48 = ∛(2³ × 6) = 2∛6.'
  },
  {
    id: '6',
    text: 'What is the value of <math><msqrt><mn>128</mn></msqrt></math> in simplest radical form?',
    type: 'multiple-choice',
    options: [
      '<math><mn>8</mn><msqrt><mn>2</mn></msqrt></math>',
      '<math><mn>64</mn><msqrt><mn>2</mn></msqrt></math>',
      '<math><mn>4</mn><msqrt><mn>8</mn></msqrt></math>',
      '<math><mn>16</mn><msqrt><mn>8</mn></msqrt></math>'
    ],
    correctAnswer: 0,
    explanation: '128 = 64 × 2 = 8² × 2, so √128 = 8√2.'
  },
  {
    id: '7',
    text: 'Which polynomial is equivalent to this expression if <math><mi>n</mi><mo>≠</mo><mo>-</mo><mn>1</mn></math>?<br><br><math><mfrac><mrow><mn>3</mn><mo>+</mo><mi>n</mi><mo>-</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi></mrow></mfrac></math>',
    type: 'multiple-choice',
    options: [
      '<math><mn>2</mn><mi>n</mi><mo>-</mo><mn>3</mn></math>',
      '<math><mn>3</mn><mo>-</mo><mn>2</mn><mi>n</mi></math>',
      '<math><mn>3</mn><mo>-</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup></math>',
      '<math><mn>4</mn><mo>-</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup></math>'
    ],
    correctAnswer: 1,
    explanation: 'Using polynomial division or factoring, (3 + n - 2n²)/(1 + n) simplifies to 3 - 2n.'
  },
  {
    id: '8',
    text: 'Which is a factor of <math><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mo>-</mo><mn>5</mn><mi>n</mi><mo>-</mo><mn>42</mn></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mn>2</mn><mi>n</mi><mo>-</mo><mn>7</mn></math>',
      '<math><mn>2</mn><mi>n</mi><mo>-</mo><mn>6</mn></math>',
      '<math><mi>n</mi><mo>-</mo><mn>7</mn></math>',
      '<math><mi>n</mi><mo>-</mo><mn>6</mn></math>'
    ],
    correctAnswer: 3,
    explanation: '2n² - 5n - 42 = (2n + 7)(n - 6), so n - 6 is a factor.'
  },
  {
    id: '9',
    text: 'Which of the following is equivalent to <math><mfrac><mrow><msup><mi>a</mi><mn>12</mn></msup><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><msup><mi>a</mi><mn>3</mn></msup><msup><mi>b</mi><mn>6</mn></msup></mrow></mfrac></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mfrac><msup><mi>a</mi><mn>9</mn></msup><msup><mi>b</mi><mn>4</mn></msup></mfrac></math>',
      '<math><mfrac><msup><mi>b</mi><mn>4</mn></msup><msup><mi>a</mi><mn>9</mn></msup></mfrac></math>',
      '<math><mfrac><msup><mi>a</mi><mn>4</mn></msup><msup><mi>b</mi><mn>3</mn></msup></mfrac></math>',
      '<math><msup><mi>a</mi><mn>9</mn></msup><msup><mi>b</mi><mn>4</mn></msup></math>'
    ],
    correctAnswer: 0,
    explanation: 'Using exponent rules: a¹²/a³ = a⁹ and b²/b⁶ = b⁻⁴ = 1/b⁴, so the answer is a⁹/b⁴.'
  },
  {
    id: '10',
    text: 'What is the value of this expression when <math><mi>n</mi><mo>=</mo><mo>-</mo><mn>15</mn></math>?<br><br><math><mo>-</mo><mn>2</mn><mo>|</mo><mi>n</mi><mo>+</mo><mn>6</mn><mo>|</mo></math>',
    type: 'multiple-choice',
    options: ['-42', '-18', '18', '42'],
    correctAnswer: 1,
    explanation: 'When n = -15: -2|-15 + 6| = -2|−9| = -2(9) = -18.'
  },
  {
    id: '11',
    text: 'Which graph best represents the equation <math><mn>4</mn><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>=</mo><mo>-</mo><mn>20</mn></math>?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_11a.png', alt: 'Graph A'},
      {url: 'images/question_11b.png', alt: 'Graph B'},
      {url: 'images/question_11c.png', alt: 'Graph C'},
      {url: 'images/question_11d.png', alt: 'Graph D'}
    ],
    correctAnswer: 0,
    explanation: 'The x-intercept is (-5, 0) and y-intercept is (0, -4), matching graph A.'
  },
  {
    id: '12',
    text: 'A formula to find the angle measures of an isosceles triangle is shown.<br><br><math><mn>180</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi></math><br><br>Which equation can be used to find <math><mi>x</mi></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mi>x</mi><mo>=</mo><mfrac><mrow><mn>180</mn><mo>-</mo><mi>y</mi></mrow><mn>2</mn></mfrac></math>',
      '<math><mi>x</mi><mo>=</mo><mfrac><mrow><mn>180</mn><mo>+</mo><mi>y</mi></mrow><mn>2</mn></mfrac></math>',
      '<math><mi>x</mi><mo>=</mo><mn>90</mn><mo>-</mo><mi>y</mi></math>',
      '<math><mi>x</mi><mo>=</mo><mn>90</mn><mo>+</mo><mi>y</mi></math>'
    ],
    correctAnswer: 0,
    explanation: 'Solving for x: 180 = 2x + y → 180 - y = 2x → x = (180 - y)/2.'
  },
  {
    id: '13',
    text: 'Which equation represents the line that passes through the points <math><mo>(</mo><mo>-</mo><mn>4</mn><mo>,</mo><mn>4</mn><mo>)</mo></math> and <math><mo>(</mo><mn>8</mn><mo>,</mo><mo>-</mo><mn>2</mn><mo>)</mo></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>14</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>4</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mn>2</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>-</mo><mn>2</mn></math>'
    ],
    correctAnswer: 2,
    explanation: 'Slope = (-2 - 4)/(8 - (-4)) = -6/12 = -1/2. Using point-slope form with (8, -2): y = -1/2x + 2.'
  },
  {
    id: '14',
    text: 'For which system of inequalities is <math><mo>(</mo><mo>-</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>)</mo></math> a solution?',
    type: 'multiple-choice',
    options: [
      '<math><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mo>-</mo><mn>2</mn></mrow></math><br><math><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>&lt;</mo><mo>-</mo><mn>9</mn></mrow></math>',
      '<math><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mo>-</mo><mn>2</mn></mrow></math><br><math><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>≤</mo><mo>-</mo><mn>9</mn></mrow></math>',
      '<math><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>≤</mo><mo>-</mo><mn>2</mn></mrow></math><br><math><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>&lt;</mo><mo>-</mo><mn>9</mn></mrow></math>',
      '<math><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>≤</mo><mo>-</mo><mn>2</mn></mrow></math><br><math><mrow><mn>2</mn><mi>x</mi><mo>-</mo><mn>3</mn><mi>y</mi><mo>≤</mo><mo>-</mo><mn>9</mn></mrow></math>'
    ],
    correctAnswer: 3,
    explanation: 'Checking (-3, 1): x + y = -3 + 1 = -2 ≤ -2 ✓ and 2x - 3y = -6 - 3 = -9 ≤ -9 ✓.'
  },
  {
    id: '15',
    text: 'What is the solution to this system of equations?<br><br><math><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>22</mn></math><br><math><mn>7</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>12</mn></math>',
    type: 'multiple-choice',
    options: ['(3, 4)', '(2, -2)', '(1, 5)', '(-1, 6)'],
    correctAnswer: 2,
    explanation: 'Solving by substitution or elimination gives x = 1, y = 5.'
  },
  {
   id: '16',
   text: 'What is <math><mroot><mn>3,456</mn><mn>3</mn></mroot></math> in simplest form?',
   type: 'multiple-choice',
   options: [
    '<math><mn>2</mn><mroot><mn>12</mn><mn>3</mn></mroot></math>',
    '<math><mn>6</mn><mroot><mn>16</mn><mn>3</mn></mroot></math>',
    '<math><mn>12</mn><mroot><mn>2</mn><mn>3</mn></mroot></math>',
    '<math><mn>24</mn><mroot><mn>6</mn><mn>3</mn></mroot></math>'
   ],
   correctAnswer: 2,
   explanation: 'Simplify the expression by following algebraic rules for combining terms and simplifying radicals or fractions.'
 },
  {
    id: '17',
    text: 'What value of <math><mi>x</mi></math> makes this equation true?<br><br><math><mn>3</mn><mi>x</mi><mo>-</mo><mn>20</mn><mo>=</mo><mo>-</mo><mn>2</mn><mi>x</mi></math>',
    type: 'multiple-choice',
    options: ['-20', '-4', '4', '20'],
    correctAnswer: 2,
    explanation: '3x - 20 = -2x → 5x = 20 → x = 4.'
  },
  {
    id: '18',
    text: 'Which equation best represents line <math><mi>m</mi></math>?<br><img src="images/question_18.png" class="question-image" alt="Graph showing line m">',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>4</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>x</mi><mo>-</mo><mn>4</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>x</mi><mo>-</mo><mn>4</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>4</mn></math>'
    ],
    correctAnswer: 2,
    explanation: 'From the graph, the line has a positive slope of 1/3 and y-intercept of -4.'
  },
  {
    id: '19',
    text: 'Christopher incorrectly solved an inequality. Between which two consecutive steps did Christopher make a mistake?<br><br>Step 1: <math><mo>-</mo><mn>4</mn><mo>(</mo><mi>x</mi><mo>-</mo><mn>7</mn><mo>)</mo><mo>+</mo><mn>1</mn><mo>≤</mo><mo>-</mo><mn>3</mn></math><br>Step 2: <math><mo>-</mo><mn>4</mn><mo>(</mo><mi>x</mi><mo>-</mo><mn>7</mn><mo>)</mo><mo>≤</mo><mo>-</mo><mn>4</mn></math><br>Step 3: <math><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>28</mn><mo>≤</mo><mo>-</mo><mn>4</mn></math><br>Step 4: <math><mo>-</mo><mn>4</mn><mi>x</mi><mo>≤</mo><mo>-</mo><mn>32</mn></math><br>Step 5: <math><mi>x</mi><mo>≤</mo><mn>8</mn></math>',
    type: 'multiple-choice',
    options: ['Step 1 and Step 2', 'Step 2 and Step 3', 'Step 3 and Step 4', 'Step 4 and Step 5'],
    correctAnswer: 3,
    explanation: 'When dividing by -4 in Step 5, the inequality sign should reverse: x ≥ 8.'
  },
  {
    id: '20',
    text: 'Solve for <math><mi>n</mi></math>:<br><br><math><mfrac><mrow><mn>3</mn><mi>n</mi><mo>-</mo><mn>7</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>5</mn></mrow><mn>3</mn></mfrac></math>',
    type: 'free-response',
    correctKeywords: ['-17'],
    explanation: 'Cross-multiplying: 3(3n - 7) = 6(2n + 5) → 9n - 21 = 12n + 30 → -3n = 51 → n = -17.'
  },
  {
    id: '21',
    text: 'What values of <math><mi>x</mi></math> are solutions of <math><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>11</mn><mi>x</mi><mo>=</mo><mn>20</mn></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac></math> and 5',
      '<math><mo>-</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></math> and 4',
      '-4 and <math><mfrac><mn>5</mn><mn>3</mn></mfrac></math>',
      '-5 and <math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>'
    ],
    correctAnswer: 3,
    explanation: 'Rearranging: 3x² + 11x - 20 = 0. Factoring: (3x - 4)(x + 5) = 0. Solutions: x = 4/3 or x = -5.'
  },
  {
    id: '22',
    text: 'The graph of line <math><mi>l</mi></math> is shown. Which number is closest in value to the slope of line <math><mi>l</mi></math>?<br><img src="images/question_22.png" class="question-image" alt="Graph showing line l">',
    type: 'multiple-choice',
    options: ['-6', '<math><mo>-</mo><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '6'],
    correctAnswer: 1,
    explanation: 'From the graph, the line has a small negative slope, approximately -1/6.'
  },
  {
    id: '23',
    text: 'Based on the transitive property, complete this statement.<br><br>If <math><mn>2</mn><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>≥</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>4</mn></math> and <math><mn>3</mn><mi>x</mi><mo>-</mo><mn>4</mn><mo>≥</mo><mn>6</mn><mo>-</mo><mi>y</mi></math>, then <math><mn>2</mn><mo>(</mo><mi>y</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>≥</mo></math> __?__',
    type: 'free-response',
    correctKeywords: ['6-y', '6 - y', '-y + 6', '-y+6'],
    explanation: 'By the transitive property, if a ≥ b and b ≥ c, then a ≥ c. So 2(y - 3) ≥ 6 - y.'
  },
  {
    id: '24',
    text: 'This system of linear equations is graphed as shown. What is the solution to this system of equations?<br><br><math><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>2</mn></math><br><math><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mo>-</mo><mn>18</mn></math><br><img src="images/question_24.png" class="question-image" alt="Graph showing system of equations">',
    type: 'multiple-choice',
    options: ['(2, -6)', '(3, -7)', '(-6, 2)', '(-7, 3)'],
    correctAnswer: 1,
    explanation: 'From the graph, the lines intersect at (3, -7).'
  },
  {
    id: '25',
    text: 'Renee is going bowling.<br>• The cost per game is $2.50.<br>• Renee will need to rent a pair of bowling shoes for $1.50.<br>• She can spend up to $16.00 to bowl and rent a pair of shoes.<br><br>What is the maximum number of games that Renee can bowl?',
    type: 'multiple-choice',
    options: ['4', '5', '6', '9'],
    correctAnswer: 1,
    explanation: '1.50 + 2.50x ≤ 16.00 → 2.50x ≤ 14.50 → x ≤ 5.8. Maximum whole number is 5 games.'
  },
  {
    id: '26',
    text: 'Malik can spend no more than $24 to buy pecans and cashews. He will pay $6 per pound for pecans and $8 per pound for cashews. Which graph best represents the number of pounds of pecans and the number of pounds of cashews Malik can buy?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_26a.png', alt: 'Graph A'},
      {url: 'images/question_26b.png', alt: 'Graph B'},
      {url: 'images/question_26c.png', alt: 'Graph C'},
      {url: 'images/question_26d.png', alt: 'Graph D'}
    ],
    correctAnswer: 3,
    explanation: '6p + 8c ≤ 24, which simplifies to 3p + 4c ≤ 12. Graph D shows the correct shaded region.'
  },
  {
    id: '27',
    text: 'What is the quotient of <math><mo>(</mo><mn>15</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>8</mn><mi>x</mi><mo>−</mo><mn>12</mn><mo>)</mo></math> and <math><mo>(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></math>? Assume the denominator does not equal zero.',
    type: 'multiple-choice',
    options: [
      '<math><mn>45</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>6</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>52</mn><mi>x</mi><mo>−</mo><mn>24</mn></math>',
      '<math><mn>15</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>x</mi><mo>−</mo><mn>10</mn></math>',
      '<math><mn>5</mn><mi>x</mi><mo>+</mo><mn>6</mn></math>',
      '<math><mn>5</mn><mi>x</mi><mo>−</mo><mn>6</mn></math>'
    ],
    correctAnswer: 3,
    explanation: 'Using polynomial long division or factoring: (15x² - 8x - 12) ÷ (3x + 2). First multiply: 5x(3x + 2) = 15x² + 10x, subtract to get -18x - 12. Then -6(3x + 2) = -18x - 12. The quotient is 5x - 6.'
  },
  {
    id: '28',
    text: 'Which graph has exactly one x-intercept and one y-intercept?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_28a.png', alt: 'Graph A - horizontal line'},
      {url: 'images/question_28b.png', alt: 'Graph B - diagonal line'},
      {url: 'images/question_28c.png', alt: 'Graph C - line segment'},
      {url: 'images/question_28d.png', alt: 'Graph D - diagonal line'}
    ],
    correctAnswer: 1,
    explanation: 'Graph B shows a diagonal line that crosses both axes exactly once.'
  },
  {
    id: '29',
    text: 'Which equation best represents this data set?<br><br>{(-4, -4.8), (-3, -8.2), (-2, -9.1), (-1, -8.1), (0, -4.7), (1, 0.3)}',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mn>1.1</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4.2</mn><mi>x</mi><mo>+</mo><mn>4.9</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>1.1</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4.2</mn><mi>x</mi><mo>-</mo><mn>4.9</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>1.1</mn><mi>x</mi><mo>-</mo><mn>4.2</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>1.1</mn><mi>x</mi><mo>+</mo><mn>4.2</mn></math>'
    ],
    correctAnswer: 1,
    explanation: 'The quadratic equation y = 1.1x² + 4.2x - 4.9 best fits the given data points.'
  },
  {
    id: '30',
    text: 'A relationship between <math><mi>x</mi></math> and <math><mi>y</mi></math> is shown in this table.<br><img src="images/question_30.png" class="question-image" alt="Table showing values of x and y"><br>Which equation represents this relationship?',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>-</mo><mn>5</mn></math>',
      '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></math>',
      '<math><mi>y</mi><mo>=</mo><msup><mi>(x+1)</mi><mn>2</mn></msup></math>'
    ],
    correctAnswer: 2,
    explanation: 'Testing the values: y = x² + 1 fits all points in the table.'
  },
  {
    id: '31',
    text: 'Ms. Scott will pay $2,000 to have her house painted. The amount each painter earns, A, varies inversely for the number of painters, n, that will paint the house. Which equation best represents this situation?',
    type: 'multiple-choice',
    options: [
      '<math><mi>A</mi><mo>=</mo><mn>2,000</mn><mo>+</mo><mi>n</mi></math>',
      '<math><mn>2,000</mn><mo>=</mo><mi>A</mi><mo>+</mo><mi>n</mi></math>',
      '<math><mi>A</mi><mo>=</mo><mn>2,000</mn><mi>n</mi></math>',
      '<math><mn>2,000</mn><mo>=</mo><mi>A</mi><mi>n</mi></math>'
    ],
    correctAnswer: 3,
    explanation: 'For inverse variation, the product is constant: A × n = 2,000, or 2,000 = An.'
  },
  {
    id: '32',
    text: 'The following graph shows a relation. Which of the following best describes the range of this relation?<br><img src="images/question_32.png" class="question-image" alt="Graph showing V-shaped relation">',
    type: 'multiple-choice',
    options: [
      'All real numbers',
      'All real numbers between -10 and 10',
      'All real numbers less than or equal to -4',
      'All real numbers greater than or equal to -4'
    ],
    correctAnswer: 3,
    explanation: 'The V-shaped graph has a minimum at y = -4, so the range is y ≥ -4.'
  },
  {
    id: '33',
    text: 'Each of these data sets has a mean of 20.<br><br>Set 1: {18, 19, 20, 21, 22}<br>Set 2: {20, 20, 20, 20, 20}<br>Set 3: {16, 18, 20, 21, 25}<br><br>Order the sets from greatest standard deviation to least standard deviation.',
    type: 'drag-drop',
    options: ['Set 1', 'Set 2', 'Set 3'],
    dropZones: ['Greatest', '↓', 'Least'],
    correctAnswer: [2, 0, 1],
    explanation: 'Set 3 has the most spread, Set 1 has moderate spread, Set 2 has no spread (SD = 0).'
  },
  {
    id: '34',
    text: 'A study was conducted to determine the number of cars that passed through two intersections each day for 20 days. The results are summarized in these box-and-whisker plots. Which statement is best supported by these data?<br><img src="images/question_34.png" class="question-image" alt="Box plots">',
    type: 'multiple-choice',
    options: [
      'The range of the data for Intersection 2 is twice the range of the data for Intersection 1.',
      'The lower quartile for Intersection 1 is greater than the lower quartile for Intersection 2.',
      'The interquartile range for Intersection 1 is the same as the interquartile range for Intersection 2.',
      'The total number of vehicles that passed through Intersection 2 is greater than the total number of vehicles that passed through Intersection 1.'
    ],
    correctAnswer: 0,
    explanation: 'From the box plots, Intersection 2 has approximately twice the range of Intersection 1.'
  },
  {
    id: '35',
    text: 'Which of these functions has exactly two different zeros?',
    type: 'multiple-choice',
    options: [
      '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mi>x</mi><mo>+</mo><mn>4</mn></math>',
      '<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>-</mo><mn>10</mn></mrow><mn>3</mn></mfrac></math>',
      '<math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>4</mn></math>',
      '<math><mi>k</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>11</mn><mi>x</mi><mo>+</mo><mn>24</mn></math>'
    ],
    correctAnswer: 3,
    explanation: 'k(x) = x² + 11x + 24 = (x + 3)(x + 8) has two distinct zeros: x = -3 and x = -8.'
  },
  {
    id: '36',
    text: 'In which table does <math><mi>y</mi></math> vary directly with <math><mi>x</mi></math>?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_36a.png', alt: 'Table A'},
      {url: 'images/question_36b.png', alt: 'Table B'},
      {url: 'images/question_36c.png', alt: 'Table C'},
      {url: 'images/question_36d.png', alt: 'Table D'}
    ],
    correctAnswer: 1,
    explanation: 'In direct variation, y/x is constant. Table B shows y = 4x, a direct variation.'
  },
  {
    id: '37',
    text: 'Which equation could represent a graph with x-intercepts of (4, 0) and (-7, 0)?',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>28</mn></math>',
      '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>28</mn></math>',
      '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>28</mn></math>',
      '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>28</mn></math>'
    ],
    correctAnswer: 0,
    explanation: 'With x-intercepts at 4 and -7: y = (x - 4)(x + 7) = x² + 3x - 28.'
  },
  {
    id: '38',
    text: 'Which number is a zero of the function <math><mi>h</mi></math>?<br><br><math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>18</mn></math>',
    type: 'multiple-choice',
    options: ['-6', '-3', '0', '6'],
    correctAnswer: 0,
    explanation: 'Factoring: x² + 3x - 18 = (x + 6)(x - 3). The zeros are x = -6 and x = 3.'
  },
  {
    id: '39',
    text: 'Which of the following graphs appears to be a function?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_39a.png', alt: 'Table A'},
      {url: 'images/question_39b.png', alt: 'Table B'},
      {url: 'images/question_39c.png', alt: 'Table C'},
      {url: 'images/question_39d.png', alt: 'Table D'}
    ],
    correctAnswer: 1,
    explanation: 'Only B passes the vertical line test, indicating it is a function.'
  },
  {
    id: '40',
    text: 'If f(x) = (x - 3)² + 1, what is f(6)?',
    type: 'multiple-choice',
    options: ['-2', '7', '10', '16'],
    correctAnswer: 2,
    explanation: 'Plugging in x = 6: f(6) = (6 - 3)² + 1 = 9 + 1 = 10.'
  },
  {
    id: '41',
    text: 'Which number is NOT an element in the domain of this relation?<br><br><center>{(-2, 3), (0, 4), (1, 1), (6, 0)}</center>',
    type: 'multiple-choice',
    options: ['4', '1', '0', '-2'],
    correctAnswer: 0,
    explanation: 'The domain consists of the first elements of each ordered pair: {-2, 0, 1, 6}. The number 4 is not in the domain.'
  },
  {
    id: '42',
    text: '<center>{(-5, 9), (2, 31), (9, 143), (11, 151), (0, 42), (5, 97)}</center><br><br>Using the equation line of best fit, which number is the best prediction of the output when the input is 13?',
    type: 'multiple-choice',
    options: ['127', '159', '170', '178'],
    correctAnswer: 2,
    explanation: 'Using linear regression, the line of best fit predicts approximately 170 when x = 13.'
  },
  {
    id: '43',
    text: 'A data set has a mean of 720 and a standard deviation of 6. Which is closest to the z-score for an element of this data set with a value of 709?',
    type: 'multiple-choice',
    options: ['11.00', '1.83', '-11.00', '-1.83'],
    correctAnswer: 3,
    explanation: 'z = (X - μ) / σ = (709 - 720) / 6 = -11 / 6 ≈ -1.83.'
  },
  {
    id: '44',
    text: 'Ramon drew box-and-whisker plots to summarize the number of pages in each chapter of two books. The values of the interquartile ranges for these box-and-whisker plots are the same. Which box-and-whisker plots could represent these data?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_44a.png', alt: 'Image failed to load. Please try again later.'},
      {url: 'images/question_44b.png', alt: 'Image failed to load. Please try again later.'},
      {url: 'images/question_44c.png', alt: 'Image failed to load. Please try again later.'},
      {url: 'images/question_44d.png', alt: 'Image failed to load. Please try again later.'}
    ],
    correctAnswer: 0,
    explanation: 'Factoring: x² + 3x - 18 = (x + 6)(x - 3). The zeros are x = -6 and x = 3.'
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