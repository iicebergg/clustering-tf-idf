window.TEST_IDENTIFIER = 'math_grade5_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: '4.221 ÷ 7 = ______ ?',
 type: 'multiple-choice',
 options: ['0.063', '0.603', '0.63', '6.03'],
 correctAnswer: 1,
 explanation: 'When dividing 4.221 by 7, we get 0.603. To divide, we perform the division: 4.221 ÷ 7 = 0.603'
 },
 {
 id: '2',
 text: 'Using the order of operations, which calculation should be done first to simplify this expression?<br><br><center>54 + 6 × (3 + 6) ÷ 3</center>',
 type: 'multiple-choice',
 options: ['3 + 6', '6 × 3', '6 ÷ 3', '54 + 6'],
 correctAnswer: 0,
 explanation: 'Following the order of operations (PEMDAS), parentheses are evaluated first, so 3 + 6 should be calculated first.'
 },
 {
 id: '3',
 text: 'Which expression represents the prime factorization of 75?',
 type: 'multiple-choice',
 options: ['3 × 25', '3 × 3 × 5', '3 × 5 × 5', '3 × 3 × 5 × 5'],
 correctAnswer: 2,
 explanation: '75 = 3 × 25 = 3 × 5 × 5, which is the complete prime factorization using only prime numbers.'
 },
 {
 id: '4',
 text: 'Destiny is delivering a total of 32,000 flowers to several stores. This table shows the number of these flowers she has delivered to Store P and Store Q.<br><br><table style="margin: 10px auto; border-collapse: collapse;"><tr><th style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Store</th><th style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Number of Flowers</th></tr><tr><td style="border: 1px solid black; padding: 8px;">Store P</td><td style="border: 1px solid black; padding: 8px;">18,104</td></tr><tr><td style="border: 1px solid black; padding: 8px;">Store Q</td><td style="border: 1px solid black; padding: 8px;">9,294</td></tr></table><br>The total number of these flowers that Destiny still needs to deliver is —',
 type: 'multiple-choice',
 options: ['59,398', '27,398', '8,810', '4,602'],
 correctAnswer: 3,
 explanation: 'Total delivered: 18,104 + 9,294 = 27,398. Still to deliver: 32,000 - 27,398 = 4,602'
 },
 {
 id: '5',
 text: 'A farmer is picking fruit. She picks 1,457 apples and 678 pears.<br>• She will fill baskets using these pieces of fruit.<br>• She will fill each basket with 24 pieces of fruit.<br><br>What is the total number of baskets the farmer will be able to fill with these pieces of fruit?',
 type: 'multiple-choice',
 options: ['2,135', '779', '89', '88'],
 correctAnswer: 3,
 explanation: 'Total fruit: 1,457 + 678 = 2,135. Number of complete baskets: 2,135 ÷ 24 = 88 remainder 23, so 88 complete baskets.'
 },
 {
 id: '6',
 text: 'What is the least common denominator for <math><mfrac><mn>1</mn><mn>4</mn></mfrac></math> and <math><mfrac><mn>7</mn><mn>12</mn></mfrac></math>?',
 type: 'multiple-choice',
 options: ['12', '16', '24', '48'],
 correctAnswer: 0,
 explanation: 'The least common multiple of 4 and 12 is 12. Since 12 = 4 × 3 and 12 = 12 × 1.'
 },
 {
 id: '7',
 text: 'A trail is <math><mfrac><mn>3</mn><mn>4</mn></mfrac></math> mile long. Robert ran the length of the trail 2 times. A blank number line is provided.<br><img src="images/7.png" class="question-image" alt="Number line for the problem"></img><br>What is the total number of miles Robert ran?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>6</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>3</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'Robert ran 3/4 mile twice: 3/4 × 2 = 6/4 miles (or 1 1/2 miles).'
 },
 {
 id: '8',
 text: 'Mason has a brick and 5 wood blocks.<br>• The brick has a mass of 2.27 kilograms.<br>• Each wood block has a mass of 1.097 kilograms.<br><br>What is the difference between the combined mass of the 5 wood blocks and the mass of the brick?',
 type: 'multiple-choice',
 options: ['7.755 kilograms', '5.485 kilograms', '3.215 kilograms', '1.173 kilograms'],
 correctAnswer: 2,
 explanation: 'Mass of 5 wood blocks: 5 × 1.097 = 5.485 kg. Difference: 5.485 - 2.27 = 3.215 kg'
 },
 {
 id: '9',
 text: 'Ms. Collins bought 2 CDs for $14.55 each and 3 DVDs for $10.39 each. These prices include tax. She gave the cashier $65.00. How much change should Ms. Collins receive?',
 type: 'multiple-choice',
 options: ['$4.73', '$5.27', '$40.06', '$60.27'],
 correctAnswer: 0,
 explanation: 'Total cost: (2 × $14.55) + (3 × $10.39) = $29.10 + $31.17 = $60.27. Change: $65.00 - $60.27 = $4.73'
 },
 {
 id: '10',
 text: 'The measurements between four points on a map are shown. (Figure is not drawn to scale.)<br><img src="images/10.png" class="question-image" alt="Map showing points A, B, C, and D with distances"></img><br>What is the distance from point C to point D on the map?',
 type: 'multiple-choice',
 options: ['5.25 cm', '9.75 cm', '11.25 cm', '15.75 cm'],
 correctAnswer: 0,
 explanation: 'Total distance is 15.75 cm. Distance from A to C: 4.5 + 6 = 10.5 cm. Distance from C to D: 15.75 - 10.5 = 5.25 cm'
 },
 {
 id: '11',
 text: 'A right triangle is shaded inside the rectangle shown.<br><img src="images/11.png" class="question-image" alt="Rectangle with shaded right triangle"></img><br>Which expression could be used to find the area, in square units, of the triangle?',
 type: 'multiple-choice',
 options: ['3 × 4 × <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '3 × 4 × 5 × <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '3 + 4 + 5', '3 + 4 + 3 + 4'],
 correctAnswer: 0,
 explanation: 'Area of a triangle = 1/2 × base × height = 3 × 4 × 1/2'
 },
 {
 id: '12',
 text: 'Which term best describes the amount of jelly a jar will hold?',
 type: 'multiple-choice',
 options: ['Length', 'Perimeter', 'Volume', 'Area'],
 correctAnswer: 2,
 explanation: 'Volume measures the amount of space inside a container, which is what a jar can hold.'
 },
 {
 id: '13',
 text: 'This figure represents a storage container.<br><img src="images/13.png" class="question-image" alt="Rectangular prism with dimensions"></img><br>What is the volume of this storage container?',
 type: 'multiple-choice',
 options: ['600 cubic meters', '195 cubic meters', '120 cubic meters', '115 cubic meters'],
 correctAnswer: 0,
 explanation: 'Volume = length × width × height = 15 × 8 × 5 = 600 cubic meters'
 },
 {
 id: '14',
 text: 'Brady is using grid paper to design a garden. The shaded figure represents the garden.<br><img src="images/14.png" class="question-image" alt="Grid with shaded garden shape"></img><br>Which best describes the area and perimeter of the shaded figure on this grid?',
 type: 'multiple-choice',
 options: ['Area of 24 square meters and perimeter of 24 meters', 'Area of 21 square meters and perimeter of 21 meters', 'Area of 24 square meters and perimeter of 21 meters', 'Area of 21 square meters and perimeter of 24 meters'],
 correctAnswer: 3,
 explanation: 'Count the shaded squares for area (21 square meters) and count the outside edges for perimeter (24 meters).'
 },
 {
 id: '15',
 text: 'Which angle is an obtuse angle?<br><img src="images/15.png" class="question-image" alt="Diagram showing 4 different angles"></img>',
 type: 'multiple-choice',
 options: ['Angle 1', 'Angle 2', 'Angle 3', 'Angle 4'],
 correctAnswer: 1,
 explanation: 'An obtuse angle measures between 90° and 180°. Angle 2 is the obtuse angle.'
 },
 {
 id: '16',
 text: 'Which figure appears to be an isosceles triangle?',
 type: 'multiple-choice',
 options: [
    {url: 'images/16a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/16d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'An isosceles triangle has at least two equal sides. Figure H appears to be an isosceles triangle.'
 },
 {
 id: '17',
 text: 'Which pattern follows the rule "divide by 4" to find each number after the first?',
 type: 'multiple-choice',
 options: ['360, 90, 30, 15', '256, 64, 16, 4', '92, 88, 84, 80', '23, 19, 15, 11'],
 correctAnswer: 1,
 explanation: '256 ÷ 4 = 64, 64 ÷ 4 = 16, 16 ÷ 4 = 4. Each number is the previous number divided by 4.'
 },
 {
 id: '18',
 text: 'Seven students in a class are raising money for a fundraiser by riding their bicycles for 10 days.<br>• The students will be paid for every mile they ride.<br>• This table shows the number of miles each student rode in the first four days.<br><br><table style="margin: 10px auto; border-collapse: collapse;"><tr><th style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Student</th><th style="border: 1px solid black; padding: 8px;">Blake</th><th style="border: 1px solid black; padding: 8px;">Charles</th><th style="border: 1px solid black; padding: 8px;">Eva</th><th style="border: 1px solid black; padding: 8px;">Jasmine</th><th style="border: 1px solid black; padding: 8px;">Lucy</th><th style="border: 1px solid black; padding: 8px;">Micah</th><th style="border: 1px solid black; padding: 8px;">Robert</th></tr><tr><td style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Number of Miles</td><td style="border: 1px solid black; padding: 8px;">10</td><td style="border: 1px solid black; padding: 8px;">18</td><td style="border: 1px solid black; padding: 8px;">9</td><td style="border: 1px solid black; padding: 8px;">10</td><td style="border: 1px solid black; padding: 8px;">18</td><td style="border: 1px solid black; padding: 8px;">18</td><td style="border: 1px solid black; padding: 8px;">22</td></tr></table><br>Which question can the students NOT answer by analyzing the data in the table?',
 type: 'multiple-choice',
 options: ['What is the least number of miles a student rode?', 'What is the number of miles the most students rode?', 'What is the number of miles the students rode each day?', 'What is the total number of miles the students rode on these four days?'],
 correctAnswer: 2,
 explanation: 'The table shows total miles for four days, not the breakdown by individual days.'
 },
 {
 id: '19',
 text: 'Based on this table of data, the median number of miles is —<br><br><table style="margin: 10px auto; border-collapse: collapse;"><tr><th style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Student</th><th style="border: 1px solid black; padding: 8px;">Blake</th><th style="border: 1px solid black; padding: 8px;">Charles</th><th style="border: 1px solid black; padding: 8px;">Eva</th><th style="border: 1px solid black; padding: 8px;">Jasmine</th><th style="border: 1px solid black; padding: 8px;">Lucy</th><th style="border: 1px solid black; padding: 8px;">Micah</th><th style="border: 1px solid black; padding: 8px;">Robert</th></tr><tr><td style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Number of Miles</td><td style="border: 1px solid black; padding: 8px;">10</td><td style="border: 1px solid black; padding: 8px;">18</td><td style="border: 1px solid black; padding: 8px;">9</td><td style="border: 1px solid black; padding: 8px;">10</td><td style="border: 1px solid black; padding: 8px;">18</td><td style="border: 1px solid black; padding: 8px;">18</td><td style="border: 1px solid black; padding: 8px;">22</td></tr></table>',
 type: 'multiple-choice',
 options: ['10, because it is the average number of miles', '10, because it is the middle number of miles in the table', '18, because it is the middle number of miles when the data are ordered from least to greatest', '18, because it is the difference between the greatest number of miles and the least number of miles'],
 correctAnswer: 2,
 explanation: 'When ordered: 9, 10, 10, 18, 18, 18, 22. The median (middle value) is 18.'
 },
 {
 id: '20',
 text: 'A principal wants to know the number of days each student was absent from school last month. Which question would best collect the data?',
 type: 'multiple-choice',
 options: ['What is the number of students in the school?', 'What is each student\'s favorite school subject?', 'What is the number of days each student was absent last year?', 'What is the number of days each student was absent last month?'],
 correctAnswer: 3,
 explanation: 'This question directly asks for the specific information the principal wants to know.'
 },
 {
 id: '21',
 text: 'This line plot shows the number of envelopes Tammie received in the mail on each of ten days.<br><img src="images/21.png" class="question-image" alt="Line plot showing envelope distribution"></img><br>What is the total number of days on which Tammie received at least 6 envelopes in the mail?',
 type: 'multiple-choice',
 options: ['2', '3', '5', '7'],
 correctAnswer: 2,
 explanation: 'Count the X\'s at 6, 7, and 8 on the line plot to find the days with at least 6 envelopes.'
 },
 {
 id: '22',
 text: 'This table shows the number of beads Irma has in 5 bowls.<br><br><table style="margin: 10px auto; border-collapse: collapse;"><tr><th style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Bowl</th><th style="border: 1px solid black; padding: 8px; background-color: #f0f0f0;">Number of Beads</th></tr><tr><td style="border: 1px solid black; padding: 8px;">A</td><td style="border: 1px solid black; padding: 8px;">15</td></tr><tr><td style="border: 1px solid black; padding: 8px;">B</td><td style="border: 1px solid black; padding: 8px;">10</td></tr><tr><td style="border: 1px solid black; padding: 8px;">C</td><td style="border: 1px solid black; padding: 8px;">12</td></tr><tr><td style="border: 1px solid black; padding: 8px;">D</td><td style="border: 1px solid black; padding: 8px;">8</td></tr><tr><td style="border: 1px solid black; padding: 8px;">E</td><td style="border: 1px solid black; padding: 8px;">10</td></tr></table><br>Irma will empty all the beads from these bowls and will put an equal number of beads back into each bowl. The number of beads she will put in each bowl represents the —',
 type: 'multiple-choice',
 options: ['sample space', 'fair share', 'product', 'pattern'],
 correctAnswer: 1,
 explanation: 'Dividing items equally among groups represents a fair share.'
 },
 {
 id: '23',
 text: 'The data sets represent daily low temperatures, in degrees Fahrenheit, for four different cities.<br><br>In which data set does the range have the greatest spread?',
 type: 'multiple-choice',
 options: ['21, 24, 29, 25, 27', '33, 37, 36, 36, 33', '42, 41, 43, 48, 44', '53, 57, 54, 51, 53'],
 correctAnswer: 0,
 explanation: 'Range is max - min. A: 29-21=8, B: 37-33=4, C: 48-41=7, D: 57-51=6. Set A has the greatest range of 8.'
 },
 {
 id: '24',
 text: 'This sample space shows all of the possible combinations of one type of drink and one type of snack that Leslie can choose.<br><br>Water, Apple<br>Water, Cheese<br>Water, Pretzels<br>Water, Banana<br>Juice, Apple<br>Juice, Cheese<br>Juice, Pretzels<br>Juice, Banana<br><br>According to the sample space, what is the probability that the combination Leslie chooses will include juice?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>4</mn></mfrac></math>', '<math><mfrac><mn>4</mn><mn>8</mn></mfrac></math>', '<math><mfrac><mn>8</mn><mn>8</mn></mfrac></math>'],
 correctAnswer: 2,
 explanation: '4 out of 8 combinations include juice, so the probability is 4/8 or 1/2.'
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