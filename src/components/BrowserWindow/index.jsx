import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function BrowserWindow({
  children,
  minHeight,
  url = 'http://localhost:3000',
  style,
}) {
  return (
    <div className={styles.browserWindow} style={{ minHeight: `${minHeight}px` }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>
          {url}
        </div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody} style={style}>
        {children}
      </div>
    </div>
  );
}
