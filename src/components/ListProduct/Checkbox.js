import React from 'react';
import { CheckBox } from 'react-native-elements';

const Checkbox = ({ title, checked, onPress }) => {
  return (
    <CheckBox
      title={title}
      checked={checked}
      onPress={onPress}
    />
  );
};

export default Checkbox;
