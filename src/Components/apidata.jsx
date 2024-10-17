import React, { useEffect } from 'react';
import axios from "axios";
import { Context } from './contextProvider';
import { useContext } from 'react';

function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

export default function Apidata() {
  const { cardData, setCardData, setError, setLoading,setNewCardData } = useContext(Context);

  useEffect(() => {
    setLoading(true);

    const debouncedApiCall = debounce(async () => {
      const url = "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc";
      try {
        const response = await axios.get(url);
        setCardData(response.data);
        setNewCardData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 1000);

    debouncedApiCall();

    return () => {
      setLoading(false);
    };

  }, [setCardData, setError, setLoading]);

  console.log(cardData);

  return null;
}
