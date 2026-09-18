import React, { useState } from 'react';
import styles from './ShareModal.module.css';
import { CloseIcon } from './Icons';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title }) => {
  const [copied, setCopied] = useState(false);

  useScrollLock(isOpen);
  const modalRef = useFocusTrap(isOpen);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={styles.modal}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose();
        }}
      >
        <div className={styles.header}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close share dialog"
          >
            <CloseIcon size={16} />
          </button>
          <h2 id="share-modal-title" className={styles.title}>
            Share this place
          </h2>
          <div style={{ width: 36 }} />
        </div>

        <div className={styles.body}>
          <div className={styles.propertyPreview}>
            <div className={styles.listingTitle}>{title}</div>
            <div className={styles.listingSub}>Candolim, Goa, India</div>
          </div>

          <div className={styles.optionsList}>
            <button type="button" className={styles.optionItem} onClick={handleCopyLink}>
              <div className={styles.optionIcon}>🔗</div>
              <div className={styles.optionText}>
                <div className={styles.optionTitle}>{copied ? 'Link Copied!' : 'Copy Link'}</div>
                <div className={styles.optionDesc}>Copy link to your clipboard</div>
              </div>
            </button>

            <button type="button" className={styles.optionItem} onClick={handleCopyLink}>
              <div className={styles.optionIcon}>💬</div>
              <div className={styles.optionText}>
                <div className={styles.optionTitle}>WhatsApp</div>
                <div className={styles.optionDesc}>Share with family and friends</div>
              </div>
            </button>

            <button type="button" className={styles.optionItem} onClick={handleCopyLink}>
              <div className={styles.optionIcon}>✉️</div>
              <div className={styles.optionText}>
                <div className={styles.optionTitle}>Email</div>
                <div className={styles.optionDesc}>Send details via email</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
