import { useEffect, useState } from 'react';

/*Idea is that this hook accept diffrent hepler methods to execute. Also probably we need to 
memoize this hook? I had some problems with to many request with this approach. Maybe you
have some better idea how to handle this instead of passing method? Maybe some switch 
statement here, but problem is when you need to pass helper fn with arguments like recipe_id */

export function useFetch(method) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    method()
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [method]);

  return [data, !error && !data, error];
}

export default useFetch;
