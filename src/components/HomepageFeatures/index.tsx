import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


// todo x: 首页内容
const FeatureList: FeatureItem[] = [
  {
    title: '儒',
    Svg: require('@site/static/img/ru.svg').default,
    description: (
      <>
        <ul>
          <li>四书五经《论语》《周易》</li>
          <li>仁义礼智信.</li>
          <li>修身齐家治国平天下.</li>
        </ul>
      </>
    ),
  },
  {
    title: '佛',
    Svg: require('@site/static/img/fo.svg').default,
    description: (
      <>
        <ul>
          <li>《金刚经》《心经》</li>
          <li>业:善业,恶业.</li>
          <li>六道/因果/轮回.</li>
          <li>见性成佛.</li>
        </ul>
      </>
    ),
  },
  {
    title: '道',
    Svg: require('@site/static/img/dao.svg').default,
    description: (
      <>
        <ul>
          <li>《道德经》</li>
          <li>无为</li>
          <li>阴阳☯️.</li>
          <li>道、法、术、器、势、志</li>
          <li>道以明向，法以立本，术以立策，器以成事，势以立人</li>
        </ul>
      </>
    ),
  },


];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
