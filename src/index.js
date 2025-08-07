const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { GoogleGenerativeAI } = require("@google-ai/generativelanguage");

admin.initializeApp();

const db = admin.firestore();
const GEMINI_API_KEY = "AIzaSyDKKXdW5-M-TceZuafcaKtg47EBx7-irlM";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

exports.generateLyrics = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Authentication required");
  }

  const { prompt } = data;
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    await db.collection("users").doc(context.auth.uid).collection("lyrics").add({
      prompt,
      result: text,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true, lyrics: text };
  } catch (error) {
    console.error("Gemini error:", error);
    throw new functions.https.HttpsError("internal", "Failed to generate lyrics");
  }
});

exports.generateBeat = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Auth required");
  }

  const { mood, genre } = data;
  const prompt = `Create a detailed music production prompt for a ${mood} ${genre} beat. Include BPM, instruments, structure, and mood descriptors.`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return { beatPrompt: response.text() };
  } catch (error) {
    throw new functions.https.HttpsError("internal", "Beat generation failed");
  }
});