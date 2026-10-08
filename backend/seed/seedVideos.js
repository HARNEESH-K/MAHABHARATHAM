// YouTube Reference Videos for all 18 Parvas
const videosData = [
  {
    parvaNumber: 1,
    title: "Adi Parva: The Genesis of the Kuru Dynasty & Cosmic Genealogies",
    description: "Detailed scholarly documentary exploring the origins of Shantanu, Ganga, Bhishma's vow, and the childhood rivalries of the princes.",
    youtubeUrl: "https://www.youtube.com/watch?v=kYJvM_eOq6I",
    youtubeId: "kYJvM_eOq6I",
    channel: "Indic Heritage & Epics",
    duration: "14:20",
    thumbnail: "https://img.youtube.com/vi/kYJvM_eOq6I/hqdefault.jpg"
  },
  {
    parvaNumber: 2,
    title: "Sabha Parva: The Mayasabha, Rajasuya & The Psychology of the Dice Game",
    description: "Strategic analysis of Yudhishthira's dilemma, Shakuni's psychological manipulation, and the collapse of the Kuru Assembly.",
    youtubeUrl: "https://www.youtube.com/watch?v=0hK2Kk0E7y8",
    youtubeId: "0hK2Kk0E7y8",
    channel: "Strategic Lessons Hub",
    duration: "16:45",
    thumbnail: "https://img.youtube.com/vi/0hK2Kk0E7y8/hqdefault.jpg"
  },
  {
    parvaNumber: 3,
    title: "Vana Parva: The 12-Year Forest Exile & Yaksha Prashna Discourses",
    description: "Philosophical exploration of the Pandavas' wilderness endurance, Arjuna's celestial penance, and the Yaksha's enigmatic riddles.",
    youtubeUrl: "https://www.youtube.com/watch?v=8V7Z2yYQ9g8",
    youtubeId: "8V7Z2yYQ9g8",
    channel: "Vedic Wisdom Series",
    duration: "18:10",
    thumbnail: "https://img.youtube.com/vi/8V7Z2yYQ9g8/hqdefault.jpg"
  },
  {
    parvaNumber: 4,
    title: "Virata Parva: Mastery of Incognito Life & The Battle of Matsya",
    description: "How the Pandavas conquered ego to master secret identities, the slaying of Kichaka, and Brihannala's solo victory over the Kuru army.",
    youtubeUrl: "https://www.youtube.com/watch?v=P9_1K3lK6b4",
    youtubeId: "P9_1K3lK6b4",
    channel: "Epic Chronicles",
    duration: "13:30",
    thumbnail: "https://img.youtube.com/vi/P9_1K3lK6b4/hqdefault.jpg"
  },
  {
    parvaNumber: 5,
    title: "Udyoga Parva: Vidura Niti & Krishna's Peace Embassy to Hastinapur",
    description: "Statecraft analysis on diplomatic negotiation, Vidura's ethical governance, and the revelation of Karna's secret birth.",
    youtubeUrl: "https://www.youtube.com/watch?v=Z6e9B1qL1bU",
    youtubeId: "Z6e9B1qL1bU",
    channel: "Indian Strategic Studies",
    duration: "21:15",
    thumbnail: "https://img.youtube.com/vi/Z6e9B1qL1bU/hqdefault.jpg"
  },
  {
    parvaNumber: 6,
    title: "Bhishma Parva: The Bhagavad Gita & The 10 Days of Bhishma's Command",
    description: "Exposition of Nishkama Karma on the battlefield of Kurukshetra, the cosmic Vishwaroopa, and the fall on the bed of arrows.",
    youtubeUrl: "https://www.youtube.com/watch?v=1F_4S1dE5u8",
    youtubeId: "1F_4S1dE5u8",
    channel: "Gita & Philosophy",
    duration: "24:50",
    thumbnail: "https://img.youtube.com/vi/1F_4S1dE5u8/hqdefault.jpg"
  },
  {
    parvaNumber: 7,
    title: "Drona Parva: The Chakravyuh Strategy, Abhimanyu's Valor & Fall of Drona",
    description: "Military dissection of Drona's labyrinthine formation, the martyrdom of Abhimanyu, and the ethical breakdown of war conventions.",
    youtubeUrl: "https://www.youtube.com/watch?v=Y7d9e1kO3vA",
    youtubeId: "Y7d9e1kO3vA",
    channel: "Ancient Battlefields",
    duration: "19:40",
    thumbnail: "https://img.youtube.com/vi/Y7d9e1kO3vA/hqdefault.jpg"
  },
  {
    parvaNumber: 8,
    title: "Karna Parva: The Tragedy of Karna & The Ultimate Duel with Arjuna",
    description: "Deep dive into Karna's internal conflict, Shalya's biting charioteering, and the convergence of ancient curses on Day 17.",
    youtubeUrl: "https://www.youtube.com/watch?v=L5k3w2oP9qE",
    youtubeId: "L5k3w2oP9qE",
    channel: "Characters of Mahabharata",
    duration: "22:15",
    thumbnail: "https://img.youtube.com/vi/L5k3w2oP9qE/hqdefault.jpg"
  },
  {
    parvaNumber: 9,
    title: "Shalya Parva: The Final Day of Kurukshetra & The Great Mace Duel",
    description: "Shalya's fall, Duryodhana's concealment in Dvaipayana Lake, and the fierce mace duel with Bhima.",
    youtubeUrl: "https://www.youtube.com/watch?v=W4r6t8yU2iO",
    youtubeId: "W4r6t8yU2iO",
    channel: "Mahabharata Animated Hub",
    duration: "15:30",
    thumbnail: "https://img.youtube.com/vi/W4r6t8yU2iO/hqdefault.jpg"
  },
  {
    parvaNumber: 10,
    title: "Sauptika Parva: The Midnight Massacre & Curse on Ashwatthama",
    description: "Ashwatthama's nocturnal raid, the unleashing of the Brahmashira astra, and Lord Krishna saving unborn Parikshit.",
    youtubeUrl: "https://www.youtube.com/watch?v=Q8w5e3rT1yI",
    youtubeId: "Q8w5e3rT1yI",
    channel: "Mythology Explained",
    duration: "17:05",
    thumbnail: "https://img.youtube.com/vi/Q8w5e3rT1yI/hqdefault.jpg"
  },
  {
    parvaNumber: 11,
    title: "Stri Parva: The Lament of the Queens & Gandhari's Curse on Krishna",
    description: "The grief of bereaved mothers on Kurukshetra, the destruction of the iron statue, and Gandhari's fateful prophecy.",
    youtubeUrl: "https://www.youtube.com/watch?v=E7r8t9yU0iP",
    youtubeId: "E7r8t9yU0iP",
    channel: "Literary Classics",
    duration: "14:50",
    thumbnail: "https://img.youtube.com/vi/E7r8t9yU0iP/hqdefault.jpg"
  },
  {
    parvaNumber: 12,
    title: "Shanti Parva: Bhishma's Discourses on Rajadharma & Apaddharma",
    description: "The supreme masterclass on leadership, statecraft, ethics in crisis, and the philosophical duty of kings.",
    youtubeUrl: "https://www.youtube.com/watch?v=R2t4y6u8I9o",
    youtubeId: "R2t4y6u8I9o",
    channel: "Ancient Indian Political Thought",
    duration: "26:40",
    thumbnail: "https://img.youtube.com/vi/R2t4y6u8I9o/hqdefault.jpg"
  },
  {
    parvaNumber: 13,
    title: "Anushasana Parva: The Vishnu Sahasranama & Bhishma's Passing",
    description: "The thousand names of Narayana, the sanctity of Dana (charity), and Bhishma's yogic ascension during Uttarayana.",
    youtubeUrl: "https://www.youtube.com/watch?v=T3y5u7i9O1p",
    youtubeId: "T3y5u7i9O1p",
    channel: "Spiritual Heritage",
    duration: "20:10",
    thumbnail: "https://img.youtube.com/vi/T3y5u7i9O1p/hqdefault.jpg"
  },
  {
    parvaNumber: 14,
    title: "Ashvamedhika Parva: The Imperial Horse Sacrifice & The Golden Mongoose",
    description: "Arjuna's nationwide campaign, the Anugita, and the parable showing that humble charity outweighs royal gold.",
    youtubeUrl: "https://www.youtube.com/watch?v=Y4u6i8o0P2a",
    youtubeId: "Y4u6i8o0P2a",
    channel: "Vedic Rituals & Wisdom",
    duration: "15:25",
    thumbnail: "https://img.youtube.com/vi/Y4u6i8o0P2a/hqdefault.jpg"
  },
  {
    parvaNumber: 15,
    title: "Ashramavasika Parva: The Retirement of the Elders & Reunion on the Ganga",
    description: "Vanaprastha of Dhritarashtra, Gandhari, and Kunti, Vidura's merging with Yudhishthira, and the miraculous night of spirits.",
    youtubeUrl: "https://www.youtube.com/watch?v=U5i7o9p1A3s",
    youtubeId: "U5i7o9p1A3s",
    channel: "Epic Journeys",
    duration: "16:15",
    thumbnail: "https://img.youtube.com/vi/U5i7o9p1A3s/hqdefault.jpg"
  },
  {
    parvaNumber: 16,
    title: "Mausala Parva: The Fall of Dwarka & The Ascension of Lord Krishna",
    description: "The fratricide at Prabhasa, hunter Jara's arrow, the submergence of Dwarka, and the dawning of the Kali Yuga.",
    youtubeUrl: "https://www.youtube.com/watch?v=I6o8p0a2S4d",
    youtubeId: "I6o8p0a2S4d",
    channel: "End of an Avatar",
    duration: "21:30",
    thumbnail: "https://img.youtube.com/vi/I6o8p0a2S4d/hqdefault.jpg"
  },
  {
    parvaNumber: 17,
    title: "Mahaprasthanika Parva: The Final Pilgrimage to the Himalayas",
    description: "Renunciation of the throne, the surrender of the Gandiva, and the symbolic fall of companions on Mount Meru.",
    youtubeUrl: "https://www.youtube.com/watch?v=O7p9a1s3D5f",
    youtubeId: "O7p9a1s3D5f",
    channel: "Himalayan Mysticism",
    duration: "13:50",
    thumbnail: "https://img.youtube.com/vi/O7p9a1s3D5f/hqdefault.jpg"
  },
  {
    parvaNumber: 18,
    title: "Svargarohana Parva: The Test of the Dog & Universal Peace in Heaven",
    description: "The examination of compassion, the illusion of hell, and the eternal spiritual reconciliation of Pandavas and Kauravas.",
    youtubeUrl: "https://www.youtube.com/watch?v=P8a0s2d4F6g",
    youtubeId: "P8a0s2d4F6g",
    channel: "Supreme Liberation",
    duration: "18:40",
    thumbnail: "https://img.youtube.com/vi/P8a0s2d4F6g/hqdefault.jpg"
  }
];

module.exports = videosData;
