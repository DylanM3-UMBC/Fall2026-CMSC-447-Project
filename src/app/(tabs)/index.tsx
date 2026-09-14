import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  
  // Import PDF Function
  const importPdfFn = () => {
    Alert.alert("PDF Import not implemented yet");
  };
  


  return (
    <SafeAreaView style={styles.container} edges={["bottom","top"]}>
      <TouchableOpacity style={styles.pdfbt} onPress={importPdfFn}>
        <Text style={styles.pdfbttext}>+</Text>
      </TouchableOpacity>
      
      <Text>This is the Home Screen.</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  pdfbt: {
    position: "absolute",
    bottom: 20,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor:"#000",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8
  },

  pdfbttext: {
    color: "#fff",
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 32
  }

});