// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import { Typewriter } from 'react-simple-typewriter'




// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>
        <Nav />
        <BrickLayout />
        <div className={`${styles["headings-header"]} flex justify-content-center flex-column`}>
          <h1 className={styles["heading-header-second-title"]}>
            <p className="text_open-source-project" style={{ fontSize: '55px' }}>
              <span
                style={{
                  color: '#006DFF',
                  fontWeight: 'bolder',
                  textDecoration: 'underline',
                  textDecorationColor: '#FEEA3A'
                }}
              >
                An Open Source Project
              </span>{" "}
              <br />
              <br />
              <span style={{ color: '#006DFF', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    'to plant seeds 🌱 of inspiration.',
                    'to codify 💻 your purpose.',
                    'to compile your bucket 🪣 list.',
                    'to learn how to contribute 📚.'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>
          </h1>
        </div>
      </ContainerCard>
    </header>
  );
}

export default Header;
