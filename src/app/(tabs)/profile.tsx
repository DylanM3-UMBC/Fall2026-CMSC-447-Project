import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Projects</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.CardOne}></View>
        <View style={styles.CardOne}></View>
        <View style={styles.CardOne}></View>
        <View style={styles.CardOne}></View>
        <View style={styles.CardOne}></View>
        <View style={styles.CardOne}></View>
        <View style={styles.CardOne}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2dfdf",
    alignItems: 'center'
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  CardOne: {
    width: 200,
    height: 100,
    backgroundColor: "#000",
    opacity: 0.5,
    borderStyle: "dashed",
    borderWidth: 4,

    // Apply borderRadius to the Card to give it round corners
    borderRadius: 10,
    marginRight: 15,
    flexShrink: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  }

});