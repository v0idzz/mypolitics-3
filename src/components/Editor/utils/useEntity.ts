import { DocumentNode, useApolloClient } from "@apollo/client";

interface UseEntity<T> {
  data: T;
  update(value: T): void;
}

interface UseEntityInput {
  id: string;
  name: string;
  document: DocumentNode;
}

const useEntity = <T>({ id, name, document }: UseEntityInput): UseEntity<T> => {
  const client = useApolloClient();
  const fragment = {
    id: `${name}:${id}`,
    fragment: document,
  };

  const update = (value) =>
    client.writeFragment<T>({
      ...fragment,
      data: value,
    });

  const data = client.readFragment<T>(fragment);

  return {
    data,
    update,
  };
};

export default useEntity;
