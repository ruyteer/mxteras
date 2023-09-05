import firebaseAdmin from "firebase-admin";
import credentials from "./firebase-credentials.json";

const BUCKET = "gs://mxteras-35b5c.appspot.com";

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    "./src/modules/infra/services/firebase/firebase-credentials.json"
  ),
  storageBucket: BUCKET,
});

export const bucket = firebaseAdmin.storage().bucket();
