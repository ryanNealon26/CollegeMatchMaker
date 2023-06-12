import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card></Card>
      
    </>
  );
}

