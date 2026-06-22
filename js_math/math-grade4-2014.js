window.TEST_IDENTIFIER = 'math_grade4_2014';

const sampleQuestions = [
 {
 id: '1',
 text: 'What is the sum of <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> and <math><mfrac><mn>1</mn><mn>10</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>'],
 correctAnswer: 3,
 explanation: 'Find common denominator: 3/5 = 6/10. Then add: 6/10 + 1/10 = 7/10.'
 },
 {
 id: '2',
 text: 'Wilma drinks 1.09 liters of juice. Richard drinks 0.987 liter of juice. How much more juice does Wilma drink than Richard?',
 type: 'multiple-choice',
 options: ['0.103 liter', '0.878 liter', '1.917 liters', '2.077 liters'],
 correctAnswer: 0, 
 explanation: 'Subtract to find the difference: 1.09 - 0.987 = 0.103 liter.'
 },
 {
 id: '3',
 text: 'What is the least common multiple of 8 and 12?',
 type: 'multiple-choice',
 options: ['16', '24', '48', '96'],
 correctAnswer: 1, 
 explanation: 'List multiples: 8: 8, 16, 24, 32... and 12: 12, 24, 36... The smallest common multiple is 24.'
 },
 {
 id: '4',
 text: 'What is the product of 84 and 76?',
 type: 'multiple-choice',
 options: ['6,164', '6,274', '6,384', '6,494'],
 correctAnswer: 2,
 explanation: 'Multiply: 84 × 76 = 6,384.'
 },
 {
 id: '5',
 text: 'Kristin poured 6 ounces of lemonade into each of 19 glasses. Exactly how many ounces of lemonade did Kristin pour into all of these glasses?',
 type: 'free-response',
 correctKeywords: ['114'],
 explanation: 'Multiply ounces per glass by number of glasses: 6 × 19 = 114 ounces.'
 },
 {
 id: '6',
 text: 'At a store, flowerpots cost $28 each. Which is closest to the total cost of 72 of these flowerpots?',
 type: 'multiple-choice',
 options: ['$100', '$210', '$1,400', '$2,100'],
 correctAnswer: 3, 
 explanation: 'Estimate: $28 is close to $30, and 72 is close to 70. So 30 × 70 = $2,100.'
 },
 {
 id: '7',
 text: 'A school choir sold 825 tickets for a concert. Each ticket cost $9. What was the total cost of all the tickets sold?',
 type: 'multiple-choice',
 options: ['$7,425', '$7,385', '$7,285', '$7,225'],
 correctAnswer: 0, 
 explanation: 'Multiply number of tickets by price per ticket: 825 × $9 = $7,425.'
 },
 {
 id: '8',
 text: 'This model is shaded to represent 1 whole. <br><img src="images/question_8a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the sum of Model 1 and Model 2 shown below? <br><img src="images/question_8b.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['0.379', '0.505', '3.79', '5.05'],
 correctAnswer: 3, 
 explanation: 'Count the shaded parts in each model and add the decimal values represented.'
 },
 {
 id: '9',
 text: 'What is the difference between 3,240 and 578?',
 type: 'free-response',
 correctKeywords: ['2,662', '2662'],
 explanation: 'Subtract: 3,240 - 578 = 2,662.'
 },
 {
 id: '10',
 text: 'John ran a total of 342 minutes in a 7-day period. He ran about the same number of minutes each day. Which is closest to the number of minutes John ran on one of those days?',
 type: 'multiple-choice',
 options: ['20', '30', '50', '60'],
 correctAnswer: 2, 
 explanation: 'Divide total minutes by number of days: 342 ÷ 7 ≈ 49, which is closest to 50.'
 },
 {
 id: '11',
 text: 'What is the difference between <math><mfrac><mn>5</mn><mn>12</mn></mfrac></math> and <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Convert to common denominator: 1/4 = 3/12. Then subtract: 5/12 - 3/12 = 2/12 = 1/6.'
 },
 {
 id: '12',
 text: 'Carl does 25 sit-ups 3 times per day. What is the total number of sit-ups Carl does in 7 days?',
 type: 'multiple-choice',
 options: ['35', '75', '495', '525'],
 correctAnswer: 3, 
 explanation: 'Multiply: 25 sit-ups × 3 times per day × 7 days = 25 × 3 × 7 = 525 sit-ups.'
 },
 {
 id: '13',
 text: 'Which number is a common factor of 15, 18, and 30?',
 type: 'multiple-choice',
 options: ['9', '6', '5', '3'],
 correctAnswer: 3, 
 explanation: 'Find factors that divide all three numbers: 3 divides 15, 18, and 30 evenly.'
 },
 {
 id: '14',
 text: 'What digit is in the tenths place in this number? <br><center>24.816</center>',
 type: 'multiple-choice',
 options: ['1', '2', '6', '8'],
 correctAnswer: 3, 
 explanation: 'The tenths place is the first digit after the decimal point. In 24.816, the tenths digit is 8.'
 },
 {
 id: '15',
 text: 'Which division statement represents <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['3 divided by 8', '8 divided by 3', '3 divided by 11', '11 divided by 3'],
 correctAnswer: 0, 
 explanation: 'A fraction shows division: 3/8 means 3 divided by 8.'
 },
 {
 id: '16',
 text: 'Which fraction is represented by point W shown on the number line? <br><img src="images/question_16.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>10</mn><mn>13</mn></mfrac></math>', '<math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'Count the equal divisions and locate point W to determine the fraction it represents.'
 },
 {
 id: '17',
 text: 'Identify the place value for each digit in the number 304,215.',
 type: 'drag-drop',
 options: ['Millions', 'Hundred thousands', 'Ten thousands', 'Thousands', 'Hundreds', 'Tens', 'Ones'],
 dropZones: ['0', '1', '2', '3', '4', '5'],
 correctAnswer: [2, 5, 4, 1, 3, 6],
 explanation: 'From left to right: 3-hundred thousands, 0-ten thousands, 4-thousands, 2-hundreds, 1-tens, 5-ones.'
 },
 {
 id: '18',
 text: 'This table shows the times it took four students to complete a 40-meter race. <br><img src="images/question_18.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which statement about these times is true?',
 type: 'multiple-choice',
 options: ['13.7 > 13.07', '13.07 > 13.6', '13.6 > 13.7', '13.06 > 13.07'],
 correctAnswer: 0, 
 explanation: 'Compare decimals: 13.7 = 13.70, and 13.70 > 13.07, so 13.7 > 13.07 is true.'
 },
 {
 id: '19',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['89,045 < 84,905', '84,950 < 85,049', '8,240,579 < 8,209,745', '8,504,297 < 8,054,972'],
 correctAnswer: 1, 
 explanation: 'Compare numbers place by place: 84,950 < 85,049 because 84 < 85 in the thousands place.'
 },
 {
 id: '20',
 text: 'How is 2.32 written in words?',
 type: 'multiple-choice',
 options: ['Two hundred thirty-two', 'Two and thirty-two tenths', 'Two and thirty-two hundredths', 'Two and thirty-two thousandths'],
 correctAnswer: 2, 
 explanation: '2.32 has two places after the decimal, so it reads "two and thirty-two hundredths."'
 },
 {
 id: '21',
 text: 'What is 7,613,542 rounded to the nearest ten thousand?',
 type: 'multiple-choice',
 options: ['7,600,000', '7,610,000', '7,614,000', '7,620,000'],
 correctAnswer: 1, 
 explanation: 'Look at the thousands digit (3). Since 3 < 5, round down to 7,610,000.'
 },
 {
 id: '22',
 text: 'A fractional part of this group of triangles is shaded. <br><img src="images/question_22.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which group below has an equivalent fraction of the arrows shaded?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_22a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_22b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_22c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_22d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Find the group of arrows where the same fraction is shaded as in the triangle group.'
 },
 {
 id: '23',
 text: 'Model 1 is shaded to represent one whole. <br><img src="images/question_23a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Model 2 is shaded to represent a fraction. <br><img src="images/question_23b.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which decimal number is represented in Model 2?',
 type: 'multiple-choice',
 options: ['1.7', '1.3', '0.7', '0.3'],
 correctAnswer: 2, 
 explanation: 'Compare Model 2 to Model 1 (one whole) to determine what decimal fraction is shown.'
 },
 {
 id: '24',
 text: 'Order the fractions from greatest to least.',
 type: 'drag-drop',
 options: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>9</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>'],
 dropZones: ['Greatest', '↓', 'Least'],
 correctAnswer: [2, 0, 1],
 explanation: 'Convert to compare: 3/5 = 0.6, 1/2 = 0.5, 2/9 ≈ 0.22. Order: 3/5, 1/2, 2/9.'
 },
 {
 id: '25',
 text: 'Which number, when rounded to the nearest hundredth, is equal to 7.59?',
 type: 'multiple-choice',
 options: ['7.595', '7.588', '7.584', '7.594'],
 correctAnswer: 1, 
 explanation: 'Look at the thousandths place: 7.588 has 8 in thousandths, so rounds up to 7.59.'
 },
 {
 id: '26',
 text: 'Which figure has less than four angles?',
 type: 'multiple-choice',
 options: ['Triangle', 'Rhombus', 'Rectangle', 'Parallelogram'],
 correctAnswer: 0, 
 explanation: 'A triangle has 3 angles, which is less than 4. All other figures have 4 angles.'
 },
  {
 id: '27',
 text: 'Which estimate best describes the value of <math><mn>29</mn><mfrac><mn>1</mn><mn>3</mn></mfrac></math> − <math><mn>13</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['A little less than 10', 'A little less than 16', 'A little more than 16', 'A little more than 20'],
 correctAnswer: 1,
 explanation: '29⅓ is about 29 and 13⅔ is about 14, so 29 - 14 = 15, which is a little less than 16.'
 },
 {
 id: '28',
 text: 'Identify two lines in the figure that appear to be parallel. <br><img src="images/question_28.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['r and m', 'k and p', 'j and m', 'j and r'], 
 correctAnswer: 2,
 explanation: 'Parallel lines never intersect and remain the same distance apart. Lines j and m appear parallel.'
 },
 {
 id: '29',
 text: 'Lola\'s puppy weighed 6 pounds. What is the total number of ounces Lola\'s puppy weighed?',
 type: 'multiple-choice',
 options: ['48 ounces', '60 ounces', '72 ounces', '96 ounces'],
 correctAnswer: 3, 
 explanation: 'Convert pounds to ounces: 6 pounds × 16 ounces per pound = 96 ounces.'
 },
 {
 id: '30',
 text: 'Which pair of figures appears to be congruent?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Congruent figures have the same shape and size. Look for figures that match exactly.'
 },
 {
 id: '31',
 text: 'A restaurant has 3 gallons of soup. What is the total number of pints of soup this restaurant has?',
 type: 'multiple-choice',
 options: ['12 pints', '18 pints', '24 pints', '48 pints'],
 correctAnswer: 2, 
 explanation: 'Convert gallons to pints: 3 gallons × 8 pints per gallon = 24 pints.'
 },
 {
 id: '32',
 text: 'A basketball team left the school at 2:55 P.M. and returned at 5:45 P.M. What was the total amount of time that passed between the time this team left and returned to the school?',
 type: 'multiple-choice',
 options: ['2 hours 10 minutes', '2 hours 50 minutes', '3 hours 10 minutes', '3 hours 50 minutes'],
 correctAnswer: 1, 
 explanation: 'Calculate elapsed time: From 2:55 to 5:45 is 2 hours and 50 minutes.'
 },
 {
 id: '33',
 text: 'Which of these objects has a mass closest to 1 kilogram?',
 type: 'multiple-choice',
 options: ['A desk', 'A pencil', 'A dictionary', 'A sheet of paper'],
 correctAnswer: 2, 
 explanation: 'A kilogram is about 2.2 pounds. A dictionary weighs closest to this amount.'
 },
 {
 id: '34',
 text: 'Which picture shows a single reflection of the figure across line r?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'A reflection flips the figure across the line, creating a mirror image.'
 },
 {
 id: '35',
 text: 'Which set of figures shows only octagons?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_35a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_35b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_35c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_35d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'An octagon has 8 sides. Look for the set where all figures have exactly 8 sides.'
 },
 {
 id: '36',
 text: '2 meters = __ millimeters',
 type: 'multiple-choice',
 options: ['20,000 millimeters', '2,000 millimeters', '200 millimeters', '20 millimeters'],
 correctAnswer: 1, 
 explanation: 'Convert meters to millimeters: 2 meters × 1,000 millimeters per meter = 2,000 millimeters.'
 },
 {
 id: '37',
 text: 'Which of the followign represents ray KL?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_37a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_37d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Ray KL starts at point K and extends infinitely through point L with an arrow.'
 },
 {
 id: '38',
 text: 'Tyrone used 1 pint of liquid to completely fill a container. Which container could be the one Tyrone filled?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'A pint is about 2 cups. Look for a container that would hold about this amount.'
 },
 {
 id: '39',
 text: 'Mandy is making a spinner game. She wants the arrow on the spinner to have an equally likely chance of landing on each of 4 spaces. Each space will have a different shape on it. Which appears to be the spinner Mandy should make?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_39a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_39d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'For equally likely outcomes, all 4 spaces must be the same size.'
 },
 {
 id: '40',
 text: 'Which equation is true?',
 type: 'multiple-choice',
 options: ['4 x 7 = 26 + 2', '4 x 8 = 32 + 2', '7 x 6 = 59 - 7', '7 x 8 = 64 - 7'],
 correctAnswer: 0, 
 explanation: 'Check each equation: 4 × 7 = 28 and 26 + 2 = 28, so 4 × 7 = 26 + 2 is true.'
 },
 {
 id: '41',
 text: 'Lenny bought sunglasses for $3.35 and a beach towel for $8.71, including tax. He gave the clerk $15.00 to pay for these items. What is the amount of change Lenny should receive?',
 type: 'multiple-choice',
 options: ['$2.94', '$3.94', '$11.06', '$12.06'],
 correctAnswer: 0, 
 explanation: 'Total cost: $3.35 + $8.71 = $12.06. Change: $15.00 - $12.06 = $2.94.'
 },
 {
 id: '42',
 text: 'The table shows the total number of players on different numbers of bowling teams in a tournament. <br><img src="images/question_42.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The pattern continues in the same way. How many bowling teams are needed for a total of 52 players?',
 type: 'multiple-choice',
 options: ['13', '12', '11', '10'],
 correctAnswer: 0, 
 explanation: 'Find the pattern in the table, then determine how many teams give 52 total players.'
 },
 {
 id: '43',
 text: 'Lori has a coin with one side heads and one side tails. Which letter on this number line best represents the probability that this coin flipped one time will land with tails facing up? <br><img src="images/question_43.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['Q', 'R', 'S', 'T'],
 correctAnswer: 1, 
 explanation: 'The probability of tails is 1/2 = 0.5. Find the letter closest to 0.5 on the number line.'
 },
 {
 id: '44',
 text: 'This graph shows the morning temperature in a city for each of four days. <br><img src="images/question_44.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The morning temperature on Thursday was 52°F. Based on the data in this graph, which day had a temperature closest to Thursday\'s temperature?',
 type: 'multiple-choice',
 options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
 correctAnswer: 2, 
 explanation: 'Compare the temperatures shown in the graph to find which is closest to 52°F.'
 },
 {
 id: '45',
 text: 'Todd has the following folders in his backpack: <ul><li>2 blue</li><li>2 red</li><li>2 yellow</li><li>2 purple</li></ul> The folders are all the same size and shape, Todd reaches into his backpack and selects one folder without looking. What is the likelihood the folder will be green?',
 type: 'multiple-choice',
 options: ['Certain', 'Likely, but not certain', 'Unlikely, but not impossible', 'Impossible'],
 correctAnswer: 3, 
 explanation: 'There are no green folders in the backpack, so selecting green is impossible.'
 },
 {
 id: '46',
 text: 'Which number sentence is correct?',
 type: 'multiple-choice',
 options: ['3 × 2 × 3 = 2 × 6', '5 × 2 × 5 = 10 × 2', '4 × 2 × 6 = 12 × 4', '8 × 3 × 0 = 12 × 2'],
 correctAnswer: 2, 
 explanation: 'Check each equation: 4 × 2 × 6 = 48 and 12 × 4 = 48, so this equation is correct.'
 },
 {
 id: '47',
 text: 'Which equation shows the use of the associative property of multiplication?',
 type: 'multiple-choice',
 options: ['2×(50×1) = 2×50', '2×(50×12)=(2×50)×12', '2×(50×12)=2×(12×50)', '2×(12×50)=(2+12)×(2+50)'],
 correctAnswer: 1, 
 explanation: 'The associative property groups factors differently: 2×(50×12) = (2×50)×12.'
 },
 {
 id: '48',
 text: 'Jeremy rolls a fair number cube labeled 1 through 6. Place a point on the number line to represent the probability that he will roll a 2 on the first roll.',
 type: 'point-select',
 image: {url: 'images/question_48.png', alt: 'Image failed to load. Please try again later.'},
 correctAnswer: { x: 0.27, y: 0.3 }, 
 explanation: 'The probability of rolling a 2 is 1/6 ≈ 0.167. Place the point at approximately 1/6 on the number line.'
 },
 {
 id: '49',
 text: 'An art club has 2 fourth-grade girls, 4 third-grade boys, 10 third-grade girls, and 8 fourth-grade boys. Which table correctly shows this information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_49a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_49b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_49c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_49d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Find the table that correctly organizes the data: 2 fourth-grade girls, 4 third-grade boys, 10 third-grade girls, 8 fourth-grade boys.'
 },
 {
 id: '50',
 text: 'In increasing pattern is shown. <br><center>5, 14, 23, 32, 41</center> Which pattern uses the same rule as the pattern above?',
 type: 'multiple-choice',
 options: ['42, 33, 24, 15, 6', '15, 23, 31, 39, 47', '13, 22, 31, 40, 49', '8, 19, 30, 41, 52'],
 correctAnswer: 2, 
 explanation: 'The pattern adds 9 each time (5+9=14, 14+9=23, etc.). Pattern 13, 22, 31, 40, 49 also adds 9.'
 },
];

// Scaled Score Mapping for Grade 4 Mathematics (2014)
// Maps raw scores (number correct out of 40) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 144,
  2: 183,
  3: 207,
  4: 225,
  5: 239,
  6: 251,
  7: 262,
  8: 271,
  9: 280,
  10: 288,
  11: 295,
  12: 302,
  13: 309,
  14: 315,
  15: 321,
  16: 327,
  17: 332,
  18: 338,
  19: 343,
  20: 349,
  21: 354,
  22: 359,
  23: 364,
  24: 369,
  25: 374,
  26: 379,
  27: 384,
  28: 389,
  29: 394,
  30: 399,
  31: 405,
  32: 410,
  33: 416,
  34: 421,
  35: 427,
  36: 433,
  37: 439,
  38: 446,
  39: 452,
  40: 460,
  41: 467,
  42: 476,
  43: 485,
  44: 495,
  45: 507,
  46: 521,
  47: 538,
  48: 562,
  49: 600,
  50: 600,
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

// Independent Results Manager
(function() {
  'use strict';
  
  console.log(`Grade 4 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 4 Math`);
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
        testType: 'Grade 4 Mathematics (2014)'
      };
      
      console.log(`Saving Grade 4 Math result: ${rawScore}/40 → ${scaledScore} (${performanceLevel})`);
      
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
        return result;
      } catch (error) {
        console.error('Error saving test-specific result:', error);
        return null;
      }
    };
    
    // Reload results with the new system
    window.resultsManager.results = window.resultsManager.loadAllResults();
  }
  
  // Function to enhance ALL historical results with scaled scores
  function enhanceAllHistoricalResults() {
    console.log('Enhancing all historical Grade 4 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 4 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced Grade 4 Math result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 4 Math results saved');
      
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
    enhanceAllHistoricalResults();
    
    const resultsSummary = document.getElementById('results-summary');
    if (!resultsSummary) return false;
    
    if (resultsSummary.querySelector('.scaled-score-info')) {
      enhanceResultsHistory();
      return true;
    }
    
    const latestResult = window.resultsManager ? window.resultsManager.getLatestResult() : null;
    if (!latestResult) {
      const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
      if (savedResults.length === 0) return false;
      
      const lastResult = savedResults[0];
      if (!lastResult.scaledScore && lastResult.correctAnswers !== undefined) {
        lastResult.scaledScore = getScaledScore(lastResult.correctAnswers);
        lastResult.performanceLevel = getPerformanceLevel(lastResult.scaledScore);
        lastResult.rawScore = lastResult.correctAnswers;
      }
      
      if (!lastResult.scaledScore) return false;
      
      addScaledScoreToDisplay(resultsSummary, lastResult);
      enhanceResultsHistory();
      return true;
    }
    
    if (!latestResult.scaledScore && latestResult.correctAnswers !== undefined) {
      latestResult.scaledScore = getScaledScore(latestResult.correctAnswers);
      latestResult.performanceLevel = getPerformanceLevel(latestResult.scaledScore);
      latestResult.rawScore = latestResult.correctAnswers;
    }
    
    if (!latestResult.scaledScore) return false;
    
    addScaledScoreToDisplay(resultsSummary, latestResult);
    enhanceResultsHistory();
    return true;
  }
  
  function addScaledScoreToDisplay(resultsSummary, result) {
    const summaryText = resultsSummary.querySelector('.result-summary-text');
    if (!summaryText) return;
    
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
        <p><em>The scaled score is a score used by the Virginia Department of Education to compare performance in different regions of the state over time.</em></p>
      </div>
    `;
    
    summaryText.appendChild(scaledScoreInfo);
    addScaledScoreStyles();
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
    const resultsPage = document.getElementById('results');
    if (!resultsPage || !resultsPage.classList.contains('active')) return;
    
    if (enhanceResultsDisplay()) {
      setTimeout(() => enhanceResultsHistory(), 100);
      return true;
    }
    return false;
  }
  
  function initialize() {
    console.log('Initializing 4 Math independent results system');
    
    addScaledScoreStyles();
    createTestSpecificResultsManager();
    
    const checkInterval = setInterval(() => {
      if (checkAndEnhanceResults()) {
        clearInterval(checkInterval);
      }
    }, 500);
    
    setTimeout(() => clearInterval(checkInterval), 30000);
    
    document.addEventListener('click', function(e) {
      if (e.target && (e.target.id === 'results-btn' || e.target.id === 'view-results')) {
        setTimeout(() => {
          checkAndEnhanceResults();
          setTimeout(() => enhanceResultsHistory(), 300);
        }, 200);
      }
    });
    
    console.log('Grade 4 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();