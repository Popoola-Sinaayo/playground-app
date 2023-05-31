import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import WelcomeScreen from "../Screens/WelcomeScreen";
import SecondScreen from "../Screens/SecondScreen";
import ThirdScreen from "../Screens/ThirdScreen";

const BaseNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigator;
