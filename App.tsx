import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  useEffect(() => {
    // Request camera permission for Android
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA).then(
        granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Camera permission granted');
          } else {
            console.log('Camera permission denied');
          }
        },
      );
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={require('./assets/index.html')}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        debuggingEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true} // Allow inline media playback
        javaScriptCanOpenWindowsAutomatically={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
