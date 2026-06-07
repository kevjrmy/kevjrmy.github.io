import React from 'react';
import styles from './BootSequence.module.css';

type BootLine = {
  prefix: string;
  prefixClass: string;
  label: string;
  value?: string;
  valueClass?: string;
  delay: number;
};

const lines: BootLine[] = [
  { prefix: '▶', prefixClass: styles.arrow, label: 'initializing dev environment', delay: 0 },
  { prefix: '✔', prefixClass: styles.ok, label: 'runtime', value: 'Node 22 · Bun', valueClass: styles.val, delay: 1 },
  { prefix: '✔', prefixClass: styles.ok, label: 'backend', value: 'Laravel · Node', valueClass: styles.val, delay: 2 },
  { prefix: '✔', prefixClass: styles.ok, label: 'frontend', value: 'Vue · React · TypeScript', valueClass: styles.val, delay: 3 },
  { prefix: '✔', prefixClass: styles.ok, label: 'mobile', value: 'PWA · Android', valueClass: styles.val, delay: 4 },
  { prefix: '✔', prefixClass: styles.ok, label: 'available', value: 'true', valueClass: styles.valGreen, delay: 5 },
  { prefix: '>', prefixClass: styles.prompt, label: 'ready to build something great', delay: 6 },
];

const BootSequence: React.FC = () => (
  <figure className={styles.terminal} aria-hidden="true">
    {/* Title bar */}
    <div className={styles.titleBar}>
      <div className={styles.dots}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
      </div>
      <span className={styles.title}>kevjrmy — dev</span>
    </div>
    {/* Boot lines */}
    <div className={styles.body}>
      {lines.map((line, i) => (
        <div
          key={i}
          className={`${styles.line} ${i === lines.length - 1 ? styles.lastLine : ''}`}
          style={{ '--delay': `${line.delay * 0.35}s` } as React.CSSProperties}
        >
          <span className={`${styles.pfx} ${line.prefixClass}`}>{line.prefix}</span>
          <span className={styles.label}>{line.label}</span>
          {line.value && (
            <span className={`${styles.value} ${line.valueClass ?? ''}`}>{line.value}</span>
          )}
          {i === lines.length - 1 && <span className={styles.cursor} />}
        </div>
      ))}
    </div>
  </figure>
);

export default BootSequence;