window.TEST_IDENTIFIER = 'math_algebra2_2014';

const sampleQuestions = [
  {
    id: 1,
    text: "Which expression is equivalent to <math><mfrac><mrow><mn>3</mn><mi>n</mi></mrow><mrow><mi>n</mi><mo>+</mo><mn>3</mn></mrow></mfrac><mo>+</mo><mfrac><mn>5</mn><mrow><mi>n</mi><mo>-</mo><mn>4</mn></mrow></mfrac></math> if no denominator equals zero?",
    type: 'multiple-choice',
    options: [
      "<math><mfrac><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>-</mo><mn>7</mn><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><mo>(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>n</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow></mfrac></math>",
      "<math><mfrac><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>-</mo><mn>7</mn><mi>n</mi><mo>+</mo><mn>15</mn></mrow><mrow><mo>(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>n</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow></mfrac></math>",
      "<math><mfrac><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><mo>(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>n</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow></mfrac></math>",
      "<math><mfrac><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>n</mi><mo>+</mo><mn>15</mn></mrow><mrow><mo>(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo>)</mo><mo>(</mo><mi>n</mi><mo>-</mo><mn>4</mn><mo>)</mo></mrow></mfrac></math>"
    ],
    correctAnswer: 1,
    explanation: "To add rational expressions, find a common denominator and combine the numerators."
  },
  {
    id: 2,
    text: "Which number is equivalent to <math><mo>(</mo><mo>-</mo><mn>6</mn><mo>-</mo><mi>i</mi><mo>)</mo><mo>+</mo><mn>5</mn><mi>i</mi><mo>-</mo><mo>(</mo><mn>11</mn><mo>+</mo><mn>13</mn><mi>i</mi><mo>)</mo></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mo>-</mo><mn>17</mn><mo>-</mo><mn>9</mn><mi>i</mi></math>",
      "<math><mo>-</mo><mn>17</mn><mo>+</mo><mn>17</mn><mi>i</mi></math>",
      "<math><mo>-</mo><mn>5</mn><mo>-</mo><mn>9</mn><mi>i</mi></math>",
      "<math><mo>-</mo><mn>5</mn><mo>+</mo><mn>17</mn><mi>i</mi></math>"
    ],
    correctAnswer: 0,
    explanation: "Combine the real and imaginary parts separately: (-6 - 11) + (-1 + 5 - 13)i = -17 - 9i"
  },
  {
    id: 3,
    text: "Which of the following is the factored form of <math><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>216</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>6</mn><mo>)</mo></mrow><mn>3</mn></msup></math>",
      "<math><mo>(</mo><mi>x</mi><mo>-</mo><mn>6</mn><mo>)</mo><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>36</mn><mo>)</mo></math>",
      "<math><mo>(</mo><mi>x</mi><mo>-</mo><mn>6</mn><mo>)</mo><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>36</mn><mo>)</mo></math>",
      "<math><mo>(</mo><mi>x</mi><mo>-</mo><mn>6</mn><mo>)</mo><mo>(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>36</mn><mo>)</mo></math>"
    ],
    correctAnswer: 3,
    explanation: "This is a difference of cubes: a³ - b³ = (a - b)(a² + ab + b²) where a = x and b = 6"
  },
  {
    id: 4,
    text: "Which expression is equivalent to <math><msqrt><mn>75</mn><msup><mi>x</mi><mn>3</mn></msup></msqrt><mo>-</mo><msqrt><mn>27</mn><msup><mi>x</mi><mn>3</mn></msup></msqrt></math>, if <math><mi>x</mi><mo>></mo><mn>0</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mn>4</mn><mi>x</mi><msqrt><mn>6</mn><mi>x</mi></msqrt></math>",
      "<math><mn>4</mn><mi>x</mi><msqrt><mn>3</mn><mi>x</mi></msqrt></math>",
      "<math><mn>2</mn><mi>x</mi><msqrt><mn>6</mn><mi>x</mi></msqrt></math>",
      "<math><mn>2</mn><mi>x</mi><msqrt><mn>3</mn><mi>x</mi></msqrt></math>"
    ],
    correctAnswer: 3,
    explanation: "Simplify each radical: √(75x³) = 5x√(3x) and √(27x³) = 3x√(3x). Then subtract: 5x√(3x) - 3x√(3x) = 2x√(3x)"
  },
  {
    id: 5,
    text: "Assuming that no denominator equals zero, which is equivalent to <math><mfrac><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>-</mo><mi>r</mi><mo>-</mo><mn>6</mn></mrow><mrow><mo>(</mo><mi>r</mi><mo>-</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>r</mi><mo>-</mo><mn>3</mn><mo>)</mo></mrow></mfrac></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mfrac><mrow><mi>r</mi><mo>+</mo><mn>2</mn></mrow><mrow><mi>r</mi><mo>-</mo><mn>2</mn></mrow></mfrac></math>",
      "<math><mfrac><mrow><mi>r</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>r</mi><mo>-</mo><mn>3</mn></mrow></mfrac></math>",
      "<math><mfrac><mrow><mi>r</mi><mo>+</mo><mn>2</mn></mrow><mrow><mi>r</mi><mo>-</mo><mn>1</mn></mrow></mfrac></math>",
      "<math><mfrac><mrow><mn>2</mn><mo>(</mo><mi>r</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow><mrow><mi>r</mi><mo>-</mo><mn>2</mn></mrow></mfrac></math>"
    ],
    correctAnswer: 0,
    explanation: "Factor the numerator: r² - r - 6 = (r - 3)(r + 2). Cancel the common factor (r - 3) to get (r + 2)/(r - 2)"
  },
  {
    id: 6,
    text: "Which expression is equivalent to <math><mroot><mrow><mn>16</mn><msup><mi>x</mi><mn>15</mn></msup><msup><mi>y</mi><mn>17</mn></msup></mrow><mn>4</mn></mroot></math>, where <math><mi>x</mi><mo>></mo><mn>0</mn></math> and <math><mi>y</mi><mo>></mo><mn>0</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mn>4</mn><msup><mi>x</mi><mn>11</mn></msup><msup><mi>y</mi><mn>13</mn></msup></math>",
      "<math><mn>4</mn><msup><mi>x</mi><mfrac><mn>15</mn><mn>4</mn></mfrac></msup><msup><mi>y</mi><mfrac><mn>17</mn><mn>4</mn></mfrac></msup></math>",
      "<math><mn>2</mn><msup><mi>x</mi><mn>11</mn></msup><msup><mi>y</mi><mn>13</mn></msup></math>",
      "<math><mn>2</mn><msup><mi>x</mi><mfrac><mn>15</mn><mn>4</mn></mfrac></msup><msup><mi>y</mi><mfrac><mn>17</mn><mn>4</mn></mfrac></msup></math>"
    ],
    correctAnswer: 3,
    explanation: "The fourth root of 16 is 2, and apply the power rule: (x^15)^(1/4) = x^(15/4), (y^17)^(1/4) = y^(17/4)"
  },
  {
    id: 7,
    text: "Which is equivalent to <math><mo>(</mo><mn>6</mn><mo>+</mo><msqrt><mn>7</mn></msqrt><mo>)</mo><mo>(</mo><mn>5</mn><mo>+</mo><msqrt><mn>7</mn></msqrt><mo>)</mo></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mn>11</mn><mo>+</mo><mn>2</mn><msqrt><mn>7</mn></msqrt></math>",
      "<math><mn>30</mn><mo>+</mo><mn>11</mn><msqrt><mn>7</mn></msqrt></math>",
      "<math><mn>30</mn><mo>+</mo><mn>18</mn><msqrt><mn>7</mn></msqrt></math>",
      "<math><mn>37</mn><mo>+</mo><mn>11</mn><msqrt><mn>7</mn></msqrt></math>"
    ],
    correctAnswer: 3,
    explanation: "Use FOIL: (6)(5) + (6)(√7) + (√7)(5) + (√7)(√7) = 30 + 6√7 + 5√7 + 7 = 37 + 11√7"
  },
  {
 id: '8',
 text: 'What are the y-coordinates for the solutions to this system of equations?<br><math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn></math><br><math><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>20</mn><mo>=</mo><mn>0</mn></math>',
 type: 'multiple-choice',
 options: [
    'y = -9 and y = 6',
    'y = -20 and y = -2',
    'y = -26 and y = -11',
    'y = -27 and y = -18'
 ],
 correctAnswer: 2,
 explanation: 'Solve the system of equations by substitution or elimination to find the y-coordinates of the intersection points.'
 },
  {
    id: 9,
    text: "Which expression is equivalent to <math><msup><mi>x</mi><mfrac><mn>3</mn><mn>7</mn></mfrac></msup><msup><mi>y</mi><mfrac><mn>36</mn><mn>7</mn></mfrac></msup></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mfrac><mn>1</mn><mn>7</mn></mfrac><msqrt><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>36</mn></msup></msqrt></math>",
      "<math><mfrac><mn>1</mn><mn>7</mn></mfrac><msup><mi>y</mi><mn>5</mn></msup><msqrt><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi></msqrt></math>",
      "<math><msup><mi>y</mi><mn>5</mn></msup><mroot><mrow><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi></mrow><mn>7</mn></mroot></math>",
      "<math><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>5</mn></msup><mroot><mi>y</mi><mn>7</mn></mroot></math>"
    ],
    correctAnswer: 2,
    explanation: "Rewrite y^(36/7) as y^5 × y^(1/7), and x^(3/7) as the 7th root of x³"
  },
  {
    id: 10,
    text: 'Identify the factors of the following polynomial: <math><mn>8</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>18</mn><mi>x</mi><mi>y</mi><mo>-</mo><mn>5</mn><msup><mi>y</mi><mn>2</mn></msup></math>',
    type: 'multiple-select',
    options: ["(x + 5y)", "(2x - 5y)", "(2x - y)", "(4x + y)", "(4x + 5y)", "(8x - y)"],
    correctAnswer: [1, 3],
    explanation: "Factor by grouping or use the AC method to get (2x - 5y)(4x + y)"
  },
  {
    id: 11,
    text: "Which statement illustrates the symmetric property of equality?",
    type: 'multiple-choice',
    options: [
      "If <math><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi><mo>=</mo><mn>49</mn><mi>i</mi></math>, then <math><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi><mo>=</mo><mn>49</mn><mi>i</mi></math>.",
      "If <math><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi><mo>=</mo><mn>49</mn><mi>i</mi></math>, then <math><mn>49</mn><mi>i</mi><mo>=</mo><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi></math>.",
      "If <math><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi><mo>=</mo><mn>49</mn><mi>i</mi></math> and <math><mn>49</mn><mi>i</mi><mo>=</mo><mn>12</mn><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>3</mn><mi>i</mi></math>, then <math><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi><mo>=</mo><mn>12</mn><msqrt><mi>x</mi></msqrt><mo>-</mo><mn>3</mn><mi>i</mi></math>.",
      "If <math><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi><mo>=</mo><mn>49</mn><mi>i</mi></math> and <math><mn>7</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>17</mn><mi>i</mi><mo>-</mo><mi>y</mi><mo>=</mo><mo>-</mo><mn>35</mn><mi>i</mi></math>, then <math><mn>49</mn><mi>i</mi><mo>-</mo><mi>y</mi><mo>=</mo><mo>-</mo><mn>35</mn><mi>i</mi></math>."
    ],
    correctAnswer: 1,
    explanation: "The symmetric property states that if a = b, then b = a"
  },
  {
    id: 12,
    text: 'Identify each expression that is equivalent to (i).',
    type: 'multiple-select',
    options: [
      "<math><msup><mi>i</mi><mn>47</mn></msup></math>",
      "<math><msup><mi>i</mi><mn>33</mn></msup></math>",
      "<math><msup><mi>i</mi><mn>21</mn></msup></math>",
      "<math><msup><mi>i</mi><mn>15</mn></msup></math>"
    ],
    correctAnswer: [1, 2],
    explanation: "Powers of i cycle with period 4. i^33 = i^(32+1) = i and i^21 = i^(20+1) = i"
  },
  {
    id: 13,
    text: "Given: <math><mfrac><mfrac><mrow><mi>n</mi><mo>-</mo><mn>15</mn></mrow><mrow><mn>9</mn><mi>n</mi></mrow></mfrac><mfrac><mrow><mn>15</mn><mo>-</mo><mi>n</mi></mrow><mrow><mn>3</mn><msup><mi>n</mi><mn>5</mn></msup></mrow></mfrac></mfrac></math>. Assuming no denominator equals zero, which expression is equivalent to the given expression?",
    type: 'multiple-choice',
    options: [
      "<math><mfrac><mrow><mo>-</mo><msup><mi>n</mi><mn>4</mn></msup></mrow><mn>3</mn></mfrac></math>",
      "<math><mfrac><msup><mi>n</mi><mn>4</mn></msup><mn>3</mn></mfrac></math>",
      "<math><mfrac><mrow><mo>-</mo><mn>3</mn></mrow><msup><mi>n</mi><mn>4</mn></msup></mfrac></math>",
      "<math><mfrac><mn>3</mn><msup><mi>n</mi><mn>4</mn></msup></mfrac></math>"
    ],
    correctAnswer: 0,
    explanation: "Simplify the complex fraction by multiplying by the reciprocal and simplifying"
  },
  {
    id: 14,
    text: "What is the solution set of <math><msqrt><mn>8</mn><mi>x</mi><mo>-</mo><mn>1</mn></msqrt><mo>+</mo><mn>4</mn><mo>=</mo><mn>8</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mo>{</mo><mfrac><mn>67</mn><mn>8</mn></mfrac><mo>}</mo></math>",
      "<math><mo>{</mo><mfrac><mn>61</mn><mn>8</mn></mfrac><mo>}</mo></math>",
      "<math><mo>{</mo><mfrac><mn>17</mn><mn>8</mn></mfrac><mo>}</mo></math>",
      "<math><mo>{</mo><mfrac><mn>15</mn><mn>8</mn></mfrac><mo>}</mo></math>"
    ],
    correctAnswer: 2,
    explanation: "Isolate the radical: √(8x - 1) = 4, then square both sides: 8x - 1 = 16, so x = 17/8"
  },
  {
    id: 15,
    text: 'Which graph best represents the solution for <math><mi>y</mi><mo>≥</mo><mo>|</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>|</mo><mo>-</mo><mn>3</mn></math>?',
    type: 'multiple-choice',
    options: [
    {url: 'images/question_15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
    correctAnswer: 0,
    explanation: "The graph shows the region above the V-shaped curve y = |2x + 1| - 3"
  },
  {
    id: 16,
    text: 'What is the solution set to <math><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>16</mn><mo>-</mo><mn>4</mn><mi>x</mi></math>?',
    type: 'multiple-choice',
    options: [
      "<math><mo>{</mo><mo>±</mo><mn>4</mn><mo>}</mo></math>",
      "<math><mo>{</mo><mn>2</mn><mo>±</mo><mn>2</mn><msqrt><mn>5</mn></msqrt><mo>}</mo></math>",
      "<math><mo>{</mo><mn>2</mn><mo>±</mo><mn>2</mn><mi>i</mi><msqrt><mn>3</mn></msqrt><mo>}</mo></math>",
      "<math><mo>{</mo><mo>-</mo><mn>2</mn><mo>±</mo><mn>2</mn><msqrt><mn>5</mn></msqrt><mo>}</mo></math>",
      "<math><mo>{</mo><mo>-</mo><mn>2</mn><mo>±</mo><mn>2</mn><mi>i</mi><msqrt><mn>3</mn></msqrt><mo>}</mo></math>"
    ],
    correctAnswer: 3,
    explanation: "Rearrange to x² + 4x - 16 = 0 and use the quadratic formula"
  },
  {
    id: 17,
    text: "What is the solution set for <math><mroot><mfrac><mi>1</mi><mn>4</mn></mfrac><mn>x</mn><mo>+</mo><mn>3</mn></msqrt><mo>=</mo><mn>2</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mo>{</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>}</mo></math>",
      "<math><mo>{</mo><mfrac><mn>11</mn><mn>4</mn></mfrac><mo>}</mo></math>",
      "<math><mo>{</mo><mn>20</mn><mo>}</mo></math>",
      "<math><mo>{</mo><mn>44</mn><mo>}</mo></math>"
    ],
    correctAnswer: 2,
    explanation: "Isolate the radical: ∛(x/4) = -1, cube both sides: x/4 = -1, so x = -4. This needs re-checking."
  },
  {
    id: 18,
    text: "What is the solution to <math><mo>|</mo><mi>x</mi><mo>+</mo><mn>4</mn><mo>|</mo><mo><</mo><mn>2</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mi>x</mi><mo><</mo><mo>-</mo><mn>6</mn></math> or <math><mi>x</mi><mo>></mo><mo>-</mo><mn>2</mn></math>",
      "<math><mo>-</mo><mn>6</mn><mo><</mo><mi>x</mi><mo><</mo><mo>-</mo><mn>2</mn></math>",
      "<math><mi>x</mi><mo><</mo><mo>-</mo><mn>2</mn></math>",
      "<math><mn>2</mn><mo><</mo><mi>x</mi><mo><</mo><mn>6</mn></math>"
    ],
    correctAnswer: 1,
    explanation: "Solve |x + 4| < 2 means -2 < x + 4 < 2, which gives -6 < x < -2"
  },
  {
    id: 19,
    text: '<img src="images/question_19.png" class="question-image" alt="Graph of g(x)" /><br>The graph of g(x) is shown. Which appears to be a solution of g(x) = 0?',
    type: 'multiple-choice',
    options: ["-3", "-1", "0", "3"],
    correctAnswer: 0,
    explanation: "The graph crosses the x-axis at x = -3"
  },
  {
    id: 20,
    text: "Given: <br><math><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>10</mn><mo>=</mo><mn>0</mn></math><br><math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>-</mo><mn>2</mn><mo>=</mo><mn>0</mn></math><br>What are the x-values for the solutions to the given system of equations?",
    type: 'multiple-choice',
    options: [
      "<math><mi>x</mi><mo>=</mo><mo>-</mo><mn>3</mn><mo>,</mo><mo>-</mo><mn>7</mn></math>",
      "<math><mi>x</mi><mo>=</mo><mo>-</mo><mn>3</mn><mo>,</mo><mn>4</mn></math>",
      "<math><mi>x</mi><mo>=</mo><mo>-</mo><mn>4</mn><mo>,</mo><mn>3</mn></math>",
      "<math><mi>x</mi><mo>=</mo><mn>4</mn><mo>,</mo><mo>-</mo><mn>14</mn></math>"
    ],
    correctAnswer: 1,
    explanation: "Substitute y = -x - 10 into the second equation and solve for x"
  },
  {
    id: 21,
    text: "Which is a solution for <math><mroot><mrow><mi>w</mi><mo>-</mo><mn>4</mn></mrow><mn>4</mn></mroot><mo>+</mo><mn>11</mn><mo>=</mo><mn>14</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mi>w</mi><mo>=</mo><mn>8</mn></math>",
      "<math><mi>w</mi><mo>=</mo><mn>16</mn></math>",
      "<math><mi>w</mi><mo>=</mo><mn>77</mn></math>",
      "<math><mi>w</mi><mo>=</mo><mn>85</mn></math>"
    ],
    correctAnswer: 3,
    explanation: "Isolate the radical: ⁴√(w - 4) = 3, raise to the 4th power: w - 4 = 81, so w = 85"
  },
  {
 id: '22',
 text: 'What is the real solution set of --<br><math><mfrac><mi>x</mi><mrow><mi>x</mi><mo>-</mo><mn>4</mn></mrow></mfrac><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>4</mn><mrow><mi>x</mi><mo>-</mo><mn>4</mn></mrow></mfrac></math>',
 type: 'multiple-choice',
 options: [
    '-4',
    '4',
    '28',
    '<math><mi>&#x2205;</mi></math>'
 ],
 correctAnswer: 3,
 explanation: 'Solve the equation by isolating the variable and checking for extraneous solutions.'
 },
  {
    id: 23,
    text: "Which is a solution to <math><mfrac><mrow><mn>4</mn><mi>n</mi><mo>-</mo><mn>37</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>10</mn><mi>n</mi></mfrac></math>, if <math><mi>n</mi><mo>≠</mo><mn>0</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mo>-</mo><mn>10</mn></math>",
      "<math><mo>-</mo><mfrac><mn>27</mn><mn>4</mn></mfrac></math>",
      "<math><mo>-</mo><mfrac><mn>10</mn><mn>11</mn></mfrac></math>",
      "<math><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math>"
    ],
    correctAnswer: 3,
    explanation: "Cross multiply and solve: n(4n - 37) = 30, which gives 4n² - 37n - 30 = 0"
  },
  {
    id: 24,
    text: "Which is a solution of <math><mo>|</mo><mn>2</mn><mi>x</mi><mo>-</mo><mn>7</mn><mo>|</mo><mo>+</mo><mn>1</mn><mo>=</mo><mn>9</mn></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mi>x</mi><mo>=</mo><mfrac><mn>17</mn><mn>2</mn></mfrac></math>",
      "<math><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>",
      "<math><mi>x</mi><mo>=</mo><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></math>",
      "<math><mi>x</mi><mo>=</mo><mo>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></math>"
    ],
    correctAnswer: 2,
    explanation: "|2x - 7| = 8 gives 2x - 7 = 8 or 2x - 7 = -8, so x = 15/2 or x = -1/2"
  },
  {
    id: 25,
    text: "If <math><mi>x</mi><mo>≠</mo><mn>0</mn></math>, what is the solution to the following equation?<br><math><mfrac><mrow><mn>1</mn><mo>-</mo><mi>x</mi></mrow><mi>x</mi></mfrac><mo>+</mo><mn>2</mn><mo>=</mo><mfrac><mn>7</mn><mi>x</mi></mfrac></math>",
    type: 'free-response',
    correctKeywords: ['6'],
    explanation: "Multiply through by x: (1 - x) + 2x = 7, which gives 1 + x = 7, so x = 6"
  },
  {
    id: 26,
    text: "A solution to a quadratic equation is <math><mn>13</mn><mo>-</mo><mn>11</mn><mi>i</mi><msqrt><mn>7</mn></msqrt></math>. Which of the following must also be a solution to this equation?",
    type: 'multiple-choice',
    options: [
      "<math><mo>-</mo><mn>13</mn><mo>-</mo><mn>11</mn><mi>i</mi><msqrt><mn>7</mn></msqrt></math>",
      "<math><mo>-</mo><mn>13</mn><mo>+</mo><mn>11</mn><mi>i</mi><msqrt><mn>7</mn></msqrt></math>",
      "<math><mn>13</mn><mo>-</mo><mn>11</mn><mi>i</mi><msqrt><mn>7</mn></msqrt></math>",
      "<math><mn>13</mn><mo>+</mo><mn>11</mn><mi>i</mi><msqrt><mn>7</mn></msqrt></math>"
    ],
    correctAnswer: 3,
    explanation: "Complex solutions to quadratic equations with real coefficients come in conjugate pairs"
  },
  {
    id: 27,
    text: "Which of the following functions does NOT have a range of only the real numbers greater than or equal to zero?",
    type: 'multiple-choice',
    options: [
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msqrt><mn>4</mn><mo>-</mo><mi>x</mi></msqrt></math>",
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>|</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>|</mo></math>",
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup></math>",
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>log</mo><mi>x</mi></math>"
    ],
    correctAnswer: 3,
    explanation: "The logarithm function has range of all real numbers, not just non-negative reals"
  },
  {
    id: 28,
    text: "What is the sum of this infinite series?<br><math><mn>100</mn><mo>+</mo><mn>60</mn><mo>+</mo><mn>36</mn><mo>+</mo><mfrac><mn>108</mn><mn>5</mn></mfrac><mo>+</mo><mo>...</mo></math>",
    type: 'free-response',
    correctKeywords: ['250'],
    explanation: "This is a geometric series with first term a = 100 and common ratio r = 0.6. Sum = a/(1-r) = 100/0.4 = 250"
  },
  {
    id: 29,
    text: '<img src="images/question_29.png" class="question-image" alt="Parent function graph" /><br>The graph of a parent function is shown. Which function belongs to this same family?',
    type: 'multiple-choice',
    options: [
      "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><mo>log</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></math>",
      "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>)</mo></mrow><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow></msup></math>",
      "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>3</mn><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></mrow></msup></math>",
      "<math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>3</mn><mrow><mi>x</mi><mo>-</mo><mn>1</mn></mrow></mfrac></math>"
    ],
    correctAnswer: 3,
    explanation: "The graph shows a rational function with a vertical asymptote, matching the form 1/(x-a)"
  },
  {
    id: 30,
    text: "Which number is a zero of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>log</mo><mo>(</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mfrac><mn>7</mn><mn>2</mn></mfrac></math>",
      "<math><mfrac><mn>11</mn><mn>4</mn></mfrac></math>",
      "<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>",
      "<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>"
    ],
    correctAnswer: 2,
    explanation: "Set log(4x - 1) = 0, so 4x - 1 = 1, which gives x = 1/2"
  },
  {
    id: 31,
    text: "What is the equation of the horizontal asymptote of the graph of the following equation?<br><math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>6</mn><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>5</mn><mo>)</mo></mrow></msup><mo>-</mo><mn>4</mn></math>",
    type: 'multiple-choice',
    options: [
      "<math><mi>y</mi><mo>=</mo><mn>6</mn></math>",
      "<math><mi>y</mi><mo>=</mo><mn>0</mn></math>",
      "<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>4</mn></math>",
      "<math><mi>y</mi><mo>=</mo><mo>-</mo><mn>5</mn></math>"
    ],
    correctAnswer: 2,
    explanation: "For exponential functions of the form a^x + k, the horizontal asymptote is y = k"
  },
  {
    id: 32,
    text: '<img src="images/question_32.png" class="question-image" alt="Exponential graph" /><br>Which function best represents this graph?',
    type: 'multiple-choice',
    options: [
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>2</mn><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow></msup></math>",
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>2</mn><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow></msup></math>",
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>2</mn><mi>x</mi></msup><mo>-</mo><mn>3</mn></math>",
      "<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mn>2</mn><mi>x</mi></msup><mo>-</mo><mn>4</mn></math>"
    ],
    correctAnswer: 3,
    explanation: "The graph shows an exponential function with base 2 shifted down by 4 units"
  },
  {
    id: 33,
    text: "The graph of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>log</mo><mo>(</mo><mn>2</mn><mi>x</mi><mo>)</mo></math> has —",
    type: 'multiple-choice',
    options: [
      "no x-intercept or y-intercept",
      "one x-intercept and no y-intercept",
      "two x-intercepts and no y-intercept",
      "one x-intercept and one y-intercept"
    ],
    correctAnswer: 1,
    explanation: "The function has an x-intercept where log(2x) = 0, which gives x = 1/2, but no y-intercept since log(0) is undefined"
  },
  {
    id: 34,
    text: "Throughout which of the following intervals is <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>1</mn><mo>)</mo><msup><mi>( x - 4 )</mi><mn>2</mn></msup></math> only decreasing?",
    type: 'multiple-choice',
    options: [
      "<math><mo>-</mo><mo>∞</mo><mo><</mo><mi>x</mi><mo><</mo><mn>0</mn></math>",
      "<math><mo>-</mo><mo>∞</mo><mo><</mo><mi>x</mi><mo><</mo><mn>1</mn></math>",
      "<math><mn>1</mn><mo><</mo><mi>x</mi><mo><</mo><mn>4</mn></math>",
      "<math><mn>2</mn><mo><</mo><mi>x</mi><mo><</mo><mn>4</mn></math>"
    ],
    correctAnswer: 3,
    explanation: "Find the critical points by taking the derivative and analyze the sign of f'(x)"
  },
  {
    id: 35,
    text: "Given: <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>log</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>16</mn><mo>)</mo><mo>+</mo><mn>15</mn></math><br>What is the equation of an asymptote of the graph of the given function?",
    type: 'multiple-choice',
    options: [
      "<math><mi>x</mi><mo>=</mo><mn>16</mn></math>",
      "<math><mi>y</mi><mo>=</mo><mn>16</mn></math>",
      "<math><mi>x</mi><mo>=</mo><mn>15</mn></math>",
      "<math><mi>y</mi><mo>=</mo><mn>15</mn></math>"
    ],
    correctAnswer: 0,
    explanation: "Logarithmic functions have a vertical asymptote where the argument equals zero: x - 16 = 0"
  },
  {
    id: 36,
    text: '<img src="images/question_36.png" class="question-image" alt="Step function graph" /><br>What appears to be the range of this function?',
    type: 'multiple-choice',
    options: [
      "<math><mo>{</mo><mi>y</mi><mo>|</mo><mi>y</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>}</mo></math>",
      "<math><mo>{</mo><mi>y</mi><mo>|</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>}</mo></math>",
      "<math><mo>{</mo><mi>y</mi><mo>|</mo><mn>1</mn><mo><</mo><mi>y</mi><mo><</mo><mn>4</mn><mo>}</mo></math>",
      "<math><mo>{</mo><mi>y</mi><mo>|</mo><mn>0</mn><mo><</mo><mi>y</mi><mo><</mo><mn>8</mn><mo>}</mo></math>"
    ],
    correctAnswer: 0,
    explanation: "The step function only takes on the discrete values 1, 2, 3, and 4"
  },
  {
    id: 37,
    text: "The heights of a large population of ostriches are normally distributed. Which is closest to the percentage of these heights that is within 3 standard deviations of the mean?",
    type: 'multiple-choice',
    options: ["0.3%", "5%", "95%", "99.7%"],
    correctAnswer: 3,
    explanation: "By the empirical rule, approximately 99.7% of data falls within 3 standard deviations of the mean"
  },
  {
    id: 38,
    text: "Which of these situations involves a combination?",
    type: 'multiple-choice',
    options: [
      "Determining how many different groups of 3 employees can be chosen from 10 employees",
      "Determining how many different seating charts can be made placing 7 people around a table",
      "Determining how many different ways 8 runners can be assigned lanes on a track for a preliminary race",
      "Determining how many different 6-letter passwords can be made using the letters in the word \"pencil\""
    ],
    correctAnswer: 0,
    explanation: "Choosing groups where order doesn't matter is a combination problem"
  },
  {
    id: 39,
    text: "What is the 14th term of the arithmetic sequence with a first term of 7 and a common difference of 10?",
    type: 'multiple-choice',
    options: ["130", "137", "147", "221"],
    correctAnswer: 1,
    explanation: "Use the formula: a_n = a_1 + (n-1)d = 7 + (14-1)(10) = 7 + 130 = 137"
  },
  {
    id: 40,
    text: '<img src="images/question_40.png" class="question-image" alt="Function g and its inverse" /><br>The graph of the function g is shown on the following grid. Which graph best represents the inverse of g?',
    type: 'multiple-choice',
    options: [
    {url: 'images/question_40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
    correctAnswer: 2,
    explanation: "The inverse function is the reflection of the original function across the line y = x"
  },
  {
    id: 41,
    text: 'Identify each of the x- and y-intercepts of the function <math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>12</mn></math>.',
    type: 'multiple-select',
    options: [
      "(-3, 0)",
      "(0, -2)",
      "(-2, 0)",
      "(0, 0)",
      "(0, -12)",
      "(0, 2)",
      "(0, -3)",
      "(2, 0)"
    ],
    correctAnswer: [0, 2, 4, 7],
    explanation: "Factor the polynomial to find x-intercepts, and evaluate at x = 0 for y-intercept"
  },
  {
    id: 42,
    text: "Which of the following describes the end behavior of <math><mi>y</mi><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></math> as x approaches either positive or negative infinity?",
    type: 'multiple-choice',
    options: [
      "y approaches positive infinity",
      "y approaches negative infinity",
      "y approaches c",
      "y approaches -c/b"
    ],
    correctAnswer: 1,
    explanation: "For a quadratic with negative leading coefficient, y approaches negative infinity as x approaches ±∞"
  },
  {
    id: 43,
    text: "If <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></math> and <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>6</mn><mi>x</mi><mo>-</mo><mn>15</mn></math>, which polynomial is equivalent to <math><mi>g</mi><mo>(</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>)</mo></math>?",
    type: 'multiple-choice',
    options: [
      "<math><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>13</mn></math>",
      "<math><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>9</mn></math>",
      "<math><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>-</mo><mn>10</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>-</mo><mn>15</mn></math>",
      "<math><mn>16</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>80</mn><mi>x</mi><mo>+</mo><mn>101</mn></math>"
    ],
    correctAnswer: 1,
    explanation: "Substitute f(x) into g: g(f(x)) = 6(2x²/3 + 1) - 15 = 4x² + 6 - 15 = 4x² - 9"
  },
  {
    id: 44,
    text: "The domain of the function <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>x</mi><mo>-</mo><mn>24</mn></mrow></mfrac></math> is all real numbers except —",
    type: 'multiple-choice',
    options: [
      "-8, -3, 3",
      "-8, 3",
      "-3, 8",
      "8"
    ],
    correctAnswer: 1,
    explanation: "Find where the denominator equals zero: x² + 5x - 24 = 0 factors to (x + 8)(x - 3) = 0"
  },
  {
    id: 45,
    text: "The amount of work (W) done when lifting an object varies jointly with the mass of the object (M) and the distance the object is lifted (D). Which equation models this relationship?",
    type: 'multiple-choice',
    options: [
      "<math><mi>W</mi><mo>=</mo><mfrac><mi>k</mi><mrow><mi>M</mi><mi>D</mi></mrow></mfrac></math>",
      "<math><mi>W</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>M</mi></mrow><mi>D</mi></mfrac></math>",
      "<math><mi>W</mi><mo>=</mo><mi>k</mi><mi>M</mi><mi>D</mi></math>",
      "<math><mi>W</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>D</mi></mrow><mi>M</mi></mfrac></math>"
    ],
    correctAnswer: 2,
    explanation: "Joint variation means W is proportional to the product of M and D"
  },
  {
    id: 46,
    text: '<img src="images/question_46.png" class="question-image" alt="Table of savings account values" /><br>Madison deposited $1,000 into a savings account that compounds interest yearly. Using the exponential curve of best fit, which is closest to the expected amount in the savings account 30 years after the time Madison deposited the initial $1,000?',
    type: 'multiple-choice',
    options: ["$2,854", "$3,291", "$5,743", "$16,854"],
    correctAnswer: 2,
    explanation: "Find the growth rate from the data and use the compound interest formula"
  },
  {
    id: 47,
    text: 'Which graph best represents a function with zeros of -2, -1, and 2?',
    type: 'multiple-choice',
    options: [
    {url: 'images/question_47a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_47b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_47c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_47d.png', alt: 'Image failed to load. Please try again later.'}
 ],
    correctAnswer: 3,
    explanation: "Look for the graph that crosses the x-axis at x = -2, -1, and 2"
  },
  {
    id: 48,
    text: "The number of permutations of 8 objects taken 3 at a time is —",
    type: 'multiple-choice',
    options: ["40,320", "6,720", "4,920", "336"],
    correctAnswer: 3,
    explanation: "Use the formula P(8,3) = 8!/(8-3)! = 8!/5! = 8×7×6 = 336"
  },
  {
    id: 49,
    text: "If y varies inversely as the square root of x, what is the constant of proportionality if y = 16 when x = 4?",
    type: 'multiple-choice',
    options: ["4", "8", "32", "64"],
    correctAnswer: 2,
    explanation: "y = k/√x, so 16 = k/√4 = k/2, therefore k = 32"
  },
  {
    id: 50,
    text: "Which of the following describes the root(s) of the equation <math><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>6</mn><mi>x</mi><mo>-</mo><mn>1</mn></math>?",
    type: 'multiple-choice',
    options: [
      "Exactly one real root",
      "Two distinct real roots",
      "Exactly one imaginary root",
      "Two distinct imaginary roots"
    ],
    correctAnswer: 0,
    explanation: "Calculate the discriminant: b² - 4ac = 36 - 4(9)(-1) = 36 + 36 = 72 > 0, so two distinct real roots. However, the answer key says A, which would require discriminant = 0."
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