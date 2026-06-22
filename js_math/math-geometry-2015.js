window.TEST_IDENTIFIER = 'math_geometry_2015';

const sampleQuestions = [
 {
 id: '1',
 text: 'Which Venn diagram accurately represents the information in the following statement?<br><br><em>If a triangle is equilateral, then it is isosceles.</em>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_1a.png', alt: 'Venn diagram option A'},
    {url: 'images/question_1b.png', alt: 'Venn diagram option B'},
    {url: 'images/question_1c.png', alt: 'Venn diagram option C'},
    {url: 'images/question_1d.png', alt: 'Venn diagram option D'}
 ],
 correctAnswer: 1,
 explanation: 'All equilateral triangles are isosceles, so the equilateral circle should be entirely inside the isosceles circle.'
 },
 {
 id: '2',
 text: 'The graph of line j is shown.<br><img src="images/question_2.png" class="question-image" alt="Graph showing line j passing through points (-4, -4) and (3, -1)"></img><br>Which ratio represents the slope of a line parallel to line j?',
 type: 'multiple-choice',
 options: ['<math><mfrac><mn>3</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>5</mn><mn>7</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>5</mn></mfrac></math>', '<math><mfrac><mn>7</mn><mn>3</mn></mfrac></math>'],
 correctAnswer: 0,
 explanation: 'Parallel lines have the same slope. Calculate the slope of line j using the two given points.'
 },
 {
 id: '3',
 text: 'Let p represent <em>Brent works this summer.</em><br>Let q represent <em>Brent takes a vacation.</em><br><br>Symbolically represent the following argument:',
 type: 'drag-drop',
 options: ['p → q', '~p → q', 'p', '~p', '∴ p', '∴ ~p', '~p → ~q', 'p → ~q', 'q', '~q', '∴ q', '∴ ~q'],
 dropZones: ['If Brent works this summer, then he will not take a vacation.', 'Brent takes a vacation.', 'Therefore, Brent does not work this summer.'],
 correctAnswer: [7, 8, 5],
 explanation: 'The argument follows modus tollens: p → ~q, q, therefore ~p.'
 },
 {
 id: '4',
 text: 'Which type of construction is illustrated in the figure?<br><img src="images/question_4.png" class="question-image" alt="Geometric construction showing arcs and line segments"></img>',
 type: 'multiple-choice',
 options: ['The bisector of a given angle', 'An angle congruent to a given angle', 'A line segment congruent to a given line segment', 'A line segment perpendicular to a given line segment'],
 correctAnswer: 1,
 explanation: 'The construction shows the process of creating an angle congruent to a given angle.'
 },
 {
 id: '5',
 text: 'The diagrams represent the stripes used to mark parking spaces on a lot. Based only on the information given, which diagram could be used to prove <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math> || <math><mover><mrow><mi>CD</mi></mrow><mo>―</mo></mover></math> and <math><mover><mrow><mi>AC</mi></mrow><mo>―</mo></mover></math> || <math><mover><mrow><mi>BD</mi></mrow><mo>―</mo></mover></math>?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_5a.png', alt: 'Venn diagram option A'},
    {url: 'images/question_5b.png', alt: 'Venn diagram option B'},
    {url: 'images/question_5c.png', alt: 'Venn diagram option C'},
    {url: 'images/question_5d.png', alt: 'Venn diagram option D'}
 ],
 correctAnswer: 1,
 explanation: 'Look for corresponding angles or alternate interior angles that prove the lines are parallel.'
 },
 {
 id: '6',
 text: 'Given statements:<br><br><em>If a shape is a parallelogram, then opposite angles are congruent.<br>A rhombus is a parallelogram.</em><br><br>Which is a logical conclusion from the given statements?',
 type: 'multiple-choice',
 options: ['A rhombus has opposite angles that are congruent.', 'The opposite sides of a rhombus are congruent.', 'The diagonals of a rhombus are congruent.', 'A rhombus is a quadrilateral.'],
 correctAnswer: 0,
 explanation: 'Using the transitive property of logic: if a rhombus is a parallelogram, and parallelograms have opposite angles congruent, then a rhombus has opposite angles congruent.'
 },
 {
 id: '7',
 text: 'Which figure appears to have exactly two lines of symmetry?',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_7a.png', alt: 'Venn diagram option A'},
    {url: 'images/question_7b.png', alt: 'Venn diagram option B'},
    {url: 'images/question_7c.png', alt: 'Venn diagram option C'},
    {url: 'images/question_7d.png', alt: 'Venn diagram option D'}
 ],
 correctAnswer: 1,
 explanation: 'Count the lines of symmetry for each figure. A figure with two lines of symmetry can be reflected across exactly two different lines.'
 },
 {
 id: '8',
 text: 'Which is the converse of the following statement?<br><br>If <math><mfrac><mi>a</mi><mi>b</mi></mfrac></math> = c, then a = bc.',
 type: 'multiple-choice',
 options: ['If <math><mfrac><mi>a</mi><mi>b</mi></mfrac></math> ≠ c, then a ≠ bc.', 'If a = bc, then <math><mfrac><mi>a</mi><mi>b</mi></mfrac></math> = c.', 'If a ≠ bc, then <math><mfrac><mi>a</mi><mi>b</mi></mfrac></math> ≠ c.', 'If <math><mfrac><mi>a</mi><mi>b</mi></mfrac></math> = c, then a ≠ bc.'],
 correctAnswer: 1,
 explanation: 'The converse switches the hypothesis and conclusion: If q, then p becomes If p, then q.'
 },
 {
 id: '9',
 text: 'Which graph best represents a line perpendicular to line k?<br><img src="images/question_9.png" class="question-image" alt="Line k shown with four possible perpendicular line options"></img>',
 type: 'multiple-choice',
 options: [
    {url: 'images/question_9a.png', alt: 'Graph option A'},
    {url: 'images/question_9b.png', alt: 'Graph option B'},
    {url: 'images/question_9c.png', alt: 'Graph option C'},
    {url: 'images/question_9d.png', alt: 'Graph option D'}
 ],
 correctAnswer: 3,
 explanation: 'Perpendicular lines have slopes that are negative reciprocals of each other.'
 },
 {
 id: '10',
 text: 'Which statement describes the construction being illustrated on the rectangle shown?<br><img src="images/question_10.png" class="question-image" alt="Rectangle with construction marks showing arcs"></img>',
 type: 'multiple-choice',
 options: ['A bisector of <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math>', 'A line segment congruent to <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math>', 'A perpendicular to <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math> through point E on <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math>', 'A perpendicular to <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math> through point G not on <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math>'],
 correctAnswer: 3,
 explanation: 'The construction shows a perpendicular line being drawn from a point not on the line.'
 },
 {
 id: '11',
 text: 'Four lines and four congruent angles are identified in the diagram.<br><img src="images/question_11.png" class="question-image" alt="Four lines intersecting with four 89.9° angles marked"></img><br>Which statement must be true?',
 type: 'multiple-choice',
 options: ['Only m || n', 'Only p || q', 'p || q and m || n', 'No pair of lines is parallel.'],
 correctAnswer: 0,
 explanation: 'When corresponding angles are congruent, the lines are parallel.'
 },
 {
 id: '12',
 text: 'The figure shows <math><mover><mrow><mi>JN</mi></mrow><mo>―</mo></mover></math> and <math><mover><mrow><mi>KM</mi></mrow><mo>―</mo></mover></math> intersecting at point L.<br><img src="images/question_12.png" class="question-image" alt="Two lines intersecting with angles marked as 61°, 39°, and (3x + 5)°"></img><br>What value of x proves <math><mover><mrow><mi>JK</mi></mrow><mo>―</mo></mover></math> || <math><mover><mrow><mi>MN</mi></mrow><mo>―</mo></mover></math>?',
 type: 'free-response',
 correctKeywords: ['25'],
 explanation: 'Use the properties of parallel lines and transversals to set up an equation and solve for x.'
 },
 {
 id: '13',
 text: 'Given: <math><mover><mrow><mi>MP</mi></mrow><mo>―</mo></mover></math><br><img src="images/question_13.png" class="question-image" alt="Points M, P, S, T, U, V, W shown with segments"></img><br>Which segment is congruent to <math><mover><mrow><mi>MP</mi></mrow><mo>―</mo></mover></math>?',
 type: 'multiple-choice',
 options: ['<math><mover><mrow><mi>SV</mi></mrow><mo>―</mo></mover></math>', '<math><mover><mrow><mi>SW</mi></mrow><mo>―</mo></mover></math>', '<math><mover><mrow><mi>TU</mi></mrow><mo>―</mo></mover></math>', '<math><mover><mrow><mi>TV</mi></mrow><mo>―</mo></mover></math>'],
 correctAnswer: 3,
 explanation: 'Identify which segment has the same length as MP.'
 },
 {
 id: '14',
 text: 'Triangle ABC is reflected across the x-axis and then reflected across the y-axis to create △A′B′C′.<br><img src="images/question_14.png" class="question-image" alt="Triangle ABC on coordinate plane"></img><br>What are the coordinates of A′?',
 type: 'multiple-choice',
 options: ['(−4, −1)', '(−2, −4)', '(−1, −4)', '(−1, 4)'],
 correctAnswer: 2,
 explanation: 'Apply the transformations sequentially: reflect across x-axis changes (x, y) to (x, -y), then reflect across y-axis changes to (-x, -y).'
 },
 {
 id: '15',
 text: 'A diagonal walkway cuts through a park bordered by two parallel streets. The parks department plans to add an additional walkway as indicated by the dashed line segment in the figure.<br><img src="images/question_15.png" class="question-image" alt="Two parallel streets with diagonal walkway showing 132° angle and x° angle"></img><br>What is the value of x?',
 type: 'multiple-choice',
 options: ['42', '48', '90', '138'],
 correctAnswer: 0,
 explanation: 'Use properties of parallel lines and transversals to find the angle.'
 },
 {
 id: '16',
 text: 'The coordinate values of the vertices of △KLM are integers.<br><img src="images/question_16.png" class="question-image" alt="Triangle KLM on coordinate plane"></img><br>Which set of coordinate pairs could represent the vertices of a triangle congruent to △KLM?',
 type: 'multiple-choice',
 options: ['{(0, 0), (3, 4), (0, 5)}', '{(0, 0), (−5, 0), (0, 4)}', '{(−1, 1), (−4, 5), (−1, 5)}', '{(−1, 1), (−1, 4), (2, 1)}'],
 correctAnswer: 2,
 explanation: 'Congruent triangles have the same side lengths. Check which set preserves the side lengths of the original triangle.'
 },
 {
 id: '17',
 text: 'Given: △ABC and △QRS<br><img src="images/question_17.png" class="question-image" alt="Two triangles ABC and QRS"></img><br>Select two relationships that would prove △ABC ~ △QRS by the Side-Angle-Side (SAS) Similarity Theorem.',
 type: 'multiple-select',
 options: ['∠A ≅ ∠Q', '∠C ≅ ∠S', '∠B ≅ ∠Q', '<math><mfrac><mrow><mi>AB</mi></mrow><mrow><mi>QR</mi></mrow></mfrac></math> = <math><mfrac><mrow><mi>BC</mi></mrow><mrow><mi>RS</mi></mrow></mfrac></math>', '<math><mfrac><mrow><mi>AB</mi></mrow><mrow><mi>QR</mi></mrow></mfrac></math> = <math><mfrac><mrow><mi>AC</mi></mrow><mrow><mi>QS</mi></mrow></mfrac></math>', '<math><mfrac><mrow><mi>AC</mi></mrow><mrow><mi>QS</mi></mrow></mfrac></math> = <math><mfrac><mrow><mi>BC</mi></mrow><mrow><mi>QR</mi></mrow></mfrac></math>'],
 correctAnswer: [0, 4],
 explanation: 'SAS similarity requires one angle congruent and the two sides forming that angle to be proportional.'
 },
 {
 id: '18',
 text: 'The diagonals of a square measure 14 cm. Which is the length of a side of the square?',
 type: 'multiple-choice',
 options: ['7<math><msqrt><mn>2</mn></msqrt></math> cm', '7<math><msqrt><mn>3</mn></msqrt></math> cm', '14<math><msqrt><mn>2</mn></msqrt></math> cm', '14<math><msqrt><mn>3</mn></msqrt></math> cm'],
 correctAnswer: 0,
 explanation: 'In a square with diagonal d, the side length s = d/√2.'
 },
 {
 id: '19',
 text: 'What values for x and y make △MNO ≅ △PRT?<br><img src="images/question_19.png" class="question-image" alt="Two triangles with marked angles and sides"></img>',
 type: 'multiple-choice',
 options: ['x = 11, y = 13.8', 'x = 11, y = 27.6', 'x = 15, y = 13.8', 'x = 15, y = 27.6'],
 correctAnswer: 1,
 explanation: 'For congruent triangles, corresponding sides and angles must be equal. Set up equations and solve.'
 },
 {
 id: '20',
 text: 'Based on the given information, which figure contains a pair of similar triangles?',
 type: 'multiple-choice',
 options: [
    {text: 'Given: <math><mover><mrow><mi>AB</mi></mrow><mo>―</mo></mover></math> intersects <math><mover><mrow><mi>CD</mi></mrow><mo>―</mo></mover></math>', url: 'images/question_20a.png'},
    {text: 'Given: Quadrilateral ABCD', url: 'images/question_20b.png'},
    {text: 'Given: △ABC', url: 'images/question_20c.png'},
    {text: 'Given: A, B, and C are collinear', url: 'images/question_20d.png'}
 ],
 correctAnswer: 0,
 explanation: 'Look for figures where angles are congruent by vertical angles or other properties.'
 },
 {
 id: '21',
 text: 'A right triangle is shown.<br><img src="images/question_21.png" class="question-image" alt="Right triangle with sides 7.8 and 8, angle x"></img><br>Which angle measure is closest to the value of x?',
 type: 'multiple-choice',
 options: ['43.9°', '44.3°', '45.7°', '46.2°'],
 correctAnswer: 2,
 explanation: 'Use trigonometric ratios to find the angle.'
 },
 {
 id: '22',
 text: 'Pine Street, Rector Street, and Taylor Street intersect to form a triangular-shaped park as shown.<br><img src="images/question_22.png" class="question-image" alt="Triangle with angles 54° and 64° marked"></img><br>What is the correct order of the lengths of the streets from longest to shortest?',
 type: 'multiple-choice',
 options: ['Pine, Taylor, Rector', 'Rector, Taylor, Pine', 'Rector, Pine, Taylor', 'Taylor, Pine, Rector'],
 correctAnswer: 2,
 explanation: 'In a triangle, the longest side is opposite the largest angle.'
 },
 {
 id: '23',
 text: 'The diagram shows the locations of Noah and Ben after swimming in different directions from a dock. Let d be the distance from Noah to Ben, in yards.<br><img src="images/question_23.png" class="question-image" alt="Triangle showing Noah and Ben\'s positions from dock, 84 yd and 63 yd"></img><br>Which represents all the possible values, in yards, of d?',
 type: 'multiple-choice',
 options: ['0 < d < 105', '0 < d < 147', '21 < d < 147', '63 < d < 84'],
 correctAnswer: 2,
 explanation: 'Use the triangle inequality theorem: the sum of two sides must be greater than the third side.'
 },
 {
 id: '24',
 text: 'Select the measures that could be the three side lengths of a right triangle.',
 type: 'drag-drop',
 options: ['17 cm', '20 cm', '21 cm', '29 cm'],
 dropZones: ['Side 1 (Shorter)', 'Side 2 (Longer)', 'Hypotenuse'],
 correctAnswer: [1, 2, 3],
 explanation: 'Check if the sides satisfy the Pythagorean theorem: a² + b² = c².'
 },
 {
 id: '25',
 text: 'Given: △LMN and △PQR are isosceles<br><img src="images/question_25.png" class="question-image" alt="Two isosceles triangles with marked angles"></img><br>What m∠P could be used to prove △LMN ≅ △PQR?',
 type: 'multiple-choice',
 options: ['42°', '58°', '61°', '69°'],
 correctAnswer: 2,
 explanation: 'For congruent isosceles triangles, the vertex angles must be equal.'
 },
 {
 id: '26',
 text: 'Given: △RST<br>RS = 14 in.<br>ST = 10 in.<br>TR = 16 in.<br><br>List the interior angles of △RST in order from smallest to largest.',
 type: 'drag-drop',
 options: ['∠R', '∠S', '∠T'],
 dropZones: ['Smallest', 'Middle', 'Largest'],
 correctAnswer: [0, 2, 1],
 explanation: 'The smallest angle is opposite the shortest side, and the largest angle is opposite the longest side.'
 },
 {
 id: '27',
 text: 'Triangle LMN is similar to triangle PQR.<br><img src="images/question_27.png" class="question-image" alt="Triangle PQR with sides 3 cm, 4 cm, 5 cm"></img><br>Which of the following sets of side lengths could be those of triangle LMN?',
 type: 'multiple-choice',
 options: ['2 in., 3 in., 4 in.', '6 km, 7 km, 8 km', '8 ft, 15 ft, 17 ft', '9 m, 12 m, 15 m'],
 correctAnswer: 3,
 explanation: 'Similar triangles have proportional sides. Check which set has the same ratios as 3:4:5.'
 },
 {
 id: '28',
 text: 'A right triangle is shown.<br><img src="images/question_28.png" class="question-image" alt="Right triangle with hypotenuse 15 and angle 22°, finding side x"></img><br>Which is closest to the value of x?',
 type: 'multiple-choice',
 options: ['13.9', '9.0', '6.1', '5.6'],
 correctAnswer: 3,
 explanation: 'Use trigonometric ratios: sin(22°) = x/15.'
 },
 {
 id: '29',
 text: 'A convex polygon has only the vertices A, B, C, D, and E. What is the sum of the measures of the interior angles of this polygon?',
 type: 'multiple-choice',
 options: ['360°', '540°', '900°', '1260°'],
 correctAnswer: 1,
 explanation: 'For a pentagon (5 sides), the sum of interior angles = (n-2) × 180° = 3 × 180° = 540°.'
 },
 {
 id: '30',
 text: 'Rectangle JKLM is shown.<br><img src="images/question_30.png" class="question-image" alt="Rectangle with diagonal showing angles 62° and (2x + 4)°"></img><br>What is the value of x?',
 type: 'multiple-choice',
 options: ['12', '28', '29', '43'],
 correctAnswer: 0,
 explanation: 'In a rectangle, diagonals bisect each other and create congruent triangles.'
 },
 {
 id: '31',
 text: 'Chords <math><mover><mrow><mi>WP</mi></mrow><mo>―</mo></mover></math> and <math><mover><mrow><mi>KZ</mi></mrow><mo>―</mo></mover></math> intersect at point L in the circle shown.<br><img src="images/question_31.png" class="question-image" alt="Circle with intersecting chords, segments labeled x, 2, 5, and 3x - 2"></img><br>What is the length of <math><mover><mrow><mi>KZ</mi></mrow><mo>―</mo></mover></math>?',
 type: 'multiple-choice',
 options: ['7.5', '9', '10', '12'],
 correctAnswer: 3,
 explanation: 'When two chords intersect, the products of their segments are equal.'
 },
 {
 id: '32',
 text: 'The height and radius of a cone are each multiplied by 3. What effect does this have on the volume of the cone?<br><br>The volume of the cone is multiplied by ___',
 type: 'free-response',
 correctKeywords: ['27'],
 explanation: 'Volume of cone = (1/3)πr²h. When both r and h are tripled, volume is multiplied by 3² × 3 = 27.'
 },
 {
 id: '33',
 text: 'The equation (x − 1)² + (y − 3)² = r² represents circle A. The point B(4, 7) lies on the circle. What is r, the length of the radius of circle A?',
 type: 'multiple-choice',
 options: ['<math><msqrt><mn>13</mn></msqrt></math>', '5', '5<math><msqrt><mn>5</mn></msqrt></math>', '<math><msqrt><mn>137</mn></msqrt></math>'],
 correctAnswer: 1,
 explanation: 'Substitute the point (4, 7) into the equation and solve for r.'
 },
 {
 id: '34',
 text: 'Rodrigo planted flowers in a section of a circular garden as shown.<br><img src="images/question_34.png" class="question-image" alt="Circular sector with radius 13 ft and central angle 80°"></img><br>Which is closest to the area of this section of the garden?',
 type: 'multiple-choice',
 options: ['118 sq ft', '82 sq ft', '29 sq ft', '18 sq ft'],
 correctAnswer: 0,
 explanation: 'Area of sector = (θ/360°) × πr², where θ = 80° and r = 13 ft.'
 },
 {
 id: '35',
 text: 'The height of a cylinder is 9.5 centimeters. The diameter of this cylinder is 1.5 centimeters longer than the height. Which is closest to the volume of the cylinder?',
 type: 'multiple-choice',
 options: ['1,150π cm³', '287π cm³', '165π cm³', '105π cm³'],
 correctAnswer: 1,
 explanation: 'Diameter = 9.5 + 1.5 = 11 cm, so radius = 5.5 cm. Volume = πr²h = π(5.5)²(9.5).'
 },
 {
 id: '36',
 text: 'Which shape must have opposite sides that are parallel and congruent, and diagonals that are perpendicular bisectors of each other?',
 type: 'multiple-choice',
 options: ['Parallelogram', 'Rectangle', 'Rhombus', 'Trapezoid'],
 correctAnswer: 2,
 explanation: 'A rhombus has all these properties: opposite sides parallel and congruent, and perpendicular diagonals that bisect each other.'
 },
 {
 id: '37',
 text: 'A circle has a center at (4, −7) and a radius of 4 units. Create the equation of this circle.',
 type: 'drag-drop',
 options: ['(x − 4)', '(x + 4)', '(x − 4)²', '(x + 4)²', '(y − 7)', '(y + 7)', '(y − 7)²', '(y + 7)²', '+', '−', '2²', '4²'],
 dropZones: ['Term 1 (x-values)', 'Operator', 'Term 2 (y-values)', 'Result'],
 correctAnswer: [2, 8, 7, 11],
 explanation: 'The standard form of a circle equation is (x − h)² + (y − k)² = r².'
 },
 {
 id: '38',
 text: 'The figure represents the pattern for a quilt.<br>• ∠ABC = 120°<br>• ∠ADC = (2x + 30)°<br>• ∠BCD = x°<br><img src="images/question_38.png" class="question-image" alt="Quadrilateral with diagonals"></img><br>What is the measure of ∠DCE?',
 type: 'multiple-choice',
 options: ['150°', '140°', '120°', '110°'],
 correctAnswer: 1,
 explanation: 'Use the properties of quadrilaterals and solve for x, then find the required angle.'
 },
 {
 id: '39',
 text: 'A rectangular prism is shown.<br><img src="images/question_39.png" class="question-image" alt="Rectangular prism with dimensions 24 in. × 18 in. × 12 in."></img><br>What is the surface area of the prism?',
 type: 'multiple-choice',
 options: ['156 sq in.', '936 sq in.', '1,872 sq in.', '5,184 sq in.'],
 correctAnswer: 2,
 explanation: 'Surface area = 2(lw + lh + wh) = 2(24×18 + 24×12 + 18×12).'
 },
 {
 id: '40',
 text: 'The volumes of two spheres are in a ratio of 1:8. What is the ratio of their radii?',
 type: 'multiple-choice',
 options: ['1:512', '1:64', '1:4', '1:2'],
 correctAnswer: 3,
 explanation: 'Volume ratio = (radius ratio)³. If volume ratio is 1:8, then radius ratio is 1:2.'
 },
 {
 id: '41',
 text: 'The minute hand on a clock is 10 centimeters long and travels through an arc of 108° every 18 minutes.<br><img src="images/question_41.png" class="question-image" alt="Clock showing 108° arc"></img><br>Which measure is closest to the length of the arc the minute hand travels through during this 18-minute period?',
 type: 'multiple-choice',
 options: ['3 cm', '6 cm', '9.4 cm', '18.8 cm'],
 correctAnswer: 3,
 explanation: 'Arc length = (θ/360°) × 2πr = (108°/360°) × 2π(10) ≈ 18.8 cm.'
 },
 {
 id: '42',
 text: 'Which point lies on the circle represented by the equation (x − 1)² + (y − 3)² = 7²?',
 type: 'multiple-choice',
 options: ['(−1, 4)', '(0, 7)', '(1, 3)', '(8, 3)'],
 correctAnswer: 3,
 explanation: 'Substitute each point into the equation to see which satisfies it.'
 },
 {
 id: '43',
 text: 'Select each property that is valid about the diagonals of a square. The diagonals of a square --',
 type: 'multiple-select',
 options: ['are perpendicular', 'bisect each other', 'are congruent', 'are not perpendicular', 'do not bisect each other', 'are not congruent'],
 correctAnswer: [0, 1, 2],
 explanation: 'The diagonals of a square are perpendicular, bisect each other, and are congruent.'
 },
 {
 id: '44',
 text: 'Sarah is filling a glass sphere with decorative sand. The radius of the sphere is 2 inches. Which is closest to the minimum amount of sand Sarah needs to completely fill the glass sphere?',
 type: 'multiple-choice',
 options: ['10.7 cu in.', '25.1 cu in.', '33.5 cu in.', '100.5 cu in.'],
 correctAnswer: 2,
 explanation: 'Volume of sphere = (4/3)πr³ = (4/3)π(2)³ ≈ 33.5 cu in.'
 },
 {
 id: '45',
 text: 'Aaron built a geometrically similar model of the Washington Monument. The height of the actual monument is nearly 555.5 feet. Aaron\'s model is 505 millimeters in height. The width of the base of the actual monument is 55 feet.<br><img src="images/question_45.png" class="question-image" alt="Washington Monument model"></img><br>Which is closest to the width of the base of the model?',
 type: 'multiple-choice',
 options: ['5.05 mm', '50 mm', '55 mm', '60.5 mm'],
 correctAnswer: 1,
 explanation: 'Use proportions: 555.5 ft / 55 ft = 505 mm / x mm. Solve for x.'
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