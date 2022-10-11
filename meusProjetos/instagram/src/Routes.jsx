import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();
// <Stack.Navigator initialRouteName="Home">
//   <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
//   <Stack.Screen
//     name="Profile"
//     component={Profile}
//     options={{ title: "Profile" }}
//   />
// </Stack.Navigator>;

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "blue",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Reels" component={Home} />
      <Tab.Screen name="Store" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Routes;
