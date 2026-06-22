window.TEST_IDENTIFIER = 'science_biology_2015';

const sampleQuestions = [
 {
 id: '1',
 text: '<img src="images/question_1.png" class="question-image"><br><br>Red flower color is dominant to white flower color in rose plants. What is the expected result of a cross between two heterozygous rose plants?',
 type: 'multiple-choice',
 options: ['100% red', '75% red, 25% white', '50% red, 50% white', '25% red, 75% white'],
 correctAnswer: 1,
 explanation: 'When two heterozygous plants (Rr × Rr) are crossed, the Punnett square shows: RR (25%), Rr (50%), and rr (25%). Since red (R) is dominant, both RR and Rr will display red flowers (75%), while only rr will display white flowers (25%).'
 },
 {
 id: '2',
 text: 'Place the phases of mitosis in the correct sequence.',
 type: 'drag-drop',
 options: ['<img src="images/question_2a.png" class="question-image" style="width:70px">', '<img src="images/question_2b.png" class="question-image" style="width:70px">', '<img src="images/question_2c.png" class="question-image" style="width:70px">', '<img src="images/question_2d.png" class="question-image" style="width:70px">'],
 dropZones: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
 correctAnswer: [0, 2, 1, 3],
 explanation: 'The correct sequence of mitosis is: Prophase (chromosomes condense, nuclear envelope breaks down), Metaphase (chromosomes align at cell equator), Anaphase (sister chromatids separate and move to opposite poles), and Telophase (nuclear envelopes reform, cytokinesis begins).'
 },
 {
 id: '3',
 text: 'To classify an organism a scientist finds in the field, which of these will the scientist first compare to other known organisms?',
 type: 'multiple-choice',
 options: ['Dietary habits', 'Ecological niche', 'Physical structure', 'Reproductive method'],
 correctAnswer: 2,
 explanation: 'Physical structure (morphology) is the first characteristic scientists use to classify organisms in the field because it is immediately observable without requiring extended study of the organism\'s behavior, diet, or reproduction.'
 },
 {
 id: '4',
 text: '<img src="images/question_4.png" class="question-image"><br><br>For the growth curve to continue increasing, which of these must occur?',
 type: 'multiple-choice',
 options: ['The organisms must adapt to a new habitat.', 'The organisms must migrate to a new environment.', 'The resources in the environment must be unlimited.', 'The environment must provide a habitat for a large variety of organisms.'],
 correctAnswer: 2,
 explanation: 'Exponential population growth can only continue indefinitely if resources (food, water, space) remain unlimited. In reality, resources become limiting factors that cause population growth to level off at the carrying capacity.'
 },
 {
 id: '5',
 text: 'What did Rosalind Franklin contribute to the understanding of DNA molecules?',
 type: 'multiple-choice',
 options: ['An image indicating the shape of a DNA molecule', 'An analysis of the chemical makeup of a DNA molecule', 'A thought that DNA carries genetic information', 'A theory about how DNA conveys genetic information'],
 correctAnswer: 0,
 explanation: 'Rosalind Franklin produced X-ray crystallography images of DNA, most famously "Photo 51," which revealed the helical structure of DNA. This image was crucial to Watson and Crick\'s discovery of the double helix structure.'
 },
 {
 id: '6',
 text: 'Some functions of several structures of a fish are listed in the chart. Complete the chart by placing the structures of a cell next to the function they perform.',
 type: 'drag-drop',
 options: ['Cell Membrane', 'Flagellum', 'Nucleus', 'Vacuole'],
 dropZones: ['Control of Functions (Brain)', 'Gas Exchange (Gills)', 'Waste Storage (Bladder)', 'Movement (Fins, Tail)'],
 correctAnswer: [2, 0, 3, 1],
 explanation: 'The nucleus controls cell functions like the brain controls body functions. The cell membrane exchanges gases like gills do in fish. The vacuole stores waste like the bladder. The flagellum provides movement like fins and tail.'
 },
 {
 id: '7',
 text: 'Darwin\'s explanation for evolution was dependent on which scientific concept?',
 type: 'multiple-choice',
 options: ['The ability of organisms to learn', 'The significance of social behaviors to survival', 'The existence of variations in a population', 'The relationship between size and survival'],
 correctAnswer: 2,
 explanation: 'Darwin\'s theory of evolution by natural selection depends on the existence of variation within populations. Without variation, natural selection would have no traits to act upon, and evolution could not occur.'
 },
 {
 id: '8',
 text: 'Which best helps scientists determine the age of fossils?',
 type: 'multiple-choice',
 options: ['Physical traits', 'Genetic makeup', 'Reproductive strategy', 'Radioactive isotopes'],
 correctAnswer: 3,
 explanation: 'Radioactive isotopes undergo decay at known rates (half-lives), allowing scientists to determine the absolute age of fossils through radiometric dating techniques such as carbon-14 dating or potassium-argon dating.'
 },
 {
 id: '9',
 text: 'A student is investigating the effect of plants on indoor air quality and states, "If plants are added to an indoor environment, the air quality will improve." This statement is an example of —',
 type: 'multiple-choice',
 options: ['a theory', 'a procedure', 'an observation', 'a hypothesis'],
 correctAnswer: 3,
 explanation: 'A hypothesis is a testable prediction in "if...then" format. The student\'s statement predicts an outcome (improved air quality) based on a condition (adding plants), making it a hypothesis that can be tested experimentally.'
 },
 {
 id: '10',
 text: 'Although controversial at first, the germ theory of disease proposed that microorganisms were the cause of many diseases. Which of these was a result of the general acceptance that microorganisms cause disease?',
 type: 'multiple-choice',
 options: ['The development and use of antibiotics', 'The belief in spontaneous generation', 'The link between viruses and RNA', 'The proof of a supernatural cause for illnesses'],
 correctAnswer: 0,
 explanation: 'Once scientists accepted that microorganisms cause disease, they developed antibiotics to kill or inhibit these disease-causing bacteria. This led to major advances in treating infectious diseases throughout the 20th century.'
 },
 {
 id: '11',
 text: '<img src="images/question_11.png" class="question-image"><br><br>A biologist gathered data to show the interaction of the golden-cheeked warbler and juniper tree populations. Which conclusion did the biologist most likely make from the data shown?',
 type: 'multiple-choice',
 options: ['As the juniper tree population increases, the golden-cheeked warbler population increases.', 'The optimum habitat for the golden-cheeked warbler population is 100 juniper trees per acre.', 'The golden-cheeked warbler population stabilizes when the juniper tree population increases above 120 trees per acre.', 'A golden-cheeked warbler population is unable to survive if juniper trees are present.'],
 correctAnswer: 1,
 explanation: 'The data shows that warblers reach their peak population (60 per acre) when there are approximately 100 juniper trees per acre. Above and below this number, the warbler population is lower, indicating 100 trees per acre is the optimum habitat.'
 },
 {
 id: '12',
 text: '<img src="images/question_12.png" class="question-image"><br><br>Studying the differences between fossils and modern organisms helps scientists better understand the —',
 type: 'multiple-choice',
 options: ['role of mutation in life functions', 'primary function of key macromolecules', 'adaptation of organisms through acquired traits', 'evolution of organisms over time'],
 correctAnswer: 3,
 explanation: 'Comparing fossils to modern organisms reveals how species have changed over geological time periods. This evidence of gradual change supports our understanding of evolution and how organisms have adapted over millions of years.'
 },
 {
 id: '13',
 text: '<img src="images/question_13.png" class="question-image"><br><br>This chart shows observations made of an unknown organism. Based on this information, the organism most likely belongs to the kingdom —',
 type: 'multiple-choice',
 options: ['Fungi', 'Plantae', 'Eubacteria', 'Animalia'],
 correctAnswer: 0,
 explanation: 'The organism has a nucleus and mitochondria (eukaryotic), is multicellular, has cell walls made of chitin, and is a decomposer. These characteristics are defining features of the kingdom Fungi. Plants have cellulose cell walls, not chitin.'
 },
 {
 id: '14',
 text: '<img src="images/question_14.png" class="question-image"><br><br>What can be concluded from this graph?',
 type: 'multiple-choice',
 options: ['The reactants have less energy than the products.', 'The enzyme is consumed during the course of the reaction.', 'The enzyme lowers the energy of activation for the reaction.', 'The amount of free energy produced in the reaction increases with an enzyme.'],
 correctAnswer: 2,
 explanation: 'The graph shows that the reaction with enzyme (dashed line) has a lower activation energy peak than the reaction without enzyme. Enzymes are biological catalysts that lower the activation energy required for reactions to proceed.'
 },
 {
 id: '15',
 text: '<img src="images/question_15.png" class="question-image"><br><br>Which statement is an inference based on this information?',
 type: 'multiple-choice',
 options: ['Plant seeds have different shapes.', 'Milkweed seeds are dispersed by wind.', 'Maple seeds have a membrane-like extension.', 'Burdock seeds have short, peg-like extensions.'],
 correctAnswer: 1,
 explanation: 'An inference is a conclusion drawn from observations. Observing that milkweed seeds have feather-like extensions, one can infer they are dispersed by wind. The other options are direct observations, not inferences.'
 },
 {
 id: '16',
 text: 'The weakness of hydrogen bonds between the bases of DNA allows —',
 type: 'multiple-choice',
 options: ['rearrangement of the sequence of bases to take place', 'base pairs to separate during transcription and replication', 'new bases to be incorporated into the DNA molecule', 'conversion of bases to amino acids in the event of cell starvation'],
 correctAnswer: 1,
 explanation: 'The hydrogen bonds between complementary base pairs (A-T and G-C) are weak enough to allow the DNA strands to separate during replication and transcription, yet strong enough collectively to hold the double helix together normally.'
 },
 {
 id: '17',
 text: 'Which of these would most likely result in a change to the current classification of an organism?',
 type: 'multiple-choice',
 options: ['Discovering organisms with similar physical traits in the fossil record', 'Finding a related organism that was previously considered extinct', 'Linking the organism to different ancestors through DNA sequencing', 'Observing organisms that occupy the same ecological niche'],
 correctAnswer: 2,
 explanation: 'Modern classification relies heavily on DNA sequencing to determine evolutionary relationships. If DNA analysis reveals different ancestors than previously thought, the organism\'s taxonomic classification would likely change.'
 },
 {
 id: '18',
 text: 'Select the autotrophs.',
 type: 'multiple-select',
 options: ['Fern', 'Euglena', 'Grass', 'Paramecium', 'Yeast'],
 correctAnswer: [0, 2],
 explanation: 'Fern and Grass are autotrophs (they photosynthesize). Paramecium and Yeast are heterotrophs (they consume other organisms). Euglena is unique in being both—it can photosynthesize in light or consume food in dark.'
 },
 {
 id: '19',
 text: 'Five species of frogs that live in separate habitats within 5 non-overlapping ranges along the Mississippi River share a common ancestor. Which process is most likely responsible for the formation of these five distinct species?',
 type: 'multiple-choice',
 options: ['Physiological isolation', 'Geographic isolation', 'Behavioral isolation', 'Reproductive isolation'],
 correctAnswer: 1,
 explanation: 'Geographic isolation occurs when populations are separated by physical barriers (in this case, different ranges along the river). Over time, isolated populations evolve independently, leading to speciation.'
 },
 {
 id: '20',
 text: 'Chloroplast process<br><u>X</u> + H₂O → <u>Y</u> + O₂<br><br>The diagram shown represents the input and output of a process performed by the chloroplast of a cell. Which substance is most likely represented by Y?',
 type: 'multiple-choice',
 options: ['Glucose', 'CO₂', 'ATP', 'Light'],
 correctAnswer: 0,
 explanation: 'The equation X + H₂O → Y + O₂ represents photosynthesis. X is CO₂, and Y is glucose (C₆H₁₂O₆). Chloroplasts use carbon dioxide and water, with light energy, to produce glucose and oxygen.'
 },
 {
 id: '21',
 text: '<img src="images/question_21.png" class="question-image"><br><br>Which statement best describes her hypothesis?',
 type: 'multiple-choice',
 options: ['A student notices fewer robins in her yard during the winter.', 'She thinks that some robins must migrate in the winter.', 'She counts the robins in her yard once a week for 2 years.', 'Her research has shown that some robins are not in her yard during winter.'],
 correctAnswer: 1,
 explanation: 'A hypothesis is a proposed explanation that can be tested. Statement 2 ("She thinks that some robins must migrate in the winter") is the hypothesis because it proposes an explanation for the observation of fewer robins.'
 },
 {
 id: '22',
 text: 'Seaweeds occupy an important niche in the Chesapeake Bay ecosystem. Which question will best help a student identify the role of seaweeds in this ecosystem?',
 type: 'multiple-choice',
 options: ['Which organisms depend on seaweeds as an energy source?', 'Which seaweed species produces the greatest amount of oxygen?', 'What wavelengths of light are photosynthesized by seaweed species?', 'What is the salinity in areas where seaweed is growing?'],
 correctAnswer: 0,
 explanation: 'The ecological niche of an organism includes its role in energy transfer within the ecosystem. Identifying which organisms depend on seaweeds as an energy source directly addresses seaweeds\' role in the food web.'
 },
 {
 id: '23',
 text: 'In 1950, Erwin Chargaff discovered that the percentage of adenine in DNA equals the percentage of thymine, and that the percentage of cytosine equals the percentage of guanine. This proved invaluable to the eventual discovery of which aspect of DNA?',
 type: 'multiple-choice',
 options: ['Location', 'Solubility', 'Structure', 'Volume'],
 correctAnswer: 2,
 explanation: 'Chargaff\'s rules (A=T and C=G) provided crucial evidence for the base-pairing structure of DNA. This supported Watson and Crick\'s discovery that DNA is a double helix with complementary base pairs.'
 },
 {
 id: '24',
 text: 'The study of embryos and other early stages of development can help in the classification of living things, past and present, by providing clues about the —',
 type: 'multiple-choice',
 options: ['prokaryotic species that are at risk for extinction', 'rate of appearances of new terrestrial organisms', 'barriers to mating among marine populations', 'common ancestry among vertebrate species'],
 correctAnswer: 3,
 explanation: 'Embryological development reveals evolutionary relationships. Similar embryonic stages across different species (like gill slits and tails in vertebrate embryos) indicate common ancestry, helping scientists classify organisms.'
 },
 {
 id: '25',
 text: 'Complete the sentences about water molecules by dragging the correct terms to each box.',
 type: 'drag-drop',
 options: ['polar', 'nonpolar', 'hydrogen', 'oxygen', 'positive', 'negative'],
 dropZones: ['A water molecule is ___', 'It has a slightly ___ charge on', 'the ___ atom and a slightly', '___ charge on the two', '___ atoms'],
 correctAnswer: [0, 5, 3, 4, 2],
 explanation: 'A water molecule is polar. It has a slightly negative charge on the oxygen atom (due to higher electronegativity) and a slightly positive charge on the two hydrogen atoms. This polarity gives water its unique properties.'
 },
 {
 id: '26',
 text: 'Which characteristic do most adult fungi and plants share?',
 type: 'multiple-choice',
 options: ['They both are producers.', 'They both have cells with cell walls.', 'They both reproduce through binary fission.', 'They both have multiple nuclei in each cell.'],
 correctAnswer: 1,
 explanation: 'Both fungi and plants have cells with cell walls, though the composition differs (chitin in fungi, cellulose in plants). Fungi are decomposers not producers, neither reproduces by binary fission, and most don\'t have multiple nuclei per cell.'
 },
 {
 id: '27',
 text: '<img src="images/question_27.png" class="question-image"><br><br>Students use a dissolved oxygen probe during a laboratory activity involving 1,000 mL samples of pond water. The function of the probe is to —',
 type: 'multiple-choice',
 options: ['create a model', 'test a hypothesis', 'gather accurate data', 'analyze investigation conditions'],
 correctAnswer: 2,
 explanation: 'A dissolved oxygen probe is a measurement tool used to gather accurate, quantitative data about oxygen levels in water. It provides precise measurements that would be difficult to obtain through other means.'
 },
 {
 id: '28',
 text: 'In a population of 120 oak trees, 25% of the population has oak wilt disease. What is the number of trees in this population that have oak wilt?',
 type: 'free-response',
 correctKeywords: ['30'],
 explanation: 'To find 25% of 120: 0.25 × 120 = 30 trees. Twenty-five percent of the population means one quarter, so 120 ÷ 4 = 30 trees have oak wilt disease.'
 },
 {
 id: '29',
 text: 'An insect called the hemlock woolly adelgid was introduced to a Virginia forest ecosystem. This pest feeds on the nutrients stored inside a hemlock tree, resulting in the death of the tree. Which kind of data would best help a student evaluate the effect of this insect?',
 type: 'multiple-choice',
 options: ['A comparison of the adelgid with native pest species', 'An account of how the adelgid was introduced into Virginia ecosystems', 'A list of the foreign ecosystems infiltrated by the hemlock woolly adelgid', 'Information about the ecosystem\'s characteristics before the adelgid infestation'],
 correctAnswer: 3,
 explanation: 'To evaluate the effect of the invasive species, scientists need baseline data about the ecosystem before the infestation. This allows comparison of before and after conditions to determine the actual impact of the adelgid.'
 },
 {
 id: '30',
 text: '<img src="images/question_30.png" class="question-image"><br><br>A student wanted to compare the transpiration rates of two different plant species at varying levels of humidity. The results are recorded in the table shown. Each plant group was given the same amount of water and light throughout the investigation. Which procedure should have been performed to prevent error in this investigation?',
 type: 'multiple-choice',
 options: ['One type of plant should have been tested.', 'Fewer plants should have been included in each group.', 'The percentage of humidity should have been kept constant.', 'Both groups should have been tested in the same soil type at each humidity level.'],
 correctAnswer: 3,
 explanation: 'For a valid comparison, all variables except the one being tested should be controlled. Using different soil types (sand vs. clay) for different trials introduces a confounding variable. Both groups should use the same soil type at each humidity level.'
 },
 {
 id: '31',
 text: 'In an ecosystem, a sudden decrease in the number of bacteria in the soil would most likely result in —',
 type: 'multiple-choice',
 options: ['increased water pollution in the soil', 'increased precipitation and flooding of the soil', 'a reduction in the amount of nitrogen available to the ecosystem', 'a decrease in the number of fossils formed in the soil'],
 correctAnswer: 2,
 explanation: 'Soil bacteria play a crucial role in the nitrogen cycle by converting atmospheric nitrogen into forms plants can use (nitrogen fixation) and decomposing organic matter. A decrease in bacteria would reduce available nitrogen in the ecosystem.'
 },
 {
 id: '32',
 text: 'Medicines are being produced using recombinant DNA technology. For veterinarians, the use of this DNA technology will result in —',
 type: 'multiple-choice',
 options: ['decreasing the number of antibodies produced by pets', 'altering the chromosomes of healthy pets', 'making more treatments available for pets', 'identifying new diseases spread by pets'],
 correctAnswer: 2,
 explanation: 'Recombinant DNA technology allows scientists to produce medicines, hormones, and vaccines that were previously unavailable or expensive. This technology expands treatment options available to veterinarians for treating animals.'
 },
 {
 id: '33',
 text: '<img src="images/question_33.png" class="question-image"><br><br>The arrow in the diagram represents the movement of which molecular structure?',
 type: 'multiple-choice',
 options: ['DNA molecule', 'mRNA molecule', 'Base pair', 'Protein'],
 correctAnswer: 1,
 explanation: 'The diagram shows the flow of genetic information from the nucleus to the ribosome. mRNA (messenger RNA) is transcribed in the nucleus and travels to ribosomes in the cytoplasm where proteins are synthesized.'
 },
 {
 id: '34',
 text: '<img src="images/question_34.png" class="question-image"><br><br>According to the classification key, what is the genus and species of this organism?',
 type: 'multiple-choice',
 options: ['<i>Papilio polyxenes</i>', '<i>Malacosoma americanum</i>', '<i>Papilio palamedes</i>', '<i>Eurytides marcellus</i>'],
 correctAnswer: 3,
 explanation: 'Following the dichotomous key: The butterfly has rounded antennae tips (go to 2), wings with stripes (go to 4), and wings with tail-like extensions longer than antennae, which identifies it as Eurytides marcellus.'
 },
 {
 id: '35',
 text: '<img src="images/question_35.png" class="question-image"><br><br>The jackrabbit is a desert mammal. The jackrabbit\'s circulatory system increases blood flow to the ears during hot days. The blood flow to the ears decreases during cool or cold nights. This circulation pattern is most directly related to —',
 type: 'multiple-choice',
 options: ['detoxification', 'excretion', 'osmosis', 'homeostasis'],
 correctAnswer: 3,
 explanation: 'Homeostasis is the maintenance of stable internal conditions. The jackrabbit regulates its body temperature by adjusting blood flow to its large ears—increasing flow to release heat when hot, decreasing flow to conserve heat when cold.'
 },
 {
 id: '36',
 text: 'Proteins are among the most diverse group of macromolecules because of the —',
 type: 'multiple-choice',
 options: ['different amino acids that can be connected in many sequences', 'different types of bonds linking amino acids together', 'energy phosphate groups that the amino acids contain', 'link between each DNA base and an amino acid in a protein'],
 correctAnswer: 0,
 explanation: 'There are 20 different amino acids that can be combined in virtually unlimited sequences to form proteins. The specific sequence of amino acids determines each protein\'s unique structure and function, creating enormous diversity.'
 },
 {
 id: '37',
 text: 'Which is an activity that increases the genetic variation within a population of earthworms?',
 type: 'multiple-choice',
 options: ['Binary fission', 'Sexual reproduction', 'Budding', 'Fragmentation'],
 correctAnswer: 1,
 explanation: 'Sexual reproduction increases genetic variation through the combination of genetic material from two parents and through crossing over and independent assortment during meiosis. Asexual methods (binary fission, budding, fragmentation) produce genetically identical offspring.'
 },
 {
 id: '38',
 text: 'The structural differences between a tadpole and an adult frog are due to the —',
 type: 'multiple-choice',
 options: ['availability of food sources at different stages', 'type of DNA present at each developmental stage', 'combination of genetic material inherited during fertilization', 'different sets of genes expressed at each stage of development'],
 correctAnswer: 3,
 explanation: 'A tadpole and adult frog have the same DNA, but different genes are expressed (turned on or off) at different developmental stages. This differential gene expression causes the dramatic structural changes during metamorphosis.'
 },
 {
 id: '39',
 text: '<img src="images/question_39.png" class="question-image"><br><br>After 24 hours, the amount of gas that accumulated at the top of the inverted test tube is measured. The students conclude that the light source is causing the water to evaporate, causing water vapor to fill the top of the tube. The best alternative explanation of the differences between the setups is that the —',
 type: 'multiple-choice',
 options: ['gravity increased the downward flow of the trapped water', 'metabolism of the elodea plants absorbed CO₂ from the water', 'heat from the light source caused the escape of dissolved gas', 'light caused the elodea plants to photosynthesize, releasing O₂ gas'],
 correctAnswer: 3,
 explanation: 'The most likely explanation is that light enabled the Elodea plants to photosynthesize, producing oxygen gas (O₂). The gas collected at the top of the inverted tube is oxygen, not water vapor from evaporation.'
 },
 {
 id: '40',
 text: '<img src="images/question_40.png" class="question-image"><br><br>This table was found in a journal of student research. What are the independent and dependent variables in this investigation?',
 type: 'drag-drop',
 options: ['Water (mL)', 'Starch Solution (mL)', 'Enzyme: Amylase (mL)', 'Incubation Temperature (°C)', 'Fractional Activity (%)'],
 dropZones: ['Independent Variable', 'Dependent Variable'],
 correctAnswer: [3, 4],
 explanation: 'The independent variable is Incubation Temperature (what the researcher changes). The dependent variable is Fractional Activity (what is measured). The constants are Water, Starch Solution, and Enzyme amounts (kept the same across test groups).'
 },
 {
 id: '41',
 text: 'Scientists classifying modern animals are most likely to compare the —',
 type: 'multiple-choice',
 options: ['structure of the animals\' ATP', 'function of the animals\' limbs', 'composition of the animals\' bones', 'sequence of the animals\' DNA'],
 correctAnswer: 3,
 explanation: 'Modern classification (phylogenetics) relies primarily on DNA sequence comparisons to determine evolutionary relationships. DNA provides the most accurate information about how closely related different species are.'
 },
 {
 id: '42',
 text: 'Which feature do viruses have in common with animal cells?',
 type: 'multiple-choice',
 options: ['Ability to form proteins at the ribosomes', 'Existence of lipids in cell membranes', 'Presence of a genetic code in nucleic acid', 'Production of energy by a mitochondrion'],
 correctAnswer: 2,
 explanation: 'Both viruses and animal cells contain genetic material (nucleic acid—either DNA or RNA) that carries the genetic code. Viruses lack ribosomes, cell membranes, and mitochondria, relying on host cells for these functions.'
 },
 {
 id: '43',
 text: '<img src="images/question_43.png" class="question-image"><br><br>According to this diagram, the result of spermatogenesis is four sperm cells, each with —',
 type: 'multiple-choice',
 options: ['strands of DNA that resulted from crossing over', 'half of the original number of chromosomes', 'genetically identical strands of DNA', 'complete copies of all the original chromosomes'],
 correctAnswer: 1,
 explanation: 'Spermatogenesis involves meiosis, which reduces the chromosome number by half. Each sperm cell (gamete) contains half the number of chromosomes as the original cell, which will be restored when fertilization occurs.'
 },
 {
 id: '44',
 text: 'A group of ponies lives in the Chincoteague National Wildlife Reserve in Virginia. The development of longer legs over time would be selected for if —',
 type: 'multiple-choice',
 options: ['it increased the survival rate of the long-legged ponies', 'it decreased the rate of reproduction of the long-legged ponies', 'it prohibited the long-legged ponies from using available food sources', 'it made the long-legged ponies run more slowly'],
 correctAnswer: 0,
 explanation: 'Natural selection favors traits that increase survival and reproduction. If longer legs increased survival rates (perhaps by helping ponies escape predators or reach food), ponies with longer legs would be more likely to survive and reproduce.'
 },
 {
 id: '45',
 text: 'One parent is heterozygous for a certain trait (Dd). The other parent is homozygous dominant (DD) for that trait. What is the percent chance that an offspring from this cross will be heterozygous?',
 type: 'multiple-choice',
 options: ['0%', '25%', '50%', '100%'],
 correctAnswer: 2,
 explanation: 'Crossing Dd × DD produces offspring with genotypes: DD (50%) and Dd (50%). The D from the homozygous parent combines with either D or d from the heterozygous parent, giving a 50% chance of heterozygous (Dd) offspring.'
 },
 {
 id: '46',
 text: '<img src="images/question_46.png" class="question-image"><br><br>Which trial in the table of data shown has questionable data?',
 type: 'multiple-choice',
 options: ['W', 'X', 'Y', 'Z'],
 correctAnswer: 3,
 explanation: 'Trial Z shows questionable data because the Day 15 measurement (17 cm) is much higher than expected based on the pattern of growth. Trials W, X, and Y show consistent progressive growth, while Z shows an unusual spike at Day 15.'
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