import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import icons from "@/constants/icons";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Add your sign in logic here
    console.log("Sign In button pressed!");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <Link href="../" asChild>
          <Pressable className="bg-[#1E1E2D] p-2 pr-3 rounded-full w-12 h-12 flex items-center justify-center">
            <View className="flex items-center justify-center">
              <icons.arrow_back width={24} height={24} />
            </View>
          </Pressable>
        </Link>
        <Text className="text-white font-montserrat-semibold text-4xl mt-28">
          Sign In
        </Text>
        <View className="mt-8">
          <Text className="text-gray font-poppins">Email Address</Text>
          <View className="flex-row items-center mt-3 p-2 rounded">
            <icons.email width={25} height={25} />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#ccc"
              className="flex-1 ml-4 text-white"
              keyboardType="email-address"
            />
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#232533",
              marginVertical: 10,
            }}
          />
          <Text className="text-gray font-poppins mt-5">Password</Text>
          <View className="flex-row items-center mt-3 p-2 rounded">
            <icons.password width={25} height={25} />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#ccc"
              className="flex-1 ml-4 text-white"
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={togglePasswordVisibility} className="ml-4">
              {showPassword ? (
                <icons.show_pw_off width={25} height={25} />
              ) : (
                <icons.show_pw width={25} height={25} />
              )}
            </Pressable>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#232533",
              marginVertical: 10,
            }}
          />
          <Pressable
            onPress={handleSignIn}
            className="mt-6 bg-beige px-6 py-4 rounded-2xl items-center justify-center"
          >
            <Text className="text-black font-poppins-semibold text-lg">
              Sign In
            </Text>
          </Pressable>

          <View className="flex items-center justify-center">
            <Text className="text-gray font-poppins-regular text-center mt-8">
              I'm a new user.{" "}
              <Link className="text-white font-poppins-medium" href="/sign-up">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
