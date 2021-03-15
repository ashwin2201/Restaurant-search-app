import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => { 
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price == $ || $$ || $$$
    return results.filter(results => {
        return results.price === price; //return if true; for every price in the array results return its filter
    });
  };

  return ( // empty placeholder helps to return multiple elements and no need for a wrapping view to constrain everything in
    <> 
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>Something went wrong!</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title = "Cost effective"/>
        <ResultsList results={filterResultsByPrice('$$')} title = "Bit pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title = "Big spender"/>
        <ResultsList results={filterResultsByPrice('$$$$')} title = "Reserved for the royals"/>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
