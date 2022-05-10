import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { app } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      console.log(response.user);
      sessionStorage.setItem("Token", response.user.accessToken);
      router.push("/home");
    });
  };
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      console.log(response.user);
      sessionStorage.setItem("Token", response.user.accessToken);
      router.push("/home");
    });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("Token");
    if (token) {
      router.push("/home");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Register</h1>
        <input placeholder="Email" type="email" onChange={(event) => setEmail(event.target.value)} />
        <input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
        <button onClick={signup}>Sign Up</button>
        <button onClick={signUpWithGoogle}>Sign Up With Google</button>
      </main>
    </div>
  );
}