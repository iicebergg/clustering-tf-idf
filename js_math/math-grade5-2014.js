window.TEST_IDENTIFIER = 'math_grade5_2014';

const sampleQuestions = [
 {
 id: '1',
 text: '56.791 + 1.9 = ?',
 type: 'multiple-choice',
 options: ['58.691', '57.691', '56.981', '56.810'],
 correctAnswer: 0,
 explanation: 'To add decimals, align the decimal points: 56.791 + 1.900 = 58.691.'
 },
 {
 id: '2',
 text: 'Which decimal is equivalent to <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['0.30', '0.35', '0.53', '0.60'],
 correctAnswer: 3, 
 explanation: 'To convert 3/5 to a decimal, divide: 3 ÷ 5 = 0.6 = 0.60.'
 },
 {
 id: '3',
 text: 'A parking garage has 12 levels. Each level has 86 parking spaces. What is the total number of parking spaces in the garage?',
 type: 'multiple-choice',
 options: ['98', '168', '932', '1,032'],
 correctAnswer: 3, 
 explanation: 'Multiply the number of levels by spaces per level: 12 × 86 = 1,032 parking spaces.'
 },
 {
 id: '4',
 text: 'What is the value of this expression? <br><center>6+4(8-5)</center>',
 type: 'multiple-choice',
 options: ['18', '30', '33', '72'],
 correctAnswer: 0,
 explanation: 'Follow order of operations: 6 + 4(8-5) = 6 + 4(3) = 6 + 12 = 18.'
 },
 {
 id: '5',
 text: 'Which list of numbers is ordered from least to greatest?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, 0.22, <math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>, 0.75', '<math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>, 0.75, <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, 0.22', '0.22, <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, 0.75, <math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>', '0.22, 0.75, <math><mfrac><mn>3</mn><mn>12</mn></mfrac></math>, <math><mfrac><mn>8</mn><mn>9</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'Convert to decimals: 3/12 = 0.25, 8/9 ≈ 0.89. Order: 0.22, 0.25, 0.75, 0.89.'
 },
 {
 id: '6',
 text: 'Based on the order of operations, which shows the first step in simplifying this expression? <br><center>16 ÷ 2 + 6(7 + 4 × 5)</center>',
 type: 'multiple-choice',
 options: ['8 + 6(7 + 4 × 5)', '16 ÷ 8(7 + 4 × 5)', '16 ÷ 2 + 6(11 × 5)', '16 ÷ 2 + 6(7 + 20)'],
 correctAnswer: 3, 
 explanation: 'First multiply inside parentheses: 4 × 5 = 20, so 16 ÷ 2 + 6(7 + 20).'
 },
 {
 id: '7',
 text: 'This table shows the weights of Vincent\'s three dogs. <br><img src="images/question_7.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the difference between the combined weight of Hannah and Dillon and the weight of Wilson?',
 type: 'free-response',
 correctKeywords: ['24.8', '24.80', '24.800'],
 explanation: 'Add Hannah and Dillon\'s weights, then subtract Wilson\'s weight to find the difference.'
 },
 {
 id: '8',
 text: 'Mary Lee has a total of 216 eggs. Using these eggs, she will fill empty egg cartons that each hold 12 eggs. What is the greatest number of egg cartons that Mary Lee can fill completely?',
 type: 'multiple-choice',
 options: ['18', '19', '228', '2,592'],
 correctAnswer: 0, 
 explanation: 'Divide total eggs by eggs per carton: 216 ÷ 12 = 18 complete cartons.'
 },
 {
 id: '9',
 text: 'What is the product of 5.06 and 2.1?',
 type: 'multiple-choice',
 options: ['10.526', '10.626', '1.518', '1.508'],
 correctAnswer: 1, 
 explanation: 'Multiply: 5.06 × 2.1 = 10.626. Count decimal places: 2 + 1 = 3 places in answer.'
 },
 {
 id: '10',
 text: '493.57 ÷ 7 = __',
 type: 'free-response',
 correctKeywords: ['70.51', '70.510'],
 explanation: 'Divide: 493.57 ÷ 7 = 70.51.'
 },
 {
 id: '11',
 text: 'The cost for a movie ticket is $5.50. Soft drinks cost $1.25 each. What is the total cost for 13 people to each purchase a movie ticket and a soft drink?',
 type: 'multiple-choice',
 options: ['$16.25', '$19.75', '$72.75', '$87.75'],
 correctAnswer: 3, 
 explanation: 'Cost per person: $5.50 + $1.25 = $6.75. For 13 people: $6.75 × 13 = $87.75.'
 },
 {
 id: '12',
 text: 'students are comparing their heights. Jose is 4<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math> feet tall, Lee is 4<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> feet tall, Judi is 4<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> feet tall, and Sammy is 4<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> feet tall. Which student is the tallest?',
 type: 'multiple-choice',
 options: ['Jose', 'Lee', 'Judi', 'Sammy'],
 correctAnswer: 3, 
 explanation: 'Compare fractions: 2/3 = 8/12, 1/4 = 3/12, 1/6 = 2/12, 1/12 = 1/12. Sammy (4 2/3) is tallest.'
 },
 {
 id: '13',
 text: 'Michael has a total of 10 pies to serve. This table shows the amounts of pie Michael has already served. <br><img src="images/question_13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which mixed number represents the total amount of pie Michael has left to serve?',
 type: 'multiple-choice',
 options: ['2<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> pies', '3<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> pies', '6<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> pies', '7<math><mfrac><mn>11</mn><mn>12</mn></mfrac></math> pies'],
 correctAnswer: 0, 
 explanation: 'Subtract the total amount served from 10 pies to find how many pies are left.'
 },
 {
 id: '14',
 text: 'The state of Virginia has a total area of 39,594 square miles. The state of Maryland has a total area of 9,774 square miles. How much larger is the total area of Virginia than Maryland?',
 type: 'multiple-choice',
 options: ['29,820 square miles', '30,220 square miles', '30,820 square miles', '49,368 square miles'],
 correctAnswer: 0, 
 explanation: 'Subtract Maryland\'s area from Virginia\'s area: 39,594 - 9,774 = 29,820 square miles.'
 },
 {
 id: '15',
 text: 'Karla bought 3 packages of chicken. The total weight of the chicken in these packages is 7.52 pounds. This table shows the weight of the chicken in two packages. <br><img src="images/question_15.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the weight of the chicken in package Y?',
 type: 'multiple-choice',
 options: ['3.55 pounds', '3.87 pounds', '3.97 pounds', '4.45 pounds'],
 correctAnswer: 0, 
 explanation: 'Subtract the weights of the two known packages from the total weight to find package Y\'s weight.'
 },
 {
 id: '16',
 text: 'This chart shows the number of miles Tyra walked on each of three days. <br><img src="images/question_16.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the total number of miles Tyra walked on these three days?',
 type: 'multiple-choice',
 options: ['3<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> miles', '4<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> miles', '4<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> miles', '5<math><mfrac><mn>1</mn><mn>12</mn></mfrac></math> miles'],
 correctAnswer: 3, 
 explanation: 'Add the distances from all three days to find the total miles walked.'
 },
 {
 id: '17',
 text: 'A set of basketball uniforms contains only odd-numbered jerseys. Which could be three of the jersey numbers from this set of uniforms?',
 type: 'multiple-choice',
 options: ['11, 33, 44', '15, 41, 55', '21, 35, 52', '34, 42, 50'],
 correctAnswer: 1, 
 explanation: 'Odd numbers end in 1, 3, 5, 7, or 9. Only 15, 41, 55 are all odd numbers.'
 },
 {
 id: '18',
 text: 'Tristan saw five helicopters parked at the airport. <br><img src="images/question_18.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which list shows all of the odd numbers on the helicopters?',
 type: 'multiple-choice',
 options: ['36, 54', '11, 31', '11, 23, 31', '11, 31, 36, 54'],
 correctAnswer: 2, 
 explanation: 'Identify numbers ending in 1, 3, 5, 7, or 9. The odd numbers shown are 11, 23, and 31.'
 },
 {
 id: '19',
 text: 'Which of the following digits could be found in the ones place of a number that is divisible by 2?',
 type: 'multiple-choice',
 options: ['0', '1', '3', '5'],
 correctAnswer: 0, 
 explanation: 'Numbers divisible by 2 are even and end in 0, 2, 4, 6, or 8. Only 0 is listed.'
 },
 {
 id: '20',
 text: 'What is 7,459.82 rounded to the nearest whole number?',
 type: 'free-response',
 correctKeywords: ['7,460', '7460'],
 explanation: 'Look at the tenths place (8). Since 8 ≥ 5, round up: 7,459.82 rounds to 7,460.'
 },
 {
 id: '21',
 text: '530 milliliters = __ liter(s)',
 type: 'multiple-choice',
 options: ['0.53', '5.3', '53,000', '530,000'],
 correctAnswer: 0, 
 explanation: 'There are 1,000 milliliters in 1 liter, so 530 mL ÷ 1,000 = 0.53 liters.'
 },
 {
 id: '22',
 text: 'Which is closest to the measure of ∠T? <br><img src="images/question_22.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['27°', '33°', '153°', '167°'],
 correctAnswer: 2, 
 explanation: 'Angle T appears to be an obtuse angle (greater than 90°), so 153° is the best estimate.'
 },
 {
 id: '23',
 text: 'Marissa drew a figure with the following characteristics. <ul><li>Four congruent sides</li><li>Two pairs of parallel sides</li><li>Two pairs of congruent opposite angles</li><li>No right angles</li></ul> Which term best describes the figure Marissa drew?',
 type: 'multiple-choice',
 options: ['Triangle', 'Rhombus', 'Rectangle', 'Trapezoid'],
 correctAnswer: 1, 
 explanation: 'A rhombus has four equal sides, two pairs of parallel sides, and no right angles.'
 },
 {
 id: '24',
 text: 'Mario began watching a movie at the time shown on the clock. <br><img src="images/question_24.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The movie was 2 hours and 25 minutes long. What time did the movie end?',
 type: 'multiple-choice',
 options: ['7:55 P.M.', '8:30 P.M.', '9:30 P.M.', '9:55 P.M'],
 correctAnswer: 3,
 explanation: 'Add 2 hours and 25 minutes to the starting time shown on the clock.'
 },
 {
 id: '25',
 text: 'To determine the amount of peanuts a bag will hold, Toby needs to find the--',
 type: 'multiple-choice',
 options: ['area', 'length', 'volume', 'perimeter'],
 correctAnswer: 2, 
 explanation: 'Volume measures the amount of space inside a 3D container, like how much a bag holds.'
 },
 {
 id: '26',
 text: 'This is a flat figure. Destiny plans to cut this figure along the dashed line segments. <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Identify the names of the three figures she will form.',
 type: 'multiple-select',
 options: ['Triangle', 'Rhombus', 'Parallelogram', 'Square', 'Trapezoid'],
 correctAnswer: [0, 2, 4],
 explanation: 'When cut along the dashed lines, the figure forms a triangle, parallelogram, and trapezoid.'
 },
 {
 id: '27',
 text: 'Point S is the center of the circle shown. <br><img src="images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which line segment is a radius of the circle?',
 type: 'multiple-choice',
 options: ['QR', 'SR', 'QT', 'TR'],
 correctAnswer: 1, 
 explanation: 'A radius connects the center of a circle to any point on the circle. SR goes from center S to the circle.'
 },
 {
 id: '28',
 text: 'The city is building a new outdoor basketball court. <br><img src="images/question_28.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which is most likely the length of the new outdoor basketball court?',
 type: 'multiple-choice',
 options: ['94 inches', '94 feet', '94 centimeters', '94 kilometers'],
 correctAnswer: 1, 
 explanation: 'A basketball court is about 94 feet long. Inches and centimeters are too small, kilometers too large.'
 },
 {
 id: '29',
 text: 'Which triangle appears to be a scalene triangle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_29a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_29b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_29c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_29d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'A scalene triangle has three sides of different lengths. Look for the triangle with no equal sides.'
 },
 {
 id: '30',
 text: 'Perimeter is used to find the--',
 type: 'multiple-choice',
 options: ['distance from a ceiling to the floor', 'amount of blacktop on a playground', 'amount of floor space covered by a carpet', 'distance around the edge of a swimming pool'],
 correctAnswer: 3, 
 explanation: 'Perimeter measures the distance around the outside edge of a shape or object.'
 },
 {
 id: '31',
 text: 'Identify each angle that appears to be an acute angle.',
 type: 'multiple-select',
 options: [
    {url: 'images/question_31a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31d.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31e.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_31f.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: [1, 3],
 explanation: 'Acute angles measure less than 90°. Look for angles that appear smaller than a right angle.'
 },
 {
 id: '32',
 text: 'What is the area of a right triangle with a base of 4 feet and a height of 8 feet?',
 type: 'multiple-choice',
 options: ['12 square feet', '16 square feet', '24 square feet', '32 square feet'],
 correctAnswer: 1, 
 explanation: 'Area of triangle = 1/2 × base × height = 1/2 × 4 × 8 = 16 square feet.',
 },
 {
 id: '33',
 text: 'The chart shows the different shirts, pants, and shoes Simon has in his closet. <br><img src="images/question_33.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which lists all of the possible combinations Simon can create of one shirt, one pair of pants, and one pair of shoes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_33a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_33d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Multiply the number of each type of clothing to find total combinations possible.'
 },
 {
 id: '34',
 text: 'This table shows the number of fish in each of 7 aquariums. <br><img src="images/question_34.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Jeff emptied all the fish from these aquariums and put a fair share of these fish into each of these 7 aquariums. The number of fish he will put into each aquarium represents the--',
 type: 'multiple-choice',
 options: ['median', 'range', 'mean', 'mode'],
 correctAnswer: 2, 
 explanation: 'A fair share means dividing equally, which gives the mean (average) number of fish per aquarium.'
 },
 {
 id: '35',
 text: 'This graph shows the high temperature in Richmond for each of 6 days. <br><img src="images/question_35.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on this graph, which statement is true?',
 type: 'multiple-choice',
 options: ['The greatest increase in high temperature on the graph occurs between Day 4 and Day 5.', 'The greatest increase in high temperature on the graph occurs between Day 5 and Day 6.', 'The greatest decrease in high temperature on the graph occurs between Day 2 and Day 3.', 'The greatest decrease in high temperature on the graph occurs between Day 3 and Day 4.'],
 correctAnswer: 0, 
 explanation: 'Compare the temperature changes between consecutive days to find the greatest increase.'
 },
 {
 id: '36',
 text: 'Brad has 2 bags with blocks that are all the same shape and size. There are 5 blocks in Bag A and 2 blocks in Bag B as shown. <br><img src="images/question_36.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Brad will randomly select one block from each bag. Which list shows all of the possible combinations of one block from each bag?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_36a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_36d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'With 5 blocks in Bag A and 2 blocks in Bag B, there are 5 × 2 = 10 possible combinations.'
 },
 {
 id: '37',
 text: 'A set of data is shown. <center>{ 24, 14, 37, 14, 25, 37, 14, 33, 27 }</center> What is the mode for this set of data?',
 type: 'free-response',
 correctKeywords: ['14'],
 explanation: 'The mode is the number that appears most frequently. 14 appears three times, more than any other number.'
 },
 {
 id: '38',
 text: 'A number machine uses a rule to change numbers. This table shows the results. <br><img src="images/question_38.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which could be the rule the number machine uses to change the input numbers to the output numbers?',
 type: 'multiple-choice',
 options: ['Add 15', 'Subtract 15', 'Divide by 4', 'Multiply by 4'],
 correctAnswer: 2, 
 explanation: 'Look at the pattern between input and output numbers to determine the rule used.'
 },
 {
 id: '39',
 text: 'This graph shows the number of boxes of canned soup that were delivered to a grocery store each week for six weeks. <br><img src="images/question_39.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on this graph, which statement is true?',
 type: 'multiple-choice',
 options: ['The number of boxes of soup delivered to the store in Week 6 is more than the number of boxes of soup delivered to the store in Week 4.', 'The number of boxes of soup delivered to the store in Week 3 is less than the number of boxes of soup delivered to the store in Week 5.', 'The number of boxes of soup delivered to the store in Week l is about the same as the number of boxes of soup delivered to the store in Week 4.', 'The number of boxes of soup delivered to the store in Week 2 is about the same as the number of boxes of soup delivered to the store in Week 5.'],
 correctAnswer: 2, 
 explanation: 'Compare the heights of the bars on the graph to determine which statement is accurate.'
 },
 {
 id: '40',
 text: 'Ms. Chapman wrote this equation on the board. <center>1 + n = 6</center> She drew a model of this equation using this key. <br><img src="images/question_40.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which model best represents Ms. Chapman\'s equation?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_40a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_40d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'The model should show 1 plus an unknown amount (n) equaling 6 total units.'
 },
 {
 id: '41',
 text: 'Which rule can be used to find the next number in this increasing pattern? <center>3, 4, 6, 9, 13, 18, 24, _</center>',
 type: 'multiple-choice',
 options: ['Add 7 to 24', 'Add 6 to 24', 'Add 5 to 24', 'Add 3 to 24'],
 correctAnswer: 0, 
 explanation: 'The differences are +1, +2, +3, +4, +5, +6, so the next difference is +7. Add 7 to 24.'
 },
 {
 id: '42',
 text: 'Jordan needs to walk 6 more miles this week to reach his weekly goal of 21 miles. Which number sentence can be used to find n, the total number of miles that Jordan has walked so far this week?',
 type: 'multiple-choice',
 options: ['n = 6 + 21', 'n + 6 = 21', 'n = 6 × 21', 'n - 6 = 21'],
 correctAnswer: 1, 
 explanation: 'Miles walked (n) plus 6 more miles equals the goal of 21 miles: n + 6 = 21.'
 },
 {
 id: '43',
 text: 'The table shows the number of points Ellie scored in each of five games. <br><img src="images/question_43.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> The range is 10 because it is the--',
 type: 'multiple-choice',
 options: ['middle number of points she scored', 'number of points she scored most often', 'fair share of the number of points she scored', 'difference between the highest and lowest number of points she scored'],
 correctAnswer: 3, 
 explanation: 'Range is the difference between the highest and lowest values in a data set.'
 },
 {
 id: '44',
 text: 'This stem-and-leaf plot shows the number of pies sold at a bakery each day for 14 days. <br><img src="images/question_44.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on the information in the stem-and-leaf plot, which statement is correct?',
 type: 'multiple-choice',
 options: ['The greatest number of pies sold on any day was 30.', 'The greatest number of pies sold on any day was 25.', 'The least number of pies sold on any day was 8.', 'The least number of pies sold on any day was 0.'],
 correctAnswer: 0, 
 explanation: 'Read the stem-and-leaf plot to find the highest value shown in the data.'
 },
 {
 id: '45',
 text: 'This sample space shows all the possible combinations of one type of main dish and one type of drink from which Roberto can choose. <center>Cereal, Milk<br>Cereal, Juice<br>Eggs, Milk<br>Eggs, Juice<br>Pancakes, Milk<br>Pancakes, Juice</center> According to the sample space, what is the probability Roberto will select eggs and juice?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: 'There is 1 favorable outcome (Eggs, Juice) out of 6 total possible outcomes, so P = 1/6.'
 },
 {
 id: '46',
 text: 'What is the 7th term in this decreasing pattern? <center>73, 64, 56, 49, 43, ...</center>',
 type: 'free-response',
 correctKeywords: ['34'],
 explanation: 'The differences are -9, -8, -7, -6, so next differences are -5, -4. Continue: 43-5=38, 38-4=34.'
 },
 {
 id: '47',
 text: 'This set of data shows the number of pages that Caden read each night for 5 nights. <center>{ 15, 12, 18, 10, 30 }</center> What is the range for this set of data?',
 type: 'multiple-choice',
 options: ['20', '18', '17', '15'],
 correctAnswer: 0, 
 explanation: 'Range = highest value - lowest value = 30 - 10 = 20.'
 },
 {
 id: '48',
 text: 'Which situation could be represented by the open sentence 15 - 5 = p?',
 type: 'multiple-choice',
 options: ['Stuart is reading a book that has a total of 15 chapters. He reads 5 chapters every day. How many days will it take Stuart to finish this book?', 'Stuart is reading a book that has a total of 15 chapters. He has already read 5 chapters. How many chapters of the book are left for Stuart to read?', 'Stuart is reading a book that has a total of 15 chapters. This book has 5 chapters less than the book Stuart read last week. How many chapters were in the book Stuart read last week?', 'Stuart is reading a book that has a total of 15 chapters. This is 5 times the number of chapters as the book. Stuart read last week. How many chapters were in the book Stuart read last week?'],
 correctAnswer: 1, 
 explanation: 'The equation 15 - 5 = p represents 15 total chapters minus 5 read chapters equals remaining chapters.'
 },
 {
 id: '49',
 text: 'Which equation shows the distributive property?',
 type: 'multiple-choice',
 options: ['256 × 1 = 256', '5 × 9 × 4 = 4 × 9 × 5', '(8 × 6) + (8 × 7) = 8(6 + 7)', '(12 + 19) + 13 = 12 + (19 + 13)'],
 correctAnswer: 2, 
 explanation: 'The distributive property: a(b + c) = ab + ac. The equation (8 × 6) + (8 × 7) = 8(6 + 7) shows this.'
 },
  {
 id: '50',
 text: 'Sylvia has 18 pieces of red, cherry-flavored candy to share equally among friends. Which is a variable in this situation?',
 type: 'multiple-choice',
 options: ['The number of friends who will receive candy', 'The number of pieces of candy that Sylvia has', 'The flavor of each piece of candy', 'The color of each piece of candy'],
 correctAnswer: 0, 
 explanation: 'A variable is an unknown quantity that can change. The number of friends is not given and can vary.'
 },
];

// Scaled Score Mapping for Grade 5 Mathematics (2014)
// Maps raw scores to scaled scores
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
  
  console.log(`Grade 5 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 5 Math`);
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
        testType: 'Grade 5 Mathematics (2014)'
      };
      
      console.log(`Saving Grade 5 Math result: ${rawScore}/40 → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 5 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 5 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced Grade 5 Math result ${index + 1}: ${result.rawScore}/40 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 5 Math results saved');
      
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
    
    console.log('Grade 5 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();