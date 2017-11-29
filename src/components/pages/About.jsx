import React from 'react';
import Radium from 'radium';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';

const About = ({config: {media, txt: {body}}, dimensions}) =>
  <div style={styles.container}>
    <FourLineBorder customStyle={styles.border}>
      <div style={styles.content}>
        <div style={styles.image(media)} />
        <p style={styles.text}>
          { body }
        </p>
      </div>
    </FourLineBorder>
  </div>;

export default Radium(Connect(Keys.pages.about)(Dimensioned(About)));

const styles = {
  container: {
    height: `calc(100vh - ${UI.header.height})`,
    width: '100vw',
    padding: `4px ${UI.spacing}px ${UI.spacing}px ${UI.spacing}px`,
    boxSizing: 'border-box',
  },
  border: {
    height: '100%',
  },
  content: {
    padding: '15vh 0 24px 0',
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'auto'
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: '12pt',
    lineHeight: 1.5,
    textAlign: 'justify',
    margin: 0,
    padding: '24px 24px 24px 24px',
    boxSizing: 'border-box'
  },
  image: src => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '24px 24px 12px 24px',
    float: 'left',
    width: '25vw',
    height: '25vw',
    maxHeight: '300px',
    maxWidth: '300px',
  }),
}
