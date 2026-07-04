export function validateFieldInputs(fields) {
  for (const [key, value] of Object.entries(fields)) {
    if (!value?.trim()) {
      throw new Error(`${key} is required`);
    }
  }
}