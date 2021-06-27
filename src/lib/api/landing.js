import { API } from "aws-amplify";

const getStrings = `query MyQuery {
    listLandings {
      items {
        id
        lines
      }
    }
  }`;

export const getLandingStrings = async () => {
   const strings = await API.graphql({ query: getStrings });
   return strings;
};

const updateStrings = `
mutation UpdateLanding(
  $input: UpdateLandingInput!
) {
  updateLanding(input: $input) {
    lines
  }
}
`;

export const updateLandingStrings = async (lines) => {
   const strings = await API.graphql({
      query: updateStrings,
      variables: { input: lines },
   });
   return strings;
};
