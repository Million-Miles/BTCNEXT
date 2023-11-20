import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeaderTyper from './components/HeaderTyper';
import Spacer from '../../../../components/other/Spacer';
import PrimaryButton from '../../../../components/buttons/PrimaryButton';
import GithubButton from '../../../../components/buttons/GithubButton';
import styles from './styles.module.css';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import MouseScroller from './components/MouseScroller';
import Astronaut from './components/Astronaut';
import { shuffle } from '../../../../utils';

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const { windowHeight } = useWindowSize();
  const [toTypeWords] = useState(
    shuffle([
      'Guides',
      'Tools',
      'Tutorials',
      'Experiences',
      'Resources',
    ])
  );

  return (
    <div
      className={styles.Container}
      style={{ height: windowHeight > 800 ? windowHeight : undefined }}>
      <div>
        <h1 className={styles.HeaderTitle}>
          BTCNEXT provides
        </h1>
        <Spacer height={20} />
        <HeaderTyper
          className={styles.HeaderTyper}
          words={toTypeWords}
          delay={5000}
          defaultText={toTypeWords[0] || 'Guides'}
        />
        <Spacer height={50} />
        <p className={styles.DescriptionText}>The first open source hub of BTC ecosystem</p>
        <Spacer height={50} />
        <div className={styles.ButtonContainer}>
          <PrimaryButton
            className={styles.GetStartedButton}
            to={'/docs/introduction'}>
            NAVIGATOR
          </PrimaryButton>
          <GithubButton
            className={styles.GithubButton}
            to={siteConfig.customFields.githubUrl as any}
          />
        </div>
      </div>
      <Astronaut className={styles.AstronautImage} />
      {/* {windowHeight > 900 && windowHeight < 1200 && <MouseScroller />} */}
    </div>
  );
};

export default HeaderView;
