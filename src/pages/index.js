import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning Kubernetes - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Hands-on Kubernetes training labs">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>Hands-on Labs</h3>
                  <p>
                    Learn Kubernetes through practical, step-by-step exercises
                    that build real-world skills.
                  </p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>Progressive Learning</h3>
                  <p>
                    Start with basics and advance to complex topics at your own pace.
                  </p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>Best Practices</h3>
                  <p>
                    Learn industry-standard practices and patterns for production
                    Kubernetes deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}