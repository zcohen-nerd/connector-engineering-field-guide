import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import projects from '@zcohen-nerd/brand/src/data/projects';
import styles from './styles.module.css';

const navigation = [
  {label: 'Hobby Guide', to: '/hobby'},
  {label: 'Engineering Guide', to: '/engineering'},
  {label: 'Decision Paths', to: '/decision-paths'},
  {label: 'Tools', to: '/tools'},
];

const ECOSYSTEM_ID = 'cfg-ecosystem-disclosure';
const MOBILE_NAV_ID = 'cfg-mobile-navigation';

function normalizePath(pathname) {
  const withoutTrailingSlash = pathname.replace(/\/+$/, '');
  return withoutTrailingSlash || '/';
}

function ConnectorMark({className = ''}) {
  return (
    <svg
      className={className}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      aria-hidden="true"
      focusable="false">
      <path
        d="M3.5 10.5h12l3.5 4v9l-3.5 4h-12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M34.5 10.5h-9.5l-3.5 4v9l3.5 4h9.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="16" r="1.45" fill="currentColor" />
      <circle cx="10" cy="22" r="1.45" fill="currentColor" />
      <path
        d="M28 16h-3.4M28 22h-3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19 7v3M19 28v3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="m2.5 4.25 3.5 3.5 3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({open}) {
  return (
    <span className={styles.menuIcon} aria-hidden="true">
      <span className={open ? styles.menuLineTopOpen : styles.menuLineTop} />
      <span
        className={open ? styles.menuLineMiddleOpen : styles.menuLineMiddle}
      />
      <span
        className={open ? styles.menuLineBottomOpen : styles.menuLineBottom}
      />
    </span>
  );
}

function SidebarIcon({open}) {
  return (
    <span className={styles.sidebarIcon} aria-hidden="true">
      <span />
      <span />
      <span />
      <i className={open ? styles.sidebarRailOpen : styles.sidebarRail} />
    </span>
  );
}

function ExternalMark() {
  return (
    <>
      <span aria-hidden="true">↗</span>
      <span className={styles.srOnly}>(opens another site)</span>
    </>
  );
}

export default function Navbar() {
  const location = useLocation();
  const siteRoot = useBaseUrl('/');
  const {siteConfig} = useDocusaurusContext();
  const brand = siteConfig.customFields?.brand ?? {};
  const mobileSidebar = useNavbarMobileSidebar();

  const browserPath = normalizePath(location.pathname);
  const normalizedRoot = normalizePath(siteRoot);
  const routePath = browserPath.startsWith(`${normalizedRoot}/`)
    ? normalizePath(browserPath.slice(normalizedRoot.length))
    : browserPath === normalizedRoot
      ? '/'
      : browserPath;
  const isHomepage = routePath === '/';

  const [mobileOpen, setMobileOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const ecosystemRef = useRef(null);
  const ecosystemButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setEcosystemOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        ecosystemRef.current &&
        !ecosystemRef.current.contains(event.target)
      ) {
        setEcosystemOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key !== 'Escape') {
        return;
      }
      if (ecosystemOpen) {
        setEcosystemOpen(false);
        ecosystemButtonRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [ecosystemOpen, mobileOpen]);

  function isActive(to) {
    return routePath === to || routePath.startsWith(`${to}/`);
  }

  function isCurrentProject(href) {
    if (typeof brand.projectUrl !== 'string') {
      return false;
    }
    return normalizePath(href) === normalizePath(brand.projectUrl);
  }

  return (
    <div className={mobileSidebar.shown ? 'navbar-sidebar--show' : undefined}>
      <header
        className={[
          'navbar',
          styles.header,
          isHomepage ? styles.headerHome : styles.headerCompact,
        ].join(' ')}>
        <div className={styles.measure}>
          <div className={styles.mainRow}>
            {!mobileSidebar.disabled && (
              <button
                type="button"
                className={styles.sidebarToggle}
                aria-label="Toggle guide contents"
                aria-expanded={mobileSidebar.shown}
                onClick={mobileSidebar.toggle}>
                <SidebarIcon open={mobileSidebar.shown} />
              </button>
            )}

            <Link
              to="/"
              className={styles.brand}
              aria-label="Connector Field Guides home">
              <ConnectorMark className={styles.brandMark} />
              <span className={styles.brandText}>
                <span className={styles.parentLine}>
                  {brand.projectBadge ?? 'A zcohen-nerd technical guide'}
                </span>
                <span className={styles.siteName}>Connector Field Guides</span>
                {isHomepage && (
                  <span className={styles.tagline}>
                    Practical connector selection without the folklore.
                  </span>
                )}
              </span>
            </Link>

            <nav className={styles.desktopNav} aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={[
                    styles.navLink,
                    isActive(item.to) ? styles.navLinkActive : '',
                  ].join(' ')}
                  aria-current={isActive(item.to) ? 'page' : undefined}>
                  {item.label}
                </Link>
              ))}

              <div className={styles.ecosystem} ref={ecosystemRef}>
                <button
                  type="button"
                  ref={ecosystemButtonRef}
                  className={[
                    styles.navLink,
                    styles.ecosystemButton,
                    ecosystemOpen ? styles.navLinkActive : '',
                  ].join(' ')}
                  aria-expanded={ecosystemOpen}
                  aria-controls={ECOSYSTEM_ID}
                  onClick={() => setEcosystemOpen((value) => !value)}>
                  Ecosystem
                  <ChevronDown />
                </button>

                <div
                  id={ECOSYSTEM_ID}
                  className={styles.ecosystemMenu}
                  hidden={!ecosystemOpen}>
                  <div className={styles.menuLabel}>ZCOHEN-NERD ECOSYSTEM</div>
                  {projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      className={styles.menuItem}
                      aria-current={
                        isCurrentProject(project.href) ? 'page' : undefined
                      }
                      onClick={() => setEcosystemOpen(false)}>
                      <span>
                        <strong>{project.name}</strong>
                        <small>{project.blurb}</small>
                      </span>
                      {isCurrentProject(project.href) ? (
                        <span aria-hidden="true">•</span>
                      ) : (
                        <ExternalMark />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            <button
              type="button"
              ref={mobileButtonRef}
              className={styles.mobileMenuButton}
              aria-expanded={mobileOpen}
              aria-controls={MOBILE_NAV_ID}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setMobileOpen((value) => !value)}>
              <MenuIcon open={mobileOpen} />
            </button>
          </div>

          {isHomepage && (
            <div className={styles.mobileTagline}>
              Practical connector selection without the folklore.
            </div>
          )}
        </div>

        <div className={styles.accentRule} />

        <nav
          id={MOBILE_NAV_ID}
          className={styles.mobileNav}
          aria-label="Mobile navigation"
          hidden={!mobileOpen}>
          <div className={styles.mobileNavInner}>
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  styles.mobileNavLink,
                  isActive(item.to) ? styles.mobileNavLinkActive : '',
                ].join(' ')}
                aria-current={isActive(item.to) ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}>
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}

            <div className={styles.mobileEcosystem}>
              <div className={styles.mobileSectionLabel}>Ecosystem</div>
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  className={styles.mobileSubLink}
                  aria-current={
                    isCurrentProject(project.href) ? 'page' : undefined
                  }>
                  <span>{project.name}</span>
                  <span aria-hidden="true">
                    {isCurrentProject(project.href) ? '•' : '↗'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />
      <NavbarMobileSidebar />
    </div>
  );
}
