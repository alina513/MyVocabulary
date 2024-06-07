import { Input, Select, Container, Radio, RadioContainer, Label } from "./Filters.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectToken } from "../../redux/auth/selectors";
import { selectCategories } from "../../redux/words/selectors";
import { fetchCategories } from "../../redux/words/operation";
import { setFilter, setCategory } from "../../redux/words/slice";
import { useEffect } from "react";
import { useState } from "react";

export const Filters = () =>{

    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories({ token }));
      }, [dispatch, token]);
    
      const categories = useSelector(selectCategories);
      const [selectedCategory, setSelectedCategory] = useState('');
      const [keyword, setKeyword] = useState('');
      const [filterword, setFilterword] = useState('');

      const handleKeywordChange = (event) => {
        const keyword = event.target.value;
        setKeyword(keyword);
        dispatch(setFilter(keyword));
      };
    
    
    
      const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
        const filterword = event.target.value;
        setFilterword(filterword);
        dispatch(setCategory(filterword));
      };
    
  
    return(
        <Container>
        <Input placeholder="Find the word"
        value={keyword}
        onChange={handleKeywordChange}
        />
        <Select
            id="categories"
            name="categories"
            onChange={handleCategoryChange}
          >
            <option value="" disabled></option>
            {categories &&
              categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </Select>
          {selectedCategory === 'verb' && (
            <RadioContainer>
              <Radio
                type="radio"
                name="verb"
                id="regular"
                value="false"
              ></Radio>
              <Label htmlFor="regular">Regular</Label>
              <Radio
                type="radio"
                name="verb"
                id="irregular"
                value="true"
                

              ></Radio>
              <Label htmlFor="irregular">Irregular</Label>
            </RadioContainer>
          )}
        </Container>
    )
}