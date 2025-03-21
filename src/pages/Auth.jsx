import React, { useState } from 'react';
import { auth, googleProvider, db } from '../firebase_config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { setDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Default User Data
  const getDefaultUserData = (user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || "New User",
    photoURL: user.photoURL || "",
    createdAt: serverTimestamp(),
    streak: 0,
    totalChallenges: 0, // ✅ Tracks completed challenges
    daysActive: 0, // ✅ Counts active days
    lastActivityDate: serverTimestamp(), // ✅ Tracks last activity
    totalSteps: 0, // ✅ Tracks total steps
    totalCalories: 0, // ✅ Stores total calories burned
    streakHistory: [], // ✅ Stores last 7 days of streaks
  });

  // Email Sign-Up
  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Please enter an email and password.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if user already exists
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), getDefaultUserData(user));
      }

      alert('User Created Successfully');
      navigate('/');
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert(error.message);
    }
  };

  // Email Login
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged In');
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user already exists
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', user.uid), getDefaultUserData(user));
      }

      alert('Google Sign-in Successful');
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    alert('Logged Out');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Login / Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded w-64"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded w-64"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp} className="bg-blue-600 text-white px-4 py-2 rounded w-64">Sign Up</button>
      <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded w-64">Login</button>
      <button onClick={handleGoogleSignIn} className="bg-red-500 text-white px-4 py-2 rounded w-64">Sign in with Google</button>
      <button onClick={handleLogout} className="bg-gray-500 text-white px-4 py-2 rounded w-64">Logout</button>
    </div>
  );
};

export default Auth;
