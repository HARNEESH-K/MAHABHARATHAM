const achievementsData = [
  {
    code: "FIRST_QUEST",
    title: "First Quest",
    description: "Conquered your first Mahabharata Parva quest.",
    icon: "Target",
    badgeColor: "#d4af37",
    requirementType: "first_quiz",
    requirementValue: 1,
    pointsReward: 50
  },
  {
    code: "WARRIOR_OF_WISDOM",
    title: "Warrior of Wisdom",
    description: "Demonstrated superior wisdom with an accuracy of 80% or higher.",
    icon: "ShieldAlert",
    badgeColor: "#e67e22",
    requirementType: "accuracy",
    requirementValue: 80,
    pointsReward: 100
  },
  {
    code: "EPIC_SCHOLAR",
    title: "Epic Scholar",
    description: "Mastered 5 entire Parvas of the grand epic.",
    icon: "BookOpen",
    badgeColor: "#3498db",
    requirementType: "parva_count",
    requirementValue: 5,
    pointsReward: 150
  },
  {
    code: "MASTER_OF_SABHA",
    title: "Master of the Sabha",
    description: "Traversed past 10 Parvas deep into the plains of Kurukshetra.",
    icon: "Crown",
    badgeColor: "#9b59b6",
    requirementType: "parva_count",
    requirementValue: 10,
    pointsReward: 250
  },
  {
    code: "KURUKSHETRA_CHAMPION",
    title: "Kurukshetra Champion",
    description: "Conquered all 5 brutal battle Parvas (Bhishma, Drona, Karna, Shalya, Sauptika).",
    icon: "Flame",
    badgeColor: "#c0392b",
    requirementType: "war_mastery",
    requirementValue: 5,
    pointsReward: 350
  },
  {
    code: "MAHABHARATA_MASTER",
    title: "Mahabharata Master",
    description: "Completed the entire 18 Parvas Quest and ascended to Svarga.",
    icon: "Sparkles",
    badgeColor: "#ffd700",
    requirementType: "all_parvas",
    requirementValue: 18,
    pointsReward: 500
  },
  {
    code: "PERFECT_MARKS",
    title: "Flawless Archer",
    description: "Achieved a perfect 100% accuracy in a sacred trial.",
    icon: "Award",
    badgeColor: "#2ecc71",
    requirementType: "accuracy",
    requirementValue: 100,
    pointsReward: 100
  }
];

module.exports = achievementsData;
