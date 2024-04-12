import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from './firebase.config';

export const UserService = {
  registerUser: async function (email, password) {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return { uid: user.user.uid, user };
  },

  getUrlFromFileUpload: async function (_fileRef, userId, loanId, file) {
    const fileRef = ref(
      storage,
      `${_fileRef}/${userId}__${loanId}__${new Date().getTime()}`
    );

    const snapshot = await uploadBytes(fileRef, file);
    const fileUrl = await getDownloadURL(snapshot.ref);

    return fileUrl;
  },

  sendLoanRequest: async function (data, file) {
    const url = await this.getUrlFromFileUpload(
      'bankStatements',
      data._user,
      data._id,
      file
    );

    await setDoc(doc(db, 'loanRequests', data?._id), {
      ...data,
      bankStatement: url,
    });

    return { message: 'Successful', ok: true, id: data?._id };
  },

  addPendingLoan: async function (userId, data) {
    const userRef = doc(db, 'users', userId);
    const res = await getDoc(userRef);

    const userLoans = res.data().loans;

    await updateDoc(userRef, {
      loans: [
        ...userLoans,
        {
          ...data,
          type: 'loan',
          status: 'pending',
          application_date: new Date(),
          payout_date: '. . .',
          repayment_date: '. . .',
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
    await setDoc(doc(db, 'users', uid), {
      ...data,
      id: uid,
    });

    return { ok: true };
  },

  uploadUserSelfie: async function (userId, randomId, file) {
    const url = await this.getUrlFromFileUpload(
      'userSelfies',
      userId,
      randomId,
      file
    );

    return url;
  },

  sendDepositRequest: async function (user, data) {
    const userRef = doc(db, 'users', user);
    const res = await getDoc(userRef);

    const deposits = res?.data()?.deposits;

    const _ = await addDoc(collection(db, 'depositRequests'), {
      ...data,
      user,
      type: 'deposit',
    });

    await updateDoc(userRef, {
      deposits: [
        ...deposits,
        {
          ...data,
          type: 'deposit',
          id: _.id,
        },
      ],
    });

    return { message: 'Successful', ok: true, id: data?._id };
  },

  sendWithdrawalRequest: async function (user, data) {
    const userRef = doc(db, 'users', user);
    const res = await getDoc(userRef);

    const withdrawals = res?.data()?.withdrawals;

    const _ = await addDoc(collection(db, 'withdrawalRequests'), {
      ...data,
      user,
      status: 'pending',
      type: 'withdraw',
    });

    await updateDoc(userRef, {
      withdrawals: [
        ...withdrawals,
        {
          ...data,
          status: 'pending',
          type: 'withdraw',
          id: _.id,
        },
      ],
    });

    return { message: 'Successful', ok: true, id: _.id };
  },
};
