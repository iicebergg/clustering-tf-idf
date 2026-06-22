window.TEST_IDENTIFIER = 'math_grade4_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'Each circle shown is the same size. Which correctly compares the fractions represented by the shaded regions of each circle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/1a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/1b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/1c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/1d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1,
 explanation: '2/3 can be converted to equivalent fraction 8/12 by multiplying both numerator and denominator by 4.'
 },
 {
 id: '2',
 text: 'Each model shown is shaded to represent a fraction. Each model is the same size.<br><img src="images/2.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which two models appear to have equivalent fractions shaded?',
 type: 'multiple-choice',
 options: ['Model 1 and Model 3', 'Model 2 and Model 4', 'Model 1 and Model 2', 'Model 3 and Model 4'],
 correctAnswer: 3, 
 explanation: 'Model 3 and Model 4 show equivalent fractions when comparing the shaded regions.'
 },
 {
 id: '3',
 text: 'Model X represents a number.<br><img src="images/3.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Key: □ = 1<br>Which fraction and decimal are equivalent to the number represented by Model X?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>8</mn><mn>8</mn></mfrac></math> and 0.25', '<math><mfrac><mn>2</mn><mn>10</mn></mfrac></math> and 2.10', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> and 1.5', '<math><mfrac><mn>1</mn><mn>5</mn></mfrac></math> and 0.2'],
 correctAnswer: 3, 
 explanation: 'The model shows 1/5 which equals 0.2 as a decimal.'
 },
 {
 id: '4',
 text: 'Which estimate best describes the value of <math><mn>29</mn><mfrac><mn>1</mn><mn>3</mn></mfrac></math> − <math><mn>13</mn><mfrac><mn>2</mn><mn>3</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['A little less than 10', 'A little less than 16', 'A little more than 16', 'A little more than 20'],
 correctAnswer: 1,
 explanation: '29⅓ is about 29 and 13⅔ is about 14, so 29 - 14 = 15, which is a little less than 16.'
 },
 {
 id: '5',
 text: 'James needs <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> foot of string for each bracelet he makes. He will make 5 bracelets.<br><img src="images/5.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>What is the total length of string James needs to make 5 bracelets?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>2</mn><mn>5</mn></mfrac></math> feet', '<math><mn>2</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math> feet', '<math><mn>5</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math> feet', '10 feet'],
 correctAnswer: 1, 
 explanation: 'Multiply: <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> foot × 5 bracelets = <math><mn>2</mn><mfrac><mn>1</mn><mn>2</mn></mfrac></math> feet.'
 },
 {
 id: '6',
 text: 'A cook will pour 4 cups of uncooked rice into 8 bags. The cook will pour the same amount of rice into each bag.<br><img src="images/6.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which division statement best represents this situation?',
 type: 'multiple-choice',
 options: ['4 ÷ 8 = <math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> cup of rice in each bag', '4 ÷ 8 = <math><mfrac><mn>8</mn><mn>4</mn></mfrac></math> cups of rice in each bag', '8 ÷ 4 = <math><mfrac><mn>4</mn><mn>8</mn></mfrac></math> cup of rice in each bag', '8 ÷ 4 = <math><mfrac><mn>8</mn><mn>4</mn></mfrac></math> cups of rice in each bag'],
 correctAnswer: 0, 
 explanation: 'To divide 4 cups among 8 bags equally: 4 ÷ 8 = 4/8 cup in each bag.'
 },
 {
 id: '7',
 text: 'Which group can be represented by the division statement shown?<br><math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> = 4 ÷ 5',
 type: 'multiple-choice',
 options: [
    {url: 'images/7a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/7b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/7c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/7d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: '4 ÷ 5 represents 4 items divided among 5 people, which is Group C.'
 },
 {
 id: '8',
 text: 'The array shown represents a number. It has 5 rows and 10 columns.<br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which list shows all the factor pairs for this number?',
 type: 'multiple-choice',
 options: ['5 × 10<br>1 × 50', '10 × 5<br>5 × 10', '1 × 50<br>2 × 25<br>5 × 10', '5 × 10<br>10 × 5<br>2 × 25<br>25 × 2'],
 correctAnswer: 2, 
 explanation: 'The array shows 50 items. Factor pairs of 50 are: 1 × 50, 2 × 25, and 5 × 10.'
 },
 {
 id: '9',
 text: 'Cindy rode her bike <math><mfrac><mn>4</mn><mn>5</mn></mfrac></math> of a mile. Wyatt rode his bike <math><mfrac><mn>3</mn><mn>5</mn></mfrac></math> of a mile.<br><img src="images/9.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>What is the total distance Cindy and Wyatt rode their bikes?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math> mile', '<math><mfrac><mn>7</mn><mn>10</mn></mfrac></math> mile', '<math><mfrac><mn>7</mn><mn>5</mn></mfrac></math> miles', '<math><mfrac><mn>12</mn><mn>5</mn></mfrac></math> miles'],
 correctAnswer: 2, 
 explanation: 'Add fractions with same denominator: 4/5 + 3/5 = 7/5 miles.'
 },
 {
 id: '10',
 text: 'Lenny bought sunglasses for $3.35 and a beach towel for $8.71, including tax. He gave the clerk $15.00 to pay for these items. What is the amount of change Lenny should receive?',
 type: 'multiple-choice',
 options: ['$2.94', '$3.94', '$11.06', '$12.06'],
 correctAnswer: 0, 
 explanation: 'Total cost: $3.35 + $8.71 = $12.06. Change: $15.00 - $12.06 = $2.94.'
 },
 {
 id: '11',
 text: 'Which estimate is most reasonable for the weight or the mass of the gym shoes this girl is holding?<br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['40 kilograms', '30 pounds', '20 ounces', '10 grams'],
 correctAnswer: 2, 
 explanation: 'Gym shoes typically weigh about 20 ounces, which is reasonable for footwear.'
 },
 {
 id: '12',
 text: '16 ounces = 1 pound<br>2 pounds = ______ ? ounces',
 type: 'multiple-choice',
 options: ['32', '18', '14', '8'],
 correctAnswer: 0, 
 explanation: 'Convert pounds to ounces: 2 pounds × 16 ounces/pound = 32 ounces.'
 },
 {
 id: '13',
 text: '3 feet = 1 yard<br>Malik bought 38 feet of fencing to place around his garden. Which length is equivalent to 38 feet?',
 type: 'multiple-choice',
 options: ['12 yards 2 feet', '12 yards 2 inches', '3 yards 2 feet', '3 yards 2 inches'],
 correctAnswer: 0, 
 explanation: 'Convert feet to yards and feet: 38 feet ÷ 3 = 12 yards with 2 feet remaining. So 38 feet = 12 yards 2 feet.'
 },
 {
 id: '14',
 text: 'This clock shows the time Xavier finished swim practice.<br><img src="images/14.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>His practice lasted 2 hours 20 minutes. At what time did Xavier\'s swim practice start?',
 type: 'multiple-choice',
 options: ['7:55', '7:15', '7:35', '6:55'],
 correctAnswer: 3, 
 explanation: 'Work backwards from the finish time. Subtract 2 hours 20 minutes from the time shown on the clock.'
 },
 {
 id: '15',
 text: 'This line graph shows the total number of cups of lemonade Patrick sold on one day from 10:00 A.M. until 3:00 P.M.<br><img src="images/15.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which table shows another way to organize the data?',
 type: 'multiple-choice',
 options: [
    {url: 'images/15a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/15d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'The correct table shows the hourly sales and cumulative total that matches the line graph data.'
 },
 {
 id: '16',
 text: 'Isaiah has erasers in his pocket.<br>• There are orange erasers and purple erasers.<br>• All the erasers are the same size and shape.<br>• Isaiah is least likely to select a purple eraser when he takes one eraser out of his pocket without looking.<br>Which letter best represents the probability Isaiah will select a purple eraser?<br><img src="images/16.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: ['W', 'X', 'Y', 'Z'],
 correctAnswer: 0, 
 explanation: 'Since Isaiah is least likely to select a purple eraser, the probability is closest to 0, which is represented by letter W.'
 },
 {
 id: '17',
 text: 'The probability that the arrow on a spinner will land on a space labeled black is <math><mfrac><mn>3</mn><mn>6</mn></mfrac></math>. Which spinner best represents this situation?',
 type: 'multiple-choice',
 options: [
    {url: 'images/17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0, 
 explanation: 'Probability of 3/6 means 3 out of 6 spaces should be black. Spinner A has exactly 3 black spaces out of 6 total.'
 },
 {
 id: '18',
 text: 'This list of numbers follows a pattern.<br>14, 23, 32, 41, 50…<br>The pattern continues in the same way. What will be the 7th number in this pattern?',
 type: 'multiple-choice',
 options: ['72', '68', '59', '51'],
 correctAnswer: 1, 
 explanation: 'The pattern increases by 9 each time: 14, 23, 32, 41, 50, 59, 68. The 7th number is 68.'
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