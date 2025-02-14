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
import { selectCategories } from '../../redux/words/selectors';
import { fetchCategories } from '../../redux/words/operation';
import { setFilter, setCategory, setRadio } from '../../redux/words/slice';
import { useEffect, useState, useMemo } from 'react';
import debounce from 'lodash/debounce';

export const Filters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
    setSelectedRadio("");
    dispatch(setCategory(event.target.value));
    dispatch(setRadio(""));
  };

  const handleRadioChange = event => {
    setSelectedRadio(event.target.value);
    dispatch(setRadio(event.target.value));
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
             value="false"
             checked={selectedRadio === 'false'}
             onChange={handleRadioChange}
          />
          <Label htmlFor="regular">Regular</Label>
          {/* <Radio type="radio" name="verb" id="irregular" value="true" /> */}
          <Radio
        type="radio"
        id="irregular"
        name="verb"
        value="true"
        checked={selectedRadio === 'true'}
        onChange={handleRadioChange}
          />
          <Label htmlFor="irregular">Irregular</Label>
        </RadioContainer>
      )}
    </Container>
  );
};
