window.TEST_IDENTIFIER = 'math_geometry_practice_2023';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which value for x is a counterexample to the following statement?<br><center>For all positive values of x, <math><msup><mi>x</mi><mn>3</mn></msup></math> ≥ x.</center>',
 type: 'multiple-choice',
 options: ['−1.0', '−0.1', '0.1', '1.0'],
 correctAnswer: 2,
 explanation: 'For small positive values between 0 and 1, cubing the number makes it smaller. For example, 0.1³ = 0.001, which is less than 0.1. This serves as a counterexample to the statement.'
 },
 {
 id: '2',
 text: 'The Venn diagram represents the combination of lunches that athletes selected.<br><img src="images/2.png" class="question-image" alt="Venn diagram showing Soup, Sandwich, and Salad selections"></img><br>• A total of 310 athletes selected a sandwich.<br>• A total of 125 athletes selected both a sandwich and a salad.<br>• A total of 180 athletes selected both a sandwich and a soup.<br><br>How many athletes selected a sandwich, a soup, and a salad?',
 type: 'multiple-choice',
 options: ['5', '55', '65', '110'],
 correctAnswer: 2,
 explanation: 'Using the given information and the Venn diagram, we can determine that 65 athletes selected all three items - sandwich, soup, and salad.'
 },
 {
 id: '3',
 text: 'Given the Venn diagram:<br><img src="images/3.png" class="question-image" alt="Venn diagram showing Triangles with overlapping Acute Triangles and Isosceles Triangles"></img><br>Which statement is valid?',
 type: 'multiple-choice',
 options: ['All triangles are acute and isosceles.', 'All triangles are either acute or isosceles.', 'No triangles are both acute and isosceles.', 'Some triangles are both acute and isosceles.'],
 correctAnswer: 3,
 explanation: 'The Venn diagram shows overlapping sets of acute triangles and isosceles triangles, indicating that some triangles possess both properties.'
 },
 {
 id: '4',
 text: 'Lines a and b intersect lines c and d.<br><img src="images/4.png" class="question-image" alt="Lines a and b intersecting lines c and d with angles labeled 1-6"></img><br>Which of the following statements could be used to prove that a ∥ b and c ∥ d?',
 type: 'multiple-choice',
 options: ['∠1 ≅ ∠6, ∠3 ≅ ∠5', '∠1 ≅ ∠6, ∠4 and ∠5 are supplementary', '∠1 ≅ ∠4, ∠1 and ∠2 are supplementary', '∠1 and ∠3 are supplementary, ∠1 and ∠6 are supplementary'],
 correctAnswer: 1,
 explanation: 'When corresponding angles are congruent and consecutive interior angles are supplementary, we can prove that lines are parallel.'
 },
 {
 id: '5',
 text: 'Lines j and k are cut by transversals m and n. (Figure is not drawn to scale.)<br><img src="images/5.png" class="question-image" alt="Lines j and k cut by transversals m and n with angles labeled"></img><br>Which relationship is sufficient to prove j ∥ k?',
 type: 'multiple-choice',
 options: ['x = 60', 'y = 30', 'y = x − 30', 'y = 150 − 2x'],
 correctAnswer: 3,
 explanation: 'For lines j and k to be parallel, corresponding angles must be equal. The relationship y = 150 − 2x ensures this condition is met.'
 },
 {
 id: '6',
 text: 'The perimeter of △JKL is 200 centimeters.<br>• JK = 68 centimeters<br>• KL = 62 centimeters<br><br>Which statement is true about the interior angles of △JKL?',
 type: 'multiple-choice',
 options: ['m∠L is the greatest of the interior angles', 'm∠L is the least of the interior angles', 'm∠K is the greatest of the interior angles', 'm∠K is the least of the interior angles'],
 correctAnswer: 2,
 explanation: 'JL = 200 - 68 - 62 = 70 cm. Since JL is the longest side, the angle opposite to it (∠K) is the greatest angle in the triangle.'
 },
 {
 id: '7',
 text: 'Triangle STW and △XYZ are shown.<br><img src="images/7.png" class="question-image" alt="Two triangles with labeled angles and sides"></img><br>Which value of x makes △STW ≅ △XYZ?',
 type: 'multiple-choice',
 options: ['2', '3', '4', '6'],
 correctAnswer: 2,
 explanation: 'For the triangles to be congruent, corresponding sides must be equal. Setting up the equation and solving gives x = 4.'
 },
 {
 id: '8',
 text: 'Evelyn is constructing a triangle congruent to △ABC using ray MN.<br><img src="images/8.png" class="question-image" alt="Triangle ABC and construction options"></img><br>Which triangle should Evelyn construct that will be congruent to △ABC?',
 type: 'multiple-choice',
 options: [
    '△MSP',
    '△MSR',
    '△MTP',
    '△MTR'
 ],
 correctAnswer: 2,
 explanation: 'Using SAS (Side-Angle-Side) congruence, Evelyn needs two sides and the included angle to match the original triangle.'
 },
 {
 id: '9',
 text: 'The figure shown is a regular hexagon.<br><img src="images/9.png" class="question-image" alt="Regular hexagon ABCDEF with side length 4 in"></img><br>Which measure is the length of the diagonal AC?',
 type: 'multiple-choice',
 options: ['<math><mn>4</mn><msqrt><mn>3</mn></msqrt></math> in.', '8 in.', '12 in.', '<math><mn>8</mn><msqrt><mn>3</mn></msqrt></math> in.'],
 correctAnswer: 0,
 explanation: 'In a regular hexagon with side length 4, the diagonal connecting vertices separated by one vertex has length 4√3 inches.'
 },
 {
 id: '10',
 text: 'A carpenter will build a shed with four walls and a roof. The shape of the shed will consist of a triangular prism and a rectangular prism as shown in the model.<br><img src="images/10-12.png" class="question-image" alt="Aerial and front view of shed"></img><br>A vertical plane intersects the model. The plane is parallel to the front face of the model. What is the shape of this cross section?',
 type: 'multiple-choice',
 options: ['Triangle', 'Pentagon', 'Rectangle', 'Trapezoid'],
 correctAnswer: 1,
 explanation: 'A vertical plane parallel to the front face creates a cross section that shows both the rectangular base and triangular roof, forming a pentagon.'
 },
 {
 id: '11',
 text: 'A carpenter will build a shed with four walls and a roof. The shape of the shed will consist of a triangular prism and a rectangular prism as shown in the model.<br><img src="images/10-12.png" class="question-image" alt="Aerial and front view of shed"></img><br>If w = 12 and h = 6, the surface area of the exterior walls and doors is exactly —',
 type: 'multiple-choice',
 options: ['360 square feet', '414 square feet', '468 square feet', '630 square feet'],
 correctAnswer: 1,
 explanation: 'Calculating the surface area with w = 12 and h = 6: front/back rectangles, side walls, and triangular portions sum to 414 square feet.'
 },
 {
 id: '12',
 text: 'A carpenter will build a shed with four walls and a roof. The shape of the shed will consist of a triangular prism and a rectangular prism as shown in the model.<br><img src="images/10-12.png" class="question-image" alt="Aerial and front view of shed"></img><br>If w = 12, which equation correctly models a calculation of the volume of the shed?',
 type: 'multiple-choice',
 options: [
    'V = 9 × 6 × 18',
    'V = <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 9 × 6 × 18',
    'V = 9 × 6 × 18 + <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 9 × 6 × 18',
    'V = 9 × 6 × 18 + <math><mfrac><mn>1</mn><mn>2</mn></mfrac></math> × 6 × h × 18'
 ],
 correctAnswer: 3,
 explanation: 'The volume combines the rectangular prism (9 × 6 × 18) and the triangular prism (½ × 6 × h × 18).'
 },
 {
 id: '13',
 text: 'A cylinder has a volume of 540π cubic centimeters and a base with a circumference of 12π centimeters. What is the height of the cylinder?',
 type: 'multiple-choice',
 options: ['30 cm', '15 cm', '12 cm', '3 cm'],
 correctAnswer: 2,
 explanation: 'From circumference 12π, radius r = 6. Using V = πr²h: 540π = π(36)h, so h = 15 cm.'
 },
 {
 id: '14',
 text: 'The height of a rectangular prism is decreased by a factor of <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. The other dimensions are unchanged. Which statement is true?',
 type: 'multiple-choice',
 options: [
    'The volume is decreased by a factor of <math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>',
    'The volume is decreased by a factor of <math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>',
    'The volume is decreased by a factor of <math><mfrac><mn>1</mn><mn>9</mn></mfrac></math>',
    'The volume is decreased by a factor of <math><mfrac><mn>1</mn><mn>27</mn></mfrac></math>'
 ],
 correctAnswer: 0,
 explanation: 'Volume is directly proportional to height. If height is decreased by a factor of 1/3, volume is also decreased by a factor of 1/3.'
 },
 {
 id: '15',
 text: 'A company makes two similar cylindrical containers. The total surface area of the smaller container is 0.81 times that of the larger container. The height of the larger container is 60 centimeters. What is the height of the smaller container?',
 type: 'multiple-choice',
 options: ['54 cm', '48.6 cm', '24.3 cm', '21 cm'],
 correctAnswer: 0,
 explanation: 'For similar cylinders, if surface area ratio is 0.81, then linear ratio is √0.81 = 0.9. Height of smaller container: 60 × 0.9 = 54 cm.'
 },
 {
 id: '16',
 text: 'Given: Quadrilateral ABCD<br><img src="images/16.png" class="question-image" alt="Quadrilateral ABCD with vertices labeled"></img><br>Which expression proves that ABCD is a rectangle?',
 type: 'multiple-choice',
 options: [
    'The length of each diagonal is <math><msqrt><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>m</mi><mn>2</mn></msup></msqrt></math>',
    'The common midpoint of the diagonals is <math><mo>(</mo><mfrac><mi>r</mi><mn>2</mn></mfrac><mo>,</mo><mfrac><mi>m</mi><mn>2</mn></mfrac><mo>)</mo></math>',
    'The slope of AC is <math><mfrac><mi>m</mi><mi>r</mi></mfrac></math> and the slope of BD is <math><mo>-</mo><mfrac><mi>m</mi><mi>r</mi></mfrac></math>',
    'The length of both AB and DC is r and the length of both BC and AD is m'
 ],
 correctAnswer: 0,
 explanation: 'A rectangle has congruent diagonals. Both diagonals having length √(r² + m²) proves ABCD is a rectangle.'
 },
 {
 id: '17',
 text: 'The figure shown is composed of a regular pentagon and a rectangle.<br><img src="images/17.png" class="question-image" alt="Regular pentagon attached to rectangle with angles x marked"></img><br>What is the measure of each of the angles identified as x?',
 type: 'multiple-choice',
 options: ['36°', '54°', '72°', '108°'],
 correctAnswer: 0,
 explanation: 'Interior angle of regular pentagon is 108°. The rectangle has 90° angles. So x = 180° - 90° - 54° = 36°.'
 },
 {
 id: '18',
 text: 'Points Q, R, and S lie on circle P.<br><img src="images/18.png" class="question-image" alt="Circle P with points Q, R, S and angles marked"></img><br>What is the value of x?',
 type: 'multiple-choice',
 options: ['5', '12', '25', '65'],
 correctAnswer: 2,
 explanation: 'Using properties of inscribed angles and arcs in a circle, solving the equation gives x = 25.'
 },
 {
 id: '19',
 text: 'In circle P, m∠HJK = 60° and the measure of arc JK = 2 • (the measure of arc HJ).<br><img src="images/19.png" class="question-image" alt="Circle P with points H, J, K marked"></img><br>What is the measure of arc HJ?',
 type: 'multiple-choice',
 options: ['80°', '120°', '150°', '160°'],
 correctAnswer: 0,
 explanation: 'The inscribed angle is half the intercepted arc. If ∠HJK = 60°, then arc HK = 120°. With m⏜JK = 2 • m⏜HJ and the arcs summing to 120°, m⏜HJ = 80°.'
 },
 {
 id: '20',
 text: 'Circle P has a radius of 1 unit. A central angle of circle P is 225°. What is the length of the minor arc?',
 type: 'multiple-choice',
 options: [
    '<math><mfrac><mrow><mn>5</mn><mi>π</mi></mrow><mn>4</mn></mfrac></math> units',
    '<math><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>4</mn></mfrac></math> units',
    '<math><mfrac><mrow><mn>5</mn><mi>π</mi></mrow><mn>8</mn></mfrac></math> units',
    '<math><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>8</mn></mfrac></math> units'
 ],
 correctAnswer: 1,
 explanation: 'The minor arc corresponds to 360° - 225° = 135°. Arc length = (135/360) × 2π × 1 = 3π/4 units.'
 },
 {
 id: '21',
 text: 'The design for the arc-shaped stand of the hammock shown was based on a 144° arc, ⏜ST, of a circle with a radius of 2.3 meters. (Figure is not drawn to scale.)<br><img src="images/21.png" class="question-image" alt="Arc ST of hammock stand"></img><br>The length of ⏜ST is closest to —',
 type: 'multiple-choice',
 options: ['2.89 m', '3.68 m', '5.78 m', '7.23 m'],
 correctAnswer: 2,
 explanation: 'Arc length = (144/360) × 2π × 2.3 = 0.4 × 2π × 2.3 ≈ 5.78 meters.'
 },
 {
 id: '22',
 text: 'Given: Three concentric circles with the center O; KL is congruent to LN is congruent to NO; KP = 42 inches <br><img src="images/22.png" class="question-image" alt="Three concentric circles with radii 7, 11, and 14 inches"></img><br>Which is closest to the area of the shaded region?',
 type: 'multiple-choice',
 options: ['231 sq in.', '308 sq in.', '539 sq in.', '616 sq in.'],
 correctAnswer: 3,
 explanation: 'Area of shaded region = π(14)² - π(7)² = 196π - 49π = 147π ≈ 616 square inches.'
 },
 {
 id: '23',
 text: 'Given: Circle T with WP = 36 centimeters<br><img src="images/23.png" class="question-image" alt="Circle T with shaded sector"></img><br>Which best represents the area of the shaded sector?',
 type: 'multiple-choice',
 options: [
    '117π cm²',
    '180π cm²',
    '234π cm²',
    '468π cm²'
 ],
 correctAnswer: 0,
 explanation: 'For a 90° sector with radius 9: Area = (90/360) × π × 9² = (1/4) × 81π = 81π/4.'
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