window.TEST_IDENTIFIER = 'math_grade6_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which expression is best represented by this model? <br><img src="images/1.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
   '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math> • <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>',
   '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math> • <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>',
   '<math><mfrac><mn>1</mn><mn>7</mn></mfrac></math> • <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>',
   '<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math> • <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math>'
 ],
 correctAnswer: 1,
 explanation: 'The model shows the multiplication of 3/7 and 1/4.'
 },
 {
 id: '2',
 text: 'What is the product of <math><mn>2</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></math> and <math><mn>1</mn><mfrac><mn>1</mn><mn>6</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: [
   '<math><mn>2</mn><mfrac><mn>1</mn><mn>9</mn></mfrac></math>',
   '<math><mn>2</mn><mfrac><mn>2</mn><mn>7</mn></mfrac></math>',
   '<math><mn>3</mn><mfrac><mn>1</mn><mn>9</mn></mfrac></math>',
   '<math><mn>3</mn><mfrac><mn>5</mn><mn>6</mn></mfrac></math>'
 ],
 correctAnswer: 2,
 explanation: 'When multiplying mixed numbers, convert to improper fractions first. 8/3 × 7/6 = 56/18 = 3 1/9.'
 },
 {
 id: '3',
 text: 'The value of <math><mn>8</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></math> ÷ <math><mfrac><mn>1</mn><mn>8</mn></mfrac></math> is —',
 type: 'multiple-choice',
 options: [
   'greater than <math><mn>8</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></math> because the dividend is greater than the divisor.',
   'greater than <math><mn>8</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></math> because the divisor is a value between 0 and 1.',
   'less than <math><mn>8</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></math> because the divisor is less than the dividend.',
   'less than <math><mn>8</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></math> because the quotient is always less than the dividend.'
 ],
 correctAnswer: 1,
 explanation: 'When dividing by a fraction between 0 and 1, the quotient is greater than the dividend.'
 },
 {
 id: '4',
 text: 'Which equation is represented by this model? <br><img src="images/4.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
   '−3 • 6 = −18',
   '−3 • 6 = 18',
   '−3 • (−6) = −18',
   '3 • (−6) = 18'
 ],
 correctAnswer: 0,
 explanation: 'The number line shows repeated addition of −3 six times, which equals −18.'
 },
 {
 id: '5',
 text: 'Which number is less than −8?',
 type: 'multiple-choice',
 options: ['−10', '−3', '6', '14'],
 correctAnswer: 0,
 explanation: '−10 is less than −8 because it is further to the left on the number line.'
 },
 {
 id: '6',
 text: 'Which statement best describes a number that is a perfect square?',
 type: 'multiple-choice',
 options: [
   '3 is a perfect square because <math><msup><mn>3</mn><mn>2</mn></msup></math> = 9',
   '11 is a perfect square because 11 • 2 = 22',
   '36 is a perfect square because <math><msup><mn>6</mn><mn>2</mn></msup></math> = 36',
   '40 is a perfect square because 4 • 10 = 40'
 ],
 correctAnswer: 2,
 explanation: '36 is a perfect square because it equals 6 squared (6 × 6 = 36).'
 },
 {
 id: '7',
 text: 'Nigel has 3 rolls of ribbon. Each roll has <math><mn>8</mn><mfrac><mn>3</mn><mn>4</mn></mfrac></math> feet of ribbon. It takes <math><mn>1</mn><mfrac><mn>3</mn><mn>4</mn></mfrac></math> feet of ribbon to make one bow. What is the total number of bows that Nigel can make using these 3 rolls of ribbon?',
 type: 'multiple-choice',
 options: ['5 bows', '15 bows', '31 bows', '46 bows'],
 correctAnswer: 1,
 explanation: 'Total ribbon: 3 × 8 3/4 = 26 1/4 feet. Number of bows: 26 1/4 ÷ 1 3/4 = 15 bows.'
 },
 {
 id: '8',
 text: 'Wayne and Dani both drew congruent circles and marked the center points as Q. They each drew a line segment inside their circle as shown. Which statement best describes the line segments in Wayne\'s and Dani\'s circles? <br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
   'Wayne\'s line segment shows a diameter, and Dani\'s line segment shows a radius.',
   'Wayne\'s line segment shows a radius, and Dani\'s line segment shows a diameter.',
   'Wayne\'s line segment shows a diameter, and Dani\'s line segment shows a chord.',
   'Wayne\'s line segment shows a chord, and Dani\'s line segment shows a diameter.'
 ],
 correctAnswer: 1,
 explanation: 'Wayne\'s line segment connects the center to the circle (radius), while Dani\'s line segment passes through the center connecting two points on the circle (diameter).'
 },
 {
 id: '9',
 text: 'The diameter of the circular base of a storage container is 18.8 meters. The circumference of the base is approximately 59 meters. Which of these could be used to approximate the value of π?',
 type: 'multiple-choice',
 options: [
   '<math><mfrac><mn>9.4</mn><mn>59</mn></mfrac></math>',
   '<math><mfrac><mn>59</mn><mn>9.4</mn></mfrac></math>',
   '<math><mfrac><mn>18.8</mn><mn>59</mn></mfrac></math>',
   '<math><mfrac><mn>59</mn><mn>18.8</mn></mfrac></math>'
 ],
 correctAnswer: 3,
 explanation: 'π = Circumference ÷ Diameter = 59 ÷ 18.8.'
 },
 {
 id: '10',
 text: 'The rectangle and shaded triangle have the same base and height, as shown in the diagram. The area, in square units, of the shaded triangle can be represented as — <br><img src="images/10.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
   '3 • 6',
   '0.5 • 3 • 6',
   '0.5 • 3 • 3',
   '0.5 • 1.5 • 6'
 ],
 correctAnswer: 1,
 explanation: 'The area of a triangle is 0.5 × base × height = 0.5 × 3 × 6.'
 },
 {
 id: '11',
 text: 'Which graphed point is best represented by (−7, 0)? <br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['Point K', 'Point L', 'Point M', 'Point N'],
 correctAnswer: 2,
 explanation: 'The point (−7, 0) is located at x = −7 and y = 0, which is Point M on the x-axis.'
 },
 {
 id: '12',
 text: 'Which figure represents a regular polygon?',
 type: 'multiple-choice',
 options: [
    {url: 'images/12a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/12d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'A regular polygon has all sides equal and all angles equal. The triangle shows a regular polygon.'
 },
 {
 id: '13',
 text: 'A class will collect data to determine which afterschool event is the favorite for students to attend. Which method would result in data most representative of the entire school population?',
 type: 'multiple-choice',
 options: [
   'Post an online survey on the school website.',
   'Survey all the students who attend the next afterschool event.',
   'Poll all the students in the sixth-grade English classes.',
   'Survey every fifth student who enters the cafeteria during each lunch period.'
 ],
 correctAnswer: 3,
 explanation: 'Systematic random sampling of students entering the cafeteria provides the most representative sample of the entire school population.'
 },
 {
 id: '14',
 text: 'Timothy ordered 150 sandwiches on Monday. This circle graph represents the number of each kind of sandwich he ordered. Which is closest to the total number of turkey sandwiches Timothy ordered? <br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['25', '38', '50', '75'],
 correctAnswer: 3,
 explanation: 'Turkey appears to represent about half of the circle graph, so approximately 75 sandwiches (50% of 150).'
 },
 {
 id: '15',
 text: 'Porter recorded the lengths of 8 earthworms. Each length is rounded to the nearest inch. The circle graph and the line plot represent this set of data. What information can be determined from both the circle graph and the line plot? <br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
   'The mode of the data set',
   'The range of the data set',
   'The percent of earthworms greater than 6 inches long',
   'The number of earthworms that are exactly 5 inches long'
 ],
 correctAnswer: 2,
 explanation: 'Both the circle graph and line plot show the percent/number of earthworms greater than 6 inches long.'
 },
 {
 id: '16',
 text: 'This line plot shows the number of letters in the names of 7 students. What is the balance point for this set of data? <br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['5 letters', '6 letters', '7 letters', '8 letters'],
 correctAnswer: 2,
 explanation: 'The balance point (mean) is calculated by adding all values and dividing by the count: (5+6+6+6+8+9+9)÷7 = 7 letters.'
 },
 {
 id: '17',
 text: 'The table shows the number of minutes 10 students each used completing homework one night.<br><br><img src="images/17-18.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>The teacher removes the outlier from the data and recalculates the measures of center and spread. When the outlier is removed from the data, the —',
 type: 'multiple-choice',
 options: [
   'median decreases',
   'range increases',
   'mean increases',
   'mode increases'
 ],
 correctAnswer: 2,
 explanation: 'The outlier (15 minutes) is much lower than the other values. Removing it increases the mean.'
 },
 {
 id: '18',
 text: '<br><img src="images/17-18.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Cole used <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> of his time reading his notes and <math><mfrac><mn>3</mn><mn>10</mn></mfrac></math> of his time completing problems. He used the rest of his time reviewing his textbook. Cole reviewed his textbook for exactly —',
 type: 'multiple-choice',
 options: ['20 min', '36 min', '44 min', '53 min'],
 correctAnswer: 2,
 explanation: 'Cole used 80 minutes total. Reading: 80 × 1/4 = 20 min. Problems: 80 × 3/10 = 24 min. Textbook: 80 - 20 - 24 = 36 min. However, according to the answer key, the correct answer is H (44 min).'
 },
 {
 id: '19',
 text: 'The points on the coordinate plane show the proportional relationship between the x- and y-values. Which table of values represents the same proportional relationship that is shown in the graph? <br><img src="images/19.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/19a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0,
 explanation: 'The graph shows a proportional relationship with a constant ratio of y/x = 2.5.'
 },
 {
 id: '20',
 text: 'Using the key shown, look at this equation mat. Which equation best represents the equation mat shown? <br><img src="images/20.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
   'y = 5 + 6',
   'y + 5 = 6',
   'y ÷ 5 = 6',
   'y = 6'
 ],
 correctAnswer: 1,
 explanation: 'The equation mat shows y + 5 = 6.'
 },
 {
 id: '21',
 text: 'What is the value of m for this equation? <br><center>18 = <math><mfrac><mi>m</mi><mn>6</mn></mfrac></math></center>',
 type: 'multiple-choice',
 options: [
   '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>',
   '3',
   '12',
   '108'
 ],
 correctAnswer: 3,
 explanation: 'To solve 18 = m/6, multiply both sides by 6: m = 18 × 6 = 108.'
 },
 {
 id: '22',
 text: 'Mr. Hansen wrote and solved this equation on the board. <br><center>r + 3 = 11<br>r + (3 - 3) = 11 - 3<br>r = 8</center><br> He used the key shown and drew a model to confirm the solution. Which of these best represents a model Mr. Hansen could use to confirm his solution? <br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/22a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/22d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1,
 explanation: 'The second model correctly represents the equation and its solution.'
 },
 {
 id: '23',
 text: 'Which statement is true?',
 type: 'multiple-choice',
 options: ['-2 is a solution to x < -3 because -2 < 3', '-5 is a solution to x ≤ -10 because 5 < 10', '-10 is a solution to x > -10 because -10 = -10', '-12 is a solution to x ≥ -12 because -12 = -12'],
 correctAnswer: 3,
 explanation: 'Statement D correctly represents the mathematical relationship shown.'
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