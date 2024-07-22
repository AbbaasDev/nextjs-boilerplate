import React from 'react';
import Link from 'next/link';
import Seo from './Seo';
import { useRouter } from 'next/router';

export const Layout = ({ children, seo, mainMenu, footer }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });

  const router = useRouter();
  const uri = router.asPath?.slice(-1) === '/' ? router.asPath : router.pathname + '/';

  return (
    <>
      {/* SEO */}
      {Object.keys(seo || {})?.length > 0 && <Seo seo={seo} uri={uri} />}

      {/* Header */}
      <div>
        {mainMenu.map((menu, index) => {
          return (
            <Link className="mr-2 ml-2" key={`menu-${index}`} href={menu.link.url}>
              {menu.link.title}
            </Link>
          );
        })}
      </div>
      <main>{childrenWithProps}</main>

      {/* Footer */}
      <div>
        <li>{footer.phoneNo}</li>
      </div>
    </>
  );
};

export default Layout;
