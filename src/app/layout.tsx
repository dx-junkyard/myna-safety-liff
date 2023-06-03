'use client';

import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { liffErrorState, liffObjectState } from 'recoil/liffState';

const LiffLayout = ({ children }: { children: React.ReactNode }) => {
  const [liffObject, setLiffObject] = useRecoilState(liffObjectState);
  const [liffError, setLiffError] = useRecoilState(liffErrorState);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import('@line/liff')
      .then((liff) => liff.default)
      .then((liff) => {
        console.log('LIFF init...');
        liff
          .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
          .then(() => {
            console.log('LIFF init succeeded.');
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log('LIFF init failed.');
            setLiffError(error.toString());
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <title>マイナセーフティ</title>
        <meta
          name="description"
          content={
            '災害等が発生した際、確実に本人より、”自分はここにいるよ”と家族に伝えたい、”家族の居場所を確認したい”ことはありませんか。それに応えるアプリが、マイナセーフティです。'
          }
        />
        <link rel="icon" href={'/favicon.ico'} />
      </head>
      <body>
        <RecoilRoot>
          <LiffLayout>{children}</LiffLayout>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;
