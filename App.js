import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, ScrollView, TextInput } from 'react-native';

export default function App() {

  const [arr, setArr] = useState([]);
  const [txt, setTxt] = useState('');
  const [stl, setStl] = useState(0);
  const [stlbrd, setstlbrd] = useState(0);
  const [stlsz, setstlsz] = useState(1);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [ShowEdit, setShowEdit] = useState(false);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text>welcome shani to your first app in React Native!!!!</Text>
      <View>
        <TextInput style={{ height: 40, borderColor: 'blue', borderWidth: 1 }} value={txt} placeholder="press text" onChangeText={(t) => { setTxt(t) }}>
        </TextInput>
      </View>
      <View>
        <Text>{"\n"}</Text>
      </View>
      <View>
        <Button title="Add to list" onPress={() => {
          //add
          setArr([...arr, txt])
        }}>
        </Button>
        <Button disabled={!ShowEdit} title="Save changes" onPress={() => {
          //change
          var newArr = [...arr];
          newArr.splice(indexEdit, 1);
          newArr.splice(indexEdit, 0, txt);
          setArr(newArr)
          setShowEdit(false);
        }}>
        </Button>
      </View>
      <View style={styles.txtinput}>
        <ScrollView>
          {arr.map((o, i) => {
            return (
              <View key={i}>
                <Text >{o}</Text>
                <Button title='move to top' onPress={() => {
                  var elm = arr[i];
                  var newArr = [...arr];
                  newArr.splice(i, 1);
                  setArr([elm, ...newArr]);
                }}></Button>
                <Button title='delete' onPress={() => {
                  var newArr = [...arr];
                  newArr.splice(i, 1);
                  setArr(newArr);
                }}></Button>

                <Button color={stl === 1 ? 'red' : 'blue'} title='CRITICAL button' onPress={() => {
                  setStl(1);
                }}></Button>
                <Button color={stl === 1 ? 'red' : 'blue'} title='clear the CRITICAL' onPress={() => {
                  setStl(0);
                }}></Button>
                <View style={{ borderWidth: stlsz, borderColor: stlbrd === 1 ? 'green' : 'black' }}>
                  <Button title='remark the border' onPress={() => {
                    setstlbrd(1);
                    setstlsz(5);
                  }}></Button>
                </View>
                <Button title='Edit' onPress={() => {
                  setTxt(o);
                  setIndexEdit(i);
                  setShowEdit(true);
                }}></Button>
              </View>)
          })}
        </ScrollView>
      </View>
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
  txtinput: {
    flex: 2,
    backgroundColor: 'pink',
    alignItems: 'stretch'
    // width: 100, height: 100
  }
  , btnstl: {
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 20
  }
});
