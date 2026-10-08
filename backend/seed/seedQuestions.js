// Complete Question Bank: 10 Questions per Parva for all 18 Parvas (180 Total Questions)

const questionsData = [
  // ==================== PARVA 1: ADI PARVA (1-10) ====================
  {
    parvaNumber: 1,
    question: "Who was the biological father of the five Pandava princes?",
    type: "character_id",
    options: ["Dhritarashtra", "Pandu", "Bhishma", "Vidura"],
    correctAnswer: "Pandu",
    explanation: "Pandu was the father of the Pandavas, though they were conceived through divine invocations by Kunti and Madri due to a sage's curse on Pandu.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 1,
    question: "What terrible vow did Devavrata take that earned him the name 'Bhishma'?",
    type: "event_id",
    options: ["Never to touch a weapon", "Lifelong celibacy and renouncing the throne", "To fast until death", "Never to speak untruth"],
    correctAnswer: "Lifelong celibacy and renouncing the throne",
    explanation: "Devavrata took the formidable vow of celibacy and gave up his claim to the throne of Hastinapur to enable his father Shantanu to marry Satyavati.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 1,
    question: "Which architect built the deadly Palace of Lac (Lakshagriha) at Varnavata?",
    type: "character_id",
    options: ["Maya Danava", "Vishwakarma", "Purochana", "Vidura"],
    correctAnswer: "Purochana",
    explanation: "Purochana was Duryodhana's minister who engineered the highly flammable house of lac to incinerate the Pandavas and Kunti.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 1,
    question: "Ekalavya severed his right thumb as Guru Dakshina to Dronacharya.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. Ekalavya gladly cut off his right thumb when Drona requested it, honoring his promise to make Arjuna the greatest archer.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 1,
    question: "What task did Arjuna accomplish at Draupadi's Swayamvara to win her hand?",
    type: "event_id",
    options: ["Defeated Karna in wrestling", "Pierced the eye of a rotating fish while looking only at its reflection in water", "Strung the Pinaka bow of Shiva", "Solved a riddle of King Drupada"],
    correctAnswer: "Pierced the eye of a rotating fish while looking only at its reflection in water",
    explanation: "Arjuna shot five arrows through a revolving wheel into the eye of a golden fish by looking solely at its reflection in an oil pool below.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 1,
    question: "Which forest did Arjuna and Krishna burn to satisfy the hunger of Agni Deva?",
    type: "event_id",
    options: ["Naimisharanya", "Khandava Forest", "Dwaita Forest", "Kamyaka Forest"],
    correctAnswer: "Khandava Forest",
    explanation: "Krishna and Arjuna aided Agni in consuming the Khandava forest, after which Maya Danava built the grand palace of Indraprastha.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 1,
    question: "What divine weapon did Arjuna receive from Agni during the burning of Khandava?",
    type: "character_id",
    options: ["Gandiva Bow", "Vijaya Bow", "Kodanda Bow", "Sharanga Bow"],
    correctAnswer: "Gandiva Bow",
    explanation: "Agni gifted Arjuna the celestial Gandiva bow along with two inexhaustible quivers of arrows and a divine chariot.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 1,
    question: "Who warned the Pandavas in code language about the fire conspiracy in Varnavata?",
    type: "character_id",
    options: ["Drona", "Vidura", "Kripa", "Sanjaya"],
    correctAnswer: "Vidura",
    explanation: "Vidura spoke in a dialect (Mleccha tongue) to Yudhishthira, warning him that a fire consumes even what is within a burrow if one is not alert.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 1,
    question: "Arrange the chronological sequence of events in Adi Parva:",
    type: "timeline",
    options: [
      "Lakshagriha -> Draupadi Swayamvara -> Burning of Khandava -> Birth of Pandavas",
      "Birth of Pandavas -> Lakshagriha -> Draupadi Swayamvara -> Burning of Khandava",
      "Burning of Khandava -> Birth of Pandavas -> Lakshagriha -> Draupadi Swayamvara",
      "Draupadi Swayamvara -> Birth of Pandavas -> Burning of Khandava -> Lakshagriha"
    ],
    correctAnswer: "Birth of Pandavas -> Lakshagriha -> Draupadi Swayamvara -> Burning of Khandava",
    explanation: "The Pandavas were born first in the forest, escaped the Lakshagriha, won Draupadi at Panchala, and later cleared Khandava to build Indraprastha.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 1,
    question: "What strategic lesson is highlighted by Bhishma's vow in Adi Parva?",
    type: "wisdom",
    options: [
      "Personal vows must ignore all future political consequences",
      "A leader's noble sacrifice can produce unforeseen institutional vulnerabilities",
      "Never respect the wishes of parents",
      "Military power is useless without gold"
    ],
    correctAnswer: "A leader's noble sacrifice can produce unforeseen institutional vulnerabilities",
    explanation: "While deeply virtuous, Bhishma's vow created a succession void that later allowed adharmic rulers like Dhritarashtra and Duryodhana to control the empire.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 2: SABHA PARVA (11-20) ====================
  {
    parvaNumber: 2,
    question: "Who was the demon architect who designed the wondrous palace of Indraprastha?",
    type: "character_id",
    options: ["Vishwakarma", "Maya Danava", "Nala", "Kubera"],
    correctAnswer: "Maya Danava",
    explanation: "Maya Danava built the Mayasabha palace as an expression of gratitude after Arjuna saved his life during the burning of Khandava.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 2,
    question: "Which king did Bhima defeat and tear into two halves to allow the Rajasuya Yajna?",
    type: "character_id",
    options: ["Shishupala", "Jarasandha", "Kamsa", "Dantavakra"],
    correctAnswer: "Jarasandha",
    explanation: "Jarasandha, king of Magadha, was torn in two by Bhima in a 14-day wrestling match under Krishna's strategic guidance.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 2,
    question: "How many insults did Lord Krishna promise Shishupala's mother he would forgive?",
    type: "mcq",
    options: ["50", "100", "108", "1000"],
    correctAnswer: "100",
    explanation: "Krishna pledged to his aunt, Shishupala's mother, that he would pardon one hundred transgressions before taking his life.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 2,
    question: "Who rolled the loaded dice on behalf of Duryodhana during the game of dice?",
    type: "character_id",
    options: ["Dushasana", "Karna", "Shakuni", "Ashwatthama"],
    correctAnswer: "Shakuni",
    explanation: "Shakuni, prince of Gandhara and maternal uncle of Duryodhana, played with loaded dice crafted to follow his mental commands.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 2,
    question: "Duryodhana mistook a crystal floor for a pond of water and fell into it inside the Mayasabha.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. The optical illusions of the Mayasabha confused Duryodhana, causing him to fall into water thinking it was solid ground.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 2,
    question: "What legal and moral question did Draupadi raise to the elders in the Kuru Sabha?",
    type: "wisdom",
    options: [
      "Why did Shakuni roll the dice?",
      "Did Yudhishthira lose himself first before wagering me?",
      "Why did the Pandavas not wage war immediately?",
      "Who is the rightful king of Hastinapur?"
    ],
    correctAnswer: "Did Yudhishthira lose himself first before wagering me?",
    explanation: "Draupadi brilliantly asked if a man who had already lost his own freedom had legal right or ownership to wager his wife.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 2,
    question: "What terrible vow did Bhima make regarding Dushasana in the royal court?",
    type: "event_id",
    options: [
      "To cut off his head with an arrow",
      "To tear open his chest and drink his blood",
      "To burn his palace to ash",
      "To drown him in the river Ganga"
    ],
    correctAnswer: "To tear open his chest and drink his blood",
    explanation: "Enraged by the disrobing of Draupadi, Bhima swore he would break Dushasana's chest on the battlefield and drink his blood.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 2,
    question: "Who was the only Kaurava prince who openly protested Draupadi's humiliation?",
    type: "character_id",
    options: ["Vikarna", "Yuyutsu", "Chitrasena", "Dussaha"],
    correctAnswer: "Vikarna",
    explanation: "Vikarna was the lone Kaurava who stood up in court, condemned the assembly's silence, and declared the wagering of Draupadi illegal.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 2,
    question: "What were the terms of exile imposed on the Pandavas after the second dice match?",
    type: "mcq",
    options: [
      "10 years forest + 2 years in disguise",
      "12 years forest exile + 1 year living incognito (Agyatvas)",
      "14 years forest exile",
      "7 years exile with weapons surrender"
    ],
    correctAnswer: "12 years forest exile + 1 year living incognito (Agyatvas)",
    explanation: "The pact required 12 years in the wilderness and a 13th year incognito; if discovered during the 13th year, exile would restart.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 2,
    question: "What is the primary governance lesson derived from the assembly in Sabha Parva?",
    type: "wisdom",
    options: [
      "Kings should always gamble in public",
      "Silence of righteous leaders in the presence of evil corrupts the moral legitimacy of the state",
      "Only the strongest warrior makes the law",
      "Dice games are the best way to resolve border disputes"
    ],
    correctAnswer: "Silence of righteous leaders in the presence of evil corrupts the moral legitimacy of the state",
    explanation: "The tragedy of the Sabha shows that when institutional guardians (Bhishma, Drona) remain passive during injustice, societal ruin follows.",
    difficulty: "medium",
    points: 15
  },

  // ==================== PARVA 3: VANA PARVA (21-30) ====================
  {
    parvaNumber: 3,
    question: "Which celestial weapon did Arjuna receive from Lord Shiva after fighting him as a hunter?",
    type: "character_id",
    options: ["Brahmashira", "Pashupatastra", "Narayanastra", "Vaishnavastra"],
    correctAnswer: "Pashupatastra",
    explanation: "Arjuna fought Lord Shiva (in Kirata hunter form) on Mount Indrakeela, and Shiva, pleased with his valor, bestowed the supreme Pashupatastra.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 3,
    question: "Who was the Yaksha who tested Yudhishthira at the enchanted lake?",
    type: "character_id",
    options: ["Lord Yama / Dharma", "Lord Kubera", "Lord Indra", "Lord Varuna"],
    correctAnswer: "Lord Yama / Dharma",
    explanation: "The Yaksha was Lord Dharma himself, testing his son Yudhishthira's intellect, compassion, and steadfastness in virtue.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 3,
    question: "When the Yaksha allowed Yudhishthira to revive only one brother, whom did he choose first?",
    type: "mcq",
    options: ["Arjuna", "Bhima", "Nakula", "Sahadeva"],
    correctAnswer: "Nakula",
    explanation: "Yudhishthira chose Nakula so that both mothers would have a surviving son—he representing Kunti, and Nakula representing Madri.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 3,
    question: "Which sage narrated the stories of Nala-Damayanti and Rama to console the Pandavas?",
    type: "character_id",
    options: ["Sage Markandeya", "Sage Vashistha", "Sage Agastya", "Sage Narada"],
    correctAnswer: "Sage Markandeya",
    explanation: "Sage Markandeya recited the epic tales of King Nala and Lord Rama to remind the Pandavas that righteous souls endure adversity before glory.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 3,
    question: "Hanuman appeared in Vana Parva as an elderly monkey to test the strength of his brother Bhima.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. Hanuman blocked Bhima's path on Mount Gandhamadana, taught him humility, and promised to dwell on Arjuna's flag banner.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 3,
    question: "What divine vessel did Surya Deva gift to Yudhishthira to feed unlimited people daily?",
    type: "character_id",
    options: ["Akshaya Patra", "Kamadhenu", "Kalpavriksha", "Amrita Kumbha"],
    correctAnswer: "Akshaya Patra",
    explanation: "The Akshaya Patra provided endless food each day until Draupadi finished her own meal.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 3,
    question: "Which demon king attempted to abduct Draupadi during the Pandavas' exile?",
    type: "character_id",
    options: ["Jayadratha", "Kichaka", "Jarasandha", "Shishupala"],
    correctAnswer: "Jayadratha",
    explanation: "Jayadratha, king of Sindhu, tried to abduct Draupadi from the hermitage and was captured, humiliated, and shaved bald by Bhima and Arjuna.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 3,
    question: "In the Yaksha Prashna, what did Yudhishthira identify as 'faster than the wind'?",
    type: "wisdom",
    options: ["An arrow", "The mind (Manas)", "Time", "Light"],
    correctAnswer: "The mind (Manas)",
    explanation: "Yudhishthira answered that the mind is faster than the wind, and worry is more numerous than blades of grass.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 3,
    question: "Who was the apsara who cursed Arjuna to become a eunuch for one year?",
    type: "character_id",
    options: ["Menaka", "Rambha", "Urvashi", "Tilottama"],
    correctAnswer: "Urvashi",
    explanation: "Urvashi cursed Arjuna when he respected her as a mother-figure in heaven; Indra modified the curse to serve during his incognito exile.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 3,
    question: "What strategic principle did the Pandavas demonstrate during their 12-year exile?",
    type: "wisdom",
    options: [
      "Passive surrender to fate without action",
      "Using downtime to acquire capabilities, divine weapons, and psychological resilience",
      "Attacking Hastinapur before the term was completed",
      "Relying entirely on hired mercenaries"
    ],
    correctAnswer: "Using downtime to acquire capabilities, divine weapons, and psychological resilience",
    explanation: "The Pandavas used their 12 years of hardship to undergo penance, acquire celestial astras, and gain supreme mental fortitude.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 4: VIRATA PARVA (31-40) ====================
  {
    parvaNumber: 4,
    question: "Under what name did Arjuna live in King Virata's court as a dance instructor?",
    type: "character_id",
    options: ["Kanka", "Brihannala", "Vallabha", "Granthika"],
    correctAnswer: "Brihannala",
    explanation: "Arjuna disguised himself as Brihannala, a eunuch skilled in music and dance who taught Princess Uttara.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 4,
    question: "What disguise did Yudhishthira adopt in King Virata's court?",
    type: "character_id",
    options: ["Kanka the courtier and dice-player", "Vallabha the cook", "Tantipala the cowherd", "Sairandhri the maid"],
    correctAnswer: "Kanka the courtier and dice-player",
    explanation: "Yudhishthira took the identity of Kanka, a learned brahmana and master companion of the game of dice.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 4,
    question: "Where did the Pandavas hide their celestial weapons before entering the city of Virata?",
    type: "event_id",
    options: ["In a mountain cave", "In a Sami tree near the cremation ground", "At the bottom of the river Yamuna", "Inside the temple of Durga"],
    correctAnswer: "In a Sami tree near the cremation ground",
    explanation: "They wrapped their weapons in cloth resembling a corpse and tied them high up in a prickly Sami tree near the cemetery.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 4,
    question: "Who was the arrogant general of Matsya who harassed Draupadi and was slain by Bhima?",
    type: "character_id",
    options: ["Kichaka", "Upakichaka", "Simhika", "Uttara"],
    correctAnswer: "Kichaka",
    explanation: "General Kichaka, brother of Queen Sudeshna, abused his power to harass Sairandhri (Draupadi) and was crushed into a ball of flesh by Bhima.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 4,
    question: "Princess Uttara was married to Arjuna at the end of Virata Parva.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Arjuna declined marrying Uttara because as her teacher he saw her as a daughter, arranging her marriage to his son Abhimanyu instead.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 4,
    question: "Which celestial astra did Brihannala use to put the entire Kuru army to sleep during the cattle battle?",
    type: "character_id",
    options: ["Brahmastra", "Sammohanastra", "Pashupatastra", "Varunastra"],
    correctAnswer: "Sammohanastra",
    explanation: "Arjuna discharged the Sammohanastra, casting deep slumber over Bhishma, Drona, Karna, and Duryodhana to recover the stolen cattle.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 4,
    question: "What role did Nakula assume during the year in Matsya kingdom?",
    type: "character_id",
    options: ["Granthika, keeper of horses", "Tantipala, keeper of cows", "Vallabha, royal chef", "Kanka, court advisor"],
    correctAnswer: "Granthika, keeper of horses",
    explanation: "Nakula served as Granthika, utilizing his equestrian veterinary mastery to tend King Virata's royal stables.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 4,
    question: "Who acted as Brihannala's charioteer when fighting the Kaurava host?",
    type: "character_id",
    options: ["Prince Uttara (Bhuminjaya)", "Satyaki", "King Virata", "Yuyutsu"],
    correctAnswer: "Prince Uttara (Bhuminjaya)",
    explanation: "Young Prince Uttara initially boasted of defeating the Kurus, panicked upon seeing their army, and then steered the chariot for Arjuna.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 4,
    question: "What clothing was collected from the sleeping Kaurava warriors for Princess Uttara's dolls?",
    type: "event_id",
    options: ["Their crowns", "Their fine silk garments", "Their golden belts", "Their footwear"],
    correctAnswer: "Their fine silk garments",
    explanation: "Prince Uttara stripped the colorful silk garments from the sleeping Kuru leaders as play-clothes for his sister's dolls as promised.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 4,
    question: "What core leadership virtue is epitomized by the Pandavas in Virata Parva?",
    type: "wisdom",
    options: [
      "Rigid entitlement to royal status",
      "Humility, suppression of ego, and absolute adaptability to subservient roles",
      "Revealing one's power at the first provocation",
      "Refusing to do manual labor"
    ],
    correctAnswer: "Humility, suppression of ego, and absolute adaptability to subservient roles",
    explanation: "The world's greatest conquerors willingly washed horses, cooked meals, and taught dancing without ego, proving their unmatched character.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 5: UDYOGA PARVA (41-50) ====================
  {
    parvaNumber: 5,
    question: "What legendary discourse on governance and conscience did Vidura give to King Dhritarashtra?",
    type: "character_id",
    options: ["Chanakya Niti", "Vidura Niti", "Sukra Niti", "Bhishma Niti"],
    correctAnswer: "Vidura Niti",
    explanation: "Vidura Niti is Vidura's profound all-night ethical and political counseling session delivered to the anxious, sleepless Dhritarashtra.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 5,
    question: "What minimum demand did Lord Krishna make on behalf of the Pandavas to avert war?",
    type: "mcq",
    options: ["Half of the kingdom", "Five villages", "Indraprastha only", "Hastinapur treasury"],
    correctAnswer: "Five villages",
    explanation: "Krishna sought merely five villages (Avishthala, Vrikasthala, Makandi, Varanavata, and another) so the five brothers could rule without conflict.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 5,
    question: "When Duryodhana attempted to arrest Krishna in Hastinapur, what divine form did Krishna reveal?",
    type: "event_id",
    options: ["Narasimha", "Vishwaroopa (Cosmic Form)", "Kurma", "Matsya"],
    correctAnswer: "Vishwaroopa (Cosmic Form)",
    explanation: "Krishna laughed at Duryodhana's foolish arrogance and manifested his blinding Vishwaroopa form, terrifying the court.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 5,
    question: "When Arjuna and Duryodhana went to seek Krishna's alliance, what did each choose?",
    type: "event_id",
    options: [
      "Arjuna chose the Narayani army; Duryodhana chose unarmed Krishna",
      "Arjuna chose unarmed Krishna; Duryodhana chose the entire Narayani army",
      "Both chose the Narayani army",
      "Duryodhana chose Krishna's chariot"
    ],
    correctAnswer: "Arjuna chose unarmed Krishna; Duryodhana chose the entire Narayani army",
    explanation: "Arjuna chose the divine guidance of unarmed Krishna, whereas Duryodhana eagerly picked millions of battle-hardened Narayani troops.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 5,
    question: "Karna accepted Krishna's offer to become Emperor of Aryavarta as Kunti's eldest son.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Karna declined the imperial throne, declaring that Duryodhana had honored him when all rejected him, and he would never abandon his friend.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 5,
    question: "How many Akshauhini armies fought for the Pandavas and Kauravas respectively?",
    type: "mcq",
    options: ["7 and 11", "10 and 10", "5 and 15", "8 and 12"],
    correctAnswer: "7 and 11",
    explanation: "The Pandavas mobilized 7 Akshauhinis while the Kauravas commanded 11 Akshauhinis, giving the Kauravas a massive numerical superiority.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 5,
    question: "What solemn promise did Karna give to Kunti on the banks of the Ganga?",
    type: "event_id",
    options: [
      "To fight on the Pandava side",
      "Not to kill any brother except Arjuna, ensuring she will always have five sons",
      "To kill Krishna",
      "To surrender during the war"
    ],
    correctAnswer: "Not to kill any brother except Arjuna, ensuring she will always have five sons",
    explanation: "Karna pledged that he would spare Yudhishthira, Bhima, Nakula, and Sahadeva; whether he or Arjuna died, Kunti would retain five sons.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 5,
    question: "Who was appointed supreme commander-in-chief of the Pandava forces?",
    type: "character_id",
    options: ["Arjuna", "Dhrishtadyumna", "Bhima", "Satyaki"],
    correctAnswer: "Dhrishtadyumna",
    explanation: "Dhrishtadyumna, prince of Panchala born from sacrificial fire specifically to vanquish Drona, was elected supreme commander.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 5,
    question: "Who went to the Kuru court as the first diplomatic emissary sent by King Drupada?",
    type: "character_id",
    options: ["Sanjaya", "Drupada's royal priest (Purohita)", "Vidura", "Sahadeva"],
    correctAnswer: "Drupada's royal priest (Purohita)",
    explanation: "King Drupada dispatched his learned family priest to present the legitimate constitutional claims of the Pandavas.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 5,
    question: "What strategic principle is demonstrated by Krishna's peace embassy in Udyoga Parva?",
    type: "wisdom",
    options: [
      "Start wars preemptively without talking",
      "Exhaust all diplomatic and moral mechanisms so that war, if fought, is entirely defensive and just",
      "Surrender unconditionally to bullies",
      "Compromise basic values for convenience"
    ],
    correctAnswer: "Exhaust all diplomatic and moral mechanisms so that war, if fought, is entirely defensive and just",
    explanation: "Righteous leadership demands exploring every avenue of reconciliation to establish beyond doubt the moral justification of ultimate force.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 6: BHISHMA PARVA (51-60) ====================
  {
    parvaNumber: 6,
    question: "How many chapters and verses make up the Bhagavad Gita in Bhishma Parva?",
    type: "mcq",
    options: ["18 chapters and 700 verses", "12 chapters and 500 verses", "24 chapters and 1000 verses", "10 chapters and 400 verses"],
    correctAnswer: "18 chapters and 700 verses",
    explanation: "The Bhagavad Gita forms chapters 23 to 40 of Bhishma Parva, consisting of 18 chapters and 700 sacred shlokas.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 6,
    question: "Who was granted divine vision (Divya Drishti) by Sage Vyasa to narrate the war to Dhritarashtra?",
    type: "character_id",
    options: ["Vidura", "Sanjaya", "Kripa", "Ashwatthama"],
    correctAnswer: "Sanjaya",
    explanation: "Sanjaya received divine vision from Sage Vyasa to see every event, speech, and thought on the battlefield in real-time.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 6,
    question: "How many days did Grandfather Bhishma command the Kaurava forces before falling?",
    type: "mcq",
    options: ["5 days", "10 days", "12 days", "15 days"],
    correctAnswer: "10 days",
    explanation: "Bhishma commanded the Kaurava forces from Day 1 through Day 10 of the Kurukshetra War.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 6,
    question: "Whom did Arjuna place in front of his chariot to counter Bhishma on the 10th day?",
    type: "character_id",
    options: ["Shikhandi", "Dhrishtadyumna", "Abhimanyu", "Satyaki"],
    correctAnswer: "Shikhandi",
    explanation: "Because Bhishma took a vow never to strike a woman or one born as a woman (Shikhandi was reborn Amba), he lowered his weapons.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 6,
    question: "On the 9th day, Lord Krishna broke his vow not to bear arms by lifting a chariot wheel to attack Bhishma.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. Seeing Bhishma's devastating assault, Krishna leaped from the chariot with a wheel like Sudarshana Chakra, prioritizing Dharma over vows.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 6,
    question: "What core teaching of the Bhagavad Gita summarizes selfless action?",
    type: "wisdom",
    options: [
      "Karma Sannyasa",
      "Nishkama Karma (Action without attachment to results)",
      "Bhakti Yoga only",
      "Hatha Yoga"
    ],
    correctAnswer: "Nishkama Karma (Action without attachment to results)",
    explanation: "'Karmanye vadikaraste ma phaleshu kadachana' emphasizes duty performed without egoic greed for personal fruit.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 6,
    question: "What boon from his father Shantanu allowed Bhishma to choose the timing of his death?",
    type: "event_id",
    options: ["Amaratva (Immortality)", "Iccha-Mrityu (Death at will)", "Divya Astra", "Vayu Gati"],
    correctAnswer: "Iccha-Mrityu (Death at will)",
    explanation: "King Shantanu blessed Devavrata with Iccha-Mrityu, meaning death could not claim him until he personally gave permission.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 6,
    question: "How did Arjuna quench Bhishma's thirst while he lay upon the bed of arrows?",
    type: "event_id",
    options: [
      "Brought water from an earthen jug",
      "Shot an arrow into the earth, bringing forth a spring of holy Ganga water",
      "Asked Krishna to invoke clouds",
      "Used a golden chalice"
    ],
    correctAnswer: "Shot an arrow into the earth, bringing forth a spring of holy Ganga water",
    explanation: "Arjuna pierced the ground with the Parjanyastra, invoking a cool jet of Mother Ganga's water directly into Bhishma's mouth.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 6,
    question: "What did Arjuna make as a pillow for Bhishma's head on the bed of arrows?",
    type: "event_id",
    options: ["Silk cushions from Hastinapur", "Three arrows shot into the ground to support his head", "A shield of bronze", "Soft grass"],
    correctAnswer: "Three arrows shot into the ground to support his head",
    explanation: "Rejecting soft cushions, Bhishma requested a warrior's pillow; Arjuna drove three arrows beneath his neck for support.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 6,
    question: "What philosophical resolution does the Bhagavad Gita offer to moral paralysis?",
    type: "wisdom",
    options: [
      "Escaping into monastic inaction",
      "Recognizing the eternal soul, acting in harmony with cosmic duty, and surrendering ego to the divine",
      "Blind obedience to personal hatred",
      "Abandoning family and kingdom"
    ],
    correctAnswer: "Recognizing the eternal soul, acting in harmony with cosmic duty, and surrendering ego to the divine",
    explanation: "Krishna teaches that the Atman is imperishable and that a warrior must courageously stand for justice without selfish delusion.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 7: DRONA PARVA (61-70) ====================
  {
    parvaNumber: 7,
    question: "Which impenetrable military labyrinth formation was constructed by Drona on the 13th day?",
    type: "event_id",
    options: ["Krauncha Vyuha", "Chakravyuha (Padmavyuha)", "Garuda Vyuha", "Makara Vyuha"],
    correctAnswer: "Chakravyuha (Padmavyuha)",
    explanation: "Drona formed the complex, rotating multi-tiered Chakravyuha wheel formation on Day 13.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 7,
    question: "Who was the sixteen-year-old warrior who breached the Chakravyuha alone?",
    type: "character_id",
    options: ["Abhimanyu", "Iravan", "Ghatotkacha", "Upapandavas"],
    correctAnswer: "Abhimanyu",
    explanation: "Abhimanyu, son of Arjuna and Subhadra, entered the formation, having learned the entry technique while in his mother's womb.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 7,
    question: "Which warrior blocked the four elder Pandavas from following Abhimanyu into the Chakravyuha?",
    type: "character_id",
    options: ["Karna", "Jayadratha", "Ashwatthama", "Shalya"],
    correctAnswer: "Jayadratha",
    explanation: "Jayadratha had a boon from Lord Shiva allowing him to hold back all four Pandavas (excluding Arjuna) for a single day.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 7,
    question: "What vow did Arjuna take following the death of his son Abhimanyu?",
    type: "event_id",
    options: [
      "To kill Jayadratha before sunset the next day or enter fire (Agni Samadhi)",
      "To renounce all weapons",
      "To slay Drona before dusk",
      "To destroy the city of Hastinapur"
    ],
    correctAnswer: "To kill Jayadratha before sunset the next day or enter fire (Agni Samadhi)",
    explanation: "Arjuna swore to slay Jayadratha before the sun set the following day or surrender his own life in fire.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 7,
    question: "How did Krishna create the illusion of an early sunset to lure Jayadratha out of hiding?",
    type: "event_id",
    options: ["Called upon rain clouds", "Veiled the sun momentarily with his Sudarshana Chakra", "Invoked Maya from Indra", "Created smoke from burnt chariots"],
    correctAnswer: "Veiled the sun momentarily with his Sudarshana Chakra",
    explanation: "Krishna covered the sun with the Sudarshana Chakra; when Jayadratha looked up celebrating Arjuna's demise, the sun reappeared and Arjuna struck.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 7,
    question: "Which divine dart was Karna forced to expend against the giant Ghatotkacha during night battle?",
    type: "character_id",
    options: ["Vasavi Shakti", "Brahmashira", "Nagastra", "Pashupatastra"],
    correctAnswer: "Vasavi Shakti",
    explanation: "Karna had saved Indra's Vasavi Shakti dart solely to kill Arjuna, but Ghatotkacha's nocturnal havoc forced him to expend it.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 7,
    question: "What ambiguous statement did Yudhishthira utter that led Dronacharya to drop his weapons?",
    type: "wisdom",
    options: [
      "'Hastinapur has surrendered'",
      "'Ashwatthama is dead' (murmuring 'the elephant')",
      "'Karna has fallen'",
      "'Arjuna has perished'"
    ],
    correctAnswer: "'Ashwatthama is dead' (murmuring 'the elephant')",
    explanation: "Bhima killed an elephant named Ashwatthama, allowing Yudhishthira to say 'Ashwatthama is dead', grieving the royal guru into dropping arms.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 7,
    question: "Who beheaded Drona after the guru sat in deep yogic meditation on his chariot?",
    type: "character_id",
    options: ["Arjuna", "Dhrishtadyumna", "Bhima", "Satyaki"],
    correctAnswer: "Dhrishtadyumna",
    explanation: "Dhrishtadyumna fulfilled his destiny by beheading Drona while the guru's soul had already departed his body in samadhi.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 7,
    question: "Abhimanyu was killed according to all legitimate ancient codes of single combat.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Abhimanyu was surrounded, disarmed, struck from behind, and murdered by seven Maharathis in blatant violation of chivalric rules.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 7,
    question: "What consequence did Yudhishthira face immediately after speaking his half-truth?",
    type: "event_id",
    options: [
      "His Gandiva bow cracked",
      "His chariot, which previously hovered four fingers above the earth, touched the muddy ground",
      "He lost his crown",
      "His armor shattered"
    ],
    correctAnswer: "His chariot, which previously hovered four fingers above the earth, touched the muddy ground",
    explanation: "Due to his immaculate truthfulness, Yudhishthira's chariot floated above ground; following the deceptive half-truth, it sank to earth.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 8: KARNA PARVA (71-80) ====================
  {
    parvaNumber: 8,
    question: "Who served as the commander-in-chief of the Kauravas on Days 16 and 17 of the war?",
    type: "character_id",
    options: ["Shalya", "Karna", "Ashwatthama", "Kripacharya"],
    correctAnswer: "Karna",
    explanation: "Karna commanded the Kaurava forces for two fateful days (Days 16 and 17) following Drona's demise.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 8,
    question: "Who acted as Karna's charioteer during his climactic duel with Arjuna?",
    type: "character_id",
    options: ["Sanjaya", "King Shalya of Madra", "Kritavarma", "Duryodhana"],
    correctAnswer: "King Shalya of Madra",
    explanation: "King Shalya reluctantly steered Karna's chariot, fulfilling a secret promise to Yudhishthira to constantly demoralize Karna with biting critiques.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 8,
    question: "Which terrible vow did Bhima fulfill by slaying Dushasana in Karna Parva?",
    type: "event_id",
    options: [
      "Drinking his blood and tying Draupadi's unbound hair with his bloodied hands",
      "Throwing him into the river",
      "Burning his chariot",
      "Exiling his family"
    ],
    correctAnswer: "Drinking his blood and tying Draupadi's unbound hair with his bloodied hands",
    explanation: "Bhima ripped open Dushasana's chest on the 16th day, drank his blood, and kept his promise to avenge Draupadi's humiliation.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 8,
    question: "What happened to Karna's chariot during the duel with Arjuna that sealed his fate?",
    type: "event_id",
    options: [
      "Both horses died of thirst",
      "The left wheel sank deep into the earth due to a sage's ancient curse",
      "The axle caught fire",
      "Shalya steered it off a cliff"
    ],
    correctAnswer: "The left wheel sank deep into the earth due to a sage's ancient curse",
    explanation: "A brahmana's curse bore fruit: the earth swallowed Karna's chariot wheel in the decisive moment of battle.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 8,
    question: "Why did Karna forget the invocations of the Brahmastra when he needed it most against Arjuna?",
    type: "event_id",
    options: [
      "Due to a curse from Sage Parashurama for concealing his true identity",
      "Because of heat exhaustion",
      "Arjuna's spell wiped his memory",
      "He was hit on the head"
    ],
    correctAnswer: "Due to a curse from Sage Parashurama for concealing his true identity",
    explanation: "Parashurama cursed Karna that the ultimate Brahmastra knowledge would fail him at the hour of his death because he lied about being a brahmana.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 8,
    question: "Which celestial arrow did Arjuna unleash to sever Karna's head?",
    type: "character_id",
    options: ["Anjalika Astra", "Brahmashira", "Pashupatastra", "Agneyastra"],
    correctAnswer: "Anjalika Astra",
    explanation: "Arjuna used the razor-sharp crescent Anjalika arrow to sever the head of Karna while he was attempting to lift his wheel.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 8,
    question: "What did Krishna say when Karna cried out for chivalry while trying to lift his chariot wheel?",
    type: "wisdom",
    options: [
      "He praised Karna's nobility",
      "He reminded Karna where his virtue was during the vastraharan and the murder of Abhimanyu",
      "He told Arjuna to wait until Karna was ready",
      "He called for a ceasefire"
    ],
    correctAnswer: "He reminded Karna where his virtue was during the vastraharan and the murder of Abhimanyu",
    explanation: "Krishna famously rebuked Karna: 'Where was your dharma when Draupadi cried in court, when poisoned food was fed to Bhima, and when a disarmed boy was butchered?'",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 8,
    question: "Karna spared the lives of Yudhishthira, Bhima, Nakula, and Sahadeva when he defeated them in battle.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. Honoring his solemn pledge to Kunti, Karna defeated the four brothers but chose not to take their lives.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 8,
    question: "Which serpent demon sought to kill Arjuna by guiding Karna's deadly arrow?",
    type: "character_id",
    options: ["Ashwasena", "Takshaka", "Vasuki", "Kaliya"],
    correctAnswer: "Ashwasena",
    explanation: "The serpent Ashwasena, whose mother was killed in Khandava forest, entered Karna's quiver to strike Arjuna; Krishna pressed the chariot into the mud to save Arjuna.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 8,
    question: "What profound strategic lesson is reflected in Karna's fall?",
    type: "wisdom",
    options: [
      "Talent alone guarantees victory without righteous alignment",
      "Personal loyalty to an unjust patron cannot shield a champion from cosmic karmic retribution",
      "Never learn martial skills from great teachers",
      "Arrows are more useful than chariots"
    ],
    correctAnswer: "Personal loyalty to an unjust patron cannot shield a champion from cosmic karmic retribution",
    explanation: "Despite his extraordinary generosity and bravery, Karna's active complicity with Duryodhana's wickedness doomed him to a tragic demise.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 9: SHALYA PARVA (81-90) ====================
  {
    parvaNumber: 9,
    question: "Who was the supreme commander of the Kauravas on the 18th and final day of the war?",
    type: "character_id",
    options: ["Shalya", "Ashwatthama", "Kritavarma", "Duryodhana"],
    correctAnswer: "Shalya",
    explanation: "King Shalya commanded the remaining Kaurava forces on the 18th morning before falling in battle.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 9,
    question: "Who killed King Shalya on the final day of the war?",
    type: "character_id",
    options: ["Arjuna", "Bhima", "Yudhishthira", "Nakula"],
    correctAnswer: "Yudhishthira",
    explanation: "Yudhishthira hurled a radiant divine spear that struck Shalya through the chest, ending his life.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 9,
    question: "Who finally avenged the rigged game of dice by slaying Shakuni?",
    type: "character_id",
    options: ["Sahadeva", "Nakula", "Bhima", "Dhrishtadyumna"],
    correctAnswer: "Sahadeva",
    explanation: "Sahadeva, youngest Pandava, fulfilled his vow by hunting down Shakuni and shooting off his head on the 18th day.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 9,
    question: "Where did Duryodhana hide using mystic spells after his entire army was destroyed?",
    type: "event_id",
    options: ["In a mountain fortress", "Under the solidified waters of Dvaipayana Lake", "In a cave in Gandhara", "Inside the temple of Shiva"],
    correctAnswer: "Under the solidified waters of Dvaipayana Lake",
    explanation: "Duryodhana solidified the waters of Lake Dvaipayana and rested underwater in solitude until provoked by the Pandavas.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 9,
    question: "What generous but risky offer did Yudhishthira make to Duryodhana at Dvaipayana Lake?",
    type: "wisdom",
    options: [
      "To surrender Hastinapur",
      "To duel any one Pandava with any weapon of his choice; if Duryodhana won, the kingdom was his",
      "To fight unarmed",
      "To restart the dice game"
    ],
    correctAnswer: "To duel any one Pandava with any weapon of his choice; if Duryodhana won, the kingdom was his",
    explanation: "Yudhishthira chivalrously offered Duryodhana single combat against any brother; Duryodhana chose his favorite weapon—the mace—against Bhima.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 9,
    question: "What weapon did Duryodhana and Bhima use in their climactic duel?",
    type: "mcq",
    options: ["Bow and Arrow", "Gada (Mace)", "Sword", "Spear"],
    correctAnswer: "Gada (Mace)",
    explanation: "Both giants were peerless disciples of Balarama in the art of Gada Yuddha (mace combat).",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 9,
    question: "How did Bhima deliver the fatal blow to Duryodhana?",
    type: "event_id",
    options: [
      "Struck him on the head",
      "Struck him on the thighs after Krishna patted his own thigh as a reminder",
      "Crushed his chest",
      "Threw him into the lake"
    ],
    correctAnswer: "Struck him on the thighs after Krishna patted his own thigh as a reminder",
    explanation: "Krishna tapped his thigh, reminding Bhima of his vow to break the thigh upon which Duryodhana had insulted Draupadi.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 9,
    question: "Who rushed furiously with his plough to strike Bhima for breaking mace duel rules?",
    type: "character_id",
    options: ["Balarama", "Krishna", "Drona", "Ashwatthama"],
    correctAnswer: "Balarama",
    explanation: "Balarama raised his plough in rage to punish Bhima for striking below the navel, until Krishna restrained him with moral context.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 9,
    question: "Duryodhana expressed deep remorse and begged for forgiveness before dying.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Duryodhana died unrepentant, defiantly declaring that he had lived in luxury, ruled as king, and died fighting as a true Kshatriya.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 9,
    question: "What happened to Arjuna's celestial chariot immediately after Krishna stepped off it at the end of the war?",
    type: "event_id",
    options: [
      "It turned into solid gold",
      "It burst into violent flames and was reduced to ashes",
      "It flew up into heaven",
      "It sank into the river"
    ],
    correctAnswer: "It burst into violent flames and was reduced to ashes",
    explanation: "Krishna told Arjuna to dismount first; when Krishna stepped off, the chariot exploded in fire, having been preserved solely by Krishna's presence from devastating astras.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 10: SAUPTIKA PARVA (91-100) ====================
  {
    parvaNumber: 10,
    question: "Which animal hunting at night inspired Ashwatthama to launch a midnight raid on the Pandava camp?",
    type: "wisdom",
    options: ["A tiger hunting deer", "An owl slaughtering sleeping crows", "A leopard in the bushes", "A serpent striking in the dark"],
    correctAnswer: "An owl slaughtering sleeping crows",
    explanation: "Resting beneath a banyan tree, Ashwatthama watched an owl enter a crow nest at night and butcher sleeping birds, deciding to adopt the same ruthless tactic.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 10,
    question: "How many warriors survived on the Kaurava side at the end of the 18th day?",
    type: "mcq",
    options: ["Three (Ashwatthama, Kripa, Kritavarma)", "Five", "Ten", "Only Ashwatthama"],
    correctAnswer: "Three (Ashwatthama, Kripa, Kritavarma)",
    explanation: "Only Ashwatthama, Kripacharya, and Kritavarma survived alongside the dying Duryodhana.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 10,
    question: "Whom did Ashwatthama slaughter in their sleep during the night raid?",
    type: "event_id",
    options: [
      "The five Pandava brothers",
      "Dhrishtadyumna, Shikhandi, and the five sons of Draupadi (Upapandavas)",
      "Lord Krishna and Satyaki",
      "King Virata"
    ],
    correctAnswer: "Dhrishtadyumna, Shikhandi, and the five sons of Draupadi (Upapandavas)",
    explanation: "Ashwatthama brutally killed Dhrishtadyumna, Shikhandi, and Draupadi's five young sons thinking they were the Pandavas.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 10,
    question: "Where were the five Pandava brothers and Krishna during the night of the massacre?",
    type: "event_id",
    options: [
      "In Hastinapur",
      "Away from the main camp on Krishna's wise counsel",
      "Hunting in the forest",
      "Praying at the temple"
    ],
    correctAnswer: "Away from the main camp on Krishna's wise counsel",
    explanation: "Krishna intuitively guided the five Pandavas away to stay outside the camp, preserving their lives from the massacre.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 10,
    question: "What catastrophic divine weapon did Ashwatthama unleash when pursued by the Pandavas?",
    type: "character_id",
    options: ["Brahmashira Astra", "Pashupatastra", "Vaishnavastra", "Varunastra"],
    correctAnswer: "Brahmashira Astra",
    explanation: "Ashwatthama charged a blade of sacred grass into the universe-destroying Brahmashira weapon.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 10,
    question: "Why could Ashwatthama not recall his Brahmashira weapon after Arjuna retracted his own?",
    type: "event_id",
    options: [
      "He lacked the spiritual purity and yogic mastery to withdraw it",
      "His bow broke",
      "He did not want to",
      "Krishna blocked his voice"
    ],
    correctAnswer: "He lacked the spiritual purity and yogic mastery to withdraw it",
    explanation: "Withdrawing a Brahmashira required lifelong celibacy and pristine spiritual purity; unable to revoke it, Ashwatthama directed it at Uttara's womb.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 10,
    question: "Whose unborn child in the womb was saved by Lord Krishna from the Brahmashira weapon?",
    type: "character_id",
    options: ["Subhadra's child", "Uttara's child (Parikshit)", "Draupadi's child", "Chitrangada's child"],
    correctAnswer: "Uttara's child (Parikshit)",
    explanation: "Krishna entered Uttara's womb with his divine subtle power to shield the unborn Parikshit from atomic combustion.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 10,
    question: "What physical token was forcibly extracted from Ashwatthama's forehead as punishment?",
    type: "character_id",
    options: ["A golden crown", "A miraculous jewel (Mani)", "A sacred mark", "His tilak"],
    correctAnswer: "A miraculous jewel (Mani)",
    explanation: "The divine gem that protected Ashwatthama from hunger, thirst, weapons, and sickness was cut from his forehead.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 10,
    question: "What was Lord Krishna's eternal curse upon Ashwatthama?",
    type: "wisdom",
    options: [
      "To die immediately in battle",
      "To wander the desolate earth alone, ulcerated, bleeding and rotting for 3,000 years without death",
      "To be reborn as an insect",
      "To be imprisoned in a cavern"
    ],
    correctAnswer: "To wander the desolate earth alone, ulcerated, bleeding and rotting for 3,000 years without death",
    explanation: "Krishna condemned him to wander the earth diseased, reeking of blood and pus, shunned by all beings, denied death.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 10,
    question: "Draupadi forgave Ashwatthama and asked for his life to be spared after receiving his gem.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. Draupadi declared that Lady Gautami (Kripa's sister, Drona's wife) should not weep for her son as Draupadi had wept for hers.",
    difficulty: "medium",
    points: 15
  },

  // ==================== PARVA 11: STRI PARVA (101-110) ====================
  {
    parvaNumber: 11,
    question: "What did Krishna substitute in Bhima's place when the grieving Dhritarashtra embraced him?",
    type: "event_id",
    options: ["A tree trunk", "A solid iron statue of Bhima", "A pillar of stone", "A heavy sack of grain"],
    correctAnswer: "A solid iron statue of Bhima",
    explanation: "Knowing the blind king possessed the strength of 10,000 elephants in his grief-stricken rage, Krishna placed an iron statue, which Dhritarashtra crushed to powder.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 11,
    question: "Who was granted divine sight by Sage Vyasa to view the battlefield and lament the fallen heroes?",
    type: "character_id",
    options: ["Queen Gandhari", "Kunti", "Draupadi", "Uttara"],
    correctAnswer: "Queen Gandhari",
    explanation: "Sage Vyasa blessed Queen Gandhari with divine inner vision to witness the heartbreaking state of Kurukshetra.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 11,
    question: "What curse did Queen Gandhari place upon Lord Krishna in her grief?",
    type: "wisdom",
    options: [
      "That he would lose his kingdom immediately",
      "That 36 years later, his own Yadava race would destroy itself, and he would die alone in the forest",
      "That he would lose his divine powers",
      "That his sons would become beggars"
    ],
    correctAnswer: "That 36 years later, his own Yadava race would destroy itself, and he would die alone in the forest",
    explanation: "Gandhari cursed Krishna that because he had the capacity to avert the war but allowed it, his clan would perish through fratricide.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 11,
    question: "How did Lord Krishna react to Queen Gandhari's devastating curse?",
    type: "wisdom",
    options: [
      "He angrily rejected it",
      "He accepted it with a gentle, serene smile, acknowledging the divine purpose",
      "He cursed her in return",
      "He wept before the assembly"
    ],
    correctAnswer: "He accepted it with a gentle, serene smile, acknowledging the divine purpose",
    explanation: "Krishna peacefully accepted the curse, stating that none other than the Yadavas themselves could ever vanquish the Yadavas.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 11,
    question: "What shattering secret did Mother Kunti reveal to Yudhishthira while offering funeral libations?",
    type: "event_id",
    options: [
      "That Pandu was still alive",
      "That Karna was her first-born son and their own elder brother",
      "That Drona had survived",
      "That Hastinapur was bankrupt"
    ],
    correctAnswer: "That Karna was her first-born son and their own elder brother",
    explanation: "Kunti revealed Karna's divine birth to Surya, breaking Yudhishthira's heart that they had unwittingly killed their own elder brother.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 11,
    question: "What curse did the heartbroken Yudhishthira pronounce on all womankind upon learning the truth about Karna?",
    type: "wisdom",
    options: [
      "That women would never be allowed to rule",
      "That women would never be able to keep a deep secret from that day forward",
      "That women would not inherit land",
      "That women would never enter battle"
    ],
    correctAnswer: "That women would never be able to keep a deep secret from that day forward",
    explanation: "Agonized that Kunti hid Karna's identity, Yudhishthira cursed that no woman would be able to conceal a grave secret.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 11,
    question: "In Stri Parva, who led the mass cremation and funeral rites for all the millions of fallen warriors?",
    type: "character_id",
    options: ["Yudhishthira and the Pandavas", "Vidura", "Drupada", "Krishna"],
    correctAnswer: "Yudhishthira and the Pandavas",
    explanation: "Yudhishthira oversaw the sacred cremation of friends and foes alike, honoring every warrior's rites according to Vedic duty.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 11,
    question: "Queen Gandhari blamed only the Pandavas and excused all of Duryodhana's misdeeds.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Gandhari recognized her son's wicked arrogance, but held Krishna responsible as the cosmic architect who allowed the massacre.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 11,
    question: "Which Kuru prince who fought on the Pandava side performed the water libations for his deceased brothers?",
    type: "character_id",
    options: ["Yuyutsu", "Vikarna", "Chitrasena", "Somadatta"],
    correctAnswer: "Yuyutsu",
    explanation: "Yuyutsu, the half-brother who defected to the righteous side on Day 1, helped perform the funeral rites for the fallen princes.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 11,
    question: "What is the primary anti-war message embedded in Stri Parva?",
    type: "wisdom",
    options: [
      "Military victories are eternal",
      "War yields no genuine victor; the ultimate cost is paid in the endless sorrow of bereaved women, mothers, and orphans",
      "Only kings suffer in war",
      "Weapons should be used whenever possible"
    ],
    correctAnswer: "War yields no genuine victor; the ultimate cost is paid in the endless sorrow of bereaved women, mothers, and orphans",
    explanation: "Stri Parva strips war of martial romance, laying bare the rotting corpses, broken crowns, and inconsolable tears of surviving families.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 12: SHANTI PARVA (111-120) ====================
  {
    parvaNumber: 12,
    question: "Why was Yudhishthira unwilling to accept the crown of Hastinapur in Shanti Parva?",
    type: "wisdom",
    options: [
      "He wanted to conquer more land",
      "He was overwhelmed by remorse over the slaughter of his kinsmen and wished to become an ascetic",
      "He feared another attack",
      "The treasury was empty"
    ],
    correctAnswer: "He was overwhelmed by remorse over the slaughter of his kinsmen and wished to become an ascetic",
    explanation: "Yudhishthira felt that winning an empire covered in the blood of kin, especially Karna, was sinful and wished to renounce everything.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 12,
    question: "Who delivered the monumental discourses on Raja Dharma (duties of a king) from the bed of arrows?",
    type: "character_id",
    options: ["Dronacharya", "Bhishma Pitamaha", "Sage Vyasa", "Vidura"],
    correctAnswer: "Bhishma Pitamaha",
    explanation: "Grandfather Bhishma imparted the masterclass on statecraft, governance, and justice while resting on the bed of arrows.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 12,
    question: "What is 'Apaddharma' expounded by Bhishma in Shanti Parva?",
    type: "wisdom",
    options: [
      "Religious rituals for rain",
      "Codes of conduct, ethics, and exceptions during extreme crisis or existential emergency",
      "Rules of commercial trade",
      "The duty of soldiers in peacetime"
    ],
    correctAnswer: "Codes of conduct, ethics, and exceptions during extreme crisis or existential emergency",
    explanation: "Apaddharma defines how moral rules adapt during times of collapse, invasion, or extreme distress to ensure survival and restore righteousness.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 12,
    question: "Shanti Parva is the longest Parva in the entire Mahabharata.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. Containing over 14,000 verses across 365 chapters, Shanti Parva is the largest philosophical repository in the epic.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 12,
    question: "According to Bhishma, what is the ultimate source of a king's strength?",
    type: "wisdom",
    options: [
      "The size of his treasury alone",
      "The affection, trust, and welfare of his subjects (Praja Palana)",
      "The cruelty of his punishments",
      "Mercenary soldiers"
    ],
    correctAnswer: "The affection, trust, and welfare of his subjects (Praja Palana)",
    explanation: "Bhishma taught that a king who oppresses his subjects will wither away, while one who protects them like a father flourishes.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 12,
    question: "Which section of Shanti Parva focuses on spiritual liberation and the nature of the soul?",
    type: "mcq",
    options: ["Rajadharma Parva", "Apaddharma Parva", "Mokshadharma Parva", "Dana Parva"],
    correctAnswer: "Mokshadharma Parva",
    explanation: "Mokshadharma Parva is the third major subsection of Shanti Parva, detailing Sankhya, Yoga, and pathways to spiritual freedom.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 12,
    question: "What animal fable did Bhishma use to illustrate survival among enemies in Apaddharma?",
    type: "wisdom",
    options: [
      "The story of the Cat and the Mouse (Lomasa and Palita)",
      "The Lion and the Hare",
      "The Fox and the Crow",
      "The Elephant and the Ant"
    ],
    correctAnswer: "The story of the Cat and the Mouse (Lomasa and Palita)",
    explanation: "The famous fable shows how mouse Palita formed a tactical alliance with trapped cat Lomasa to survive a hunter and mongoose.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 12,
    question: "Who healed Bhishma of all burning pain and mental fatigue before his discourse commenced?",
    type: "character_id",
    options: ["Sage Narada", "Lord Krishna", "Sage Vyasa", "Ashwini Kumaras"],
    correctAnswer: "Lord Krishna",
    explanation: "Lord Krishna blessed Bhishma with divine clarity, eliminating his bodily agony so his vast knowledge could be transmitted.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 12,
    question: "According to Bhishma's teachings, who is the creator of the era (Kala)?",
    type: "wisdom",
    options: [
      "The stars and planets",
      "Raja kalasya karanam — The King himself is the maker of his age",
      "Random chance",
      "The common public alone"
    ],
    correctAnswer: "Raja kalasya karanam — The King himself is the maker of his age",
    explanation: "Bhishma firmly asserted that whether an era is Satya Yuga or Kali Yuga is determined by the virtue and governance of the ruler.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 12,
    question: "What core leadership dilemma is explored when Yudhishthira chooses to rule instead of fleeing to the forest?",
    type: "wisdom",
    options: [
      "Monastic escapism is superior to public responsibility",
      "True nobility lies in bearing the agonizing burden of leadership to heal society rather than selfishly seeking personal peace",
      "Power should be grasped at any moral price",
      "Leaders have no personal feelings"
    ],
    correctAnswer: "True nobility lies in bearing the agonizing burden of leadership to heal society rather than selfishly seeking personal peace",
    explanation: "Krishna and Bhishma convince Yudhishthira that abandoning his subjects in their hour of desolation would be supreme cowardice.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 13: ANUSHASANA PARVA (121-130) ====================
  {
    parvaNumber: 13,
    question: "Which celebrated hymn containing 1,000 names of God was chanted by Bhishma in Anushasana Parva?",
    type: "character_id",
    options: ["Shiva Sahasranama", "Vishnu Sahasranama", "Lalita Sahasranama", "Aditya Hridaya Stotra"],
    correctAnswer: "Vishnu Sahasranama",
    explanation: "Bhishma taught Yudhishthira the sacred Vishnu Sahasranama in chapter 149 in response to the question on the supreme refuge.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 13,
    question: "What sacred virtue is identified by Bhishma as the root of all righteousness in Anushasana Parva?",
    type: "wisdom",
    options: ["Satya (Truth)", "Krodha (Anger)", "Dhana (Wealth)", "Bala (Brute Force)"],
    correctAnswer: "Satya (Truth)",
    explanation: "Bhishma declared: 'Satyam eva param brahma, satyam eva param tapah' — Truth is the highest divinity and supreme penance.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 13,
    question: "During which astronomical period did Bhishma choose to leave his mortal body?",
    type: "event_id",
    options: ["Dakshinayana", "Uttarayana (Northward journey of the sun)", "Solar Eclipse", "Lunar Eclipse"],
    correctAnswer: "Uttarayana (Northward journey of the sun)",
    explanation: "Bhishma waited on the bed of arrows until the winter solstice turned into the auspicious Uttarayana before departing.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 13,
    question: "What yogic power allowed Bhishma to hold his breath and depart at his chosen moment?",
    type: "character_id",
    options: ["Iccha-Mrityu", "Pranayama", "Kevala Kumbhaka", "Vayu Siddhi"],
    correctAnswer: "Iccha-Mrityu",
    explanation: "Blessed with Iccha-Mrityu, Bhishma withdrew his sensory breaths up the spinal centers to attain celestial liberation.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 13,
    question: "Dana (charity given without pride to the needy) is praised as the supreme purification in Anushasana Parva.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. Extensive chapters are dedicated to the spiritual science and societal blessings of selfless charity (Dana Dharma).",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 13,
    question: "What question did Yudhishthira ask that prompted Bhishma to recite the Vishnu Sahasranama?",
    type: "wisdom",
    options: [
      "'How do we build weapons?'",
      "'Who is the one supreme deity, and what is the highest refuge of mankind?'",
      "'How should taxes be collected?'",
      "'Why did my brothers fall in battle?'"],
    correctAnswer: "'Who is the one supreme deity, and what is the highest refuge of mankind?'",
    explanation: "Yudhishthira asked: 'Kimekam daivatam loke, kim vaapyekam parayanam?' prompting Bhishma's recitation of Narayana's thousand names.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 13,
    question: "Who was the divine mother who wept for Bhishma and was consoled by Lord Krishna?",
    type: "character_id",
    options: ["Satyavati", "Goddess Ganga", "Kunti", "Saraswati"],
    correctAnswer: "Goddess Ganga",
    explanation: "Mother Ganga rose from the holy waters lamenting that her peerless son had fallen, before Krishna extolled his immortal glory.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 13,
    question: "How many questions from Yudhishthira does Bhishma answer across Shanti and Anushasana Parvas?",
    type: "mcq",
    options: ["Over 200 questions on all dimensions of human existence", "Only 10", "50", "Exactly 18"],
    correctAnswer: "Over 200 questions on all dimensions of human existence",
    explanation: "Yudhishthira posed hundreds of detailed inquiries ranging from theology and cosmology to animal rights and jurisprudence.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 13,
    question: "What did Bhishma advise regarding the treatment of guest and domestic servants?",
    type: "wisdom",
    options: [
      "They should be treated with contempt",
      "A householder should eat only after guests, elders, children, and household workers are well-fed",
      "Only royals deserve sustenance",
      "Servants have no spiritual standing"
    ],
    correctAnswer: "A householder should eat only after guests, elders, children, and household workers are well-fed",
    explanation: "Bhishma's domestic code emphasizes that righteous hospitality requires feeding guests and laborers before oneself.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 13,
    question: "What phenomenon occurred in the sky when Bhishma's soul finally departed?",
    type: "event_id",
    options: [
      "Heavy thunder and hail",
      "A radiant shower of celestial blossoms and celestial drums resonating in the atmosphere",
      "A sudden total eclipse",
      "A roaring storm"
    ],
    correctAnswer: "A radiant shower of celestial blossoms and celestial drums resonating in the atmosphere",
    explanation: "As his soul rose like a blazing star, celestial gandharvas sang and sweet divine flowers fell from the heavens.",
    difficulty: "medium",
    points: 15
  },

  // ==================== PARVA 14: ASHVAMEDHIKA PARVA (131-140) ====================
  {
    parvaNumber: 14,
    question: "Which grand imperial Vedic sacrifice did Yudhishthira perform to heal the nation and establish sovereignty?",
    type: "event_id",
    options: ["Rajasuya Yajna", "Ashvamedha Yajna (Horse Sacrifice)", "Sarpa Satra", "Putrakameshti Yajna"],
    correctAnswer: "Ashvamedha Yajna (Horse Sacrifice)",
    explanation: "Sage Vyasa advised Yudhishthira to conduct the sacred Ashvamedha Yajna to cleanse grief, unite kingdoms, and restore prosperity.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 14,
    question: "Where did the Pandavas discover ancient buried gold to finance the massive Ashvamedha sacrifice?",
    type: "event_id",
    options: [
      "In the ruins of Indraprastha",
      "In the Himalayan treasury left behind by King Marutta",
      "In the ocean near Dwarka",
      "In the Gandhara mines"
    ],
    correctAnswer: "In the Himalayan treasury left behind by King Marutta",
    explanation: "Sage Vyasa directed them to Mount Munjavat where the ancient righteous king Marutta had buried vast mountains of golden vessels.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 14,
    question: "Which philosophical discourse was delivered by Lord Krishna to Arjuna before departing for Dwarka in this Parva?",
    type: "character_id",
    options: ["Uddhava Gita", "Anugita", "Vyadha Gita", "Avadhuta Gita"],
    correctAnswer: "Anugita",
    explanation: "When Arjuna confessed that the wartime Gita wisdom had slipped from his active memory, Krishna expounded the Anugita.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 14,
    question: "Who was the warrior son of Arjuna in Manipur who defeated his father during the horse's travels?",
    type: "character_id",
    options: ["Iravan", "Babhruvahana", "Abhimanyu", "Shrutakarma"],
    correctAnswer: "Babhruvahana",
    explanation: "Babhruvahana, son of Arjuna and Princess Chitrangada, challenged the sacrificial steed and knocked Arjuna unconscious in battle.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 14,
    question: "Which creature appeared at the sacrifice with half its body made of pure gold?",
    type: "character_id",
    options: ["A golden peacock", "A half-golden mongoose (Nakula)", "A golden deer", "A divine serpent"],
    correctAnswer: "A half-golden mongoose (Nakula)",
    explanation: "A mongoose with half its fur turned to gold emerged on the sacrifice grounds, declaring the emperor's million-gold yajna imperfect.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 14,
    question: "Whose humble charity turned half of the mongoose's body into gold in the famous parable?",
    type: "wisdom",
    options: [
      "A wealthy merchant in Mathura",
      "A poor starving brahmana family who gave their final handful of barley meal to a hungry guest",
      "A king who gave 100,000 cows",
      "A soldier who gave his sword"
    ],
    correctAnswer: "A poor starving brahmana family who gave their final handful of barley meal to a hungry guest",
    explanation: "The mongoose rolled in the spilled flour particles of the impoverished family's selfless gift, turning half his coat into gold.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 14,
    question: "Arjuna led the sacrificial stallion across India alone without any army.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Arjuna was accompanied by a powerful expeditionary corps and used diplomacy to reconcile former enemy kingdoms.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 14,
    question: "Who resurrected Arjuna with the mystic Sanjivani gem after he fell against Babhruvahana?",
    type: "character_id",
    options: ["Ulupi (Naga princess)", "Chitrangada", "Subhadra", "Kunti"],
    correctAnswer: "Ulupi (Naga princess)",
    explanation: "Naga princess Ulupi used the celestial Nagamani gem to revive Arjuna, explaining it was part of a curse-cleansing test for killing Bhishma.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 14,
    question: "What core moral lesson is taught by the parable of the golden mongoose in Ashvamedhika Parva?",
    type: "wisdom",
    options: [
      "Lavish imperial displays are superior to simple virtue",
      "True spiritual merit is measured by selfless sacrifice from the heart, not the financial scale or royal pomp of a ritual",
      "Mongooses should always be revered",
      "Never feed guests"
    ],
    correctAnswer: "True spiritual merit is measured by selfless sacrifice from the heart, not the financial scale or royal pomp of a ritual",
    explanation: "The story humbles the Pandavas' imperial pride by showing that pure selflessness outshines mountains of minted gold.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 14,
    question: "Which sage helped Yudhishthira conduct the ritual sacrifice flawlessly?",
    type: "character_id",
    options: ["Sage Vyasa", "Sage Narada", "Sage Vishwamitra", "Sage Vashistha"],
    correctAnswer: "Sage Vyasa",
    explanation: "Grandfather Sage Vyasa supervised every Vedic ceremony, guiding the purification and distribution of royal gifts.",
    difficulty: "easy",
    points: 10
  },

  // ==================== PARVA 15: ASHRAMAVASIKA PARVA (141-150) ====================
  {
    parvaNumber: 15,
    question: "How many years did King Dhritarashtra live in Hastinapur under Yudhishthira's care after the war before retiring to the forest?",
    type: "mcq",
    options: ["5 years", "10 years", "15 years", "20 years"],
    correctAnswer: "15 years",
    explanation: "Dhritarashtra and Gandhari resided in Hastinapur with royal honor for 15 years after the Kurukshetra War.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 15,
    question: "Which elder decided to accompany Dhritarashtra and Gandhari to the forest hermitage instead of enjoying palace comfort?",
    type: "character_id",
    options: ["Kunti", "Draupadi", "Subhadra", "Uttara"],
    correctAnswer: "Kunti",
    explanation: "Mother Kunti insisted on leaving imperial luxury to care for her elderly blind brother-in-law and sister-in-law in the forest.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 15,
    question: "How did Vidura leave his mortal coil in the forest hermitage?",
    type: "event_id",
    options: [
      "Slain by wild beasts",
      "His life force and spiritual radiance merged directly into Yudhishthira's body",
      "Drowned in the river",
      "Starved to death"
    ],
    correctAnswer: "His life force and spiritual radiance merged directly into Yudhishthira's body",
    explanation: "As both Vidura and Yudhishthira were incarnations of Lord Dharma, Vidura gazed into Yudhishthira and transmitted his soul directly into him.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 15,
    question: "What miraculous event did Sage Vyasa orchestrate on the banks of the sacred river Ganga?",
    type: "event_id",
    options: [
      "Turned the waters into milk",
      "Summoned the spirits of all fallen warriors of both sides to dine and embrace their living kin for one night",
      "Built a floating city",
      "Revived Drona permanently"
    ],
    correctAnswer: "Summoned the spirits of all fallen warriors of both sides to dine and embrace their living kin for one night",
    explanation: "Sage Vyasa invoked the souls of Bhishma, Drona, Karna, Duryodhana, and Abhimanyu from the Ganga, free of all enmity, reconciling with their families.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 15,
    question: "How did Dhritarashtra, Gandhari, and Kunti meet their final departure in the forest?",
    type: "event_id",
    options: [
      "In a sweeping wild forest fire, seated calmly in yogic meditation",
      "During a severe flood",
      "Of extreme old age in their huts",
      "Killed by bandits"
    ],
    correctAnswer: "In a sweeping wild forest fire, seated calmly in yogic meditation",
    explanation: "When a wildfire engulfed the woods near Haridwar, the elders refused to flee and consciously consumed their mortal bodies in yogic fire.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 15,
    question: "Bhima treated Dhritarashtra with absolute devotion and never spoke harsh words about past sins.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. While Yudhishthira showed boundless love, Bhima occasionally dropped bitter remarks reminding the old king how his sons perished.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 15,
    question: "Which Vedic life stage (Ashrama) is exemplified by the elders in Ashramavasika Parva?",
    type: "wisdom",
    options: ["Brahmacharya", "Grihastha", "Vanaprastha / Sannyasa (Forest retirement and renunciation)", "Kshatra"],
    correctAnswer: "Vanaprastha / Sannyasa (Forest retirement and renunciation)",
    explanation: "The elders followed the classical Vedic life cycle, willingly surrendering attachment and power to seek spiritual liberation in nature.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 15,
    question: "Who brought the tragic news of the elders' passing in the forest fire back to Hastinapur?",
    type: "character_id",
    options: ["Sanjaya", "Sage Narada", "Vidura", "A hunter"],
    correctAnswer: "Sage Narada",
    explanation: "Sage Narada arrived at Yudhishthira's court to announce that the royal elders had attained the highest celestial abodes.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 15,
    question: "Where did Sanjaya go after Dhritarashtra, Gandhari, and Kunti perished in the fire?",
    type: "character_id",
    options: [
      "Returned to Hastinapur as advisor",
      "Departed higher into the snowy Himalayas as an ascetic",
      "Went to Dwarka",
      "Became king of Gandhara"
    ],
    correctAnswer: "Departed higher into the snowy Himalayas as an ascetic",
    explanation: "Sanjaya heeded Dhritarashtra's final instruction to save himself and ascended into the high Himalayas to spend his life in meditation.",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 15,
    question: "What philosophical insight is revealed by the reunion of fallen warriors on the Ganga?",
    type: "wisdom",
    options: [
      "Enmity lasts forever in the afterlife",
      "Earthly conflicts and political rivalries are transient roles in a cosmic play; beyond death, all souls return to divine unity",
      "Warriors never find peace",
      "Reincarnation does not exist"
    ],
    correctAnswer: "Earthly conflicts and political rivalries are transient roles in a cosmic play; beyond death, all souls return to divine unity",
    explanation: "The miraculous night proved that the hatreds of Kurukshetra vanished in the celestial realm, leaving only mutual love and peace.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 16: MAUSALA PARVA (151-160) ====================
  {
    parvaNumber: 16,
    question: "How many years after the Kurukshetra War did the destruction of the Yadava dynasty take place?",
    type: "mcq",
    options: ["12 years", "25 years", "36 years", "50 years"],
    correctAnswer: "36 years",
    explanation: "Exactly thirty-six years after the war, fulfilling Queen Gandhari's curse, the destruction of Dwarka and the Yadavas occurred.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 16,
    question: "Which son of Krishna was disguised as a pregnant woman by young Yadavas to mock visiting sages?",
    type: "character_id",
    options: ["Pradyumna", "Samba", "Aniruddha", "Bhanu"],
    correctAnswer: "Samba",
    explanation: "Young Yadavas foolishly dressed Samba in women's attire and asked sages Vishwamitra, Kanva, and Narada what child he would bear.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 16,
    question: "What did the angered sages curse Samba to give birth to?",
    type: "event_id",
    options: ["A venomous serpent", "An iron club/pestle (Mausala) that would exterminate the Yadava race", "A burning stone", "A cloud of smoke"],
    correctAnswer: "An iron club/pestle (Mausala) that would exterminate the Yadava race",
    explanation: "The sages cursed Samba to give birth to an iron pestle that would wipe out the Vrishnis and Andhakas.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 16,
    question: "What grew along the coast of Prabhasa from the pulverized iron dust of the pestle?",
    type: "event_id",
    options: ["Golden trees", "Sharp, sword-like Erka reeds (iron rushes)", "Poisonous mushrooms", "White lotus flowers"],
    correctAnswer: "Sharp, sword-like Erka reeds (iron rushes)",
    explanation: "The iron dust washed ashore and grew as razor-sharp Erka grass that became lethal iron clubs when uprooted by the drunken warriors.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 16,
    question: "Where did the Yadavas gather on pilgrimage and destroy each other in a drunken frenzy?",
    type: "event_id",
    options: ["Kurukshetra", "Prabhasa Tirtha", "Mathura", "Ayodhya"],
    correctAnswer: "Prabhasa Tirtha",
    explanation: "At Prabhasa on the western sea coast, intoxicated Yadavas began arguing over war deeds and slaughtered one another with the iron reeds.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 16,
    question: "How did Lord Balarama give up his mortal body?",
    type: "event_id",
    options: [
      "Slain by a mace",
      "Sat in yogic meditation by the ocean as a thousand-headed white serpent (Adishesha) emerged from his mouth",
      "Drowned in the sea",
      "Killed in the fratricide"
    ],
    correctAnswer: "Sat in yogic meditation by the ocean as a thousand-headed white serpent (Adishesha) emerged from his mouth",
    explanation: "Balarama returned to his primordial form as Adishesha, the cosmic serpent, welcomed back into the ocean by Varuna and celestial nagas.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 16,
    question: "Who was the hunter whose arrow struck Lord Krishna's left heel?",
    type: "character_id",
    options: ["Jara", "Ekalavya", "Nishada", "Shabari"],
    correctAnswer: "Jara",
    explanation: "The hunter Jara mistook Krishna's resting lotus foot for the ear of a deer and shot an arrow tipped with the remaining iron pestle fragment.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 16,
    question: "What natural catastrophe submerged the golden city of Dwarka beneath the waves?",
    type: "event_id",
    options: ["A massive volcanic eruption", "The rising ocean swallowed the city as Arjuna led the survivors out", "An earthquake split the ground", "A meteor impact"],
    correctAnswer: "The rising ocean swallowed the city as Arjuna led the survivors out",
    explanation: "The Arabian Sea rose and swallowed Dwarka street by street immediately after Krishna's departure, preserving only the temple of Krishna.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 16,
    question: "When robbers attacked the surviving women and children of Dwarka, what shocking realization struck Arjuna?",
    type: "wisdom",
    options: [
      "His arrows were missing",
      "His Gandiva bow felt impossibly heavy, and he could not recall his celestial invocations",
      "He had forgotten how to fight",
      "His chariot horses ran away"
    ],
    correctAnswer: "His Gandiva bow felt impossibly heavy, and he could not recall his celestial invocations",
    explanation: "Arjuna discovered that without Krishna's presence, his supreme martial prowess had evaporated, signalling the close of an epoch.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 16,
    question: "The departure of Lord Krishna marks the cosmic transition from Dvapara Yuga to Kali Yuga.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "True. In traditional Indic cosmology, the exact moment of Krishna's ascension marks the formal inception of the Kali Yuga.",
    difficulty: "easy",
    points: 10
  },

  // ==================== PARVA 17: MAHAPRASTHANIKA PARVA (161-170) ====================
  {
    parvaNumber: 17,
    question: "Whom did Yudhishthira crown as the Emperor of Hastinapur before embarking on the final great pilgrimage?",
    type: "character_id",
    options: ["Yuyutsu", "Parikshit (Abhimanyu's son)", "Janamejaya", "Babhruvahana"],
    correctAnswer: "Parikshit (Abhimanyu's son)",
    explanation: "Yudhishthira consecrated Arjuna's grandson Parikshit as Emperor of Hastinapur, ensuring the succession of the Pandava line.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 17,
    question: "To which deity did Arjuna return the celestial Gandiva bow and inexhaustible quivers before departing?",
    type: "character_id",
    options: ["Lord Shiva", "Lord Varuna / Agni", "Lord Indra", "Lord Brahma"],
    correctAnswer: "Lord Varuna / Agni",
    explanation: "Agni Deva appeared and instructed Arjuna to return the Gandiva bow and quivers to Varuna, as their historical purpose had concluded.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 17,
    question: "What loyal creature joined the Pandavas and Draupadi on their final ascent into the snow-capped Himalayas?",
    type: "character_id",
    options: ["A white horse", "A stray dog", "A mountain eagle", "A faithful deer"],
    correctAnswer: "A stray dog",
    explanation: "A faithful dog followed Yudhishthira and his family steadfastly across the Himalayan snows.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 17,
    question: "Who was the first among the royal travelers to collapse and perish on the mountain slope?",
    type: "character_id",
    options: ["Draupadi", "Sahadeva", "Nakula", "Arjuna"],
    correctAnswer: "Draupadi",
    explanation: "Draupadi fell first. When Bhima asked why, Yudhishthira explained it was due to her subtle favoritism toward Arjuna above her other husbands.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 17,
    question: "Why did Sahadeva fall next on the mountain path according to Yudhishthira?",
    type: "wisdom",
    options: [
      "Physical weakness",
      "Intellectual pride, believing none equaled him in astrological wisdom",
      "Gluttony",
      "Lack of devotion"
    ],
    correctAnswer: "Intellectual pride, believing none equaled him in astrological wisdom",
    explanation: "Sahadeva fell because of intellectual vanity—he took quiet pride in his unmatched scholarship and astrological insight.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 17,
    question: "What subtle flaw caused the incomparably handsome Nakula to fall?",
    type: "wisdom",
    options: [
      "Cowardice",
      "Vanity in his physical beauty, believing no one on earth rivaled him in grace",
      "Love of luxury",
      "Anger"
    ],
    correctAnswer: "Vanity in his physical beauty, believing no one on earth rivaled him in grace",
    explanation: "Nakula collapsed because he nurtured a subtle inner pride regarding his unrivaled personal elegance.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 17,
    question: "Why did the great warrior Arjuna fall on the ascent to Mount Meru?",
    type: "wisdom",
    options: [
      "Because he boasted that he could destroy all enemies in a single day, which he failed to do",
      "Because he dropped the Gandiva",
      "Because of fatigue",
      "Because he doubted Krishna"
    ],
    correctAnswer: "Because he boasted that he could destroy all enemies in a single day, which he failed to do",
    explanation: "Arjuna fell because he made the proud declaration that he alone could slaughter all adversaries in twenty-four hours, harboring pride in his archery.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 17,
    question: "What reasons did Yudhishthira give for Bhima's fall?",
    type: "wisdom",
    options: [
      "Disrespecting elders",
      "Excessive attachment to food (gluttony) and boastful pride in his unrivaled physical strength",
      "Cheating in combat",
      "Sleeping too much"
    ],
    correctAnswer: "Excessive attachment to food (gluttony) and boastful pride in his unrivaled physical strength",
    explanation: "Bhima fell because of his immense appetite and his boastful contempt for the strength of other warriors.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 17,
    question: "Yudhishthira stopped, wept, and refused to walk when his brothers and Draupadi collapsed in the snow.",
    type: "true_false",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "False. Understanding that each soul answers for its subtle karma, Yudhishthira did not glance backward, continuing his steady ascent with the dog.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 17,
    question: "What is the profound philosophical meaning behind the shedding of companions on the Mahaprasthana?",
    type: "wisdom",
    options: [
      "The Pandavas were unworthy heroes",
      "On the ultimate spiritual ascent, every subtle seed of ego, vanity, and partiality must dissolve before entering the supreme truth",
      "Mount Meru is impossible to climb",
      "Dogs are faster than humans"
    ],
    correctAnswer: "On the ultimate spiritual ascent, every subtle seed of ego, vanity, and partiality must dissolve before entering the supreme truth",
    explanation: "Even righteous champions harbor micro-flaws of personality that must be purged before attaining pure liberation.",
    difficulty: "hard",
    points: 20
  },

  // ==================== PARVA 18: SVARGAROHANA PARVA (171-180) ====================
  {
    parvaNumber: 18,
    question: "Which deity arrived in a celestial chariot at the summit of Mount Meru to invite Yudhishthira into heaven?",
    type: "character_id",
    options: ["Lord Brahma", "Lord Indra", "Lord Shiva", "Lord Vishnu"],
    correctAnswer: "Lord Indra",
    explanation: "Lord Indra arrived with divine fanfare to escort Dharmaraja Yudhishthira bodily into paradise.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 18,
    question: "Why did Yudhishthira refuse to step into Indra's celestial chariot?",
    type: "wisdom",
    options: [
      "He wanted more gold",
      "Indra insisted that the devoted stray dog could not enter heaven",
      "The chariot was too small",
      "He wanted to return to Hastinapur"
    ],
    correctAnswer: "Indra insisted that the devoted stray dog could not enter heaven",
    explanation: "Yudhishthira declared that abandoning a devoted, defenseless companion that sought his protection would be the vilest adharma, even for paradise.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 18,
    question: "Into whom did the faithful dog transform when Yudhishthira refused heaven?",
    type: "character_id",
    options: ["Lord Shiva", "Lord Dharma (his divine father)", "Lord Varuna", "Sage Vyasa"],
    correctAnswer: "Lord Dharma (his divine father)",
    explanation: "The dog transformed into Lord Dharma, praising Yudhishthira for demonstrating compassion that exceeded all human precedent.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 18,
    question: "Whom did Yudhishthira surprisingly find seated in radiant glory upon entering heaven?",
    type: "character_id",
    options: ["Karna", "Duryodhana", "Shakuni", "Dushasana"],
    correctAnswer: "Duryodhana",
    explanation: "Yudhishthira was shocked to see Duryodhana basking in celestial splendor among devas and shining heroes.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 18,
    question: "Why was Duryodhana permitted to enjoy heaven according to the Devas?",
    type: "wisdom",
    options: [
      "He bribed the celestial gatekeepers",
      "Because as a Kshatriya warrior, he died valiantly facing the enemy on the battlefield without fleeing or surrendering",
      "He had never committed any sin",
      "He was Krishna's friend"
    ],
    correctAnswer: "Because as a Kshatriya warrior, he died valiantly facing the enemy on the battlefield without fleeing or surrendering",
    explanation: "Kshatriya dharma dictates that dying bravely facing weapons on the battlefield earns Svarga, even for flawed monarchs.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 18,
    question: "Where did the celestial guide lead Yudhishthira when he demanded to see his brothers and Draupadi?",
    type: "event_id",
    options: [
      "To a pleasure garden",
      "Into a dark, foul-smelling, terrifying realm resembling hell (Naraka)",
      "Back down to earth",
      "To the ocean floor"
    ],
    correctAnswer: "Into a dark, foul-smelling, terrifying realm resembling hell (Naraka)",
    explanation: "Yudhishthira was led down a rotting, blood-soaked path where the agonized voices of his brothers cried out from darkness.",
    difficulty: "easy",
    points: 10
  },
  {
    parvaNumber: 18,
    question: "What courageous choice did Yudhishthira make when standing in the dark abyss of hell?",
    type: "wisdom",
    options: [
      "He fled back to heaven alone",
      "He ordered the messenger to return, choosing to remain in hell to provide comfort and relief to his suffering brothers",
      "He cursed the gods",
      "He jumped into the fire"
    ],
    correctAnswer: "He ordered the messenger to return, choosing to remain in hell to provide comfort and relief to his suffering brothers",
    explanation: "Yudhishthira announced that if his presence brought even a moment's solace to his brethren, he would stay in hell forever.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 18,
    question: "Why did Yudhishthira have to experience the brief illusion of hell?",
    type: "event_id",
    options: [
      "To punish him for abandoning Hastinapur",
      "To cleanse the minor sin of speaking the deceptive half-truth 'Ashwatthama is dead' to Drona",
      "Because of his gambling addiction",
      "It was a mistake by Yama's scribes"
    ],
    correctAnswer: "To cleanse the minor sin of speaking the deceptive half-truth 'Ashwatthama is dead' to Drona",
    explanation: "Because he spoke a deceptive evasion during the war, he was subjected to a momentary optical illusion of hell (Maya).",
    difficulty: "hard",
    points: 20
  },
  {
    parvaNumber: 18,
    question: "In which celestial river did Yudhishthira bathe to shed his mortal sorrow and assume divine form?",
    type: "character_id",
    options: ["Yamuna", "Mandakini (Heavenly Ganga)", "Saraswati", "Godavari"],
    correctAnswer: "Mandakini (Heavenly Ganga)",
    explanation: "Yudhishthira took a holy bath in the Mandakini river, casting away all mortal grief and taking on a shining celestial body.",
    difficulty: "medium",
    points: 15
  },
  {
    parvaNumber: 18,
    question: "What is the ultimate supreme message of the Mahabharata revealed in Svargarohana Parva?",
    type: "wisdom",
    options: [
      "Violence solves all political dilemmas",
      "Dharma alone is eternal; earthly enmity dissolves into universal harmony, and righteousness yields supreme immortal peace",
      "The Kauravas won the war",
      "Only power matters in the universe"
    ],
    correctAnswer: "Dharma alone is eternal; earthly enmity dissolves into universal harmony, and righteousness yields supreme immortal peace",
    explanation: "The grand epic closes with the immortal truth: 'Yato Dharmas Tato Jayah' — Where there is Dharma, there is victory; and true victory is universal peace.",
    difficulty: "hard",
    points: 20
  }
];

module.exports = questionsData;
