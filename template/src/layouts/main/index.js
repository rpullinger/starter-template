import Header from 'components/Header';
import Footer from 'components/Footer';
import s from './style.css';

const Main = ({ children }) => (
	<div className={s.main}>
		<div className={s.header}>
			<Header />
		</div>
		<main className={s.inner}>{children}</main>
		<div className={s.footer}>
			<Footer />
		</div>
	</div>
);

export default Main;
