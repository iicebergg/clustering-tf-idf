window.TEST_IDENTIFIER = 'math_grade8_2014';

const sampleQuestions = [
 {
 id: '1',
 text: 'What is the value of 4(6 + 2)²?',
 type: 'multiple-choice',
 options: ['64', '160', '256', '1,024'],
 correctAnswer: 2,
 explanation: 'Following order of operations: first parentheses (6 + 2 = 8), then exponent (8² = 64), then multiply (4 × 64 = 256).'
 },
 {
 id: '2',
 text: 'What is -<math><msqrt><mi>324</mi></msqrt></math>?',
 type: 'free-response',
 correctKeywords: ['-18'],
 explanation: 'The square root of 324 is 18 (since 18 × 18 = 324). The negative sign in front makes it -18.'
 },
 {
 id: '3',
 text: 'If <math><mi>x = 2</mi></math> and <math><mi>t = 4</mi></math>, what is the value of <math><mfrac><mn>1</mn><mn>8</mn></mfrac><mi>(x³ - 4)(t² + 8)</mi></math>?',
 type: 'multiple-choice',
 options: ['12', '4', '-72', '-144'],
 correctAnswer: 0, 
 explanation: 'Substitute values: (1/8)(2³ - 4)(4² + 8) = (1/8)(8 - 4)(16 + 8) = (1/8)(4)(24) = 96/8 = 12.'
 },
 {
 id: '4',
 text: 'A food company reduced the amount of salt in one of their food products from 700 milligrams to 630 milligrams. What is the percent decrease in the amount of salt in this food product?',
 type: 'multiple-choice',
 options: ['10%', '12%', '70%', '90%'],
 correctAnswer: 0, 
 explanation: 'Decrease = 700 - 630 = 70 mg. Percent decrease = (70/700) × 100% = 10%.'
 },
 {
 id: '5',
 text: 'Which number is an irrational number?',
 type: 'multiple-choice',
 options: ['5.499', '<math><msqrt><mi>17</mi></msqrt></math>', '-<math><msqrt><mi>9</mi></msqrt></math>', '-10'],
 correctAnswer: 1, 
 explanation: '√17 cannot be expressed as a simple fraction or terminating/repeating decimal. 5.499 is rational, -√9 = -3 is rational, -10 is rational.'
 },
 {
 id: '6',
 text: 'Identify each number between 1.7 × 10⁰ and 195%.',
 type: 'multiple-select',
 options: ['1.8 × 10¹', '1<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math>', '18.5', '<math><mfrac><mn>7</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: [1, 3], 
 explanation: '1.7 × 10⁰ = 1.7 and 195% = 1.95. Check each: 1.8 × 10¹ = 18 (too large), 1⅞ = 1.875 (between), 18.5 (too large), 7/4 = 1.75 (between).'
 },
 {
 id: '7',
 text: 'Dora bought a total of 48 cupcakes. Each cupcake cost $0.55, including tax. Of the cupcakes she bought, <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> were vanilla cupcakes. What was the total cost of only the vanilla cupcakes?',
 type: 'multiple-choice',
 options: ['$26.40', '$16.50', '$9.90', '$6.60'],
 correctAnswer: 2, 
 explanation: 'Number of vanilla cupcakes = (3/8) × 48 = 18. Cost of vanilla cupcakes = 18 × $0.55 = $9.90.'
 },
 {
 id: '8',
 text: 'Which list of numbers is ordered from greatest to least?',
 type: 'multiple-choice',
 options: ['52%, 0.45, 3.1 × 10¹, <math><mfrac><mn>10</mn><mn>11</mn></mfrac></math>', '3.1 × 10¹, 52%, 0.45, <math><mfrac><mn>10</mn><mn>11</mn></mfrac></math>', '52%, 3.1 × 10¹, <math><mfrac><mn>10</mn><mn>11</mn></mfrac></math>, 0.45', '3.1 × 10¹, <math><mfrac><mn>10</mn><mn>11</mn></mfrac></math>, 52%, 0.45'],
 correctAnswer: 3, 
 explanation: 'Convert all: 3.1 × 10¹ = 31, 10/11 ≈ 0.91, 52% = 0.52, 0.45. From greatest to least: 31, 0.91, 0.52, 0.45.'
 },
 {
 id: '9',
 text: 'Emil bought a camera for $268.26, including tax. He made a down payment of $12.00 and paid the balance in 6 equal monthly payments. What was Emil\'s monthly payment for this camera?',
 type: 'multiple-choice',
 options: ['$42.71', '$44.71', '$46.71', '$56.71'],
 correctAnswer: 0, 
 explanation: 'Balance after down payment = $268.26 - $12.00 = $256.26. Monthly payment = $256.26 ÷ 6 = $42.71.'
 },
 {
 id: '10',
 text: 'Which pair of numbers are both between 6 and 7?',
 type: 'multiple-choice',
 options: ['<math><msqrt><mi>30</mi></msqrt></math> and <math><msqrt><mi>42</mi></msqrt></math>', '<math><msqrt><mi>36</mi></msqrt></math> and <math><msqrt><mi>49</mi></msqrt></math>', '<math><msqrt><mi>37</mi></msqrt></math> and <math><msqrt><mi>50</mi></msqrt></math>', '<math><msqrt><mi>42</mi></msqrt></math> and <math><msqrt><mi>48</mi></msqrt></math>'],
 correctAnswer: 3, 
 explanation: '6² = 36 and 7² = 49. We need square roots between 36 and 49. √42 ≈ 6.48 and √48 ≈ 6.93, both between 6 and 7.'
 },
 {
 id: '11',
 text: 'Kyle caught 9 insects for his science project in the first week. He caught 13 insects in the second week. What is the percent increase in the number of insects Kyle caught from the first week to the second week? Round your answer to the nearest whole percent.',
 type: 'free-response',
 correctKeywords: ['44', '44%'],
 explanation: 'Increase = 13 - 9 = 4 insects. Percent increase = (4/9) × 100% ≈ 44.4% ≈ 44%.'
 },
 {
 id: '12',
 text: 'Which number in this list is NOT an integer? <center><math><mfrac><mn>12</mn><mn>4</mn></mfrac></math>, -4², <math><msqrt><mi>25</mi></msqrt></math>, -4.8</center>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>12</mn><mn>4</mn></mfrac></math>', '-4²', '<math><msqrt><mi>25</mi></msqrt></math>', '-4.8'],
 correctAnswer: 3, 
 explanation: 'Check each: 12/4 = 3 (integer), -4² = -16 (integer), √25 = 5 (integer), -4.8 (decimal, not an integer).'
 },
 {
 id: '13',
 text: 'Which statement best describes <math><msqrt><mi>50</mi></msqrt></math>?',
 type: 'multiple-choice',
 options: ['Exactly 7', 'Exactly 25', 'Between 7 and 8', 'Between 24 and 26'],
 correctAnswer: 2, 
 explanation: 'Since 7² = 49 and 8² = 64, and 50 is between 49 and 64, √50 is between 7 and 8.'
 },
 {
 id: '14',
 text: 'What is the value of <math><mfrac><mn>8</mn><mn>3</mn></mfrac><mi>n³</mi></math> when <math><mi>n = </mi><mfrac><mn>3</mn><mn>2</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['4', '6', '9', '12'],
 correctAnswer: 2, 
 explanation: 'Substitute n = 3/2: (8/3) × (3/2)³ = (8/3) × (27/8) = 216/24 = 9.'
 },
 {
 id: '15',
 text: 'For the rectangle shown, which equation can be used to find the value of <math><mi>x</mi></math>? <br><img src="images/question_15.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['<math><mi>(x + 5)² = 12²</mi></math>', '<math><mi>5² + x² = 12²</mi></math>', '<math><mi>5² + 12² = x²</mi></math>', '<math><mi>5 + 12 = x²</mi></math>'],
 correctAnswer: 1, 
 explanation: 'In a rectangle, the diagonal forms a right triangle with the sides. Using Pythagorean theorem: 5² + x² = 12².'
 },
 {
 id: '16',
 text: 'What is the area of this polygon? <br><img src="images/question_16.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['77 sq cm', '86 sq cm', '96 sq cm', '108 sq cm'],
 correctAnswer: 2, 
 explanation: 'Break the polygon into rectangles or triangles, calculate each area, and sum them to get 96 sq cm.'
 },
 {
 id: '17',
 text: 'Which grid shows only a translation of the shaded polygon to create the unshaded polygon?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'A translation slides a figure without rotating or flipping it. The figure should have the same orientation, just moved to a different position.'
 },
 {
 id: '18',
 text: 'Which of the following could be the measurements of two supplementary angles?',
 type: 'multiple-choice',
 options: ['7° and 83°', '83° and 83°', '97° and 83°', '117° and 83°'],
 correctAnswer: 2, 
 explanation: 'Supplementary angles add to 180°. Check: 97° + 83° = 180°.'
 },
 {
 id: '19',
 text: 'Which number has a value between <math><mo>−</mo><msqrt><mn>9</mn></msqrt></math> and π?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>13</mn><mn>4</mn></mfrac></math>', '<math><mo>−</mo><mfrac><mn>18</mn><mn>6</mn></mfrac></math>', '3.1 × 10²', '3.2 × 10⁻²'],
 correctAnswer: 3,
 explanation: '−√9 = −3 and π ≈ 3.14. We need a value between −3 and 3.14. Option D: 3.2 × 10⁻² = 0.032, which is between −3 and 3.14.'
 },
 {
 id: '20',
 text: 'Josh has two rectangular prisms. The length of the second prism is 10 times the length of the first prism. The heights and widths of the two prisms are the same. Which best describes the volume of the second prism?',
 type: 'multiple-choice',
 options: ['The volume is 10 times the volume of the first prism.', 'The volume is 30 times the volume of the first prism.', 'The volume is 100 times the volume of the first prism.', 'The volume is 1,000 times the volume of the first prism.'],
 correctAnswer: 0, 
 explanation: 'Volume = length × width × height. If only length is multiplied by 10, the volume is also multiplied by 10.'
 },
 {
 id: '21',
 text: 'This figure is formed by a square and an isosceles trapezoid. <br><img src="images/question_21.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the perimeter of this figure?',
 type: 'multiple-choice',
 options: ['19 in.', '34 in.', '39 in.', '44 in.'],
 correctAnswer: 3, 
 explanation: 'Add the lengths of all outer edges of the composite figure to find the perimeter of 44 inches.'
 },
 {
 id: '22',
 text: 'The radius of the base of a cone is 6 inches. The height of the cone is 6 inches. Which is closest to the volume of the cone?',
 type: 'multiple-choice',
 options: ['75 cu in.', '113 cu in.', '226 cu in.', '678 cu in.'],
 correctAnswer: 2, 
 explanation: 'Volume of cone = (1/3)πr²h = (1/3) × 3.14 × 6² × 6 = (1/3) × 3.14 × 36 × 6 ≈ 226 cu in.'
 },
 {
 id: '23',
 text: 'One piece of a stained glass is transformed three times. <br><img src="images/question_23.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What transformation was used to create this section of the stained glass window?',
 type: 'multiple-choice',
 options: ['Translation', 'Reflection', 'Rotation', 'Dilation'],
 correctAnswer: 0, 
 explanation: 'The pieces are identical and moved to different positions without rotation or flipping, indicating translation.'
 },
 {
 id: '24',
 text: 'A three-dimensional figure is constructed using identical cubes. Three views of this figure are shown. <br><img src="images/question_24.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which could be this three-dimensional figure?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_24a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_24b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_24c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_24d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Match the front, side, and top views to determine which 3D figure creates all three views shown.'
 },
 {
 id: '25',
 text: 'A wire connects the top of a flagpole to the ground as shown. <br><img src="images/question_25.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which is closest to the height, <math><mi>h</mi></math>, of the flagpole?',
 type: 'multiple-choice',
 options: ['3.2 m', '5.0 m', '8.7 m', '11.2 m'],
 correctAnswer: 2, 
 explanation: 'Use Pythagorean theorem: h² + base² = wire². Solve for h to get approximately 8.7 m.'
 },
 {
 id: '26',
 text: 'Raymond needs to cover the entire surface of this square-based pyramid with paper. <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the minimum amount of paper he will need?',
 type: 'multiple-choice',
 options: ['276 sq ft', '408 sq ft', '528 sq ft', '672 sq ft'],
 correctAnswer: 1, 
 explanation: 'Surface area = base area + 4 triangular faces. Calculate each and sum to get 408 sq ft.'
 },
 {
 id: '27',
 text: 'Look at the angles. <br><img src="images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Identify each angle that is adjacent to Angle 2.',
 type: 'multiple-select',
 options: ['Angle 1', 'Angle 3', 'Angle 4', 'Angle 5'],
 correctAnswer: [0, 2], 
 explanation: 'Adjacent angles share a common side and vertex. Angles 1 and 4 share sides with Angle 2.'
 },
 {
 id: '28',
 text: 'Identify each three-dimensional figure that could be represented by these three views. <br><img src="images/question_28.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-select',
 options: [
    {url: 'images/question_28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_28d.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_28e.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_28f.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: [1, 5], 
 explanation: 'Check each figure to see if its front, side, and top views match the given views.'
 },
 {
 id: '29',
 text: 'What is the solution of this equation? <math><mi>x = 5x + 6</mi></math>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>-3</mn><mn>2</mn></mfrac></math>', '-1', '1', '<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Solve: x = 5x + 6. Subtract 5x: -4x = 6. Divide by -4: x = -6/4 = -3/2.'
 },
 {
 id: '30',
 text: 'Which line appears to contain both ordered pairs shown in this table? <br><img src="images/question_30.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30d.png', alt: 'Image failed to load. Please try again later.'},
 ],
 correctAnswer: 2, 
 explanation: 'Plot the points from the table and identify which line passes through both points.'
 },
 {
 id: '31',
 text: 'Identify each equation that illustrates the commutative property of multiplication.',
 type: 'multiple-select',
 options: ['<math><mi>xy + 3 = yx + 3</mi></math>', '<math><mi>6(x + 7) = 6x + 42</mi></math>', '<math><mi>3x + (5x + 7x) = (3x + 5x) + 7x</mi></math>', '<math><mi>4(3) = 3(4)</mi></math>', '<math><mi>12 + (-3) = (-3) + 12</mi></math>'],
 correctAnswer: [0, 3], 
 explanation: 'Commutative property of multiplication: ab = ba. Options A (xy = yx) and D (4×3 = 3×4) show this property.'
 },
 {
 id: '32',
 text: 'The hourly wages of the 25 employees at a restaurant are shown. <br><img src="images/question_32.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the graph, what is the mean hourly wage of the 25 employees at this restaurant?',
 type: 'multiple-choice',
 options: ['$11.75', '$9.36', '$9.00', '$8.56'],
 correctAnswer: 1, 
 explanation: 'Calculate mean: sum all wages (frequency × wage for each bar) and divide by 25 employees to get $9.36.'
 },
 {
 id: '33',
 text: 'What value of <math><mi>x</mi></math> makes this equation true? <center><math<mi>5x + 8 + 3x = 26 + 6x</mi></math></center>',
 type: 'multiple-choice',
 options: ['36', '17', '16', '9'],
 correctAnswer: 3, 
 explanation: 'Combine like terms: 8x + 8 = 26 + 6x. Subtract 6x: 2x + 8 = 26. Subtract 8: 2x = 18. Divide by 2: x = 9.'
 },
 {
 id: '34',
 text: 'Which line appears to be a graph of the equation shown? <center><math><mi>y = -2x - 1</mi></math></center>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The line has slope -2 (steep downward) and y-intercept -1 (crosses y-axis at -1).'
 },
 {
 id: '35',
 text: 'Two fair coins are flipped at the same time. What is the probability that both display tails?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'P(tails on first coin) = 1/2, P(tails on second coin) = 1/2. P(both tails) = 1/2 × 1/2 = 1/4.'
 },
 {
 id: '36',
 text: 'Which graph appears to contain all the ordered pairs in this relation? <br><img src="images/question_36.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Plot each ordered pair from the relation and identify which graph contains all the points.'
 },
 {
 id: '37',
 text: 'Which graph best represents the solution to <math><mfrac><mn>7</mn><mn>8</mn></mfrac><mi>≥</mi><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>x +</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Solve: 7/8 ≥ (1/4)x + 1/2. Subtract 1/2: 3/8 ≥ (1/4)x. Multiply by 4: 3/2 ≥ x, so x ≤ 3/2.'
 },
 {
 id: '38',
 text: 'Which of these best describes the relationship of the data shown on this scatterplot? <br><img src="images/question_38.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['Constant relationship', 'Negative relationship', 'Positive relationship', 'No relationship'],
 correctAnswer: 3, 
 explanation: 'The points show no clear pattern or trend, indicating no relationship between the variables.'
 },
 {
 id: '39',
 text: 'What is the solution to <math><mfrac><mn>n + 4</mn><mn>2</mn></mfrac><mi>  - 3 = 13</mi></math>?',
 type: 'multiple-choice',
 options: ['<math><mi>n = 4</mi></math>', '<math><mi>n = 14</mi></math>', '<math><mi>n = 16</mi></math>', '<math><mi>n = 28</mi></math>'],
 correctAnswer: 3, 
 explanation: 'Add 3: (n + 4)/2 = 16. Multiply by 2: n + 4 = 32. Subtract 4: n = 28.'
 },
 {
 id: '40',
 text: 'The graph shows Anna\'s height on each of her last five birthdays. <br><img src="images/question_40.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the graph, between which two consecutive years was the increase in Anna\'s height the greatest?',
 type: 'multiple-choice',
 options: ['Between 8 and 9 years', 'Between 9 and 10 years', 'Between 10 and 11 years', 'Between 11 and 12 years'],
 correctAnswer: 2, 
 explanation: 'Compare the vertical distance between consecutive points. The steepest increase is between ages 10 and 11.'
 },
 {
 id: '41',
 text: 'Which best represents <math><mi>y = x - 1</mi></math>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_41a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_41b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_41c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_41d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The line has slope 1 (goes up 1 for every 1 right) and y-intercept -1 (crosses y-axis at -1).'
 },
 {
 id: '42',
 text: 'What is the range of this relation? <br><img src="images/question_42.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['{1, 2, 4, 6}', '{1, 2, 4, 5}', '{1, 2, 4, 5, 6}', '{0, 1, 2, 3, 4, 5, 6}'],
 correctAnswer: 1, 
 explanation: 'The range is the set of all y-values in the relation. From the table: {1, 2, 4, 5}.'
 },
 {
 id: '43',
 text: 'What is the solution of this inequality? <center><math><mi>1.6 ≥ 0.8x + 4</math></mi>',
 type: 'multiple-choice',
 options: ['<math><mi>-3 ≥ x</mi></math>', '<math><mi>-≤ x</mi></math>', '<math><mi>7 ≥ x</mi></math>', '<math><mi>7 ≤ x</mi></math>'],
 correctAnswer: 0,
 explanation: 'Subtract 4: -2.4 ≥ 0.8x. Divide by 0.8: -3 ≥ x, which is the same as x ≤ -3.'
 },
{
id: '44',
text: 'Which is the greatest value in the range of <math><mi>y = -5x + 3</mi></math> for the domain {-2, 0, 1, 3}?',
type: 'multiple-choice',
options: ['3', '8', '13', '18'],
correctAnswer: 2,
explanation: 'Calculate y for each x: x = -2 gives y = 13, x = 0 gives y = 3, x = 1 gives y = -2, x = 3 gives y = -12. Greatest is 13.'
},
{
id: '45',
text: 'Which table contains only points that lie on the line represented by <math><mi>y = </mi><mfrac><mn>2x</mn><mn>3</mn></mfrac><mi> - 6</mi></math>',
type: 'multiple-choice',
options: [
{url: 'images/question_45a.png', alt: 'Image failed to load. Please try again later.'},
{url: 'images/question_45b.png', alt: 'Image failed to load. Please try again later.'},
{url: 'images/question_45c.png', alt: 'Image failed to load. Please try again later.'},
{url: 'images/question_45d.png', alt: 'Image failed to load. Please try again later.'}
],
correctAnswer: 2,
explanation: 'Test each point in the tables using y = (2x/3) - 6. Option C has all points satisfying this equation.'
},
{
id: '46',
text: 'The graph shows the number of text messages two students sent each day for 4 days. <br><img src="images/question_46.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the graph, which statement is true?',
type: 'multiple-choice',
options: ['On Day 2 and Day 3, the total number of text messages sent by Paul was 4 more than the total number of text messages sent by Kala.', 'The total number of text messages sent by Kala was the same as the total number sent by Paul for these four days.', 'The mean number of text messages Kala sent on Day 2 and Day 4 was exactly 4.5.', 'Kala sent fewer text messages than Paul on Day 3 and Day 4 combined.'],
correctAnswer: 1,
explanation: 'Add the totals for each student across all 4 days. Both students sent the same total number of messages.'
},
{
id: '47',
text: 'The scatterplot shows the relationship between Marvin\'s age and the time it took him to run a mile. <br><img src="images/question_47.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which statement best describes the relationship between Marvin\'s age and the time it takes him to run a mile?',
type: 'multiple-choice',
options: ['As Marvin\'s age increased, the time it took him to run a mile increased.', 'As Marvin\'s age increased, the time it took him to run a mile decreased.', 'As Marvin\'s age increased, the time it took him to run a mile remains constant.', 'There is no relationship between Marvin\'s age and the time it took him to run a mile.'],
correctAnswer: 1,
explanation: 'The scatterplot shows a downward trend - as age increases, time decreases (he gets faster).'
},
{
id: '48',
text: 'Which relation has a domain of {3, 5, 8}',
type: 'multiple-choice',
options: ['{(5, 1), (3, 4), (8, 2), (3, 3)}', '{(3, 2), (5, 1), (8, 3), (1, 4)}', '{(2, 8), (1, 3), (3, 5)}', '{(3, 8), (5, 3), (3, 5)}'],
correctAnswer: 0,
explanation: 'Domain is the set of all x-values. Option A has x-values: {5, 3, 8, 3} which includes {3, 5, 8}.'
},
{
 id: '49',
 text: 'What value of p makes this equation true?<br><math><mn>2</mn><mi>p</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn>3</mn><mo>(</mo><mi>p</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mn>4</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>6</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>11</mn></mfrac></math>', '<math><mo>−</mo><mfrac><mn>6</mn><mn>11</mn></mfrac></math>', '<math><mo>−</mo><mfrac><mn>6</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'Multiply both sides by 4: 8p = −3(p + 2). Expand: 8p = −3p − 6. Add 3p: 11p = −6. Divide by 11: p = −6/11'
},
{
id: '50',
text: 'A box contains 9 new light bulbs and 6 used light bulbs. Each light bulb is the same size and shape. Meredith will randomly select 2 light bulbs from the box without replacement. What is the probability Meredith will select a new light bulb and then a used light bulb?',
type: 'multiple-choice',
options: ['<math><mfrac><mn>1</mn><mn>54</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>15</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>25</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>35</mn></mfrac></math>'],
correctAnswer: 3,
explanation: 'P(new then used) = (9/15) × (6/14) = 54/210 = 9/35.'
},
];

const scaledScoreMapping = {
  0: 0,
  1: 194,
  2: 225,
  3: 244,
  4: 258,
  5: 269,
  6: 278,
  7: 286,
  8: 294,
  9: 300,
  10: 307,
  11: 312,
  12: 318,
  13: 323,
  14: 328,
  15: 333,
  16: 337,
  17: 342,
  18: 346,
  19: 351,
  20: 355,
  21: 359,
  22: 363,
  23: 367,
  24: 371,
  25: 375,
  26: 379,
  27: 384,
  28: 388,
  29: 392,
  30: 396,
  31: 400,
  32: 405,
  33: 409,
  34: 414,
  35: 418,
  36: 423,
  37: 428,
  38: 434,
  39: 439,
  40: 445,
  41: 451,
  42: 458,
  43: 466,
  44: 475,
  45: 484,
  46: 496,
  47: 510,
  48: 530,
  49: 562,
  50: 600
};

// Test-specific storage key for this test
const TEST_STORAGE_KEY = `solace_test_results_${window.TEST_IDENTIFIER}`;

function getScaledScore(rawScore) {
  const clampedScore = Math.max(0, Math.min(40, rawScore));
  return scaledScoreMapping[clampedScore] || 0;
}

function getPerformanceLevel(scaledScore) {
  if (scaledScore == 600) return 'Perfect Score';
  if (scaledScore >= 500) return 'Pass Advanced';
  if (scaledScore >= 400) return 'Pass Proficient';
  if (scaledScore >= 0) return 'Not Passing';
  return 'Minimal';
}

// Independent Results Manager for Grade 8 Math
(function() {
  'use strict';
  
  console.log(`Grade 8 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 8 Math`);
        return this.results;
      } catch (error) {
        console.error('Error loading test-specific results:', error);
        return [];
      }
    };
    
    // Override saveTestResult to use test-specific storage and add scaled scores
    window.resultsManager.saveTestResult = function(resultData) {
      // Add scaled score information
      const rawScore = resultData.correctAnswers;
      const scaledScore = getScaledScore(rawScore);
      const performanceLevel = getPerformanceLevel(scaledScore);
      
      const enhancedResultData = {
        ...resultData,
        scaledScore: scaledScore,
        performanceLevel: performanceLevel,
        rawScore: rawScore,
        testType: 'Grade 8 Mathematics (2014)'
      };
      
      console.log(`Saving Grade 8 Math result: ${rawScore}/50 → ${scaledScore} (${performanceLevel})`);
      
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
        scaledScore: enhancedResultData.scaledScore,
        performanceLevel: enhancedResultData.performanceLevel,
        rawScore: enhancedResultData.rawScore,
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
        
        // Trigger immediate enhancement after saving
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
    
    // Also override displayResults to inject scaled scores immediately
    if (window.resultsManager.displayResults) {
      const originalDisplayResults = window.resultsManager.displayResults.bind(window.resultsManager);
      
      window.resultsManager.displayResults = function() {
        console.log('Results manager displayResults called - injecting scaled scores');
        
        // Call original display
        const result = originalDisplayResults.apply(this, arguments);
        
        // Immediately attempt to enhance with scaled scores
        setTimeout(() => {
          console.log('Post-displayResults enhancement trigger');
          enhanceResultsWithRetry();
        }, 10);
        
        return result;
      };
    }
  }
  
  // Function to enhance ALL historical results with scaled scores
  function enhanceAllHistoricalResults() {
    console.log('Enhancing all historical 7 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 8 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced Grade 8 Math result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 8 Math results saved');
      
      // Update results manager if available
      if (window.resultsManager && window.resultsManager.results) {
        window.resultsManager.results = savedResults;
      }
    }
  }
  
  function addScaledScoreStyles() {
    if (document.getElementById('scaled-score-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'scaled-score-styles';
    style.textContent = `
      .scaled-score-info {
        margin-top: 1.5rem;
        padding: 1.5rem;
        background-color: var(--secondary-bg, #f0f8ff);
        border: 2px solid var(--accent-color, #4a6fa5);
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .scaled-score-container {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1rem;
      }
      
      .scaled-score-circle {
        background: linear-gradient(135deg, var(--accent-color, #4a6fa5) 0%, #2c4f7a 100%);
        color: white;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        flex-shrink: 0;
      }
      
      .scaled-score-details {
        flex: 1;
      }
      
      .scaled-score-details p {
        margin: 0.5rem 0;
        color: var(--text-color, #333);
      }
      
      .performance-level, .mini-performance-level {
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      
      .mini-performance-level {
        font-size: 0.75rem;
        padding: 0.15rem 0.3rem;
        margin-left: 0.25rem;
      }
      
      .performance-level.perfect-score, .mini-performance-level.perfect-score {
        background-color: #e7c3ff;
        color: #6f2c91;
      }
      
      .performance-level.pass-advanced, .mini-performance-level.pass-advanced {
        background-color: var(--success-color, #d4edda);
        color: var(--success-color, #155724);
      }
      
      .performance-level.pass-proficient, .mini-performance-level.pass-proficient {
        background-color: #d1ecf1;
        color: #0c5460;
      }
      
      .performance-level.not-passing, .mini-performance-level.not-passing {
        background-color: #f8d7da;
        color: #721c24;
      }
      
      .score-explanation {
        margin-top: 1rem;
        padding: 1rem;
        background-color: var(--input-bg, white);
        border-left: 4px solid var(--accent-color, #4a6fa5);
        border-radius: 0 4px 4px 0;
      }
      
      .score-explanation p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-color, #666);
        font-style: italic;
      }
      
      .historical-scaled-score {
        font-size: 0.85rem;
        color: var(--text-color, #666);
        margin-left: 0.5rem;
      }
      
      @media (max-width: 600px) {
        .scaled-score-container {
          flex-direction: column;
          text-align: center;
        }
        
        .scaled-score-circle {
          width: 70px;
          height: 70px;
          font-size: 1.2rem;
        }
      }
    `;
    
    document.head.appendChild(style);
  }
  
  function enhanceResultsDisplay() {
    // This function is now mainly used as a fallback
    console.log('Fallback enhanceResultsDisplay called');
    return enhanceResultsWithRetry();
  }
  
  function addScaledScoreToDisplay(resultsSummary, result) {
    const summaryText = resultsSummary.querySelector('.result-summary-text');
    if (!summaryText) {
      console.log('Result summary text not found');
      return;
    }
    
    // Check if already enhanced to prevent duplicates
    if (summaryText.querySelector('.scaled-score-info')) {
      console.log('Scaled score info already present, skipping duplicate');
      return;
    }
    
    console.log('Adding scaled score display with data:', result);
    
    const scaledScoreInfo = document.createElement('div');
    scaledScoreInfo.className = 'scaled-score-info';
    scaledScoreInfo.innerHTML = `
      <div class="scaled-score-container">
        <div class="scaled-score-circle">${result.scaledScore}</div>
        <div class="scaled-score-details">
          <p><strong>Scaled Score:</strong> ${result.scaledScore}</p>
          <p><strong>Performance Level:</strong> <span class="performance-level ${result.performanceLevel.toLowerCase().replace(/\s+/g, '-')}">${result.performanceLevel}</span></p>
          <p><strong>Raw Score:</strong> ${result.rawScore || result.correctAnswers}/${result.totalQuestions}</p>
        </div>
      </div>
      <div class="score-explanation">
        <p><em>The scaled score is a converted score that accounts for test difficulty and allows for comparison across different test versions.</em></p>
      </div>
    `;
    
    summaryText.appendChild(scaledScoreInfo);
    addScaledScoreStyles();
    
    console.log('Scaled score display added successfully');
  }
  
  function enhanceResultsHistory() {
    const resultsDetails = document.getElementById('results-details');
    if (!resultsDetails) return;
    
    const resultItems = resultsDetails.querySelectorAll('.result-item');
    if (resultItems.length === 0) return;
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    
    resultItems.forEach((resultItem, index) => {
      if (resultItem.querySelector('.historical-scaled-score')) return;
      
      const savedResult = savedResults[index];
      if (!savedResult || !savedResult.scaledScore) return;
      
      const resultDetails = resultItem.querySelector('.result-details');
      if (!resultDetails) return;
      
      const historicalScaledScore = document.createElement('span');
      historicalScaledScore.className = 'historical-scaled-score';
      historicalScaledScore.innerHTML = ` • Scaled: ${savedResult.scaledScore} (<span class="mini-performance-level ${savedResult.performanceLevel.toLowerCase().replace(/\s+/g, '-')}">${savedResult.performanceLevel}</span>)`;
      
      resultDetails.appendChild(historicalScaledScore);
    });
  }
  
  function checkAndEnhanceResults() {
    // Legacy function - now redirects to the new retry system
    return enhanceResultsWithRetry();
  }
  
  // Enhanced finishTest override for immediate scaled score display
  function enhanceFinishTest() {
    // Wait for finishTest to be available
    const waitForFinishTest = () => {
      if (typeof window.finishTest === 'function') {
        const originalFinishTest = window.finishTest;
        
        window.finishTest = function() {
          console.log('Enhanced finishTest called - injecting scaled scores immediately');
          
          // Get current test data
          const correctAnswers = window.currentTestAnswers ? 
            window.currentTestAnswers.filter(answer => answer.correct).length : 0;
          const totalQuestions = window.questions ? window.questions.length : 40;
          const score = Math.round((correctAnswers / totalQuestions) * 100);
          
          // Calculate scaled score data
          const scaledScore = getScaledScore(correctAnswers);
          const performanceLevel = getPerformanceLevel(scaledScore);
          
          console.log(`Calculated immediately: ${correctAnswers}/${totalQuestions} → ${scaledScore} (${performanceLevel})`);
          
          // Store enhanced data for immediate use
          window.tempEnhancedResult = {
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            scaledScore: scaledScore,
            performanceLevel: performanceLevel,
            rawScore: correctAnswers,
            testType: 'Grade 8 Mathematics (2014)'
          };
          
          // Call original finishTest
          const result = originalFinishTest.apply(this, arguments);
          
          // Immediately enhance results with multiple attempts
          setTimeout(() => enhanceResultsWithRetry(), 50);
          setTimeout(() => enhanceResultsWithRetry(), 150);
          setTimeout(() => enhanceResultsWithRetry(), 300);
          setTimeout(() => enhanceResultsWithRetry(), 500);
          
          return result;
        };
        
        console.log('finishTest function enhanced for immediate scaled score display');
      } else {
        // Retry if finishTest not yet available
        setTimeout(waitForFinishTest, 100);
      }
    };
    
    waitForFinishTest();
  }
  
  // Results enhancement with retry logic
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
    
    // Check if already enhanced
    if (resultsSummary.querySelector('.scaled-score-info')) {
      console.log('Results already enhanced');
      // Still enhance history in case it's not done
      setTimeout(() => enhanceResultsHistory(), 100);
      return;
    }
    
    // Try to get result data
    let resultData = window.tempEnhancedResult;
    
    if (!resultData) {
      // Fallback to results manager
      const latestResult = window.resultsManager ? window.resultsManager.getLatestResult() : null;
      if (latestResult) {
        if (!latestResult.scaledScore && latestResult.correctAnswers !== undefined) {
          latestResult.scaledScore = getScaledScore(latestResult.correctAnswers);
          latestResult.performanceLevel = getPerformanceLevel(latestResult.scaledScore);
          latestResult.rawScore = latestResult.correctAnswers;
        }
        resultData = latestResult;
      }
    }
    
    if (!resultData) {
      // Last resort - check localStorage
      const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
      if (savedResults.length > 0) {
        resultData = savedResults[0];
        if (!resultData.scaledScore && resultData.correctAnswers !== undefined) {
          resultData.scaledScore = getScaledScore(resultData.correctAnswers);
          resultData.performanceLevel = getPerformanceLevel(resultData.scaledScore);
          resultData.rawScore = resultData.correctAnswers;
        }
      }
    }
    
    if (!resultData || !resultData.scaledScore) {
      console.log('No valid result data found, retrying...');
      if (retryCount < maxRetries) {
        setTimeout(() => enhanceResultsWithRetry(retryCount + 1), 200);
      }
      return;
    }
    
    // Add scaled score display
    console.log('Adding scaled score display immediately');
    addScaledScoreToDisplay(resultsSummary, resultData);
    
    // Enhance history after a short delay
    setTimeout(() => {
      enhanceAllHistoricalResults();
      enhanceResultsHistory();
    }, 200);
    
    console.log('Immediate scaled score enhancement completed');
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
          if (resultsSummary && !resultsSummary.querySelector('.scaled-score-info')) {
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
  
  function initialize() {
    console.log('Initializing Grade 8 Math independent results system');
    
    addScaledScoreStyles();
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
    
    console.log('Grade 8 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();