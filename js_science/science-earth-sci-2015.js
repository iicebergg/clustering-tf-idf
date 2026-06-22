window.TEST_IDENTIFIER = 'science_earth_sci_2015';

const sampleQuestions = [
 {
 id: '1',
 text: '<img src="images/question_1.png" class="question-image"><br><br>The fossil at point X has been dated to be 65 million years old. What can relative dating indicate about the fossil at point Y?',
 type: 'multiple-choice',
 options: ['The age of the organism when it died', 'The type of environment the organism lived in', 'The distortion of the organism by the fault', 'The similar time period in which the organism lived'],
 correctAnswer: 3,
 explanation: 'Relative dating indicates the similar time period in which organisms lived by comparing their positions in rock layers. Since fossils X and Y are in the same rock layer (separated by a fault), they lived during a similar time period.'
 },
 {
 id: '2',
 text: 'The highest and lowest tides are known as the spring tides. When do these tides occur?',
 type: 'multiple-choice',
 options: ['During the new moon and full moon phases', 'Between the half moon and full moon phases', 'During the new moon and crescent moon phases', 'Between the full moon and crescent moon phases'],
 correctAnswer: 0,
 explanation: 'Spring tides occur during new moon and full moon phases when the Sun, Moon, and Earth are aligned. This alignment causes the gravitational forces to combine, creating the highest high tides and lowest low tides.'
 },
 {
 id: '3',
 text: '<img src="images/question_3.png" class="question-image"><br><br>Which best describes the area shown in this aerial photograph?',
 type: 'multiple-choice',
 options: ['Forest and farmland', 'Deeply eroded bedrock', 'Extensive urban development', 'Folded mountainside and rivers'],
 correctAnswer: 0,
 explanation: 'The aerial photograph shows a mixture of forested areas (darker patches) and cleared agricultural land (lighter, geometric patterns), which is characteristic of forest and farmland.'
 },
 {
 id: '4',
 text: 'The moon has a stronger influence on Earth\'s tides than the sun because the moon —',
 type: 'multiple-choice',
 options: ['is denser than the sun', 'has more mass than the sun', 'is much closer to Earth', 'moves much faster relative to Earth'],
 correctAnswer: 2,
 explanation: 'Although the Sun has much more mass than the Moon, the Moon\'s proximity to Earth gives it a stronger tidal influence. Tidal force depends on distance cubed, so the Moon\'s closeness makes its gravitational effect on tides about twice as strong as the Sun\'s.'
 },
 {
 id: '5',
 text: 'Remains of ancient life are most often preserved through which process?',
 type: 'multiple-choice',
 options: ['Freezing', 'Burial in sediment', 'Entrapment in tar', 'Drying out'],
 correctAnswer: 1,
 explanation: 'Burial in sediment is the most common method of fossil preservation. When organisms are quickly buried by sediment, they are protected from decay and scavengers, allowing the fossilization process to occur over millions of years.'
 },
 {
 id: '6',
 text: 'Environmental effects of the impact of a meteorite 66.4 million years ago may have led to the extinction of many species on Earth. Which evidence best supports this theory?',
 type: 'multiple-choice',
 options: ['The Cenozoic Era began 66.4 million years ago when the Mesozoic Era ended.', 'Iridium found in meteorites is also present in rock layers that are 66.4 million years old.', 'Many other meteorite impact sites have been identified on Earth.', 'Many asteroids are found between Mars and Jupiter.'],
 correctAnswer: 1,
 explanation: 'The presence of iridium (a rare element on Earth but common in meteorites) in the 66.4 million-year-old rock layer provides direct evidence linking a meteorite impact to the mass extinction event at the end of the Mesozoic Era.'
 },
 {
 id: '7',
 text: 'When a river flows into a lake, the velocity of the water decreases. Which sediments will most likely be in the numbered locations? <br><br><img src="images/question_7.png" class="question-image">',
 type: 'drag-drop',
 options: ['<img src="images/question_7a.png" class="question-image"><br>Sand Grains', '<img src="images/question_7b.png" class="question-image"><br>Clay-Sized Particles', '<img src="images/question_7c.png" class="question-image"><br>Large Gravel'],
 dropZones: ['Location 1', 'Location 2', 'Location 3'],
 correctAnswer: [2, 0, 1],
 explanation: 'As water velocity decreases, larger particles settle first. Location 1 (where the river enters) receives large gravel, Location 2 receives sand grains, and Location 3 (furthest into the lake) receives clay-sized particles which settle last due to their small size.'
 },
 {
 id: '8',
 text: 'Which type of rock is formed by each process?',
 type: 'drag-drop',
 options: ['Intrusive Igneous', 'Extrusive Igneous', 'Chemical Sedimentary', 'Organic Sedimentary', 'Metamorphic'],
 dropZones: ['<img src="images/question_8a.png" class="question-image" style="width:100px"><br>Evaporation of Ocean', '<img src="images/question_8b.png" class="question-image" style="width:100px"><br>Compression of Crust', '<img src="images/question_8c.png" class="question-image" style="width:100px"><br>Sinking of Plankton', '<img src="images/question_8d.png" class="question-image" style="width:100px"><br>Formation of Granite Underground'],
 correctAnswer: [2, 4, 3, 0],
 explanation: 'Evaporation of ocean water leaves behind dissolved minerals that form chemical sedimentary rock. Compression of crust creates metamorphic rock through heat and pressure. Sinking plankton accumulate to form organic sedimentary rock. Granite forming underground from slow-cooling magma creates intrusive igneous rock.'
 },
 {
 id: '9',
 text: 'A student hypothesizes that water from infrequently used school faucets contains more chemical impurities than the water from frequently used faucets. At the same time of day, the student uses a water test kit to measure the water impurities from the different faucets. Which is the manipulated variable in this investigation?',
 type: 'multiple-choice',
 options: ['The chemicals used to test the water', 'The amount of water per sample', 'The time of day when water is collected', 'The locations of water collection'],
 correctAnswer: 3,
 explanation: 'The manipulated (independent) variable is what the experimenter deliberately changes. In this investigation, the student is testing water from different faucet locations (frequently vs. infrequently used) to compare impurity levels.'
 },
 {
 id: '10',
 text: 'Which coordinates identify a location north of a city that has a latitude of 38.0°N and a longitude of 25.0°W?',
 type: 'multiple-choice',
 options: ['0.0° and 0.0°', '25.0°N and 38.0°W', '38.0°N and 47.0°W', '47.0°N and 25.0°W'],
 correctAnswer: 3,
 explanation: 'To be north of 38.0°N latitude, the new location must have a higher latitude value. 47.0°N is north of 38.0°N. The longitude of 25.0°W can remain the same for a location directly north.'
 },
 {
 id: '11',
 text: '<img src="images/question_11.png" class="question-image"><br><br>At which range of altitude is air pressure closest to 40 kPa based on these data?',
 type: 'multiple-choice',
 options: ['Between 4.5 km and 6.0 km', 'Between 6.0 km and 7.5 km', 'Between 7.5 km and 9.0 km', 'Between 9.0 km and 10.5 km'],
 correctAnswer: 1,
 explanation: 'Reading the graph, 40 kPa (40,000 Pascals) on the y-axis corresponds to an altitude between approximately 6.0 km and 7.5 km on the x-axis.'
 },
 {
 id: '12',
 text: 'Which was the first object made by humans to orbit Earth?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_12a.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_12b.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_12c.png', alt: 'Image failed to load. Please try again later.'},
    {url: 'images/question_12d.png', alt: 'Image failed to load. Please try again later.'}
 ],
 correctAnswer: 2,
 explanation: 'Sputnik 1, launched by the Soviet Union on October 4, 1957, was the first artificial satellite to orbit Earth. Voyager was a deep space probe, Skylab was a space station, and Mercury was a crewed spacecraft program.'
 },
 {
 id: '13',
 text: 'Under which condition would a lowering of the water table most likely occur?',
 type: 'multiple-choice',
 options: ['Extended drought over the recharge zone', 'Decreased runoff due to the planting of grass', 'Icecaps expand and cause lower sea levels', 'Slow evaporation of heavy rainfall'],
 correctAnswer: 0,
 explanation: 'Extended drought reduces the amount of water that can infiltrate and recharge groundwater aquifers. Without precipitation to replenish the groundwater, the water table will drop.'
 },
 {
 id: '14',
 text: '<img src="images/question_14.png" class="question-image"><br><br>This weather map helps to predict the location where a storm will occur by giving which type of information?',
 type: 'multiple-choice',
 options: ['Air pressure', 'Humidity', 'Wind speed', 'Temperature'],
 correctAnswer: 0,
 explanation: 'The weather map shows isobars (lines of equal pressure) with values like 1008, 1012, and 1016, as well as H (high pressure) and L (low pressure) centers. Storms typically form where low pressure systems exist.'
 },
 {
 id: '15',
 text: 'Spacecraft traveling to Jupiter from Earth would most likely have to navigate through or around which natural obstacle?',
 type: 'multiple-choice',
 options: ['Uranus', 'Neptune', 'Asteroid belt', 'Comet\'s tail'],
 correctAnswer: 2,
 explanation: 'The asteroid belt is located between Mars and Jupiter. Any spacecraft traveling from Earth to Jupiter must pass through or navigate around this region of rocky debris.'
 },
 {
 id: '16',
 text: 'A geologist studying volcanic activity is collecting rocks that formed from hot, molten magma. What type of rock is the geologist collecting?',
 type: 'multiple-choice',
 options: ['Clastic sedimentary', 'Metamorphic', 'Chemical sedimentary', 'Igneous'],
 correctAnswer: 3,
 explanation: 'Igneous rocks form from the cooling and solidification of molten magma or lava. The word "igneous" comes from the Latin word for fire, reflecting this origin.'
 },
 {
 id: '17',
 text: 'Which substance is a mixture of organic matter and weathered rock?',
 type: 'multiple-choice',
 options: ['Limestone', 'Schist', 'Soil', 'Granite'],
 correctAnswer: 2,
 explanation: 'Soil is composed of weathered rock particles (sand, silt, clay) mixed with organic matter (decomposed plant and animal material). Limestone, schist, and granite are all types of rock, not mixtures.'
 },
 {
 id: '18',
 text: '<img src="images/question_18.png" class="question-image"><br><br>Which natural process is the main cause of the ocean currents shown?',
 type: 'multiple-choice',
 options: ['Convection', 'Orbit of Earth', 'Evaporation', 'Drift of continents'],
 correctAnswer: 0,
 explanation: 'Convection is the main driver of ocean currents. Warm water near the equator rises and moves toward the poles, while cold polar water sinks and moves toward the equator, creating a continuous circulation pattern.'
 },
 {
 id: '19',
 text: 'Determining how the sea floor changes over time has given scientists information about the —',
 type: 'multiple-choice',
 options: ['circulation of solar energy', 'patterns of carbon movement', 'formation rate of the ocean crust', 'impact of the atmosphere on ocean depth'],
 correctAnswer: 2,
 explanation: 'Studying sea floor changes, particularly at mid-ocean ridges where new crust forms and at subduction zones where crust is destroyed, has allowed scientists to determine the rate at which ocean crust forms and spreads.'
 },
 {
 id: '20',
 text: 'Why do regions of the world near the equator (0° latitude) have a more consistent climate than regions at middle latitudes?',
 type: 'multiple-choice',
 options: ['They have strong, moist westerly prevailing winds.', 'They have high averages of yearly rainfall.', 'They get about the same amount of radiant energy year-round.', 'They are close to large areas of very warm ocean water.'],
 correctAnswer: 2,
 explanation: 'Equatorial regions receive relatively constant solar radiation throughout the year because the Sun\'s rays strike at a consistent angle. Middle latitudes experience significant seasonal variation in solar energy due to Earth\'s axial tilt.'
 },
 {
 id: '21',
 text: 'In order to protect aquifers near landfills, material is placed under the soil to prevent pollution. Which property must the protective material possess?',
 type: 'multiple-choice',
 options: ['High porosity', 'Low permeability', 'High reflectivity', 'Low conductivity'],
 correctAnswer: 1,
 explanation: 'Low permeability prevents liquids from passing through the material. A liner with low permeability will block pollutants from leaching through the soil and contaminating groundwater aquifers.'
 },
 {
 id: '22',
 text: 'Which is a characteristic of all nonfoliated metamorphic rocks?',
 type: 'multiple-choice',
 options: ['Presence of fossils', 'Cleavage planes', 'Lack of banding', 'Metallic luster'],
 correctAnswer: 2,
 explanation: 'Nonfoliated metamorphic rocks lack the layered or banded appearance (foliation) seen in foliated metamorphic rocks. They have a more uniform, massive texture. Examples include marble and quartzite.'
 },
 {
 id: '23',
 text: '<img src="images/question_23.png" class="question-image"><br><br>Students made a hydrometer by sealing the end of a straw with wax and adding some sand until the hydrometer barely floated in fresh water. The diagram shows what the students observed when they used the hydrometer to test water from three different sites. Each water sample had the same temperature. Which of these explanations best fits these observations?',
 type: 'multiple-choice',
 options: ['Estuaries are less salty than fresh water.', 'Oceans support more microbes than fresh water.', 'Salt water is denser than fresh water.', 'Ocean water can freeze at lower temperatures than fresh water.'],
 correctAnswer: 2,
 explanation: 'The hydrometer floats highest in ocean water because salt water is denser than fresh water. Denser liquids provide more buoyant force, causing objects to float higher. Estuary water has intermediate density.'
 },
 {
 id: '24',
 text: 'The cleavage properties of mica result from the —',
 type: 'multiple-choice',
 options: ['alternating layers of silica and aluminum', 'weak bonds between flat layers', 'strong covalent bonds within dense carbon clusters', 'metallic bonds between all elements present'],
 correctAnswer: 1,
 explanation: 'Mica has perfect cleavage in one direction because of weak bonds between its flat, sheet-like layers of atoms. These weak bonds allow the mineral to split easily into thin, flexible sheets.'
 },
 {
 id: '25',
 text: 'A star begins its formation as gravitational forces cause instability within a —',
 type: 'multiple-choice',
 options: ['black hole', 'red giant', 'supernova', 'nebula'],
 correctAnswer: 3,
 explanation: 'Stars form within nebulae, which are clouds of gas and dust in space. Gravitational forces cause regions of the nebula to collapse, and as the material compresses and heats up, a protostar forms.'
 },
 {
 id: '26',
 text: '<img src="images/question_26.png" class="question-image"><br><br>The diagram represents areas below the surface of Earth in which fossils have been found. The fossil located in which labeled area is most likely the oldest?',
 type: 'multiple-choice',
 options: ['1', '2', '3', '4'],
 correctAnswer: 2,
 explanation: 'According to the principle of superposition, in undisturbed rock layers, the oldest layers are at the bottom. However, the diagram shows an intrusion that affects the layers. Area 3 represents the oldest undisturbed sedimentary layer containing fossils.'
 },
 {
 id: '27',
 text: 'Which structure is most similar to an alluvial fan in formation and composition?',
 type: 'multiple-choice',
 options: ['Delta', 'Watershed', 'River', 'Lake'],
 correctAnswer: 0,
 explanation: 'Both alluvial fans and deltas are depositional landforms created when flowing water slows down and deposits sediment. An alluvial fan forms where a stream exits mountains onto flat land; a delta forms where a river enters a body of water.'
 },
 {
 id: '28',
 text: 'Label these ocean features. <br><br><img src="images/question_28.png" class="question-image">',
 type: 'drag-drop',
 options: ['Continental Slope', 'Abyssal Plain', 'Continental Shelf', 'Continental Rise'],
 dropZones: ['Top (at Sea Level)', 'Upper slope', 'Lower slope', 'Deep ocean floor'],
 correctAnswer: [2, 0, 3, 1],
 explanation: 'Moving from shore to deep ocean: Continental Shelf is the shallow, flat area near shore; Continental Slope is the steep drop-off; Continental Rise is the gentle slope at the base; Abyssal Plain is the flat, deep ocean floor.'
 },
 {
 id: '29',
 text: 'Scientists study small pockets of air trapped deep within frozen glaciers. What are scientists trying to understand about the climate of Earth by analyzing these ice samples?',
 type: 'multiple-choice',
 options: ['Changes in direction of the magnetic poles', 'Changes in atmospheric gas composition', 'Changes in global wind patterns', 'Changes in atmospheric pressure'],
 correctAnswer: 1,
 explanation: 'Ice cores contain trapped air bubbles that preserve samples of ancient atmosphere. Scientists analyze these bubbles to determine past concentrations of gases like carbon dioxide and methane, helping them understand historical climate changes.'
 },
 {
 id: '30',
 text: '<img src="images/question_30.png" class="question-image"><br><br>The picture shows a sinkhole. Which of these most likely caused this sinkhole to form?',
 type: 'multiple-choice',
 options: ['The collapse of the roof of a limestone cave', 'The abrupt movement of two tectonic plates', 'The thinning of topsoil due to forest clearing', 'The impact of a meteorite striking the surface of Earth'],
 correctAnswer: 0,
 explanation: 'Sinkholes commonly form in areas with limestone bedrock. Acidic groundwater dissolves the limestone over time, creating underground caves. When the cave roof becomes too thin to support the surface, it collapses, forming a sinkhole.'
 },
 {
 id: '31',
 text: '<img src="images/question_31.png" class="question-image"><br><br>Which Virginia watershed has the greatest impact in the state due to its size?',
 type: 'multiple-choice',
 options: ['Tennessee River Watershed', 'James River Watershed', 'Chowan River Watershed', 'Rappahannock River Watershed'],
 correctAnswer: 1,
 explanation: 'Looking at the map, the James River Watershed covers the largest area of Virginia, stretching across the central portion of the state. A larger watershed has greater impact on water resources, flooding, and ecosystems.'
 },
 {
 id: '32',
 text: 'Which mineral is most likely an ingredient used in baby powder?',
 type: 'multiple-choice',
 options: ['Graphite', 'Pyrite', 'Corundum', 'Talc'],
 correctAnswer: 3,
 explanation: 'Talc is the softest mineral (hardness of 1 on Mohs scale) and has a slippery feel. These properties make it ideal for use in baby powder and cosmetics. Graphite is used in pencils, pyrite contains iron sulfide, and corundum is very hard (used as abrasive).'
 },
 {
 id: '33',
 text: 'Pollution due to coal burning most frequently tends to affect lakes by —',
 type: 'multiple-choice',
 options: ['reducing the amount of dissolved carbon dioxide', 'increasing acidity', 'reducing radioactivity', 'increasing the concentration of nutrients'],
 correctAnswer: 1,
 explanation: 'Coal burning releases sulfur dioxide and nitrogen oxides into the atmosphere. These gases combine with water vapor to form sulfuric and nitric acids, which fall as acid rain, increasing the acidity of lakes and harming aquatic ecosystems.'
 },
 {
 id: '34',
 text: 'Some ponds are designed to increase the amount of water seeping into the ground. These types of ponds will fail to work properly in —',
 type: 'multiple-choice',
 options: ['locations with shallow wells', 'areas with deep surface sands', 'soils with low permeability', 'rock with high porosity'],
 correctAnswer: 2,
 explanation: 'Infiltration ponds rely on water seeping through the soil to recharge groundwater. Soils with low permeability do not allow water to pass through easily, preventing the pond from functioning as intended.'
 },
 {
 id: '35',
 text: 'Which action would most likely reduce concerns about how strip mining can harm the environment?',
 type: 'multiple-choice',
 options: ['Restrict mining operations to rural areas', 'Reclaim the ecosystem after mining', 'Increase the usage of the products being mined', 'Decrease the amount of labor needed in the mines'],
 correctAnswer: 1,
 explanation: 'Reclamation involves restoring mined land to a natural or economically usable state by replacing soil, replanting vegetation, and restoring the ecosystem. This directly addresses environmental damage from strip mining.'
 },
 {
 id: '36',
 text: 'Identify the geologic time in which these organisms first appeared.',
 type: 'drag-drop',
 options: ['First Birds', 'First Bacteria', 'First Fish', 'First Humans'],
 dropZones: ['Cenozoic', 'Mesozoic', 'Paleozoic', 'Precambrian'],
 correctAnswer: [3, 0, 2, 1],
 explanation: 'First Humans appeared in the Cenozoic Era (most recent). First Birds appeared in the Mesozoic Era (Age of Reptiles). First Fish appeared in the Paleozoic Era. First Bacteria appeared in the Precambrian (earliest life forms).'
 },
 {
 id: '37',
 text: 'Crushed stone is an economic resource that is second only to coal in Virginia. How is crushed stone mainly used?',
 type: 'multiple-choice',
 options: ['As building insulation', 'In steel production', 'For coal mine reclamation', 'As a construction material'],
 correctAnswer: 3,
 explanation: 'Crushed stone is primarily used as a construction material for road bases, concrete aggregate, railroad ballast, and drainage applications. Virginia\'s abundant limestone, granite, and other rocks make it a major producer.'
 },
 {
 id: '38',
 text: 'A student hypothesizes that a sample of rock formed from ocean sediments. Which would best help the student support this hypothesis?',
 type: 'multiple-choice',
 options: ['A textbook about rock formation methods', 'Rock samples from several locations on Earth', 'A model of the different crustal plate boundaries', 'Clam shells found within the rock sample'],
 correctAnswer: 3,
 explanation: 'Marine fossils such as clam shells found within a rock sample provide direct evidence that the rock formed from sediments deposited in an ocean environment. This is physical evidence that supports the hypothesis.'
 },
 {
 id: '39',
 text: 'About 2.0 billion years ago, complex organisms began to inhabit Earth. These complex organisms developed primarily because of —',
 type: 'multiple-choice',
 options: ['changes in atmospheric gases', 'sunlight being absorbed by land', 'the eruption of volcanoes', 'the impact of comets'],
 correctAnswer: 0,
 explanation: 'The development of complex organisms about 2 billion years ago was primarily driven by the increase in atmospheric oxygen produced by cyanobacteria through photosynthesis. This oxygen allowed for aerobic respiration and more complex life forms.'
 },
 {
 id: '40',
 text: 'Students on a geology field trip will identify minerals by their streak. Which of these should the students bring on the field trip?',
 type: 'multiple-choice',
 options: ['A long, pointed iron rod', 'A rough, white ceramic tile', 'A disposable sample of talc', 'A low-powered telescope'],
 correctAnswer: 1,
 explanation: 'A streak plate (unglazed porcelain tile) is used to determine a mineral\'s streak color by rubbing the mineral across the plate. The white surface allows the true color of the powdered mineral to be seen.'
 },
 {
 id: '41',
 text: 'Well logs are used by oil companies to correlate geologic formations. Based on the formations in Well A, which geologic formations are missing in Well B?<br><br><img src="images/question_41.png" class="question-image">',
 type: 'drag-drop',
 options: ['Sand 1', 'Shale 2', 'Sand 3', 'Shale 4', 'Limestone 5', 'Shale 6', 'Sand 7', 'Shale 8'],
 dropZones: ['Missing formation 1', 'Missing formation 2', 'Missing formation 3'],
 correctAnswer: [0, 1, 7],
 explanation: 'Comparing Well A and Well B, the formations Sand 1, Shale 2, and Shale 8 that appear in Well A are not present in Well B. These layers may have been eroded away or were never deposited at the Well B location.'
 },
 {
 id: '42',
 text: 'A low pressure system has moved away from the equator and is moving directly over water. When the system reaches 60°N latitude, the system will most likely be at a point where —',
 type: 'multiple-choice',
 options: ['its water temperature is at its highest level', 'its direction of rotation has changed', 'most of its wind speeds are greatest', 'most of its energy is lost'],
 correctAnswer: 3,
 explanation: 'Low pressure systems (like hurricanes) derive their energy from warm ocean water. As the system moves to higher latitudes (60°N), the water becomes much colder, cutting off the energy supply and causing the system to weaken significantly.'
 },
 {
 id: '43',
 text: 'Starting with the event that scientists theorize happened first and ending with the event that scientists theorize happened last, arrange the events in chronological order.',
 type: 'drag-drop',
 options: ['Birth of the Earliest Star', 'Formation of the Sun', 'Origin of Life on Earth', 'The Big Bang'],
 dropZones: ['First', 'Second', 'Third', 'Last'],
 correctAnswer: [3, 0, 1, 2],
 explanation: 'The chronological order is: The Big Bang (13.8 billion years ago) created the universe; Birth of the Earliest Stars (about 200 million years after Big Bang); Formation of the Sun (about 4.6 billion years ago); Origin of Life on Earth (about 3.5-4 billion years ago).'
 },
 {
 id: '44',
 text: 'Which characteristic do all the planets in our solar system have in common?',
 type: 'multiple-choice',
 options: ['Angle of axial tilt', 'Direction of revolution', 'Percentages of atmospheric gases', 'Features of a rocky crust'],
 correctAnswer: 1,
 explanation: 'All planets in our solar system revolve around the Sun in the same direction (counterclockwise when viewed from above the North Pole). Their axial tilts, atmospheric compositions, and surface features vary significantly.'
 },
 {
 id: '45',
 text: 'A scientist is studying energy transfer that occurs in the oceans, atmosphere, and Earth\'s interior. Which of these is the scientist most likely studying?',
 type: 'multiple-choice',
 options: ['Pressure', 'Density', 'Gravity', 'Convection'],
 correctAnswer: 3,
 explanation: 'Convection is the transfer of heat through the movement of fluids (liquids and gases). It occurs in the oceans (ocean currents), atmosphere (wind and weather patterns), and Earth\'s interior (mantle convection driving plate tectonics).'
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