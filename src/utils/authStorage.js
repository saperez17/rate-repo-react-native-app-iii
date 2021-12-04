import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken () {
    // Get the access token for the storage
    const rawAcessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`
    );
    return rawAcessToken ? JSON.parse(rawAcessToken) : null;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    const searchToken = this.getAccessToken();
    if (searchToken) {
      this.removeAccessToken();
    }

    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
