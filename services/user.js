import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "./firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const UserService = {
  registerUser: async function (email, password) {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return { uid: user.user.uid };
  },

  getUrlFromFileUpload: async function (userId, loanId, file) {
    const fileRef = ref(
      storage,
      `bankStatements/${userId}__${loanId}__${new Date().getTime()}`
    );

    const snapshot = await uploadBytes(fileRef, file);
    const fileUrl = await getDownloadURL(snapshot.ref);

    return fileUrl;
  },

  sendLoanRequest: async function (data, file) {
    const url = await this.getUrlFromFileUpload(data._user, data._id, file);

    await setDoc(doc(db, "loanRequests", data?._id), {
      ...data,
      bankStatement: url,
    });

    return { message: "Successful", ok: true };
  },

  addPendingLoan: async function (userId, data) {
    const userRef = doc(db, "users", userId);
    const res = await getDoc(userRef);

    const userLoans = res.data().loans;

    await updateDoc(userRef, {
      loans: [
        ...userLoans,
        {
          ...data,
          type: "loan",
          status: "pending",
          application_date: new Date(),
          payout_date: ". . .",
          repayment_date: ". . .",
          dated: new Date(),
        },
      ],
      canRequestLoan: false,
    });

    return {
      userId,
    };
  },
  setUserData: async function (uid, data) {
    const REF = doc(db, "users", userId);

    await setDoc(REF, uid, {
      ...data,
      id: uid,
    });

    return { ok: true };
  },
};
