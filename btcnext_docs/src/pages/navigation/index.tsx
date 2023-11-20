import React from 'react';

import PageLayout from '../../components/layout/PageLayout';
// import DocSidebar from '@theme/DocSidebar';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import { matchPath } from '@docusaurus/router';

export default () => {
  // const { siteConfig } = useDocusaurusContext();
  //   const currentDocRoute = docRoutes.find((docRoute) =>
  //   matchPath(location.pathname, docRoute)
  // );
  // const sidebarName = currentDocRoute.sidebar;
  // const sidebar = sidebarName
  //   ? versionMetadata.docsSidebars[sidebarName]
  //   : null;

  // const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  // const [hiddenSidebar, setHiddenSidebar] = useState(false);
  // const toggleSidebar = useCallback(() => {
  //   if (hiddenSidebar) {
  //     setHiddenSidebar(false);
  //   }

  //   setHiddenSidebarContainer(!hiddenSidebarContainer);
  // }, [hiddenSidebar]);
  return (
    <PageLayout>
      <a href="/docs/navigation/navinfo">navgiation</a>
      {/* <DocSidebar
        key={
          // Reset sidebar state on sidebar changes
          // See https://github.com/facebook/docusaurus/issues/3414
          sidebarName
        }
        sidebar={sidebar}
        path={currentDocRoute.path}
        sidebarCollapsible={siteConfig.themeConfig?.sidebarCollapsible ?? true}
        onCollapse={toggleSidebar}
        isHidden={hiddenSidebar}
      /> */}
    </PageLayout>
  );
};
