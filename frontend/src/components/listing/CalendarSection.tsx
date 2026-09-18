import React, { useState } from 'react';
import styles from './CalendarSection.module.css';

export const CalendarSection: React.FC = () => {
  const [cleared, setCleared] = useState(false);

  // October 2026 starts on Thursday (day index 4: 0=Su, 1=Mo, 2=Tu, 3=We, 4=Th)
  // 31 days in October
  const octDays: (number | null)[] = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  // November 2026 starts on Sunday (day index 0)
  // 30 days in November
  const novDays: (number | null)[] = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30
  ];

  const weekHeaders = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <section className={styles.calendarSection} aria-label="Calendar and dates">
      <div className={styles.headerArea}>
        <h3 className={styles.title}>
          {cleared ? 'Select check-in date' : '5 nights in Candolim'}
        </h3>
        <div className={styles.subtitle}>
          {cleared ? 'Add your travel dates for exact pricing' : '18 Oct 2026 – 23 Oct 2026'}
        </div>
      </div>

      <div className={styles.calendarsWrapper}>
        {/* Month 1: October 2026 */}
        <div className={styles.monthContainer}>
          <div className={styles.monthHeader}>
            <button type="button" className={styles.navBtn} aria-label="Previous month">
              <svg width="12" height="12" viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="3">
                <path d="M20 6 10 16l10 10" />
              </svg>
            </button>
            <span className={styles.monthName}>October 2026</span>
            <div style={{ width: 32 }} />
          </div>

          <div className={styles.weekRow}>
            {weekHeaders.map((d) => (
              <span key={d} className={styles.weekHeader}>{d}</span>
            ))}
          </div>

          <div className={styles.daysGrid}>
            {octDays.map((day, idx) => {
              if (day === null) {
                return <div key={`empty-${idx}`} className={styles.emptyDay} />;
              }

              const isStart = !cleared && day === 18;
              const isEnd = !cleared && day === 23;
              const inRange = !cleared && day > 18 && day < 23;

              let dayClass = styles.dayCell;
              if (isStart) dayClass = `${styles.dayCell} ${styles.rangeStart}`;
              else if (isEnd) dayClass = `${styles.dayCell} ${styles.rangeEnd}`;
              else if (inRange) dayClass = `${styles.dayCell} ${styles.inRange}`;

              return (
                <div key={`oct-${day}`} className={dayClass}>
                  <span className={styles.dayNumber}>{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Month 2: November 2026 */}
        <div className={styles.monthContainer}>
          <div className={styles.monthHeader}>
            <div style={{ width: 32 }} />
            <span className={styles.monthName}>November 2026</span>
            <button type="button" className={styles.navBtn} aria-label="Next month">
              <svg width="12" height="12" viewBox="0 0 32 32" fill="none" stroke="#222" strokeWidth="3">
                <path d="M12 6l10 10-10 10" />
              </svg>
            </button>
          </div>

          <div className={styles.weekRow}>
            {weekHeaders.map((d) => (
              <span key={d} className={styles.weekHeader}>{d}</span>
            ))}
          </div>

          <div className={styles.daysGrid}>
            {novDays.map((day) => (
              <div key={`nov-${day}`} className={styles.dayCell}>
                <span className={styles.dayNumber}>{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer controls: Keyboard icon & Clear dates */}
      <div className={styles.bottomRow}>
        <button type="button" className={styles.keyboardBtn} aria-label="Keyboard shortcuts">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="1.8">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10" />
          </svg>
        </button>

        <button
          type="button"
          className={styles.clearBtn}
          onClick={() => setCleared(!cleared)}
        >
          {cleared ? 'Reset dates' : 'Clear dates'}
        </button>
      </div>
    </section>
  );
};
