import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/auth/Register';
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import { useState, useEffect } from 'react';
import Home from './screens/home/Home';
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитируем задержку загрузки
    const loadData = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 секунды

    return () => clearTimeout(loadData);
  }, []);

  return isLoading ? <LoadingScreen /> : <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
