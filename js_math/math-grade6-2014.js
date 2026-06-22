window.TEST_IDENTIFIER = 'math_grade6_2014';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which of these numbers is between <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> and <math><mfrac><mn>87</mn><mn>100</mn></mfrac></math> on a number line?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>92</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>11</mn><mn>100</mn></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'Convert to decimals: 1/3 ≈ 0.33, 87/100 = 0.87, 3/5 = 0.6. Since 0.33 < 0.6 < 0.87, the answer is 3/5.'
 },
 {
 id: '2',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> = 0.4', '20% = <math><mfrac><mn>1</mn><mn>20</mn></mfrac></math>', '0.3% = 0.03', '8.6 = 0.086%'],
 correctAnswer: 0, 
 explanation: 'Convert 2/5 to decimal: 2 ÷ 5 = 0.4. This statement is true.'
 },
 {
 id: '3',
 text: 'List the numbers in order from least to greatest.',
 type: 'drag-drop',
 options: ['<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>', '0.63%', '0.6'],
 dropZones: ['Least', ' ', 'Greatest'],
 correctAnswer: [1, 2, 0],
 explanation: 'Convert to decimals: 0.63% = 0.0063, 0.6 = 0.6, 2/3 ≈ 0.667. Order: 0.63%, 0.6, 2/3.'
 },
 {
 id: '4',
 text: 'What is the value of 7² - 4 + 5?',
 type: 'multiple-choice',
 options: ['50', '40', '15', '14'],
 correctAnswer: 0,
 explanation: 'Calculate: 7² = 49, then 49 - 4 + 5 = 50.'
 },
 {
 id: '5',
 text: '1<math><mfrac><mn>7</mn><mn>8</mn></mfrac></math> / 3 = ?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>7</mn><mn>24</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>', '3<math><mfrac><mn>7</mn><mn>24</mn></mfrac></math>', '5<math><mfrac><mn>5</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 1,
 explanation: 'Convert to improper fraction: 1 7/8 = 15/8. Then 15/8 ÷ 3 = 15/8 × 1/3 = 15/24 = 5/8.'
 },
 {
 id: '6',
 text: 'What is the value of 6 + 3 • 2',
 type: 'multiple-choice',
 options: ['36', '18', '12', '11'],
 correctAnswer: 2, 
 explanation: 'Follow order of operations (PEMDAS): First multiply 3 × 2 = 6, then add 6 + 6 = 12.'
 },
 {
 id: '7',
 text: 'What is 3<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> • 1<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['2<math><mfrac><mn>4</mn><mn>5</mn></mfrac></math>', '3<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '4<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>', '5<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Convert to improper fractions: 3 1/2 = 7/2, 1 1/4 = 5/4. Multiply: 7/2 × 5/4 = 35/8 = 4 3/8.'
 },
 {
 id: '8',
 text: 'A bag contains red apples and yellow apples. The ratio of red apples to yellow apples in the bag is 9 to 4. Which of these statements could be true?',
 type: 'multiple-choice',
 options: ['There are exactly 6 red apples and 1 yellow apple in the bag.', 'There are exactly 18 red apples and 8 yellow apples in the bag.', 'There are exactly 4 red apples and 9 yellow apples in the bag.', 'There are exactly 9 red apples and 13 yellow apples in the bag.'],
 correctAnswer: 1, 
 explanation: 'The ratio 9:4 means red apples are 9k and yellow apples are 4k for some k. Check: 18:8 = 9:4 ✓'
 },
 {
 id: '9',
 text: 'Which of these is an integer?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math>', '6.5', '-12', '-2<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'An integer is a whole number (positive, negative, or zero). -12 is an integer; the others are fractions or decimals.'
 },
 {
 id: '10',
 text: 'Which ratio correctly represents 0.1%?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>1</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>10</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>100</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>1,000</mn></mfrac></math>'],
 correctAnswer: 3, 
 explanation: '0.1% = 0.1/100 = 0.001 = 1/1,000.'
 },
 {
 id: '11',
 text: 'Which of these lists the numbers in order from least to greatest?',
 type: 'multiple-choice',
 options: ['3, -16, 47', '-16, 3, 47', '3, 47, -16', '-16, 47, 3'],
 correctAnswer: 1, 
 explanation: 'On a number line, -16 < 3 < 47. Negative numbers are less than positive numbers.'
 },
 {
 id: '12',
 text: 'Identify each statement that is true.',
 type: 'multiple-select',
 options: ['-5 > -8', '-7 ≥ -4', '-3 > 2', '-1 ≤ -6', '3 < -9', '10 ≥ 8'],
 correctAnswer: [0, 5], 
 explanation: '-5 > -8 is true (closer to 0), and 10 ≥ 8 is true. The other statements are false.'
 },
 {
 id: '13',
 text: 'This picture represents 4 pizzas. <br><img src="images/question_13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Exactly how many <math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> are in 4?',
 type: 'multiple-choice',
 options: ['2', '5', '10', '20'],
 correctAnswer: 2, 
 explanation: 'To find how many 2/5 are in 4, divide: 4 ÷ 2/5 = 4 × 5/2 = 20/2 = 10.'
 },
 {
 id: '14',
 text: 'Valerie wrote the values of the powers of 3 that she knew. <br><center>3¹ = 3<br>3² = 9<br>3³ = 27<br>3⁴ = 81<br>3⁵ = ?</center><br> What is the value of 3⁵?',
 type: 'multiple-choice',
 options: ['15', '84', '125', '243'],
 correctAnswer: 3, 
 explanation: 'Following the pattern: 3⁵ = 3⁴ × 3 = 81 × 3 = 243.'
 },
 {
 id: '15',
 text: 'Samuel bought 4 rolls of tape to seal boxes. Each roll contains 32.9 meters of tape. He uses 1.2 meters of this tape to seal each box. What is the total number of boxes Samuel can seal with these 4 rolls of tape?',
 type: 'multiple-choice',
 options: ['109 boxes', '130 boxes', '132 boxes', '157 boxes'],
 correctAnswer: 0, 
 explanation: 'Total tape: 4 × 32.9 = 131.6 meters. Boxes: 131.6 ÷ 1.2 = 109.67, so 109 complete boxes.'
 },
 {
 id: '16',
 text: 'Mia is working on projects that require 3<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> yards of ribbon per project. Mia has 28 yards of ribbon. What is the greatest number of projects that Mia can complete with this ribbon?',
 type: 'multiple-choice',
 options: ['98', '31<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '24<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '8'],
 correctAnswer: 3, 
 explanation: 'Divide total ribbon by ribbon per project: 28 ÷ 3 1/2 = 28 ÷ 7/2 = 28 × 2/7 = 8 projects.'
 },
 {
 id: '17',
 text: 'Kevin threw a football 19<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> yards. Scott threw the football 24<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> yards. Which statement is true?',
 type: 'multiple-choice',
 options: ['Kevin threw the football 4<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> yards farther than Scott.', 'Scott threw the football 4<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math> yards farther than Kevin.', 'Kevin threw the football 5<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> yards farther than Scott.', 'Scott threw the football 5<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> yards farther than Kevin.'],
 correctAnswer: 1, 
 explanation: 'Find the difference: 24 1/3 - 19 2/3 = 24 1/3 - 19 2/3 = 4 2/3 yards. Scott threw farther.'
 },
 {
 id: '18',
 text: 'Alisha wants to buy a camera that costs $228, including tax. She has saved $4.75 each week for the past 8 weeks. How much more money does Alisha need to purchase the camera?',
 type: 'multiple-choice',
 options: ['$6', '$38', '$48', '$190'],
 correctAnswer: 3, 
 explanation: 'Amount saved: $4.75 × 8 = $38. Amount needed: $228 - $38 = $190.'
 },
 {
 id: '19',
 text: 'The regular price of a meal is $6.75. On Tuesday, the meal is on sale for $1.00 off the regular price. Sarah bought 4 of these meals on Tuesday. What is the total cost of these 4 meals before tax?',
 type: 'free-response',
 correctKeywords: ['23.00', '23', '23.0'],
 explanation: 'Sale price per meal: $6.75 - $1.00 = $5.75. Total for 4 meals: $5.75 × 4 = $23.00.'
 },
 {
 id: '20',
 text: 'Use the given temperatures to make each statement true.',
 type: 'drag-drop',
 options: ['20°C', '100°C', '32°F', '70°F', '98°F'],
 dropZones: ['The temperature at which water boils is', 'The temperature at which water freezes is'],
 correctAnswer: [1, 2],
 explanation: 'Water boils at 100°C and freezes at 32°F (0°C).'
 },
 {
 id: '21',
 text: 'Which ordered pair best represents point Y on the grid? <br><img src="images/question_21.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['(6, -3)', '(5, -2)', '(-2, 5)', '(-3, 6)'],
 correctAnswer: 1, 
 explanation: 'Read coordinates as (x, y). Locate point Y on the grid and identify its x and y coordinates.'
 },
 {
 id: '22',
 text: 'Victor measured a circular lid and found d, the diameter, was 8 inches and C, the circumference, was 25 inches. <br><img src="images/question_22.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which expression represents an approximate value for π?',
 type: 'multiple-choice',
 options: ['25 + 8', '25 / 8', '25 x 8', '25 - 8'],
 correctAnswer: 1, 
 explanation: 'The formula for circumference is C = πd, so π = C/d = 25/8.'
 },
 {
 id: '23',
 text: 'Neela is making rectangular place mats that are 12 inches wide and 15 inches long. What is the least amount of ribbon that she will need to create a ribbon border around 1 place mat?',
 type: 'multiple-choice',
 options: ['54 inches', '54 square inches', '180 inches', '180 square inches'],
 correctAnswer: 0, 
 explanation: 'Find the perimeter: P = 2(l + w) = 2(15 + 12) = 2(27) = 54 inches.'
 },
 {
 id: '24',
 text: 'The edge length of a cube is shown. <br><img src="images/question_24.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> What is the total surface area of this cube?',
 type: 'multiple-choice',
 options: ['54 square meters', '36 square meters', '27 square meters', '18 square meters'],
 correctAnswer: 0, 
 explanation: 'If the edge length is 3 meters, surface area = 6s² = 6(3)² = 6(9) = 54 square meters.'
 },
 {
 id: '25',
 text: 'Ava placed the point of her pencil on the origin of a regular coordinate plane. She marked a point after moving her pencil 4 units to the left and 7 units up. Which ordered pair identifies where Ava marked her point?',
 type: 'multiple-choice',
 options: ['(4, 7)', '(-4, 7)', '(7, 4)', '(7, -4)'],
 correctAnswer: 1, 
 explanation: 'From origin (0,0), move 4 units left (x = -4) and 7 units up (y = 7). The point is (-4, 7).'
 },
 {
 id: '26',
 text: 'Which term most accurately classifies all of the figures below? <br><img src="images/question_26.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['Square', 'Trapezoid', 'Quadrilateral', 'Parallelogram'],
 correctAnswer: 2, 
 explanation: 'All the figures have 4 sides, so they are all quadrilaterals. This is the most general classification that applies to all.'
 },
 {
 id: '27',
 text: 'Figure STUVW is shown. <br><img src="images/question_27.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which polygon appears congruent to figure STUVW?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_27a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_27b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_27c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_27d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'Congruent figures have the same size and shape. Look for the figure that matches STUVW exactly, possibly rotated or flipped.'
 },
 {
 id: '28',
 text: 'The area of a rectangle is 56 square inches. Identify the two measurements from those shown that could be the length and width of this rectangle.',
 type: 'multiple-select',
 options: ['4 inches', '6 inches', '7 inches', '8 inches', '20 inches', '50 inches'],
 correctAnswer: [2, 3],
 explanation: 'Find two numbers that multiply to 56: 7 × 8 = 56. So length = 7 inches, width = 8 inches.'
 },
 {
 id: '29',
 text: 'The diameter of a circular table is 6 feet. Which of the following is closest to the area of the tabletop?',
 type: 'multiple-choice',
 options: ['113.04 square feet', '28.26 square feet', '18.84 square feet', '9.42 square feet'],
 correctAnswer: 1, 
 explanation: 'Radius = 6/2 = 3 feet. Area = πr² ≈ 3.14 × 3² = 3.14 × 9 = 28.26 square feet.'
 },
 {
 id: '30',
 text: 'Which of these best describes the location of (0, 9) on a coordinate grid?',
 type: 'multiple-choice',
 options: ['In Quadrant I', 'In Quadrant II', 'On the x-axis', 'On the y-axis'],
 correctAnswer: 3, 
 explanation: 'The point (0, 9) has x-coordinate 0, so it lies on the y-axis.'
 },
 {
 id: '31',
 text: 'The radius of a circular swimming pool is 7.8 meters. Which is closest to the circumference of this swimming pool?',
 type: 'multiple-choice',
 options: ['24.49 m', '47.76 m', '48.98 m', '191.04 m'],
 correctAnswer: 2, 
 explanation: 'Circumference = 2πr ≈ 2 × 3.14 × 7.8 = 48.984 ≈ 48.98 meters.'
 },
 {
 id: '32',
 text: 'What is the value of x when <math><mfrac><mn>x</mn><mn>3</mn></mfrac></math> = 2.13?',
 type: 'free-response',
 correctKeywords: ['6.39'],
 explanation: 'Solve for x: x/3 = 2.13, so x = 2.13 × 3 = 6.39.'
 },
 {
 id: '33',
 text: 'Phil surveyed 40 students about their favorite color. This circle graph shows the results. <br><img src="images/question_33.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Identify two colors that together could represent the results of a group of exactly 20 students.',
 type: 'multiple-select',
 options: ['Yellow', 'Green', 'Blue', 'Pink', 'Red'],
 correctAnswer: [0, 1], 
 explanation: 'Find two colors whose sections together equal half the circle (20 out of 40 students = 50%).'
 },
 {
 id: '34',
 text: 'Ivan created the arithmetic pattern shown. <br><center>1, 4, 7, 10</center><br> If Ivan continues the pattern, what will be the 7th number in the pattern?',
 type: 'multiple-choice',
 options: ['13', '16', '19', '22'],
 correctAnswer: 2, 
 explanation: 'The pattern adds 3 each time. Continue: 10, 13, 16, 19. The 7th term is 19.'
 },
 {
 id: '35',
 text: 'This list shows the number of text messages 5 friends sent last week. <br><center>13, 60, 61, 63, 64</center><br> The most appropriate measure of center for this data is the--',
 type: 'multiple-choice',
 options: ['mean because all the numbers are close to one another in value', 'median because all the numbers are close to one another in value', 'mean because 13 text messages is much lower than the other numbers', 'median because 13 text messages is much lower than the other numbers'],
 correctAnswer: 3, 
 explanation: 'With the outlier 13, the median (61) better represents the center than the mean, which is affected by the outlier.'
 },
 {
 id: '36',
 text: 'What is the solution to this number sentence? <br><center>y - 1<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> = 3</center>',
 type: 'multiple-choice',
 options: ['y = 1<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', 'y = 1<math><mfrac><mn>5</mn><mn>7</mn></mfrac></math>', 'y = 4<math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>', 'y = 5<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 2, 
 explanation: 'Add 1 3/4 to both sides: y = 3 + 1 3/4 = 4 3/4.'
 },
 {
 id: '37',
 text: 'Hector has 15 shirts in his drawer that are all the same size and shape. <ul><li>6 shirts are white</li><li>4 shirts are blue</li><li>3 shirts are red</li><li>2 shirts are green</li></ul> Hector randomly selects two shirts without replacement. The outcome of the second shirt is--',
 type: 'multiple-choice',
 options: ['dependent on the outcome of the first shirt, because not replacing the first shirt affects the outcome of thes econd shirt', 'dependent on the outcome of the first shirt, because not replacing the first shirt does not affect the outcome of the second shirt', 'independent of the outcome of the first shirt, because not replacing the first shirt affects the outcome of the second shirt', 'independent of the outcome of the first shirt, because not replacing the first shirt does not affect the outcome of the second shirt'],
 correctAnswer: 0, 
 explanation: 'Without replacement, the first selection changes the total number and composition for the second selection, making events dependent.'
 },
 {
 id: '38',
 text: 'The sixth-grade class held elections for class president. This graph shows the results of the election. <br><img src="images/question_38.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Which circle graph best represents the same set of data?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_38a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_38d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Convert the bar graph data to proportional sections in a circle graph.'
 },
 {
 id: '39',
 text: 'Which property is illustrated by this number sentence? <br><center>(0.7 + 1) · 0 = 0</center>',
 type: 'multiple-choice',
 options: ['Additive identity property', 'Multiplicative property of zero', 'Multiplicative inverse property', 'Associative property of multiplication'],
 correctAnswer: 1, 
 explanation: 'Any number multiplied by 0 equals 0. This demonstrates the multiplicative property of zero.'
 },
 {
 id: '40',
 text: 'Which of these best describes dependent events?',
 type: 'multiple-choice',
 options: ['Randomly selecting a cube from a bag of 2 red cubes and 2 green cubes that are all the same size, not replacing it, then randomly selecting another cube', 'Randomly selecting a cube from a bag of 3 red cubes and 2 green cubes that are all the same size, replacing it, then randomly selecting another cube', 'Spinning the arrows of two spinners each with 2 equal sections one time', 'Spinning the arrow of a spinner with 3 equal sections two times'],
 correctAnswer: 0, 
 explanation: 'Dependent events occur when the first event affects the outcome of the second event. Not replacing changes the composition for the second draw.'
 },
 {
 id: '41',
 text: 'The first five terms of a sequence are shown. <br><center>4, 10, 16, 22, 28, ...</center><br> What is the common difference of this sequence?',
 type: 'multiple-choice',
 options: ['4', '6', '7', '10'],
 correctAnswer: 1, 
 explanation: 'Find the difference between consecutive terms: 10 - 4 = 6, 16 - 10 = 6, etc. The common difference is 6.'
 },
 {
 id: '42',
 text: 'Which line plot shows a set of data with a balance point of 23?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_42a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_42b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_42c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_42d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The balance point is the mean of the data. Look for the line plot where the mean equals 23.'
 },
 {
 id: '43',
 text: 'Which property is illustrated by this number sentence? <br><center>13 * 1 = 13</center>',
 type: 'multiple-choice',
 options: ['Associative Property of Multiplication', 'Communative Property of Multiplication', 'Distributive Property', 'Multiplicative Identity Property', 'Multiplicative Inverse Property', 'Multiplicative Property of Zero'],
 correctAnswer: 3, 
 explanation: 'Any number multiplied by 1 equals itself. This is the multiplicative identity property.'
 },
 {
 id: '44',
 text: 'Which number sentence illustrates the multiplicative inverse property?',
 type: 'multiple-choice',
 options: ['4 * <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = 1', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> * 0 = 0', '1 * <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> = <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> * 0 = 0 * <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'The multiplicative inverse property states that a number times its reciprocal equals 1.'
 },
 {
 id: '45',
 text: 'Cale used a certain rule to create this geometric pattern. <br><center>3, 12, 48, 192, 768</center><br>Which of these patterns follows the same rule as Cale\'s pattern?',
 type: 'multiple-choice',
 options: ['1, 4, 16, 64, 256', '4, 8, 12, 16, 20', '48, 44, 40, 36, 32', '88, 97, 106, 115, 124'],
 correctAnswer: 0, 
 explanation: 'Cale\'s pattern multiplies by 4 each time. Pattern 1, 4, 16, 64, 256 also multiplies by 4 each time.'
 },
 {
 id: '46',
 text: 'Lee rolls a fair number cube labeled 1 through 6 two times. On both rolls, the number 6 lands face-up. In this situation, the second roll is--',
 type: 'multiple-choice',
 options: ['dependent on the first roll, because the outcome of the first roll affects the outcome of the second roll', 'dependent on the first roll, because the outcome of the first roll does not affect the outcome of the second roll', 'independent of the first roll, because the outcome of the first roll affects the outcome of the second roll', 'independent of the first roll, because the outcome of the first roll does not affect the outcome of the second roll'],
 correctAnswer: 3, 
 explanation: 'Each roll of a fair number cube is independent. The first roll does not affect the second roll.'
 },
 {
 id: '47',
 text: 'Which word describes 5 in the number sentence shown?<br><center>5x - 12 = 18</center>',
 type: 'multiple-choice',
 options: ['Term', 'Variable', 'Equation', 'Coefficient'],
 correctAnswer: 3, 
 explanation: 'Find the table that correctly organizes the data: 2 fourth-grade girls, 4 third-grade boys, 10 third-grade girls, 8 fourth-grade boys.'
 },
 {
 id: '48',
 text: 'Which number sentence can be used to represent all the values of n shown on this graph? <br><img src="images/question_48.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>',
 type: 'multiple-choice',
 options: ['n > 7', 'n ≥ 7', 'n < 7', 'n ≤ 7'],
 correctAnswer: 1, 
 explanation: 'Look at the graph to see which values of n are highlighted. The inequality should include all those values.'
 },
 {
 id: '49',
 text: 'Kylah spent $15 each week for 10 weeks. This circle graph represents how Kylah spent her money on each of 5 types of items. <br><img src="images/question_49.png" class="question-image" alt="Image failed to load. Please try again later."></img><br> Based on this graph, which appears closest to the total amount Kylah spent on books and music for the 10-week period?',
 type: 'multiple-choice',
 options: ['$35.00', '$40.00', '$50.00', '$75.00'],
 correctAnswer: 2, 
 explanation: 'Total spent: $15 × 10 = $150. From the graph, estimate the percentage for books and music combined, then calculate that percentage of $150.'
 },
 {
 id: '50',
 text: 'Which graph represents the solution set to this inequality? <br><center>1 ≥ n</center>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_50a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_50b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_50c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_50d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3, 
 explanation: 'The inequality 1 ≥ n means n ≤ 1. The graph should show all values less than or equal to 1.'
 },
];

// Scaled Score Mapping for Grade 6 Mathematics (2014)
// Maps raw scores to scaled scores
const scaledScoreMapping = {
  0: 0,
  1: 218,
  2: 249,
  3: 268,
  4: 282,
  5: 293,
  6: 303,
  7: 311,
  8: 319,
  9: 326,
  10: 332,
  11: 338,
  12: 344,
  13: 349,
  14: 354,
  15: 359,
  16: 364,
  17: 368,
  18: 372,
  19: 377,
  20: 381,
  21: 385,
  22: 389,
  23: 393,
  24: 397,
  25: 401,
  26: 405,
  27: 409,
  28: 413,
  29: 416,
  30: 420,
  31: 424,
  32: 429,
  33: 433,
  34: 437,
  35: 441,
  36: 446,
  37: 451,
  38: 456,
  39: 461,
  40: 466,
  41: 472,
  42: 478,
  43: 485,
  44: 493,
  45: 502,
  46: 513,
  47: 526,
  48: 544,
  49: 574,
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
  
  console.log(`Grade 6 Math independent results system initializing with storage key: ${TEST_STORAGE_KEY}`);
  
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
        console.log(`Loaded ${this.results.length} results for Grade 6 Math`);
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
        testType: 'Grade 6 Mathematics (2014)'
      };
      
      console.log(`Saving Grade 6 Math result: ${rawScore}/40 → ${scaledScore} (${performanceLevel})`);
      
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
    console.log('Enhancing all historical Grade 6 Math results with scaled scores...');
    
    const savedResults = JSON.parse(localStorage.getItem(TEST_STORAGE_KEY) || '[]');
    let updated = false;
    
    savedResults.forEach((result, index) => {
      if (!result.scaledScore && result.correctAnswers !== undefined) {
        result.scaledScore = getScaledScore(result.correctAnswers);
        result.performanceLevel = getPerformanceLevel(result.scaledScore);
        result.rawScore = result.correctAnswers;
        result.testType = 'Grade 6 Mathematics (2014)';
        updated = true;
        console.log(`Enhanced Grade 6 Math result ${index + 1}: ${result.rawScore}/50 → ${result.scaledScore} (${result.performanceLevel})`);
      }
    });
    
    if (updated) {
      localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(savedResults));
      console.log('Updated Grade 6 Math results saved');
      
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
    
    console.log('Grade 6 Math independent results system initialized');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
  
})();