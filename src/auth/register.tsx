import * as firestore from "firebase/firestore";
import { db } from "./firebase";

export async function Register(username: string, password: string) {
  try {
    await UniqueUsername(username);
    const usersRef = firestore.collection(db, "users");
    await firestore.setDoc(firestore.doc(usersRef, username), {
      username,
      password,
      token: Date.now()
    });
    const docRef = firestore.doc(db, "users", username);
    const data = await firestore.getDoc(docRef);
    if (data.exists()) {
      const { token, username: user } = data.data();
      localStorage.setItem("token", token);
      return { error: false, username: user };
    }
    throw new Error("Username and Password not correct");
  } catch (error: any) {
    console.log(error);
    // alert(error.message);
    if (/exists/.test(error.message)) {
      throw { error: true, message: "Username already exists" };
    }
    throw { error, message: "Username and Password not correct" };
    // ..
  }
}

export async function login(username: string, password: string) {
  try {
    const docRef = firestore.doc(db, "users", username);
    const data = await firestore.getDoc(docRef);
    if (data.exists()) {
      const { token, username, password } = data.data();
      if (data.data().password !== password) {
          alert(data.data().password);
        throw new Error("Username and Password not correct");
      }
      localStorage.setItem("token", token);
      return { error: false, username };
    }
    throw new Error("Username and Password not correct");
  } catch (error: any) {
    console.log(error);
    // alert(error.message);
    throw { error, message: "Username and Password not correct" };
    // ..
  }
}

export async function UniqueUsername(username: string) {
  try {
    const docRef = firestore.doc(db, "users", username);
    const data = await firestore.getDoc(docRef);
    if (data.exists()) {
      throw new Error("Username already exists");
    }
  } catch (error: any) {
    console.log(error);
    // alert(error.message);
    throw { error, message: "Please try again" };
    // ..
  }
}
