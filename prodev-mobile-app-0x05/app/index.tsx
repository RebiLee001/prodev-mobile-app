import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        resizeMode="cover"
        style={styles.backgroundImageContainer}
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your stay</Text>
            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>
                Discover the best places to stay wherever you go
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Pressable
            style={styles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonPrimaryText}>Join</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

