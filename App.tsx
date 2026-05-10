import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Easy Editor</Text>
      <Text style={styles.subtitle}>Éditer pro comme CapCut</Text>
    </SafeAreaView>
  );
}

function ProjectsScreen() {
  return <View style={styles.container}><Text style={styles.text}>Projets</Text></View>;
}

function TemplatesScreen() {
  return <View style={styles.container}><Text style={styles.text}>Templates</Text></View>;
}

function ProfileScreen() {
  return <View style={styles.container}><Text style={styles.text}>Profil</Text></View>;
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#000' }, tabBarActiveTintColor: '#00E5FF' }}>
        <Tab.Screen name="Accueil" component={HomeScreen} options={{ tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} /> }} />
        <Tab.Screen name="Projets" component={ProjectsScreen} options={{ tabBarIcon: ({color}) => <Ionicons name="folder" size={24} color={color} /> }} />
        <Tab.Screen name="Templates" component={TemplatesScreen} options={{ tabBarIcon: ({color}) => <Ionicons name="sparkles" size={24} color={color} /> }} />
        <Tab.Screen name="Profil" component={ProfileScreen} options={{ tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  subtitle: { color: '#888', fontSize: 14 },
  text: { color: '#fff', fontSize: 18 }
});