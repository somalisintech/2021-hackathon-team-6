// Import the functions you need from the SDKs you need
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCORESH44FQt3KCNmtuZmocv5Ub5lF5sR0',
	authDomain: 'team6-1b58f.firebaseapp.com',
	projectId: 'team6-1b58f',
	storageBucket: 'team6-1b58f.appspot.com',
	messagingSenderId: '129746800801',
	appId: '1:129746800801:web:9856e7e040aea31fab20e0',
	measurementId: 'G-HP2RV2N6PT'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email, password) {
	createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
	return signOut(auth);
}
// Custom Hook
export function useAuth() {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}
