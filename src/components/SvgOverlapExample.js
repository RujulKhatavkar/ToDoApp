import React from 'react';
import { View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import Svg1 from '../assets/Avatar.svg';
import Svg2 from '../assets/Avatar (1).svg';
import Svg3 from '../assets/Avatar (2).svg';
import Svg4 from '../assets/Avatar (3).svg';

const SvgOverlap = () => {
    return (
      <View style={{ flex: 1 }}>
        <SvgUri
          uri={Svg1}
        //   style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <SvgUri
          uri={Svg2}
          style={{ position: 'absolute', top: 50, left: 50 }}
        />
        <SvgUri
          uri={Svg3}
          style={{ position: 'absolute', top: 100, left: 100 }}
        />
        <SvgUri
          uri={Svg4}
          style={{ position: 'absolute', top: 150, left: 150 }}
        />
      </View>
    );
  };
export default SvgOverlap;  
