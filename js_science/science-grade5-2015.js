window.TEST_IDENTIFIER = 'science_grade5_2015';

const sampleQuestions = [
 {
 id: '1',
 text: 'A fungus is found growing on dead leaves on the forest floor. The fungus is an example of a--',
 type: 'multiple-choice',
 options: ['decomposer', 'carnivore', 'predator', 'producer'],
 correctAnswer: 0,
 explanation: 'A decomposer breaks down dead organic matter like leaves, returning nutrients to the soil. Fungi are important decomposers in ecosystems.'
 },
 {
 id: '2',
 text: 'Based on the table, how much rainfall should a scientist have predicted for May of 2011 in Norfolk?',
 type: 'multiple-choice',
 image: {url:'images/question_2.png', alt: 'Image failed to load. Please try again later.'},
 options: ['12-17 inches', '15-20 inches', '18-23 inches', '21-26 inches'],
 correctAnswer: 3, 
 explanation: 'Look at the pattern in the rainfall data table to predict the expected range for May 2011 in Norfolk.'
 },
 {
 id: '3',
 text: 'Which of these best explains why the sun is not visible during the night?',
 type: 'multiple-choice',
 options: ['The moon blocks the sun from view.', 'That side of the sun faces away from Earth.', 'The sun stops creating light at night.', 'That side of Earth faces away from the sun.'],
 correctAnswer: 3, 
 explanation: 'Earth rotates on its axis. During night, our side of Earth faces away from the sun, so we cannot see sunlight.'
 },
 {
 id: '4',
 text: 'A model of a plate boundary is shown. What most likely happens as the plates slide past each other?',
 type: 'multiple-choice',
 image: {url:'images/question_4.png', alt: 'Image failed to load. Please try again later.'},
 options: ['A mountain forms.', 'An earthquake occurs.', 'The ocean floor widens.', 'Magma comes to the surface.'],
 correctAnswer: 1,
 explanation: 'When tectonic plates slide past each other at a transform boundary, the friction and sudden movement cause earthquakes.'
 },
 {
 id: '5',
 text: 'What is the mass of the rock shown?',
 type: 'free-response',
 image: {url:'images/question_5.png', alt: 'Image failed to load. Please try again later.'},
 correctKeywords: ['37', '37 g', '37g', '37 grams'],
 explanation: 'Read the balance scale to determine the mass. The rock balances at 37 grams.'
 },
 {
 id: '6',
 text: 'During pollination, pollen is transferred from a stamen to a--',
 type: 'multiple-choice',
 image: {url:'images/question_6.png', alt: 'Image failed to load. Please try again later.'},
 options: ['petal', 'stem', 'sepal', 'stigma'],
 correctAnswer: 3, 
 explanation: 'In pollination, pollen grains move from the stamen (male part) to the stigma (female part) of a flower.'
 },
 {
 id: '7',
 text: 'Which of these is an impact made by humans?',
 type: 'multiple-choice',
 options: ['Marble being dug from a rock quarry', 'Marble forming from sedimentary rock', 'Oceans drying and exposing limestone', 'Limestone forming from shells of ocean animals'],
 correctAnswer: 0, 
 explanation: 'Quarrying marble from rock is a human activity. The other options are natural geological processes.'
 },
 {
 id: '8',
 text: 'Lobster pots are used by fishermen to catch lobsters in shallow water. In which area of the ocean would commercial fishermen most likely place their lobster pots?',
 type: 'multiple-choice',
 options: ['On the bottom of an ocean trench', 'On top of a mid-ocean ridge', 'On the continental slope', 'On the continental shelf'],
 correctAnswer: 3, 
 explanation: 'The continental shelf is the shallow, underwater area near coastlines where lobsters live and can be easily accessed by fishermen.'
 },
 {
 id: '9',
 text: 'Which unit is best to use to measure the distance a runner covered in 30 seconds?',
 type: 'multiple-choice',
 options: ['mm', 'cm', 'm', 'km'],
 correctAnswer: 2, 
 explanation: 'Meters (m) is the appropriate unit for measuring distances a person runs in a short time. A runner might cover 100-200 meters in 30 seconds.'
 },
 {
 id: '10',
 text: 'In which direction will the ball most likely go after it hits the wall?',
 type: 'multiple-choice',
 image: {url:'images/question_10.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'When a ball hits a wall, it bounces back at an angle equal to the angle it hit the wall (angle of incidence equals angle of reflection).'
 },
 /*
 {
 id: '11',
 text: 'What is the difference between 5/12 and 1/4',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>3</mn></mfrac></math>', '<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>', '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0, 
 explanation: 'Note: This appears to be a math question that may have been included in error. Convert to common denominator: 5/12 - 3/12 = 2/12 = 1/6.'
 },*/
 {
 id: '12',
 text: 'Which cell part is necessary for producing food?',
 type: 'multiple-choice',
 image: {url:'images/question_12.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Cell membrane', 'Vacuole', 'Chloroplast', 'Cytoplasm'],
 correctAnswer: 2, 
 explanation: 'Chloroplasts contain chlorophyll and are where photosynthesis occurs, allowing plant cells to make their own food using sunlight.'
 },
 {
 id: '13',
 text: 'One way in which light waves are different from sound waves is that light waves--',
 type: 'multiple-choice',
 options: ['can move through empty space', 'are caused by rapid vibrations', 'travel more slowly', 'can be reflected'],
 correctAnswer: 0, 
 explanation: 'Light waves can travel through empty space (vacuum), while sound waves need matter to travel through. Sound cannot travel in a vacuum.'
 },
 {
 id: '14',
 text: 'Which material will correctly complete the chart?',
 type: 'multiple-choice',
 image: {url:'images/question_14.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Gold, because it is a shiny metal', 'Salt, because it is made of two types of atoms', 'Nitrogen, because it is a gas in the atmosphere', 'Carbon, because it is part of many different molecules'],
 correctAnswer: 1, 
 explanation: 'Salt (sodium chloride) is a compound made of two different types of atoms: sodium and chlorine.'
 },
 {
 id: '15',
 text: 'A student rubbed a plastic comb with a piece of wool cloth and then placed the comb near a stream of water. The water bent toward the comb as shown because of-',
 type: 'multiple-choice',
 image: {url:'images/question_15.png', alt: 'Image failed to load. Please try again later.'},
 options: ['thermal energy', 'static electricity', 'magnetism', 'gravity'],
 correctAnswer: 1, 
 explanation: 'Rubbing the comb with wool creates static electricity. The charged comb attracts the water stream through electrostatic force.'
 },
 {
 id: '16',
 text: 'Which plant part develops into a fruit?',
 type: 'multiple-choice',
 options: ['Flower', 'Stem', 'Leaf', 'Root'],
 correctAnswer: 0, 
 explanation: 'After pollination and fertilization, the flower (specifically the ovary) develops into a fruit containing seeds.'
 },
 {
 id: '17',
 text: 'A student is investigating the time it takes for different objects to reach the ground after they are dropped. The constant in this investigation is the -',
 type: 'multiple-choice',
 options: ['time to reach the ground', 'distance to the ground', 'weight of each object', 'object being dropped'],
 correctAnswer: 1,
 explanation: 'In a controlled experiment, the constant (controlled variable) is what stays the same. The distance to the ground should remain constant for all objects.'
 },
 {
 id: '18',
 text: 'Identify the quantitative data shown.',
 type: 'multiple-select',
 options: ['Gold color', 'Weighs 20.5 g', 'Greenish black streak', 'About 4 cubic cm', 'Sinks in water', 'Hardness of 6-6.5'],
 correctAnswer: [1, 3, 5],
 explanation: 'Quantitative data involves numbers/measurements (weight, volume, hardness). Qualitative data describes qualities (color, streak, behavior in water).'
 },
 {
 id: '19',
 text: 'Which of these represents a correct flow of energy based on the food web shown?',
 type: 'multiple-choice',
 image: {url: 'images/question_19.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Loggerhead Turtle → Horseshoe Crab → Razor Clam', 'Horseshoe Crab → Loggerhead Turtle → Sanderling', 'Diamondback Terrapin → Razor Clam → Plankton', 'Razor Clam → Horseshoe Crab → Sanderling'],
 correctAnswer: 3, 
 explanation: 'Energy flows from prey to predator. In this sequence, razor clams are eaten by horseshoe crabs, which are eaten by sanderlings.'
 },
 {
 id: '20',
 text: 'When stirred together, which two substances form a solution?',
 type: 'multiple-choice',
 options: ['Sand and salt', 'Sugar and salt', 'Sand and water', 'Sugar and water'],
 correctAnswer: 3, 
 explanation: 'A solution forms when one substance dissolves completely in another. Sugar dissolves in water to form a solution.'
 },
 {
 id: '21',
 text: 'The plants are most likely responding to which factor in the environment?',
 type: 'multiple-choice',
 image: {url: 'images/question_21.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Light', 'Water', 'Oxygen', 'Carbon dioxide'],
 correctAnswer: 0, 
 explanation: 'Plants show phototropism - they grow toward light sources. The plants in the image are bending toward the light.'
 },
 {
 id: '22',
 text: 'The greater the frequency of a sound wave, the--',
 type: 'multiple-choice',
 options: ['lower the pitch', 'higher the pitch', 'softer the sound', 'louder the sound'],
 correctAnswer: 1, 
 explanation: 'Frequency and pitch are directly related. Higher frequency sound waves produce higher pitch sounds.'
 },
 {
 id: '23',
 text: 'A student made the model showing the particles in a solid. To improve the model, the student should--',
 type: 'multiple-choice',
 image: {url: 'images/question_23.png', alt: 'Image failed to load. Please try again later.'},
 options: ['put the beads in a square container', 'take out some beads so the particles can move more easily', 'shake the container gently to show how the particles vibrate', 'use different-colored beads to make the particles easier to see'],
 correctAnswer: 2, 
 explanation: 'In solids, particles are tightly packed but vibrate in place. Gentle shaking would demonstrate this vibration motion.'
 },
 {
 id: '24',
 text: 'Which substance produced during photosynthesis is represented by the X in the illustration?',
 type: 'multiple-choice',
 image: {url: 'images/question_24.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Water', 'Oxygen', 'Sunlight', 'Carbon dioxide'],
 correctAnswer: 1,
 explanation: 'During photosynthesis, plants produce oxygen as a byproduct. The X likely represents oxygen being released from the plant.'
 },
 {
 id: '25',
 text: 'Which of these animals is classified as a vertebrate?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_25a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_25b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_25c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_25d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 1, 
 explanation: 'Vertebrates are animals with backbones (spinal columns). Look for the animal that has a backbone.'
 },
 {
 id: '26',
 text: 'An electromagnet can be made using a battery, insulated wire, and--',
 type: 'multiple-choice',
 options: ['an iron nail', 'an aluminum can', 'a nickel coin', 'a gold chain'],
 correctAnswer: 0, 
 explanation: 'Iron is ferromagnetic and can be magnetized. Wrapping wire around an iron nail and connecting to a battery creates an electromagnet.'
 },
 {
 id: '27',
 text: 'High and low tides on the coast are caused mostly by -',
 type: 'multiple-choice',
 options: ['underwater earthquakes', 'the gravity from the moon', 'storms over the ocean', 'the tilt of Earth'], 
 correctAnswer: 1,
 explanation: 'The moon\'s gravitational pull causes tides. As the moon orbits Earth, its gravity pulls on ocean water, creating high and low tides.'
 },
 {
 id: '28',
 text: 'The plant shown grows in swamps and produces an odor similar to a skunk. Why should people preserve a plant like the skunk cabbage?',
 type: 'multiple-choice',
 image: {url: 'images/question_28.png', alt: 'Image failed to load. Please try again later.'},
 options: ['It depends on a moist environment.', 'It has a certain role in the ecosystem.', 'It is prized by gardeners for its flowers.', 'It has leaves that are about the same shape as each other.'],
 correctAnswer: 1, 
 explanation: 'Every organism has an important role in its ecosystem. Even unusual plants like skunk cabbage contribute to the balance of their environment.'
 },
 {
 id: '29',
 text: 'Which pair of organisms needs to switch places for the ocean food chain to be correct?',
 type: 'multiple-choice',
 image: {url: 'images/question_29.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Phytoplankton and fish', 'Animal-like plankton and fish', 'White shark and phytoplankton', 'White shark and animal-like plankton'],
 correctAnswer: 3, 
 explanation: 'In a food chain, energy flows from producers to consumers. The white shark and animal-like plankton are in the wrong positions in the energy flow.'
 },
 {
 id: '30',
 text: 'Students investigated how different colors of construction paper in a solar oven affect the heating of water. Which graph correctly represents the data for the brown construction paper?',
 type: 'multiple-choice',
 image: {url: 'images/question_30.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_30a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_30d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2, 
 explanation: 'Look at the data table for brown paper and find the graph that matches those temperature values over time.'
 },
 {
 id: '31',
 text: 'A student made a track for a toy sled using 4 different materials. At which section of the track is friction most likely to cause the greatest resistance to the motion of the toy sled?',
 type: 'multiple-choice',
 image: {url: 'images/question_31.png', alt: 'Image failed to load. Please try again later.'},
 options: ['1', '2', '3', '4'],
 correctAnswer: 1, 
 explanation: 'Rough surfaces create more friction than smooth surfaces. Look for the section with the roughest or most textured material.'
 },
 {
 id: '32',
 text: 'Which pair of colors is in order from the longest wavelength of light in the visible spectrum to the shortest wavelength?',
 type: 'multiple-choice',
 options: ['Green, orange', 'Yellow, red', 'Violet, blue', 'Red, violet'],
 correctAnswer: 3, 
 explanation: 'In the visible light spectrum, red has the longest wavelength and violet has the shortest wavelength (ROYGBIV order).'
 },
 {
 id: '33',
 text: 'Based on the mineral identification table, which mineral belongs in square X of the flow chart?',
 type: 'multiple-choice',
 image: {url: 'images/question_33.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Mica', 'Graphite', 'Magnetite', 'Hornblende'],
 correctAnswer: 2, 
 explanation: 'Follow the flowchart using the mineral identification table. The properties should lead to magnetite for square X.'
 },
 {
 id: '34',
 text: 'The conveyor belt moves the groceries by transforming electrical energy into--',
 type: 'multiple-choice',
 image: {url: 'images/question_34.png', alt: 'Image failed to load. Please try again later.'},
 options: ['thermal energy', 'radiant energy', 'mechanical energy', 'potential energy'],
 correctAnswer: 2, 
 explanation: 'A conveyor belt motor converts electrical energy into mechanical energy (motion) to move the belt and groceries.'
 },
 {
 id: '35',
 text: 'Students made a classroom barometer that can be used to measure--',
 type: 'multiple-choice',
 image: {url: 'images/question_35.png', alt: 'Image failed to load. Please try again later.'},
 options: ['wind direction', 'temperature', 'air pressure', 'precipitation'],
 correctAnswer: 2, 
 explanation: 'A barometer is an instrument specifically designed to measure air pressure (atmospheric pressure).'
 },
 {
 id: '36',
 text: 'Which of these is an example of a behavioral adaptation?',
 type: 'multiple-choice',
 options: ['A cow that has flat teeth', 'A squirrel that has buried acorns', 'A fish that has scales', 'An owl that has soft feathers'],
 correctAnswer: 1, 
 explanation: 'Behavioral adaptations are actions animals take to survive. Burying acorns is a behavior that helps squirrels store food for winter.'
 },
 {
 id: '37',
 text: 'Coal is important for Virginia because it--',
 type: 'multiple-choice',
 options: ['can be used for energy', 'can be divided into four types', 'is found in many areas of the country', 'is formed from plant and animal remains'],
 correctAnswer: 0, 
 explanation: 'Coal is important to Virginia\'s economy because it can be burned to produce energy for electricity and heat.'
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