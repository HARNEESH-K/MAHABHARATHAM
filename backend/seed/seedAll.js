require('dotenv').config();
const bcrypt = require('bcryptjs');
const { connectDB } = require('../config/db');
const { Parva, Question, Video, Achievement, User } = require('../models');

const parvasData = require('./seedParvas');
const questionsData = require('./seedQuestions');
const videosData = require('./seedVideos');
const achievementsData = require('./seedAchievements');

async function seedDatabase(standalone = false) {
  console.log('--- STARTING MAHABHARATA 18 PARVAS DATABASE SEEDING ---');
  
  if (standalone) await connectDB();

  try {
    // 1. Seed Parvas
    console.log(`[1/5] Seeding ${parvasData.length} Parvas...`);
    await Parva.deleteMany({});
    const insertedParvas = await Parva.insertMany(parvasData);
    console.log(`✓ Inserted ${insertedParvas.length} Parvas successfully.`);

    // Map parva number to inserted Parva ID
    const parvaMap = {};
    insertedParvas.forEach(p => {
      parvaMap[p.number] = p._id || p.id;
    });

    // 2. Seed Questions (linking parvaId)
    console.log(`[2/5] Seeding ${questionsData.length} Questions (10 per Parva)...`);
    await Question.deleteMany({});
    const preparedQuestions = questionsData.map(q => ({
      ...q,
      parvaId: parvaMap[q.parvaNumber] || q.parvaNumber
    }));
    const insertedQuestions = await Question.insertMany(preparedQuestions);
    console.log(`✓ Inserted ${insertedQuestions.length} Questions successfully.`);

    // 3. Seed Videos
    console.log(`[3/5] Seeding ${videosData.length} Video References...`);
    await Video.deleteMany({});
    const preparedVideos = videosData.map(v => ({
      ...v,
      parvaId: parvaMap[v.parvaNumber] || v.parvaNumber
    }));
    const insertedVideos = await Video.insertMany(preparedVideos);
    console.log(`✓ Inserted ${insertedVideos.length} Video references successfully.`);

    // 4. Seed Achievements
    console.log(`[4/5] Seeding ${achievementsData.length} Achievements...`);
    await Achievement.deleteMany({});
    const insertedAchievements = await Achievement.insertMany(achievementsData);
    console.log(`✓ Inserted ${insertedAchievements.length} Achievements successfully.`);

    // 5. Seed Initial Admin and Demo User
    console.log(`[5/5] Ensuring Admin and Demo Player accounts exist...`);
    const adminEmail = (process.env.ADMIN_EMAIL || 'admin@mahabharata.quest').toLowerCase().trim();
    const adminPassword = process.env.ADMIN_PASSWORD || 'DharmaAdmin@2026';
    const adminName = process.env.ADMIN_NAME || 'Dharmaraja Admin';

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const hashedAdminPassword = await bcrypt.hash(adminPassword, salt);
      await User.create({
        name: adminName,
        email: adminEmail,
        password: hashedAdminPassword,
        role: 'admin',
        totalScore: 3600,
        completedParvas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        currentParva: 18,
        achievements: achievementsData.map(a => ({ code: a.code, title: a.title, unlockedAt: new Date() })),
        totalQuestionsAnswered: 180,
        totalCorrectAnswers: 175
      });
      console.log(`✓ Created Admin Account: ${adminEmail}`);
    } else {
      console.log(`ℹ Admin account already exists: ${adminEmail}`);
    }

    // Demo Player account
    const demoEmail = 'warrior@mahabharata.quest';
    const existingDemo = await User.findOne({ email: demoEmail });
    if (!existingDemo) {
      const salt = await bcrypt.genSalt(10);
      const hashedDemoPassword = await bcrypt.hash('Warrior@2026', salt);
      await User.create({
        name: 'Arjuna Vidyarthi',
        email: demoEmail,
        password: hashedDemoPassword,
        role: 'user',
        totalScore: 320,
        completedParvas: [1, 2],
        currentParva: 3,
        achievements: [
          { code: 'FIRST_QUEST', title: 'First Quest', unlockedAt: new Date() },
          { code: 'WARRIOR_OF_WISDOM', title: 'Warrior of Wisdom', unlockedAt: new Date() }
        ],
        totalQuestionsAnswered: 20,
        totalCorrectAnswers: 18
      });
      console.log(`✓ Created Demo Warrior Account: ${demoEmail} (Password: Warrior@2026)`);
    }

    console.log('========================================================');
    console.log('✨ DATABASE SEEDING COMPLETED SUCCESSFULLY!');
    console.log(`Parvas: ${insertedParvas.length} | Questions: ${insertedQuestions.length} | Videos: ${insertedVideos.length}`);
    console.log('========================================================');
    if (standalone) process.exit(0);
  } catch (error) {
    console.error('❌ SEEDING ERROR:', error);
    if (standalone) process.exit(1);
    throw error;
  }
}

if (require.main === module) seedDatabase(true);

module.exports = { seedDatabase };
