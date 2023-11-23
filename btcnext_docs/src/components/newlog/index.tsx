import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

export default () => {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useThemeContext();
  return (
    <a href="/" className="navbar__brand">
      <img
        className="navbar__logo"
        src={
          isDarkTheme
            ? siteConfig.themeConfig.blacklog
            : siteConfig.themeConfig.whiterlog
        }
        alt=""
      />
    </a>
  );
};
