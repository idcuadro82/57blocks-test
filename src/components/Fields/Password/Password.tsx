import React, { FC } from 'react';
import { InputField, InputFieldProps } from 'src/components/Fields';

const PasswordField: FC<InputFieldProps> = (props) => {
  return <InputField {...props} type="password" />;
};

export default PasswordField;
