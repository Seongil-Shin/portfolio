/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLanding = /* GraphQL */ `
  mutation CreateLanding(
    $input: CreateLandingInput!
    $condition: ModelLandingConditionInput
  ) {
    createLanding(input: $input, condition: $condition) {
      id
      lines
      createdAt
      updatedAt
    }
  }
`;
export const updateLanding = /* GraphQL */ `
  mutation UpdateLanding(
    $input: UpdateLandingInput!
    $condition: ModelLandingConditionInput
  ) {
    updateLanding(input: $input, condition: $condition) {
      id
      lines
      createdAt
      updatedAt
    }
  }
`;
export const deleteLanding = /* GraphQL */ `
  mutation DeleteLanding(
    $input: DeleteLandingInput!
    $condition: ModelLandingConditionInput
  ) {
    deleteLanding(input: $input, condition: $condition) {
      id
      lines
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      title
      summary
      detail
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      title
      summary
      detail
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      title
      summary
      detail
      image
      createdAt
      updatedAt
    }
  }
`;
