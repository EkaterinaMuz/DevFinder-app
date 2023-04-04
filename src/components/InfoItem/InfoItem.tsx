import React from 'react';
import styles from './InfoItem.module.sass';

interface InfoItemProps {
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
  const currentText = text || 'No info';
  let currentHref = '';
  if (isLink && text) {
    currentHref = text?.startsWith('http://') ? text : `https://${text}`
  }
  return (
    <div className={styles.infoItem}>
      <span>{icon}</span>
      {
        isLink && text ? (
          <a
            href={currentHref}
            target='_blank'
            rel='noreferrer'
          >
            {text}
          </a>
        ) : currentText
      }
    </div>
  )
}
