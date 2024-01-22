import { useState } from 'react';

type RequestOptions = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: HeadersInit;
  body?: BodyInit;
};

type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};

const baserUrl = process.env.NEXT_PUBLIC_BASEURL;

const useFetch = <T>() => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const fetchData = async (url: string, options?: RequestOptions) => {
    try {
      setResponse((prev) => ({ ...prev, isLoading: true }));

      const requestOptions: RequestOptions = {
        method: options?.method || 'GET',
        headers: options?.headers,
        body: options?.body,
      };

      const res = await fetch(`${baserUrl}/api/${url}`, requestOptions);

      if (!res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }

      const data = await res.json();
      setResponse({ data, error: null, isLoading: false });
    } catch (error) {
      setResponse({
        data: null,
        error: (error as Error).message,
        isLoading: false,
      });
    }
  };

  return { ...response, fetchData };
};

export default useFetch;
