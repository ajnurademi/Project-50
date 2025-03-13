import { View, Text, ScrollView, Pressable } from "react-native"; 
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router"; // Import Link for navigation
import icons from "@/constants/icons"; // Ensure arrow_back is imported correctly

const SignIn = () => {
  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
        {/* ✅ Wrap Pressable inside Link properly */}
        <Link href="../" asChild>  
          <Pressable className="bg-[#1E1E2D] p-2 rounded-full w-12 h-12 flex items-center justify-center">
            <icons.arrow_back width={24} height={24} />
          </Pressable>
        </Link>

        <Text className="text-white">Hello</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
