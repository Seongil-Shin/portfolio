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
      image
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
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfileAboutme = /* GraphQL */ `
  query GetProfileAboutme($id: ID!) {
    getProfileAboutme(id: $id) {
      id
      line
      createdAt
      updatedAt
    }
  }
`;
export const listProfileAboutmes = /* GraphQL */ `
  query ListProfileAboutmes(
    $filter: ModelProfileAboutmeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileAboutmes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        line
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStack = /* GraphQL */ `
  query GetStack($id: ID!) {
    getStack(id: $id) {
      id
      image
      type
      title
      createdAt
      updatedAt
    }
  }
`;
export const listStacks = /* GraphQL */ `
  query ListStacks(
    $filter: ModelStackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        title
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
      title
      summary
      detail
      images
      github
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
        title
        summary
        detail
        images
        github
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
