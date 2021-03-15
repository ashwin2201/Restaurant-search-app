// Creating a custom hook
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'singapore'
            }
        });
        setResults(response.data.businesses);
    }
        catch (e) {
        setErrorMessage('Something went wrong!')
    }
  };

  // {searchApi({term})} = BAD CODE!! As it will result in an infinite loop

    useEffect(() => { // this hook does not loop through, only performs search once
        searchApi('singapore')
    }, []); 

  return [searchApi, results, errorMessage];

};