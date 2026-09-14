import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function onBoardingScreen() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    const handleComplete = () => {

    }

    return (
        <SafeAreaView edges={["top", "bottom", "right", "left"]} style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Complete Your Profile</Text>
                    <Text style={styles.subtitle}>Add your information to get started</Text>
                </View>

                <View style={styles.form}>
                    <TouchableOpacity style={styles.imageContainer}>
                        <View style={styles.placeholderImage}>
                            <Text style={styles.placeholderText}>+</Text>
                        </View>
                        <View style={styles.editBadge}>
                            <Text style={styles.editText}>Edit</Text>
                        </View>
                    </TouchableOpacity>

                    <TextInput 
                        style={styles.input}
                        placeholder="Full Name" 
                        placeholderTextColor={"#999"}
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                        
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Username" 
                        placeholderTextColor={"#999"}
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                        autoComplete="username"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleComplete}>
                        <Text style={styles.buttonText}>Complete Setup</Text>
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
        justifyContent: "center",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
    },
    header: {
        position: "relative",
        marginBottom: 100,
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
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        position: "relative",
        marginBottom: 200
    },
    imageContainer: {
        marginBottom: 32,
        position: "relative",
    },
    placeholderImage: {
        right: -85,
        width: 120,
        height: 120,
        backgroundColor: "#f5f5f5",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderWidth: 2,
        borderColor: "#e0e0e0",
        borderStyle: "dashed"
    },
    placeholderText: {
        fontSize: 48,
        color: "#999",
    },
    editBadge: {
        position: "absolute",
        bottom: 0,
        right: 110,
        backgroundColor: "#000",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    editText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600",
    },
    input: {
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        marginBottom: 16,
        width: "100%",
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    button: {
        backgroundColor: "#000",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        width: "100%",
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
        color: "#000",
    },
})