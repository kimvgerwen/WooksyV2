import React from 'react';
import { Avatar } from 'react-native-paper';

type AvatarProps = {
  size: 'small' | 'medium' | 'big';
  avatarUrl?: string;
};

export default function WkAvatar({ size, avatarUrl }: AvatarProps) {
  const avatarSize = size === 'small' ? 56 : size === 'medium' ? 80 : 100;

  return (
    <Avatar.Image
      size={avatarSize}
      source={avatarUrl ? { uri: avatarUrl } : require('@/assets/images/icon.png')}
      style={{ flexShrink: 0 }}
    />
  );
}
