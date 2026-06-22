window.TEST_IDENTIFIER = 'math_algebra2_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which expression is equivalent to the one shown if the denominators do not equal zero?<br><center><math><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>49</mn></mrow></mfrac><mo>-</mo><mfrac><mn>3</mn><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>7</mn><mo>)</mo></mrow></mfrac></math></center>',
 type: 'multiple-choice',
 options: [
    '<math><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>11</mn><mi>x</mi><mo>-</mo><mn>21</mn></mrow><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>7</mn><mo>)</mo></mrow></mfrac></math>',
    '<math><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>11</mn><mi>x</mi><mo>+</mo><mn>21</mn></mrow><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>-</mo><mn>7</mn><mo>)</mo></mrow></mfrac></math>',
    '<math><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></mrow><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>4</mn><mo>)</mo><mo>(</mo><mi>x</mi><mo>+</mo><mn>7</mn><mo>)</mo></mrow></mfrac></math>',
    '<math><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>-</mo><mn>4</mn></mrow></mfrac></math>'
 ],
 correctAnswer: 2,
 explanation: 'To combine these rational expressions, first factor x² - 49 = (x - 7)(x + 7). Find a common denominator and combine the fractions to get the equivalent expression.'
 },
 {
 id: '2',
 text: 'Which expression is equivalent to the one shown if no denominators equal zero?<br><math><mfrac><mfrac><mrow><mo>-</mo><mn>13</mn><mo>+</mo><mi>d</mi></mrow><mrow><mn>42</mn><msup><mi>d</mi><mn>3</mn></msup></mrow></mfrac><mfrac><mrow><mn>13</mn><mo>-</mo><mi>d</mi></mrow><mrow><mn>6</mn><msup><mi>d</mi><mn>9</mn></msup></mrow></mfrac></mfrac></math>',
 type: 'multiple-choice',
 options: [
    '<math><mo>-</mo><mfrac><mn>7</mn><mrow><msup><mi>d</mi><mn>3</mn></msup></mrow></mfrac></math>',
    '<math><mo>-</mo><mfrac><mrow><msup><mi>d</mi><mn>3</mn></msup></mrow><mn>7</mn></mfrac></math>',
    '<math><mfrac><mn>7</mn><mrow><msup><mi>d</mi><mn>6</mn></msup></mrow></mfrac></math>',
    '<math><mo>-</mo><mfrac><mrow><msup><mi>d</mi><mn>6</mn></msup></mrow><mn>7</mn></mfrac></math>'
 ],
 correctAnswer: 3,
 explanation: 'Simplify the complex rational expression by finding common denominators and applying division rules for fractions.'
 },
 {
 id: '3',
 text: 'Which expression is equivalent to <math><mroot><mrow><mn>576</mn><msup><mi>n</mi><mn>8</mn></msup><msup><mi>p</mi><mn>27</mn></msup></mrow><mn>3</mn></mroot></math>?',
 type: 'multiple-choice',
 options: [
    '<math><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><msup><mi>p</mi><mn>9</mn></msup><mroot><mrow><mn>9</mn><msup><mi>n</mi><mn>2</mn></msup></mrow><mn>3</mn></mroot></math>',
    '<math><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><msup><mi>p</mi><mn>3</mn></msup><mroot><mn>9</mn><mn>3</mn></mroot></math>',
    '<math><mn>24</mn><msup><mi>n</mi><mn>4</mn></msup><msup><mi>p</mi><mn>13</mn></msup><mroot><mi>p</mi><mn>3</mn></mroot></math>',
    '<math><mn>192</mn><msup><mi>n</mi><mn>2</mn></msup><msup><mi>p</mi><mn>9</mn></msup><mroot><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><mn>3</mn></mroot></math>'
 ],
 correctAnswer: 0,
 explanation: 'Apply rules of exponents and radicals to simplify the expression to its equivalent form.'
 },
 {
 id: '4',
 text: 'Which is the factored form of <math><mn>125</mn><msup><mi>m</mi><mn>3</mn></msup><mo>-</mo><mn>343</mn></math>',
 type: 'multiple-choice',
 options: [
    '<math><mo>(</mo><mn>5</mn><mi>m</mi><mo>-</mo><mn>7</mn><msup><mo>)</mo><mn>3</mn></msup></math>',
    '<math><mo>(</mo><mn>5</mn><mi>m</mi><mo>-</mo><mn>7</mn><mo>)</mo><mo>(</mo><mn>25</mn><msup><mi>m</mi><mn>2</mn></msup><mo>+</mo><mn>35</mn><mi>m</mi><mo>+</mo><mn>49</mn><mo>)</mo></math>',
    '<math><mo>(</mo><mn>5</mn><mi>m</mi><mo>-</mo><mn>7</mn><mo>)</mo><mo>(</mo><mn>25</mn><msup><mi>m</mi><mn>2</mn></msup><mo>+</mo><mn>70</mn><mi>m</mi><mo>+</mo><mn>49</mn><mo>)</mo></math>',
    '<math><mo>(</mo><mn>5</mn><mi>m</mi><mo>-</mo><mn>7</mn><mo>)</mo><mo>(</mo><mn>25</mn><msup><mi>m</mi><mn>2</mn></msup><mo>-</mo><mn>35</mn><mi>m</mi><mo>-</mo><mn>49</mn><mo>)</mo></math>'
 ],
 correctAnswer: 1,
 explanation: 'Factor the polynomial expression completely by finding common factors and applying factoring techniques.'
 },
 {
 id: '5',
 text: 'What are the y-coordinates for the solutions to this system of equations?<br><math><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn></math><br><math><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>20</mn><mo>=</mo><mn>0</mn></math>',
 type: 'multiple-choice',
 options: [
    'y = -9 and y = 6',
    'y = -20 and y = -2',
    'y = -26 and y = -11',
    'y = -27 and y = -18'
 ],
 correctAnswer: 2,
 explanation: 'Solve the system of equations by substitution or elimination to find the y-coordinates of the intersection points.'
 },
 {
 id: '6',
 text: 'What is the real solution set of --<br><math><mfrac><mi>x</mi><mrow><mi>x</mi><mo>-</mo><mn>4</mn></mrow></mfrac><mo>-</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>4</mn><mrow><mi>x</mi><mo>-</mo><mn>4</mn></mrow></mfrac></math>',
 type: 'multiple-choice',
 options: [
    '-4',
    '4',
    '28',
    '<math><mi>&#x2205;</mi></math>'
 ],
 correctAnswer: 3,
 explanation: 'Solve the equation by isolating the variable and checking for extraneous solutions.'
 },
 {
 id: '7',
 text: 'What is the solution set for this equation?<br><center><math><mn>3</mn><msqrt><mn>2</mn><mi>x</mi><mo>-</mo><mn>4</mn></msqrt><mo>+</mo><mn>6</mn><mo>=</mo><mn>3</mn></math></center>',
 type: 'multiple-choice',
 options: [
    '<math><mo>{</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>}</mo></math>',
    '<math><mo>{</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>}</mo></math>',
    '<math><mo>{</mo><mo>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>}</mo></math>',
    '{ }'
 ],
 correctAnswer: 3,
 explanation: 'Isolate the radical: 3√(2x - 4) = -3, which gives √(2x - 4) = -1. Since square roots cannot equal negative values, there is no solution.'
 },
 {
 id: '8',
 text: 'Which function is best represented by this graph?<br><img src="images/8.png" class="question-image" alt="Image failed to load. Please try again later."></img>',
 type: 'multiple-choice',
 options: [
    '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>8</mn><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow></mfrac></math>',
    '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mn>8</mn><mrow><mi>x</mi><mo>-</mo><mn>3</mn></mrow></mfrac></math>',
    '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>+</mo><mn>3</mn></mrow></mfrac></math>',
    '<math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>-</mo><mn>3</mn></mrow></mfrac></math>'
 ],
 correctAnswer: 1,
 explanation: 'Identify the vertical asymptote and behavior of the rational function from the graph to determine which function matches.'
 },
 {
 id: '9',
 text: 'Which graph could represent a function g(x) = log(x) + c where c < 0?',
 type: 'multiple-choice',
 options: [
    {url: 'images/9a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/9d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3,
 explanation: 'When c < 0, the logarithmic function shifts down by |c| units. Look for the graph that shows a downward vertical shift.'
 },
 {
 id: '10',
 text: 'An experiment is conducted on a container of gas that is kept at a constant temperature.<br>• When the pressure on the gas is 30 pounds per square inch, the volume is 120 cubic inches.<br>• When the pressure on the gas is 40 pounds per square inch, the volume is 90 cubic inches.<br>• Let p represent the pressure on the gas.<br>• Let v represent the volume of the gas.<br>Which statement is true about this relationship?',
 type: 'multiple-choice',
 options: [
    'The volume of the gas varies directly with the pressure because v = 4p.',
    'The volume of the gas varies directly with the pressure because vp = 3,600.',
    'The volume of the gas varies inversely with the pressure because v = 4p.',
    'The volume of the gas varies inversely with the pressure because vp = 3,600.'
 ],
 correctAnswer: 3,
 explanation: 'Check the product: 30 × 120 = 3,600 and 40 × 90 = 3,600. Since vp = constant, this is an inverse variation.'
 },
 {
 id: '11',
 text: 'A relation is shown in this table.<br><img src="images/11.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which statement about this relation is true?',
 type: 'multiple-choice',
 options: [
    'It is a direct variation because y = -2.5x + 12.5',
    'It is an inverse variation because y = -2.5x + 12.5',
    'It is a direct variation because 10 = xy',
    'It is an inverse variation because 10 = xy'
 ],
 correctAnswer: 3,
 explanation: 'Check if xy = constant (inverse variation) or y/x = constant (direct variation) to determine the relationship type.'
 },
 {
 id: '12',
 text: 'The graph of <math><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mi>x</mi></mfrac></math> has —',
 type: 'multiple-choice',
 options: [
    'two x-intercepts and no y-intercept',
    'two x-intercepts and one y-intercept',
    'one x-intercept and no y-intercept',
    'one x-intercept and one y-intercept'
 ],
 correctAnswer: 2,
 explanation: 'Analyze the function to determine where it crosses the x-axis and y-axis, considering any restrictions on the domain.'
 },
 {
 id: '13',
 text: 'The graph of a function is shown on the grid.<br><img src="images/13.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>What appears to be the domain of this function?',
 type: 'multiple-choice',
 options: [
    '{x | −9 ≤ x ≤ 3}',
    '{x | −5 ≤ x ≤ 2}',
    '{x | −5 ≤ x ≤ −1 and −1 < x < 2}',
    '{x | −9 ≤ x ≤ 0 and 2 < x ≤ 3}'
 ],
 correctAnswer: 1,
 explanation: 'Identify the x-values for which the function is defined by examining the leftmost and rightmost points of the graph.'
 },
 {
 id: '14',
 text: 'Throughout which interval is <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>-</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>x</mi><mo>-</mo><mn>2</mn></math> increasing?',
 type: 'multiple-choice',
 options: [
    '(−∞, −3]',
    '[−3, 0]',
    '[0, 2)',
    '(2, ∞)'
 ],
 correctAnswer: 2,
 explanation: 'Find the derivative and determine where f\'(x) > 0 to identify intervals where the function is increasing.'
 },
 {
 id: '15',
 text: 'Which of the following describes the end behavior of <math><mi>h</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>x</mi><mo>-</mo><mn>6</mn></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></math> as x approaches negative infinity?',
 type: 'multiple-choice',
 options: [
    'y approaches negative infinity',
    'y approaches −6',
    'y approaches −1',
    'y approaches 0'
 ],
 correctAnswer: 3,
 explanation: 'As x → −∞, the degree of the denominator is higher than the numerator, so the function approaches 0.'
 },
 {
 id: '16',
 text: 'Which of the following describes the end behavior of <math><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>9</mn><mi>log</mi><mo>(</mo><mfrac><mi>2x</mi><mn>5</mn></mfrac><mo>)</mo><mo>+</mo><mn>5</mn></math> as x approaches 0?',
 type: 'multiple-choice',
 options: [
    'f(x) approaches −∞',
    'f(x) approaches 0',
    'f(x) approaches 5',
    'f(x) approaches ∞'
 ],
 correctAnswer: 0,
 explanation: 'As x → 0⁺, x/2 → 0⁺, and log₅(x/2) → −∞, so f(x) → −∞.'
 },
 {
 id: '17',
 text: 'Given: f(x) = x − 1<br>g(x) = −2x + 4<br>Which graph best represents f(g(x))?',
 type: 'multiple-choice',
 options: [
    {url: 'images/17a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/17d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 0,
 explanation: 'Compute f(g(x)) = f(−2x + 4) = (−2x + 4) − 1 = −2x + 3, which is a linear function with slope −2 and y-intercept 3.'
 },
 {
 id: '18',
 text: 'The test scores of all students on the State 10th Grade English Assessment were collected and displayed in the histogram shown. The data appear normally distributed with a mean test score of 550 and a standard deviation of 82.<br><img src="images/18-19.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>The principal of a high school in the state wants to compare the data from her school\'s students with the data in the histogram on the same test. To collect the most appropriate data, the principal should —',
 type: 'multiple-choice',
 options: [
    'randomly poll 10th graders in her school asking them what test score they received on the State 10th Grade English assessment',
    'ask the school administration for the data files that contain all the test scores on the State 10th Grade English assessment for her school',
    'have every third 10th grader arranged alphabetically in her school report their test scores on the State 10th Grade English assessment',
    'give a questionnaire to all 10th graders in fourth-period English class asking them to provide their test score on the State 10th Grade English assessment'
 ],
 correctAnswer: 1,
 explanation: 'To get the most accurate and complete data, the principal should obtain the official data files containing all test scores rather than relying on sampling or self-reporting.'
 },
 {
 id: '19',
 text: 'The test scores of all students on the State 10th Grade English Assessment were collected and displayed in the histogram shown. The data appear normally distributed with a mean test score of 550 and a standard deviation of 82.<br><img src="images/18-19.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>The data set containing the test scores on the State 10th Grade English Assessment for Mr. Carter\'s English classes has a median test score lower than the median for all students. Which graph best represents the data for Mr. Carter\'s English classes?',
 type: 'multiple-choice',
 options: [
    {url: 'images/19a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/19d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 3,
 explanation: 'A lower median indicates the distribution is shifted left with more scores in the lower ranges compared to the state distribution.'
 },
 {
 id: '20',
 text: 'A normally distributed set of 968 values has a mean of 108 and a standard deviation of 11. Which is closest to the number of values expected to be above 130?',
 type: 'multiple-choice',
 options: [
    '22',
    '155',
    '462',
    '946'
 ],
 correctAnswer: 0,
 explanation: 'Calculate z = (130 - 108)/11 = 2. Using the standard normal table, P(Z > 2) ≈ 0.0228. Therefore, 968 × 0.0228 ≈ 22 values.'
 },
 {
 id: '21',
 text: 'This table shows data on the amount of money raised during a fundraiser for four different classes and for one student in each class. The data is normally distributed.<br><img src="images/21.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which of the four students raised the greatest amount of money?',
 type: 'multiple-choice',
 options: [
    'Jill',
    'Kelli',
    'Monroe',
    'Tim'
 ],
 correctAnswer: 1,
 explanation: 'Calculate actual amounts: Jill: 60 + 1.8(11) = 79.8, Kelli: 58 + 2.1(12) = 83.2, Monroe: 55 + 1.4(13) = 73.2, Tim: 57 + 2.5(10) = 82. Kelli raised the most.'
 },
 {
 id: '22',
 text: 'The amount of lost revenue from tickets not sold for a concert is shown in the table.<br><img src="images/22.png" class="question-image" alt="Image failed to load. Please try again later."></img><br>Which equation best models the relationship between y, the amount of lost revenue, and x, the price per ticket?',
 type: 'multiple-choice',
 options: [
    '<math><mi>y</mi><mo>=</mo><mn>1,218</mn><mo>(</mo><mn>1.01</mn><msup><mo>)</mo><mi>x</mi></msup></math>',
    '<math><mi>y</mi><mo>=</mo><mn>997</mn><mo>(</mo><mn>1.03</mn><msup><mo>)</mo><mi>x</mi></msup></math>',
    '<math><mi>y</mi><mo>=</mo><mn>400</mn><mi>x</mi><mo>-</mo><mn>11,570</mn></math>',
    '<math><mi>y</mi><mo>=</mo><mn>156</mn><mi>x</mi><mo>-</mo><mn>10,000</mn></math>'
 ],
 correctAnswer: 1,
 explanation: 'Analyze the relationship between price and lost revenue. The pattern suggests an exponential or power function relationship.'
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