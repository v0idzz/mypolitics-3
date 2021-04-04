import { DocumentNode, useApolloClient } from "@apollo/client";
import * as R from "ramda";
import { DeepPartial } from "@typeDefs/common";

interface UseEntity<T> {
  data: T;
  getCurrentData(): T;
  update(value: DeepPartial<T>): void;
}

interface UseEntityInput {
  id: string;
  name: string;
  document: DocumentNode;
}

export type UseEntityFunction = <T>(input: UseEntityInput) => UseEntity<T>;
type UseEntityLazy = [UseEntityFunction];

export const useEntityLazy = (): UseEntityLazy => {
  const client = useApolloClient();
  const getEntity: UseEntityFunction = <T>({ id, name, document }) => {
    const fragment = {
      id: `${name}:${id}`,
      fragment: document,
    };

    const getCurrentData = () => client.readFragment<T>(fragment);

    const update = (updateData: DeepPartial<T>) => {
      const currentData = getCurrentData();
      const data = R.mergeDeepRight(currentData, updateData);

      client.writeFragment<T>({
        ...fragment,
        data,
      });
    };

    return {
      data: client.readFragment<T>(fragment),
      update,
      getCurrentData,
    };
  };

  return [getEntity];
};

const useEntity: UseEntityFunction = <T>(input) => {
  const [getEntity] = useEntityLazy();

  return getEntity(input);
};

export default useEntity;
