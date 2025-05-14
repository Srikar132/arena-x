import { AxiosRequestConfig } from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { api } from './utils';

export const fetchAPI = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const response = await api(url, options);
    return response.data;
  } catch (error: any) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};

export const useFetch = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchAPI(url, options);
      setData(result);
    } catch (error) {
      console.error(error);
      setError((error as Error).message || new Error('Unknown error').message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData().then(() => {});
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
