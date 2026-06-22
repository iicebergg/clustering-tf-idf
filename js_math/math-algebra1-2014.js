window.TEST_IDENTIFIER = 'math_algebra1_2014';

const sampleQuestions = [
  {
    id: '1',
    text: 'Look at the graphed function shown.<br><img src="images/question_1.png" class="question-image" alt="Graph showing a parabola"><br>Based on the zeros, which best represents the graphed function?',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></math>',
      '<math><mi>y</mi><mo>=</mo><mo>(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></math>',
      '<math><mi>y</mi><mo>=</mo><mn>2</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></math>',
      '<math><mi>y</mi><mo>=</mo><mn>2</mn><mo>(</mo><mi>x</mi><mo>-</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></math>'
    ],
    correctAnswer: 3,
    explanation: 'The graph shows zeros at x = 1 and x = 3, which corresponds to factors (x - 1) and (x - 3).'
  },
  {
    id: '2',
    text: 'Travis would like to buy some toys to donate to charity. He plans to buy 9 dolls at d dollars each, 2 toy cars at c dollars each, and 3 train sets at t dollars each. Which expression represents the total cost, in dollars, of these items that Travis wants to buy?',
    type: 'multiple-choice',
    options: [
      '<math><mn>9</mn><mi>c</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>+</mo><mn>3</mn><mi>d</mi></math>',
      '<math><mn>9</mn><mi>d</mi><mo>-</mo><mn>2</mn><mi>c</mi><mo>-</mo><mn>3</mn><mi>t</mi></math>',
      '<math><mn>9</mn><mi>d</mi><mo>+</mo><mn>2</mn><mi>c</mi><mo>+</mo><mn>3</mn><mi>t</mi></math>',
      '<math><mn>9</mn><mi>c</mi><mo>-</mo><mn>2</mn><mi>t</mi><mo>-</mo><mn>3</mn><mi>d</mi></math>'
    ],
    correctAnswer: 2,
    explanation: 'Total cost = 9 dolls × d dollars + 2 cars × c dollars + 3 train sets × t dollars = 9d + 2c + 3t.'
  },
  {
    id: '3',
    text: 'Which expression is equivalent to <math><mfrac><mrow><mn>18</mn><msup><mi>c</mi><mn>8</mn></msup><msup><mi>d</mi><mn>9</mn></msup></mrow><mrow><mn>9</mn><msup><mi>c</mi><mn>3</mn></msup><msup><mi>d</mi><mn>6</mn></msup></mrow></mfrac></math>? Assume the denominator does not equal zero.',
    type: 'multiple-choice',
    options: [
      '<math><mn>2</mn><msup><mi>c</mi><mn>5</mn></msup><msup><mi>d</mi><mn>3</mn></msup></math>',
      '<math><mn>9</mn><msup><mi>c</mi><mn>5</mn></msup><msup><mi>d</mi><mn>3</mn></msup></math>',
      '<math><mn>2</mn><msup><mi>c</mi><mn>11</mn></msup><msup><mi>d</mi><mn>15</mn></msup></math>',
      '<math><mn>9</mn><msup><mi>c</mi><mn>11</mn></msup><msup><mi>d</mi><mn>15</mn></msup></math>'
    ],
    correctAnswer: 0,
    explanation: 'Simplifying: 18/9 = 2, c⁸/c³ = c⁵, d⁹/d⁶ = d³, so the answer is 2c⁵d³.'
  },
  {
    id: '4',
    text: 'Identify each expression that is a factor of this polynomial.<br><math><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>',
    type: 'multiple-select',
    options: [
      '<math><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></math>',
      '<math><mn>2</mn></math>',
      '<math><mi>x</mi><mo>-</mo><mn>1</mn></math>',
      '<math><mn>2</mn><mi>x</mi><mo>-</mo><mn>1</mn></math>',
      '<math><mn>4</mn><mi>x</mi><mo>-</mo><mn>1</mn></math>'
    ],
    correctAnswer: [0, 1, 2],
    explanation: '4x² - 2x - 2 = 2(2x² - x - 1) = 2(2x + 1)(x - 1), so the factors are 2, (2x + 1), and (x - 1).'
  },
  {
    id: '5',
    text: 'Look at this key.<br><img src="images/question_5.png" class="question-image" alt="Key showing squares for x², rectangles for x, and unit squares"><br>Which model correctly represents the product of <math><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></math> and <math><mo>(</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>)</mo></math>?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_5a.png', alt: 'Model A'},
      {url: 'images/question_5b.png', alt: 'Model B'},
      {url: 'images/question_5c.png', alt: 'Model C'},
      {url: 'images/question_5d.png', alt: 'Model D'}
    ],
    correctAnswer: 3,
    explanation: '(x + 3)(x + 4) = x² + 7x + 12, which requires 1 x²-square, 7 x-rectangles, and 12 unit squares.'
  },
  {
    id: '6',
    text: 'What is <math><msqrt><mn>18</mn></msqrt></math> written in simplest radical form?',
    type: 'multiple-choice',
    options: [
      '<math><mn>2</mn><msqrt><mn>3</mn></msqrt></math>',
      '<math><mn>3</mn><msqrt><mn>2</mn></msqrt></math>',
      '<math><mn>3</mn><msqrt><mn>6</mn></msqrt></math>',
      '<math><mn>6</mn><msqrt><mn>3</mn></msqrt></math>'
    ],
    correctAnswer: 1,
    explanation: '√18 = √(9 × 2) = √9 × √2 = 3√2.'
  },
  {
    id: '7',
    text: 'Which binomial is a factor of <math><msup><mi>c</mi><mn>2</mn></msup><mo>-</mo><mn>12</mn><mi>c</mi><mo>+</mo><mn>32</mn></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mi>c</mi><mo>-</mo><mn>12</mn></math>',
      '<math><mi>c</mi><mo>-</mo><mn>8</mn></math>',
      '<math><mi>c</mi><mo>-</mo><mn>2</mn></math>',
      '<math><mi>c</mi><mo>-</mo><mn>1</mn></math>'
    ],
    correctAnswer: 1,
    explanation: 'c² - 12c + 32 = (c - 4)(c - 8), so c - 8 is a factor.'
  },
  {
    id: '8',
    text: 'What is the value of this expression when <math><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></math>?<br><br><math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>2</mn></math>',
    type: 'multiple-choice',
    options: [
      '<math><mfrac><mn>16</mn><mn>3</mn></mfrac></math>',
      '<math><mfrac><mn>40</mn><mn>9</mn></mfrac></math>',
      '<math><mfrac><mn>4</mn><mn>3</mn></mfrac></math>',
      '<math><mfrac><mn>4</mn><mn>9</mn></mfrac></math>'
    ],
    correctAnswer: 3,
    explanation: 'Substituting x = 2/3: (2/3)² + 3(2/3) - 2 = 4/9 + 2 - 2 = 4/9.'
  },
  {
    id: '9',
    text: 'Which expression is equivalent to <math><msup><mrow><mo>(</mo><mn>3</mn><msup><mi>x</mi><mn>-4</mn></msup><mo>)</mo></mrow><mn>2</mn></msup><mo>(</mo><mn>5</mn><msup><mi>x</mi><mn>-2</mn></msup><mo>)</mo></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mfrac><mn>30</mn><msup><mi>x</mi><mn>10</mn></msup></mfrac></math>',
      '<math><mn>30</mn><msup><mi>x</mi><mn>14</mn></msup></math>',
      '<math><mfrac><mn>45</mn><msup><mi>x</mi><mn>10</mn></msup></mfrac></math>',
      '<math><mn>45</mn><msup><mi>x</mi><mn>14</mn></msup></math>'
    ],
    correctAnswer: 2,
    explanation: '(3x⁻⁴)² × (5x⁻²) = 9x⁻⁸ × 5x⁻² = 45x⁻¹⁰ = 45/x¹⁰.'
  },
  {
    id: '10',
    text: 'Which polynomial is equivalent to <math><mfrac><mrow><mn>18</mn><msup><mi>n</mi><mn>2</mn></msup><mo>-</mo><mn>9</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mn>3</mn><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mfrac></math>? Assume the divisor is not equal to zero.',
    type: 'multiple-choice',
    options: [
      '<math><mn>6</mn><mi>n</mi><mo>-</mo><mn>1</mn></math>',
      '<math><mn>6</mn><mi>n</mi><mo>+</mo><mn>1</mn></math>',
      '<math><mn>6</mn><msup><mi>n</mi><mn>2</mn></msup><mo>-</mo><mn>3</mn></math>',
      '<math><mn>18</mn><msup><mi>n</mi><mn>2</mn></msup><mo>-</mo><mn>3</mn></math>'
    ],
    correctAnswer: 0,
    explanation: 'Using polynomial division, (18n² - 9n + 1) ÷ (3n - 1) = 6n - 1.'
  },
  {
    id: '11',
    text: 'What is the value of this expression when <math><mi>a</mi><mo>=</mo><mn>64</mn></math> and <math><mi>b</mi><mo>=</mo><mo>-</mo><mn>5</mn></math>?<br><br><math><mo>-</mo><mn>2</mn><mroot><mi>a</mi><mn>3</mn></mroot><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></math>',
    type: 'free-response',
    correctKeywords: ['17'],
    explanation: '-2∛64 + (-5)² = -2(4) + 25 = -8 + 25 = 17.'
  },
  {
    id: '12',
    text: 'When <math><mi>n</mi><mo>></mo><mn>0</mn></math>, which expression is equivalent to <math><msqrt><mn>42</mn><msup><mi>n</mi><mn>9</mn></msup></msqrt></math> in simplest form?',
    type: 'multiple-choice',
    options: [
      '<math><msup><mi>n</mi><mn>3</mn></msup><msqrt><mn>42</mn></msqrt></math>',
      '<math><msup><mi>n</mi><mn>4</mn></msup><msqrt><mn>42</mn><mi>n</mi></msqrt></math>',
      '<math><mn>6</mn><msup><mi>n</mi><mn>3</mn></msup><msqrt><mn>7</mn></msqrt></math>',
      '<math><mn>6</mn><msup><mi>n</mi><mn>4</mn></msup><msqrt><mn>7</mn><mi>n</mi></msqrt></math>'
    ],
    correctAnswer: 1,
    explanation: '√(42n⁹) = √42 × √(n⁹) = n⁴√42.'
  },
  {
    id: '13',
    text: 'Look at the system of equations.<br><br><math><mi>y</mi><mo>=</mo><mo>-</mo><mi>x</mi><mo>+</mo><mn>2</mn></math><br><math><mn>7</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mo>-</mo><mn>1</mn></math><br><br>What is the value of x for the solution to this system of equations?',
    type: 'multiple-choice',
    options: ['-5', '-3', '3', '5'],
    correctAnswer: 1,
    explanation: 'Substituting y = -x + 2 into the second equation: 7x + 4(-x + 2) = -1, which gives x = -3.'
  },
  {
    id: '14',
    text: 'Pierre solved an inequality as shown.<br><br>Step 1: <math><mo>-</mo><mn>8</mn><mo>≥</mo><mi>n</mi><mo>+</mo><mn>3</mn></math><br>Step 2: <math><mo>-</mo><mn>8</mn><mo>+</mo><mo>(</mo><mo>-</mo><mn>3</mn><mo>)</mo><mo>≥</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo>+</mo><mo>(</mo><mo>-</mo><mn>3</mn><mo>)</mo></math><br>Step 3: <math><mo>-</mo><mn>11</mn><mo>≥</mo><mi>n</mi><mo>+</mo><mn>0</mn></math><br>Step 4: <math><mo>-</mo><mn>11</mn><mo>≥</mo><mi>n</mi></math><br><br>What property justifies the work between Step 3 and Step 4?',
    type: 'multiple-choice',
    options: [
      'Inverse property of addition',
      'Identity property of addition',
      'Addition property of inequality',
      'Commutative property of addition'
    ],
    correctAnswer: 1,
    explanation: 'n + 0 = n uses the identity property of addition.'
  },
  {
    id: '15',
    text: 'Which property of real numbers justifies the work shown?<br><br><math><mn>13</mn><mi>x</mi><mo>-</mo><mn>1</mn><mo>=</mo><mo>(</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>15</mn><mo>)</mo><mo>+</mo><mn>7</mn><mi>x</mi></math><br><math><mn>13</mn><mi>x</mi><mo>-</mo><mn>1</mn><mo>=</mo><mn>7</mn><mi>x</mi><mo>+</mo><mo>(</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>15</mn><mo>)</mo></math>',
    type: 'multiple-choice',
    options: [
      'Commutative property of addition',
      'Associative property of addition',
      'Identity property of addition',
      'Distributive property'
    ],
    correctAnswer: 0,
    explanation: 'The order of addition terms is changed, which uses the commutative property of addition.'
  },
  {
    id: '16',
    text: 'What is the slope of the line represented by <math><mfrac><mn>1</mn><mn>8</mn></mfrac><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>3</mn></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mo>-</mo><mfrac><mn>1</mn><mn>8</mn></mfrac></math>',
      '<math><mo>-</mo><mfrac><mn>1</mn><mn>24</mn></mfrac></math>',
      '<math><mfrac><mn>1</mn><mn>24</mn></mfrac></math>',
      '<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>'
    ],
    correctAnswer: 1,
    explanation: 'Solving for y: 3y = -1/8 x + 3, so y = -1/24 x + 1. The slope is -1/24.'
  },
  {
    id: '17',
    text: 'Solve for x:<br><br><math><mo>-</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>6</mn><mo><</mo><mi>x</mi><mo>-</mo><mn>6</mn></math>',
    type: 'free-response',
    correctKeywords: ['x > 4', 'x>4', '4 < x', '4<x'],
    explanation: '-2x + 6 < x - 6 → -3x < -12 → x > 4.'
  },
  {
    id: '18',
    text: 'Which graph best models <math><mi>y</mi><mo>≤</mo><mfrac><mn>2</mn><mn>7</mn></mfrac><mi>x</mi><mo>-</mo><mn>2</mn></math>?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_18a.png', alt: 'Graph A'},
      {url: 'images/question_18b.png', alt: 'Graph B'},
      {url: 'images/question_18c.png', alt: 'Graph C'},
      {url: 'images/question_18d.png', alt: 'Graph D'}
    ],
    correctAnswer: 2,
    explanation: 'Graph C shows the line y = 2/7 x - 2 with shading below (≤).'
  },
  {
    id: '19',
    text: 'Which inequality represents all the solutions of <math><mn>9</mn><mo>(</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>8</mn><mo>)</mo><mo><</mo><mn>4</mn><mo>(</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo>)</mo></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mi>x</mi><mo><</mo><mo>-</mo><mn>3</mn></math>',
      '<math><mi>x</mi><mo>></mo><mo>-</mo><mn>3</mn></math>',
      '<math><mi>x</mi><mo><</mo><mn>9</mn></math>',
      '<math><mi>x</mi><mo>></mo><mn>9</mn></math>'
    ],
    correctAnswer: 2,
    explanation: '36x - 72 < 24x + 36 → 12x < 108 → x < 9.'
  },
  {
    id: '20',
    text: 'A total of 243 adults and children are at a movie theater. There are 109 more adults than children in the theater. If a represents the number of adults and b represents the number of children, which system of equations could be used to find the number of adults and the number of children in the theater?',
    type: 'multiple-choice',
    options: [
      '<math><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>243</mn></mrow></math><br><math><mrow><mi>a</mi><mo>=</mo><mn>109</mn><mi>b</mi></mrow></math>',
      '<math><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>243</mn></mrow></math><br><math><mrow><mi>b</mi><mo>=</mo><mn>109</mn><mi>a</mi></mrow></math>',
      '<math><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>243</mn></mrow></math><br><math><mrow><mi>a</mi><mo>=</mo><mi>b</mi><mo>+</mo><mn>109</mn></mrow></math>',
      '<math><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>243</mn></mrow></math><br><math><mrow><mi>b</mi><mo>=</mo><mi>a</mi><mo>+</mo><mn>109</mn></mrow></math>'
    ],
    correctAnswer: 2,
    explanation: 'Total: a + b = 243. Adults are 109 more than children: a = b + 109.'
  },
  {
    id: '21',
    text: 'A system of inequalities is shown.<br><br><math><mi>y</mi><mo>></mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>+</mo><mn>1</mn></math><br><math><mi>y</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo>≤</mo><mn>6</mn></math><br><br>From the given points, select each point that is a solution to this system of inequalities.',
    type: 'multiple-select',
    options: ['(-1, -3)', '(1, 2)', '(2, 0)', '(4, 6)'],
    correctAnswer: [1],
    explanation: 'Only (1, 2) satisfies both inequalities: 2 > 1/2(1) + 1 ✓ and 2 + 3(1) ≤ 6 ✓.'
  },
  {
    id: '22',
    text: 'The graph of line n is shown.<br><img src="images/question_22.png" class="question-image" alt="Graph showing line n"><br>Which number is closest in value to the slope of line n?',
    type: 'multiple-choice',
    options: ['-4', '<math><mo>-</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '4'],
    correctAnswer: 2,
    explanation: 'From the graph, the line has a small positive slope of approximately 1/4.'
  },
  {
    id: '23',
    text: 'The formula shown can be used to find A, the amount of money Raul has in his savings account.<br><br><math><mi>A</mi><mo>=</mo><mi>P</mi><mo>+</mo><mi>P</mi><mi>r</mi><mi>t</mi></math><br><br>Raul wants to find r, the rate of interest his money earns. Which equation is correctly solved for r?',
    type: 'multiple-choice',
    options: [
      '<math><mi>r</mi><mo>=</mo><mi>A</mi><mi>P</mi><mi>t</mi></math>',
      '<math><mi>r</mi><mo>=</mo><mi>A</mi><mo>-</mo><mn>2</mn><mi>P</mi><mi>t</mi></math>',
      '<math><mi>r</mi><mo>=</mo><mfrac><mi>A</mi><mrow><mn>2</mn><mi>P</mi><mi>t</mi></mrow></mfrac></math>',
      '<math><mi>r</mi><mo>=</mo><mfrac><mrow><mi>A</mi><mo>-</mo><mi>P</mi></mrow><mrow><mi>P</mi><mi>t</mi></mrow></mfrac></math>'
    ],
    correctAnswer: 3,
    explanation: 'A = P + Prt → A - P = Prt → r = (A - P)/(Pt).'
  },
  {
    id: '24',
    text: 'What are the real roots of <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>10</mn><mo>=</mo><mn>0</mn></math>?',
    type: 'multiple-choice',
    options: [
      '2 and 5',
      '1 and 10',
      '-1 and -10',
      '-2 and -5'
    ],
    correctAnswer: 0,
    explanation: 'Factoring: (x - 2)(x - 5) = 0, so x = 2 or x = 5.'
  },
  {
    id: '25',
    text: 'A data set with an even number of data points is ordered from least to greatest. The middle two data points are represented by x₁ and x₂. This formula can be used to find the median of the data set.<br><br><math><mi>m</mi><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac></math><br><br>Which shows this formula solved for x₁?',
    type: 'multiple-choice',
    options: [
      '<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mo>-</mo><mfrac><msub><mi>x</mi><mn>2</mn></msub><mn>2</mn></mfrac></math>',
      '<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>m</mi><mo>-</mo><msub><mi>x</mi><mn>2</mn></msub></math>',
      '<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>m</mi><mo>-</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub></math>',
      '<math><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mo>-</mo><mn>2</mn><mo>-</mo><msub><mi>x</mi><mn>2</mn></msub></math>'
    ],
    correctAnswer: 1,
    explanation: 'm = (x₁ + x₂)/2 → 2m = x₁ + x₂ → x₁ = 2m - x₂.'
  },
  {
    id: '26',
    text: 'Which equation represents the horizontal line passing through (7, 5)?',
    type: 'multiple-choice',
    options: [
      '<math><mi>x</mi><mo>=</mo><mn>5</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>5</mn></math>',
      '<math><mi>x</mi><mo>=</mo><mn>7</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>7</mn></math>'
    ],
    correctAnswer: 1,
    explanation: 'A horizontal line has constant y-value. Since it passes through (7, 5), y = 5.'
  },
  {
    id: '27',
    text: 'The graph of <math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>8</mn></math> is shown.<br><img src="images/question_27.png" class="question-image" alt="Graph of parabola"><br>What are the solutions to <math><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>8</mn><mo>=</mo><mn>0</mn></math>?',
    type: 'multiple-choice',
    options: [
      '<math><mi>x</mi><mo>=</mo><mn>1</mn></math> and <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>9</mn></math>',
      '<math><mi>x</mi><mo>=</mo><mn>0</mn></math> and <math><mi>x</mi><mo>=</mo><mo>-</mo><mn>8</mn></math>',
      '<math><mi>x</mi><mo>=</mo><mo>-</mo><mn>2</mn></math> and <math><mi>x</mi><mo>=</mo><mn>4</mn></math>',
      '<math><mi>x</mi><mo>=</mo><mo>-</mo><mn>4</mn></math> and <math><mi>x</mi><mo>=</mo><mn>2</mn></math>'
    ],
    correctAnswer: 2,
    explanation: 'The x-intercepts of the parabola are at x = -2 and x = 4.'
  },
  {
    id: '28',
    text: 'What value of p will make this equation true?<br><br><math><mfrac><mrow><mn>6</mn><mi>p</mi><mo>+</mo><mn>4</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>p</mi><mo>-</mo><mn>8</mn></mrow><mn>3</mn></mfrac></math>',
    type: 'multiple-choice',
    options: ['-10', '-6', '2', '10'],
    correctAnswer: 3,
    explanation: 'Cross-multiply: 3(6p + 4) = 6(4p - 8) → 18p + 12 = 24p - 48 → p = 10.'
  },
  {
    id: '29',
    text: 'What is the slope of the line represented by this equation?<br><br><math><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>=</mo><mo>-</mo><mn>7</mn></math>',
    type: 'free-response',
    correctKeywords: ['-3/5', '-0.6'],
    explanation: 'Rewriting in slope-intercept form: 5y = -3x - 7, so y = -3/5 x - 7/5. Slope = -3/5.'
  },
  {
    id: '30',
    text: 'The length, l, of a rectangle is 3 times its width. The perimeter of the rectangle is greater than 48 centimeters. Which inequality expresses all the possible lengths, in centimeters, of the rectangle?',
    type: 'multiple-choice',
    options: [
      '<math><mi>l</mi><mo>></mo><mn>6</mn></math>',
      '<math><mi>l</mi><mo>></mo><mn>12</mn></math>',
      '<math><mi>l</mi><mo>></mo><mn>18</mn></math>',
      '<math><mi>l</mi><mo>></mo><mn>36</mn></math>'
    ],
    correctAnswer: 2,
    explanation: 'If l = 3w and P = 2l + 2w > 48, then 2(3w) + 2w > 48 → 8w > 48 → w > 6 → l > 18.'
  },
  {
    id: '31',
    text: 'These box-and-whisker plots summarize the percent of the workforce employed in agriculture, industry, and service jobs in twenty towns.<br><img src="images/question_31.png" class="question-image" alt="Box plots for workforce distribution"><br><br>Which statement is NOT true?',
    type: 'multiple-choice',
    options: [
      'Industry has the greatest median value.',
      'Service has the range with the least value.',
      'Agriculture has the range with the greatest value.',
      'Industry has the interquartile range with the least value.'
    ],
    correctAnswer: 0,
    explanation: 'From the box plots, Agriculture has a higher median than Industry.'
  },
  {
    id: '32',
    text: 'Using the ordered pairs shown, create a relation containing three ordered pairs with a domain of {-1, 2, 4}.',
    type: 'multiple-select',
    options: ['(-3, -1)', '(-1, 0)', '(-2, 2)', '(4, -2)', '(3, 4)', '(2, 3)'],
    correctAnswer: [1, 3, 5],
    explanation: 'Select ordered pairs with x-values of -1, 2, and 4 for the domain.'
  },
  {
    id: '33',
    text: 'This relation is an inverse variation.<br><br>{(-1, 8), (4, -2), (-2, 4)}<br><br>Which equation represents this relation?',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>2</mn><mi>x</mi></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mi>x</mi><mn>8</mn></mfrac></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mfrac><mn>8</mn><mi>x</mi></mfrac></math>'
    ],
    correctAnswer: 3,
    explanation: 'For inverse variation, xy = k. Testing: (-1)(8) = -8, (4)(-2) = -8, (-2)(4) = -8. So y = -8/x.'
  },
  {
    id: '34',
    text: 'Which equation represents the pattern shown in the table?<br><img src="images/question_34.png" class="question-image" alt="Table showing x and y values">',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>19</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mo>-</mo><mi>x</mi><mo>-</mo><mn>13</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mi>x</mi><mo>-</mo><mn>1</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>-</mo><mn>1</mn></math>'
    ],
    correctAnswer: 3,
    explanation: 'Testing with the given points shows y = 3x - 1 fits the pattern.'
  },
  {
    id: '35',
    text: 'The graph of the equation representing a direct variation passes through point A. Locate one additional point that is on the graph of this equation.<br><img src="images/question_35.png" class="question-image" alt="Coordinate grid with point A">',
    type: 'multiple-choice',
    options: [
      '(0, 6)',
      '(-3, -4)',
      '(1, 0)',
      '(4, 3)'
    ],
    correctAnswer: 1,
    explanation: 'Direct variation passes through the origin. Any point on the line through (0,0) and A is correct.'
  },
  {
    id: '36',
    text: 'Look at the data in this table.<br><img src="images/question_36.png" class="question-image" alt="Data table"><br>Which equation most closely represents the line of best fit for this data?',
    type: 'multiple-choice',
    options: [
      '<math><mi>y</mi><mo>=</mo><mn>1.77</mn><mi>x</mi><mo>+</mo><mn>0.13</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>0.56</mn><mi>x</mi><mo>-</mo><mn>0.05</mn></math>',
      '<math><mi>y</mi><mo>=</mo><mn>0.5</mn><mi>x</mi></math>',
      '<math><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi></math>'
    ],
    correctAnswer: 0,
    explanation: 'The line of best fit for the data is approximately y = 1.77x + 0.13.'
  },
  {
    id: '37',
    text: 'What is the range of this relation?<br><img src="images/question_37.png" class="question-image" alt="Graph showing discrete points">',
    type: 'multiple-choice',
    options: [
      '{x | -3 ≤ x ≤ 3}',
      '{-3, -2, 0, 3}',
      '{y | -4 ≤ y ≤ 4}',
      '{-4, 0, 2, 4}'
    ],
    correctAnswer: 3,
    explanation: 'The range consists of all y-values: {-4, 0, 2, 4}.'
  },
  {
    id: '38',
    text: 'Katie recorded the number of miles she drove for each of 9 days. She drove a different number of miles each day. This box-and-whisker plot summarizes her information.<br><img src="images/question_38.png" class="question-image" alt="Box plot of miles driven"><br>Katie drove 30 miles on each of two additional days. She redrew the box-and-whisker plot to include this data. Which statement must be true?',
    type: 'multiple-choice',
    options: [
      'The value of the range decreased.',
      'The value of the mean remained the same.',
      'The value of the median remained the same.',
      'The value of the interquartile range increased.'
    ],
    correctAnswer: 2,
    explanation: 'Adding 30 miles twice (near Q1) keeps the median at the same position.'
  },
  {
    id: '39',
    text: 'Two relationships are described.<br><br>Relationship S: Karen drove 160 miles in 4 hours, and then she drove 80 miles in 2 hours.<br><br>Relationship T: Vernon cooked 6 hamburgers in 10 minutes, and then he cooked 9 hamburgers in 15 minutes.<br><br>Which statement is true about these relationships?',
    type: 'multiple-choice',
    options: [
      'Neither relationship is a direct variation.',
      'Both relationships are direct variations.',
      'Only Relationship S is a direct variation.',
      'Only Relationship T is a direct variation.'
    ],
    correctAnswer: 1,
    explanation: 'Both have constant rates: S has 40 mph, T has 0.6 hamburgers/minute. Both are direct variations.'
  },
  {
    id: '40',
    text: 'Identify the y-intercept of the relation shown.',
    type: 'point-select',
    image: {url: 'images/question_40.png', alt: 'Image failed to load. Please try again later.'},
    correctAnswer: { x: 0.494, y: 0.289 }, 
    explanation: 'The parabola crosses the x-axis at (-1, 0) and (5, 0), and the y-axis at (0, 5).'
  },
  {
    id: '41',
    text: 'What is f(-8) for the function f?<br><br><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn>11</mn><mo>(</mo><mi>x</mi><mo>-</mo><mn>24</mn><mo>)</mo></mrow><mn>2</mn></mfrac></math>',
    type: 'multiple-choice',
    options: ['-56', '-88', '-176', '-352'],
    correctAnswer: 2,
    explanation: 'f(-8) = 11(-8 - 24)/2 = 11(-32)/2 = -352/2 = -176.'
  },
  {
    id: '42',
    text: 'The number of complaints a company received at the end of each of six weeks is shown in this table.<br><img src="images/question_42.png" class="question-image" alt="Table of complaints by week"><br>Based on the line of best fit, how many complaints should the company expect at the end of week 8?',
    type: 'multiple-choice',
    options: ['75', '91', '96', '110'],
    correctAnswer: 1,
    explanation: 'Following the decreasing trend, the company should expect approximately 91 complaints.'
  },
  {
    id: '43',
    text: 'The table shows the relationship between corresponding values of x and y.<br><img src="images/question_43.png" class="question-image" alt="Table with x and y values"><br>To determine the y-value —',
    type: 'multiple-choice',
    options: [
      'add 3 to the x-value',
      'subtract 3 from the x-value',
      'divide the x-value by 3 and add 1',
      'divide the x-value by 3 and subtract 1'
    ],
    correctAnswer: 3,
    explanation: 'The pattern shows y = x/3 - 1.'
  },
  {
    id: '44',
    text: 'Which relation is a function?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_44a.png', alt: 'Model A'},
      {url: 'images/question_44b.png', alt: 'Model B'},
      {url: 'images/question_44c.png', alt: 'Model C'},
      {url: 'images/question_44d.png', alt: 'Model D'}
    ],
    correctAnswer: 3,
    explanation: 'Only relation D passes the vertical line test for functions.'
  },
  {
    id: '45',
    text: 'The manager of a company recorded the number of hours his employees worked during each of two weeks. The following statistics were calculated.<br><br>• Week 1: The mean was 35 hours with a standard deviation of 1.5 hours.<br>• Week 2: The mean was 40 hours with a standard deviation of 2.0 hours.<br><br>The manager concluded that there was more variation in the number of hours worked for Week 2 than for Week 1. The manager\'s conclusion was —',
    type: 'multiple-choice',
    options: [
      'valid because the mean for Week 2 was greater than the mean for Week 1',
      'valid because the standard deviation for Week 2 was greater than the standard deviation for Week 1',
      'invalid because the mean for Week 1 was less than the mean for Week 2',
      'invalid because the standard deviation for Week 1 was less than the standard deviation for Week 2'
    ],
    correctAnswer: 1,
    explanation: 'Standard deviation measures variation. Week 2 has higher standard deviation (2.0 vs 1.5), so more variation.'
  },
  {
    id: '46',
    text: 'Which graph appears to show a relation that is NOT a function?',
    type: 'multiple-choice',
    options: [
      {url: 'images/question_46a.png', alt: 'Model A'},
      {url: 'images/question_46b.png', alt: 'Model B'},
      {url: 'images/question_46c.png', alt: 'Model C'},
      {url: 'images/question_46d.png', alt: 'Model D'}
    ],
    correctAnswer: 0,
    explanation: 'Graph A shows a vertical line, which fails the vertical line test for functions.'
  },
  {
    id: '47',
    text: 'A scientist dropped an object from a height of 200 feet. She recorded the height of the object in 0.5-second intervals. Her data is shown.<br><img src="images/question_47.png" class="question-image" alt="Table of time vs height"><br>Based on a quadratic model, which best approximates the height at 3 seconds?',
    type: 'multiple-choice',
    options: ['52 feet', '55 feet', '65 feet', '80 feet'],
    correctAnswer: 1,
    explanation: 'Following the quadratic pattern of free fall, the height at 3 seconds is approximately 55 feet.'
  },
  {
    id: '48',
    text: 'Look at function g.<br><br><math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>16</mn></math><br><br>Which set contains only the zeros of function g?',
    type: 'multiple-choice',
    options: [
      '<math><mo>{</mo><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>}</mo></math>',
      '<math><mo>{</mo><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>}</mo></math>',
      '{-16, 9}',
      '{-16, 0, 9}'
    ],
    correctAnswer: 0,
    explanation: '9x² - 16 = 0 → x² = 16/9 → x = ±4/3.'
  },
  {
    id: '49',
    text: 'Statistical information for a data set is given.<br><br>• The mean is 18.1.<br>• The z-score for 13.0 is -1.7.<br><br>What is the standard deviation for this data set?',
    type: 'multiple-choice',
    options: ['1.7', '3.0', '3.4', '5.1'],
    correctAnswer: 1,
    explanation: 'z = (x - μ)/σ → -1.7 = (13.0 - 18.1)/σ → σ = 5.1/1.7 = 3.0.'
  },
  {
    id: '50',
    text: 'A representation of a function is shown.<br><br><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn></math><br><br>What are the x-intercept and the y-intercept of this function?',
    type: 'multiple-choice',
    options: [
      'x-intercept of (0, -2) and y-intercept of <math><mo>(</mo><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo>)</mo></math>',
      'x-intercept of (0, 2) and y-intercept of <math><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo>)</mo></math>',
      'x-intercept of <math><mo>(</mo><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo>)</mo></math> and y-intercept of (0, -2)',
      'x-intercept of <math><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo>)</mo></math> and y-intercept of (0, 2)'
    ],
    correctAnswer: 3,
    explanation: 'For x-intercept, set y = 0: 0 = -4x + 2 → x = 1/2. For y-intercept, set x = 0: y = 2.'
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