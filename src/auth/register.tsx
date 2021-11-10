import * as firestore from "firebase/firestore";
import { db } from "./firebase";

export async function Register(username: string, password: string){
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
    throw new Error("Username might be taken");
  } catch (error: any) {
    console.log(error);
    if (/exists/.test(error.message)) {
      throw { error: true, message: "Username already exists" };
    }
    throw { error, message: "Username might be taken" };
  }
}

export async function login(username: string, password: string) {
  try {
    const docRef = firestore.doc(db, "users", username);
    const data = await firestore.getDoc(docRef);
    if (data.exists()) {
      const { token, username } = data.data();
      if (data.data().password !== password) {
        throw new Error("Username and Password not correct");
      }
      localStorage.setItem("token", token);
      return { error: false, username };
    }
    throw new Error("Username and Password not correct");
  } catch (error: any) {
    console.log(error);
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
    throw { error, message: "Please try again" };
    // ..
  }
}

export async function getUserDetails(token: string) {
  try {
    const docRef = firestore.doc(db, "users", token);
    const data = await firestore.getDoc(docRef);
    if (data.exists()) {
      throw new Error("User does not exists");
    }
    return data.data();
  } catch (error: any) {
    console.log(error);
    throw { error, message: "Please try again" };
  }
}

