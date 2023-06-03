'use client';

import type { Metadata, NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { liffErrorState, liffObjectState } from 'recoil/liffState';

import styles from '../styles/Home.module.css';

// export const metadata: Metadata = {
//   title: 'マイナセーフティ',
//   description:
//     '災害等が発生した際、確実に本人より、”自分はここにいるよ”と家族に伝えたい、”家族の居場所を確認したい”ことはありませんか。それに応えるアプリが、マイナセーフティです。',
// };

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
