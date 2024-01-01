import admin from 'firebase-admin';

const serviceAccount = require('../../services/capital-trust-finance-firebase-adminsdk-v7cvb-d92378ff92.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://capital-trust-finance.firebaseio.com',
  });
}

const handler = async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const uid = body.uid;

    const db = admin.firestore();
    const docRef = db.collection('users').doc(uid);

    const doc = await docRef.get();

    await admin.auth().deleteUser(uid);

    if (doc.exists) {
      await docRef.delete();
    } else {
      console.log('No such document');
    }

    // admin.auth();
    res.status(200).json({
      success: true,
      message: `User with UID ${uid} deleted successfully`,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
