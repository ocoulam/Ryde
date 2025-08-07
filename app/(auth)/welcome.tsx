import { router } from "expo-router";
import React, { useRef, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { onboarding } from "../../constants";

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity
                onPress = {() => {
                    router.replace("/(auth)/sign-up");
                }}
                className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-black text-mb font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper ref={swiperRef} loop={false}
                dot={<View className = "w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
                activeDot={<View className = "w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
                onIndexChanged={(index) => {setActiveIndex(index)}}
            >
                {onboarding.map((item) => (
                    <View className="flex items-center justify-center" key={item.id}>
                        <Image
                            source={item.image}
                            className="w-full h-[300px]"
                            resizeMode="contain"
                        />
                        <View className= "flex flex-row items-center justify-center w-full mt-10">
                            <Text className="text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>
                        </View>
                    </View>
                ))}
            </Swiper>
        </SafeAreaView>
    );
};

export default Onboarding;