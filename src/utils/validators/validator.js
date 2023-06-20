//delete file after refactor messages
export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLength = (maxLength) => (value) => {
  if (value.length > maxLength)
    return `Max length is more than ${maxLength} symbols`;
  return undefined;
};
