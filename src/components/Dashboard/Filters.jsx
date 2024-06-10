// import { Input, Select, Container, Radio, RadioContainer, Label } from "./Filters.styled";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { selectToken } from "../../redux/auth/selectors";
// import { selectCategories } from "../../redux/words/selectors";
// import { fetchCategories } from "../../redux/words/operation";
// import { setFilter, setCategory } from "../../redux/words/slice";
// import { useEffect } from "react";
// import { useState } from "react";
// import debounce from 'lodash/debounce';

// export const Filters = () =>{

//     const token = useSelector(selectToken);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchCategories({ token }));
//       }, [dispatch, token]);
    
//       const categories = useSelector(selectCategories);
//       const [selectedCategory, setSelectedCategory] = useState('');
//       const [keyword, setKeyword] = useState('');
//       const [filterword, setFilterword] = useState('');

//       const handleKeywordChange = (event) => {
//         const keyword = event.target.value.trim();
//         setKeyword(keyword);
//         dispatch(setFilter(keyword));
//       };
    
    
    
//       const handleCategoryChange = event => {
//         setSelectedCategory(event.target.value);
//         const filterword = event.target.value;
//         setFilterword(filterword);
//         dispatch(setCategory(filterword));
//       };
    
  
//     return(
//         <Container>
//         <Input placeholder="Find the word"
//         value={keyword}
//         onChange={handleKeywordChange}
//         />
//         <Select
//             id="categories"
//             name="categories"
//             onChange={handleCategoryChange}
//           >
//             <option value="" ></option>
//             {categories &&
//               categories.map(category => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//           </Select>
//           {selectedCategory === 'verb' && (
//             <RadioContainer>
//               <Radio
//                 type="radio"
//                 name="verb"
//                 id="regular"
//                 value="false"
//               ></Radio>
//               <Label htmlFor="regular">Regular</Label>
//               <Radio
//                 type="radio"
//                 name="verb"
//                 id="irregular"
//                 value="true"
                

//               ></Radio>
//               <Label htmlFor="irregular">Irregular</Label>
//             </RadioContainer>
//           )}
//         </Container>
//     )
// }

import { Input, Select, Container, Radio, RadioContainer, Label } from "./Filters.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectToken } from "../../redux/auth/selectors";
import { selectCategories } from "../../redux/words/selectors";
import { fetchCategories } from "../../redux/words/operation";
import { setFilter, setCategory } from "../../redux/words/slice";
import { useEffect, useState, useMemo, useCallback } from "react";
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

  const debouncedSetFilter = useMemo(
    () => debounce((keyword) => dispatch(setFilter(keyword)), 300),
    [dispatch]
  );

  const handleKeywordChange = (event) => {
    const keyword = event.target.value.trim();
    setKeyword(keyword);
    debouncedSetFilter(keyword);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    dispatch(setCategory(event.target.value));
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
      <Select
        id="categories"
        name="categories"
        onChange={handleCategoryChange}
      >
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
          <Radio
            type="radio"
            name="verb"
            id="regular"
            value="false"
          />
          <Label htmlFor="regular">Regular</Label>
          <Radio
            type="radio"
            name="verb"
            id="irregular"
            value="true"
          />
          <Label htmlFor="irregular">Irregular</Label>
        </RadioContainer>
      )}
    </Container>
  );
};
