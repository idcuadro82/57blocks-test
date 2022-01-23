import { FC } from 'react';
import { FormikConfig } from 'formik';
import { LoginData } from 'src/models';
import './LoginForm.scss';
declare const LoginForm: FC<FormikConfig<LoginData>>;
export default LoginForm;
