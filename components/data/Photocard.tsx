import React from 'react';
import { Image, ImageSourcePropType, Pressable } from 'react-native';

type PhotocardProps = {
  source: ImageSourcePropType;
};

export default function Photocard({ source }: PhotocardProps) {
  return (
    <Pressable onPress={() => {}}>
      <Image
        source={source}
        style={{ width: 120, height: 190, borderRadius: 8 }}
        resizeMode="cover"
        accessibilityLabel="Photocard"
      />
    </Pressable>
  );
}
