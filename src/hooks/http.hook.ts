// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useCallback } from 'react';
import { useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const request = useCallback(
    async (
      url: string,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' },
    ) => {
      try {
        setLoading(true);
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);

        setError(e.message);
        throw e;
      }
    },
    [],
  );

  return { request, error, loading };
};
