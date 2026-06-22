window.TEST_IDENTIFIER = 'math_algebra1_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'What is the value of this expression when a = 8, b = 16, and c = −4?<br><center><math><mn>5</mn><mroot><mi>a</mi><mn>3</mn></mroot><mo>-</mo><mi>c</mi><msqrt><mi>b</mi></msqrt><mo>+</mo><mn>9</mn></math></center>',
 type: 'multiple-choice',
 options: ['30', '35', '50', '51'],
 correctAnswer: 1,
 explanation: 'Substituting values: a = 8, b = 16, c = -4. First calculate a - c = 8 - (-4) = 12. Then √12 = 2√3, √16 = 4. The expression becomes (5/3)(2√3)(4) + 9 = (5/3)(8√3) + 9 = (40√3)/3 + 9 ≈ 35.'
 },
 {
 id: '2',
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
 id: '3',
 text: 'Which represents this expression in simplest form?<br><center><math><mfrac><mrow><mn>15</mn><mo>(</mo><msup><mi>x</mi><mrow><mo>-</mo><mn>2</mn></mrow></msup><msup><mo>)</mo><mn>3</mn></msup></mrow><mrow><mn>3</mn><mo>(</mo><msup><mi>x</mi><mrow><mo>-</mo><mn>4</mn></mrow></msup><msup><mo>)</mo><mrow><mo>-</mo><mn>3</mn></mrow></msup></mrow></mfrac></math></center>',
 type: 'multiple-choice',
 options: [
   '<math><mfrac><mn>12</mn><mrow><msup><mi>x</mi><mn>6</mn></msup></mrow></mfrac></math>',
   '<math><mn>12</mn><msup><mi>x</mi><mn>8</mn></msup></math>',
   '<math><mfrac><mn>5</mn><mrow><msup><mi>x</mi><mn>6</mn></msup></mrow></mfrac></math>',
   '<math><mfrac><mn>5</mn><mrow><msup><mi>x</mi><mn>18</mn></msup></mrow></mfrac></math>'
 ],
 correctAnswer: 3,
 explanation: 'Simplify the given expression by combining like terms and following the order of operations to arrive at option D.'
 },
 {
 id: '4',
 text: 'For which value of x does <math><mroot><mi>x</mi><mn>3</mn></mroot></math> simplify to <math><mn>5</mn><mroot><mn>7</mn><mn>3</mn></mroot></math>?',
 type: 'multiple-choice',
 options: ['35', '245', '875', '1715'],
 correctAnswer: 2,
 explanation: 'Solve by setting up the equation and working through the algebraic simplification. The value x = 875 satisfies the equation.'
 },
 {
 id: '5',
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
 id: '6',
 text: 'Frank works at a convenience store.<br>• He earns $7.50 per hour when he works during the day.<br>• He earns $12.50 per hour when he works at night.<br>• He wants to earn at least $300 per week.<br><br>Which graph best represents this situation?',
 type: 'multiple-choice',
 options: [
    {url: 'images/6a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/6d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'Set up the inequality: 7.50x + 12.50y ≥ 300, where x is day hours and y is night hours. The correct graph shows the region above the line 7.50x + 12.50y = 300, which is Graph H.'
 },
 {
 id: '7',
 text: 'A square with a side length of x inches is shown.<br><img src="images/7.png" class="question-image" alt="Square with side length x"></img><br>The equation y = 4x represents the relationship between the side length, x, and the perimeter, y, of the square in inches. Which student states the correct domain and range of this relationship?',
 type: 'multiple-choice',
 options: [
   'Juan says the domain is all integers, and the range is all integers.',
   'Stacy says the domain is all positive integers, and the range is all positive integers.',
   'George says the domain is all negative numbers, and the range is all negative numbers.',
   'Marla says the domain is all positive real numbers, and the range is all positive real numbers.'
 ],
 correctAnswer: 3,
 explanation: 'Since side length must be positive (x > 0), the domain is all positive real numbers. The perimeter y = 4x will also be all positive real numbers. Marla is correct.'
 },
 {
 id: '8',
 text: 'A function f is described.<br><center>f(x) = (x − 2)² + 3</center><br>• The domain of f is all real numbers greater than 0.<br><br>The range of f is all real numbers greater than or equal to —',
 type: 'multiple-choice',
 options: ['2', '3', '5', '7'],
 correctAnswer: 1,
 explanation: 'The vertex form shows minimum at (2, 3). Since domain is x > 0, we check f(0) = 4 + 3 = 7. As x approaches 0 from right, f approaches 7. The minimum in the domain occurs at x = 2, giving f(2) = 3. Range is y ≥ 3.'
 },
 {
 id: '9',
 text: 'Which function does NOT have a y-intercept of 2?',
 type: 'multiple-choice',
 options: [
   '<math><mi>y</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>10</mn></mrow><mn>5</mn></mfrac></math>',
   '<math><mi>y</mi><mo>=</mo><mn>4</mn><mo>(</mo><mi>x</mi><mo>+</mo><mn>0.5</mn><mo>)</mo></math>',
   '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>2</mn></math>',
   '<math><mi>y</mi><mo>=</mo><mo>(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo>)</mo></math>'
 ],
 correctAnswer: 3,
 explanation: 'Find y-intercept by setting x = 0: A) y = 10/5 = 2; B) y = 4(0.5) = 2; C) y = 2; D) y = (-2)(5) = -10. Option D does not have y-intercept of 2.'
 },
 {
 id: '10',
 text: 'The graph of the function f(x) is shown on the coordinate plane.<br><img src="images/10.png" class="question-image" alt="Graph showing points (0,50), (1,100), (2,200)"></img><br>Which of these points is a solution of y = 3f(x)?',
 type: 'multiple-choice',
 options: ['(0, 300)', '(1, 300)', '(3, 300)', '(6, 200)'],
 correctAnswer: 1,
 explanation: 'From the graph: f(0) = 50, f(1) = 100, f(2) = 200. For y = 3f(x): when x = 1, y = 3(100) = 300. So (1, 300) is a solution.'
 },
 {
 id: '11',
 text: 'The graph of an exponential function in the form <math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mi>b</mi><mi>x</mi></msup></math> contains the points (0, 2), (1, 1) (2, 1/2). Which graph best represents the function?',
 type: 'multiple-choice',
 options: [
    {url: 'images/11a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/11d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'Use the given points to determine the exponential function parameters, then identify which graph matches the behavior of the function.'
 },
 {
 id: '12',
 text: 'Which table represents <math><mi>y</mi><mo>=</mo><msup><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo>)</mo></mrow><mn>2</mn></msup></math>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/12a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'Calculate y = (x + 5)²: When x = 3, y = (3 + 5)² = 8² = 64. When x = 4, y = (4 + 5)² = 9² = 81. This matches option H.'
 },
 {
 id: '13',
 text: 'Each table represents values from four different functions.<br><img src="images/13.png" class="question-image" alt="Graph showing points (0,50), (1,100), (2,200)"></img><br>Which tables could represent an exponential function?',
 type: 'multiple-choice',
 options: [
   'Table 1 and Table 2',
   'Table 1 and Table 4',
   'Table 2 and Table 4',
   'Table 3 and Table 4'
 ],
 correctAnswer: 1,
 explanation: 'Exponential functions have constant ratios between consecutive y-values. Table 1: ratio is 10 (exponential). Table 4: ratio is 0.5 (exponential). Tables 2 and 3 show quadratic and linear patterns respectively.'
 },
 {
 id: '14',
 text: 'Given:<br><center>f(x) = −x + 5<br>g(x) = 2x − 5<br>h(x) = (x + 2)(x − 5)</center><br>Which functions have at least one equivalent x-intercept?',
 type: 'multiple-choice',
 options: [
   'f(x) and g(x) only',
   'f(x) and h(x) only',
   'g(x) and h(x) only',
   'f(x), g(x), and h(x)'
 ],
 correctAnswer: 1,
 explanation: 'Find x-intercepts by setting each equal to 0: f(x): x = 5; g(x): x = 2.5; h(x): x = -2 or x = 5. Functions f(x) and h(x) both have x-intercept at x = 5.'
 },
 {
 id: '15',
 text: 'The principal at Washington High School investigated the relationship between a student\'s cell phone use and the student\'s grade point average, GPA. The table shows a sample of the data collected.<br><img src="images/15-16.png" class="question-image" alt="Data table showing cell phone hours and GPA"></img><br>The correlation coefficient for the curve of best fit is -0.9921. Based on the data, there appears to be —',
 type: 'multiple-choice',
 options: [
   'no relationship',
   'a weak relationship',
   'a strong relationship',
   'a positive relationship'
 ],
 correctAnswer: 2,
 explanation: 'A correlation coefficient close to -1 or 1 indicates a strong relationship. The negative value shows an inverse relationship between cell phone use and GPA.'
 },
 {
 id: '16',
 text: '<img src="images/15-16.png" class="question-image" alt="Data table showing cell phone hours and GPA"></img><br>Which conclusion about the relationship between student cell phone use and GPA is best supported by these data?',
 type: 'multiple-choice',
 options: [
   'Increased cell phone use prevents students from getting good grades.',
   'Decreased cell phone use causes students to perform better in school.',
   'The more time students spend on their cell phones, the lower their GPA.',
   'There is no relationship between student cell phone use and the student\'s GPA.'
 ],
 correctAnswer: 2,
 explanation: 'The data shows a negative correlation: as cell phone use increases, GPA tends to decrease. Option H correctly describes this correlation without implying causation.'
 },
 {
 id: '17',
 text: 'Using the quadratic curve of best fit, which equation most closely represents the set of data?<br><center>{(−8, 80.4), (−7, 57.8), (−6, 38.6), (−5, 22.8), (3, 18.8), (5, 51.8), (7, 98.4)}</center>',
 type: 'multiple-choice',
 options: [
   '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>5</mn></math>',
   '<math><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5.2</mn></math>',
   '<math><mi>y</mi><mo>=</mo><mn>1.7</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>5</mn></math>',
   '<math><mi>y</mi><mo>=</mo><mn>1.7</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2.9</mn><mi>x</mi><mo>−</mo><mn>5.2</mn></math>'
 ],
 correctAnswer: 3,
 explanation: 'Testing the equations with the given points, option D: y = 1.7x² + 2.9x − 5.2 provides the best fit for the data set.'
 },
 {
 id: '18',
 text: 'This table shows the number of months used and the approximate distances driven, in miles, for six buses in a school district.<br><img src="images/18.png" class="question-image" alt="Data table showing cell phone hours and GPA"></img><br>Using the line of best fit for these data, which value is the best prediction of the distance driven, in miles, by a bus that has been used for 40 months?',
 type: 'multiple-choice',
 options: ['68,000', '79,100', '86,400', '91,400'],
 correctAnswer: 3,
 explanation: 'Calculate the line of best fit from the data points. The slope is approximately 2,200 miles per month. Extrapolating to 40 months gives approximately 91,400 miles.'
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