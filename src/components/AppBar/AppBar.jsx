import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import s from './AppBar.module.css';


function AppBar() {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}

export default AppBar;