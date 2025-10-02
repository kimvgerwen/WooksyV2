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
    // Header
    <View style={styles.container}>
      <View style={styles.header}>
        <WkSearchbar />
        <WkAvatar size="small" />
      </View>

      {/* Cards */}
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

      {/* Favourite members */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favourite Members</Text>
          <SeeAllButton onPress={() => router.push('/(tabs)/browse')} />
        </View>
        {/* TODO: Replace with real data */}
        <View style={styles.avatarRow}>
          <WkAvatar size="small" />
          <WkAvatar size="small" />
          <WkAvatar size="small" />
        </View>
      </View>

      {/* New Cards */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Cards</Text>
          <SeeAllButton onPress={() => router.push('/(tabs)/browse')} />
        </View>
        <View style={{ marginRight: -spacing.lg }}>
          <FlatList
            data={cards}
            renderItem={({ item }) => <Photocard source={{ uri: item.signedUrl }} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator
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
    paddingHorizontal: spacing.lg,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    height: 48,
  },
  counterCards: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  section: {
    gap: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.black,
  },
  avatarRow: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
});
