import { colors, spacing, typography } from '@/theme';
import { Entypo, Feather, Octicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: colors.coral,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 80,
          paddingBottom: spacing.md,
          paddingTop: spacing.md,
          paddingHorizontal: spacing.md,
        },
        tabBarLabelStyle: { ...typography.helper },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Octicons name="home" color={color} size={size} />,
          sceneStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color, size }) => <Octicons name="search" color={color} size={size} />,
          sceneStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
          tabBarIcon: ({ color, size }) => <Feather name="archive" color={color} size={size} />,
          sceneStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart-outlined" color={color} size={size} />
          ),
          sceneStyle: { backgroundColor: 'transparent' },
        }}
      />
      ,
    </Tabs>
  );
}
