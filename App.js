import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>hi</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "red",
  },
});
