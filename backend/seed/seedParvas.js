// 18 Parvas of the Mahabharata - Complete Master Dataset
const parvasData = [
  {
    number: 1,
    name: "Adi Parva",
    sanskritName: "आदि पर्व",
    title: "The Book of the Beginning",
    description: "The origins, cosmic genealogies, the birth of the Kuru dynasty, and the early rivalries between the Pandavas and Kauravas.",
    storySummary: "The epic begins with the lineage of Bharata, King Shantanu, and Ganga. Bhishma takes his terrible vow of celibacy for his father's happiness. The divine births of the Pandavas and Kauravas unfold. Dronacharya trains the princes in martial arts, where Arjuna emerges as the peerless archer and Ekalavya makes his supreme sacrifice. Duryodhana's jealousy leads to the deadly conspiracy of the Lakshagriha (House of Lac), from which the Pandavas escape. Arjuna wins Draupadi at her Swayamvara, and the Pandavas establish the majestic city of Indraprastha following the burning of Khandava forest.",
    keyLessons: [
      {
        title: "Sacrifice vs Consequence",
        description: "Bhishma's noble personal sacrifice solved an immediate crisis for his father but unwittingly sowed the seeds for long-term dynastic catastrophe."
      },
      {
        title: "Resilience in Adversity",
        description: "The Pandavas survived assassination attempts in the Lakshagriha through vigilance, foresight, and adaptability."
      },
      {
        title: "Dharma of Leadership",
        description: "Transforming the barren Khandavaprastha into the thriving empire of Indraprastha exemplifies visionary governance."
      }
    ],
    importantCharacters: [
      { name: "Bhishma", role: "Grandfather of the Kurus", description: "Son of Ganga and Shantanu, bound by a vow of lifelong celibacy and unwavering loyalty to the throne.", icon: "Shield" },
      { name: "Arjuna", role: "Third Pandava", description: "The incomparable archer guided by unmatched focus and devotion to practice.", icon: "Crosshair" },
      { name: "Karna", role: "Suryaputra & King of Anga", description: "The generous warrior born to Kunti and Surya, befriended and coronated by Duryodhana.", icon: "Sun" },
      { name: "Draupadi", role: "Princess of Panchala", description: "Born from the sacrificial fire, she becomes the collective empress of the five Pandavas.", icon: "Flame" }
    ],
    importantEvents: [
      { title: "Bhishma's Terrible Vow", description: "Devavrata renounces the throne and takes a vow of celibacy, earning the name Bhishma.", significance: "Sets the tragic stage for future dynastic disputes." },
      { title: "Lakshagriha Conspiracy", description: "Purochana builds a lacquer palace at Varnavata to incinerate the Pandavas alive.", significance: "Forces the Pandavas into disguise and tests their survival instincts." },
      { title: "Draupadi's Swayamvara", description: "Arjuna pierces the eye of the revolving fish target to win Draupadi's hand.", significance: "Forges a vital alliance with King Drupada of Panchala." }
    ],
    difficulty: "Easy",
    pointsReward: 150,
    quote: {
      text: "Whatever is here found may be found elsewhere, but what is not found here is nowhere else.",
      speaker: "Sage Vyasa"
    },
    theme: { color: "#e67e22", symbol: "📜" }
  },
  {
    number: 2,
    name: "Sabha Parva",
    sanskritName: "सभा पर्व",
    title: "The Book of the Assembly Hall",
    description: "The construction of the wondrous palace of Maya Danava, the Rajasuya sacrifice, the fateful game of dice, and Draupadi's disrobing.",
    storySummary: "Maya Danava builds the optical wonder of the Mayasabha for the Pandavas. King Yudhishthira performs the monumental Rajasuya Yajna, establishing supreme sovereignty across Aryavarta after Bhima slays Jarasandha and Krishna eliminates Shishupala. Consumed by burning envy upon witnessing Indraprastha's magnificence, Duryodhana and uncle Shakuni scheme an unequal game of dice. Yudhishthira gambles away his wealth, kingdom, brothers, himself, and Draupadi. Dushasana attempts to disrobe Draupadi in open court, where Lord Krishna intervenes with divine grace. The Pandavas are cast into twelve years of forest exile and one year of incognito existence.",
    keyLessons: [
      {
        title: "The Peril of Compulsion",
        description: "Even righteous leaders like Yudhishthira can fall prey to destructive addictions and rigid, misguided adherence to formal rules."
      },
      {
        title: "Moral Cowardice of Institutions",
        description: "When elders and judges remain silent in the face of blatant injustice, the moral foundation of the state decays."
      },
      {
        title: "Envy as an Existential Weapon",
        description: "Duryodhana's inability to appreciate another's success turned jealousy into an all-consuming path of mutual destruction."
      }
    ],
    importantCharacters: [
      { name: "Yudhishthira", role: "Eldest Pandava (Dharmaraja)", description: "The embodiment of truth who falters fatally under the psychological trap of the dice game.", icon: "Crown" },
      { name: "Shakuni", role: "Prince of Gandhara", description: "Master manipulator who uses loaded dice and psychological insight to orchestrate the Pandavas' downfall.", icon: "Dices" },
      { name: "Duryodhana", role: "Eldest Kaurava", description: "Crown prince of Hastinapur whose relentless ambition and resentment trigger the epic conflict.", icon: "Flame" },
      { name: "Draupadi", role: "Empress of Indraprastha", description: "Challenges the legal and moral legitimacy of the Kuru elders in an assembly that failed her.", icon: "Sparkles" }
    ],
    importantEvents: [
      { title: "Rajasuya Sacrifice", description: "Yudhishthira is consecrated as emperor of Aryavarta following diplomatic conquests.", significance: "Peak of Pandava prosperity and catalyst of Duryodhana's resentment." },
      { title: "The Fateful Game of Dice", description: "Shakuni uses deceitful dice to strip the Pandavas of kingdom and freedom.", significance: "The ethical nadir of the Hastinapur assembly." },
      { title: "Draupadi's Vastraharan & Vow", description: "Krishna miraculously provides endless cloth as Draupadi invokes divine surrender.", significance: "Irreversible seal of doom on the Kaurava clan." }
    ],
    difficulty: "Medium",
    pointsReward: 160,
    quote: {
      text: "Did you lose yourself first, Dharmaraja, or did you wager me first?",
      speaker: "Draupadi in the Kuru Sabha"
    },
    theme: { color: "#c0392b", symbol: "🎲" }
  },
  {
    number: 3,
    name: "Vana Parva",
    sanskritName: "वन पर्व",
    title: "The Book of the Forest",
    description: "The 12-year exile of the Pandavas in the wilderness, spiritual preparation, heroic quests, and philosophical discourses.",
    storySummary: "Exiled into the Kamyaka and Dwaita forests, the Pandavas endure hardship while fortifying their inner strength. Sage Shaunaka comforts Yudhishthira with philosophical wisdom. Arjuna departs for the Himalayas to perform severe penance, battles Lord Shiva disguised as a Kirata, and obtains celestial astras (including the Pashupatastra) before visiting Indraloka. Sage Markandeya narrates profound parables including the stories of Rama, Nala and Damayanti, and Savitri and Satyavan. In the climactic Yaksha Prashna, Yudhishthira answers profound ethical riddles posed by Dharma disguised as a crane, reviving his brothers.",
    keyLessons: [
      {
        title: "Adversity as Strategic Preparation",
        description: "Exile was not wasted in sorrow but used actively to acquire divine weapons, build alliances, and master the mind."
      },
      {
        title: "Intellectual Humility & Truth",
        description: "Yudhishthira's profound answers to the Yaksha prove that calm intellect and righteousness outweigh brute force."
      },
      {
        title: "Perseverance against Destiny",
        description: "The tales of Savitri reclaiming Satyavan and Damayanti seeking Nala emphasize relentless human will against cosmic odds."
      }
    ],
    importantCharacters: [
      { name: "Yaksha (Lord Dharma)", role: "Cosmic Tester", description: "Lord of righteousness who tests Yudhishthira's philosophical wisdom at the enchanted lake.", icon: "HelpCircle" },
      { name: "Arjuna", role: "The Ascetic Warrior", description: "Undertakes rigorous tapasya on Mount Mandara to secure divine weapons.", icon: "Shield" },
      { name: "Sage Markandeya", role: "Eternal Storyteller", description: "Dispenses ancient histories and moral consolations to the exiled princes.", icon: "Scroll" },
      { name: "Bhima", role: "The Protector", description: "Gathers celestial Saugandhika flowers for Draupadi and meets his divine brother Hanuman.", icon: "Zap" }
    ],
    importantEvents: [
      { title: "Arjuna's Tapasya & Shiva's Grace", description: "Arjuna encounters Shiva in hunter guise and receives the ultimate Pashupatastra.", significance: "Secures celestial superiority for the eventual war." },
      { title: "Meeting of Bhima and Hanuman", description: "Hanuman humbles Bhima's strength and promises his presence on Arjuna's chariot banner.", significance: "Spiritual solidarity between the two sons of Vayu." },
      { title: "The Yaksha Prashna", description: "Yudhishthira solves the enigmatic riddles of life, death, mind, and dharma at the sacred pool.", significance: "Revival of the Pandavas and confirmation of Yudhishthira's pure virtue." }
    ],
    difficulty: "Medium",
    pointsReward: 170,
    quote: {
      text: "What is the greatest wonder in the world? Day after day countless creatures die, yet those who remain live as if they are immortal.",
      speaker: "Yudhishthira to the Yaksha"
    },
    theme: { color: "#27ae60", symbol: "🌲" }
  },
  {
    number: 4,
    name: "Virata Parva",
    sanskritName: "विराट पर्व",
    title: "The Book of Virata",
    description: "The thirteenth year of exile spent in incognito disguise at the royal court of King Virata in the Matsya Kingdom.",
    storySummary: "Under threat of another twelve years in exile if discovered, the Pandavas conceal their celestial weapons in a Sami tree and assume deceptive identities in King Virata's court. Yudhishthira becomes Kanka the courtier, Bhima becomes Vallabha the master chef and wrestler, Arjuna assumes the guise of Brihannala the eunuch dance teacher, Nakula becomes Granthika the master of horses, Sahadeva becomes Tantipala the keeper of cattle, and Draupadi serves Queen Sudeshna as Sairandhri the chambermaid. When commander Kichaka harasses Draupadi, Bhima eliminates him. The Kauravas suspect Pandava involvement and invade Matsya to rustle royal cattle, leading to the dramatic battle of Uttara and Brihannala.",
    keyLessons: [
      {
        title: "Mastery of Ego and Adaptability",
        description: "Mighty emperors and warriors willingly served as cooks, dance teachers, and servants, proving that true stature comes from inner discipline."
      },
      {
        title: "The Danger of Unchecked Power",
        description: "General Kichaka's arrogance and harassment proved fatal, reminding rulers that abusing institutional power invites swift downfall."
      },
      {
        title: "Courage in the Face of Panic",
        description: "Prince Uttara panicked upon seeing the Kuru army, but under Brihannala's guidance discovered hidden valour."
      }
    ],
    importantCharacters: [
      { name: "Brihannala (Arjuna)", role: "Dance Teacher / Charioteer", description: "Disguised hero who trains Princess Uttara and single-handedly defeats the Kaurava vanguard.", icon: "Compass" },
      { name: "Vallabha (Bhima)", role: "Royal Chef & Wrestler", description: "Defends Draupadi's honor in secrecy by crushing the tyrant general Kichaka.", icon: "Activity" },
      { name: "King Virata", role: "Ruler of Matsya", description: "Gracious monarch unaware that his court hosts the supreme rulers of Aryavarta.", icon: "Castle" },
      { name: "Uttara", role: "Crown Prince of Matsya", description: "Young prince who flees in terror until inspired by Arjuna's peerless generalship.", icon: "Shield" }
    ],
    importantEvents: [
      { title: "Hiding Weapons in the Sami Tree", description: "The brothers wrap the Gandiva and divine weapons in linen resembling a corpse atop a tree.", significance: "Keeps their true identities shielded from Kaurava intelligence." },
      { title: "The Slaying of Kichaka", description: "Bhima pulverizes the abusive commander-in-chief in the dark dance hall.", significance: "Avenges Draupadi's mistreatment without breaking incognito cover." },
      { title: "The Battle for the Cattle (Gograhana)", description: "Brihannala takes the Gandiva, sounds the Devadatta conch, and puts the entire Kuru host to sleep with the Sammohanastra.", significance: "Successful completion of the 13-year exile period." }
    ],
    difficulty: "Medium",
    pointsReward: 160,
    quote: {
      text: "He who can conquer his mind and bend his pride to the service of others can never be broken by circumstance.",
      speaker: "Arjuna (Brihannala)"
    },
    theme: { color: "#8e44ad", symbol: "🎭" }
  },
  {
    number: 5,
    name: "Udyoga Parva",
    sanskritName: "उद्योग पर्व",
    title: "The Book of the Effort / Preparation",
    description: "Intense diplomatic missions, peace negotiations, the Vidura Niti, mobilization of vast armies, and Krishna's peace embassy.",
    storySummary: "With exile fulfilled, both camps mobilize seven and eleven Akshauhinis of armed forces respectively. King Drupada sends an emissary proposing peace. Vidura delivers his legendary discourse on statecraft, ethics, and wisdom (Vidura Niti) to the sleepless Dhritarashtra. Sanjaya delivers appeals, but Duryodhana refuses to grant even a needlepoint of territory. Lord Krishna travels to Hastinapur on a sacred mission of peace, offering terms to avert genocide. When Duryodhana attempts to capture Krishna, the Lord reveals his terrifying Vishwaroopa form. Krishna then approaches Karna, revealing his true birth as Kunti's eldest son, yet Karna remains steadfast to his loyalty toward Duryodhana.",
    keyLessons: [
      {
        title: "Exhaust All Diplomatic Options",
        description: "Dharma demands that war be treated strictly as the absolute last resort after every peace mechanism is exhausted."
      },
      {
        title: "Moral Loyalty vs Ethical Righteousness",
        description: "Karna's tragic decision demonstrates how personal loyalty to a benefactor can clash irreversibly with cosmic righteousness."
      },
      {
        title: "The Poison of Unreasonable Pride",
        description: "Duryodhana's refusal to concede five small villages doomed millions to catastrophic destruction."
      }
    ],
    importantCharacters: [
      { name: "Lord Krishna", role: "Ambassador of Peace", description: "The divine mediator who exhausts every diplomatic avenue before drawing the lines of Dharma.", icon: "Sun" },
      { name: "Vidura", role: "Prime Minister & Sage", description: "The voice of conscience who delivers immortal teachings on governance and personal ethics.", icon: "BookOpen" },
      { name: "Sanjaya", role: "Charioteer & Emissary", description: "Dhritarashtra's trusted advisor granted divine vision to chronicle the conflict.", icon: "Eye" },
      { name: "Karna", role: "Unshakable Friend", description: "Learns his royal birth from Krishna but chooses loyalty to Duryodhana above imperial succession.", icon: "Heart" }
    ],
    importantEvents: [
      { title: "Vidura Niti", description: "Vidura's all-night exposition to Dhritarashtra on ethics, statecraft, and human nature.", significance: "Timeless classic of Indian political philosophy and ethics." },
      { title: "Krishna's Peace Embassy", description: "Krishna visits Hastinapur demanding five villages to avert war; Duryodhana refuses and attempts his arrest.", significance: "Exposes Duryodhana's terminal obstinacy and confirms the necessity of war." },
      { title: "Revelation to Karna", description: "Kunti and Krishna reveal Karna's identity as the eldest Pandava.", significance: "Elevates Karna's tragedy as he pledges not to slay any brother except Arjuna." }
    ],
    difficulty: "Medium",
    pointsReward: 170,
    quote: {
      text: "I shall not surrender even as much earth as can be pierced by the point of a sharp needle without battle!",
      speaker: "Duryodhana to Krishna"
    },
    theme: { color: "#d35400", symbol: "🕊️" }
  },
  {
    number: 6,
    name: "Bhishma Parva",
    sanskritName: "भीष्म पर्व",
    title: "The Book of Bhishma",
    description: "The outbreak of the Kurukshetra War, Arjuna's moral crisis, Krishna's Bhagavad Gita, and the fall of Grandfather Bhishma on a bed of arrows.",
    storySummary: "The eighteen-day war commences on the plains of Kurukshetra. Facing his grandfathers, teachers, and kinsmen, Arjuna falls into profound existential dejection and drops his Gandiva. Lord Krishna imparts the immortal Bhagavad Gita, expounding Nishkama Karma (selfless action), the immortality of the Atman, and his supreme Vishwaroopa. For ten intense days, Grandfather Bhishma commands the Kaurava forces with devastating majesty, decimating Pandava divisions. Knowing they cannot overcome Bhishma while he fights uninhibited, the Pandavas place Shikhandi before Arjuna. Bhishma lowers his weapons, and Arjuna pierces him with countless arrows until he rests on a bed of arrows, waiting for the auspicious Uttarayana to leave his mortal frame.",
    keyLessons: [
      {
        title: "Nishkama Karma (Detached Action)",
        description: "You have a right to perform your prescribed duty, but never to the fruits of action. Act without selfish attachment."
      },
      {
        title: "Duty Over Sentimental Attachment",
        description: "When confronting systemic evil, even beloved teachers and kin cannot be spared if they stand as shields for injustice."
      },
      {
        title: "Transcending Existential Paralysis",
        description: "Arjuna's crisis illustrates how clarity of cosmic purpose overcomes crippling emotional despondency."
      }
    ],
    importantCharacters: [
      { name: "Lord Krishna (Parthasarathi)", role: "Divine Charioteer & Guru", description: "Guides Arjuna through cosmic wisdom and reveals the imperishable truth of existence.", icon: "Sun" },
      { name: "Arjuna", role: "The Reluctant Hero", description: "Overcomes paralyzing grief through the wisdom of the Gita to champion cosmic order.", icon: "Crosshair" },
      { name: "Bhishma", role: "Commander-in-Chief (Days 1-10)", description: "Unrivaled patriarch whose military prowess brings the Pandavas to the brink of despair.", icon: "Shield" },
      { name: "Shikhandi", role: "Warrior of Panchala", description: "Reborn soul of Amba who provides the ethical shield to neutralize Bhishma's invincible arms.", icon: "ArrowUpRight" }
    ],
    importantEvents: [
      { title: "The Revelation of Bhagavad Gita", description: "Krishna dispels Arjuna's delusion with 700 verses of timeless spiritual wisdom.", significance: "The philosophical foundation of Hindu philosophy and universal ethics." },
      { title: "Day 9 - Krishna Rushes with Chariot Wheel", description: "Seeing Bhishma's onslaught, Krishna leaps from the chariot with a wheel, breaking his vow not to bear arms.", significance: "Demonstrates that protecting Dharma takes precedence over personal vows." },
      { title: "Fall of Bhishma on the Bed of Arrows", description: "Pierced by Arjuna's shafts behind Shikhandi, Bhishma collapses onto a bed of arrows.", significance: "End of the first phase of the war and the fall of the moral pillar of Hastinapur." }
    ],
    difficulty: "Hard",
    pointsReward: 200,
    quote: {
      text: "Karmanye vadikaraste ma phaleshu kadachana — Your duty is only to act, never to its fruit.",
      speaker: "Lord Krishna in the Bhagavad Gita"
    },
    theme: { color: "#f39c12", symbol: "🏹" }
  },
  {
    number: 7,
    name: "Drona Parva",
    sanskritName: "द्रोण पर्व",
    title: "The Book of Drona",
    description: "Drona's command, the fatal Chakravyuh formation, the tragic martyrdom of Abhimanyu, Arjuna's fiery vengeance on Jayadratha, and Ghatotkacha's sacrifice.",
    storySummary: "Dronacharya assumes supreme command for five fierce days (Days 11-15). On Day 13, Drona forms the impenetrable Chakravyuh (padmavyuha). Sixteen-year-old Abhimanyu enters the labyrinthine formation alone, fighting with transcendent heroism until overwhelmed and killed by seven Maharathis in violation of war codes. Stricken with monumental grief, Arjuna vows to slay Jayadratha before sunset or immolate himself; aided by Krishna's solar illusion, he avenges his son. During night warfare, Bhima's son Ghatotkacha wreaks havoc, forcing Karna to exhaust his singular divine weapon (Vasavi Shakti). Finally, Yudhishthira utters the ambiguous half-truth 'Ashwatthama is dead', prompting Drona to lay down his arms in grief before Dhrishtadyumna beheads him.",
    keyLessons: [
      {
        title: "Degradation of Rules in Total War",
        description: "The unlawful slaying of Abhimanyu shattered the ancient codes of chivalry, initiating ruthless reciprocal measures."
      },
      {
        title: "Calculated Strategic Sacrifices",
        description: "Ghatotkacha's night assault forced Karna to expend the fatal dart reserved for Arjuna, preserving the Pandavas' core hope."
      },
      {
        title: "The Cost of Ambiguity",
        description: "Even the righteous Yudhishthira's chariot sank to the earth after speaking the evasive truth regarding the elephant Ashwatthama."
      }
    ],
    importantCharacters: [
      { name: "Dronacharya", role: "Supreme Commander (Days 11-15)", description: "The royal guru whose martial genius and Chakravyuh nearly crush the Pandava army.", icon: "Award" },
      { name: "Abhimanyu", role: "Hero of the Chakravyuh", description: "Arjuna's youthful lion-hearted son who breached the labyrinth and fought seven stalwarts single-handedly.", icon: "Star" },
      { name: "Ghatotkacha", role: "Demon Warrior (Rakshasa)", description: "Son of Bhima and Hidimbi whose colossal nocturnal assault neutralized Karna's deadliest weapon.", icon: "Moon" },
      { name: "Jayadratha", role: "King of Sindhu", description: "Blocked the Pandava reinforcement at the Chakravyuh; eliminated by Arjuna before sundown.", icon: "Target" }
    ],
    importantEvents: [
      { title: "The Martyrdom of Abhimanyu", description: "Seven Kaurava champions surround and execute the disarmed teenager inside the Chakravyuh.", significance: "The emotional peak of grief that stripped the war of all moral restraint." },
      { title: "Arjuna's Vow & Eclipse of the Sun", description: "Krishna momentarily veils the sun with his Sudarshana Chakra, luring Jayadratha into the open for Arjuna's fatal strike.", significance: "Fulfillment of an impossible vow under extreme time constraint." },
      { title: "Fall of Drona", description: "Hearing that 'Ashwatthama is dead' (the elephant), Drona enters deep meditation and is slain.", significance: "Removal of the second supreme military pillar of the Kauravas." }
    ],
    difficulty: "Hard",
    pointsReward: 200,
    quote: {
      text: "Even if the heavens and earth unite against me, I will shatter this Chakravyuh for my uncle and father!",
      speaker: "Abhimanyu"
    },
    theme: { color: "#962d3e", symbol: "⚔️" }
  },
  {
    number: 8,
    name: "Karna Parva",
    sanskritName: "कर्ण पर्व",
    title: "The Book of Karna",
    description: "Karna assumes supreme command, the vicious battle between Karna and Arjuna, Shalya's biting charioteering, and Karna's tragic demise.",
    storySummary: "On Days 16 and 17, Radheya Karna commands the Kaurava army with King Shalya as his reluctant charioteer. Shalya continuously derides Karna's confidence while steering his golden chariot. The battlefield witnesses extraordinary clashes: Bhima fulfills his ancient assembly vow by drinking Dushasana's blood and saving some to tie Draupadi's hair. On the 17th day, Arjuna and Karna engage in the long-anticipated duel of cosmic proportions. As the duel reaches its zenith, the earth swallows Karna's chariot wheel due to an ancient curse, and the Brahmastra incantations slip from his memory. As Karna tries to dislodge the stuck wheel, Krishna urges Arjuna to strike, and an Anjalika arrow ends the tragic life of the King of Anga.",
    keyLessons: [
      {
        title: "The Accumulation of Karma",
        description: "Karna's tragic end represents the inescapable convergence of past curses, moral choices, and associations with wicked company."
      },
      {
        title: "Moral High Ground in Critical Moments",
        description: "When Karna appeals to chivalry while his wheel is stuck, Krishna reminds him where his chivalry was when Draupadi and Abhimanyu cried for justice."
      },
      {
        title: "Importance of Psychological Allies",
        description: "While Krishna elevated Arjuna's spirit, Shalya's constant sarcasm drained Karna's psychological stamina."
      }
    ],
    importantCharacters: [
      { name: "Karna", role: "Commander-in-Chief (Days 16-17)", description: "The generous and tragic warrior whose unmatched solar valor meets destiny's cruel reckoning.", icon: "Sun" },
      { name: "Arjuna", role: "The Gandiva Bearer", description: "Engages his greatest rival in the ultimate duel of archery and divine astras.", icon: "Crosshair" },
      { name: "Shalya", role: "King of Madra / Charioteer", description: "Uncle of Nakula and Sahadeva, coerced into serving as Karna's demoralizing charioteer.", icon: "Compass" },
      { name: "Dushasana", role: "Second Kaurava Prince", description: "The perpetrator of Draupadi's vastraharan, slain by Bhima in brutal fulfillment of his vow.", icon: "Flame" }
    ],
    importantEvents: [
      { title: "Slaying of Dushasana", description: "Bhima tears open Dushasana's chest on the battlefield, fulfilling his terrible oath.", significance: "Avenges the royal court humiliation of Draupadi." },
      { title: "The Cosmic Duel of Arjuna and Karna", description: "Both champions unleash Vaishnavastra, Brahmastra, and celestial weapons in an aerial spectacle.", significance: "The defining clash of personal rivalry in the epic." },
      { title: "The Fall of Karna", description: "Karna's chariot wheel sinks into the mud; urged by Krishna, Arjuna releases the fatal crescent shaft.", significance: "Decisive military turning point guaranteeing Pandava victory." }
    ],
    difficulty: "Hard",
    pointsReward: 200,
    quote: {
      text: "Where was your righteousness, O Karna, when a solitary boy Abhimanyu was butchered by seven warriors?",
      speaker: "Lord Krishna to Karna"
    },
    theme: { color: "#e74c3c", symbol: "🛡️" }
  },
  {
    number: 9,
    name: "Shalya Parva",
    sanskritName: "शल्य पर्व",
    title: "The Book of Shalya",
    description: "The eighteenth and final day of war, Shalya's short-lived command, Duryodhana's flight to Dvaipayana lake, and the duel of maces.",
    storySummary: "On the 18th day, King Shalya takes command of the decimated Kaurava army and is slain by Yudhishthira using a divine spear. Sahadeva kills Shakuni, avenging the crooked dice game that sparked the war. Abandoned and solitary, Duryodhana flees to Dvaipayana Lake and solidifies the water through mystic power to hide in grief. The Pandavas track him down, and Yudhishthira offers him an honorable single combat against any brother with any weapon. Duryodhana chooses Bhima for a mace duel. As the two mighty giants trade bone-cracking strikes, Krishna signals Bhima to strike Duryodhana on the thighs—a violation of traditional mace rules justified by Duryodhana's past unpunished sins. Duryodhana falls mortally wounded.",
    keyLessons: [
      {
        title: "The Inevitability of Solitary Accounting",
        description: "Duryodhana began with eleven armies and countless flatterers, but in his final hour lay bleeding alone in the mud."
      },
      {
        title: "Breaking Rules to Restore Balance",
        description: "Bhima's blow to the thighs challenged conventional rules of sport to enforce the deeper karmic justice of cosmic order."
      },
      {
        title: "Retribution of the Architect of Sin",
        description: "Shakuni's demise at Sahadeva's hands demonstrates that deceitful instigators ultimately suffer the fate they orchestrated."
      }
    ],
    importantCharacters: [
      { name: "Duryodhana", role: "Fallen Monarch", description: "Fights with breathtaking bravery in his final mace duel, refusing to surrender even when all is lost.", icon: "Flame" },
      { name: "Bhima", role: "Vindicator of Vows", description: "The powerhouse who shatters Duryodhana's thighs with his mace to settle the sacred oath.", icon: "Zap" },
      { name: "Shalya", role: "Final Kaurava General", description: "Valiant warrior who falls before Yudhishthira's spear on the 18th morning.", icon: "Shield" },
      { name: "Balarama", role: "Neutral Teacher of Mace Warfare", description: "Arrives to witness his disciples clash and protests the illegal strike to the thigh.", icon: "Anchor" }
    ],
    importantEvents: [
      { title: "Fall of Shakuni", description: "Sahadeva hunts down and slays Shakuni, ending the deceitful voice of the Kuru court.", significance: "Closes the chapter opened by the game of dice." },
      { title: "Duryodhana in Dvaipayana Lake", description: "Duryodhana rests beneath frozen waters, challenged to emerge by Pandava taunts.", significance: "Symbolizes the deep isolation of defeated tyrants." },
      { title: "The Great Mace Duel", description: "Bhima and Duryodhana duel until Krishna gestures to Bhima's thighs, leading to the decisive blow.", significance: "Concludes the active military conflict of the 18-day Kurukshetra War." }
    ],
    difficulty: "Hard",
    pointsReward: 190,
    quote: {
      text: "I have lived like a king, ruled over lords, and die on the battlefield as a Kshatriya should. You, Pandavas, inherit a kingdom of corpses!",
      speaker: "Duryodhana's dying declaration"
    },
    theme: { color: "#c0392b", symbol: "🔨" }
  },
  {
    number: 10,
    name: "Sauptika Parva",
    sanskritName: "सौप्तिक पर्व",
    title: "The Book of the Sleeping Warriors",
    description: "Ashwatthama's nocturnal massacre of the sleeping Pandava camp, the Brahmashira astra, and the curse upon Ashwatthama.",
    storySummary: "As Duryodhana lies dying, three surviving Kauravas—Ashwatthama, Kripa, and Kritavarma—visit him. Enraged by his father's deceptive slaying, Ashwatthama is appointed commander. Inspired by observing an owl slaughter sleeping crows in the night, Ashwatthama launches a horrific midnight raid on the defenseless Pandava camp. He slaughters Dhrishtadyumna, Shikhandi, and the five sleeping sons of Draupadi (Upapandavas). Believing he destroyed the Pandava lineage, he returns to the dying Duryodhana, who rejoices before expiring. When the Pandavas pursue him, Ashwatthama discharges the cataclysmic Brahmashira weapon aimed at the womb of Uttara to exterminate Parikshit. Krishna intervenes, saves the unborn child, extracts the gem from Ashwatthama's forehead, and condemns him to wander the earth diseased and immortal for three thousand years.",
    keyLessons: [
      {
        title: "The Total Descent into Barbarism",
        description: "Vengeance when divorced from dharma degenerates into the slaughter of innocents and sleeping warriors."
      },
      {
        title: "Perpetuation of Toxic Trauma",
        description: "Violence breeds reciprocal atrocities, ensuring that victory feels indistinguishable from catastrophe."
      },
      {
        title: "The Burden of Immortality Without Grace",
        description: "Ashwatthama's curse proves that an undying life filled with guilt, wounds, and isolation is the ultimate punishment."
      }
    ],
    importantCharacters: [
      { name: "Ashwatthama", role: "Vengeful Son of Drona", description: "Possessed by fury, he conducts the nocturnal slaughter and unleashes the cosmic Brahmashira.", icon: "Ghost" },
      { name: "Lord Krishna", role: "Protector of the Seed of Dharma", description: "Rescues the unborn Parikshit in Uttara's womb and imposes the eternal curse on Ashwatthama.", icon: "Sun" },
      { name: "Draupadi", role: "Grieving Mother", description: "Laments the loss of all five of her sons, demanding the crest jewel of Ashwatthama as restitution.", icon: "Heart" },
      { name: "Uttara", role: "Mother of Parikshit", description: "Widow of Abhimanyu whose unborn child is shielded by Krishna's grace.", icon: "Shield" }
    ],
    importantEvents: [
      { title: "Night Massacre at Kurukshetra", description: "Ashwatthama enters the Pandava camp under cover of darkness and butchers the sleeping warriors.", significance: "The dark nadir of the epic where all martial honor was extinguished." },
      { title: "Duel of the Brahmashira Astra", description: "Ashwatthama and Arjuna release ultimate cosmic missiles; Arjuna retracts his, while Ashwatthama directs his at Uttara's womb.", significance: "Threatens the complete biological extinction of the Bharata line." },
      { title: "Curse upon Ashwatthama", description: "Krishna strips the jewel from his head and curses him to wander the desolate earth until the end of time.", significance: "Divine retribution for attacking an unborn child." }
    ],
    difficulty: "Hard",
    pointsReward: 190,
    quote: {
      text: "You shall wander through uninhabited lands for three thousand years, carrying the stench of blood and pus, despised by all living things.",
      speaker: "Lord Krishna to Ashwatthama"
    },
    theme: { color: "#2c3e50", symbol: "🌑" }
  },
  {
    number: 11,
    name: "Stri Parva",
    sanskritName: "स्त्री पर्व",
    title: "The Book of the Women",
    description: "The grief of widowed queens and mothers, the cremation of millions, and Queen Gandhari's devastating curse on the Yadava clan.",
    storySummary: "The battlefield of Kurukshetra lies silent, covered in millions of mutilated corpses, vultures, and broken chariots. Dhritarashtra, Gandhari, Kunti, and the royal women of Hastinapur arrive to mourn. Overcome with wrath, Dhritarashtra attempts to crush Bhima in an embrace of grief, but Krishna swiftly substitutes an iron statue, which the blind king shatters into powder before weeping in remorse. Gandhari views the horrific slaughter with divine vision granted by Sage Vyasa, describing the severed limbs of sons and husbands in heart-rending verse. In her inconsolable fury, holding Krishna responsible for permitting the carnage despite having the power to prevent it, Gandhari curses Krishna: thirty-six years hence, his own Yadava clan will slaughter one another in madness, and he will die alone in the forest. Krishna calmly accepts the curse.",
    keyLessons: [
      {
        title: "The Human Cost of War",
        description: "War brings no true victors; the ultimate price is borne by bereaved mothers, widows, and orphans weeping over ruins."
      },
      {
        title: "Anger Substituted by Wisdom",
        description: "Krishna's replacement of Bhima with the iron effigy illustrates how volatile fury must be deflected with calm foresight."
      },
      {
        title: "Grace in Accepting Blame",
        description: "Krishna's serene acceptance of Gandhari's curse demonstrates that divine leadership embraces accountability for cosmic suffering."
      }
    ],
    importantCharacters: [
      { name: "Queen Gandhari", role: "Bereaved Queen Mother", description: "Having lost all one hundred sons, her divine sight reveals the boundless tragedy of battlefield carnage.", icon: "EyeOff" },
      { name: "King Dhritarashtra", role: "Blind King", description: "Devastated by grief and suppressed rage, weeping over the shattered dreams of empire.", icon: "UserMinus" },
      { name: "Lord Krishna", role: "The Bearer of the Burden", description: "Stands with equanimity before the grieving mothers and accepts Gandhari's fateful curse.", icon: "Sun" },
      { name: "Kunti", role: "Mother of the Pandavas & Karna", description: "Finally reveals the agonizing secret that Karna was her first-born son, shattering Yudhishthira.", icon: "Heart" }
    ],
    importantEvents: [
      { title: "The Iron Effigy of Bhima", description: "Krishna places an iron statue into Dhritarashtra's embrace, which the grief-maddened king crushes.", significance: "Saves Bhima's life and exhausts the blind king's destructive wrath." },
      { title: "Gandhari's Battlefield Lament", description: "Gandhari walks among the fallen heroes, describing the agonizing sight of royal bodies eaten by jackals.", significance: "The most poignant anti-war poetry in classical literature." },
      { title: "Gandhari's Curse on Krishna", description: "Gandhari pronounces that Krishna's Yadava line will perish in fratricide 36 years later.", significance: "Foretells the eventual tragic conclusion of the Dvapara Yuga." },
      { title: "Revelation of Karna's Identity", description: "Kunti reveals to Yudhishthira that Karna was their elder brother, prompting Yudhishthira's deep agony and funeral rites.", significance: "Transforms victory into inconsolable fraternal guilt." }
    ],
    difficulty: "Medium",
    pointsReward: 160,
    quote: {
      text: "As you stood indifferent while Kurus destroyed Kurus, so shall your own kinsmen slay each other in thirty-six years!",
      speaker: "Queen Gandhari to Lord Krishna"
    },
    theme: { color: "#7f8c8d", symbol: "🥀" }
  },
  {
    number: 12,
    name: "Shanti Parva",
    sanskritName: "शान्ति पर्व",
    title: "The Book of Peace",
    description: "Yudhishthira's profound grief, the coronation, and Bhishma's immortal discourses on Raja Dharma (governance), Apaddharma, and Moksha.",
    storySummary: "Stricken with grief over the slaughter of his kinsmen and especially the revelation about his elder brother Karna, Yudhishthira desires to renounce the crown and retreat into forest asceticism. Krishna and his brothers persuade him that running away from royal duty is adharma. Yudhishthira is crowned Emperor of Hastinapur. Krishna then leads the Pandavas to the bed of arrows where Grandfather Bhishma still lies. Blessed by Krishna with clarity of mind, Bhishma delivers the most comprehensive treatise on statecraft, ethics, and spirituality in world literature: Rajadharma (the duties of kings and leaders), Apaddharma (morality during emergencies and crisis), and Mokshadharma (the path to spiritual liberation).",
    keyLessons: [
      {
        title: "Rajadharma: Duty of the Leader",
        description: "A king exists for his people, not the people for the king. The leader's happiness lies entirely in the happiness of the subjects."
      },
      {
        title: "Apaddharma: Ethics in Crisis",
        description: "In extraordinary times of survival and collapse, standard rules adapt; preserving life and dharma's core overrides rigid dogma."
      },
      {
        title: "Leadership as Responsible Burden",
        description: "Yudhishthira learns that true nobility is not fleeing the world into monastic silence, but courageously governing to heal wounded societies."
      }
    ],
    importantCharacters: [
      { name: "Bhishma Pitamaha", role: "Sage on the Bed of Arrows", description: "The dying statesman who imparts the ultimate masterclass on leadership, statecraft, and human nature.", icon: "Shield" },
      { name: "Yudhishthira", role: "The Reluctant Emperor", description: "Torn between royal duty and philosophical sorrow, seeking truth to govern justly.", icon: "Crown" },
      { name: "Lord Krishna", role: "Divine Catalyst", description: "Encourages Bhishma to share his treasure of wisdom before his knowledge departs with his soul.", icon: "Sun" },
      { name: "Sage Vyasa", role: "Chronicler and Guide", description: "Consoles Yudhishthira and reminds him of the cyclical nature of time and cosmic duty.", icon: "BookOpen" }
    ],
    importantEvents: [
      { title: "Yudhishthira's Existential Crisis", description: "The newly victorious king refuses the throne out of sorrow for the millions dead.", significance: "Explores the psychological aftermath and trauma of victorious commanders." },
      { title: "Coronation of Dharmaraja", description: "Yudhishthira is formally consecrated as Emperor of Hastinapur.", significance: "Re-establishment of righteous constitutional authority." },
      { title: "Bhishma's Discourse on Rajadharma", description: "Bhishma expounds on taxation, diplomacy, judicial integrity, military defense, and welfare.", significance: "The foundational text of ancient Indian political theory." }
    ],
    difficulty: "Medium",
    pointsReward: 180,
    quote: {
      text: "The king is the creator of his era. Whether an era is righteous or corrupt depends upon the discipline of the ruler.",
      speaker: "Bhishma to Yudhishthira"
    },
    theme: { color: "#16a085", symbol: "⚖️" }
  },
  {
    number: 13,
    name: "Anushasana Parva",
    sanskritName: "अनुशासन पर्व",
    title: "The Book of Instructions",
    description: "Bhishma's final teachings on Dana (charity), Dharma, the Vishnu Sahasranama, and his sacred passing into the heavens.",
    storySummary: "Continuing his discourses from the bed of arrows, Bhishma expounds on Anushasana (the code of righteous conduct, family ethics, charity, and spiritual vows). He elucidates the fruits of Dana (selfless giving), the sacred sanctity of cows, the equality of souls, and the sacred duties of each stage of life. In this Parva, Bhishma recites the immortal Vishnu Sahasranama (the thousand names of Lord Vishnu) in answer to Yudhishthira's question on the supreme refuge of humanity. As the sun turns northward marking the auspicious Uttarayana, Bhishma calls his loved ones, takes leave of Krishna, restrains his vital breaths through yogic power (Iccha-mrityu), and his soul ascends like a radiant star into the celestial realm.",
    keyLessons: [
      {
        title: "Dana: The Power of Generosity",
        description: "True charity given without expectation of return purifies the soul and balances karmic debts across lifetimes."
      },
      {
        title: "The Supreme Refuge (Vishnu Sahasranama)",
        description: "Constant contemplation on the divine qualities shields the mind from existential despair and fosters universal compassion."
      },
      {
        title: "Dignity in Mortality (Iccha-Mrityu)",
        description: "Bhishma's conscious passing demonstrates mastery over death when one has lived with uncompromising dedication to principle."
      }
    ],
    importantCharacters: [
      { name: "Bhishma Pitamaha", role: "Ascending Patriarch", description: "Concludes his life's monumental mission and departs with peace of conscience.", icon: "Sparkles" },
      { name: "Yudhishthira", role: "The Devout Disciple", description: "Absorbs the profound ethical code that will guide his historic peaceful reign.", icon: "Crown" },
      { name: "Lord Krishna", role: "The Supreme Deity", description: "Blessed by Bhishma's final devotion and guides the grandfather's soul to supreme liberation.", icon: "Sun" },
      { name: "Ganga", role: "Divine Mother", description: "Weeps for her son and is consoled by Krishna regarding Bhishma's immortal fame.", icon: "Droplets" }
    ],
    importantEvents: [
      { title: "Recitation of Vishnu Sahasranama", description: "Bhishma transmits the thousand divine names of Narayana to Yudhishthira.", significance: "One of the most revered and chanted devotional texts in Indian spiritual history." },
      { title: "Discourses on Charity and Truth", description: "Exposition of truth (Satya) as the foundation upon which the entire cosmos rests.", significance: "Defines the ethical lifestyle for sustainable civil society." },
      { title: "Bhishma's Uttarayana Departure", description: "Bhishma breathes his last through voluntary yogic power, showers of flowers descending from heaven.", significance: "End of the era of the great elders of the Kuru dynasty." }
    ],
    difficulty: "Medium",
    pointsReward: 170,
    quote: {
      text: "Truth is the highest virtue; truth is the supreme penance; truth is the highest sacrifice. Everything is established upon truth.",
      speaker: "Bhishma Pitamaha"
    },
    theme: { color: "#2980b9", symbol: "📿" }
  },
  {
    number: 14,
    name: "Ashvamedhika Parva",
    sanskritName: "अश्वमेधिक पर्व",
    title: "The Book of the Horse Sacrifice",
    description: "The imperial Ashvamedha Yajna of Yudhishthira, Arjuna's campaigns across distant realms, the Anugita, and the story of the golden mongoose.",
    storySummary: "To cleanse the nation of the psychological shadows of the Kurukshetra War and assert sovereign unity, Sage Vyasa advises Yudhishthira to conduct the sacred Ashvamedha Yajna (Horse Sacrifice). Gold is retrieved from the ancient treasury of King Marutta in the Himalayas. Before departing, Krishna reiterates the core wisdom of the Gita to Arjuna in the philosophical discourse called the Anugita. The sacrificial stallion is released to roam freely, accompanied by Arjuna and his army. Arjuna journeys across diverse kingdoms, reconciling former enemies, encountering his own warrior son Babhruvahana in Manipur, and subduing rebellious regions with magnanimity. The grand sacrifice concludes with unprecedented generosity, where a curious mongoose with half its body made of pure gold appears to declare that a poor brahmana's handful of flour surpassed the emperor's million-gold sacrifice in pure moral merit.",
    keyLessons: [
      {
        title: "National Healing & Reconciliation",
        description: "The Ashvamedha was used not for violent subjugation, but to knit broken kingdoms together into a compassionate commonwealth."
      },
      {
        title: "Moral Merit vs Display of Wealth",
        description: "The parable of the golden mongoose proves that the heartfelt gift of a starving family outweighs the lavish spectacle of an empire."
      },
      {
        title: "The Eternal Recurrence of Wisdom",
        description: "The Anugita highlights that even supreme champions need continual philosophical reinforcement to maintain inner clarity."
      }
    ],
    importantCharacters: [
      { name: "Arjuna", role: "Protector of the Sacred Steed", description: "Rides across India, pacifying realms through diplomacy and martial brilliance.", icon: "Compass" },
      { name: "Babhruvahana", role: "King of Manipur", description: "Son of Arjuna and Chitrangada who bravely challenges his father's legions.", icon: "Shield" },
      { name: "The Golden Mongoose", role: "Divine Moral Examiner", description: "Teaches the assembly that selfless compassion outshines royal ostentation.", icon: "Award" },
      { name: "Yudhishthira", role: "The Sacrificer Emperor", description: "Distributes boundless charity to widows, orphans, and scholars of all lands.", icon: "Gift" }
    ],
    importantEvents: [
      { title: "The Anugita Dialogue", description: "Krishna re-explains self-knowledge and cosmology to Arjuna prior to departing for Dwarka.", significance: "Philosophical sequel to the Bhagavad Gita." },
      { title: "Arjuna's Expedition Across the Subcontinent", description: "Arjuna defeats Babhruvahana, heals ancient feuds with Trigartas and Sindhus, and secures universal peace.", significance: "Re-unification of war-torn Aryavarta under one benevolent banner." },
      { title: "The Parable of the Golden Mongoose", description: "A mongoose rolls on the sacrifice floor and mocks that its remaining half failed to turn to gold.", significance: "Subverts ritualistic vanity in favor of pure self-abnegation." }
    ],
    difficulty: "Medium",
    pointsReward: 160,
    quote: {
      text: "The gift of a poor man's handful of barley given to a hungry guest with pure heart exceeds thousands of horses and mountains of royal gold.",
      speaker: "The Golden Mongoose"
    },
    theme: { color: "#f1c40f", symbol: "🐎" }
  },
  {
    number: 15,
    name: "Ashramavasika Parva",
    sanskritName: "आश्रमवासिक पर्व",
    title: "The Book of the Hermitage",
    description: "The retirement of elders Dhritarashtra, Gandhari, Kunti, and Vidura into the forest hermitage, and their peaceful departure in a forest fire.",
    storySummary: "For fifteen years following the war, King Dhritarashtra and Queen Gandhari live with dignity in Hastinapur under Yudhishthira's loving care, though Bhima occasionally vents bitter memories of past injustices. Acknowledging their advanced age, Dhritarashtra, Gandhari, and Kunti decide to retire into the forest to live an ascetic life of tapasya. Vidura accompanies them. In the forest near the Ganges, Vidura merges his life energy into Yudhishthira through spiritual communion. Sage Vyasa arranges a miraculous night on the banks of the sacred river, where the ghosts of all fallen warriors—Bhishma, Drona, Karna, Abhimanyu, Duryodhana—arise from the waters free of malice to embrace their living kin. Later, a wild forest fire sweeps through the hermitage; Dhritarashtra, Gandhari, and Kunti calmly sit in yogic meditation and attain liberation.",
    keyLessons: [
      {
        title: "Vanaprastha: Graceful Renunciation",
        description: "Knowing when to let go of power, luxury, and family attachment is the hallmark of spiritual maturity."
      },
      {
        title: "Forgiveness Transcending Life and Death",
        description: "The miraculous reunion on the Ganges reveals that earthly hatreds evaporate when viewed from the perspective of cosmic eternity."
      },
      {
        title: "Quiet Fortitude in the Final Hour",
        description: "The elders' peaceful composure amidst the blazing forest fire demonstrates absolute freedom from fear of death."
      }
    ],
    importantCharacters: [
      { name: "Kunti", role: "Ascetic Queen Mother", description: "Chooses to abandon imperial comfort to serve her elderly brother-in-law and sister-in-law in the forest.", icon: "Heart" },
      { name: "Dhritarashtra", role: "Purified Elder", description: "Performs severe penances to cleanse the remnants of past attachment and ignorance.", icon: "Shield" },
      { name: "Vidura", role: "The Incarnation of Dharma", description: "Merges his divine essence into Yudhishthira before leaving his mortal shell.", icon: "Sparkles" },
      { name: "Sage Vyasa", role: "Bridge Between Realms", description: "Summons the spirits of the deceased warriors for a night of transcendent reconciliation.", icon: "BookOpen" }
    ],
    importantEvents: [
      { title: "Departure to the Forest", description: "Dhritarashtra, Gandhari, and Kunti leave the royal palace for the Himalayan forest.", significance: "Fulfillment of the traditional four stages of Vedic life (Ashramas)." },
      { title: "Vidura's Spiritual Merging", description: "Vidura looks into Yudhishthira's eyes, and his luminous life force enters Dharmaraja.", significance: "Unification of the dual manifestations of Lord Dharma." },
      { title: "The Night of the Spirits on the Ganges", description: "Fallen heroes of Kurukshetra rise radiant and joyful, dining together in friendship with their families.", significance: "Dissolution of all war enmities into universal peace." },
      { title: "The Forest Fire (Samadhi)", description: "The elders embrace their destiny in the sacred fire, attaining the higher realms.", significance: "Dignified and voluntary departure of the senior generation." }
    ],
    difficulty: "Medium",
    pointsReward: 160,
    quote: {
      text: "Do not weep, my son. We go to purify our souls through meditation, for the fruit of renunciation is eternal peace.",
      speaker: "Kunti to Yudhishthira"
    },
    theme: { color: "#34495e", symbol: "🔥" }
  },
  {
    number: 16,
    name: "Mausala Parva",
    sanskritName: "मौसल पर्व",
    title: "The Book of the Iron Clubs",
    description: "The curse of the sages on Samba, the drunken fratricide of the Yadavas at Prabhasa with iron rushes, and the passing of Lord Krishna.",
    storySummary: "Thirty-six years after the Kurukshetra War, ominous celestial portents shake the city of Dwarka. Sages curse Samba (Krishna's son dressed as a pregnant woman) to birth an iron club (Mausala) that will destroy their race. Though pulverized and cast into the sea, the iron particles wash ashore and grow as sharp Erka reeds. The Yadava men travel on pilgrimage to Prabhasa, where they consume intoxicating liquor, quarrel bitterly over past war loyalties, uproot the iron reeds, and slaughter each other until the entire dynasty is exterminated. Balarama gives up his body as a great serpent. Lord Krishna rests under a tree in deep meditation; a hunter named Jara mistakes his lotus foot for a resting deer and shoots an arrow tipped with the remaining iron flake. Krishna pardons Jara and ascends to his supreme Vaikuntha abode. Dwarka is submerged beneath the roaring ocean.",
    keyLessons: [
      {
        title: "Intoxication and Factionalism",
        description: "Even the mightiest and most prosperous civilization can self-destruct overnight when arrogance, alcohol, and internal divisions take root."
      },
      {
        title: "The Inexorable Cycle of Time (Kala)",
        description: "Nothing material is permanent. Even the golden realm of Dwarka had to sink beneath the waves when its historical purpose concluded."
      },
      {
        title: "Divine Equality Before Cosmic Law",
        description: "Krishna did not exempt his own clan from karmic accountability, willingly fulfilling Gandhari's curse with absolute equanimity."
      }
    ],
    importantCharacters: [
      { name: "Lord Krishna", role: "The Ascending Avatar", description: "Concludes his earthly mission with serene compassion, forgiving his unwitting slayer.", icon: "Sun" },
      { name: "Balarama", role: "Incarnation of Shesha", description: "Enters Samadhi on the ocean shore as a white serpent emerges from his mouth.", icon: "Shield" },
      { name: "Jara", role: "The Hunter", description: "Unwitting instrument of destiny whose arrow releases the Lord from mortal form.", icon: "Crosshair" },
      { name: "Arjuna", role: "The Bereaved Guardian", description: "Arrives to witness Dwarka's submergence, finding that his Gandiva bow has lost its celestial power.", icon: "HelpCircle" }
    ],
    importantEvents: [
      { title: "The Iron Pestle and the Reeds", description: "Samba births the iron pestle, ground into dust that blooms as lethal iron rushes at Prabhasa.", significance: "Physical vehicle for Gandhari's ancient curse." },
      { title: "Fratricidal Destruction at Prabhasa", description: "Inebriated Yadava warriors slaughter one another in uncontrollable collective frenzy.", significance: "Total eradication of the warrior caste of the Dvapara Yuga." },
      { title: "Departure of Lord Krishna", description: "Krishna departs the mortal world beneath the Ashvattha tree, forgiving hunter Jara.", significance: "Official end of the Dvapara Yuga and dawn of the dark age of Kali Yuga." },
      { title: "Submersion of Dwarka", description: "As Arjuna leads surviving women and children out, the sea rises and swallows the golden city.", significance: "Geological and mythological marker of epochal transition." }
    ],
    difficulty: "Hard",
    pointsReward: 190,
    quote: {
      text: "Time creates all things, and Time destroys all things. Do not grieve, hunter, for you were merely the instrument of my cosmic will.",
      speaker: "Lord Krishna to hunter Jara"
    },
    theme: { color: "#1abc9c", symbol: "🌊" }
  },
  {
    number: 17,
    name: "Mahaprasthanika Parva",
    sanskritName: "महाप्रस्थानिक पर्व",
    title: "The Book of the Great Journey",
    description: "The Pandavas renounce their empire, crown Prince Parikshit, and undertake the final great pilgrimage to the Himalayas accompanied by a stray dog.",
    storySummary: "Realizing that Krishna has departed and the Kali Yuga has dawned, Yudhishthira decides to undertake the Mahaprasthana (the Great Final Pilgrimage). He crowns Arjuna's grandson Parikshit as Emperor of Hastinapur and appoints Yuyutsu as regent. The five Pandavas and Draupadi, clad in tree-bark robes, cast their earthly possessions into the holy rivers—Arjuna returning the celestial Gandiva bow to Varuna. Followed by a devoted stray dog, they march northward toward the majestic snow-capped peaks of Mount Meru and the Himalayas. One by one, the travelers fall due to subtle personal flaws: Draupadi falls first because of her partiality toward Arjuna; Sahadeva falls for his intellectual pride; Nakula for his vanity regarding his physical beauty; Arjuna for his pride that he could conquer all enemies in a single day; and Bhima for his gluttony and boastful strength. Only Yudhishthira, unwavering in righteousness, presses forward with the faithful dog.",
    keyLessons: [
      {
        title: "Subtle Flaws in Great Souls",
        description: "Even the greatest heroes bear subtle ego attachments—intellectual conceit, vanity, partiality—which must drop away before supreme liberation."
      },
      {
        title: "Steadfastness of Pure Dharma",
        description: "Yudhishthira's steady gait illustrates that spiritual ascension requires tranquil endurance regardless of who falls along the way."
      },
      {
        title: "Relinquishing Instruments of Power",
        description: "Arjuna returning the Gandiva bow teaches that all tools of earthly power must eventually be surrendered to the universe."
      }
    ],
    importantCharacters: [
      { name: "Yudhishthira", role: "The Solitary Pilgrim", description: "The embodiment of calm righteousness who continues the ascent when all companions fall.", icon: "Compass" },
      { name: "The Faithful Dog", role: "Cosmic Companion", description: "Refuses to leave Yudhishthira's side amidst the freezing Himalayan snows.", icon: "Heart" },
      { name: "Draupadi", role: "First to Fall", description: "Falls on the snow slopes, freed from the burdens of royal destiny.", icon: "Flame" },
      { name: "Arjuna", role: "The Champion Surrendering Arms", description: "Yields his peerless bow back to the waters of the ocean before ascending Meru.", icon: "Shield" }
    ],
    importantEvents: [
      { title: "Coronation of Parikshit", description: "The succession is secured with Abhimanyu's son Parikshit on the throne of Hastinapur.", significance: "Guarantees continuity of righteous lineage into the Kali Yuga." },
      { title: "Surrender of the Gandiva", description: "Agni and Varuna reclaim the divine bow and inexhaustible quivers from Arjuna.", significance: "Closure of the heroic era of celestial weapons." },
      { title: "The Fall on the Mountain Slopes", description: "Draupadi, Sahadeva, Nakula, Arjuna, and Bhima collapse one by one on the snowy ascent.", significance: "Moral analysis of human imperfections even among the virtuous." }
    ],
    difficulty: "Medium",
    pointsReward: 180,
    quote: {
      text: "Why did our beloved Draupadi fall first? Because she had greater partiality for Arjuna than for the rest of us. Even subtle favoritism is a bond.",
      speaker: "Yudhishthira to Bhima"
    },
    theme: { color: "#95a5a6", symbol: "🏔️" }
  },
  {
    number: 18,
    name: "Svargarohana Parva",
    sanskritName: "स्वर्गारोहण पर्व",
    title: "The Book of the Ascent to Heaven",
    description: "The test of the faithful dog, the illusion of hell, the reconciliation of all heroes, and the final ascension into the eternal realm of peace.",
    storySummary: "At the peak of Mount Meru, Lord Indra arrives in a celestial chariot with thunderous trumpets to take Yudhishthira bodily into heaven. When Indra insists that the dirty stray dog must be left behind because dogs are barred from Svarga, Yudhishthira steadfastly refuses to enter paradise at the cost of abandoning a loyal companion. The dog then transforms into Lord Dharma, blessing his son for passing the ultimate ethical examination. Upon reaching heaven, Yudhishthira is astonished to see Duryodhana seated in radiant splendor, while his own brothers and Draupadi are nowhere to be found. Guided by a celestial messenger, Yudhishthira is led down into a murky, terrifying realm filled with the agonizing cries of his brothers. Refusing to return to heaven, Yudhishthira declares he will stay in hell to comfort his brothers. Immediately the illusion dissolves: it was a final test (Maya) to cleanse the slight sin of his half-truth to Drona. Yudhishthira bathes in the celestial river Mandakini, sheds his mortal body, and enters the eternal realm of divine harmony where Pandavas and Kauravas exist in transcendent peace.",
    keyLessons: [
      {
        title: "Compassion Over Personal Paradise",
        description: "True Dharma refuses to abandon even the humblest, most helpless creature for the sake of personal salvation or luxury."
      },
      {
        title: "Beyond Earthly Enmity",
        description: "In the ultimate cosmic reality, all roles played on earth—heroes, villains, rivals—dissolve into the unitary play of divine consciousness."
      },
      {
        title: "The Final Purification",
        description: "Even the purest human soul must undergo a momentary purging of lingering earthly doubts before merging into eternal light."
      }
    ],
    importantCharacters: [
      { name: "Yudhishthira", role: "Dharmaraja Victorious", description: "Passes the ultimate ethical test of the dog and the illusion of hell, attaining immortal glory.", icon: "Crown" },
      { name: "Lord Dharma", role: "Father and Cosmic Tester", description: "Reveals himself from the form of the dog, praising his son's uncompromising loyalty to the vulnerable.", icon: "ShieldCheck" },
      { name: "Lord Indra", role: "King of the Devas", description: "Invites Yudhishthira into the celestial realm in a divine chariot.", icon: "Zap" },
      { name: "Duryodhana", role: "Redeemed Kshatriya", description: "Enjoys heaven for having fought with unyielding bravery and died on the battlefield as a Kshatriya.", icon: "Award" }
    ],
    importantEvents: [
      { title: "The Test of the Faithful Dog", description: "Yudhishthira refuses heaven if his companion cannot enter; the dog reveals itself as Lord Dharma.", significance: "Supreme moral climax: compassion for the weak takes precedence over paradise." },
      { title: "The Illusion of Hell (Maya)", description: "Yudhishthira chooses to remain in darkness with his suffering kin rather than enjoy solitary bliss in heaven.", significance: "Final transcendence of self-centered spiritual desire." },
      { title: "The Bath in the Sacred Mandakini", description: "Yudhishthira bathes in the celestial Ganga, sheds human sorrow, and takes on a divine form.", significance: "Attainment of ultimate spiritual liberation (Moksha)." },
      { title: "Cosmic Reconciliation", description: "Karna, Arjuna, Bhishma, Drona, Duryodhana, and the Pandavas reunited in eternal friendship.", significance: "The final message of the Mahabharata: truth and harmony outlive all earthly struggles." }
    ],
    difficulty: "Hard",
    pointsReward: 250,
    quote: {
      text: "I do not desire supreme heaven, nor kingship, nor release from birth. I desire only to relieve the suffering of all distressed creatures.",
      speaker: "Yudhishthira's eternal prayer"
    },
    theme: { color: "#9b59b6", symbol: "✨" }
  }
];

module.exports = parvasData;
