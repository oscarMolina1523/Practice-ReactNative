import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  //you can declare a simple constant
  const name = "Oscar";

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
      <Cat />
      <PizzaTranslator/>
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

//you can create components reusable , don't repeat code
const Cat = () => {
  //you can use the hook useState to change values in your component 
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am cat, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
      />
    </View>
  )
};

//this is an example to control the changes in textInput element 
const PizzaTranslator = () => {
  //the state control the text and update the value
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40, padding: 5}}
        placeholder="Type here to translate!"
        //here control the event and update the data in text const
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {/* foreach space in text we create an array and show the pizza img */}
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

//you can use props to receive values, this is typescript
// type DogProps = {
//   name: string;
// };

// const Dog = (props:DogProps) => {
//   return (
//     <View>
//       <Text>I am also a dog!</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
