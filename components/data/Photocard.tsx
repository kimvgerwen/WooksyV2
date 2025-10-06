import { colors, radius, spacing, typography } from '@/theme';
import React, { useState } from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import LikeButton from '../buttons/LikeButton';
import Label, { LabelType } from './Label';

type PhotocardProps = {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
  onPress?: () => void;
};

interface PhotocardInfoProps extends PhotocardProps {
  memberName: string;
  description: string;
  type: LabelType;
}

function Photocard({ source, width = 120, height = 190, onPress }: PhotocardProps) {
  return (
    <Pressable onPress={onPress}>
      <Image source={source} style={{ width, height, borderRadius: 8 }} resizeMode="cover" />
    </Pressable>
  );
}

function PhotocardInfo({ source, onPress, memberName, description, type }: PhotocardInfoProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLike = async () => {
    setIsLoading(true);
    setIsLiked((prev) => !prev);
    setIsLoading(false);
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} resizeMode="cover" resizeMethod="scale" />
        <View style={styles.labelContainer}>
          <Label type={type} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.likeButton}>
          <LikeButton isLiked={isLiked} onToggle={toggleLike} isLoading={isLoading} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.memberName}>{memberName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  memberName: {
    ...typography.bodyFat,
    color: colors.placeholder,
  },
  description: {
    ...typography.bodyS,
    color: colors.black,
  },
  container: {
    width: '100%',
    height: 'auto',
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  labelContainer: {
    position: 'absolute',
    bottom: 0,
    top: spacing.sm,
    alignSelf: 'center',
  },
  infoContainer: {
    backgroundColor: colors.white,
    padding: spacing.xs,
    borderBottomLeftRadius: radius.sm,
    borderBottomRightRadius: radius.sm,
    position: 'relative',
  },
  likeButton: {
    position: 'absolute',
    top: -22,
    right: spacing.md,
  },
  textContainer: { padding: spacing.sm },
  image: {
    width: '100%',
    height: 230,
    borderTopLeftRadius: radius.sm,
    borderTopRightRadius: radius.sm,
  },
});

export { Photocard, PhotocardInfo };
