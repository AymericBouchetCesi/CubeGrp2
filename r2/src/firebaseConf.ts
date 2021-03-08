import firebase, * as fb from "firebase";
import "firebase/storage";
import { resolve } from "path";
import { timeStamp } from "console";
// custom hook that will upload to firebase

export const config = {
    apiKey: "AIzaSyCMX1MB_xFe8-Wo4VI5y_2DFhHkcOmsxe4",
    authDomain: "projet-r2-ril20.firebaseapp.com",
    projectId: "projet-r2-ril20",
    storageBucket: "projet-r2-ril20.appspot.com",
    messagingSenderId: "999109455932",
    appId: "1:999109455932:web:e35c5750a2cc53cf265339"
  };


  fb.default.initializeApp(config)
  const db = fb.default.firestore();
  

  export async function getCurrentUser() {
      return new Promise((resolve, reject) => {
        const unsubscribe = fb.default.auth().onAuthStateChanged(function(user)
        {
            if(user) {
                resolve(user)
            }
            else
            {
                resolve(null)
            }
            unsubscribe()
        })
      })
  }

  export async function loginViaMail(userMail:string, password: string) {
    try{
        const res = await fb.default.auth().signInWithEmailAndPassword(userMail, password)
        console.log(res)
        return true
    } catch(err) {
        console.log(err)
        return false
    }
  }
  export async function test() { 
    const user = fb.default.auth().currentUser?.uid
    const userRef = db.collection("Utilisateurs").doc(user)        
    userRef.set({
            Email : "Test@test.fr",
            Nom : "Test",
            Prénom : "tt",
            Role : "citoyen"
        });
    const userPost = userRef.collection("Posts")
    userPost.add({
            Titre : "test",
            Message : "tqsfsdfsfsddfsfsfdsffdsest",
            Date : fb.default.database.ServerValue.TIMESTAMP
        });
  }
  export async function registerViaMail(userMail:string, password: string) {
    const mailExist = false//await fb.default.database().
    if(mailExist) {
        return 2
    }
    try{
        const res = await fb.default.auth().createUserWithEmailAndPassword(userMail,password)
        console.log(res)
        const user = fb.default.auth().currentUser?.uid

        const userRef = db.collection("Utilisateurs").doc(user)
        
        userRef.set({
            Email : userMail,
            Nom : "Test",
            Prénom : "tt",
            Role : "citoyen"
        });
        
        return 0
    } catch(err) {
        console.log(err)
        return 1
    }
  }

  export async function disconnectFromApp() {
    try{
        const res = await fb.default.auth().signOut
        console.log(res)
        return true
    } catch(err) {
        console.log(err)
        return false
    }
  }


  export async function sendPostToDB(tt:string, text: string , img : String = "") { 
    const user = fb.default.auth().currentUser?.uid

    const userRef = db.collection("Utilisateurs").doc(user)
    const userPost = userRef.collection("Posts").add(firebase.firestore.Timestamp.now())
    ;(await userPost).set({
            Titre : tt,
            Message : text,
            Date : fb.default.firestore.FieldValue.serverTimestamp()
        });
  }
export async function refresh(){
    db.collection("/Post").orderBy("Date")

}