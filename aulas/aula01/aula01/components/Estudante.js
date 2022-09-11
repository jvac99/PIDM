import * as React from 'react';
import { Text, View} from 'react-native';


import {styles} from './Styles'

export default function Estudante() {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>João Victor
      </Text>
       <Text style={styles.item}>Ciência da computação
      </Text>
       <Text style={styles.item}>UFC
      </Text>
    </View>
  );
}