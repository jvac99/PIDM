import * as React from 'react';
import { Text, View} from 'react-native';

import {styles} from './Styles'

export default function Estudante2() {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Karen Oliveira
      </Text>
       <Text style={styles.item}>Design Digital
      </Text>
       <Text style={styles.item}>UFC
      </Text>
    </View>
  );
}