// File got generated with 'yarn run swizzle @docusaurus/theme-classic Navbar --danger'

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import SearchBar from '@theme/SearchBar';
import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import IconMenu from '@theme/IconMenu';
import { useHistory } from 'react-router-dom';
import {
  splitNavItemsByPosition,
  useMobileSidebar,
  useNavbarItems,
} from './controller';
import QuickSocialLinksView from './components/QuickSocialLinksView';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Progressbar from './components/Progressbar';
import NavbarMobileSidebar from './components/NavbarMobileSidebar';
import NewLog from '../../components/newlog'

const Navbar: React.FC = () => {
  const location = useLocation()
  const { siteConfig } = useDocusaurusContext();
  const items = useNavbarItems();
  const { leftItems, rightItems } = splitNavItemsByPosition(items);
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const history = useHistory();
  const mobileSidebar = useMobileSidebar();

  useEffect(() => {
    let itemdom = document.getElementById('/0')
    if (location.pathname !== '/') {
      itemdom.style.color = 'var(--ifm-navbar-link-color)'
    }
  }, [])

  const onThemeToggleChange = useCallback(
    (e) => {
      if (e.target.checked) {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    },
    [setLightTheme, setDarkTheme]
  );

  return (
    <nav
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar-sidebar--show': mobileSidebar.shown,
      })}>
      {/* Navbar */}
      <div className={clsx('navbar__inner', styles.InnerContainer)}>
        <div className="navbar__items">
          {/* <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title"
          /> */}
          <NewLog/>

          {/* <a
            className={clsx('navbar__brand', styles.BrandText)}
            onClick={() => history.push('/')}>
            {siteConfig.title}
          </a> */}
          {leftItems.map((item, i) => {
            return <NavbarItem {...item} id={(item.to + i).toString()} key={i} />
          })}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          <QuickSocialLinksView className={styles.displayOnlyInLargeViewport} />
          <Toggle
            aria-label="Dark mode toggle"
            checked={isDarkTheme}
            onChange={onThemeToggleChange}
          />
          {/* <SearchBar /> */}
        </div>
        <BrowserOnly>{() => <Progressbar />}</BrowserOnly>
      </div>

      {/* Donut */}
      {items != null && items.length !== 0 && (
        <div
          aria-label="Navigation bar toggle"
          className="navbar__toggle"
          role="button"
          tabIndex={0}
          onClick={mobileSidebar.toggle}
          onKeyDown={mobileSidebar.toggle}>
          <IconMenu />
        </div>
      )}

      {/* Mobile Sidebar Backdrop */}
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />

      {/* Mobile Sidebar */}
      {mobileSidebar.shouldRender && (
        <NavbarMobileSidebar
          sidebarShown={mobileSidebar.shown}
          toggleSidebar={mobileSidebar.toggle}
        />
      )}
    </nav>
  );
};

export default Navbar;
