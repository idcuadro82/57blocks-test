import { FC, InputHTMLAttributes } from 'react';
import './SearchInput.scss';
declare const SearchInput: FC<InputHTMLAttributes<HTMLInputElement> & {
    onSearch?: (value: string) => void;
}>;
export default SearchInput;
