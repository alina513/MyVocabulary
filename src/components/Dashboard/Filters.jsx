import {
  Input,
  Select,
  Container,
  Radio,
  RadioContainer,
  Label,
} from './Filters.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';
import { selectCategories } from '../../redux/words/selectors';
import { fetchCategories } from '../../redux/words/operation';
import { setFilter, setCategory } from '../../redux/words/slice';
import { useEffect, useState, useMemo } from 'react';
import debounce from 'lodash/debounce';

export const Filters = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories({ token }));
  }, [dispatch, token]);

  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [selectedRadio, setSelectedRadio] = useState("");

  const debouncedSetFilter = useMemo(
    () => debounce(keyword => dispatch(setFilter(keyword)), 300),
    [dispatch]
  );

  const handleKeywordChange = event => {
    const keyword = event.target.value.trim();
    setKeyword(keyword);
    debouncedSetFilter(keyword);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    dispatch(setCategory(event.target.value));
  };

  const handleRadioChange = event => {
    setSelectedRadio(event.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedSetFilter.cancel();
    };
  }, [debouncedSetFilter]);

  return (
    <Container>
      <Input
        placeholder="Find the word"
        value={keyword}
        onChange={handleKeywordChange}
      />
      <Select id="categories" name="categories" onChange={handleCategoryChange}>
        <option value=""></option>
        {categories &&
          categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </Select>
      {selectedCategory === 'verb' && (
        <RadioContainer>
          {/* <Radio type="radio" name="verb" id="regular" value="false" /> */}
          <Radio
             type="radio"
             id="regular"
             name="verb"
             value="regular"
             checked={selectedRadio === 'regular'}
             onChange={handleRadioChange}
          />
          <Label htmlFor="regular">Regular</Label>
          {/* <Radio type="radio" name="verb" id="irregular" value="true" /> */}
          <Radio
        type="radio"
        id="irregular"
        name="verb"
        value="irregular"
        checked={selectedRadio === 'irregular'}
        onChange={handleRadioChange}
          />
          <Label htmlFor="irregular">Irregular</Label>
        </RadioContainer>
      )}
    </Container>
  );
};
