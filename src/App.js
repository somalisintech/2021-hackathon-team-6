import { useRef, useState } from 'react';
import { signup } from './firebase';

export default function App() {
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	async function handleSignup() {
		setLoading(true);
		try {
			signup(emailRef.current.value, passwordRef.current.value);
		} catch {
			alert('error');
		}
		setLoading(false);
	}
	return (
		<div id="main">
			<div id="fields">
				<input ref={emailRef} placeholder="email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
			</div>
			<button disabled={loading} onClick={handleSignup}>
				SignUP
			</button>
		</div>
	);
}
