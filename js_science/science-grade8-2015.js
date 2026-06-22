window.TEST_IDENTIFIER = 'science_grade8_2015';

const sampleQuestions = [
 {
 id: '1',
 text: 'Sea anemones are poisonous. However, the clownfish has developed an outer layer of mucus which provides protection from the stinging cells of the sea anemone. The mucus is best described as--',
 image: {url:'images/question_1.png', alt: 'Image failed to load. Please try again later.'},
 type: 'multiple-choice',
 options: ['an adaptation', 'a relationship', 'an energy requirement', 'a social hierarchy'],
 correctAnswer: 0,
 explanation: 'An adaptation is a trait that helps an organism survive in its environment. The clownfish\'s protective mucus layer is an adaptation that allows it to live safely among sea anemones.'
 },
 {
 id: '2',
 text: 'Hurricanes form in tropical waters between 8 and 20 degrees north and south of the equator. Hurricanes rarely form at higher latitudes because the water is too--',
 type: 'multiple-choice',
 options: ['warm', 'deep', 'shallow', 'cold'],
 correctAnswer: 3, 
 explanation: 'Hurricanes need warm ocean water (at least 80°F) to form and strengthen. At higher latitudes, ocean water is too cold to provide the energy needed for hurricane formation.'
 },
 {
 id: '3',
 text: 'On a small island, scientists observed and graphed changes in wolf and moose populations. From 1965 to 1970, which data pattern did scientists observe?',
 type: 'multiple-choice',
 image: {url:'images/question_3.png', alt: 'Image failed to load. Please try again later.'},
 options: ['A drop in wolf population and a drop in moose population', 'An increase in wolf population and a drop in moose population', 'A drop in wolf population and an increase in moose population', 'An increase in wolf population and an increase in moose population'],
 correctAnswer: 2, 
 explanation: 'In predator-prey relationships, when predator numbers drop, prey numbers typically increase. A drop in wolf population would allow the moose population to increase.'
 },
 {
 id: '4',
 text: 'A metal spoon was placed in a dish of ice cream and became cool. Which correctly describes the heat transfer process that resulted in the cooling of the spoon?',
 type: 'multiple-choice',
 options: ['Conduction, because the spoon was in contact with the cold ice cream', 'Convection, because the spoon was in contact with the cold ice cream', 'Conduction, because cold air currents affected the temperature of the spoon', 'Convection, because cold air currents affected the temperature of the spoon'],
 correctAnswer: 0,
 explanation: 'Conduction is heat transfer through direct contact between materials. The spoon cools through direct contact with the cold ice cream, making this conduction.'
 },
 {
 id: '5',
 text: 'Students performed several trials using the laboratory setup shown. students were also given this hypothesis: If friction increases, then the rolling distance of a marble will decrease. What should be changed to best test this hypothesis?',
 type: 'multiple-choice',
 image: {url:'images/question_5.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Height of the ramp', 'Height and length of the ramp', 'Roughness of the ramp surface', 'Height of the ramp and roughness of the ramp surface'],
 correctAnswer: 2, 
 explanation: 'To test the effect of friction on rolling distance, only the roughness of the ramp surface should be changed. This directly tests how surface friction affects the marble\'s distance.'
 },
 {
 id: '6',
 text: 'A student recorded the temperature of an aquarium each hour for 8 hours. Which of these will best display the data the student collected?',
 type: 'multiple-choice',
 options: ['Bar graph', 'Circle graph', 'Picture graph', 'Line graph'],
 correctAnswer: 3, 
 explanation: 'A line graph is best for showing changes in data over time. It clearly displays how temperature changes from hour to hour.'
 },
 {
 id: '7',
 text: 'A cold air mass moves underneath a warm air mass causing the warm air to rise. This event can best be identified as -',
 type: 'multiple-choice',
 options: ['a cold front', 'a warm front', 'an occluded front', 'a stationary front'],
 correctAnswer: 0, 
 explanation: 'A cold front forms when a cold air mass moves under and displaces a warm air mass, forcing the warm air to rise rapidly.'
 },
 {
 id: '8',
 text: 'Which body of water is often protected naturally from storms by barrier islands and also contains a mixture of fresh water and salt water?',
 type: 'multiple-choice',
 options: ['Estuary', 'Ocean', 'Lake', 'Pond'],
 correctAnswer: 0, 
 explanation: 'An estuary is where rivers meet the ocean, creating a mixture of fresh and salt water. Barrier islands often protect estuaries from ocean storms.'
 },
 {
 id: '9',
 text: 'Which three drawings best represent objects with kinetic energy?',
 type: 'multiple-select',
 options: [
    {url: 'images/question_9a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9d.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9e.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_9f.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: [2, 3, 5],
 explanation: 'Kinetic energy is the energy of motion. Objects that are moving have kinetic energy, while stationary objects have potential energy.'
 },
 {
 id: '10',
 text: 'Which of these best completes the Conversion Table?',
 type: 'multiple-choice',
 image: {url:'images/question_10.png', alt: 'Image failed to load. Please try again later.'},
 options: [
    {url: 'images/question_10a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_10d.png', alt: 'Image failed to load. Please try again later.'},
 ],
 correctAnswer: 3, 
 explanation: 'Look at the conversion pattern in the table and apply the correct conversion factors to complete the missing values.'
 },
 {
 id: '11',
 text: 'A student measured the power of a motor operating at different temperatures. The student recorded a total of 11 measurements, one at each 2 degree interval between 10°C and 30°C. Which change in the procedure would most improve the validity of conclusions based on this investigation?',
 type: 'multiple-choice',
 options: ['Increasing the number of variables', 'Decreasing the range of the independent variable', 'Repeating the experiment several times', 'Producing a graph of numerical observations'],
 correctAnswer: 2, 
 explanation: 'Repeating the experiment increases validity by reducing the impact of random errors and confirming that results are consistent and reliable.'
 },
 {
 id: '12',
 text: 'Which of these has the strongest gravitational field?',
 type: 'multiple-choice',
 options: ['Sun', 'Earth', 'Saturn', 'Jupiter'],
 correctAnswer: 0, 
 explanation: 'Gravitational field strength depends on mass. The Sun has the greatest mass of these objects, giving it the strongest gravitational field.'
 },
 {
 id: '13',
 text: 'Students placed steel wool in beakers of four different liquids in order of the most acidic to neutral. The students recorded their observations in the table. Which is the best conclusion based on the table?',
 type: 'multiple-choice',
 image: {url:'images/question_13.png', alt: 'Image failed to load. Please try again later.'},
 options: ['The more acidic the substance, the faster it reacts with steel wool.', 'The more acidic the substance, the faster the steel wool turns to a gas.', 'The less acidic the substance, the faster the steel wool becomes covered with air bubbles.', 'The less acidic the substance, the faster the steel wool changes color.'],
 correctAnswer: 0, 
 explanation: 'Acids react more readily with metals like steel wool. The data should show that more acidic substances cause faster reactions with the steel wool.'
 },
 {
 id: '14',
 text: 'Which is the result of using a more powerful motor to run an elevator?',
 type: 'multiple-choice',
 options: ['The same amount of work is done in less time.', 'Less work is done in the same amount of time.', 'The same amount of time is needed to move the same distance.', 'A longer time is needed to move a shorter distance.'],
 correctAnswer: 0, 
 explanation: 'Power is the rate of doing work (work/time). A more powerful motor does the same work in less time, moving the elevator faster.'
 },
 {
 id: '15',
 text: 'A major scientific concern over nuclear energy is how to--',
 type: 'multiple-choice',
 options: ['deal with the large amounts of fossil fuels required', 'reduce the high levels of carbon dioxide emitted into the air', 'prevent the depletion of the ozone layer', 'store the waste products safely'],
 correctAnswer: 3, 
 explanation: 'Nuclear waste remains radioactive for thousands of years and must be stored safely to protect humans and the environment. This is a major challenge with nuclear energy.'
 },
 {
 id: '16',
 text: 'What are the ordered steps for cloud formation?',
 type: 'drag-drop',
 options: ['Water vapor cools', 'Water condenses', 'Liquid water evaporates', 'Warm water vapor rises'],
 dropZones: ['First ↓', 'Second ↓', 'Third ↓', 'Fourth'],
 correctAnswer: [2, 3, 0, 1],
 explanation: 'Cloud formation: 1) Liquid water evaporates, 2) Warm water vapor rises, 3) Water vapor cools as it rises, 4) Water condenses into droplets forming clouds.'
 },
 {
 id: '17',
 text: 'Why is water known as the "universal solvent"?',
 type: 'multiple-choice',
 options: ['It dissolves all known substances.', 'It dissolves only solid substances.', 'It dissolves the greatest number of substances.', 'It dissolves substances faster than all other solvents.'],
 correctAnswer: 2,
 explanation: 'Water is called the "universal solvent" because it dissolves more substances than any other liquid, though it doesn\'t dissolve all substances.'
 },
 {
 id: '18',
 text: 'Which of these has been improved by genetic engineering?',
 type: 'multiple-choice',
 options: ['Visibility of insects to predators', 'Growth of insects in cornfields', 'Reduced number of pollinating insects', 'Resistance of corn plants to insects'],
 correctAnswer: 3, 
 explanation: 'Genetic engineering has been used to create crops like Bt corn that produce proteins toxic to insect pests, making the plants resistant to insect damage.'
 },
 {
 id: '19',
 text: 'Which action will most reduce the use of nonrenewable energy resources in a school district?',
 type: 'multiple-choice',
 options: ['Installing low-flow faucets and toilets', 'Recycling worksheets and other paper products', 'Limiting the sweeping and mopping of classrooms to once a month', 'Replacing current lighting with more efficient lighting'],
 correctAnswer: 3, 
 explanation: 'Efficient lighting uses less electricity, which is often produced from nonrenewable sources like coal and natural gas. This directly reduces nonrenewable energy use.'
 },
 {
 id: '20',
 text: 'Sound waves are unable to travel through--',
 type: 'multiple-choice',
 options: ['air', 'a vacuum', 'water', 'a rock'],
 correctAnswer: 1, 
 explanation: 'Sound waves are mechanical waves that need matter (particles) to travel through. A vacuum contains no matter, so sound cannot travel through it.'
 },
 {
 id: '21',
 text: 'The speed of light is about 300,000,000 m/s. Which is the correct expression for the speed of light in scientific notation?',
 type: 'multiple-choice',
 options: ['30.0 x 10⁷ m/s', '30.0 x 10⁸ m/s', '3.0 x 10⁷ m/s', '3.0 x 10⁸ m/s'],
 correctAnswer: 3, 
 explanation: 'In scientific notation, move the decimal point to have one non-zero digit before it: 300,000,000 = 3.0 × 10⁸.'
 },
 {
 id: '22',
 text: 'Which of these properties of an unknown liquid can be found using a beaker, a hot plate, and a temperature probe?',
 type: 'multiple-choice',
 options: ['Density', 'Boiling point', 'Oxygen', 'Chemical composition'],
 correctAnswer: 1, 
 explanation: 'A hot plate heats the liquid while a temperature probe measures when the liquid begins to boil consistently, determining its boiling point.'
 },
 {
 id: '23',
 text: 'Place the terms in the order of the simplest level of organization to the most complex.',
 type: 'drag-drop',
 options: ['System', 'Cell', 'Organ', 'Tissue'],
 dropZones: ['Simplest', '↓', '↓', 'Most complex'],
 correctAnswer: [1, 3, 2, 0],
 explanation: 'Biological organization from simple to complex: Cell → Tissue → Organ → System (organ system).'
 },
 {
 id: '24',
 text: 'A group of campers travels to a cabin which has no electrical power. In order to provide the power for a heater and lights, which device would be appropriate?',
 type: 'multiple-choice',
 options: ['A resistor', 'An insulator', 'A generator', 'A voltmeter'],
 correctAnswer: 2, 
 explanation: 'A generator converts mechanical energy (like from fuel or manual cranking) into electrical energy to power devices when no electrical grid is available.'
 },
 {
 id: '25',
 text: 'Which of the.se i.s most likely the result of weasels and foxes depending on the same food source?',
 type: 'multiple-choice',
 options: ['The populations will compete with each other.', 'One of the populations will become herbivores.', 'Birthrates for both populations will increase.', 'New species of prey will evolve in the area.'],
 correctAnswer: 0, 
 explanation: 'When two species depend on the same limited resource, they compete with each other for that resource. This is called interspecific competition.'
 },
 {
 id: '26',
 text: 'A farmer wants to plant a crop that grows well in a marshland environment. In order to produce a good harvest, the most important characteristic this plant should have is the ability to--',
 type: 'multiple-choice',
 options: ['thrive in wet soil', 'mature quickly', 'survive in dry conditions', 'attract a variety of pollinators'],
 correctAnswer: 0, 
 explanation: 'Marshlands are characterized by wet, saturated soil conditions. A crop must be able to thrive in these wet conditions to grow successfully.'
 },
 {
 id: '27',
 text: 'The volume of water in the pot decreases during this investigation. Water droplets form on the mirror when positioned over the pot. In this setup, water--',
 type: 'multiple-choice',
 image: {url: 'images/question_27.png', alt: 'Image failed to load. Please try again later.'},
 options: ['vaporizes and then freezes', 'vaporizes and then condenses', 'condenses and then vaporizes', 'freezes and then vaporizes'], 
 correctAnswer: 1,
 explanation: 'Water vaporizes (evaporates) from the pot, then condenses on the cool mirror surface, forming water droplets. This demonstrates the water cycle.'
 },
 {
 id: '28',
 text: 'Which is an abiotic change in an ecosystem?',
 type: 'multiple-choice',
 options: ['Plant photosynthesis rates increase.', 'Fish species populations increase.', 'Aquatic predator survival rates increase.', 'Annual rainfall totals for an area increase.'],
 correctAnswer: 3, 
 explanation: 'Abiotic factors are non-living components of ecosystems. Rainfall is a physical, non-living factor, while the other options involve living organisms (biotic factors).'
 },
 {
 id: '29',
 text: 'Ca + 2H₂O → Ca(OH)₂ + H₂ <br> How many different elements are involved in the chemical reaction shown?',
 type: 'free-response',
 correctKeywords: ['3'],
 explanation: 'Count the different elements in the equation: Ca (calcium), H (hydrogen), and O (oxygen). Three different elements are involved.'
 },
 {
 id: '30',
 text: 'Physical and chemical weathering processes are responsible for breaking down rocks. Which of these is an example of chemical weathering by water?',
 type: 'multiple-choice',
 options: ['Mineral crystals form as water evaporates from rocks.', 'Limestone reacts with acid rain and dissolves.', 'Water freezes in rock cracks and causes the rock to split.', 'Moss collects and grows on the surface of rocks.'],
 correctAnswer: 1, 
 explanation: 'Chemical weathering involves chemical reactions that change rock composition. Limestone reacting with acid rain is a chemical change that dissolves the rock.'
 },
 {
 id: '31',
 text: 'The shaded row in the t.able is called a--',
 type: 'multiple-choice',
 image: {url: 'images/question_31.png', alt: 'Image failed to load. Please try again later.'},
 options: ['column', 'family', 'group', 'period'],
 correctAnswer: 3, 
 explanation: 'In the periodic table, horizontal rows are called periods. Elements in the same period have the same number of electron shells.'
 },
 {
 id: '32',
 text: 'White-footed mice having thicker fur than cactus mice is probably influenced most by the differences in the--',
 type: 'multiple-choice',
 image: {url: 'images/question_32.png', alt: 'Image failed to load. Please try again later.'},
 options: ['food that they eat', 'time of day they are active', 'environmental climates where they live', 'amount of predators they encounter'],
 correctAnswer: 2, 
 explanation: 'Fur thickness is an adaptation to climate. White-footed mice likely live in colder environments requiring thicker fur for insulation.'
 },
 {
 id: '33',
 text: 'During human fertilization, an egg and a sperm cell unite. Which structures in these cells carry the genes that will be transferred to the offspring?',
 type: 'multiple-choice',
 options: ['Vacuoles', 'Ribosomes', 'Chromosomes', 'Cell membranes'],
 correctAnswer: 2, 
 explanation: 'Chromosomes contain DNA, which carries genes. During fertilization, chromosomes from both parents combine to transfer genetic information to offspring.'
 },
 {
 id: '34',
 text: 'Which facility relies on a nonrenewable source of energy?',
 type: 'multiple-choice',
 options: ['A wind farm that uses wind turbines', 'A dam that uses the power of water', 'A power station that burns coal', 'A solar farm that collects sunlight'],
 correctAnswer: 2, 
 explanation: 'Coal is a nonrenewable fossil fuel that takes millions of years to form. Wind, water, and sunlight are renewable energy sources.'
 },
 {
 id: '35',
 text: 'As the frequency of a wave decreases, the wave\'s--',
 type: 'multiple-choice',
 options: ['period decreases', 'amplitude increases', 'speed decreases', 'wavelength increases'],
 correctAnswer: 3, 
 explanation: 'Frequency and wavelength are inversely related. As frequency decreases, wavelength increases (wave equation: v = fλ).'
 },
 {
 id: '36',
 text: 'This picture shows a zebra with two tick birds on its back. The tick birds alert the zebras that predators are near as well as remove and eat ticks found on zebras. What is the primary type of interaction between the tick birds and the zebras?',
 type: 'multiple-choice',
 image: {url: 'images/question_36.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Mutualism', 'Parasitism', 'Competition', 'Commensalism'],
 correctAnswer: 0, 
 explanation: 'Mutualism is a relationship where both species benefit. Tick birds get food (ticks) and zebras get pest removal and predator warnings.'
 },
 {
 id: '37',
 text: 'Which change will most likely increase the strength of a magnetic field produced by an electromagnet?',
 type: 'multiple-choice',
 options: ['Reduce the number of turns of the coil', 'Switch the direction in which the battery is connected', 'Remove the iron nail', 'Add a battery'],
 correctAnswer: 3, 
 explanation: 'Adding a battery increases the current flowing through the electromagnet, which increases the strength of the magnetic field produced.'
 },
 {
 id: '38',
 text: 'The physical expression of a trait in an organism is known as the--',
 type: 'multiple-choice',
 options: ['chromosome', 'genotype', 'phenotype', 'double helix'],
 correctAnswer: 2, 
 explanation: 'The phenotype is the observable physical expression of genes. The genotype is the genetic makeup, while phenotype is what you can see or measure.'
 },
 {
 id: '39',
 text: 'Which statement correctly describes a difference between the mesosphere and the stratosphere?',
 type: 'multiple-choice',
 image: {url: 'images/question_39.png', alt: 'Image failed to load. Please try again later.'},
 options: ['The mesosphere has more active weather than the stratosphere.', 'The mesosphere contains fewer oxygen molecules than the stratosphere.', 'Air pressure is lower in the stratosphere than in the mesosphere', 'Temperatures decrease with altitude only in the stratosphere.'],
 correctAnswer: 1, 
 explanation: 'The mesosphere is higher in the atmosphere than the stratosphere, so it has lower air density and fewer oxygen molecules due to decreased pressure.'
 },
 {
 id: '40',
 text: 'Which organisms are producers in this food web?',
 type: 'multiple-select',
 image: {url: 'images/question_40.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Wolf', 'Snake', 'Shrub', 'Deer', 'Grass', 'Shrew', 'Rabbit', 'Tree', 'Hawk', 'Grasshopper'],
 correctAnswer: [2, 4, 7], 
 explanation: 'Producers are organisms that make their own food through photosynthesis. In this food web, shrub, grass, and tree are the producers (plants).'
 },
 {
 id: '41',
 text: 'Which of these represents the freezing point of water in correct SI units?',
 type: 'multiple-choice',
 options: ['0°C', '0°F', '32°F', '-273°C'],
 correctAnswer: 0, 
 explanation: 'The SI (International System) unit for temperature is Celsius. Water freezes at 0°C (which equals 32°F in Fahrenheit).'
 },
 {
 id: '42',
 text: 'A girl kicks a soccer ball into the air. Which of these best explains why the soccer ball falls back to Earth?',
 type: 'multiple-choice',
 options: ['The acceleration of the ball is unstable.', 'The motion of the ball is changed by external forces.', 'The pressure on the ball changes with altitude.', 'The force exerted on the ball is greater than gravity.'],
 correctAnswer: 1, 
 explanation: 'External forces (gravity and air resistance) act on the ball, changing its motion and causing it to fall back to Earth according to Newton\'s laws.'
 },
 {
 id: '43',
 text: 'Students measured the amount of an unknown substance that dissolved in water at different temperatures. What was the independent variable in this investigation?',
 type: 'multiple-choice',
 image: {url: 'images/question_43.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Amount of substance dissolved', 'Unknown substance used', 'Water temperature', 'Water volume'],
 correctAnswer: 2, 
 explanation: 'The independent variable is what the experimenter changes. Students changed the water temperature to see how it affects the amount of substance dissolved.'
 },
 {
 id: '44',
 text: 'Which characteristic is common to the four outer planets in our solar system?',
 type: 'multiple-choice',
 options: ['Low mass', 'High density', 'Fast revolution', 'Gaseous composition'],
 correctAnswer: 3, 
 explanation: 'The outer planets (Jupiter, Saturn, Uranus, Neptune) are called gas giants because they are primarily composed of gases rather than solid rock.'
 },
 {
 id: '45',
 text: 'When comparing a plant cell to an animal cell, only the plant cell will contain--',
 type: 'multiple-choice',
 options: ['ribosomes', 'chromosomes', 'chloroplasts', 'mitochondria'],
 correctAnswer: 2, 
 explanation: 'Chloroplasts are unique to plant cells and contain chlorophyll for photosynthesis. Animal cells lack chloroplasts and cannot perform photosynthesis.'
 },
 {
 id: '46',
 text: 'A student measures her heart rate after each of the activities listed. Based on this information, which is a constant in the student\'s investigation?',
 type: 'multiple-choice',
 image: {url: 'images/question_46.png', alt: 'Image failed to load. Please try again later.'},
 options: ['Equipment needed for activity', 'Length of activity time', 'Activity performed', 'Energy expended during activity'],
 correctAnswer: 1, 
 explanation: 'A constant (controlled variable) stays the same throughout the experiment. The length of activity time should remain constant to fairly compare heart rates.'
 },
 {
 id: '47',
 text: 'Which of these is the best description of a typical organism in the Plant kingdom?',
 type: 'multiple-choice',
 options: ['Is unicellular', 'Lacks a nucleus', 'Makes its own food', 'Lacks a cell wall'],
 correctAnswer: 2, 
 explanation: 'Plants are autotrophs that make their own food through photosynthesis. They are multicellular, have nuclei, and have cell walls.'
 },
 {
 id: '48',
 text: 'Which of these is a way that a person can help improve air quality?',
 type: 'multiple-choice',
 options: ['Build a compost pile', 'Carpool with several people', 'Burn leaves in the fall', 'Use a gas-powered lawn mower'],
 correctAnswer: 1, 
 explanation: 'Carpooling reduces the number of vehicles on the road, which decreases vehicle emissions and improves air quality. The other options either don\'t affect air quality or worsen it.'
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