import { useState, useEffect, useCallback } from 'react';
import { FruitType } from '../../types/ResponseType';
import { useApi } from '../../api/useApi';
import { useAccessTokenContext } from '../../Context';

export const useFruits = (url: string) => {
  const [fruits, setFruits] = useState<FruitType[]>([]);
  const { api } = useApi(url);
  const { access } = useAccessTokenContext();

  const fetchFruitsList = useCallback(async () => {
    try {
      const response = await api.getFruitsList(access);
      setFruits(response.data);
    } catch (error) {
      setFruits([]);
    }
  }, [api, access]);

  useEffect(() => {
    fetchFruitsList();
  }, [fetchFruitsList]);

  return { fruits };
};
