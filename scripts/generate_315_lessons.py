#!/usr/bin/env python3
import json

def get_dialect(lang, word, meaning):
    return [{"localWord": word, "englishMeaning": meaning, "language": lang}]

def build_data():
    lessons = []
    current_day = 1

    # =========================================================================
    # AGES 3–5: DISCOVER (66 LESSONS: Day 1 to 66)
    # Stage: 'Discover'
    # =========================================================================
    age3_5_raw = [
        # Math / Numbers (12)
        ("Counting with Shamba Pebbles (1 to 5)", "numbers", "Foundations of Counting", "Counting & One-to-One Match", "One pebble per touch", "Pebbles", "Omubala", "Count"),
        ("Five Fingers and Five Toes: Making Five", "numbers", "Number Bonds to 5", "Counting to 5", "Combining fingers to make 5", "Fingers", "Engalo", "Fingers"),
        ("Counting to 10 with Village Goats", "numbers", "Counting to 10", "Number Bonds to 5", "Counting 10 animals in order", "Bottle caps", "Embuzi", "Goat"),
        ("Big Papaya, Little Cherry: Comparing Size", "colors-shapes", "Size Concepts", "Observation", "Comparing big and small things", "Fruit", "Kinene", "Big"),
        ("Heavy Stones and Light Feathers", "numbers", "Weight Intuition", "Size Concepts", "Feeling heavy vs light items", "Stone and feather", "Kizito", "Heavy"),
        ("Finding Circles, Squares & Triangles", "colors-shapes", "Geometry for Tots", "Visual Observation", "Tracing shapes around home", "Cardboard shapes", "Enkulungo", "Circle"),
        ("Leaf and Stone Patterns (AB, AAB)", "numbers", "Pattern Recognition", "Counting to 10", "Creating repeating sequences", "Leaves and stones", "Empisa", "Pattern"),
        ("More or Less: Comparing Heaps of Seeds", "numbers", "Quantity Estimation", "Big Papaya, Little Cherry", "Comparing heaps without counting", "Dry beans", "Bingi", "Many"),
        ("Taking Away: Eating Sweet Bananas", "numbers", "First Subtraction", "Counting to 5", "Taking away one from a group", "Banana slices", "Okukendeeza", "Reduce"),
        ("Pairs of Slippers: Counting in Twos", "numbers", "Pairs & Skip Counting", "Counting to 10", "Matching items that come in pairs", "Shoes", "Babiri babiri", "Two by two"),
        ("The Stepping Stone Number Line", "numbers", "Number Line Concept", "Counting to 10", "Jumping forward to add and back to subtract", "Chalk line", "Olunnyiriri", "Line"),
        ("The Empty Basket: Discovering Zero", "numbers", "The Zero Concept", "Taking Away", "Understanding zero as an empty set", "Small basket", "Ziro", "Zero"),

        # Science & Shamba Nature (14)
        ("My Five Senses: Wonder in Our Eyes", "science", "Sensory Observation", "Observation", "Using five senses to explore the world", "Flower", "Amaaso", "Eyes"),
        ("Listening Walk: The Mystery Shamba Sounds", "science", "Acoustics for Tots", "My Five Senses", "Identifying animal and wind sounds", "Voice", "Amatu", "Ears"),
        ("The Sprouting Bean in a Cup", "science", "Plant Life Cycle", "Observation", "Watching roots and green shoot emerge", "Bean in cup", "Ensigo", "Seed"),
        ("Sun and Shadows: The Dancing Shadow", "science", "Light & Obstruction", "Observation", "Tracing shadows as the sun moves", "Sunlight", "Ekisiikirize", "Shadow"),
        ("Sink or Float: The Shamba Water Basin", "science", "Buoyancy & Density", "Observation", "Testing pebbles vs dry leaves in water", "Basin of water", "Okusebengerera", "Float"),
        ("Day and Night: Sun, Moon and Bright Stars", "science", "Day and Night Cycle", "Sun and Shadows", "Observing daytime warmth vs night stars", "Flashlight", "Enjuba", "Sun"),
        ("Living Puppy vs Non-Living Stone", "science", "Criteria of Life", "Observation", "Identifying things that breathe and eat", "Puppy and stone", "Ebiramu", "Living things"),
        ("Where Rain Goes: The Mud Puddle Cycle", "science", "Early Hydrology", "Living Puppy vs Non-Living Stone", "Watching rain fall and disappear in sun", "Puddle", "Enkuba", "Rain"),
        ("How Animals Walk: Four Hooves, Two Wings", "science", "Animal Locomotion", "Living Puppy vs Non-Living Stone", "Imitating goat walks and bird hops", "Pictures", "Ebisolo", "Animals"),
        ("Leaf Shapes: Heart, Needle, and Palm", "science", "Botanical Diversity", "The Sprouting Bean in a Cup", "Collecting and comparing shamba leaves", "Fallen leaves", "Amakoola", "Leaves"),
        ("Warm Porridge and Cold Spring Water", "science", "Temperature Awareness", "Observation", "Feeling thermal differences safely", "Two cups", "Ebbugumu", "Heat"),
        ("Wind is Moving Air: The Bag Kite", "science", "Atmospheric Movement", "Observation", "Feeling wind rustle leaves and push bags", "Plastic bag", "Empewo", "Wind"),
        ("Germ Wash Game: Clean Hands, Happy Home", "science", "Hygiene & Microbes", "Observation", "Using soap and water to wash germs away", "Soap and water", "Okunaaba", "Handwash"),
        ("Sweet Mango, Salty Salt, Sour Lemon", "science", "Taste Sensation", "My Five Senses", "Testing three flavors on the tongue", "Honey and lemon", "Kaluwa", "Sweet"),

        # Language & World Tongues (14)
        ("Animal Sounds Around the Compound", "language", "Phonemic Awareness", "Listening Walk", "Making rooster and cow sounds clearly", "Voice", "Eddoboozi", "Sound"),
        ("The Vowel Drum Song: A-E-I-O-U", "language", "Vowel Sounds", "Animal Sounds", "Singing pure open vowel sounds", "Drum or tin", "Amaloboozi", "Vowels"),
        ("Rhyme Time with Matooke and Cat", "language", "Rhyme Recognition", "The Vowel Drum Song", "Finding words with matching endings", "Cards", "Ennyingo", "Syllable"),
        ("Hello in Five Languages: Ni Hao, Hola, Bonjour", "language", "Global Greetings", "Animal Sounds", "Speaking polite greetings of world cultures", "Flags", "Kulamusa", "Greeting"),
        ("Mandarin for Beginners: Ni Hao and Xie Xie", "language", "Mandarin Pronunciation", "Hello in Five Languages", "Speaking hello and thank you in Mandarin", "Voice", "Nǐ hǎo", "Hello"),
        ("Spanish for Beginners: Hola and Gracias", "language", "Spanish Phonics", "Hello in Five Languages", "Speaking greetings and thanks in Spanish", "Voice", "Gracias", "Thank you"),
        ("French for Beginners: Bonjour and Merci", "language", "French Melodic Speech", "Hello in Five Languages", "Speaking courteous French morning greetings", "Voice", "Merci", "Thank you"),
        ("Hebrew for Beginners: Shalom and Toda", "language", "Hebrew Root Meanings", "Hello in Five Languages", "Learning the blessing of Shalom (Peace)", "Voice", "Shalom", "Peace"),
        ("Arabic for Beginners: Salam and Shukran", "language", "Arabic Etiquette", "Hello in Five Languages", "Greeting with divine peace and gratitude", "Voice", "Shukran", "Thank you"),
        ("Greek for Beginners: Kalimera (Good Morning)", "language", "Greek Phonics", "Hello in Five Languages", "Singing sunny Mediterranean greetings", "Voice", "Kalimera", "Good morning"),
        ("Latin for Beginners: Salve! (Be in Good Health)", "language", "Latin Classical Roots", "Hello in Five Languages", "Discovering how Roman children greeted", "Voice", "Salve", "Be well"),
        ("Hindi for Beginners: Namaste with Joined Hands", "language", "Indic Etiquette", "Hello in Five Languages", "Greeting with honor and hands pressed at heart", "Voice", "Namaste", "I bow to you"),
        ("Telling a Story from a Big Picture", "language", "Visual Narrative", "Rhyme Time", "Describing characters and events from art", "Picture", "Ekifaananyi", "Picture"),
        ("Head, Shoulders, Knees and Toes in Two Tongues", "language", "Anatomical Naming", "My Five Senses", "Singing body parts in English and mother tongue", "Body", "Omutwe", "Head"),

        # Character & Kindness (13)
        ("Sharing the Sweet Fruit with Sibling", "social-kindness", "Moral Generosity", "Observation", "Dividing food to bless a friend", "Fruit", "Okugabana", "Share"),
        ("Please and Thank You: Polite Words That Open Doors", "social-kindness", "Courteous Etiquette", "Sharing the Sweet Fruit", "Using polite requests every day", "Water cup", "Weebale", "Thank you"),
        ("Putting Slippers and Toys in Their Place", "social-kindness", "Habit of Order", "Observation", "Tidying compound items with care", "Shoes", "Enteko", "Order"),
        ("Gentle Hands with the Yellow Chicks", "social-kindness", "Empathy for Animals", "Observation", "Holding creatures gently without squeezing", "Chicks", "Ekisa", "Gentleness"),
        ("Telling the Truth When Water Spills", "social-kindness", "Moral Honesty", "Observation", "Admitting mistakes and helping clean up", "Cup and rag", "Amazima", "Truth"),
        ("Comforting a Crying Friend with a Hug", "social-kindness", "Compassion in Action", "Sharing the Sweet Fruit", "Giving comfort to anyone who hurts", "Arms", "Okwagala", "Love"),
        ("Waiting Patiently for the Porridge to Cool", "social-kindness", "Emotional Self-Control", "Observation", "Practicing peaceful waiting without whining", "Warm bowl", "Okugumiikiriza", "Patience"),
        ("The Wonder of Creation: Sky, Trees, and Birds", "christian-education", "Theology of Nature", "Observation", "Thanking God for the beauty of the world", "Flower", "Omutonzi", "Creator"),
        ("The Good Samaritan for Little Ones", "christian-education", "Neighborly Love", "Sharing the Sweet Fruit", "Helping someone who tripped on the road", "Clean cloth", "Muliraanwa", "Neighbor"),
        ("Morning Prayer: Thanking for Sunlight and Food", "christian-education", "Gratitude & Prayer", "The Wonder of Creation", "Holding hands in morning gratitude", "Folded hands", "Essaala", "Prayer"),
        ("Forgiving Before Bedtime: A Peaceful Heart", "christian-education", "Quick Forgiveness", "Telling the Truth", "Letting go of anger before the sun sets", "Voice", "Okusonyiwa", "Forgive"),
        ("Honoring Grandparents with Polite Knees", "godly-life-skills", "Respect for Elders", "Please and Thank You", "Greeting elders with two hands and honor", "Voice", "Ekitiibwa", "Honor"),
        ("The Power of a Warm Smile Across the Compound", "social-kindness", "Spreading Joy", "Observation", "Practicing cheerful greetings that bring light", "Smile", "Essanyu", "Joy"),

        # Practical Motor Skills (13)
        ("Balancing a Cup of Water on the Veranda", "practical-skills", "Motor Equilibrium", "Observation", "Walking a straight line with steady hands", "Cup of water", "Okubalaata", "Balance"),
        ("Squeezing the Kitchen Sponge for Finger Power", "practical-skills", "Pre-Writing Strength", "Observation", "Squeezing water out of a cloth", "Sponge", "Okukamuula", "Wring"),
        ("Folding the Napkin: Corner to Corner", "practical-skills", "Symmetry & Neatness", "Finding Circles, Squares & Triangles", "Folding a square cloth in half", "Cloth napkin", "Okuzinga", "Fold"),
        ("Threading Large Seed Beads on String", "practical-skills", "Bilateral Coordination", "Observation", "Guiding thread through large bead holes", "String and beads", "Okutungira", "Thread"),
        ("Molding a Little Sun-Dried Mud Brick", "practical-skills", "Early Engineering", "Observation", "Packing damp soil into a mold to dry", "Soil and cup", "Etoffaali", "Brick"),
        ("Sweeping Leaves Off the Compound Veranda", "practical-skills", "Compound Cleanliness", "Putting Slippers and Toys in Their Place", "Using a small broom to clear leaves", "Small broom", "Okwera", "Sweep"),
        ("Peeling a Ripe Sweet Banana with Care", "practical-skills", "Self-Feeding Mastery", "Observation", "Peeling skin strips without squishing fruit", "Ripe banana", "Okususa", "Peel"),
        ("Pouring Dry Beans Cup to Cup Without Spilling", "practical-skills", "Hand-Eye Calibration", "Observation", "Transferring dry beans between cups", "Two cups and beans", "Okuyiwa", "Pour"),
        ("Fastening Big Wooden Buttons on a Shirt", "practical-skills", "Self-Dressing Autonomy", "Observation", "Pushing large buttons through fabric slots", "Buttoned shirt", "Pesa", "Button"),
        ("Washing My Snack Plate with Soap and Water", "practical-skills", "Hygiene Autonomy", "Germ Wash Game", "Soaping, rinsing, and air-drying a plate", "Plate and basin", "Okyoza", "Wash"),
        ("Walking Heel-to-Toe on the Tightrope Line", "practical-skills", "Vestibular Balance", "Balancing a Cup of Water", "Walking a chalk line heel-to-toe", "Chalk line", "Olugendo", "Step"),
        ("Sorting Laundry into Matching Piles", "practical-skills", "Classification in Daily Life", "Leaf and Stone Patterns", "Grouping socks and shirts into neat piles", "Laundry pile", "Okwawula", "Sort"),
        ("Planting Garlic Cloves in an Egg Box", "agriculture", "Micro-Gardening", "The Sprouting Bean in a Cup", "Pushing pointed garlic cloves into damp soil", "Garlic and soil", "Katunguluccumu", "Garlic")
    ]

    for title, cat, cat_label, prereq, concept, mat, d_word, d_mean in age3_5_raw:
        lessons.append({
            "title": title,
            "category": cat,
            "categoryLabel": f"Ages 3–5 Discover • {cat_label}",
            "prereq": prereq,
            "ageBand": "3-5",
            "stageName": "Discover",
            "seq": current_day,
            "day": current_day,
            "concept": concept,
            "materials": [mat, "Patience and curious eyes"],
            "dialect": get_dialect("Luganda", d_word, d_mean),
            "story": f"In our village compound, young learners discover {title.lower()} through joyful practice and family sharing.",
            "askFirst": f"What do you notice when we explore {title.lower()} together?",
            "listenFor": f"That {concept.lower()} helps us understand the world around us.",
            "explainSimply": f"{concept}! When we practice step by step, our minds and bodies grow strong and helpful.",
            "actName": f"Hands-On {title}",
            "actSteps": [
                f"Gather {mat.lower()} on a clean mat or veranda.",
                f"Try the core action: {concept.lower()}.",
                "Show your parent or elder what you discovered."
            ],
            "quizQ": f"Why is {title} helpful to learn?",
            "quizOpts": ["It makes us wise, capable, and helpful", "It has no purpose", "Only machines need it"],
            "quizIdx": 0,
            "quizExp": f"{title} builds foundational mastery!",
            "bitePrompt": f"Try 1 quick minute of {title.lower()}.",
            "biteAction": f"Complete the mini-action and tell your parent: {concept}!"
        })
        current_day += 1

    # =========================================================================
    # AGES 6–8: BUILD (66 LESSONS: Day 67 to 132)
    # Stage: 'Build'
    # =========================================================================
    age6_8_raw = [
        # Mathematics & Problem Solving (14)
        ("Addition Number Bonds to 20 with Seeds", "math", "Number Bonds", "Counting to 10", "Making 20 using pairs of numbers like 14 + 6", "20 dry beans", "Okugatta", "Add"),
        ("Place Value: Tens Bundles and Single Units", "math", "Place Value", "Addition Number Bonds", "Bundling 10 sticks to make one ten", "Sticks and rubber bands", "Amakumi n'Emirundi", "Tens and Ones"),
        ("Skip Counting by 2s, 5s and 10s to 100", "math", "Skip Counting", "Place Value", "Counting rhythmic multiples quickly to 100", "Hundred chart", "Okubuuka", "Jump/Skip"),
        ("Arrays and the Beginning of Multiplication", "math", "Arrays & Multiplication", "Skip Counting", "Arranging pebbles in rows and columns: 3 rows of 4", "12 pebbles", "Emirundi", "Times/Multiplication"),
        ("Sharing Fairly: Early Division with Remainders", "math", "Equal Sharing Division", "Arrays and Multiplication", "Dividing 14 groundnuts among 3 children with 2 left over", "Groundnuts", "Okugaba", "Divide/Share"),
        ("Fractions of Shamba Harvests: Halves and Quarters", "math", "Fractions Foundations", "Equal Sharing Division", "Cutting sweet potatoes into equal 1/2 and 1/4 parts", "Cooked sweet potato", "Ebitundu", "Fractions/Parts"),
        ("Measuring Length with Footsteps and Metre Sticks", "math", "Measurement & Units", "Place Value", "Comparing non-standard body spans with standard metres", "String or ruler", "Okupima", "Measure"),
        ("Telling Time on the Clock Face: Hours and Halves", "math", "Time & Clocks", "Skip Counting by 5s", "Reading the short hour hand and long minute hand", "Cardboard clock", "Essaawa", "Clock/Hour"),
        ("Money in the Village Kiosk: Coins and Change", "finance", "Money & Financial Math", "Addition Number Bonds", "Adding 500 and 1,000 UGX coins and calculating change", "Coins", "Esente", "Money"),
        ("Two-Digit Addition with Regrouping (Carrying)", "math", "Column Addition", "Place Value", "Carrying 10 ones into the tens column", "Paper and pencil", "Okusimbula", "Carry over"),
        ("Two-Digit Subtraction with Regrouping (Borrowing)", "math", "Column Subtraction", "Two-Digit Addition", "Exchanging 1 ten for 10 ones to subtract", "Paper and pencil", "Okwazika", "Borrow"),
        ("Bar Graphs: Counting Animals in Our Parish", "math", "Data & Graphing", "Skip Counting", "Coloring bar blocks to represent goats, cows, and hens", "Grid paper", "Ekifaananyi ky'obubonero", "Bar graph"),
        ("Perimeter of the Vegetable Bed: Walking the Edge", "math", "Perimeter Concepts", "Measuring Length", "Adding the lengths of all 4 sides of a garden plot", "Measuring string", "Okubala empenda", "Perimeter"),
        ("Even and Odd Numbers: Who Has a Partner?", "math", "Number Properties", "Skip Counting by 2s", "Grouping items into pairs to find even vs odd with leftover", "Beans", "Eza nnamaddala", "Even/Odd"),

        # Science & Living Systems (14)
        ("Plant Anatomy: Roots, Stems, Leaves and Flowers", "science", "Botany Foundations", "The Sprouting Bean in a Cup", "How roots anchor and drink while leaves catch sunlight", "Whole weed or plant", "Emizi n'Amakoola", "Roots & Leaves"),
        ("The Busy Honeybee: Pollination in the Shamba", "science", "Pollination Ecology", "Plant Anatomy", "How bees carry yellow pollen between flowers to make fruit", "Yellow powder/flower", "Enjuki", "Honeybee"),
        ("Solid, Liquid, and Gas: The Kitchen Water Cycle", "science", "States of Matter", "Warm Porridge and Cold Spring Water", "Ice melting to water and boiling into invisible steam", "Kettle or ice", "Omukka", "Steam/Gas"),
        ("Evaporation and Rain Clouds: The Closed Jar", "science", "The Water Cycle", "Solid, Liquid, and Gas", "Condensing warm steam on a cold jar lid like real clouds", "Jar and warm water", "Ebire", "Clouds"),
        ("Soil Types: Sticky Clay, Gritty Sand, and Rich Loam", "science", "Soil Science", "Observation", "Comparing water drainage through clay, sand, and garden loam", "Three soil samples", "Ettaka", "Soil"),
        ("Herbivores, Carnivores, and Omnivores Around Us", "science", "Animal Diets", "Living Puppy vs Non-Living Stone", "Classifying goats (plants), cats (meat), and humans (both)", "Animal pictures", "Ebyokulya by'ebisolo", "Animal food"),
        ("Human Skeleton and Muscles: How We Jump and Run", "science", "Human Anatomy", "Body Parts Naming", "Bones give structure while muscles contract to pull joints", "Hands and elbows", "Amagumba", "Bones"),
        ("The Human Heartbeat: Feeling Pulse Before and After", "science", "Circulatory System", "Human Skeleton and Muscles", "Counting heart pulses at rest vs after 20 jumping jacks", "Fingers on wrist", "Omutima", "Heart"),
        ("Seed Travelers: Hitchhikers, Wind Gliders and Eaten Fruit", "science", "Seed Dispersal", "Plant Anatomy", "How burrs stick to fur and dandelion seeds float on breeze", "Seed burrs", "Okusaasaana", "Dispersal"),
        ("Fungi and Mushrooms: Nature's Great Recyclers", "science", "Mycology & Decomposers", "Soil Types", "How fungi break down dead logs into rich forest soil", "Mushroom sample", "Obubaala", "Mushroom"),
        ("Reflecting Light: Mirrors and Polished Spoons", "science", "Optics & Reflection", "Sun and Shadows", "Observing flipped images on concave vs flat reflective surfaces", "Polished metal spoon", "Endabirwamu", "Mirror"),
        ("Friction: Sliding on Mud vs Sliding on Rough Grass", "science", "Mechanics & Forces", "Observation", "How rough surfaces slow down sliding compared to smooth ice/mud", "Shoe on dirt vs stone", "Okukwatagana", "Friction"),
        ("Sound Travels in Vibrations: The String Telephone", "science", "Acoustics & Waves", "Listening Walk", "Speaking into a tin can connected by a tight string to another", "Two cans and string", "Okunyeenya kw'eddoboozi", "Sound vibration"),
        ("Keeping Water Safe: Solar Disinfection (SODIS)", "science", "Water Purification", "Where Rain Goes", "Using clear plastic bottles in full sunlight to purify water", "Clear bottle and sun", "Okulongoosa amazzi", "Water purification"),

        # Language, Reading & Global Tongues (14)
        ("Phonics Blends: Ch, Sh, Th, and Wh", "language", "Phonemic Blends", "The Vowel Drum Song", "Combining consonant sounds to read Chip, Ship, Thin, and Whip", "Letter cards", "Okugatta amaloboozi", "Blending"),
        ("Reading Fluency: Pausing at Full Stops and Commas", "language", "Reading Punctuation", "Phonics Blends", "Modulating voice tone and breathing at commas and periods", "Story text", "Obubonero bw'okusoma", "Punctuation"),
        ("Writing a Heartfelt Thank-You Letter", "language", "Written Composition", "Reading Fluency", "Structuring greeting, body message, gratitude, and signature", "Paper and pen", "Ebbaluwa", "Letter"),
        ("The African Folktale: Identifying the Moral Lesson", "language", "Moral Comprehension", "Reading Fluency", "Analyzing why trickster characters fail and wisdom wins", "Fable book", "Enfumo", "Folktale"),
        ("Descriptive Adjectives: Painting Pictures with Words", "language", "Grammar: Adjectives", "Reading Fluency", "Transforming 'a dog' into 'a playful, golden-brown puppy'", "Paper and pencil", "Ebinnyonnyola", "Adjectives"),
        ("Mandarin Pinyin & Numbers: Yi, Er, San, Si, Wu", "language", "Mandarin Numerals", "Mandarin for Beginners", "Pronouncing Mandarin numbers 1-5 with accurate tones", "Number cards", "Yī, Èr, Sān", "1, 2, 3"),
        ("Spanish Family Words: La Madre, El Padre, El Hermano", "language", "Spanish Vocabulary", "Spanish for Beginners", "Naming family members with authentic Spanish phonetics", "Family drawing", "La familia", "Family"),
        ("French Everyday Courtesies: S'il Vous Plaît and Pardon", "language", "French Etiquette", "French for Beginners", "Using gracious French phrases in everyday scenarios", "Voice", "S'il vous plaît", "Please"),
        ("Hebrew Script Decoder: Aleph, Bet, Gimel, Dalet", "language", "Hebrew Alphabet", "Hebrew for Beginners", "Recognizing the first four square letters of ancient Hebrew", "Drawn symbols", "Aleph-Bet", "Alphabet"),
        ("Arabic Letters: Alif, Ba, Ta, Tha", "language", "Arabic Alphabet", "Arabic for Beginners", "Tracing the flowing curves and dots of Arabic letters", "Pen and paper", "Huroof", "Letters"),
        ("Greek Alphabet: Alpha, Beta, Gamma, Delta", "language", "Greek Alphabet", "Greek for Beginners", "Connecting ancient Greek letters to modern English letters", "Paper", "Alphabetos", "Alphabet"),
        ("Latin Animal Roots: Canis (Dog), Felis (Cat), Equus (Horse)", "language", "Latin Scientific Roots", "Latin for Beginners", "Discovering how scientists name creatures around the world", "Animal cards", "Canis", "Dog"),
        ("Hindi Everyday Greetings: Aap Kaise Hain? (How Are You?)", "language", "Hindi Conversational", "Hindi for Beginners", "Asking after health politely in everyday Hindi", "Voice", "Kaise hain", "How are you"),
        ("Dialogue and Quotation Marks: Who Said What?", "language", "Grammar: Dialogue", "Reading Fluency", "Using quotation marks when characters speak aloud", "Story text", "Obubonero bw'ebigambo", "Quotation marks"),

        # Technology, Making & Tools (12)
        ("The Simple Lever: Moving Heavy Rocks with a Stick", "technology", "Mechanics: Levers", "Observation", "Using a fulcrum and pole to lift what hands cannot", "Sturdy stick and pivot rock", "Eggoole", "Lever"),
        ("The Inclined Plane: Ramps for Heavy Sacks", "technology", "Mechanics: Ramps", "The Simple Lever", "Rolling loads up a slope requiring less effort than lifting", "Wood plank ramp", "Omwaliiro", "Ramp"),
        ("Building a Sturdy Cardboard Truss Bridge", "technology", "Structural Engineering", "Finding Circles, Squares & Triangles", "Using triangles to distribute weight across a cardboard span", "Cardboard strips", "Olutindo", "Bridge"),
        ("The Shadow Sundial: Reading Time from the Sun", "technology", "Ancient Chronometry", "Telling Time on the Clock", "Placing an upright stick in the ground to track sun hours", "Stick and stones", "Essaawa y'enjuba", "Sundial"),
        ("Making Natural Glue from Cassava Flour", "technology", "Bio-Adhesives & Chemistry", "Solid, Liquid, and Gas", "Boiling cassava starch with water into strong paper glue", "Cassava flour and water", "Egomu y'omuwogo", "Cassava glue"),
        ("The Paper Windmill: Harvesting Wind Power", "technology", "Wind Energy", "Wind is Moving Air", "Pinning a folded paper windmill that spins rapidly in the breeze", "Paper square and pin", "Olukiiko lw'empewo", "Windmill"),
        ("Cleaning Muddy Water with a 3-Layer Filter", "technology", "Environmental Filtration", "Soil Types", "Layering coarse gravel, fine sand, and crushed charcoal in a bottle", "Cut plastic bottle, sand, charcoal", "Akasengejja", "Filter"),
        ("Safe Hand Tools: Hammer, Nails and Wooden Blocks", "practical-skills", "Carpentry Foundations", "The Simple Lever", "Holding a hammer at the base to drive nails squarely into wood", "Small hammer, wood scraps", "Ennyondo", "Hammer"),
        ("Designing a Rainwater Gutter from Bamboo or Tin", "technology", "Hydraulic Collection", "The Water Cycle", "Splitting bamboo or folding tin to direct roof rainwater to a barrel", "Bamboo stem or tin sheet", "Omukululo", "Gutter"),
        ("How Bicycles Balance: Wheels, Chain, and Steering", "technology", "Mechanical Transmission", "Arrays and Multiplication", "Tracing foot pedal rotation through chain to the rear wheel", "Bicycle inspection", "Akagaali", "Bicycle"),
        ("Making a Compass with a Magnetized Needle and Water", "technology", "Geomagnetism", "Reflecting Light", "Stroking a sewing needle on a magnet and floating it on a leaf", "Needle, magnet, water bowl", "Kkampasi", "Compass"),
        ("Solar Cooking: Building a Foil Cardboard Oven", "technology", "Solar Thermal Capture", "Sun and Shadows", "Lining a cardboard box with shiny foil to heat water and snacks", "Cardboard box, foil", "Ekyoto ky'enjuba", "Solar cooker"),

        # Finance, Agriculture & Character (12)
        ("The Piggy Bank: Saving vs Spending Today", "finance", "Personal Savings", "Money in the Village Kiosk", "Setting aside 1 coin from every 5 earned to build a future asset", "Tin can with slot", "Okutereka", "Saving"),
        ("Needs vs Wants: Making Wise Choices at the Shop", "finance", "Budgeting Priorities", "The Piggy Bank", "Distinguishing between life essentials (maize, salt) and treats (sweets)", "Shopping list", "Ebyetaago n'Ebyokwegomba", "Needs & Wants"),
        ("Sack Gardening: Growing Fresh Spinach in Small Spaces", "agriculture", "Urban Agriculture", "Soil Types", "Filling a perforated grain sack with fertile compost to grow 30 spinach plants", "Burlap sack, compost, seedlings", "Ennimiro y'ensawo", "Sack garden"),
        ("Making Kitchen Compost: Black Gold from Vegetable Scraps", "agriculture", "Soil Regeneration", "Plant Anatomy", "Layering brown dry grass and green kitchen peelings to make humus", "Fruit peelings, dry grass", "Ebivundi", "Compost"),
        ("Caring for Backyard Hens: Clean Water and Scraps", "agriculture", "Poultry Management", "Living Puppy vs Non-Living Stone", "Feeding chickens balanced grains and keeping coop roosts clean", "Feeder and waterer", "Enkoko", "Chickens"),
        ("Integrity at the Market: Giving Correct Change", "godly-life-skills", "Honesty & Ethics", "Money in the Village Kiosk", "Practicing returning extra change when a shopkeeper makes a mistake", "Coins", "Amazima mu by'obusuubuzi", "Integrity"),
        ("The Golden Rule: Treating Classmates with Kindness", "social-kindness", "Empathy & Character", "Sharing the Sweet Fruit", "Treating others the way you want to be treated in word and action", "Voice", "Etteeka lya Zaabu", "Golden Rule"),
        ("Teamwork in Compound Chores: Many Hands Make Light Work", "social-kindness", "Cooperation", "Sweeping Leaves Off the Compound", "Working with siblings to carry water and firewood in half the time", "Compound tools", "Agali awamu gegaluma ennyama", "Unity proverb"),
        ("David and Goliath: Courage When Facing Giants", "christian-education", "Faith & Courage", "Finding Circles, Squares & Triangles", "Relying on God's strength and skill rather than big armor", "Sling and smooth stones", "Obuvumu", "Courage"),
        ("The Parable of the Sower: Good Soil for Good Fruit", "christian-education", "Biblical Character", "The Sprouting Bean in a Cup", "Cultivating an open, humble heart that receives wisdom and bears fruit", "Seeds and soil", "Omusasizi", "Sower"),
        ("Peacemaking on the Football Pitch: Resolving Disputes", "godly-life-skills", "Conflict Resolution", "The Golden Rule", "Stopping arguments with calm conversation and fair re-play rules", "Football", "Okutabaganya", "Peacemaking"),
        ("Keeping Our Parish Clean: Anti-Litter Ambassador", "social-kindness", "Civic Stewardship", "Cleaning Muddy Water", "Organizing a 15-minute litter pickup around the local borehole or school", "Collection bag", "Obuyonjo mu kitundu", "Parish cleanliness")
    ]

    for title, cat, cat_label, prereq, concept, mat, d_word, d_mean in age6_8_raw:
        lessons.append({
            "title": title,
            "category": cat,
            "categoryLabel": f"Ages 6–8 Build • {cat_label}",
            "prereq": prereq,
            "ageBand": "6-8",
            "stageName": "Build",
            "seq": current_day,
            "day": current_day,
            "concept": concept,
            "materials": [mat, "Pencil and notebook"],
            "dialect": get_dialect("Luganda", d_word, d_mean),
            "story": f"Young builders in our community master practical competence through {title.lower()}.",
            "askFirst": f"How does understanding {title.lower()} help you solve real problems?",
            "listenFor": f"That {concept.lower()} gives us clear tools to build and serve.",
            "explainSimply": f"{concept}! By understanding the rules behind it, we can design, calculate, and create.",
            "actName": f"Hands-On {title}",
            "actSteps": [
                f"Prepare {mat.lower()}.",
                f"Execute the core step: {concept.lower()}.",
                "Check your results and write your conclusion in your notebook."
            ],
            "quizQ": f"What is the key takeaway of {title}?",
            "quizOpts": [concept, "Guesswork without testing", "Nothing useful"],
            "quizIdx": 0,
            "quizExp": f"{concept} is the fundamental mastery insight!",
            "bitePrompt": f"Complete a 5-minute problem on {title.lower()}.",
            "biteAction": f"Calculate or explain: {concept}!"
        })
        current_day += 1

    # =========================================================================
    # AGES 9–12: EXPLORE (43 LESSONS: Day 133 to 175)
    # Stage: 'Explore'
    # =========================================================================
    age9_12_raw = [
        # Math & Pre-Algebra (10)
        ("Long Division and Interpreting Real-World Remainders", "math", "Division Mastery", "Equal Sharing Division", "Dividing 4-digit dividends and deciding whether to round remainders", "Paper and pencil", "Okugaba", "Division"),
        ("Adding and Subtracting Fractions with Unlike Denominators", "math", "Fractions Operations", "Fractions Foundations", "Finding the Lowest Common Multiple (LCM) to create common denominators", "Paper and pencil", "Ennamba ez'ebitundu", "Fractions"),
        ("Multiplying and Dividing Fractions with Visual Bar Models", "math", "Fraction Multiplication", "Adding Fractions with Unlike Denominators", "Using Singapore bar modeling to visualize taking 2/3 of 3/4", "Grid notebook", "Okubaza", "Calculate"),
        ("Decimals and Percentages: Converting Village Market Values", "math", "Decimals & Percent", "Fractions Operations", "Converting between fractions, decimals, and percentages: 1/4 = 0.25 = 25%", "Notebook", "Ebitundu mu kikumi", "Percentages"),
        ("Negative Numbers: Temperature, Elevation, and Debt", "math", "Integers & Signs", "Decimals & Percentages", "Operating on number lines below zero: -5 + 8 = +3", "Number line chart", "Ennamba eziri wansi wa ziro", "Negative numbers"),
        ("Pre-Algebra: Solving for the Unknown Variable (x)", "math", "Linear Equations", "Negative Numbers", "Balancing equation scales: what you do to one side you must do to the other", "Balance scale or paper", "Akabonero akakise (x)", "Variable x"),
        ("Ratios and Proportions: Mixing Cement and Making Mortar", "math", "Ratios & Rates", "Fractions Operations", "Using 1:3:5 ratios of cement, sand, and aggregate for strong foundations", "Mixing cups or sticks", "Emigereranyo", "Ratio"),
        ("Area and Perimeter of Irregular Plots of Land", "math", "Geometry: Area", "Perimeter of the Vegetable Bed", "Decomposing complex compound shapes into rectangles and right triangles", "Measuring tape", "Obunene bw'ekibanja", "Land area"),
        ("Angles and Triangles: Interior Angles Always Total 180°", "math", "Geometry: Angles", "Building a Sturdy Cardboard Truss", "Using protractors to prove that triangle interior angles sum to 180°", "Protractor and paper", "Ensonda z'ekisenge", "Angles"),
        ("Probability with Colored Beans: Predicting Outcomes", "math", "Probability & Statistics", "Decimals and Percentages", "Calculating the ratio of favorable outcomes to total possible trials", "Bag of beans", "Emikisa gy'okugwawo", "Probability"),

        # Science & Systems (10)
        ("Photosynthesis: How Plants Turn Sunlight into Sugar", "science", "Biochemistry Foundations", "Plant Anatomy", "Chlorophyll in leaves uses sun, water, and CO2 to create glucose and oxygen", "Green leaf, clear jar", "Okukola emmere mu makoola", "Photosynthesis"),
        ("Density and Buoyancy: Archimedes Principle in a Bucket", "science", "Hydrostatics", "Sink or Float", "Displaced water weight equals buoyant upward force on submerged bodies", "Measuring bucket, stone", "Obuzito obukwasi", "Density"),
        ("Simple Circuits: Connecting Batteries, Switches, and Bulbs", "science", "Electricity Foundations", "Observation", "A closed loop is required for electric current to flow through copper wires", "Battery, torch bulb, wire", "Amasannyalaze", "Electricity"),
        ("Ecosystem Food Webs: Producers, Consumers, and Apex Predators", "science", "Ecology & Trophic Levels", "Living Puppy vs Non-Living Stone", "Tracing energy transfer from savannah grass to zebras and lions", "Paper index cards", "Enkwatagana y'ebiramu", "Food web"),
        ("The Human Digestive System: From Mouth to Absorption", "science", "Physiology: Digestion", "Human Skeleton and Muscles", "Enzymatic and mechanical breakdown of starches, proteins, and fats", "Food samples", "Olubuto n'Ebyenda", "Stomach & Intestines"),
        ("Acids and Bases: Making Red Cabbage or Hibiscus pH Indicator", "science", "Chemical Indicators", "Solid, Liquid, and Gas", "Using natural anthocyanin dye to turn red in acid and green in base", "Hibiscus tea, lemon, soap", "Kaawa n'omunnyo", "Acid & Base"),
        ("Microorganisms: Helpful Yeast vs Harmful Pathogens", "science", "Microbiology", "Germ Wash Game", "Observing bread dough rise with baker's yeast while boiling kills bacteria", "Yeast, warm water, sugar", "Obuwuka obutonotono", "Microbes"),
        ("Weather Station: Building a Rain Gauge and Wind Vane", "science", "Meteorology", "The Shadow Sundial", "Measuring exact rainfall millimeters and prevailing wind directions", "Plastic bottle ruler, arrow", "Okupima empewo n'enkuba", "Weather station"),
        ("The Respiratory System: Lungs, Diaphragm, and Oxygen Exchange", "science", "Physiology: Respiration", "Human Skeleton and Muscles", "Building a plastic bottle and balloon model demonstrating lung pressure", "Bottle and 2 balloons", "Amawuggwe", "Lungs"),
        ("Newton's First Law of Motion: Inertia and Friction", "science", "Classical Mechanics", "Friction", "Objects at rest stay at rest unless acted on by an unbalanced net force", "Coin and cardboard on cup", "Etteeka ly'obutakyuka", "Law of Inertia"),

        # Rhetoric, Language & Global Decoders (8)
        ("Writing a Persuasive Five-Paragraph Essay", "language", "Rhetoric & Composition", "Reading Fluency", "Structuring an introduction thesis, three evidence points, and strong conclusion", "Notebook and pen", "Ekiwandiiko ekinnyonnyola", "Essay"),
        ("Classical Greek & Latin Roots: Bio, Geo, Chrono, Tele", "language", "Etymology & Roots", "Latin Animal Roots", "Decoding hundreds of scientific terms by knowing ancient root meanings", "Flashcards", "Amakubo g'ebigambo", "Word roots"),
        ("Mandarin Character Logic: Sun (Rì), Moon (Yuè), and Bright (Míng)", "language", "Mandarin Ideographs", "Mandarin Pinyin & Numbers", "How combining Sun and Moon pictograms creates the character for Bright", "Paper brush/pen", "Hànzì", "Chinese characters"),
        ("Spanish Verb Conjugation: Hablar, Comer, Vivir (Present Tense)", "language", "Spanish Grammar", "Spanish Family Words", "Conjugating regular -ar, -er, and -ir verbs with subject pronouns", "Verb chart", "Conjugación", "Conjugation"),
        ("French Question Construction: Est-ce Que and Qui/Quand/Où", "language", "French Syntax", "French Everyday Courtesies", "Formulating polite questions for directions, travel, and time", "Paper", "Questions", "Questions"),
        ("Hebrew Word Roots: The Three-Letter Root System (Shoresh)", "language", "Hebrew Morphology", "Hebrew Script Decoder", "How the 3 letters Sh-L-M branch into Shalom, Mushlam, and Le-Shalem", "Notebook", "Shoresh", "Root"),
        ("Arabic Calligraphy: The Beauty of Joined Cursive Letters", "language", "Arabic Writing System", "Arabic Letters", "Connecting beginning, middle, and ending forms of Arabic consonants", "Calligraphy pen", "Khatt", "Calligraphy"),
        ("Public Speaking: Voice Projection, Eye Contact, and Posture", "language", "Oratory & Rhetoric", "The African Folktale", "Delivering a 3-minute speech without filler words to persuade an audience", "Mirror or family audience", "Okwogera mu bantu", "Public speaking"),

        # Technology, Coding & Engineering (8)
        ("Algorithmic Thinking: Writing Exact Step-by-Step Recipes", "technology", "Computational Logic", "Observation", "Creating bug-free algorithmic instructions that a robot can follow", "Paper instructions", "Engeri y'okukolamu", "Algorithm"),
        ("Flowcharts: Decision Diamonds, Conditionals, and Loops", "technology", "Program Architecture", "Algorithmic Thinking", "Mapping If-Then conditions and Repeat-Until loops visually", "Paper and pencil", "Ekifaananyi ky'enkola", "Flowchart"),
        ("Binary Numbers: Counting with 0s and 1s on Five Fingers", "technology", "Binary Arithmetic", "Pre-Algebra", "Using base-2 powers of 2 (1, 2, 4, 8, 16) to represent numbers up to 31", "Hand fingers", "Ennamba za bayinule", "Binary numbers"),
        ("Hydraulic Excavators: Plastic Syringes and Water Power", "technology", "Fluid Mechanics", "The Simple Lever", "Using connected syringes and plastic tubing to lift mechanical arm loads", "Two syringes, tubing, water", "Amaanyi g'amazzi", "Hydraulic power"),
        ("Solar Photovoltaics: Sizing a 50W Panel and Battery", "technology", "Renewable Energy", "Simple Circuits", "Matching panel wattage, charge controller amps, and 12V battery amp-hours", "Solar spec sheet", "Amasannyalaze g'enjuba", "Solar power"),
        ("Bridge Engineering: Testing Truss vs Beam Under Load", "technology", "Civil Engineering", "Building a Sturdy Cardboard Truss", "Measuring deflection weight supported by triangular trusses vs flat beams", "Popsicle sticks or cardboard", "Olutindo olugumu", "Strong bridge"),
        ("Microcontrollers & Sensors: Introduction to Automated Agriculture", "technology", "Embedded Systems", "Simple Circuits", "How soil moisture probes trigger relays to turn on irrigation pumps", "Diagram sheet", "Ebyuma ebikola byokka", "Automation"),
        ("Water Purification Station: Sand, Charcoal, and Aeration", "technology", "Sanitation Engineering", "Cleaning Muddy Water", "Engineering a multi-stage bio-sand filter providing 20 liters of clean water daily", "Gravel, sand, charcoal column", "Okusengejja amazzi", "Water station"),

        # Business, Micro-Enterprise & Civics (7)
        ("Unit Economics: Calculating Cost, Price, and Gross Margin", "finance", "Business Mathematics", "Decimals and Percentages", "Selling roasted groundnuts: Cost per cone = 300 UGX, Price = 500 UGX, Margin = 40%", "Ledger book", "Amagoba", "Profit"),
        ("The 5,000 UGX Enterprise Challenge: Starting Small", "finance", "Micro-Entrepreneurship", "Unit Economics", "Purchasing raw ingredients to add value and reinvest earnings for 100% growth", "Small coin budget", "Ensimbi z'okutandika", "Capital"),
        ("Bookkeeping with T-Accounts: Assets, Expenses, and Income", "finance", "Accounting Foundations", "Decimals and Percentages", "Recording debits and credits accurately to ensure ledger books balance", "Columnar ledger", "Ebitabo by'ebitongole", "Accounting"),
        ("Supply and Demand: Why Tomato Prices Rise and Fall", "finance", "Market Economics", "Unit Economics", "How bumper harvests lower market prices while dry seasons cause scarcity spikes", "Market price list", "Okugula n'Okutunda", "Supply and demand"),
        ("Cooperative SACCOs: Community Power Through Pooled Savings", "finance", "Cooperative Finance", "The Piggy Bank", "How 20 village members pooling savings create accessible micro-loans for all", "Passbook model", "Ekibiina ky'obwegassi", "Cooperative"),
        ("Negotiation with Integrity: Win-Win Agreements", "godly-life-skills", "Ethical Negotiation", "Integrity at the Market", "Finding mutually beneficial terms where buyer and seller both prosper", "Roleplay dialogue", "Okukaanya obulungi", "Negotiation"),
        ("Human Rights & The African Charter: Protecting Every Citizen", "humanity-society", "Civic Education", "The Golden Rule", "Understanding fundamental rights to education, health, and freedom of speech", "Charter summary", "Eddembe ly'obuntu", "Human rights")
    ]

    for title, cat, cat_label, prereq, concept, mat, d_word, d_mean in age9_12_raw:
        lessons.append({
            "title": title,
            "category": cat,
            "categoryLabel": f"Ages 9–12 Explore • {cat_label}",
            "prereq": prereq,
            "ageBand": "9-12",
            "stageName": "Explore",
            "seq": current_day,
            "day": current_day,
            "concept": concept,
            "materials": [mat, "Calculator and scientific notebook"],
            "dialect": get_dialect("Luganda", d_word, d_mean),
            "story": f"Exploring scholars in our community engage rigorous investigation through {title.lower()}.",
            "askFirst": f"What mechanisms and scientific laws make {title.lower()} function?",
            "listenFor": f"That {concept.lower()} explains the underlying universal principle.",
            "explainSimply": f"{concept}! By examining the variables and equations, we uncover universal laws.",
            "actName": f"Rigorous Mission: {title}",
            "actSteps": [
                f"Gather {mat.lower()}.",
                f"Formulate a hypothesis and test: {concept.lower()}.",
                "Record your measurements and evaluate errors."
            ],
            "quizQ": f"What fundamental law applies in {title}?",
            "quizOpts": [concept, "Arbitrary coincidence", "Unprovable speculation"],
            "quizIdx": 0,
            "quizExp": f"{concept} is mathematically and empirically validated!",
            "bitePrompt": f"Solve one quantitative question for {title.lower()}.",
            "biteAction": f"Calculate the exact result: {concept}!"
        })
        current_day += 1

    # =========================================================================
    # AGES 13–16: INNOVATE (68 LESSONS: Day 176 to 243)
    # Stage: 'Innovate'
    # Includes Systematic Math: Differentiation BEFORE Integration!
    # =========================================================================
    age13_16_raw = [
        # Advanced Mathematics & Calculus Sequence (16 lessons)
        ("Linear Functions and Slope-Intercept Form (y = mx + c)", "math", "Algebra: Linear Models", "Pre-Algebra", "Rate of change (m = rise/run) and initial conditions (c)", "Graph paper, ruler", "Layini y'omukutu", "Linear slope"),
        ("Quadratic Equations: Factoring and the Quadratic Formula", "math", "Algebra: Quadratics", "Linear Functions", "Solving ax^2 + bx + c = 0 to find parabolic roots and projectile peaks", "Formula sheet, graph", "Enkula y'ekidiba", "Parabola"),
        ("System of Linear Equations: Elimination and Substitution", "math", "Simultaneous Equations", "Linear Functions", "Finding the intersection coordinate of two simultaneous market equations", "Paper and ruler", "Ennyingo ezikwatagana", "Simultaneous equations"),
        ("Exponents, Radicals and Scientific Notation", "math", "Algebra: Exponents", "Linear Functions", "Laws of indices (x^a * x^b = x^(a+b)) and expressing astronomical distances", "Scientific calculator", "Amannyi g'ennamba", "Exponents"),
        ("Logarithms and Exponential Growth: Population & Bacteria", "math", "Exponential Modeling", "Exponents, Radicals", "Logarithmic scales (pH, Richter) and modeling compound bacteria doubling", "Log graph paper", "Okweyongera kw'ennamba", "Exponential growth"),
        ("Right-Triangle Trigonometry: SOH-CAH-TOA and Surveying", "math", "Trigonometry Foundations", "Angles and Triangles", "Using sine, cosine, and tangent to calculate tree and mast heights from angles", "Clinometer, tape measure", "Ensonda z'ekisenge", "Trigonometry"),
        ("The Unit Circle and Trigonometric Waves (Sine & Cosine)", "math", "Trigonometric Functions", "Right-Triangle Trigonometry", "Visualizing periodic waves of AC electricity and sound oscillations", "Circle graph sheet", "Engoye z'amasannyalaze", "Sine waves"),
        ("Polynomial Division and the Remainder Theorem", "math", "Algebra: Polynomials", "Quadratic Equations", "Dividing higher-order polynomials to find algebraic factors", "Notebook", "Okugaba polynomial", "Polynomial division"),
        ("Sequences and Series: Arithmetic and Geometric Progressions", "math", "Discrete Mathematics", "Linear Functions", "Calculating nth terms and series sums for financial loan amortization", "Formula sheet", "Ennamba eziddiragana", "Series"),
        ("Limits and Continuity: Approaching the Infinitesimal", "math", "Calculus: Limits", "Linear Functions", "Evaluating lim(x->a) f(x) and defining continuous functions at points", "Limit charts", "Ekkomo", "Limit"),
        ("Average vs Instantaneous Rate of Change: The Secant to Tangent", "math", "Calculus: Rate of Change", "Limits and Continuity", "Shrinking delta-x toward zero so the secant line becomes the tangent line", "Graph paper", "Embiro z'ekiseera", "Instantaneous rate"),
        ("The Derivative: First Principles and Power Rule (DIFFERENTIATION)", "math", "Calculus: Differentiation", "Average vs Instantaneous Rate of Change", "Differentiating f'(x) = lim(h->0) [f(x+h) - f(x)]/h; power rule d/dx[x^n] = n*x^(n-1)", "Graph paper", "Okusala obukondo", "Differentiation"),
        ("Product, Quotient, and Chain Rules for Derivatives", "math", "Calculus: Derivative Rules", "The Derivative: First Principles", "Differentiating complex composite functions: d/dx[f(g(x))] = f'(g(x)) * g'(x)", "Rule sheet", "Amateeka g'okusala", "Chain rule"),
        ("Optimization and Curve Sketching: Maxima, Minima, and Inflection", "math", "Calculus: Applied Extrema", "Product, Quotient, and Chain Rules", "Setting f'(x) = 0 to maximize enterprise profits and minimize material costs", "Graph notebook", "Okukuza amagoba", "Optimization"),
        ("Area Under Curves and Riemann Sums: Lead-in to Accumulation", "math", "Calculus: Riemann Sums", "Optimization and Curve Sketching", "Summing rectangular slices under a curve to approximate total accumulated area", "Grid paper", "Obunene bw'ekifo", "Riemann area"),
        ("The Definite Integral and Fundamental Theorem of Calculus (INTEGRATION)", "math", "Calculus: Integration", "Area Under Curves and Riemann Sums", "Anti-differentiation: Integral from a to b of f(x)dx = F(b) - F(a); finding total accumulated work and distance", "Integration table", "Okugatta ebitundu", "Integration"),

        # Physics, Chemistry & Applied Science (16 lessons)
        ("Newton's Second Law: Force, Mass, and Acceleration (F = ma)", "science", "Classical Mechanics", "Newton's First Law", "Calculating net acceleration produced on vehicle loads by motive force", "Spring scale, wheeled cart", "Amaanyi n'Embiro", "Force and acceleration"),
        ("Work, Gravitational Potential, and Kinetic Energy", "science", "Energy Conservation", "Newton's Second Law", "Work = F * d; converting mgh at hilltops into 1/2 mv^2 kinetic speed at bottoms", "Inclined track, marble", "Amaanyi g'emirimu", "Work and kinetic energy"),
        ("Electrical Circuits: Ohm's Law and Power (V = IR, P = IV)", "science", "Electrodynamics", "Simple Circuits", "Calculating resistance, voltage drops, and wire heat generation in solar home systems", "Multimeter, resistors, battery", "Etteeka lya Ohm", "Ohm's Law"),
        ("Series and Parallel Circuits: Voltage, Current, and Household Wiring", "science", "Applied Electricity", "Electrical Circuits: Ohm's Law", "Why household lamps are wired in parallel so one bulb failure does not darken all", "Breadboard, bulbs, switches", "Emikutu gy'amasannyalaze", "Circuit topologies"),
        ("Electromagnetism: Coils, Motors, and Electric Generators", "science", "Electromagnetism", "Series and Parallel Circuits", "Faraday's Law: Rotating a copper coil inside a magnet produces electric current", "Copper wire, magnet, nail", "Magineeti n'Amasannyalaze", "Electromagnetism"),
        ("Optics: Snell's Law of Refraction and Lens Equations", "science", "Wave Optics", "Reflecting Light", "Bending light rays through water and glass lenses: n1*sin(theta1) = n2*sin(theta2)", "Glass cup, laser/flashlight", "Okukyama kw'ekitangaala", "Refraction"),
        ("Thermodynamics: Heat Transfer (Conduction, Convection, Radiation)", "science", "Thermal Physics", "Solid, Liquid, and Gas", "Designing energy-saving clay cookstoves that reduce charcoal consumption by 60%", "Thermometer, metal bar, candle", "Okubuguma", "Heat transfer"),
        ("The Periodic Table: Electron Orbitals and Valence Electrons", "science", "Atomic Chemistry", "Acids and Bases", "How electron configuration in valence shells determines chemical reactivity and bonds", "Periodic table chart", "Tteebulo y'ebintu", "Periodic table"),
        ("Ionic and Covalent Chemical Bonds: Salt vs Sugar Molecules", "science", "Molecular Chemistry", "The Periodic Table", "Transferring electrons (NaCl ionic bond) vs sharing electrons (H2O, CH4 covalent bond)", "Molecular ball models", "Enkwatagana y'atomu", "Chemical bonding"),
        ("Balancing Chemical Equations and Stoichiometry", "science", "Chemical Reactions", "Ionic and Covalent Bonds", "Conservation of mass: equal numbers of each atomic element on reactant and product sides", "Reaction balance cards", "Okwekanasa kwa kemiko", "Balancing reactions"),
        ("Acid-Base Titration: Calculating Molarity with Natural Indicators", "science", "Quantitative Chemistry", "Balancing Chemical Equations", "Using burettes and neutralization reactions to calculate unknown chemical concentrations", "Pipette, acid, base, indicator", "Okupima kaawa", "Titration"),
        ("Cellular Respiration and ATP: Fueling the Human Body", "science", "Cellular Biology", "Photosynthesis", "Breaking down glucose with oxygen to yield 36 ATP cellular energy units", "Cell diagram", "Amaanyi g'obutoffaali", "Cellular respiration"),
        ("Mendelian Genetics and Punnett Squares: Dominant vs Recessive", "science", "Genetics & Inheritance", "Living Puppy vs Non-Living Stone", "Predicting 3:1 phenotypic ratios in hybrid maize and poultry breeding", "Punnett square chart", "Ensonga z'obuzaale", "Genetics"),
        ("DNA Structure and Protein Synthesis: Transcription & Translation", "science", "Molecular Genetics", "Mendelian Genetics", "Double helix unwinding to mRNA transcription and ribosome translation into amino acids", "DNA pipe cleaner model", "DNA y'obulamu", "DNA structure"),
        ("Ecosystem Equilibrium: Carrying Capacity and Population Dynamics", "science", "Population Ecology", "Ecosystem Food Webs", "Logistic growth curves (S-curves) and factors limiting animal and human populations", "Graph paper", "Obugumu bw'obutonde", "Carrying capacity"),
        ("Biogas Generation: Anaerobic Digestion of Cow Dung to Methane", "science", "Renewable Energy Chemistry", "Balancing Chemical Equations", "Methanogenic bacteria fermenting organic manure into clean methane cooking gas", "Mini anaerobic jar model", "Ggaasi y'ebisaaniiko", "Biogas production"),

        # Rhetoric, World Languages & Philosophy (12 lessons)
        ("Classical Rhetoric: Mastering Ethos, Pathos, and Logos", "language", "Classical Rhetoric", "Writing a Persuasive Five-Paragraph", "Crafting persuasive speeches balancing credibility (ethos), emotion (pathos), and logic (logos)", "Speech draft", "Amagezi g'okwogera", "Rhetoric"),
        ("Mandarin Intermediate: Tones, Particles (Ma, De, Ba), and Food", "language", "Mandarin Fluency", "Mandarin Character Logic", "Ordering meals and asking questions naturally using Mandarin grammatical particles", "Dialogue cards", "Zhongwen", "Mandarin language"),
        ("Spanish Past Tenses: Pretérito Indefinido vs Imperfecto", "language", "Spanish Grammar", "Spanish Verb Conjugation", "Distinguishing between completed historic actions and ongoing habitual past scenes", "Timeline chart", "Pretérito", "Past tense"),
        ("French Conversational Fluency: Navigating Transport and Travel", "language", "French Conversational", "French Question Construction", "Roleplaying airport, train, and market transactions with authentic French phonetics", "Travel scripts", "Voyage", "Travel French"),
        ("Biblical & Modern Hebrew: Reading the Shema and Everyday Phrases", "language", "Hebrew Text Analysis", "Hebrew Word Roots", "Translating ancient biblical sentences and connecting them to modern Tel Aviv street speech", "Hebrew text sheet", "Ivrit", "Hebrew"),
        ("Classical Greek: The Gospel of John (Logos) in Original Greek", "language", "Hellenic Text Analysis", "Greek Alphabet", "Reading John 1:1 ('En arche en ho Logos') and analyzing linguistic depth", "Greek text and lexicon", "Koine Greek", "Ancient Greek"),
        ("Latin Legal & Medical Terminology: Habeas Corpus to Post Mortem", "language", "Latin Jurisprudence & Medicine", "Classical Greek & Latin Roots", "Mastering 30 foundational Latin phrases used in modern courts and hospitals", "Terminology flashcards", "Lex", "Law in Latin"),
        ("Arabic Sentence Structure: Nominal vs Verbal Sentences", "language", "Arabic Syntax", "Arabic Calligraphy", "Constructing sentences starting with nouns (Jumla Ismiyya) vs verbs (Jumla Fi'liyya)", "Sentence strips", "Jumla", "Arabic sentences"),
        ("Critical Thinking: Discerning Logical Fallacies in Debates", "language", "Informal Logic", "Classical Rhetoric", "Identifying ad hominem, straw man, false dilemma, and slippery slope fallacies", "Debate transcripts", "Obubi bw'empaka", "Fallacies"),
        ("Comparative World Literature: The Epic Hero's Journey", "language", "Literary Analysis", "The African Folktale", "Comparing Gilgamesh, Sundiata Keita, Odysseus, and biblical Joseph archetypes", "Hero's journey circle", "Engendo y'omuzira", "Hero's journey"),
        ("Formal Research Paper: Citations, Peer Review, and Objectivity", "language", "Academic Writing", "Writing a Persuasive Five-Paragraph", "Authoring an 8-page cited scientific inquiry with Chicago or APA bibliography", "Citation style guide", "Okunoonyereza okw'ekikugu", "Formal research"),
        ("Ethical Philosophy: Utilitarianism, Deontology, and Virtue Ethics", "humanity-society", "Moral Philosophy", "The Golden Rule", "Evaluating community dilemmas through consequence, moral duty, and character virtues", "Case study cards", "Empisa ez'ebuziba", "Ethics"),

        # Technology, Coding & Electronics (12 lessons)
        ("Computer Science: Logic Gates (AND, OR, NOT, XOR)", "technology", "Digital Logic", "Binary Numbers", "Building truth tables and combining semiconductor switches into ALU adder circuits", "Logic gate chips/breadboard", "Obwongo bw'ebyuma", "Logic gates"),
        ("Python Programming: Variables, Data Types, and User Input", "technology", "Software Engineering", "Algorithmic Thinking", "Writing basic script programs to calculate mathematical formulas automatically", "Computer or mobile terminal", "Pulogulaamu", "Programming"),
        ("Python Control Flow: If-Else Conditionals and While/For Loops", "technology", "Software Engineering", "Python Programming", "Automating iterative calculations and simulation models with loop structures", "Python IDE or paper code", "Okuddiŋŋana kw'enkola", "Loops"),
        ("Python Data Structures: Lists, Dictionaries, and File I/O", "technology", "Data Engineering", "Python Control Flow", "Storing inventory records in dictionary key-values and writing to CSV disk files", "Code editor", "Olukalala lw'ebintu", "Data lists"),
        ("Solar PV Microgrid Design: Sizing Inverters and Battery Banks", "technology", "Electrical Engineering", "Solar Photovoltaics", "Calculating peak watt-hour loads and sizing deep-cycle LiFePO4 battery banks", "Engineering calculation sheet", "Amasannyalaze ag'ebuziba", "Solar microgrid"),
        ("Microcontroller Automation: Reading Sensors with Arduino/ESP32", "technology", "Embedded Systems", "Microcontrollers & Sensors", "Programming microcontrollers in C++ to monitor soil humidity and toggle relays", "ESP32 board, sensor, LED", "Ebyuma ebikola byokka", "Microcontroller"),
        ("Mechanical Advantage: Gear Trains, Pulleys, and Torque Ratios", "technology", "Mechanical Engineering", "How Bicycles Balance", "Calculating speed vs torque trade-offs in compound spur gear systems", "Gears and shafts", "Ebyuma ebizetoloola", "Gears & torque"),
        ("Welding and Metal Fabrication Basics: Structural Safety", "practical-skills", "Manufacturing Engineering", "Safe Hand Tools", "Arc welding safety, joint penetration, and fabricating secure agricultural gates", "Metal scrap inspection", "Okuyunga ebyuma", "Metal welding"),
        ("Low-Cost Construction: Interlocking Stabilized Soil Blocks (ISSB)", "technology", "Sustainable Civil Engineering", "Building a Mud Brick", "Pressing soil-cement mixtures with manual cinva-ram presses without firewood burning", "Block sample, soil sieve", "Amatoffaali ag'amazzi", "ISSB blocks"),
        ("Drip Irrigation Engineering: Pressure Compensation and Flow Rate", "technology", "Agricultural Engineering", "Designing a Rainwater Gutter", "Calculating emitter discharge (liters/hour) and header pipe pressure head across 1 acre", "Drip tape sample, emitter", "Okufukirira okutonnya", "Drip irrigation"),
        ("Drone & Satellite Remote Sensing for Precision Farming", "technology", "Geospatial Technology", "Coordinates and Map Grids", "Analyzing NDVI crop vegetation health maps to detect nitrogen and water stress", "Satellite image printouts", "Ebifaananyi by'enkola", "Remote sensing"),
        ("Open-Source Computer Hardware: Repairing Motherboards & Power Supplies", "technology", "Hardware Maintenance", "Series and Parallel Circuits", "Testing capacitors, diagnosing blown fuses, and replacing SMPS voltage regulators", "Faulty PSU, multimeter", "Okuddaabiriza kompyuta", "Computer repair"),

        # Business, Agribusiness & Leadership (12 lessons)
        ("The Business Model Canvas: Designing Scalable Enterprises", "finance", "Enterprise Strategy", "The 5,000 UGX Enterprise Challenge", "Mapping value proposition, customer segments, channels, and revenue streams", "Canvas poster", "Enteekateeka y'ebyobusuubuzi", "Business canvas"),
        ("Financial Statements: Profit & Loss, Balance Sheet, and Cash Flow", "finance", "Corporate Accounting", "Bookkeeping with T-Accounts", "Understanding net income vs operating cash flow to prevent enterprise insolvency", "Financial statement forms", "Ebitabo by'ensimbi", "Financial statements"),
        ("Break-Even Analysis and Contribution Margin Modeling", "finance", "Managerial Economics", "Linear Functions", "Calculating exact unit sales volume needed to cover fixed overhead costs: BEP = FC / (P - VC)", "Spreadsheet or ledger", "Ekkomo ly'amagoba", "Break-even point"),
        ("Agro-Processing & Value Addition: Transforming Cassava to High-Grade Starch", "agriculture", "Agricultural Industrialization", "Unit Economics", "Multiplying farm gate revenues 4x through washing, grating, drying, and packaging", "Cassava flour sample", "Okwongera omutindo", "Value addition"),
        ("Cooperative Enterprise Bylaws and Governance Protocols", "finance", "Institutional Governance", "Cooperative SACCOs", "Drafting democratic shareholder voting rules, dividend reserve funds, and audit committee policies", "Bylaws document", "Amateeka g'ekibiina", "Cooperative bylaws"),
        ("Contract Law and Ethical Business Agreements", "finance", "Commercial Law", "Negotiation with Integrity", "Essential elements of legally enforceable contracts: offer, acceptance, consideration, and good faith", "Sample contract", "Endagaano y'obusuubuzi", "Contracts"),
        ("Market Research: Survey Design, Sampling, and Customer Discovery", "finance", "Marketing Science", "Probability with Colored Beans", "Conducting 50 unbiased interviews in local town markets to validate customer willingness to pay", "Survey questionnaire", "Okunoonyereza mu katale", "Market research"),
        ("Supply Chain Logistics: Cold-Chain Transport for Perishables", "finance", "Operations Management", "Thermodynamics", "Preventing 40% harvest spoilage using evaporative cooling boxes and organized routing", "Logistics flow diagram", "Entambula y'ebyamaguzi", "Supply chain"),
        ("Servant Leadership: Leading by Serving Community Needs First", "godly-life-skills", "Leadership Ethics", "David and Goliath", "The highest leader is the one who washes the feet and serves others with humility", "Leadership journal", "Obukulembeze obw'obuweereza", "Servant leadership"),
        ("Public Health Campaigns: Eradicating Vector-Borne Diseases", "humanity-society", "Epidemiology & Community Health", "Microorganisms", "Designing community action eliminating stagnant mosquito pools and boiling water", "Epidemiology map", "Eby'obulamu mu kitundu", "Public health"),
        ("Environmental Impact Assessment: Protecting Wetlands and Forests", "science", "Environmental Policy", "Ecosystem Equilibrium", "Conducting structured biodiversity audits before clearing land or installing infrastructure", "EIA checklist", "Okukuuma entobazi", "Wetland conservation"),
        ("Disaster Preparedness and Emergency First Aid Response", "practical-skills", "Emergency Medicine", "Human Skeleton and Muscles", "Treating arterial bleeding, bone fractures, burns, and CPR emergency resuscitation", "First aid kit, triangular bandage", "Obujjanjabi obusookerwako", "First aid")
    ]

    for title, cat, cat_label, prereq, concept, mat, d_word, d_mean in age13_16_raw:
        lessons.append({
            "title": title,
            "category": cat,
            "categoryLabel": f"Ages 13–16 Innovate • {cat_label}",
            "prereq": prereq,
            "ageBand": "13-16",
            "stageName": "Innovate",
            "seq": current_day,
            "day": current_day,
            "concept": concept,
            "materials": [mat, "Engineering notebook and graphing calculator"],
            "dialect": get_dialect("Luganda", d_word, d_mean),
            "story": f"Innovative secondary scholars tackle sophisticated global challenges through mastery of {title.lower()}.",
            "askFirst": f"How do theoretical formulas in {title.lower()} translate to real-world impact?",
            "listenFor": f"That {concept.lower()} provides mathematical and operational precision.",
            "explainSimply": f"{concept}! Master the proofs, models, and real-world industrial executions.",
            "actName": f"Advanced Laboratory: {title}",
            "actSteps": [
                f"Inspect apparatus: {mat.lower()}.",
                f"Derive and execute the experimental protocol: {concept.lower()}.",
                "Perform error analysis and write an engineering lab report."
            ],
            "quizQ": f"What is the foundational requirement for {title}?",
            "quizOpts": [concept, "Blind guesswork", "Disregarding boundary conditions"],
            "quizIdx": 0,
            "quizExp": f"{concept} is the exact mathematical/scientific foundation!",
            "bitePrompt": f"Derive or calculate 1 key problem in {title.lower()}.",
            "biteAction": f"Calculate the precise value: {concept}!"
        })
        current_day += 1

    # =========================================================================
    # AGES 17+: MASTER (72 LESSONS: Day 244 to 315)
    # Stage: 'Master'
    # Advanced career, enterprise, calculus applications, international diplomacy
    # =========================================================================
    age17_plus_raw = [
        # Quantitative Modeling & Advanced Applied Math (15 lessons)
        ("Differential Equations: First-Order Separable Models", "math", "Applied Differential Equations", "The Definite Integral and Fundamental Theorem of Calculus (INTEGRATION)", "Solving dy/dx = g(x)p(y) to model cooling rates and viral transmission curves", "Calculation sheets", "Ennyingo ez'enjawulo", "Differential equations"),
        ("Second-Order Linear Differential Equations: Vibrations & RLC Circuits", "math", "System Dynamics", "Differential Equations: First-Order", "Solving a*y'' + b*y' + c*y = 0 with characteristic equations for damped oscillatory motion", "Engineering notebook", "Okunyeenya kw'ebyuma", "Second order diff eq"),
        ("Multivariable Calculus: Partial Derivatives and Gradient Vectors", "math", "Multivariable Calculus", "The Derivative: First Principles", "Calculating del-f = [df/dx, df/dy] to find steepest ascent in multidimensional cost functions", "3D coordinate graph", "Okusala mu ngeri eziwerako", "Partial derivatives"),
        ("Multiple Integrals: Calculating Volume and Mass of Irregular Solids", "math", "Multivariable Calculus", "The Definite Integral and Fundamental Theorem of Calculus", "Double and triple integrals over spatial regions: double-integral f(x,y) dA", "3D calculus sheet", "Okugatta kw'obunene", "Multiple integrals"),
        ("Linear Algebra: Matrices, Determinants, and Vector Transformations", "math", "Linear Algebra", "System of Linear Equations", "Using matrix multiplication, eigenvalues, and eigenvectors for structural strain analysis", "Matrix ledger", "Emmeeza z'ennamba", "Matrices"),
        ("Linear Programming and the Simplex Method for Farm Yield Optimization", "math", "Operations Research", "Linear Functions", "Maximizing multi-crop profit objective functions subject to acreage, water, and labor constraints", "Simplex tableau sheets", "Okulonda ebisembayo obulungi", "Linear programming"),
        ("Statistical Inference: Hypothesis Testing, T-Tests, and P-Values", "math", "Inferential Statistics", "Probability with Colored Beans", "Determining if new organic fertilizers produce statistically significant crop yield improvements (p < 0.05)", "Statistical tables", "Okukakasa mu bibalo", "Hypothesis testing"),
        ("Regression Analysis: Linear, Multi-variable, and Logistic Modeling", "math", "Econometrics & Data Science", "Linear Functions", "Fitting least-squares trend lines to predict market commodity pricing based on rainfall and oil costs", "Regression dataset", "Okulagula ebigwamu", "Regression modeling"),
        ("Time Value of Money: Net Present Value (NPV) and Internal Rate of Return (IRR)", "finance", "Quantitative Corporate Finance", "Sequences and Series", "Discounting future enterprise cash flows at capital cost rates to evaluate capital investments", "Financial calculator", "Omuwendo gw'ekiseera", "Time value of money"),
        ("Stochastic Processes and Markov Chains: Predicting Weather & Queues", "math", "Applied Probability", "Statistical Inference", "Transition probability matrices predicting transition states between dry and rainy seasons", "Markov state diagrams", "Embeera ezikyuuka", "Markov chains"),
        ("Fourier Analysis: Decomposing Complex Waves into Harmonics", "math", "Harmonic Analysis", "The Unit Circle and Trigonometric Waves", "Decomposing messy electrical signals into pure fundamental frequencies and harmonics", "Fourier graph", "Okusesoma kw'amaloboozi", "Fourier analysis"),
        ("Actuarial Risk Modeling: Life Tables and Micro-Insurance Sizing", "finance", "Actuarial Science", "Statistical Inference", "Calculating premiums for village healthcare mutual funds based on disease probability distributions", "Actuarial mortality tables", "Okupima obulabe", "Risk modeling"),
        ("Game Theory: Nash Equilibrium and Cooperative Strategies", "math", "Strategic Decision Theory", "Probability with Colored Beans", "Analyzing prisoner's dilemma payoffs to establish cooperative pricing across regional markets", "Payoff matrix cards", "Amagezi g'okuzannya", "Game theory"),
        ("Numerical Methods: Newton-Raphson Method and Runge-Kutta Approximations", "math", "Computational Mathematics", "The Derivative: First Principles", "Iterative root-finding algorithms when exact closed-form algebraic solutions do not exist", "Code/notebook", "Enkola y'okubaza", "Numerical methods"),
        ("Vector Calculus: Divergence, Curl, and Green's Theorem", "math", "Advanced Field Theory", "Multivariable Calculus", "Evaluating fluid flow divergence and vorticity around turbine blades and irrigation channels", "Vector field sheets", "Amaanyi g'omukutu", "Vector calculus"),

        # Renewable Energy, Industrial Engineering & Technology (15 lessons)
        ("Three-Phase AC Power Systems: Generation, Transformers, and Grid Stability", "technology", "Electrical Power Engineering", "Series and Parallel Circuits", "Balancing Delta and Wye transformer configurations for industrial grain mills and mini-grids", "Three-phase schematics", "Amasannyalaze ga phase ssatu", "Three-phase power"),
        ("Commercial Solar Farm Engineering: High-Voltage Strings and SCADA Monitoring", "technology", "Renewable Energy Engineering", "Solar PV Microgrid Design", "Designing 100kW string inverters, lightning arrestors, and real-time cloud data telemetry", "Solar system blueprints", "Ennimiro y'amasannyalaze", "Solar farm design"),
        ("Biochemical Engineering: Industrial Methane Digesters and Bio-Fertilizers", "technology", "Bioengineering", "Biogas Generation", "Continuous-feed digester sizing, temperature regulation, and bottling purified bio-methane", "Digester blueprints", "Ekikolero kya biyo-ggaasi", "Industrial biogas"),
        ("Geotechnical Engineering: Soil Mechanics, Bearing Capacity, and Foundations", "technology", "Civil Engineering", "Low-Cost Construction", "Calculating soil shear strength and foundation depth to prevent building settlement cracks", "Soil core penetrometer", "Emusingi gw'ekizimbe", "Foundation engineering"),
        ("Hydraulic Engineering: Open-Channel Flow and Spillway Design", "technology", "Water Resources Engineering", "Hydraulic Excavators", "Manning's formula calculations for irrigation canals, culverts, and earth dam spillways", "Hydraulic flow charts", "Omukutu gw'amazzi omunene", "Canal engineering"),
        ("PLC Programming: Industrial Automation with Ladder Logic", "technology", "Industrial Automation", "Computer Science: Logic Gates", "Programming Programmable Logic Controllers (PLCs) for conveyor sorting and bottling plants", "PLC simulator software/paper", "Obwongo bw'amakolero", "PLC automation"),
        ("IoT Cloud Telemetry: Deploying LoRaWAN Sensor Networks on Farmlands", "technology", "Telecommunications & IoT", "Microcontroller Automation", "Deploying 10km-range low-power radio nodes to monitor borehole water levels and weather", "LoRa gateway and node", "Emikutu gya wayaleesi", "LoRaWAN networks"),
        ("Refrigeration & Heat Pumps: Vapor-Compression Thermodynamic Cycles", "technology", "Thermal Engineering", "Thermodynamics: Heat Transfer", "Analyzing pressure-enthalpy (P-h) diagrams to build solar-powered milk chillers", "P-h refrigeration chart", "Ekyuma ekiziyiza okwonooneka", "Refrigeration cycles"),
        ("Computer Vision & Machine Learning: Automated Crop Disease Detection", "technology", "Artificial Intelligence", "Python Programming", "Training convolutional neural network (CNN) models to diagnose cassava mosaic disease from mobile photos", "Python notebook, image set", "Okusoma kwa kompyuta", "Computer vision"),
        ("Embedded Firmware Engineering: Real-Time Operating Systems (FreeRTOS)", "technology", "Computer Engineering", "Python Programming", "Writing multi-threaded deterministic firmware with task scheduling and semaphore locks", "Firmware code sheet", "Enkola y'ebyuma ey'ebuziba", "Embedded firmware"),
        ("Cybersecurity & Cryptography: RSA, Hashing, and Securing Mobile Money", "technology", "Cybersecurity", "Binary Numbers", "Mathematical mechanics of public-key cryptography (modular exponentiation and prime factorization)", "Crypto worksheets", "Obukuumi bw'enkola", "Cryptography"),
        ("Metal CNC Machining and Precision Tooling for Manufacturing", "practical-skills", "Advanced Manufacturing", "Welding and Metal Fabrication", "G-code programming for computerized milling of replacement tractor and water pump parts", "G-code sample sheet", "Ekyuma ekisala amayinja n'ebyuma", "CNC machining"),
        ("Water Desalination and Reverse Osmosis Membrane Engineering", "technology", "Environmental Engineering", "Water Purification Station", "Calculating osmotic pressure and flux rates to transform saline borehole water to drinking water", "RO membrane schematics", "Okuggya omunnyo mu mazzi", "Reverse osmosis"),
        ("Off-Grid Hydroelectric Turbines: Pelton Wheel and Francis Turbine Design", "technology", "Hydroelectric Engineering", "Mechanical Advantage", "Calculating head (meters) and flow rate (liters/sec) to generate clean village hydropower: P = eta * rho * g * Q * H", "Turbine blueprints", "Amasannyalaze g'amazzi", "Hydroelectric design"),
        ("Sustainable Materials Science: Geopolymer Cements and Carbon-Negative Concrete", "technology", "Materials Science", "Solid, Liquid, and Gas", "Formulating zero-clinker cements from volcanic ash and slag to slash construction carbon footprints", "Mix design spec sheet", "Sseminti w'obutonde", "Green materials"),

        # Agribusiness, Industrial Processing & Value Chains (14 lessons)
        ("Commercial Poultry Production: Broiler and Layer Flocks (1,000+ Birds)", "agriculture", "Livestock Enterprise", "Caring for Backyard Hens", "Feed conversion ratios (FCR), automated nipple drinking lines, and bio-security protocols", "Flock record sheets", "Obulunzi bw'enkoko obw'obusuubuzi", "Commercial poultry"),
        ("Commercial Dairy Farming: Silage Making, TMR, and Milk Yield Optimization", "agriculture", "Dairy Husbandry", "Living Puppy vs Non-Living Stone", "Formulating total mixed rations (TMR) and fermenting green maize silage for dry-season yields", "Silage sample, feed sheet", "Amatuuka g'amata", "Commercial dairy"),
        ("Intensive Aquaculture: High-Density Tilapia and Catfish Recirculating Systems", "agriculture", "Aquaculture Engineering", "Photosynthesis", "Dissolved oxygen management, bio-filter nitrifying bacteria, and automated pellet feeding", "Water test kit, fish tank", "Obulunzi bw'ebyennyanja", "Commercial aquaculture"),
        ("Commercial Horticulture: Greenhouse Climate Control and Fertigation", "agriculture", "Protected Agriculture", "Plant Anatomy", "Controlling relative humidity, VPD, and nutrient EC/pH for export-grade bell peppers and tomatoes", "Greenhouse spec sheet", "Obulimi bw'omu kiyumba", "Greenhouse horticulture"),
        ("Grain Storage Engineering: Metal Silos and Hermetic Bag Technology", "agriculture", "Post-Harvest Engineering", "Fungi and Mushrooms", "Preventing aflatoxin mold and weevil infestation without synthetic insecticides", "Hermetic bag, grain moisture tester", "Okutereka emmere", "Grain silos"),
        ("Soap, Detergent, and Disinfectant Industrial Chemical Formulation", "practical-skills", "Chemical Industrialization", "Acids and Bases", "Saponification stoichiometry: reacting plant oils with sodium hydroxide to manufacture bars and liquid sanitizers", "Oils, lye, hydrometer", "Okukola ssaabuni", "Soap manufacturing"),
        ("Essential Oil Distillation: Steam Extraction of Lemongrass and Eucalyptus", "practical-skills", "Aromachemical Processing", "Solid, Liquid, and Gas", "Building stainless steel steam distillation retorts to extract high-value export cosmetic oils", "Still schematic, oil sample", "Amafuta g'ebyokulongoosa", "Essential oil distillation"),
        ("Apiculture at Scale: Commercial Honey and Beeswax Production", "agriculture", "Commercial Apiculture", "The Busy Honeybee", "Managing 50 Kenyan Top-Bar and Langstroth hives, seasonal nectar flows, and honey centrifugal extraction", "Smoker, veil, honey jar", "Obusuubuzi bw'omubisi gw'enjuki", "Commercial beekeeping"),
        ("Seed Production and Seed Sovereignty: Certified Open-Pollinated Varieties", "agriculture", "Seed Systems", "Mendelian Genetics", "Isolation distances, roguing diseased parent plants, and germplasm preservation of heritage crops", "Seed samples, moisture tester", "Okukuuma ensigo", "Seed sovereignty"),
        ("Feed Mill Formulation: Least-Cost Pearson Square Rations", "agriculture", "Animal Nutrition", "Linear Programming and the Simplex", "Calculating balanced crude protein (CP) and metabolizable energy (ME) rations using local maize bran and soybean meal", "Feed formula sheet", "Okukola emmere y'ebisolo", "Feed mill formulation"),
        ("Coffee and Cocoa Quality Cupping: Specialty Grade Processing", "agriculture", "Commodity Value Chains", "Agro-Processing & Value Addition", "Washed, natural, and honey anaerobic fermentations to achieve 85+ SCA specialty export premiums", "Coffee bean moisture tester, cupping spoons", "Omutindo gw'emmwanyi", "Specialty coffee processing"),
        ("Meat Processing: Hygienic Abattoir Operations and Cold Storage", "practical-skills", "Food Safety Engineering", "Microorganisms", "HACCP hygiene control points, humane handling, hanging carcass maturation, and vacuum packaging", "HACCP checklist", "Okulongoosa ennyama", "HACCP meat processing"),
        ("Medicinal Plants Formulation: Standardized Herbal Extracts and Tinctures", "science", "Pharmacognosy", "Photosynthesis", "Ethanol and aqueous extraction protocols for Artemisia annua (malaria) and Moringa oleifera", "Extraction jars, hydrometer", "Eddagala ly'ebimera", "Herbal pharmacognosy"),
        ("Mushroom Commercial Cultivation: Oyster and Button Substrate Pasteuration", "agriculture", "Commercial Mycology", "Fungi and Mushrooms", "Sterilizing cotton waste and agricultural straw in steam drums for 14-day fruiting cycles", "Substrate bag, fruiting chamber", "Obusuubuzi bw'obubaala", "Commercial mushrooms"),

        # Enterprise Finance, Governance & Wealth Creation (14 lessons)
        ("Assets vs Liabilities: Cash Flow Architecture for Generational Wealth", "finance", "Wealth Building", "Financial Statements", "Assets put cash into your pocket every month; liabilities take cash out. Designing resilient asset portfolios", "Asset balance worksheet", "Emmaali n'Amabanja", "Assets and liabilities"),
        ("Corporate Capital Structure: Debt vs Equity Financing and WACC", "finance", "Corporate Finance", "Time Value of Money", "Calculating Weighted Average Cost of Capital (WACC) to choose between bank debt, venture equity, and retained earnings", "Capital structure model", "Ensimbi z'okutandika ekinene", "Capital structure"),
        ("Property Law, Land Titling, and Due Diligence in Real Estate", "finance", "Real Estate Law", "Contract Law and Ethical Business", "Verifying cadastral survey marks, registry searches, encumbrances, and freehold vs leasehold titles", "Land deed inspection", "Eby'ettaka n'Ebitabo", "Land property titling"),
        ("Creating Family Trusts, Wills, and Generational Succession Plans", "finance", "Estate Planning", "Corporate Capital Structure", "Preventing generational asset liquidation through formal trust bylaws, executors, and family constitutions", "Trust deed template", "Okugaba emmaali ey'olulyo", "Family trusts"),
        ("Tax Planning, Compliance, and National Fiscal Obligations (VAT & Corporate Tax)", "finance", "Tax Law & Fiscal Policy", "Corporate Accounting", "Calculating Value Added Tax (VAT), Pay-As-You-Earn (PAYE), and legal capital allowance depreciation deductions", "Tax return forms", "Omusolo gw'eggwanga", "Tax compliance"),
        ("Venture Capital Deal Structuring: SAFE Notes, Convertible Debt, and Term Sheets", "finance", "Venture Finance", "Corporate Capital Structure", "Negotiating pre-money valuations, liquidation preferences, dilution vesting, and anti-dilution clauses", "Term sheet template", "Ensimbi z'ebitongole", "Venture capital"),
        ("Commercial Bank Loan Negotiation and Covenants Compliance", "finance", "Banking Law", "Debt vs Equity Financing", "Negotiating debt covenants, debt service coverage ratios (DSCR > 1.25), and pledged collateral releases", "Loan agreement documents", "Amabanja ga bbanka", "Bank loan covenants"),
        ("Auditing and Forensic Accounting: Detecting Fraud in Cooperatives", "finance", "Forensic Auditing", "Bookkeeping with T-Accounts", "Tracing phantom vendors, bank reconciliation discrepancies, and enforcing segregation of duties", "Audit case files", "Okunoonyereza mu bitabo", "Forensic auditing"),
        ("Establishing a Formal Village Commercial SACCO or Credit Union", "finance", "Financial Institutions", "Cooperative Enterprise Bylaws", "Meeting central bank microfinance licensing, capital reserve ratios, and credit risk scoring algorithms", "Regulatory compliance files", "Bbanka y'ekibiina", "Credit union charter"),
        ("Export Trade Finance: Letters of Credit (LCs), Bill of Lading, and Incoterms", "finance", "International Trade", "Supply Chain Logistics", "Navigating CIF vs FOB Incoterms, currency hedging, and bank letters of credit for international shipments", "Letter of Credit documentation", "Obusuubuzi bw'ensi yonna", "Export trade finance"),
        ("Mergers, Acquisitions, and Business Valuation Multiples (EBITDA Multiples)", "finance", "M&A Strategy", "Financial Statements", "Valuing operating enterprises using Discounted Cash Flow (DCF) and comparable industry EBITDA enterprise multiples", "Valuation spreadsheet", "Okugatta ebitongole", "M&A valuation"),
        ("Risk Management: Commodity Futures, Hedging, and Forward Contracts", "finance", "Derivatives & Risk", "Probability with Colored Beans", "Locking in grain harvest purchase prices 6 months forward to eliminate seasonal price volatility risk", "Futures contract sheet", "Okuziyiza obulabe", "Hedging derivatives"),
        ("Public-Private Partnerships (PPP): Building Roads, Power, and Infrastructure", "finance", "Infrastructure Finance", "Corporate Capital Structure", "Structuring Build-Operate-Transfer (BOT) concessions with government ministries and development banks", "PPP concession model", "Enkolagana n'ekitongole ky'eggwanga", "Public private partnerships"),
        ("Philanthropy and Social Impact Bonds: Investing for Eternal Significance", "christian-education", "Kingdom Impact Stewardship", "Assets vs Liabilities", "Mobilizing financial capital to plant churches, establish hospitals, and eradicate rural poverty sustainably", "Impact measurement framework", "Obuweereza obw'enkomerero", "Impact stewardship"),

        # Global Languages, Diplomacy & Visionary Leadership (14 lessons)
        ("Mandarin for Global Commerce: Professional Business Negotiations", "language", "Business Mandarin", "Mandarin Intermediate", "Navigating Chinese contract protocols, factory terms, and respectful commercial relationship building (Guānxi)", "Business dialogue script", "Shāngwù Zhōngwén", "Business Mandarin"),
        ("Spanish for International Trade: Latin American Commercial Diplomacy", "language", "Commercial Spanish", "Spanish Past Tenses", "Drafting formal export contracts and conducting business meetings with Hispanic trading partners", "Trade correspondence", "Español comercial", "Commercial Spanish"),
        ("French for Pan-African Diplomacy: West & Central African Bilateral Accords", "language", "Diplomatic French", "French Conversational Fluency", "Navigating OHADA business law, bilateral trade treaties, and formal Francophone diplomatic meetings", "Diplomatic treaty drafts", "Diplomatie", "Diplomatic French"),
        ("Advanced Arabic for Middle East Trade & Gulf Cooperation Council (GCC) Markets", "language", "Commercial Arabic", "Arabic Sentence Structure", "Conducting business correspondence and partnership agreements with Dubai, Riyadh, and Doha firms", "Arabic commercial texts", "Al-Tijarah", "Arabic commerce"),
        ("Latin for Constitutional Law: Magna Carta to Modern Democratic Charters", "language", "Constitutional Jurisprudence", "Latin Legal & Medical Terminology", "Analyzing primary Latin legal texts that laid the foundation for modern rule of law and civil liberties", "Latin constitutional excerpts", "Ius Civile", "Civil Law"),
        ("Biblical Exegesis: Hebrew and Greek Hermeneutical Principles", "christian-education", "Biblical Hermeneutics", "Biblical & Modern Hebrew", "Conducting rigorous grammatical, historical, and contextual exegesis of Scripture to preach truth faithfully", "Interlinear Bible, lexicon", "Okwekenneenya Baibuli", "Exegesis"),
        ("Public Policy Authorship: Writing Legislation and White Papers", "humanity-society", "Public Administration", "Classical Rhetoric", "Drafting clear, non-partisan statutory policy bills that spur economic freedom and clean governance", "Policy bill template", "Amateeka g'eggwanga", "Legislation writing"),
        ("International Arbitration and Alternative Dispute Resolution (ADR)", "humanity-society", "Dispute Resolution", "Contract Law and Ethical Business", "Presiding as an impartial mediator or arbitrator to resolve commercial disputes out of court", "Arbitration case docket", "Okusala emisango mu mirembe", "Arbitration"),
        ("Constitutional Law and Separation of Powers: Executive, Legislative, Judicial", "humanity-society", "Constitutional Law", "Human Rights & The African Charter", "Analyzing institutional checks and balances that prevent tyranny and safeguard liberty", "National constitution", "Ssemateeka", "Constitution"),
        ("Community Crisis Leadership: Managing Epidemics, Droughts, and Natural Disasters", "godly-life-skills", "Crisis Leadership", "Public Health Campaigns", "Mobilizing volunteer relief logistics, emergency supply depots, and calm transparent communications", "Emergency response plan", "Obukulembeze mu kavuyo", "Crisis leadership"),
        ("Mentoring the Next Generation: Raising Young World Changers", "godly-life-skills", "Mentorship & Legacy", "Servant Leadership", "Designing apprenticeship frameworks that transfer skills, faith, and character to youth ages 6-18", "Mentorship log", "Okukuza abato", "Youth mentoring"),
        ("Bioethics in Medicine and Modern Biotechnology", "science", "Bioethics", "DNA Structure and Protein Synthesis", "Evaluating moral boundaries in gene editing (CRISPR), artificial intelligence, and end-of-life care", "Bioethics case studies", "Empisa mu by'obusawo", "Bioethics"),
        ("Visionary Kingdom Leadership: Transforming Nation and Marketplace", "christian-education", "Servant Leadership", "Servant Leadership", "Executing Joseph-like wisdom to store grain during abundance and govern nations with integrity and love", "Vision journal", "Obukulembeze obw'obwakatonda", "Kingdom leadership"),
        ("The Global Polyglot Capstone: Presenting a Multi-Language Community Vision", "language", "Polyglot Synthesis", "Mandarin for Global Commerce", "Presenting a unified vision for community prosperity in English, Mandarin, Spanish, French, and local dialects", "Presentation slides", "Olulimi lw'ensi yonna", "Polyglot capstone")
    ]

    for title, cat, cat_label, prereq, concept, mat, d_word, d_mean in age17_plus_raw:
        lessons.append({
            "title": title,
            "category": cat,
            "categoryLabel": f"Ages 17+ Master • {cat_label}",
            "prereq": prereq,
            "ageBand": "17+",
            "stageName": "Master",
            "seq": current_day,
            "day": current_day,
            "concept": concept,
            "materials": [mat, "Master professional portfolio and computational models"],
            "dialect": get_dialect("Luganda", d_word, d_mean),
            "story": f"Master leaders, engineers, and entrepreneurs transform whole ecosystems through high-level mastery of {title.lower()}.",
            "askFirst": f"How do you implement {title.lower()} to create generational prosperity?",
            "listenFor": f"That {concept.lower()} provides institutional and systemic execution.",
            "explainSimply": f"{concept}! Lead with excellence, rigor, and servanthearted integrity.",
            "actName": f"Executive Capstone: {title}",
            "actSteps": [
                f"Review operational materials: {mat.lower()}.",
                f"Execute the professional standard: {concept.lower()}.",
                "Produce the deliverable and present to stakeholders or community leaders."
            ],
            "quizQ": f"What is the foundational principle of {title}?",
            "quizOpts": [concept, "Superficial shortcuts", "Ignoring risk parameters"],
            "quizIdx": 0,
            "quizExp": f"{concept} establishes institutional and mathematical mastery!",
            "bitePrompt": f"Apply 1 strategic decision rule for {title.lower()}.",
            "biteAction": f"Implement or calculate: {concept}!"
        })
        current_day += 1

    return lessons

lessons_data = build_data()
print(f"Generated {len(lessons_data)} systematic lessons across all 5 age bands!")

# Write to src/data/yearRoundCurriculumData.ts
out_path = "src/data/yearRoundCurriculumData.ts"
with open(out_path, "w", encoding="utf-8") as f:
    f.write('// Comprehensive Year-Round Curriculum Dataset\n')
    f.write('// 315 Systematic Pedagogical Lessons (Days 1 to 315)\n')
    f.write('// Together with existing modules, brings total lessons to 365!\n')
    f.write('// Strictly ordered with sequenceOrder and prerequisiteTopic (e.g. Differentiation BEFORE Integration!)\n\n')
    f.write('import { LessonModule } from "../types/curriculum";\n\n')
    f.write('export const YEAR_ROUND_CURRICULUM_MODULES: LessonModule[] = [\n')

    for i, l in enumerate(lessons_data):
        id_slug = f"yr-{l['ageBand'].replace('+', 'plus')}-{l['seq']:03d}-{l['title'].lower().replace(' ', '-').replace(':', '').replace(',', '').replace('(', '').replace(')', '').replace('/', '-').replace('?', '').replace('!', '')[:40]}"
        lesson_obj = {
            "id": id_slug,
            "ageBand": l["ageBand"],
            "stageName": l["stageName"],
            "category": l["category"],
            "categoryLabel": l["categoryLabel"],
            "title": l["title"],
            "subtitle": f"Systematic lesson {l['seq']} of 365: {l['concept']}",
            "sequenceOrder": l["seq"],
            "prerequisiteTopic": l["prereq"],
            "dayOfYear": l["day"],
            "estimatedMinutes": 25,
            "parentMinutes": 7,
            "icon": "Sparkles" if l["ageBand"] == "3-5" else ("Blocks" if l["ageBand"] == "6-8" else ("Compass" if l["ageBand"] == "9-12" else ("Cpu" if l["ageBand"] == "13-16" else "GraduationCap"))),
            "themeColor": "from-amber-400 to-orange-500" if l["ageBand"] == "3-5" else ("from-emerald-500 to-teal-600" if l["ageBand"] == "6-8" else ("from-blue-500 to-indigo-600" if l["ageBand"] == "9-12" else ("from-indigo-600 to-purple-700" if l["ageBand"] == "13-16" else "from-purple-700 to-rose-700"))),
            "badgeName": f"Master of {l['title'][:25]}",
            "badgeDescription": f"Demonstrates mastery of {l['concept']}",
            "objectives": [
                f"Master key principle: {l['concept']}",
                f"Connect with prerequisite knowledge: {l['prereq']}",
                f"Apply practically in everyday life and community"
            ],
            "householdMaterials": l["materials"],
            "dialectWords": l["dialect"],
            "mission": {
                "step1_learn": {
                    "title": f"Step 1: Discover {l['title']}",
                    "duration": "7 mins",
                    "story": l["story"],
                    "keyConcept": l["concept"],
                    "localExample": f"Observed in our everyday environment: {l['concept'].lower()}."
                },
                "step2_discuss": {
                    "title": "Step 2: Socratic Family Discussion",
                    "duration": "5 mins",
                    "askFirst": l["askFirst"],
                    "listenFor": l["listenFor"],
                    "explainSimply": l["explainSimply"],
                    "parentTip": f"Guide the learner to connect {l['prereq']} with today's concept."
                },
                "step3_activity": {
                    "title": "Step 3: Hands-On Application",
                    "duration": "10 mins",
                    "gameOrExperimentName": l["actName"],
                    "instructions": l["actSteps"],
                    "whatChildLearns": f"Hands-on mastery of {l['concept']} through direct observation and practice."
                },
                "step4_quiz": {
                    "title": "Step 4: Daily Mastery Quiz",
                    "duration": "3 mins",
                    "questions": [
                        {
                            "question": l["quizQ"],
                            "options": l["quizOpts"],
                            "correctIndex": l["quizIdx"],
                            "explanation": l["quizExp"]
                        }
                    ]
                }
            },
            "parentTeachingGuide": {
                "introductoryQuestion": l["askFirst"],
                "simplifiedExplanation": l["explainSimply"],
                "safeHomeActivity": {
                    "title": l["actName"],
                    "materials": l["materials"],
                    "steps": l["actSteps"],
                    "safetyTip": "Supervise closely with common household materials."
                },
                "followUpQuestions": [
                    {
                        "question": l["askFirst"],
                        "sampleAnswer": l["listenFor"]
                    }
                ],
                "parentChallenge": f"Apply {l['title']} during a real family conversation or activity today!"
            },
            "parentChallenge": f"Apply {l['title']} during a real family conversation or activity today!",
            "fiveMinuteBite": {
                "title": f"5-Minute Bite: {l['title']}",
                "quickPrompt": l["bitePrompt"],
                "quickAction": l["biteAction"]
            },
            "whatsAppSnippet": f"📚 *HOME ACADEMY (Day {l['day']} of 365 • Ages {l['ageBand']})*\n*Topic:* {l['title']}\n*Prerequisite:* {l['prereq']}\n*Key Concept:* {l['concept']}\n*Badge:* {l['title'][:25]} 🏅",
            "audioNarrationText": f"Welcome to Day {l['day']} of our global home academy. Today we learn {l['title']}. Remember what we learned about {l['prereq']}. Today's core concept is {l['concept']}.",
            "isFeatured": (l["day"] % 7 == 0),
            "communityMission": {
                "title": f"Community Impact: {l['title']}",
                "impactGoal": f"Use {l['concept']} to bless, educate, or serve neighbors and family",
                "actionSteps": [
                    f"Share today's big insight with someone: {l['concept']}.",
                    f"Perform one practical action: {l['actName']}.",
                    "Write what happened in your community journal."
                ],
                "worldChangerPrinciple": "Knowledge becomes true power when used to bless family, neighbors, and community.",
                "dialectPhrase": "Amagezi tegasulwa lumu (Wisdom is shared, not hoarded)"
            },
            "integratedSubjectConnection": {
                "integratedSubject": "math" if l["category"] == "science" else ("science" if l["category"] == "math" or l["category"] == "numbers" else ("finance" if l["category"] in ["agriculture", "practical-skills"] else ("physics" if l["category"] in ["technology", "projects"] else "cultural-logic"))),
                "connectionTitle": f"{'Math in Science: Quantitative Measurement & Formulas' if l['category'] == 'science' else ('Science in Math: Real-World Physical Models' if l['category'] in ['math', 'numbers'] else ('Financial Math & Biology Integration' if l['category'] in ['agriculture', 'practical-skills'] else ('Physics in Technology: Energy & Forces' if l['category'] in ['technology', 'projects'] else 'Geography & Logic in Language')))}",
                "concept": f"Interdisciplinary bridge: {l['concept']} connects directly with foundational principles of {'mathematics' if l['category'] == 'science' else ('natural science' if l['category'] in ['math', 'numbers'] else ('financial arithmetic' if l['category'] in ['agriculture', 'practical-skills'] else 'applied physics'))}.",
                "practicePrompt": f"Apply cross-subject thinking: Connect {l['title']} with numerical calculations and real-world observations.",
                "calculationOrFormula": "Rate = Delta Y / Delta X" if l["category"] in ["science", "math"] else ("Yield = Production / Area" if l["category"] == "agriculture" else "Power = Work / Time")
            }
        }
        
        f.write("  " + json.dumps(lesson_obj, indent=2).replace("\n", "\n  "))
        if i < len(lessons_data) - 1:
            f.write(",\n")
        else:
            f.write("\n")

    f.write("];\n")

print(f"Successfully generated {out_path} with {len(lessons_data)} lessons!")
