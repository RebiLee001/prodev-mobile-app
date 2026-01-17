import { View, Text, TextInput, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput secureTextEntry style={styles.formControl} />
        </View>
      </View>

      <Pressable style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don’t have an account? </Text>
        <Pressable onPress={() => router.push("/join")}>
          <Text style={styles.signupSubTitleText}>Join</Text>
        </Pressable>
      </View>
    </View>
  );
}
