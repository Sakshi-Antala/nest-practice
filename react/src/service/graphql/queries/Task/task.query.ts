import { gql } from "@apollo/client";
import { TASK_FIELDS } from "./task.fragment";

export const GET_All_TASK = gql`
    ${TASK_FIELDS}
    query getAllTask {
        getAllTask {
            ...TaskFields
        }
    }
`;

export const GET_TASK_BY_ID = gql`
    ${TASK_FIELDS}
    query getTaskById($id: Float!) {
        getTaskById(id: $id) {
            ...TaskFields
        }
    }
`;
