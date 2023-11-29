import React, { useState, useCallback, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import PageLayout from '../../components/layout/PageLayout';
import DocSidebar from '../../theme/DocSidebar';
import styles from './styles.module.css';
import {
  navpageinfolist,
  selectTypeList,
} from '../../components/navgatinfo.js';

export default (props) => {
  // const { location } = props;
  const location = useLocation();
  const [selecttype, setSelecttype] = useState('all');
  const [allnavList, setAllnavList] = useState([]);
  const [newnavList, setNewnavList] = useState([]);
  const [fxstatus, setFxstatus] = useState({
    anum: -1,
    bnum: -1,
  });
  // console.log(location)
  const exterlinklist = [
    {
      name: 'internet',
      imgpath: 'img/internet.svg',
      hoverpath: 'img/internethover.svg',
      altdesc: 'internet',
    },
    {
      name: 'twitter',
      imgpath: 'img/twitter.svg',
      hoverpath: 'img/twitterhover.svg',
      altdesc: 'twitter',
    },
    {
      name: 'github',
      imgpath: 'img/githubicon.svg',
      hoverpath: 'img/githubhover.svg',
      altdesc: 'github',
    },
    {
      name: 'discord',
      imgpath: 'img/discordicon.svg',
      hoverpath: 'img/discordhover.svg',
      altdesc: 'discord',
    },
    {
      name: 'telegram',
      imgpath: 'img/telegramicon.svg',
      hoverpath: 'img/telegramhover.svg',
      altdesc: 'telegram',
    },
  ];

  // useEffect(() => {
  //   let itemdoc = document.querySelector('.theme-doc-sidebar-item-link')
  //   itemdoc.addEventListener('click', () => {
  //     console.log(3333)
  //   })
  //   console.log(itemdoc)
  // }, [])
  // let itemdoc = document.querySelector('.theme-doc-sidebar-item-link')
  // itemdoc.addEventListener('click', () => {
  //   console.log(3333)
  // })

  useEffect(() => {
    let navselectlist = [];
    navpageinfolist?.map((aitem) => {
      aitem?.items.map((bitem) => {
        bitem?.nextitems.map((citem) => {
          navselectlist.push(citem);
        });
      });
    });
    setAllnavList(navselectlist);
  }, []);

  const getExterInfo = (itemexterlink) => {
    let newlinklist = [];
    for (let a = 0; a < exterlinklist.length; a++) {
      for (let b = 0; b < itemexterlink.length; b++) {
        if (exterlinklist[a].name === itemexterlink[b].name) {
          itemexterlink[b].imgpath = exterlinklist[a].imgpath;
          itemexterlink[b].hoverpath = exterlinklist[a].hoverpath;
          newlinklist.push(itemexterlink[b]);
        }
      }
    }
    return newlinklist;
  };

  const handleLink = (info) => {
    if (info.href && info.href !== '') {
      window.location.href = info.href;
    }
  };

  const handleExter = (info) => {
    window.open(info.link);
  };

  function getRandomNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const handleSelect = useCallback(
    (info) => {
      setSelecttype(info.type);
      const newnavilist = [];
      allnavList.map((item) => {
        if (item.type === info.type) {
          newnavilist.push(item);
        }
      });
      setNewnavList(newnavilist);
      // console.log(newnavilist);
    },
    [allnavList]
  );

  const selectDom = useMemo(() => {
    return (
      <div className={styles.navigatorSelectlist}>
        {selectTypeList.map((item, index) => {
          return (
            <div
              className={
                selecttype === item.type
                  ? styles.navigatorSelectlistItemactive
                  : styles.navigatorSelectlistItem
              }
              // className={clsx(styles.navigatorSelectlistItem, {
              //   'select-item-active': selecttype === item.type
              // })}
              key={index}
              onClick={() => {
                handleSelect(item);
              }}>
              <a
                href={`#${item.type}`}
                className={styles.navigatorSelectItemtitle}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    );
  }, [selecttype, handleSelect]);

  const ItemCard = useCallback(
    (sitem, sindex) => {
      const bgcolor = [
        '#D6BA26',
        'beige',
        'skyblue',
        'yellowgreen',
        'tan',
        'lightslategrey',
      ];
      return (
        <div
          className={styles.navListBoxItem}
          key={sindex}
          onClick={() => {
            handleLink(sitem);
          }}>
          <div className={styles.navListBoxItemTop}>
            {sitem.avator && sitem.avator !== '' ? (
              <img className={styles.imgAvatornav} src={sitem.avator} alt="" />
            ) : (
              <div
                className={styles.notimgAvatornav}
                style={{ backgroundColor: `${getRandomNumber(bgcolor)}` }}>
                {sitem.title?.charAt(0)?.toUpperCase()}
              </div>
            )}
            <div className={styles.navitemName}>{sitem.title}</div>
          </div>
          <div className={styles.navItemdesc}>{sitem.desc}</div>
          <div className={styles.navItemTag}>
            {sitem.tags.map((tagitem, tagindex) => (
              <div className={styles.navItemTagItem} key={tagindex}>
                {tagitem}
              </div>
            ))}
          </div>
          <div className={styles.navItemlinklist}>
            {getExterInfo(sitem.exterlink)?.map((exitem, exindex) => {
              return (
                <div
                  onClick={(event) => {
                    handleExter(exitem);
                    event.stopPropagation();
                  }}
                  onMouseEnter={() => {
                    setFxstatus({
                      anum: sindex,
                      bnum: exindex,
                    });
                  }}
                  onMouseLeave={() => {
                    setFxstatus({
                      anum: -1,
                      bnum: -1,
                    });
                  }}
                  key={exindex}>
                  <img
                    src={
                      fxstatus.bnum === exindex && fxstatus.anum === sindex
                        ? exitem.hoverpath
                        : exitem.imgpath
                    }
                    alt={exitem.altdesc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    },
    [fxstatus]
  );

  const fullNavDom = useMemo(
    () =>
      navpageinfolist.map((item, index) => {
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
      }),
    [ItemCard]
  );

  const selectNavDom = useMemo(
    () => (
      <div className={styles.navListBox}>
        {newnavList.map((sitem, sindex) => ItemCard(sitem, sindex))}
      </div>
    ),
    [newnavList, ItemCard]
  );

  const handleCollapse = useCallback(() => {
    if (selecttype !== 'all') {
      // window.location.reload();
      setSelecttype('all')
    }
  }, [selecttype]);

  return (
    <PageLayout>
      <div className={styles.navigatorCenter}>
        <aside className={styles.docSidebarContainer} role="complementary">
          <DocSidebar
            key={
              // Reset sidebar state on sidebar changes
              // See https://github.com/facebook/docusaurus/issues/3414
              'defaultSidebar'
            }
            sidebar={navpageinfolist}
            path={location?.hash}
            onDocItemClick={handleCollapse}
          />
        </aside>
        <div className={styles.navigatorCenterRight}>
          {selectDom}
          {selecttype === 'all' ? fullNavDom : selectNavDom}
        </div>
      </div>
    </PageLayout>
  );
};
