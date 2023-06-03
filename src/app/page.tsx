'use client';

import type { Metadata, NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { liffErrorState, liffObjectState } from 'recoil/liffState';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const liff = useRecoilValue(liffObjectState);
  const liffError = useRecoilValue(liffErrorState);

  return (
    <main className={styles.main}>
      <h1>create-liff-app</h1>
      {liff && <p>LIFF init succeeded.</p>}
      {liffError && (
        <>
          <p>LIFF init failed.</p>
          <p>
            <code>{liffError}</code>
          </p>
        </>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
    </main>
  );
};

export default Home;
