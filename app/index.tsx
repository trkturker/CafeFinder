import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { AppleMaps, CameraPosition, GoogleMaps } from 'expo-maps';
import React, { useRef, useState } from 'react';
import { Image, Platform, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type Feature = {
  icon: string;
  text: string;
};

const Index = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = [100, '45%', '75%', '85%'];
  const [placeName, setPlaceName] = useState('');
  const [placeImage, setPlaceImage] = useState('');
  const [placeDescription, setPlaceDescription] = useState('');
  const [placeShortDescription, setPlaceShortDescription] = useState('');
  const [currentFeatures, setCurrentFeatures] = useState<Feature[]>([]);
  const [currentRating, setCurrentRating] = useState(0);

  const mapRef = useRef<AppleMaps.MapView | GoogleMaps.MapView>(null);
  const MapView = Platform.OS === 'ios' ? AppleMaps.View : GoogleMaps.View;

  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);
  const isExpanded = currentSnapIndex >= 2; 

  const locations = [
    {
      id: '1',
      displayTitle: 'Light Cafe', 
      shortDescription: 'Best Cafe in Town',
      description: 'A cozy spot with large windows that flood the space with natural light. Perfect for morning coffee and work sessions. Our signature drink is the Honey Cinnamon Latte, made with locally sourced honey and organic cinnamon.',
      coordinates: {
        latitude: 37.7553,
        longitude: 29.0480,
      },
      image: 'https://images.unsplash.com/photo-1696420691045-330c5669e96c?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tintColor: '#3498db',
      rating: 4.8,
      features: [
        { icon: '☕', text: 'Specialty Coffee' },
        { icon: '📶', text: 'Free WiFi' }
      ],
    },
    {
      id: '2',
      displayTitle: 'Dark Cafe',
      shortDescription: 'Cozy dark roast specialist',
      description: 'An intimate, moody space with dim lighting and rich, dark wood interiors. Specializing in single-origin dark roasts and artisanal chocolate pairings. Try our famous Dark Mocha with 85% dark chocolate and a hint of orange zest.',
      coordinates: {
        latitude: 37.7770,
        longitude: 29.0530,
      },
      image: 'https://plus.unsplash.com/premium_photo-1753618000634-879ad9258012?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tintColor: '#9b59b6',
      rating: 4.6,
      features: [
        { icon: '🍫', text: 'Artisanal Chocolate' },
        { icon: '🌙', text: 'Late Night' }
      ],
    },
    {
      id: '3',
      displayTitle: 'Moon Light Cafe',
      shortDescription: 'Late-night stargazing',
      description: 'Open late into the night, this cafe features a beautiful outdoor terrace perfect for stargazing. Our special Moonlight Blend coffee is only available after sunset. Don\'t miss our signature Moonlight Affogato with homemade vanilla bean ice cream.',
      coordinates: {
        latitude: 37.7690,
        longitude: 29.0590,
      },
      image: 'https://images.unsplash.com/photo-1669410647983-ef742ccdfe6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tintColor: '#e74c3c',
      rating: 4.9,
      features: [
        { icon: '🌠', text: 'Stargazing' },
        { icon: '🍨', text: 'Desserts' }
      ],
    },
    {
      id: '4',
      displayTitle: 'View Cafe',
      shortDescription: 'Panoramic views & premium coffee',
      description: 'Perched on a hill with panoramic views, this cafe is known for its premium dark roasts and decadent desserts. The Dark View Special combines our strongest espresso with dark chocolate shavings and a touch of sea salt. The perfect spot for sunset views and quiet contemplation.',
      coordinates: {
        latitude: 37.7660,
        longitude: 29.0420,
      },
      image: 'https://images.unsplash.com/photo-1562815240-be666d2600ce?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tintColor: '#2ecc71',
      rating: 4.7,
      features: [
        { icon: '🌄', text: 'Panoramic View' },
        { icon: '🍰', text: 'Gourmet Desserts' }
      ],
    }
  ];

  const defaultCamera: CameraPosition = {
    coordinates: {
      latitude: 37.7653,
      longitude: 29.0510,
    },
    zoom: 14,
  };



  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <GestureHandlerRootView className="flex-1 font-cascadia">
        <View className="absolute top-10 left-0 right-0 z-10 px-4">
          <View className="bg-[#ea4235] rounded-full shadow-lg p-3 mx-4">
            <Text className="text-center text-white text-lg font-semibold">Find The Perfect Cafe For You</Text>
          </View>
        </View>

        <MapView
          // @ts-ignore
          ref={mapRef}
          onMarkerClick={(marker) => {
            console.log(marker.id + ' Hoşgeldiniz');

            mapRef.current?.setCameraPosition({
              coordinates: {
                latitude: marker.coordinates?.latitude,
                longitude: marker.coordinates?.longitude,
              },
              zoom: 17,
              duration: 1000,
            });

            const clickedLocation = locations.find(loc => loc.id === marker.id);
            setPlaceName(clickedLocation?.displayTitle || '');
            setPlaceImage(clickedLocation?.image || '');
            setPlaceDescription(clickedLocation?.description || '');
            setPlaceShortDescription(clickedLocation?.shortDescription || '');
            setCurrentFeatures(clickedLocation?.features || []);
            setCurrentRating(clickedLocation?.rating || 0);
            console.log("placeDescription" + placeDescription);

            sheetRef.current?.snapToIndex(1);
          }}
          markers={locations}
          cameraPosition={defaultCamera}
          style={{ flex: 1 }}
          userInterfaceStyle="light"
        >


        </MapView>

          <View
            className="absolute bottom-28 left-0 right-0 z-20 px-4"
            style={{ display: placeName ? 'none' : 'flex' }}
          >
            <View className="bg-white/90 p-4 rounded-2xl shadow-xl border border-gray-200">
              <Text className="text-gray-800 text-center font-inter">ⓘ Tap on a marker to see details</Text>
            </View>
          </View>

        <BottomSheet
          index={-1}
          ref={sheetRef}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          onChange={(index) => setCurrentSnapIndex(index)}
          onClose={() => {
            setPlaceName('');
            setPlaceDescription('');
            setPlaceShortDescription('');
            setCurrentRating(0);
            mapRef.current?.setCameraPosition(defaultCamera);
          }}
          backgroundStyle={{ backgroundColor: '#ffffff' }}
          handleIndicatorStyle={{ backgroundColor: '#e5e7eb', width: 40, height: 5 }}
          handleStyle={{ paddingVertical: 10 }}
        >
          <BottomSheetView className="gap-0">
            <View className="relative">
              <Image
                source={{ uri: placeImage }}
                className="h-72 w-full rounded-t-3xl"
                resizeMode="cover"
              />
              <View className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent rounded-t-3xl" />
              <Text className="absolute bottom-4 left-6 text-white shadow-slate-600 text-3xl font-bold">{placeName}</Text>
            </View>

            <View className="px-6 pt-4 pb-2">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <View className="w-2 h-2 bg-rose-500 rounded-full mr-2" />
                  <Text className="text-rose-500 font-medium">{placeShortDescription}</Text>
                </View>
                <View className="bg-rose-50 px-3 py-1 rounded-full">
                  <Text className="text-rose-600 text-sm font-medium">{currentRating} ⭐</Text>
                </View>
              </View>

              {isExpanded && (
                <View className="mt-2">
                  <Text className="text-gray-700 leading-6 text-base">{placeDescription}</Text>
                  <View className="mt-4 flex-row gap-3 flex-wrap">
                    {currentFeatures.map((feature, index) => (
                      <View key={index} className="bg-gray-100 px-3 py-2 rounded-lg">
                        <Text className="text-gray-700 text-sm">{feature.icon} {feature.text}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Index;
