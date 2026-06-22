window.TEST_IDENTIFIER = 'math_grade8_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'Two friends went out to dinner. The total bill was $38.90 before tax and tip.<br>• The tax rate was 5.5%.<br>• They wanted to tip 20% on the total before tax.<br><br>Which expression could NOT be used to estimate the total cost including tax and tip?',
 type: 'multiple-choice',
 options: ['40(1.26)', '40(0.06) + 40(0.2)', '40 + 40(0.2 + 0.06)', '40 + 40(0.06) + 40(0.2)'],
 correctAnswer: 1,
 explanation: 'To estimate the total with tax (5.5% ≈ 6%) and tip (20%), we need 40 + 40(0.06) + 40(0.2) = 40(1.26). Option B only calculates the tax and tip amounts without the original bill.'
 },
 {
 id: '2',
 text: 'The original price of a holiday decoration was $28. The price decreased to $0.60 after the holiday was over. Which is closest to the percent decrease in the holiday decoration price?',
 type: 'multiple-choice',
 options: ['114%', '98%', '46%', '27%'],
 correctAnswer: 1,
 explanation: 'The decrease is $28 - $0.60 = $27.40. Percent decrease = (27.40/28) × 100% ≈ 98%'
 },
 {
 id: '3',
 text: 'Which number has a value between <math><mo>−</mo><msqrt><mn>9</mn></msqrt></math> and π?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>13</mn><mn>4</mn></mfrac></math>', '<math><mo>−</mo><mfrac><mn>18</mn><mn>6</mn></mfrac></math>', '3.1 × 10²', '3.2 × 10⁻²'],
 correctAnswer: 3,
 explanation: '−√9 = −3 and π ≈ 3.14. We need a value between −3 and 3.14. Option D: 3.2 × 10⁻² = 0.032, which is between −3 and 3.14.'
 },
 {
 id: '4',
 text: 'Look at these angles.<br><img src="images/4.png" class="question-image" alt="Angles M=71°, N=109°, P=19°, Q=71°"><br>Which two angles are complementary?',
 type: 'multiple-choice',
 options: ['∠M and ∠Q', '∠N and ∠P', '∠P and ∠Q', '∠M and ∠N'],
 correctAnswer: 2,
 explanation: 'Complementary angles add to 90°. ∠P (19°) + ∠Q (71°) = 90°'
 },
 {
 id: '5',
 text: 'Angle C and angle D are supplementary. The measure of angle D is 72°. What is the measure of angle C?',
 type: 'multiple-choice',
 options: ['18°', '72°', '108°', '162°'],
 correctAnswer: 2,
 explanation: 'Supplementary angles add to 180°. Angle C = 180° − 72° = 108°'
 },
 {
 id: '6',
 text: 'A student made the square-based pyramid shown. What is the area of the base of this pyramid?<br><img src="images/6.png" class="question-image" alt="Pyramid with Volume = 588 cubic inches and Height = 9 inches">',
 type: 'multiple-choice',
 options: ['196 sq in.', '65 sq in.', '49 sq in.', '14 sq in.'],
 correctAnswer: 0,
 explanation: 'Volume of pyramid = (1/3) × Base area × Height. 588 = (1/3) × Base area × 9. Base area = 588 × 3 ÷ 9 = 196 sq in.'
 },
 {
 id: '7',
 text: 'Trapezoid MNPQ is graphed on the coordinate plane.<br><img src="images/7.png" class="question-image" alt="Trapezoid MNPQ on coordinate plane"><br>Trapezoid MNPQ will be translated 3 units to the left and 2 units down. Which of these best represents the coordinates of N′?',
 type: 'multiple-choice',
 options: ['(0, 0)', '(1, −1)', '(0, 4)', '(6, 4)'],
 correctAnswer: 0,
 explanation: 'From the graph, N is at (3, 2). Translating 3 units left and 2 units down: N′ = (3−3, 2−2) = (0, 0)'
 },
 {
 id: '8',
 text: 'Each model shown consists of three squares and a triangle. The areas of the squares are given in square centimeters. For which model could the Pythagorean Theorem be used to prove that the triangle is a right triangle? Note: Models are not drawn to scale.',
 type: 'multiple-choice',
 options: [
    {url: 'images/8a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/8b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/8c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/8d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'For a right triangle, a² + b² = c². Check option H: 10 + 35 = 45, so the Pythagorean Theorem holds.'
 },
 {
 id: '9',
 text: 'A composite figure is shown.<br><img src="images/9.png" class="question-image" alt="Composite figure with dimensions 13cm, 10cm, 3cm, 2cm, 2cm"><br>What is the area of this figure?',
 type: 'multiple-choice',
 options: ['30 cm²', '54 cm²', '59 cm²', '74 cm²'],
 correctAnswer: 3,
 explanation: 'Break the figure into rectangles and calculate the total area. The area is 74 cm².'
 },
 {
 id: '10',
 text: 'A rectangle as shown has a length of 0.9 centimeters and a width of 0.4 cm. A circle is drawn inside that touches the rectangle at two points.<br><img src="images/10.png" class="question-image" alt="Rectangle 0.9cm × 0.4cm with circle inside"><br>Which is closest to the area of the shaded region in the rectangle?',
 type: 'multiple-choice',
 options: ['0.14 cm²', '0.23 cm²', '0.28 cm²', '0.49 cm²'],
 correctAnswer: 1,
 explanation: 'Rectangle area = 0.9 × 0.4 = 0.36 cm². Circle diameter = 0.4 cm, radius = 0.2 cm. Circle area = πr² ≈ 3.14 × 0.04 ≈ 0.126 cm². Shaded area ≈ 0.36 − 0.126 ≈ 0.23 cm²'
 },
 {
 id: '11',
 text: 'Leslie built a walkway around a rectangular garden as shown. The walkway is the same width on all sides of the garden.<br><img src="images/11.png" class="question-image" alt="Garden 20ft × 30ft with 3ft walkway"><br>What is the perimeter of this garden?',
 type: 'multiple-choice',
 options: ['100 ft', '94 ft', '88 ft', '76 ft'],
 correctAnswer: 3,
 explanation: 'The walkway is 3 ft wide on all sides. Garden dimensions: Length = 30 − 2(3) = 24 ft, Width = 20 − 2(3) = 14 ft. Perimeter = 2(24 + 14) = 76 ft'
 },
 {
 id: '12',
 text: 'Which set has a domain of {2, 3} and a range of {5, 8}?',
 type: 'multiple-choice',
 options: ['{ (2, 8), (3, 5), (5, 8) }', '{ (3, 5), (2, 5), (8, 3) }', '{ (2, 8), (3, 5) }', '{ (5, 2), (8, 3) }'],
 correctAnswer: 2,
 explanation: 'Domain is the set of x-values, range is the set of y-values. Option H has domain {2, 3} and range {5, 8}.'
 },
 {
 id: '13',
 text: 'Some students are selling candy bars to raise money to purchase new gym equipment. The more candy bars they sell, the more money they raise. Which of these is the independent variable in this situation?',
 type: 'multiple-choice',
 options: ['The amount of money raised', 'The number of students', 'The number of candy bars sold', 'The cost of new gym equipment'],
 correctAnswer: 2,
 explanation: 'The independent variable is what you control or change. Students control how many candy bars they sell, which then determines the money raised.'
 },
 {
 id: '14',
 text: 'A line contains the points represented by this table of values.<br><img src="images/14.png" class="question-image" alt="Table with x values 1,3,5 and y values 4,6,8"><br>This line has a y-intercept of —',
 type: 'multiple-choice',
 options: ['0', '1', '2', '3'],
 correctAnswer: 3,
 explanation: 'The pattern shows y = x + 3. When x = 0, y = 3. The y-intercept is 3.'
 },
 {
 id: '15',
 text: 'Which graph appears to contain all the ordered pairs in this table?<br><img src="images/15.png" class="question-image" alt="Four coordinate plane graphs labeled A, B, C, D">',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0,
 explanation: 'Plot the points (−5, −3), (0, 2), and (3, 5). These points form a line that appears in Graph A.'
 },
 {
 id: '16',
 text: 'Aaron has 5 ounces of water in a container. He adds 2.6 ounces of water each minute. Which table of values represents the number of ounces of water in the container, y, after x minutes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1,
 explanation: 'y = 5 + 2.6x. When x = 2: y = 5 + 5.2 = 10.2. When x = 5: y = 5 + 13 = 18.0'
 },
 {
 id: '17',
 text: 'Which equation represents all the values in the table?<br><img src="images/17.png" class="question-image" alt="Table with x values 1,3,5 and y values 4,6,8"><br>',
 type: 'multiple-choice',
 options: ['y = −2x + 3', 'y = −x + 11', 'y = x + 2', 'y = 2x − 1'],
 correctAnswer: 3,
 explanation: 'Test each equation with the given points. y = 2x − 1 works: When x = 1: y = 2(1) − 1 = 1. When x = 3: y = 2(3) − 1 = 5. When x = 4: y = 2(4) − 1 = 7.'
 },
 {
 id: '18',
 text: 'What value of p makes this equation true?<br><math><mn>2</mn><mi>p</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn>3</mn><mo>(</mo><mi>p</mi><mo>+</mo><mn>2</mn><mo>)</mo></mrow><mn>4</mn></mfrac></math>',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>6</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>6</mn><mn>11</mn></mfrac></math>', '<math><mo>−</mo><mfrac><mn>6</mn><mn>11</mn></mfrac></math>', '<math><mo>−</mo><mfrac><mn>6</mn><mn>5</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: 'Multiply both sides by 4: 8p = −3(p + 2). Expand: 8p = −3p − 6. Add 3p: 11p = −6. Divide by 11: p = −6/11'
 },
 {
 id: '19',
 text: 'The math club had $200 to buy supplies for t-shirt decorating.<br>• They spent $10 for the first t-shirt and $8 for each additional t-shirt.<br>• They purchased y t-shirts.<br><br>Which inequality best represents this situation?',
 type: 'multiple-choice',
 options: ['10(y − 1) + 8 ≥ 200', '10 + 8(y − 1) ≥ 200', '10(y − 1) + 8 ≤ 200', '10 + 8(y − 1) ≤ 200'],
 correctAnswer: 3,
 explanation: 'First t-shirt costs $10, then (y−1) additional t-shirts at $8 each. Total: 10 + 8(y−1) must be ≤ 200 (cannot exceed budget).'
 },
 {
 id: '20',
 text: 'Greta has 2 bags of tiles that are all the same size and shape.<br>• Bag A has 1 blue tile and 3 green tiles.<br>• Bag B has 2 yellow tiles and 4 black tiles.<br><br>Which of these best describes dependent events?',
 type: 'multiple-choice',
 options: [
    'Randomly selecting one tile from Bag A, replacing the tile, then randomly selecting another tile from Bag A',
    'Randomly selecting one tile from Bag B, not replacing the tile, then randomly selecting another tile from Bag B',
    'Randomly selecting one tile from Bag A, replacing the tile, then randomly selecting one tile from Bag B',
    'Randomly selecting one tile from Bag B, not replacing the tile, then randomly selecting one tile from Bag A'
 ],
 correctAnswer: 1,
 explanation: 'Dependent events occur when the first event affects the probability of the second. Not replacing the tile from Bag B changes the probability for the second selection.'
 },
 {
 id: '21',
 text: 'A spinner has four equal sections labeled W, X, Y, and Z. A fair coin has faces labeled heads and tails. Edward will spin the arrow of the spinner and flip the coin one time each. What is the probability the arrow will land on the section labeled Z and the coin will land with heads face-up?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'P(Z) = 1/4 and P(heads) = 1/2. For independent events: P(Z and heads) = 1/4 × 1/2 = 1/8'
 },
 {
 id: '22',
 text: 'Stella has some colored cards that are the same size and shape.<br>• The probability of randomly selecting a blue card is 20%.<br>• The probability of randomly selecting a red card is 30%.<br><br>What is the probability Stella will randomly select a card that is NOT blue, replace it, then randomly select a card that is red?',
 type: 'multiple-choice',
 options: ['6%', '14%', '24%', '50%'],
 correctAnswer: 2,
 explanation: 'P(not blue) = 1 − 0.20 = 0.80. P(red) = 0.30. P(not blue then red) = 0.80 × 0.30 = 0.24 = 24%'
 },
 {
 id: '23',
 text: 'Emma is on the school golf team. Her scores from 15 practice rounds are shown.<br>93, 95, 102, 107, 107, 108, 111, 113, 114, 114, 115, 118, 120, 120, 125<br><br>From the sample scores collected, can you perform a non-biased statistical analysis for the school golf team?',
 type: 'multiple-choice',
 options: [
    'Yes, because the golfer is in the school',
    'No, because the scores are only from practice rounds',
    'No, because the scores are only from one member of the golf team',
    'Yes, because the data include scores from a large number of practice rounds'
 ],
 correctAnswer: 2,
 explanation: 'To analyze the entire team, you need data from all team members, not just one golfer. This sample is biased.'
 },
 {
 id: '24',
 text: 'A baker recorded the number of batches of cookies he made on each of seven days. He baked a different number of batches of cookies each day. This boxplot summarizes his data.<br><img src="images/24.png" class="question-image" alt="Boxplot showing cookie batch data"><br>The baker baked 30 batches of cookies on the eighth day. He redraws the boxplot to include the additional data. Which statement comparing the new boxplot to the original boxplot is NOT true?',
 type: 'multiple-choice',
 options: ['The median increased.', 'The lower extreme increased.', 'The upper extreme increased.', 'The value of the interquartile range increased.'],
 correctAnswer: 1,
 explanation: 'Adding 30 batches (a high value) increases the upper extreme and median, but does not change the lower extreme (minimum value).'
 },
 {
 id: '25',
 text: 'The number of points scored by four basketball players during each of 20 games is summarized in these boxplots.<br><img src="images/25.png" class="question-image" alt="Boxplots for Stephen, Ronald, Dennis, and Charles"><br>Which player scored 10 or more points in the greatest number of games?',
 type: 'multiple-choice',
 options: ['Charles', 'Dennis', 'Ronald', 'Stephen'],
 correctAnswer: 1,
 explanation: 'Look at the median and quartiles for each player. Dennis has the highest percentage of games with 10+ points based on the boxplot distribution.'
 },
 {
 id: '26',
 text: 'The number of points scored by two basketball teams is summarized in these boxplots.<br><img src="images/26.png" class="question-image" alt="Boxplots for Team A and Team B"><br>• Team A scored a different number of points in each of the team\'s 14 games.<br>• Team B scored a different number of points in each of the team\'s 13 games.<br><br>What is the total number of games in which Team A and Team B each scored 55 or more points?',
 type: 'multiple-choice',
 options: ['13', '14', '16', '18'],
 correctAnswer: 3,
 explanation: 'From the boxplots, count games where each team scored 55+. Team A: about 10 games. Team B: about 8 games. Total: 18 games.'
 },
 {
 id: '27',
 text: 'A student will collect data about fertilizer and its effect on grass. The student will create a scatterplot to display the amount of fertilizer used and the height of grass after 2 weeks.<br><br>To create this scatterplot, the student does NOT need to include —',
 type: 'multiple-choice',
 options: ['the height of the grass samples', 'the amount of fertilizer for each sample', 'the amount of water for each sample', 'the number of grass samples'],
 correctAnswer: 2,
 explanation: 'The scatterplot shows fertilizer amount vs. grass height. Water amount is not being plotted, so it\'s not needed for the scatterplot.'
 },
 {
 id: '28',
 text: 'Which scatterplot shows data with a negative relationship?',
 type: 'multiple-choice',
 options: [
    {url: 'images/28a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/28d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3,
 explanation: 'A negative relationship means as one variable increases, the other decreases. The Water in Container graph shows water decreasing over time.'
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