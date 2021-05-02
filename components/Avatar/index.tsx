import clsx from 'clsx';
import React from 'react';

import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  width: string;
  height: string;
  className?: string;
  isVoice?: boolean;
}

export const Avatar = ({
  src,
  width,
  height,
  className,
  isVoice
}: AvatarProps) => {
  return (
    <div
      style={{ width, height, backgroundImage: `url(${src})` }}
      className={clsx(styles.avatar, isVoice ? styles.avatarBorder : '', className, 'd-ib')}
    />
  );
};
