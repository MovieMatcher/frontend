import { HomeStackParamList } from "../navigation/HomeStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<HomeStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default HomeScreen;
