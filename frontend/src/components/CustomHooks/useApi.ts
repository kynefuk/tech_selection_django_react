import { useMemo } from 'react';
import { DefaultApi } from '../../Api';

export const useApi = (url: string) => {
  const api = useMemo(() => {
    return new DefaultApi(url);
  }, [url]);

  return { api };
};
