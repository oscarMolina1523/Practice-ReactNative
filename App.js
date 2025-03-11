import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  //you can declare a simple constant
  const name="Oscar";

  //you can use functions in typescript you need to add the type of value example:string
  const getFullName = (
    firstName,
    secondName,
    thirdName,
  ) => {
    return firstName + ' ' + secondName + ' ' + thirdName;
  };

  return (
    <View style={styles.container}>
      <Text>This is my first test of React Native {name}</Text>
      <Text>This is my full name {getFullName('Escanor', 'Natanael', 'Gabriel')}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="This is like a placeholder...."
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
