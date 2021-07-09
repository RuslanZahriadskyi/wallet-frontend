import React from 'react';
import Select from 'react-select';
import s from './SelectCategory.module.scss';

const category = [
  { value: 'house', label: 'house' },
  { value: 'car', label: 'car' },
  { value: 'kids', label: 'kids' },
  { value: 'sallary', label: 'sallary' },
  { value: 'sallary', label: 'sallary' },
  { value: 'sallary', label: 'sallary' },
  { value: 'sallary', label: 'sallary' },
  { value: 'sallary', label: 'sallary' },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: '100%',
    borderBottom: '1px dotted pink',
    color: 'black',
    margin: 6,
    textAlign: 'start',
    borderRadius: 20,
    background: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(50px)',
    fontSize: 18,
    paddingLeft: 10,
  }),

  control: (_, { selectProps: { width } }) => ({
    display: 'flex',
    width: '100%',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export default function SelectCategory({ value, changeCategory, error }) {
  return (
    <>
      <Select
        isClearable
        defaultInputValue={value}
        onChange={category => {
          if (category === null) {
            return changeCategory('category', '');
          }
          changeCategory('category', category.value);
        }}
        className={s.category}
        options={category}
        styles={customStyles}
        placeholder={
          <div
            className={['select-placeholder-text', s.categoryChoice].join(' ')}
          >
            Выбирете категорию
          </div>
        }
      />
    </>
  );
}
