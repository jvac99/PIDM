import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Community from "./pages/Community";
import Chat from "./pages/Chat";
import Status from "./pages/Status";
import Call from "./pages/Call";

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="-" component={Community} />
        <Tab.Screen name="Conversas" component={Chat} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Chamadas" component={Call} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
