import {useRouteError} from 'react-router-dom';
import './errorPage.css';

function ErrorPage() {
	const error = useRouteError();
	console.log('~ Error from react-router-dom: ', error);

	return (
		<>
		<div className="error-page-container">
			<div className="error-page">
				<h1 className="error-code">404</h1>
				<p className="error-message">OH, It seems you're lost!</p>
			</div>
		</div>
		</>
	);
}

export default ErrorPage;