import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handle_press = () => console.log("testpressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handle_press}>Hello </Text>
      <TouchableHighlight onPress={ () => console.log("Image Tapped")}>
      <Image 
      source={{
        width : 200,
        height: 200,
        uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
