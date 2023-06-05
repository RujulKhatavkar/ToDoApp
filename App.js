import { StatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView} from "react-native";
//import TodoHeader
import { Provider } from "react-redux";
import TodoHeader from "./src/components/ToDoHeader";
// import TodoList from "./src/components/ToDoList";
import store from "./src/redux/store";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default function App() {
    const RootApp = () => {
        return (
          <SafeAreaView>

            <TodoHeader/>
          </SafeAreaView>
        );
      };
    
      return (
        <Provider store={store}>
          <RootApp />
        </Provider>
      );
    }
