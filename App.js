import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGaolText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGaolText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, idx) => (
            <View style={styles.goalItem} key={idx}>
              <Text style={styles.goalText} key={goal}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
