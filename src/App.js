import { UserInfo } from "./UserInfo";
import { DataSource } from './DataSource';
import axios from 'axios';

function App() {
	const getUserData = url => async () => {
		const response = await axios.get(url);
		return response.data;
	};

	const getLocalStorageData = key => () => {
		return localStorage.getItem(key);
	};

	const Text = ({ message }) => <h1>{message}</h1>;

	return (
		<>
			<DataSource getDataFunc={getUserData("/users/123")} resourceName="user">
				<UserInfo />
			</DataSource>

			----

			<DataSource getDataFunc={getLocalStorageData("message")} resourceName="message">
				<Text />
			</DataSource>
		</>
	);
}

export default App;
