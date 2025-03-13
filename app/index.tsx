import { Link } from "expo-router";
import { Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-beige font-sofachrome pr-3 text-2xl mb-6">
        Welcome to P50
      </Text>

      <View className="flex flex-row items-center space-x-4 gap-5">
        <Link href="/sign-up" asChild>
          <Pressable className="px-6 py-3 rounded-lg w-40 items-center border-2 border-beige">
            <Text className="text-beige font-poppins-semibold">
              Sign Up
            </Text>
          </Pressable>
        </Link>

        <Link href="/sign-in" asChild>
          <Pressable className="bg-beige px-6 py-3 rounded-lg w-40 items-center">
            <Text className="text-black font-poppins-semibold">Sign In</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
