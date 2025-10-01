import { SeeAllButton } from '@/components/buttons/SeeAllButton';
import CounterCard from '@/components/data/CounterCard';
import Photocard from '@/components/data/Photocard';
import WkSearchbar from '@/components/fields/Searchbar';
import WkAvatar from '@/components/profile/Avatar';
import { useRecentCards } from '@/lib/hooks/useRecentCards';
import { colors, spacing, typography } from '@/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const { cards } = useRecentCards(5);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <WkSearchbar />
        <WkAvatar size="small" />
      </View>
      <View style={styles.counterCards}>
        <CounterCard
          variant="wishlist"
          counter={120}
          onPress={() => router.push('/(tabs)/wishlist')}
        />
        <CounterCard
          variant="inventory"
          counter={75}
          onPress={() => router.push('/(tabs)/inventory')}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.favoriteMembersHeader}>
          <Text style={styles.contentText}>Favourite Members</Text>
          <SeeAllButton onPress={() => router.push('/(tabs)/browse')} />
        </View>
        {/* TODO: Replace with dynamic avatars from supabase data */}
        <View style={styles.favoriteAvatars}>
          <WkAvatar size="small" />
          <WkAvatar size="small" />
          <WkAvatar size="small" />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.favoriteMembersHeader}>
          <Text style={styles.contentText}>New Cards</Text>
          <SeeAllButton onPress={() => router.push('/(tabs)/browse')} />
        </View>
        <View style={{ marginRight: -spacing.lg }}>
          <FlatList
            data={cards}
            renderItem={({ item }) => <Photocard source={{ uri: item.signedUrl }} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{ gap: spacing.md }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.xxxl,
    paddingTop: spacing.md,
    marginHorizontal: spacing.lg,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    height: 48,
  },
  counterCards: {
    gap: spacing.md,
    flexDirection: 'row',
  },
  contentContainer: {
    gap: spacing.md,
  },
  favoriteMembersHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  contentText: {
    ...typography.h2,
    color: colors.black,
  },
  favoriteAvatars: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
});
