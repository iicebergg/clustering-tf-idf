window.TEST_IDENTIFIER = 'math_grade3_2014';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which number sentence will 9 + 6 = 15 help solve?',
 type: 'multiple-choice',
 options: ['15 - 9 = __', '15 × 9 = __', '15 ÷ 9 = __', '15 + 9 = __'],
 correctAnswer: 0,
 explanation: 'Addition and subtraction are inverse operations, so 9 + 6 = 15 helps solve 15 - 9 = 6.'
 },
 {
 id: '2',
 text: 'Two sets of circles are shown. <br><img src="images/question_2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which of the following correctly compares the fraction of circles shaded in Set S to the fraction of circles shaded in Set T?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> > <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>11</mn></mfrac></math> < <math><mfrac><mn>7</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> > <math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>11</mn></mfrac></math> < <math><mfrac><mn>4</mn><mn>11</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'When comparing fractions with the same denominator, compare the numerators. Since 3 < 4, we have 3/11 < 4/11.'
 },
 {
 id: '3',
 text: 'The place value model shown represents a number. <br><img src="images/question_3.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What number is represented by this place value model?',
 type: 'multiple-choice',
 options: ['354', '454', '3,154', '4,054'],
 correctAnswer: 2, 
 explanation: 'Count the place value blocks: thousands, hundreds, tens, and ones to determine the number.'
 },
 {
 id: '4',
 text: 'Round 5,647 to the places shown.',
 type: 'drag-drop',
 options: ['5,000', '5,600', '5,650', '5,640', '6,000', '5,700'],
 dropZones: ['Rounded to the Nearest Thousand', 'Rounded to the Nearest Hundred', 'Rounded to the Nearest Ten'],
 correctAnswer: [4, 1, 2],
 explanation: 'To round 5,647: to nearest thousand (6,000), nearest hundred (5,600), nearest ten (5,650).'
 },
 {
 id: '5',
 text: 'Two packages of eggs are shown. <br><img src="images/question_5.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which statement correctly compares the fraction of the number of eggs in Package P to the fraction of the number of eggs in Package Q?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>4</mn><mn>12</mn></mfrac></math> < <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>12</mn></mfrac></math> > <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> > <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>12</mn></mfrac></math> < <math><mfrac><mn>9</mn><mn>12</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Compare the fractions by looking at the numerators when denominators are the same.'
 },
 {
 id: '6',
 text: 'Which shows the number 78,025 written in word form?',
 type: 'multiple-choice',
 options: ['Seven hundred eight thousand, two hundred fifty', 'Seven hundred eight thousand, twenty-five', 'Seventy-eight thousand, two hundred fifty', 'Seventy-eight thousand, twenty-five'],
 correctAnswer: 3, 
 explanation: '78,025 is read as seventy-eight thousand, twenty-five.'
 },
 {
 id: '7',
 text: 'This model is shaded to represent one whole. <br><img src="images/question_7a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Look at the following model. <img src="images/question_7b.png" class="question-image" alt="Image failed to load. Please try again later."></img> What number do the shaded parts in this model represent?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math>', '5 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '10 <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Count the whole units and fractional parts shown in the model.'
 },
 {
 id: '8',
 text: 'Which number sentence can be completed using the basic fact sentence 3 × 2 = 6?',
 type: 'multiple-choice',
 options: ['12 ÷ 6 = __', '6 ÷ 3 = __', '6 × 3 = __', '3 + 2 = __'],
 correctAnswer: 1, 
 explanation: 'Multiplication and division are inverse operations, so 3 × 2 = 6 helps solve 6 ÷ 3 = 2.'
 },
 {
 id: '9',
 text: 'Select the symbol that will make each number sentence true.',
 type: 'drag-drop',
 options: ['>', '=', '<'],
 dropZones: ['78 __ 78', '2,288 __ 2,199'],
 correctAnswer: [1, 0],
 explanation: '78 equals 78, so use =. 2,288 is greater than 2,199, so use >.'
 },
 {
 id: '10',
 text: 'In which group are exactly <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> of the shapes circles?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count the total shapes and circles in each group to find where exactly <math><mfrac><mn>3</mn><mn>8</mn></mfrac></math> are circles.'
 },
 {
 id: '11',
 text: 'What number goes in the box to make this number sentence true? <br> 63 ÷ ☐ = 9',
 type: 'multiple-choice',
 options: ['6', '7', '8', '9'],
 correctAnswer: 1, 
 explanation: '63 ÷ 7 = 9, so the answer is 7.'
 },
 {
 id: '12',
 text: 'This model is shaded to represent one whole. <br><img src="images/question_12a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> These two models are each shaded to represent a fraction. <br><img src="images/question_12b.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the sum of these two fractions?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>14</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>7</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'Count the total parts and the shaded parts to determine the fraction.'
 },
 {
 id: '13',
 text: 'Which number sentence best represents this set of flowers? <br><img src="images/question_13.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['32 ÷ 4 = ?', '32 - 8 = ?', '8 × 4 = ?', '8 + 8 = ?'],
 correctAnswer: 0, 
 explanation: 'Look at the arrangement to determine the multiplication sentence that represents the groups.'
 },
 {
 id: '14',
 text: 'Kiku had a total of 25 plants at her store on Tuesday morning. During the day, she sold 16 of these plants and then received 136 new plants. At the end of the day, exactly how many plants did Kiku have?',
 type: 'multiple-choice',
 options: ['9', '61', '145', '197'],
 correctAnswer: 2, 
 explanation: 'Start with 25, subtract 16 sold, then add 136 new plants: 25 - 16 + 136 = 145.'
 },
 {
 id: '15',
 text: 'This model is shaded to represent one whole. <br><img src="images/question_15a.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> These two models are shaded to represent a fraction. <br><img src="images/question_15b.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the difference between these two fractions?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>16</mn></mfrac></math>', '<math><mfrac><mn>10</mn><mn>16</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Count the total equal parts and the shaded parts to find the fraction.'
 },
 {
 id: '16',
 text: 'A store has 57 packages of gum with 5 pieces of gum in each package. What is the total number of pieces of gum in these packages? Write the number only; do not include units.',
 type: 'free-response',
 correctKeywords: ['285'],
 explanation: 'Multiply 57 × 5 = 285 pieces of gum.'
 },
 {
 id: '17',
 text: 'What is <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>? <br><img src="images/question_17.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['1 <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '1', '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 1, 
 explanation: 'When adding fractions with the same denominator, add the numerators: <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> + <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>4</mn><mn>4</mn></mfrac></math> = 1.'
 },
 {
 id: '18',
 text: '3,000 - 285 = ?',
 type: 'multiple-choice',
 options: ['2,285', '2,715', '2,815', '3,285'],
 correctAnswer: 1, 
 explanation: '3,000 - 285 = 2,715.'
 },
 {
 id: '19',
 text: 'Which of these is best represented by this number line? <br><img src="images/question_19.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['24 + 4', '24 - 4', '6 + 4', '4 × 6'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern on the number line to determine which operation it represents.'
 },
 {
 id: '20',
 text: 'Select each multiplication fact that equals 48.',
 type: 'multiple-select',
 options: ['4 × 8', '6 × 9', '12 × 4', '7 × 6', '8 × 6', '5 × 8'],
 correctAnswer: [2, 4],
 explanation: 'Check each multiplication: 4×12=48, 6×8=48, 12×4=48, 7×6=42, 8×6=48, 5×8=40.'
 },
 {
 id: '21',
 text: 'How many minutes are there from 10:30 A.M. to 1:00 P.M.?',
 type: 'multiple-choice',
 options: ['500 minutes', '300 minutes', '150 minutes', '120 minutes'],
 correctAnswer: 2, 
 explanation: 'From 10:30 A.M. to 1:00 P.M. is 2 hours and 30 minutes = 150 minutes.'
 },
 {
 id: '22',
 text: 'Harry drew a picture with the figures shown. <br><img src="images/question_22.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which best describes the figures in this picture?',
 type: 'multiple-choice',
 options: ['Cubes', 'Squares', 'Rectangles', 'Rectangular prisms'],
 correctAnswer: 2, 
 explanation: 'The figures are three-dimensional, so they are rectangular prisms, not flat shapes.'
 },
 {
 id: '23',
 text: 'Which is the most reasonable length of a bed?',
 type: 'multiple-choice',
 options: ['6 feet', '6 inches', '6 meters', '6 centimeters'],
 correctAnswer: 0, 
 explanation: '6 feet is the most reasonable length for a bed. 6 inches and 6 centimeters are too short, 6 meters is too long.'
 },
 {
 id: '24',
 text: 'Which is closest to the time shown on this clock? <br><img src="images/question_24.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['4:45', '5:45', '9:05', '9:25'],
 correctAnswer: 0, 
 explanation: 'Read the hour and minute hands to determine the approximate time.'
 },
 {
 id: '25',
 text: 'What is the temperature in °F on this thermometer? Write the number only; do not include units. <br><img src="images/question_25.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'free-response',
 correctKeywords: ['84'],
 explanation: 'Read the temperature scale on the thermometer to find the exact temperature.'
 },
 {
 id: '26',
 text: 'Jack built a tower of blocks as shown. <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which tower of blocks appears to be congruent to Jack\'s tower of blocks?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_26a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_26d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same shape and size. Look for the tower that matches exactly.'
 },
 {
 id: '27',
 text: 'Franklin began selling lumber in the morning at the time shown on the clock. <br><img src="images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> He finished selling lumber three hours later. At what time did Franklin finish selling lumber?',
 type: 'multiple-choice',
 options: ['8:45 A.M.', '9:45 A.M.', '10:45 A.M.', '11:45 A.M.'],
 correctAnswer: 2, 
 explanation: 'Add 3 hours to the starting time shown on the clock.'
 },
 {
 id: '28',
 text: 'What is the perimeter of the shaded figure on this grid? <br><img src="images/question_28.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['18 units', '19 units', '22 units', '24 units'],
 correctAnswer: 3, 
 explanation: 'Count the units around the outside edge of the shaded figure to find the perimeter.'
 },
 {
 id: '29',
 text: 'Christina has the money shown. <br><img src="images/question_29.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Exactly how much money does Christina have?',
 type: 'multiple-choice',
 options: ['$3.50', '$3.60', '$3.85', '$4.05'],
 correctAnswer: 1, 
 explanation: 'Count the value of all the coins and bills shown.'
 },
 {
 id: '30',
 text: 'Alfred drew two rays and a line segment in his geometry notebook. Which of these could be the picture Alfred drew?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A ray has one endpoint and extends infinitely in one direction. A line segment has two endpoints.'
 },
 {
 id: '31',
 text: 'Each side of this figure is the same length. <br><img src="images/question_31.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which measurement is closest to the perimeter of this figure?',
 type: 'multiple-choice',
 options: ['5 feet', '8 feet', '10 feet', '12 feet'],
 correctAnswer: 2, 
 explanation: 'Multiply the length of one side by the number of sides to find the perimeter.'
 },
 {
 id: '32',
 text: 'This chart shows the type of toy and color choices for a reward in a teacher\'s basket. <br><img src="images/question_32.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which shows all the possible outcomes for a reward using one type of toy and one color?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_32a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_32b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_32c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_32d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Count the total possible combinations by multiplying the number of toy types by the number of colors.'
 },
 {
 id: '33',
 text: 'This pattern repeats after the first four circles. Joanne removed two circles from this repeating pattern. <br><img src="images/question_33.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which ordered pair of circles did she remove?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Identify the repeating pattern and determine which circles are missing from the sequence.'
 },
 {
 id: '34',
 text: 'Tia surveyed 14 students. She asked each student to choose one favorite food from four choices. Which chart could show the data from Tia\'s survey?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_34a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_34d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'The correct chart should show data for 14 students total across four food choices.'
 },
 {
 id: '35',
 text: 'This table shows the number of minutes it takes Kendal to run laps around a track. <br><img src="images/question_35.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> If the pattern in the table continues in the same way, which of the following should be used to determine how many minutes it takes Kendal to run 10 laps?',
 type: 'multiple-choice',
 options: ['10 × 3', '10 + 6', '10 + 24', '10 × 6'],
 correctAnswer: 0, 
 explanation: 'Look at the pattern in the table to determine the relationship between laps and minutes.'
 },
 {
 id: '36',
 text: 'Stephanie recorded the number of inches of rainfall in her city during 4 weeks. The graph below shows the results. <br><img src="images/question_36.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which bar graph shows the same information?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36d.png', alt: 'BImage failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Compare the data values in the line graph to find the matching bar graph.'
 },
 {
 id: '37',
 text: 'Which number sentence shows the use of the identity property of multiplication?',
 type: 'multiple-choice',
 options: ['5 × 3 = 3 × 5', '5 + 0 = 5', '4 + 1 = 5', '1 × 5 = 5'],
 correctAnswer: 3, 
 explanation: 'The identity property of multiplication states that any number multiplied by 1 equals itself.'
 },
 {
 id: '38',
 text: 'Look at this pattern. <br><center>1, 3, 9, 27, 81.</center><br> Which describes the rule used in this pattern?',
 type: 'multiple-choice',
 options: ['Divide by 9', 'Multiply by 3', 'Subtract 2', 'Add 2'],
 correctAnswer: 1, 
 explanation: 'Each number in the pattern is multiplied by 3 to get the next number: 1×3=3, 3×3=9, 9×3=27, 27×3=81.'
 },
 {
 id: '39',
 text: 'This line plot shows the number of points scored by students on a team. <br><img src="images/question_39.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What was the total number of points scored by the students?',
 type: 'multiple-choice',
 options: ['20', '19', '56', '8'],
 correctAnswer: 0, 
 explanation: 'Add up all the points shown on the line plot by multiplying each score by the number of students who achieved it.'
 },
 {
 id: '40',
 text: 'Debi will pick a card from the bag without looking. Which combination of 8 cards in the bag show that the likelihood of Debi picking a card with a star is equally likely as picking a card with a heart?',
 type: 'multiple-choice',
 options: ['4 star cards, 4 heart cards', '2 star cards, 6 heart cards', '6 star cards, 2 heart cards', '0 star cards, 8 heart cards'],
 correctAnswer: 0, 
 explanation: '4 star cards and 4 heart cards will made the likelihood of choosing the same card equal.'
 }
];

// Scaled Score Mapping for Grade 3 Mathematics (2014)
// Maps raw scores (number correct out of 40) to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 134,
  2: 174,
  3: 199,
  4: 217,
  5: 232,
  6: 245,
  7: 256,
  8: 266,
  9: 275,
  10: 284,
  11: 292,
  12: 300,
  13: 307,
  14: 314,
  15: 321,
  16: 328,
  17: 335,
  18: 342,
  19: 348,
  20: 355,
  21: 362,
  22: 368,
  23: 375,
  24: 382,
  25: 389,
  26: 396,
  27: 404,
  28: 412,
  29: 420,
  30: 428,
  31: 437,
  32: 447,
  33: 458,
  34: 470,
  35: 484,
  36: 500,
  37: 519,
  38: 546,
  39: 589,
  40: 600
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

// Independent Results Manager for Grade 3 Math
(function() {
  'use strict';
  
  console.log(`Grade 3 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 3 Math`);
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
        testType: 'Grade 3 Mathematics (2014)'
      };
      
      console.log(`Saving Grade 3 Math result: ${rawScore}/40 → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 3 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 3 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced Grade 3 Math result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 3 Math results saved');
      
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
            testType: 'Grade 3 Mathematics (2014)'
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
    console.log('Initializing Grade 3 Math independent results system');
    
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
    
    console.log('Grade 3 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();