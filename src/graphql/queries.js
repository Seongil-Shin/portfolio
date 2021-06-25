/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLanding = /* GraphQL */ `
  query GetLanding($id: ID!) {
    getLanding(id: $id) {
      id
      lines
      createdAt
      updatedAt
    }
  }
`;
export const listLandings = /* GraphQL */ `
  query ListLandings(
    $filter: ModelLandingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLandings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lines
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      name
      stack {
        id
        type
        image
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stack {
          id
          type
          image
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      summary
      detail
      image
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        summary
        detail
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
