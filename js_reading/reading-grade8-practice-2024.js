window.TEST_IDENTIFIER = 'reading_grade8_practice_2024';

// Reading passages that can be referenced by multiple questions
const readingPassages = {
  'hummingbirds': {
    title: 'Hummingbirds',
    content: `
     <ol class="paragraph-numbers">
      <li>Hummingbirds are one of nature’s most amazing creatures. Native only to the Western Hemisphere, these small birds are known for their deft flying abilities. They have a unique ability to hover in midair by rapidly flapping their wings as much as 80 times per second. In fact, hummingbirds are named for the distinct humming sound created by this rapid wing beat. Hummingbirds are the only birds that can actually fly backwards, and they can move quickly and easily in almost any direction. Therefore, if you’ve seen a petite bird appearing to dart and hover from one spot to the next, you were most likely watching a hummingbird.</li>

      <li>Hummingbirds use their unique ability to hover in place while feeding on flower nectar. They sip their sweet meals by reaching inside the flower with their narrow bills and split tongues. They also eat hundreds of insects each day. In fact, their flying style requires so much energy that hummingbirds must consume enough food to nearly equal their body weight each day!</li>

      <li>Hummingbirds make delightful and beneficial visitors to any garden. They help pollinate plants and flowers much as bees do. Attracting these fascinating creatures is easy. Simply set up a hummingbird feeder in early spring, and keep it filled with a syrupy mixture. Before long, your garden will be “humming” with activity.</li>

      <li>Hummingbirds are migratory and will leave in late fall when the weather gets too cold. Keep the feeder up two to three weeks after the last hummingbird is spotted. It might serve as a helpful feeding spot for passing hummingbirds migrating south. Don’t worry about delaying their migration, because hummers know when it’s time to leave, even if that means passing up a free lunch!</li>
</ol>
    `
  },

  'leaves': {
    title: 'Among the Leaves',
    content: `
    <center><p><i>Barbara Evans Stanush</i></p></center>
     <ol class="paragraph-numbers">
     <center><p>1</p></center>
      <li>You found it, high amid thick branches</li>
      <li>upright on a twig, plastered with lichen¹</li>
      <li>blending with the live oak.</li><br>

      <li>You spied it, bright-eyed daughter,</li>
      <li>keen to find another life</li>
      <li>among the hard leaves. You climbed</li><br>

      <li>to watch a hummer feeding nestlings;</li>
      <li>their tiny beaks gaped red. The mother</li>
      <li>did not scare. The nest bulged with growing.</li><br>

      <li>You called me to the mystery—-so slight</li>
      <li>I lost the nest each time my stare wavered.</li>
      <li>You balanced on the ladder, took a photograph.</li><br>

      <center><p>2</p></center>
      <li>Opening a box chock full of unclaimed views,</li>
      <li>I gaze at live oak leaves. In black</li>
      <li>and white, a puzzle</li><br>

      <li>until you, long grown and distant, recall</li>
      <li>the hummingbird, remind me of the nest.</li>
      <li>The littlest nest crafted by a mother</li><br>

      <li>who fused spider webs and moss into a bowl</li>
      <li>of softest down and laid two pulsing ovals,</li>
      <li>warmed them, brooded them to flight.</li><br>

      <li>Moments</li>
      <li>hidden in the live oak</li>
      <li>large among the leaves.</li><br>
</ol>

<hr>

<p>¹lichen - a type of moss that grows on trees.</p>
<p>“Among the Leaves” by Barbara Evan Stanush, from Stone Garden, copyright © 1992 by Barbara Evans Stanush. Used by permission of the author.</p>
    `
  },

  'woman': {
    title: 'A Woman of Courage and Conviction',
    content: `
     <ol class="paragraph-numbers">
      <li>With a satisfied smile, Keisha finished writing the last sentence of her English essay. She had written about one of her heroes, Rosa Parks, an important figure in the Civil Rights Movement. Keisha felt inspired by Rosa Parks’ actions, and in her essay she had tried to depict the courage and conviction Rosa Parks had shown the world.</li>

      <li>“Keisha,” her mother shouted from downstairs. “It’s almost 4:15. Have you finished your homework?”</li>

      <li>“I finished a minute ago, Mom,” Keisha answered. “Don’t worry, I won’t be late getting to the assisted living center. I just have to put some things in my backpack.” Keisha pulled down a collection of Maya Angelou’s poetry as well as a book of funny anecdotes from her bookshelf. She liked to be prepared with a selection of literature to read to the center’s residents. On an impulse, she added her English notebook as well.</li>

      <li>Keisha ran down the stairs, poked her head into the kitchen, and said, “I’ll be back by 5:45, Mom. See you later.” Keisha grabbed her jacket and ran out the door. She had to jog the three blocks to the center to make it by 4:30, when her hour of volunteering began.</li>

      <li>As Keisha came running in the door, Mrs. Ellis, the assisted living center manager, told Keisha, “We have a new resident this week. She’s still adjusting to her new surroundings, and I think you’ll be able to make friends with her.”</li>

      <li>“What’s her name?” Keisha asked, nervously wondering what this new woman was like.</li>

      <li>“Her name is Ruby Watson, and she’s lived in Alabama all her life until now,” Mrs. Ellis explained. “Her only daughter lives here in the city and wants her mother to be near. You’ll find Mrs. Watson in Room 28. And by the way, Keisha, good luck.”</li>

      <li>Keisha walked down the hallway to Room 28 at a quick, determined pace. She knocked on the door and heard a strong voice ask what she wanted. The door stuck stubbornly as Keisha tried the handle, so she used her shoulder to push it open. Walking into the room, she met the gaze of two piercing brown eyes staring at her suspiciously.</li>

      <li>“I’m Keisha Jackson, a student volunteer,” Keisha explained as she walked over to Mrs. Watson and sat down in the chair beside her. “I come here every Thursday afternoon to help pass the time with residents, or read to them, or, or ...” Keisha started to stumble over her words as Mrs. Watson continued to stare at her with an almost belligerent gaze.</li>

      <li>“I didn’t request anyone to keep me company,” Mrs. Watson interrupted. “I’m alone most of the time, and that’s how I prefer it.”</li>

      <li>“But it must be nice to see your daughter,” Keisha said, hoping to give the conversation a more positive turn.</li>

      <li>“My daughter has to work two jobs, so she seldom comes here to visit me,” Mrs. Watson said. “And my two grandchildren are so involved with their school activities that they hardly have time to come see me.”</li>

      <li>Keisha decided that a change of subject would be beneficial. “I brought along some books to read,” she said, pulling the books out of her backpack. “I have Maya Angelou’s poetry and a book of funny stories.”</li>

      <li>“I don’t like poetry, and I’m not in the mood for funny stories,” Mrs. Watson retorted. “What else do you have?”</li>

      <li>Nervously, Keisha pulled out her English notebook and opened it to her essay. She read the title aloud: “Rosa Parks: A Woman of Courage and Conviction.” She glanced at Mrs. Watson to see what kind of reaction she might have, but to her surprise, Mrs. Watson’s face had relaxed and her eyes shone with anticipation.</li>

      <li>“Read to me about Rosa,” Mrs. Watson said.</li>

      <li>At first, Keisha read the essay haltingly, but she soon fell into the natural, dramatic rhythm of her narrative. She read how Rosa Parks had staunchly refused to give up her seat on a segregated bus to a white passenger in 1955; then she read how Rosa’s action had inspired the Montgomery Bus Boycott, a protest that became a turning point in the struggle for civil rights.</li>

      <li>After Keisha read her last sentence, she looked at Mrs. Watson’s face. It was lit by a radiantly happy smile.</li>

      <li>“I marched in Montgomery too, you know,” Mrs. Watson said with pride. “I walked with Rosa Parks and Dr. Martin Luther King, Jr. The march was the greatest moment of my life because ...” Mrs. Watson paused, seemingly overwhelmed by her memory of the event.</li>

      <li>Keisha finished the sentence for her. “Because ... you were a woman of courage and conviction too.”</li>

      <li>“Yes,” Mrs. Watson said, sitting up straighter. “Yes, I was a woman of courage and conviction too, and I still am. Thank you for reminding me, Keisha.”</li>\
      
      <li>“Mrs. Watson, I’d like to see you again next Thursday, if that’s okay,” Keisha asked, hoping her voice wasn’t shaking with the emotions she felt.</li>

      <li>“Next Thursday will be fine, Keisha, just fine,” Mrs. Watson said with a warm smile. “And next time we see each other, I’ll tell you some of my stories.”</li>

      <li>“I’d like that,” Keisha answered. “I’d like that very much.”</li>
</ol>
    `
  },

  'harlem': {
    title: 'The Harlem Renaissance',
    content: `
    <ol class="paragraph-numbers">
      <li>Between World War I and the Great Depression, two of America’s most devastating events, an important cultural movement began to evolve in the heart of New York City. Beginning about 1920, it was called the Harlem Renaissance. Its name reveals its similarity to the European Renaissance, a golden age of art and literature during the 14th to 16th centuries. During this European Renaissance, geniuses like William Shakespeare and Leonardo da Vinci led the Western world out of the darkness of the Middle Ages.</li>

      <li>The Harlem Renaissance of the 1920s also gave rise to a group of highly talented artists. The resemblance ends there, however. The Harlem Renaissance owed little to European- influenced cultures or the dominant culture of early- 20th century America. Instead, this artistic awakening was created exclusively by African Americans, and it occurred at the perfect time.</li>

      <p><b>The Power of Hope</b></p>
      <li>In 1920, America was ripe for change; it needed a renewal of hope. World War I had cost more than $32 billion, and more than 100,000 American soldiers had been killed or wounded. Despite the continuing existence of racism in much of America, thousands of African Americans had served their country in the war. When the war ended, these soldiers returned to an America where social injustice was still tolerated and jobs were difficult to find.</li>

      <li>Many African Americans looked northward for the chance to rebuild their lives. It was a trend that had begun after the Civil War, when newly freed Southern slaves had moved north hungering for opportunity. After World War I, African Americans again gravitated to the larger Northern cities. Harlem, a large neighborhood in New York City, appeared to offer the kind of fresh start they were seeking. In fact, by the early 1920s, African Americans in Harlem had grown into a large but closely knit community. Conditions were not ideal, but the African American residents of Harlem shared similar cultural, social, and artistic values. Among the thousands attracted to the possibilities of Harlem was a select group of highly gifted artists who turned this former Dutch village into a hub of creativity.</li>

      <p><b>A New Sound Emerges</b></p>
      <li>It was called “jazz,” and no one had ever heard anything like it. A blend of traditional African rhythms, gospel, and blues, this new musical style was completely original. Not only did jazz express the African American experience, but its fluid, free- form nature also encouraged musicians to improvise and express themselves.</li>

      <li>Though jazz originated in New Orleans, its irresistible sound had made its way to New York’s Harlem. Jazz could be heard everywhere, from street corners to nightclubs. It was in these clubs that the most accomplished jazz musicians got their start. Louis Armstrong, Cab Calloway, and many others became legends. Soulful jazz singers like Billie Holiday and Bessie Smith were instant celebrities. Harlem’s finest musicians soon helped make jazz an international sensation.</li>

      <img src="images/armstrong.png" alt="Image failed to load. Please try again later." style="width: 150px; margin: 10px;">

      <p><b>Literature and Art Abound</b></p>
      <li>Despite the powerful influence of jazz, the foundation of the Harlem Renaissance was not made from music alone. African American writers such as Ralph Ellison and Zora Neale Hurston provided their own observations of African American life. They challenged others to examine prejudice and its damage to society and individuals. The words of gifted poets Langston Hughes and Countee Cullen revealed the complex and contradictory world of the African American experience, with all its joys and injustices.</li>

      <li>Meanwhile, the talented painter Jacob Lawrence, opera singer Marian Anderson, jazz dancer Josephine Baker, and scores of actors, sculptors, and playwrights made timeless contributions to the vision shaping the Harlem Renaissance.</li>

      <p><b>A Beginning, Not an End</b></p>
      <li>The convergence of talent that spontaneously came together during the Harlem Renaissance was nothing short of amazing. These gifted artists arrived in Harlem looking for hope, and what resulted was the blossoming of a new African American identity.</li>

      <li>The Harlem Renaissance began to decline in the late 1930s when the Great Depression crushed the nation’s economy. This sent most Americans into crisis, and time spent creating turned into time spent surviving. The heritage of the Harlem Renaissance is alive and well, however. The vision of its participants is a permanent part of our collective American culture. Their music, words, and art seem as fresh and powerful today in the 21st century as they were then.</li>

      <li>Perhaps the most important achievement of the Harlem Renaissance is the enduring knowledge that all citizens are entitled to a chance at greatness. Whenever such opportunities have flourished, the world’s supply of cultural treasures has also grown. The Harlem Renaissance was one of America’s shining moments.</li>
</ol>
    `
  },

  'habitats': {
    title: 'Delicate Habitats of the Ocean',
    content: `
    <img src="images/habitats.png" alt="Image failed to load. Please try again later." style="height: 150px; margin: 10px;">
     <ol class="paragraph-numbers">
      <li>Coral reefs and the ocean communities that surround them are some of the most beautiful and diverse ecosystems in the world. From Australia’s Great Barrier Reef to Virginia’s Chesapeake Bay, coral reefs are large and complex ocean systems. They provide food and shelter for thousands of fish and other ocean creatures. These coral reefs, while they are massive marine structures, actually depend on tiny ocean organisms and specific water conditions to survive and flourish.</li>

      <li>Coral is a structure of tiny animals called polyps that live fixed in one place. Many singular polyps band together and form larger colonies called reefs. The polyps have tentacles that stretch out to catch and feed on microscopic plankton and other marine animals. Coral has a hard skeleton made of calcium. As the polyps die, they leave behind their skeletons, which creates a reef, the structural base for the entire colony. Over time the structure grows upward, sometimes as much as ten centimeters a year. The newest polyps of the coral colony live at the top of the structure. The polyps can retreat quickly into their hard outer skeletons to escape predators.</li>

      <li>Corals grow in a variety of shapes, sizes, and colors. Species such as brain coral and fan coral take shapes that fit their names. Whip coral, which has a thin branchlike structure reaching up to three feet in length, is native to the Chesapeake Bay and provides an important habitat for the bay’s black sea bass. The deep purple branches of whip coral can be found in the lower bay on rocks and pilings and human- made structures below the water’s surface, such as bridge supports.</li>

      <li>When polyp colonies become established, the coral reefs provide a home for many sea creatures. Marine sponges, sea slugs, jellyfish, sea anemones, sea turtles, and a variety of fish depend on reefs for both food and shelter. In fact, more than 4,000 species of fish and marine life may populate a typical coral community. Some species, such as anemones, attach themselves to the surface of the reef, while others, such as sea slugs, seek protection within it.</li>

      <li>Most types of corals have a cooperative relationship with algae, which benefits both organisms. Algae plants live among the coral polyps and, through the process of photosynthesis, produce food they share with the coral. In return, the reef’s structure provides protection for the algae. Algae need light for photosynthesis, and coral reefs are found in shallow water where light can easily reach the structures algae inhabit.</li>

      <li>In recent years scientists and researchers have observed a troubling trend in these delicate ocean communities. Reefs around the world are being stressed by changes in the oceans’ temperatures and chemical balances. These changes are damaging the relationship between the coral and the algae. When ocean water warms or coral is stressed in some other way, coral views algae as a foreign substance rather than a food source and rejects the algae. In addition, the increasing level of acidity in the oceans makes it harder for coral to build its skeletal structure and may even dissolve existing coral skeletons. This damage affects all the marine creatures that depend on the reef for survival.</li>

      <li>There are positive developments, however, in the efforts to preserve the world’s coral reefs. The reefs themselves are helping scientists combat harmful environmental changes. Scientists hope that by learning more about how coral and algae coexist, species can be identified and better protected.</li>

      <li>Along with other management programs, the state of Virginia is constructing artificial reefs in order to provide feeding grounds and shelter for endangered reef- dwelling fish. These reefs are made of old tires and sunken ships, and since the 1990s the program has been using a new concrete, igloo- shaped structure. The Virginia Artificial Reef Program has created more than 23 artificial reef sites that replicate natural ocean reefs and attract fish and other ocean creatures.</li>

      <li>Coral reefs are beautiful habitats that provide food and shelter for fish and other marine animals. The reefs have an amazing ability to thrive, but changes in oceanic conditions are damaging these important habitats. However, scientists are working successfully to learn more about protecting the world’s coral reefs.</li>
</ol>
    `
  },

   'swift': {
    title: 'The Black Swift',
    content: `
    <ol class="paragraph-numbers">
      <li>It was on the third day that Joanna finally saw the bird.</li>

      <li>Joanna was perched on a boulder enjoying the warmth of the summer sun and trying not to think about her old school and friends. The splashing of the waterfall nearby drowned out most other noises, so it took Joanna a moment to hear another sound, high-pitched and repeated.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>Looking around, Joanna saw trees, both evergreen and leafy, and the pool of water at the base of the waterfall that fed a healthy stream running downhill. She also noted the rocky slope of the trail as it led upward behind her, farther into the mountain. Then she heard it again.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>Joanna had been to this waterfall twice before. Her family had just relocated to Colorado, and upon their arrival, as the moving van was still being unloaded, Joanna had immediately asked if she could go for a ride to explore her new neighborhood.</li>

      <li>“Take the walkie-talkie with you,” her mother had said that day, handing her one of the receivers they often used to communicate back in their old neighborhood.</li>

      <li>As Joanna pedaled away on her bicycle, she called back, “First I’ll just do some preliminary scouting.”</li>

      <li>The truth was that she was running away.</li>

      <li>"Not <i>literally</i> running away, of course, but getting out of her new house, away from the boxes that needed unpacking, and away from the neighbors who wanted to meet the “new girl.” She wanted to clear her mind of her worries. Would she like her new school? How would she make friends in this unfamiliar place? Would she be able to adjust? Joanna had seen signs that a state park was nearby, and by luck, she chanced upon one of its trail markers just a mile away.</li>

      <li>Joanna locked up her bike, read the park rules, studied the maps at the outdoor kiosk, and started hiking up the trail. After a half-hour’s ascent of fairly steep climbing, she noticed the trail leveled off into a little clearing. It was like a landing halfway up a stairway, insulated by trees and a waterfall cascading into a pool from twenty feet up.</li>

      <li>The setting was beautiful, and Joanna had felt her fears evaporate amid the soft ferns and the mist of the waterfall. In the following days, when she was not unpacking at home, Joanna had returned several times to this comforting place.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>The sound jolted Joanna back to the present. Her watchful eyes now detected movement by the side of the waterfall. Standing slowly and creeping a step closer, she saw that there, clinging to a wet, mossy rock about twelve feet above the pool, was a small bird.</li>

      <li>The bird tilted its head to study Joanna with one of its large eyes. Its feathers were mostly black, camouflaging its body against the dark, wet rocks. The bird had a gray head the color of soot, and its eyes, two onyx stones, were surrounded with black, as if rimmed in eye makeup.</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>Now Joanna understood what she was hearing—-it must be a call for help! Somehow the little fellow must have become stranded or injured; perhaps it was unable to fly. The little black bird managed to hang on to the rock despite the slippery moss and being pelted by the spray of the waterfall. <i>The poor thing is probably miserable</i>, Joanna thought, <i>but what can I do?</i></li>

      <li>Remembering that the park map showed a ranger station higher up the trail, Joanna began hiking to get help. The trail above the waterfall was a more arduous, rockier climb, but she managed to reach the ranger station. A uniformed ranger in a wide--brimmed green hat stood on the porch, gazing across the canopy of the forest through large binoculars.</li>

      <li>“I’m really sorry to bother you, but I think there’s a bird in distress down at the waterfall. I’m not sure what to do,” she said.</li>

      <li>The ranger, whose nametag read “Dan,” shook his head. “No bother. Besides, I’m always looking for an excuse to hike down to the waterfall. Let’s have a look.”</li>

      <li>Later, approaching the clearing from above, Joanna apologized again. “I’m really sorry to drag you all the way down here.” Entering the glade, she looked toward the location where the bird had been. “It was right there!” she said, starting to turn crimson with embarrassment.</li>

      <li>Dan smiled patiently. “That’s okay,” he said, “maybe it found a way—-”</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>“There it is!” said Joanna excitedly. “Did you hear it?”</li>

      <li>Dan slowly brought a finger to his lips in a “shushing” gesture and moved backward, away from the waterfall to where the trail led downhill. Once they were a little farther away, Joanna couldn’t endure the suspense anymore. “Don’t tell me; it’s actually a <i>dangerous</i> bird?” she whispered.</li>

      <li>The ranger’s face looked awestruck. “Just fix your eyes on the waterfall,” he suggested. A few moments later, a black bird with a gray head and curved wings slowly emerged from behind the watery mist.</li>

      <li>“I can’t believe it,” Dan breathed. “That’s not a dangerous bird, but it is a mysterious one. It’s called a black swift.”</li>

      <li>Joanna shrugged and waited for an explanation.</li>

      <li>“Let me put it this way,” Dan said. “I’ve been a birdwatcher for a long time, and I’ve never seen one. Black swifts are unusual birds because they nest only on sea cliffs or behind waterfalls, like this one, which makes it hard to observe them in their natural habitat.”</li>

      <li>Joanna watched the bird inching along the rocks. “So it’s not actually injured?” As Joanna spoke, the bird jumped off the rock and disappeared instantly from sight, like an arrow shot from a bow.</li>

      <li>“No,” Dan laughed. “It looks pretty healthy to me. The black swift flies so fast and so high, it was once nicknamed ‘the cloud dweller.’”</li>

      <li><i>A bird called a “cloud dweller” that nests behind waterfalls</i>, Joanna thought. <i>How cool is that?</i></li>

      <li>“It’s fortunate we heard it,” said Dan. “Black swifts are usually silent, but sometimes around their nests you might hear a—-”</li>

      <li><i>Plik-plik-plik-plik!</i></li>

      <li>The ranger and the girl looked at each other because both had heard the quieter, high- pitched call clearly. “It sounds like there’s a <i>family</i> of black swifts back there,” said Dan. “This is a rare discovery.”</li>

      <li>Joanna gazed at the waterfall. This dark, cold, wet environment didn’t seem like it would make a good home, and yet this little family of birds was thriving here. They had adapted to a difficult, even treacherous environment to make a home here. She had assumed the bird needed help, but really it was going to get along just fine.</li>
</ol>
    `
  }
};

const sampleQuestions = [
  {
    id: '1',
    text: 'Read this dictionary entry. <div class="passage-dicbox"><b>dis•tinct</b> (dĭ-stĭngkt´) <i>adj.</i> <b>1.</b> Not identical; separate. <b>2.</b> Easily recognized; clear. <b>3.</b> Obviously defined; unquestionable. [Lat. <i>dīstīnctus</i>, p. part. of distinguish]</div> In paragraph 1 of the article, <u>distinct</u> comes from a word that means--',
    type: 'multiple-choice',
    passageId: ['hummingbirds', 'leaves'],
    options: [
      'separate',
      'clear', 
      'unquestionable',
      'distinguish'
    ],
    correctAnswer: 3,
    explanation: 'The etymology shows distinct comes from Latin "dīstīnctus," the past participle of "distinguish."'
  },

  {
    id: '2', 
    text: 'Based on the article, the reader can determine that hummingbirds —',
    type: 'multiple-choice',
    passageId: ['hummingbirds', 'leaves'],
    options: [
      'compete with bees for nectar',
      'live primarily in warm climates', 
      'become confused when flying backwards',
      'rely on bird feeders in order to survive'
    ],
    correctAnswer: 1,
    explanation: 'Hummingbirds migrate south when it gets cold and are native to the Western Hemisphere, suggesting they prefer warm climates.'
  },

  {
    id: '3',
    text: 'In the poem, the hummingbird\'s nest is a symbol of--',
    type: 'multiple-choice',
    passageId: ['hummingbirds', 'leaves'],
    options: [
      'lost opportunities',
      'former relationships', 
      'distant childhood',
      'past adventures',
    ],
    correctAnswer: 2,
    explanation: 'The speaker recalls finding the nest with her daughter long ago, and the memory represents her daughter\'s now-distant childhood.'
  },

  {
    id: '4',
    text: 'Both the poem and the article address the theme of--',
    type: 'multiple-choice',
    passageId: ['hummingbirds', 'leaves'],
    options: [
      'enjoying nature',
      'studying the weather',
      'developing a hobby',
      'holding on to memories'
    ],
    correctAnswer: 0,
    explanation: 'Both selections focus on observing and appreciating hummingbirds in their natural environment.'
  },

  {
    id: '5',
    text: 'In paragraph 7, Mrs. Ellis wishes Keisha good luck most likely because she thinks Keisha--',
    type: 'multiple-choice', 
    passageId: 'woman',
    options: [
      'will need help finding Mrs. Watson\'s room',
      'is unprepared for visiting Mrs. Watson',
      'will be challenged by Mrs. Watson\'s attitude',
      'is worried about reading to Mrs. Watson'
    ],
    correctAnswer: 2,
    explanation: 'Mrs. Ellis says Mrs. Watson is "still adjusting" and adds "good luck," suggesting Mrs. Watson may be difficult.'
  },

  {
    id: '6',
    text: 'The purpose of the figurative language in paragraph 8 is to foreshadow--',
    type: 'multiple-choice', 
    passageId: 'woman',
    options: [
      'Mrs. Watson\'s response to Keisha\'s essay',
      'Keisha\'s feelings toward Mrs. Watson',
      'Keisha\'s attitude about volunteering',
      'Mrs. Watson\'s first reaction to Keisha'
    ],
    correctAnswer: 3,
    explanation: 'Mrs. Watson\'s "piercing brown eyes staring at her suspiciously" foreshadows her hostile initial reaction to Keisha.'
  },

  {
    id: '7',
    text: 'Read this sentence from paragraph 9. <div class="passage-innerbox">Keisha started to stumble over her words as Mrs. Watson continued to stare at her with an almost <u>belligerent</u> gaze.</div> What is the meaning of the word <u>belligerent</u>?',
    type: 'multiple-choice',
    passageId: 'woman',
    options: [
      'strangely familiar',
      'hostile or argumentative', 
      'weak or exhausted',
      'overly exaggerated'
    ],
    correctAnswer: 1,
    explanation: 'Mrs. Watson\'s unfriendly behavior and statement that she prefers being alone shows her gaze is hostile or argumentative.'
  },

  {
    id: '8',
    text: 'In paragraphs 8 and 9, the author\'s tone can best be described as--',
    type: 'multiple-choice',
    passageId: 'woman', 
    options: [
      'confused',
      'regretful',
      'tense', 
      'disappointed'
    ],
    correctAnswer: 2,
    explanation: 'The stuck door, suspicious staring, stumbling over words, and uncomfortable interaction create a tense atmosphere.'
  },

  {
    id: '9',
    text: 'Which event is part of the resolution of the story?',
    type: 'multiple-choice',
    passageId: 'woman',
    options: [
      'Mrs. Watson agrees that Keisha should return the following Thursday.',
      'Mrs. Ellis tells Keisha to visit Mrs. Watson in her room.',
      'Keisha reads her English essay about Rosa Parks to Mrs. Watson.',
      'Mrs. Watson tells Keisha she would rather be alone.',
    ],
    correctAnswer: 0,
    explanation: 'Mrs. Watson agreeing to see Keisha again resolves their conflict and shows their relationship has changed positively.'
  },

  {
    id: '10',
    text: 'Read this thesaurus entry. <div class="passage-dicbox"><b>evolve</b> <i>v.</i> — adapt, develop, increase, mature.</div> Which word best replaces <u>evolve</u> as it is used in paragraph 1?',
    type: 'multiple-choice',
    passageId: 'harlem',
    options: [
      'adapt',
      'develop',
      'increase',
      'mature',
    ],
    correctAnswer: 1,
    explanation: 'The Harlem Renaissance "began to evolve," meaning it started to develop or come into being as a movement.'
  },

  {
    id: '11',
    text: 'Based on paragraph 4, what can the reader determine?',
    type: 'multiple-choice',
    passageId: 'harlem',
    options: [
      'African Americans were attracted to Harlem for a variety of reasons after World War I.',
      'African Americans encountered less social injustice in Harlem than in other places.',
      'African Americans became a majority of the population in Harlem in the 1920s.',
      'African Americans in Harlem were more successful than those who lived elsewhere.',
    ],
    correctAnswer: 0,
    explanation: 'The paragraph mentions multiple attractions: opportunity, fresh start, and a closely knit community with shared values.'
  },

  {
    id: '12',
    text: 'The organization of the ideas in "Literature and Art Abound" supports the author\'s purpose by--',
    type: 'multiple-choice',
    passageId: 'harlem',
    options: [
      'listing examples of writers and artists who shared their talents',
      'comparing and contrasting the popularity of writers and artists',
      'explaining the effects of the writers\' and artists\' works on society',
      'presenting the writers\' and artists\' works in order of importance'
    ],
    correctAnswer: 0,
    explanation: 'The section lists various artists—Ellison, Hurston, Hughes, Cullen, Lawrence, Anderson, Baker—showing the breadth of talent.'
  },

  {
    id: '13',
    text: 'Which sentence from "A Beginning, Not an End" best represents the main idea of the section?',
    type: 'multiple-choice',
    passageId: 'harlem',
    options: [
      'These gifted artists arrived in Harlem looking for hope, and what resulted was the blossoming of a new African American identity.',
      'The Harlem Renaissance began to decline in the late 1930s when the Great Depression crushed the nation\'s economy.',
      'This sent most Americans into crisis, and time spent creating turned into time spent surviving.',
      'Their music, words, and art seem as fresh and powerful today in the 21st century as they were then.',
    ],
    correctAnswer: 3,
    explanation: 'This sentence emphasizes the lasting impact of the Harlem Renaissance, showing it was a beginning with enduring influence.'
  },

  {
    id: '14',
    text: 'Which detail best supports the idea that Harlem was a center of growth for jazz music in America?',
    type: 'multiple-choice',
    passageId: 'harlem',
    options: [
      'Harlem had nightclubs where musicians played jazz.',
      'Jazz musicians in Harlem were known for improvising.',
      'Famous jazz musicians pursued their careers in Harlem.',
      'Jazz helped musicians in Harlem express themselves.',
    ],
    correctAnswer: 2,
    explanation: 'Armstrong, Calloway, Holiday, and Smith becoming legends in Harlem shows it was where jazz musicians developed their careers.'
  },

  {
    id: '15',
    text: 'The details in paragraph 2 are mostly about —',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'what polyp skeletons look like',
      'what polyps use to catch their food',
      'how large coral structures can grow',
      'how coral structures are formed',
    ],
    correctAnswer: 3,
    explanation: 'The paragraph explains how polyps form colonies, leave skeletons behind, and build up structures over time.'
  },

  {
    id: '16',
    text: 'Read this sentence from paragraph 4. <div class="passage-innerbox">In fact, more than 4,000 species of fish and marine life may <u>populate</u> a typical coral community.</div> In this sentence, <u>populate</u> means--',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'construct',
      'disturb',
      'occupy',
      'recognize',
    ],
    correctAnswer: 2,
    explanation: 'The species "populate" (live in or occupy) the coral community, making their home there.'
  },

  {
    id: '17',
    text: 'The organization of ideas in paragraph 6 supports the author\'s message by--',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'comparing several recent observations made by scientists who study the oceans',
      'emphasizing the most important differences among inhabitants of a reef',
      'outlining ways in which changes in water temperature affect a coral reef',
      'describing in chronological order the events that occur in the ocean',
    ],
    correctAnswer: 2,
    explanation: 'The paragraph explains how warming water causes coral to reject algae and how acidity affects coral structure.'
  },

  {
    id: '18',
    text: 'The use of the word "however" indicates that paragraph 7 is organized by--',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'generalization',
      'comparison/contrast',
      'problem/solution',
      'listing',
    ],
    correctAnswer: 1,
    explanation: '"However" signals a contrast between the negative trends in paragraph 6 and positive developments in paragraph 7.'
  },

  {
    id: '19',
    text: 'The word <u>co</u>exist in paragraph 7 has the prefix <u>co</u>-, which means--',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'together',
      'in abundance',
      'near',
      'in the past',
    ],
    correctAnswer: 0,
    explanation: 'Coexist means to exist together, with "co-" meaning together or jointly.'
  },

  {
    id: '20',
    text: 'Which information best demonstrates that coral reefs are important to marine life?',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'Coral reefs are massive structures in the seas.',
      'Sea anemones attach themselves to the coral reefs.',
      'Coral reefs are made of skeletal calcium.',
      'Many ocean creatures survive because of coral reefs.',
    ],
    correctAnswer: 3,
    explanation: 'The fact that many creatures depend on reefs for survival directly shows their importance to marine life.'
  },

  {
    id: '21',
    text: 'Which information from the article explains the cooperative relationship between algae and reef-dwelling coral?',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'Coral and algae share the coral reef with other marine animals.',
      'The algae plants grow on the coral reef, and the coral polyps live on the reef.',
      'The algae share food with the coral, and the coral shelters the algae.',
      'Changes that affect the coral also affect how the coral appears to the algae.'
    ],
    correctAnswer: 2,
    explanation: 'Paragraph 5 explains algae produce food for coral through photosynthesis while coral provides protection for algae.'
  },

  {
    id: '22',
    text: 'Why are coral reefs ideal for the growth of algae?',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'Reefs are home to marine sponges and sea turtles.',
      'Reefs are found in shallow waters and receive plenty of sunlight.',
      'Coral polyps gather together and grow into large colonies.',
      'Coral reefs form a large and complex ocean system.'
    ],
    correctAnswer: 1,
    explanation: 'Paragraph 5 states algae need light for photosynthesis and reefs are in shallow water where light reaches them.'
  },

  {
    id: '23',
    text: 'How do warming ocean temperatures affect coral?',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'Coral no longer accepts algae as a food source.',
      'Coral begins to form on structures made by humans.',
      'Coral structures no longer offer protection to polyps.',
      'Coral begins building a strong skeleton.',
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 6 explains when water warms, "coral views algae as a foreign substance rather than a food source and rejects the algae."'
  },

  {
    id: '24',
    text: 'Based on the article, the reader can determine that--',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'artificial reefs are more attractive to fish',
      'coral reefs are not found in deeper water',
      'scientists cannot save the coral reefs',
      'concrete is the only material used in artificial reefs',
    ],
    correctAnswer: 1,
    explanation: 'Paragraph 5 states reefs are in shallow water where light can reach them, implying they\'re not in deep water.'
  },

  {
    id: '25',
    text: 'Based on the article, the author most likely wants the reader to agree that--',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'humans should leave coral reefs untouched',
      'catching fish in coral reefs is harmful',
      'coral is the most beautiful creature in the ocean',
      'preserving coral reefs is important',
    ],
    correctAnswer: 3,
    explanation: 'The article discusses threats to reefs and preservation efforts, emphasizing the importance of protecting them.'
  },

  {
    id: '26',
    text: 'By describing the ocean\'s habitat as "delicate," the author intends to--',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'explain why the habitat is likely to survive for only a few more years',
      'emphasize how some types of corals form thin structures',
      'emphasize that an altered habitat can be dangerous for creatures living there',
      'explain that sea creatures are more fragile than creatures living on land',
    ],
    correctAnswer: 2,
    explanation: 'The article shows how small changes in temperature and acidity can damage the entire reef ecosystem.'
  },

  {
    id: '27',
    text: 'Which information should be included in a summary of this article?',
    type: 'multiple-choice',
    passageId: 'habitats',
    options: [
      'Sea slugs hide among coral reefs for protection.',
      'Reefs have been created by sinking old ships.',
      'Whip corals provide a habitat for black sea bass.',
      'Recent ocean changes have been affecting coral reefs.',
    ],
    correctAnswer: 3,
    explanation: 'The impact of recent environmental changes on reefs is a major theme, unlike the other specific details.'
  },

  {
    id: '28',
    text: 'Which type of literary device does the author use in paragraphs 6-12?',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'Symbolism',
      'Flashback',
      'Foreshadowing',
      'Ironic tone',
    ],
    correctAnswer: 1,
    explanation: 'Joanna remembers her first visits to the waterfall and her move to Colorado, using flashback to provide background.'
  },

  {
    id: '29',
    text: 'In paragraph 8, the word <u>preliminary</u> means--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'initial',
      'essential',
      'additional',
      'substantial',
    ],
    correctAnswer: 0,
    explanation: 'Joanna says she\'ll do "preliminary scouting" first, meaning initial exploration before more thorough investigation.'
  },

  {
    id: '30',
    text: 'Read this sentence from paragraph 15. <div class="passage-innerbox">The bird had a gray head the color of soot, and its eyes, two onyx stones, were surrounded with black, as if rimmed in eye makeup.</div> The purpose of the figurative language in this sentence is to--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'convey the bird\'s actions',
      'explain a defense strategy of the bird',
      'illustrate the bird\'s surroundings',
      'describe physical characteristics of the bird',
    ],
    correctAnswer: 3,
    explanation: 'Comparisons to soot, onyx stones, and eye makeup help readers visualize the bird\'s physical appearance.'
  },

  {
    id: '31',
    text: 'Which word is the best antonym for <u>arduous</u> in paragraph 18?',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'moderate',
      'satisfying',
      'effortless',
      'direct',
    ],
    correctAnswer: 2,
    explanation: 'Arduous means difficult or requiring effort, so effortless (requiring no effort) is the opposite.'
  },

  {
    id: '32',
    text: 'Paragraph 18 suggests that Joanna--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'is determined to rescue the bird',
      'has hiked to the ranger station before',
      'is nervous about the hiking trail',
      'knows the park ranger studies birds',
    ],
    correctAnswer: 0,
    explanation: 'Despite the "arduous, rockier climb," Joanna "managed to reach the ranger station," showing her determination to help.'
  },

  {
    id: '33',
    text: 'In paragraph 25, what is Dan\'s most logical reason for moving away from the waterfall?',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'He realizes they are going in the wrong direction.',
      'He wants to have a better view of the bird.',
      'He realizes the sound they hear could be imitated.',
      'He wants to avoid startling the bird.',
    ],
    correctAnswer: 3,
    explanation: 'Dan makes a "shushing" gesture and moves them away to avoid disturbing the rare black swift.'
  },

  {
    id: '34',
    text: 'The simile in paragraph 30 emphasizes that--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'Joanna is patient',
      'Joanna is curious',
      'the bird is slender',
      'the bird is quick',
    ],
    correctAnswer: 3,
    explanation: 'The bird disappears "like an arrow shot from a bow," emphasizing its incredible speed.'
  },

  {
    id: '35',
    text: 'Joanna presumes the bird is in distress because it--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'is clutching on to a rock within the glades',
      'has black markings surrounding its eyes',
      'is shrouded behind the cascading waterfall',
      'looks fixedly at her while crooking its neck',
    ],
    correctAnswer: 0,
    explanation: 'Paragraph 17 shows Joanna thinks the bird is stranded because it\'s "hanging on to the rock despite the slippery moss."'
  },

  {
    id: '36',
    text: 'In the story, Joanna is--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'able to adapt easily to new situations',
      'overconfident about her abilities',
      'quick to respond to a problem',
      'comfortable with making mistakes',
    ],
    correctAnswer: 2,
    explanation: 'Joanna immediately goes to get help when she thinks the bird is in trouble, showing quick response to problems.'
  },

  {
    id: '37',
    text: 'The repetition of "<i>Plik-plik-plik-plik!</i>" creates a feeling of--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'hope',
      'suspense',
      'amusement',
      'peacefulness',
    ],
    correctAnswer: 1,
    explanation: 'The repeated mysterious sound builds tension as Joanna tries to locate and understand its source.'
  },

  {
    id: '38',
    text: 'The point of view used in the story best helps the reader understand--',
    type: 'multiple-choice',
    passageId: 'swift',
    options: [
      'how Joanna reaches the park',
      'how Dan feels about seeing the bird',
      'why Joanna visits the park',
      'why Dan hikes to the waterfall',
    ],
    correctAnswer: 2,
    explanation: 'Third-person limited perspective reveals Joanna\'s thoughts about escaping her worries about her new life and school.'
},

{
id: '39',
text: 'A theme of the story is that--',
type: 'multiple-choice',
passageId: 'swift',
options: [
'finding a new challenge is important for personal growth',
'adjusting to an unfamiliar environment can be easier than expected',
'solving a problem is possible with the help of a guide',
'investigating a mystery can lead to an unexpected adventure',
],
correctAnswer: 1,
explanation: 'Joanna realizes the black swift family thrives in a difficult environment, paralleling her own ability to adapt to Colorado.'
}
];

// Make questions available globally
window.sampleQuestions = sampleQuestions;

// ========================================
// READING PANEL MANAGEMENT
// ========================================

let isReadingPanelOpen = false;
let currentPassageId = null;

// Track current passage state for tabs
let currentPassageIds = [];
let currentActivePassageIndex = 0;

function openReadingPanel() {
  const panel = document.getElementById('reading-panel');
  const testContainer = document.querySelector('.test-container');
  
  if (panel) {
    panel.classList.add('open');
    isReadingPanelOpen = true;
  }
  
  if (testContainer) {
    testContainer.classList.add('panel-open');
  }
}

function closeReadingPanel() {
  const panel = document.getElementById('reading-panel');
  const testContainer = document.querySelector('.test-container');
  
  if (panel) {
    panel.classList.remove('open');
    isReadingPanelOpen = false;
  }
  
  if (testContainer) {
    testContainer.classList.remove('panel-open');
  }
  
  // Hide tabs when closing panel
  const tabsContainer = document.querySelector('.passage-tabs-container');
  if (tabsContainer) {
    tabsContainer.classList.remove('active');
  }
}

/**
 * Initialize the passage tabs container in the reading panel
 */
function initPassageTabs() {
  const readingPanel = document.querySelector('.reading-panel');
  if (!readingPanel) return;
  
  // Check if tabs container already exists
  let tabsContainer = document.querySelector('.passage-tabs-container');
  if (tabsContainer) return;
  
  // Create tabs container
  tabsContainer = document.createElement('div');
  tabsContainer.className = 'passage-tabs-container';
  tabsContainer.setAttribute('role', 'tablist');
  tabsContainer.setAttribute('aria-label', 'Passage selection');
  
  // Create the tabs wrapper
  const tabsWrapper = document.createElement('div');
  tabsWrapper.className = 'passage-tabs';
  tabsContainer.appendChild(tabsWrapper);
  
  // Insert after header, before content
  const header = readingPanel.querySelector('.reading-panel-header');
  const content = readingPanel.querySelector('.reading-panel-content');
  
  if (header && content) {
    header.after(tabsContainer);
  } else {
    readingPanel.insertBefore(tabsContainer, readingPanel.firstChild);
  }
  
  console.log('Passage tabs container initialized');
}

/**
 * Get passage IDs for a question
 * Supports both single passageId (string or array) and passageIds array
 */
function getQuestionPassageIds(question) {
  if (!question) return [];
  
  // Check for passageIds array first
  if (Array.isArray(question.passageIds) && question.passageIds.length > 0) {
    return question.passageIds;
  }
  
  // Check if passageId is an array (some tests use this format)
  if (Array.isArray(question.passageId) && question.passageId.length > 0) {
    return question.passageId;
  }
  
  // Fall back to single passageId string
  if (question.passageId && typeof question.passageId === 'string') {
    return [question.passageId];
  }
  
  return [];
}

/**
 * Get passage data by ID from readingPassages
 */
function getPassageById(passageId) {
  if (readingPassages && readingPassages[passageId]) {
    return readingPassages[passageId];
  }
  return null;
}

/**
 * Get display name for a passage
 */
function getPassageDisplayName(passageId, passageData, index) {
  if (passageData && passageData.title) {
    return passageData.title;
  }
  return `Passage ${index + 1}`;
}

/**
 * Handle keyboard navigation in tabs
 */
function handleTabKeydown(e, currentIndex, totalTabs) {
  const tabs = document.querySelectorAll('.passage-tab');
  let newIndex = currentIndex;
  
  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      newIndex = currentIndex > 0 ? currentIndex - 1 : totalTabs - 1;
      break;
    case 'ArrowRight':
      e.preventDefault();
      newIndex = currentIndex < totalTabs - 1 ? currentIndex + 1 : 0;
      break;
    case 'Home':
      e.preventDefault();
      newIndex = 0;
      break;
    case 'End':
      e.preventDefault();
      newIndex = totalTabs - 1;
      break;
    default:
      return;
  }
  
  if (newIndex !== currentIndex) {
    tabs[newIndex].focus();
    switchToPassage(newIndex);
  }
}

/**
 * Switch to a specific passage by index
 */
function switchToPassage(index) {
  if (index < 0 || index >= currentPassageIds.length) return;
  
  const tabs = document.querySelectorAll('.passage-tab');
  const passageId = currentPassageIds[index];
  
  // Update tab states
  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }
  });
  
  currentActivePassageIndex = index;
  
  // Load the passage content
  loadPassageContentById(passageId);
  
  console.log(`Switched to passage: ${passageId}`);
}

/**
 * Load passage content into the reading panel by ID
 */
function loadPassageContentById(passageId) {
  const passageContent = document.getElementById('passage-content');
  const titleElement = document.getElementById('passage-title');
  if (!passageContent) return;
  
  const passageData = getPassageById(passageId);
  
  if (!passageData) {
    passageContent.innerHTML = `<p><em>Passage "${passageId}" not found.</em></p>`;
    return;
  }
  
  // Update title
  if (titleElement && passageData.title) {
    titleElement.textContent = passageData.title;
  }
  
  // Build passage HTML
  let html = '';
  
  // Add content
  if (passageData.content) {
    html += passageData.content;
  } else if (passageData.html) {
    html += passageData.html;
  } else if (typeof passageData === 'string') {
    html += passageData;
  }
  
  // Apply to passage content with animation
  passageContent.style.opacity = '0';
  passageContent.style.transform = 'translateY(5px)';
  
  setTimeout(() => {
    passageContent.innerHTML = html;
    passageContent.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    passageContent.style.opacity = '1';
    passageContent.style.transform = 'translateY(0)';
    
    // Scroll to top of passage
    const panelContent = document.querySelector('.reading-panel-content');
    if (panelContent) {
      panelContent.scrollTop = 0;
    }
  }, 50);
}

/**
 * Update passage tabs based on current question's passages
 */
function updatePassageTabs(passageIds) {
  const tabsContainer = document.querySelector('.passage-tabs-container');
  const tabsWrapper = document.querySelector('.passage-tabs');
  
  if (!tabsContainer || !tabsWrapper) {
    console.log('Tabs container not found, initializing...');
    initPassageTabs();
    // Retry after initialization
    setTimeout(() => updatePassageTabs(passageIds), 100);
    return;
  }
  
  currentPassageIds = passageIds;
  
  // Clear existing tabs
  tabsWrapper.innerHTML = '';
  
  // If only one or no passages, hide tabs
  if (passageIds.length <= 1) {
    tabsContainer.classList.remove('active');
    currentActivePassageIndex = 0;
    return;
  }
  
  // Multiple passages - show tabs
  tabsContainer.classList.add('active');
  
  // Create tabs for each passage
  passageIds.forEach((passageId, index) => {
    const passageData = getPassageById(passageId);
    const displayName = getPassageDisplayName(passageId, passageData, index);
    
    const tab = document.createElement('button');
    tab.className = 'passage-tab';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.setAttribute('aria-controls', 'passage-content');
    tab.setAttribute('data-passage-id', passageId);
    tab.setAttribute('data-passage-index', index);
    tab.textContent = displayName;
    
    if (index === 0) {
      tab.classList.add('active');
    }
    
    // Tab click handler
    tab.addEventListener('click', () => {
      switchToPassage(index);
    });
    
    // Keyboard navigation
    tab.addEventListener('keydown', (e) => {
      handleTabKeydown(e, index, passageIds.length);
    });
    
    tabsWrapper.appendChild(tab);
  });
  
  // Reset to first passage
  currentActivePassageIndex = 0;
  
  console.log(`Created ${passageIds.length} passage tabs`);
}

/**
 * Main function to load passage(s) for a question
 * Handles both single and multiple passages
 */
function loadPassageForQuestion(question) {
  if (!question) {
    closeReadingPanel();
    return;
  }
  
  const passageIds = getQuestionPassageIds(question);
  
  if (passageIds.length === 0) {
    // No passages for this question
    closeReadingPanel();
    currentPassageId = null;
    return;
  }
  
  // Initialize tabs if needed
  initPassageTabs();
  
  // Update tabs (will hide if only one passage)
  updatePassageTabs(passageIds);
  
  // Load the first passage
  currentPassageId = passageIds[0];
  loadPassageContentById(passageIds[0]);
  
  // Open the panel
  openReadingPanel();
  
  console.log(`Loaded passage(s) for question: ${passageIds.join(', ')}`);
}

// Legacy function for compatibility
function loadPassage(passageId) {
  if (!passageId) {
    closeReadingPanel();
    return;
  }
  
  // Convert to array format and use the new system
  const passageIds = Array.isArray(passageId) ? passageId : [passageId];
  
  // Create a mock question object
  const mockQuestion = { passageId: passageIds };
  loadPassageForQuestion(mockQuestion);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('Reading test initializing with passage tabs support...');
  
  // Hide toggle button if exists (we auto-open)
  const toggleBtn = document.getElementById('toggle-reading-panel');
  if (toggleBtn) {
    toggleBtn.style.display = 'none';
  }
  
  // Initialize tabs container
  initPassageTabs();
  
  // Watch for question changes
  let lastQuestionIndex = -1;
  
  function checkForQuestionChange() {
    const currentQuestionSpan = document.getElementById('current-question');
    if (currentQuestionSpan) {
      const currentIndex = parseInt(currentQuestionSpan.textContent) - 1;
      
      if (currentIndex !== lastQuestionIndex && currentIndex >= 0 && currentIndex < sampleQuestions.length) {
        lastQuestionIndex = currentIndex;
        const question = sampleQuestions[currentIndex];
        
        console.log('Question changed to:', currentIndex + 1);
        
        // Load passage(s) for the question
        loadPassageForQuestion(question);
      }
    }
  }
  
  // Check for question changes every 500ms
  setInterval(checkForQuestionChange, 500);
  
  console.log('Reading test initialized with', sampleQuestions.length, 'questions');
});