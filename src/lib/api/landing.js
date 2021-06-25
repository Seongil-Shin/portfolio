import { API } from "aws-amplify";
import * as queries from "../../graphql/queries";

const getStrings = `query MyQuery {
    listLandings {
      items {
        lines
      }
    }
  }`;
export const getLandingStrings = async () => {
   const strings = await API.graphql({ query: getStrings });
   return strings;
};
