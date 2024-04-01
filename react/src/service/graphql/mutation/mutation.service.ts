import { gql } from "@apollo/client";
import { ITask } from "../../../pages/Task/Task.model";
import { apolloClient } from "../graphql";


export const Mutation = (
  data: ITask,
  mutationName: string,
  type: string
) => {
  const receivedFields = Object.keys(data);
  const sendDataInMutation =  Object.entries(data)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join(',\n')
  const mutation = gql`
    mutation  {
        ${type + mutationName}(
            ${type + mutationName}Input: {${sendDataInMutation}}
        )
        { 
          ${receivedFields.join('\n')}
        }
    }`;
  const response = sendMutation(mutation);
  return response;
};

export const sendMutation = (mutation: any) => {
  return apolloClient.mutate({
    mutation: mutation,
  });
};
