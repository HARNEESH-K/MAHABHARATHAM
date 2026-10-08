const { Achievement, User, QuizAttempt } = require('../models');

const evaluateAchievements = async (user, latestAttempt = null) => {
  const newAchievements = [];
  const existingCodes = (user.achievements || []).map(a => a.code);

  const completedCount = (user.completedParvas || []).length;

  // 1. First Quest: Complete first Parva
  if (completedCount >= 1 && !existingCodes.includes('FIRST_QUEST')) {
    newAchievements.push({
      code: 'FIRST_QUEST',
      title: 'First Quest',
      description: 'Completed your first Mahabharata Parva quest.',
      icon: 'Target',
      unlockedAt: new Date()
    });
  }

  // 2. Warrior of Wisdom: Score above 80% in any quiz
  if (latestAttempt && latestAttempt.accuracy >= 80 && !existingCodes.includes('WARRIOR_OF_WISDOM')) {
    newAchievements.push({
      code: 'WARRIOR_OF_WISDOM',
      title: 'Warrior of Wisdom',
      description: 'Demonstrated superior wisdom with an accuracy of 80% or higher.',
      icon: 'ShieldAlert',
      unlockedAt: new Date()
    });
  }

  // 3. Epic Scholar: Complete 5 Parvas
  if (completedCount >= 5 && !existingCodes.includes('EPIC_SCHOLAR')) {
    newAchievements.push({
      code: 'EPIC_SCHOLAR',
      title: 'Epic Scholar',
      description: 'Mastered 5 entire Parvas of the grand epic.',
      icon: 'BookOpen',
      unlockedAt: new Date()
    });
  }

  // 4. Master of the Sabha: Complete 10 Parvas
  if (completedCount >= 10 && !existingCodes.includes('MASTER_OF_SABHA')) {
    newAchievements.push({
      code: 'MASTER_OF_SABHA',
      title: 'Master of the Sabha',
      description: 'Traversed past 10 Parvas into the heart of Kurukshetra.',
      icon: 'Crown',
      unlockedAt: new Date()
    });
  }

  // 5. Kurukshetra Champion: Completed all war Parvas (6: Bhishma, 7: Drona, 8: Karna, 9: Shalya, 10: Sauptika)
  const warParvas = [6, 7, 8, 9, 10];
  const hasCompletedWarParvas = warParvas.every(p => (user.completedParvas || []).includes(p));
  if (hasCompletedWarParvas && !existingCodes.includes('KURUKSHETRA_CHAMPION')) {
    newAchievements.push({
      code: 'KURUKSHETRA_CHAMPION',
      title: 'Kurukshetra Champion',
      description: 'Conquered all 5 brutal battle Parvas of the Kurukshetra War.',
      icon: 'Flame',
      unlockedAt: new Date()
    });
  }

  // 6. Mahabharata Master: Complete all 18 Parvas
  if (completedCount >= 18 && !existingCodes.includes('MAHABHARATA_MASTER')) {
    newAchievements.push({
      code: 'MAHABHARATA_MASTER',
      title: 'Mahabharata Master',
      description: 'Completed the entire 18 Parvas Quest and ascended to Svarga.',
      icon: 'Sparkles',
      unlockedAt: new Date()
    });
  }

  // 7. Perfect Marks: 100% on a quiz
  if (latestAttempt && latestAttempt.accuracy === 100 && !existingCodes.includes('PERFECT_MARKS')) {
    newAchievements.push({
      code: 'PERFECT_MARKS',
      title: 'Flawless Archer',
      description: 'Achieved a perfect 100% accuracy in a sacred trial.',
      icon: 'Award',
      unlockedAt: new Date()
    });
  }

  // Save new achievements if any
  if (newAchievements.length > 0) {
    const updatedAchievements = [...(user.achievements || []), ...newAchievements];
    await User.findByIdAndUpdate(user._id || user.id, {
      $set: { achievements: updatedAchievements }
    });
    user.achievements = updatedAchievements;
  }

  return newAchievements;
};

module.exports = {
  evaluateAchievements
};
