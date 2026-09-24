import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        router.push("/(auth)/onboarding")
    })

    const handleSignUp = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields")
        }

        if (password.length < 3) {
            Alert.alert("Error", "Password must be at least 3 characters")
        }
    }

    return (
        <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Sign Up to Get Started</Text>
                <View style={styles.form}>
                    <TextInput 
                        placeholder="Email..." 
                        placeholderTextColor={"#999"}
                        keyboardType="email-address"
                        autoComplete="email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="Password..." 
                        placeholderTextColor={"#999"}
                        autoComplete="password"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.linkButton} onPress={() => router.replace("/(auth)/login")}>
                        <Text style={styles.linkButtonText}>
                            Already have an account? <Text style={styles.linkButtonTextBold}>Sign In</Text>
                        </Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 32,
        color: "#665",
    },
    form: {
        width: "100%",
    },
    input: {
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e0e0e0"
    },
    button: {
        backgroundColor: "#000",
        padding: 16,
        borderRadius: 12,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
    },
    linkButton: {
        marginTop: 24,
        alignItems: "center"
    },
    linkButtonText: {
        color: "#665",
        fontSize: 14,
    },
    linkButtonTextBold: {
        fontWeight: 600,
        color: "#000"
    },
})