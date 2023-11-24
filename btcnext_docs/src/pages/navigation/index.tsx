import React, { useState, useCallback, useMemo } from 'react';
import clsx from 'clsx';

import PageLayout from '../../components/layout/PageLayout';
import DocSidebar from '@theme/DocSidebar';
import styles from './styles.module.css';
import { navpageinfolist } from '../../components/navgatinfo.js';

export default (props) => {
  const {
    location
  } = props;
  const exterlinklist = [
    {
      name: 'internet',
      imgpath: 'img/internet.svg',
      altdesc: 'internet',
    },
    {
      name: 'twitter',
      imgpath: 'img/twitter.svg',
      altdesc: 'twitter',
    },
    {
      name: 'github',
      imgpath: 'img/githubicon.svg',
      altdesc: 'github',
    },
    {
      name: 'discord',
      imgpath: 'img/discordicon.svg',
      altdesc: 'discord',
    },
    {
      name: 'telegram',
      imgpath: 'img/telegramicon.svg',
      altdesc: 'telegram',
    },
  ];

  const getExterInfo = (itemexterlink) => {
    let newlinklist = [];
    for (let a = 0; a < exterlinklist.length; a++) {
      for (let b = 0; b < itemexterlink.length; b++) {
        if (exterlinklist[a].name === itemexterlink[b].name) {
          itemexterlink[b].imgpath = exterlinklist[a].imgpath;
          newlinklist.push(itemexterlink[b]);
        }
      }
    }
    return newlinklist;
  };

  const handleLink = (info) => {
    if (info.href && info.href !== '') {
      window.location.href = info.href
    }
  }

  const handleExter = (info) => {
    window.open(info.link)
  }

  const ItemCard = useCallback((sitem, sindex) => {
    return (
      <div className={styles.navListBoxItem} key={sindex}  onClick={() => {handleLink(sitem)}}>
        <div className={styles.navListBoxItemTop}>
          <img className={styles.imgAvatornav} src={sitem.avator} alt="" />
          <div className={styles.navitemName}>{sitem.title}</div>
        </div>
        <div className={styles.navItemdesc}>{sitem.desc}</div>
        <div className={styles.navItemTag}>
          {sitem.tags.map((tagitem, tagindex) => (
            <div className={styles.navItemTagItem} key={tagindex}>{tagitem}</div>
          ))}
        </div>
        <div className={styles.navItemlinklist}>
          {getExterInfo(sitem.exterlink)?.map((exitem, exindex) => {
            return (
              <div onClick={(event) => {
                handleExter(exitem)
                event.stopPropagation()
              }} key={exindex}>
                <img src={exitem.imgpath} alt={exitem.altdesc} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }, []);

  return (
    <PageLayout>
      <div className={styles.navigatorCenter}>
        <aside
          className={styles.docSidebarContainer}
          // onTransitionEnd={handleTransitionEnd}
          role="complementary">
          <DocSidebar
            key={
              // Reset sidebar state on sidebar changes
              // See https://github.com/facebook/docusaurus/issues/3414
              'defaultSidebar'
            }
            sidebar={navpageinfolist}
            path={location.hash}
            // sidebarCollapsible={true}
            // isHidden={false}
          />
        </aside>
        <div className={styles.navigatorCenterRight}>
          {navpageinfolist.map((item, index) => {
            return (
              <div className={styles.navigatorCenterRightItem} key={index}>
                <div className={styles.navItemfirstTitle}>{item?.label}</div>
                {item.items.map((fitem, findex) => {
                  return (
                    <div key={findex}>
                      <div id={fitem?.docId} />
                      <div className={styles.navItemsecondTitle}>
                        {fitem?.label}
                      </div>
                      <div className={styles.navListBox}>
                        {fitem?.nextitems.map((sitem, sindex) =>
                          ItemCard(sitem, sindex)
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};
