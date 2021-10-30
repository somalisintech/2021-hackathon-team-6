import { signup } from './firebase';
import { useRef } from 'react';
function App() {
	const emailRef = useRef();
	const passwordRef = useRef();
	async function handleSignup() {
		await signup(emailRef.current.value, passwordRef.current.value);
	}
	return (
		<div id="main">
			<div id="fields">
				<input ref={emailRef} placeholder="email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
			</div>
			<button onClick={handleSignup}>SignUP</button>
		</div>
	);
}

export default App;
