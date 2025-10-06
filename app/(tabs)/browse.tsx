import { PhotocardInfo } from '@/components/data/Photocard';
import WkSearchbar from '@/components/fields/Searchbar';
import WkAvatar from '@/components/profile/Avatar';
import { usePhotocards } from '@/lib/hooks/usePhotocards';
import { colors, spacing } from '@/theme';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

export default function Browse() {
  const { cards, loading, loadMore, loadingMore } = usePhotocards(20);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <WkSearchbar />
        <WkAvatar size="small" />
      </View>

      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: spacing.md }}
        contentContainerStyle={{ gap: spacing.md, paddingBottom: spacing.lg }}
        renderItem={({ item }) => (
          <View style={styles.photocardWrapper}>
            <PhotocardInfo
              source={{ uri: item.signed_url ?? '' }}
              memberName={item.member}
              description={item.displayDescription}
              type={item.normalized_type}
            />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator color={colors.white} style={{ marginVertical: spacing.md }} />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    gap: spacing.lg,
  },
  photocardWrapper: {
    width: '48%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    height: 56,
  },
});
