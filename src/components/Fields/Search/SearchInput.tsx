import React, { FC, InputHTMLAttributes, useState } from 'react';

import './SearchInput.scss';

const SearchInput: FC<InputHTMLAttributes<HTMLInputElement> & { onSearch?: (value: string) => void }> = ({
  onSearch = () => {},
  ...props
}) => {
  const [inputValue, setValue] = useState<string>('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') onSearch(inputValue);
  };

  return (
    <div className="form-field-container-icon search-input-container">
      <i className="fas fa-search action-icon" title="Press for search" onClick={() => onSearch(inputValue)} />
      <input
        className="form-field-control search-input"
        {...props}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchInput;
