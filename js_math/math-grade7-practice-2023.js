window.TEST_IDENTIFIER = 'math_grade7_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'Samantha stated that 324 is a perfect square. Which factors could Samantha have used to justify her statement?',
 type: 'multiple-choice',
 options: ['17 and 17', '18 and 18', '81 and 81', '162 and 162'],
 correctAnswer: 1,
 explanation: '18 × 18 = 324, which makes 324 a perfect square. The other options do not produce 324 when multiplied.'
 },
 {
 id: '2',
 text: 'Which operation should be performed last when using the order of operations to simplify this expression?<br><center>20 − <math><msup><mn>6</mn><mn>2</mn></msup></math> • 2</center>',
 type: 'multiple-choice',
 options: ['20 − 72', '−16 • 2', '20 − 36', '6 • 2'],
 correctAnswer: 0,
 explanation: 'Following order of operations (PEMDAS): First calculate 6² = 36, then multiply 36 • 2 = 72, and finally subtract 20 − 72. The last operation is the subtraction.'
 },
 {
 id: '3',
 text: 'Adam had 820 baseball cards. He gave 25% of the cards to his brother. How many cards did Adam give to his brother?',
 type: 'multiple-choice',
 options: ['795', '615', '205', '164'],
 correctAnswer: 2,
 explanation: '25% of 820 = 0.25 × 820 = 205 cards given to his brother.'
 },
 {
 id: '4',
 text: 'The table shows the number of different-colored roses sold at a flower shop.<br><img src="images/4.png" class="question-image" alt="Roses Sold table showing Yellow, Red, Pink, and Orange roses with pictograph representation where each symbol = 20 roses"></img><br>The shop owner will create a circle graph to represent the data. What percent of the circle should be used to represent the number of pink roses sold?',
 type: 'multiple-choice',
 options: ['15%', '20%', '25%', '30%'],
 correctAnswer: 3,
 explanation: 'Count the total roses from the pictograph. Pink roses make up 30% of the total roses sold.'
 },
 {
 id: '5',
 text: 'A cylinder has a radius of 7 inches and a height of 20 inches. Which is closest to the surface area of this cylinder?',
 type: 'multiple-choice',
 options: ['517 sq in.', '769 sq in.', '1,187 sq in.', '3,077 sq in.'],
 correctAnswer: 2,
 explanation: 'Surface area of cylinder = 2πr² + 2πrh = 2π(7)² + 2π(7)(20) = 98π + 280π = 378π ≈ 1,187 square inches.'
 },
 {
 id: '6',
 text: 'The measurements of a rectangular prism are shown.<br><img src="images/6.png" class="question-image" alt="Rectangular prism with dimensions 5 in., 3 in., and 3 in."></img><br>If the height of this rectangular prism was multiplied by <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>, the surface area would —',
 type: 'multiple-choice',
 options: ['be double the original surface area.', 'be half the original surface area.', 'decrease by 24.', 'decrease by <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>.'],
 correctAnswer: 2,
 explanation: 'Original SA = 2(5×3) + 2(5×3) + 2(3×3) = 78. New height = 1.5 in. New SA = 2(5×3) + 2(5×1.5) + 2(3×1.5) = 54. Decrease = 78 - 54 = 24 square inches.'
 },
 {
 id: '7',
 text: 'Two similar triangles are shown.<br><img src="images/7.png" class="question-image" alt="Two similar triangles with various angle and side measurements"></img><br>Which statement is NOT true?',
 type: 'multiple-choice',
 options: [
    'Segment GH corresponds to Segment KL',
    '∠H corresponds to ∠L',
    'Segment FH ≅ Segment JL',
    '∠F ≅ ∠J'
 ],
 correctAnswer: 2,
 explanation: 'In similar triangles, corresponding angles are equal and corresponding sides are proportional. Check each statement to find which one is NOT true.'
 },
 {
 id: '8',
 text: 'Triangle STU is similar to triangle XYZ.<br><img src="images/8.png" class="question-image" alt="Two similar triangles with labeled sides: Triangle STU has sides 2, 4, 5 and Triangle XYZ has sides m, 9, 10"></img><br>Which proportion can be used to find m?',
 type: 'multiple-choice',
 options: [
    '<math><mfrac><mn>9</mn><mi>m</mi></mfrac></math> = <math><mfrac><mn>10</mn><mn>5</mn></mfrac></math>',
    '<math><mfrac><mn>4</mn><mi>m</mi></mfrac></math> = <math><mfrac><mn>10</mn><mn>2</mn></mfrac></math>',
    '<math><mfrac><mn>10</mn><mi>m</mi></mfrac></math> = <math><mfrac><mn>4</mn><mn>2</mn></mfrac></math>',
    '<math><mfrac><mn>10</mn><mi>m</mi></mfrac></math> = <math><mfrac><mn>9</mn><mn>5</mn></mfrac></math>'
 ],
 correctAnswer: 0,
 explanation: 'For similar triangles, corresponding sides are proportional. Set up the proportion using corresponding sides: 9/m = 10/5.'
 },
 {
 id: '9',
 text: 'Triangle PQR is dilated by a scale factor of 2 using the origin as the center of dilation. What appears to be the new coordinates of point R after this dilation?<br><img src="images/9.png" class="question-image" alt="Coordinate grid showing triangle PQR with point R at approximately (1, -3)"></img>',
 type: 'multiple-choice',
 options: ['(1, −6)', '(2, −6)', '(2, −3)', '(3, −1)'],
 correctAnswer: 1,
 explanation: 'When dilating by scale factor 2 from the origin, multiply each coordinate by 2. If R is at (1, -3), the new coordinates are (2, -6).'
 },
 {
 id: '10',
 text: 'The distance, d, a spring stretches is directly proportional to the force, F, on the spring. The constant of proportionality is 0.25. Which equation represents this relationship?',
 type: 'multiple-choice',
 options: [
    'd = <math><mfrac><mn>0.25</mn><mi>F</mi></mfrac></math>',
    'd = 0.25F',
    'F = 0.25d',
    'F = d + 0.25'
 ],
 correctAnswer: 1,
 explanation: 'Direct proportionality means d = kF where k is the constant. With k = 0.25, the equation is d = 0.25F.'
 },
 {
 id: '11',
 text: 'One brand of dog food is sold in 4-pound bags, 12-pound bags, and 24-pound bags.<br>• A 4-pound bag costs $6.00.<br>• A 12-pound bag costs $18.00.<br>• A 24-pound bag costs $36.00.<br>• All of the costs include tax.<br><br>What is the slope of the linear equation that models the relationship between the number of pounds of dog food, x, and the cost in dollars, y?',
 type: 'multiple-choice',
 options: [
    '<math><mfrac><mn>9</mn><mn>2</mn></mfrac></math>',
    '<math><mfrac><mn>3</mn><mn>2</mn></mfrac></math>',
    '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>',
    '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'
 ],
 correctAnswer: 1,
 explanation: 'Find the unit rate: $6/4 pounds = $1.50 per pound. The slope is 3/2 or 1.5 dollars per pound.'
 },
 {
 id: '12',
 text: 'The graph of a line is shown.<br><img src="images/12.png" class="question-image" alt="Coordinate grid showing a line with positive slope"></img><br>Which statement best describes the slope of this line?',
 type: 'multiple-choice',
 options: [
    'It is negative because as the x-values decrease, the y-values increase.',
    'It is positive because as the x-values increase, the y-values increase.',
    'It is negative because the graph contains negative x- and y-values.',
    'It is positive because the graph has a positive y-intercept.'
 ],
 correctAnswer: 1,
 explanation: 'A positive slope means that as x-values increase, y-values also increase. The line rises from left to right.'
 },
 {
 id: '13',
 text: 'A school club is selling T-shirts to raise money for a field trip. The club members —<br>• purchase a pack of 24 T-shirts for $348<br>• sell each T-shirt for $19.00<br><br>Which equation best represents the total sales in dollars, y, of x T-shirts?',
 type: 'multiple-choice',
 options: [
    'y = 19x',
    'y = <math><mfrac><mi>x</mi><mn>19</mn></mfrac></math>',
    'y = 24x',
    'y = <math><mfrac><mi>x</mi><mn>24</mn></mfrac></math>'
 ],
 correctAnswer: 0,
 explanation: 'If each T-shirt sells for $19, then total sales y = 19x where x is the number of T-shirts sold.'
 },
 {
 id: '14',
 text: 'A school club is selling T-shirts to raise money for a field trip. The club members —<br>• purchase a pack of 24 T-shirts for $348<br>• sell each T-shirt for $19.00<br><br>The T-shirt supplier sells T-shirts only in packages of 24. Which table best shows the amount the club will earn after paying for the T-shirt packages and selling the T-shirts?',
 type: 'multiple-choice',
 options: [
    {url: 'images/14a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/14d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1,
 explanation: 'Revenue - Cost = Profit. For 24 shirts: (24 × $19) - $348 = $456 - $348 = $108. For 48 shirts: (48 × $19) - $696 = $216. Table G shows correct profits.'
 },
 {
 id: '15',
 text: 'A school club is selling T-shirts to raise money for a field trip. The club members —<br>• purchase a pack of 24 T-shirts for $348<br>• sell each T-shirt for $19.00<br><br>The club members decide to increase the price of the T-shirts. They will charge 5% more than the original amount. Which dollar value represents 5% of the original price?',
 type: 'multiple-choice',
 options: ['$0.05', '$0.95', '$3.80', '$5.00'],
 correctAnswer: 1,
 explanation: '5% of $19.00 = 0.05 × $19.00 = $0.95'
 },
 {
 id: '16',
 text: 'If n = 3, what is the value of (3 + <math><msup><mi>n</mi><mn>4</mn></msup></math>) ÷ 3?',
 type: 'multiple-choice',
 options: ['5', '16', '28', '30'],
 correctAnswer: 2,
 explanation: 'Substitute n = 3: (3 + 3⁴) ÷ 3 = (3 + 81) ÷ 3 = 84 ÷ 3 = 28'
 },
 {
 id: '17',
 text: 'What is the solution to the equation?<br><center><math><mfrac><mrow><mi>d</mi><mo>−</mo><mn>3.4</mn></mrow><mn>7</mn></mfrac></math> = 2.8</center>',
 type: 'multiple-choice',
 options: ['d = 3.0', 'd = 3.8', 'd = 16.2', 'd = 23.0'],
 correctAnswer: 3,
 explanation: 'Multiply both sides by 7: d - 3.4 = 19.6. Add 3.4 to both sides: d = 23.0'
 },
 {
 id: '18',
 text: 'Beatrice has 18 pencils. Beatrice has 2 more than 4 times the number of pencils Rick has. Exactly how many pencils does Rick have?',
 type: 'multiple-choice',
 options: ['11 pencils', '7 pencils', '5 pencils', '4 pencils'],
 correctAnswer: 3,
 explanation: 'Let r = Rick\'s pencils. 4r + 2 = 18. Solve: 4r = 16, so r = 4 pencils.'
 },
 {
 id: '19',
 text: 'Which set of values contains only solutions to −3x < 15?',
 type: 'multiple-choice',
 options: ['{−5, −4, −3}', '{−8, −7, −6}', '{−4, −3, −2}', '{−7, −6, −5}'],
 correctAnswer: 2,
 explanation: 'Solve −3x < 15 by dividing by −3 and reversing the inequality: x > −5. Only set {−4, −3, −2} contains values all greater than −5.'
 },
 {
 id: '20',
 text: 'A spinner has 8 equal-sized sections.<br>• 2 red<br>• 1 yellow<br>• 3 blue<br>• 2 green<br><br>A class spun the arrow on the spinner 20 times. The arrow landed on green 3 times. The class will spin the arrow on the spinner a total of 500 times. As the number of spins increases, the experimental probability of the arrow landing on green will most likely approach —',
 type: 'multiple-choice',
 options: ['0.15', '0.25', '0.3', '0.375'],
 correctAnswer: 1,
 explanation: 'Theoretical probability of green = 2/8 = 1/4 = 0.25. As the number of trials increases, experimental probability approaches theoretical probability.'
 },
 {
 id: '21',
 text: 'A fair number cube has faces labeled 1, 2, 3, 4, 5, and 6. Wesley rolled this number cube 30 times. This table shows his results.<br><img src="images/21.png" class="question-image" alt="Table showing Wesley\'s Results with frequencies for each number"></img><br>Wesley compared the theoretical and experimental probabilities. Which statement correctly compares the theoretical and experimental probabilities that the number landing face-up is a multiple of 3?',
 type: 'multiple-choice',
 options: [
    'The theoretical probability of <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> is less than the experimental probability.',
    'The experimental probability of <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math> is less than the theoretical probability.',
    'The theoretical probability of <math><mfrac><mn>12</mn><mn>30</mn></mfrac></math> is less than the experimental probability.',
    'The experimental probability of <math><mfrac><mn>12</mn><mn>30</mn></mfrac></math> is less than the theoretical probability.'
 ],
 correctAnswer: 0,
 explanation: 'Multiples of 3 are 3 and 6. Theoretical probability = 2/6 = 1/3. Experimental: (4+8)/30 = 12/30 = 2/5. Since 2/5 > 1/3, theoretical is less than experimental.'
 },
 {
 id: '22',
 text: 'Jason represented the values of his 35 baseball cards in a histogram and in a stem-and-leaf plot. Which statement best describes the graph Jason could use to find the median value of his 35 baseball cards?',
 type: 'multiple-choice',
 options: [
    'A histogram because it lists each value in a set of data',
    'A histogram because it shows the frequency of data using intervals',
    'A stem-and-leaf plot because it lists each value in a set of data',
    'A stem-and-leaf plot because it shows the frequency of data using intervals'
 ],
 correctAnswer: 2,
 explanation: 'To find the median, you need to see each individual value to identify the middle value. A stem-and-leaf plot lists each value, while a histogram only shows frequencies in intervals.'
 },
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