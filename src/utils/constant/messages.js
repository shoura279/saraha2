const generateMessage = (entity) => ({
  notFound: `${entity} not found`,
  failedToCreate: `Failed to create ${entity}`,
  failedToUpdate: `Failed to update ${entity}`,
  failedToDelete: `Failed to delete ${entity}`,
})
export const messages = {
  user: {
    ...generateMessage('User'),
    alreadyExist: 'User already exist',
  },
  messages: { ...generateMessage("Message") }
}