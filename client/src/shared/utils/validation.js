export const is = {
  match: (testValue, validationValue) => {
    if (!validationValue) return true;
    if (validationValue instanceof RegExp) {
      return validationValue.test(testValue);
    }
    return testValue === validationValue;
  },
  required: value => !!value && value.trim().length > 0,
  email: value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
  url: value => /^https?:\/\/.+/.test(value),
  minLength: (value, minLength) => value && value.length >= minLength,
  maxLength: (value, maxLength) => !value || value.length <= maxLength,
  characterLimit: (value, limit) => !value || value.length <= limit,
};

export const generateErrors = (data, schema) => {
  const errors = {};
  Object.keys(schema).forEach(fieldName => {
    const rules = schema[fieldName];
    if (rules) {
      const fieldValue = data[fieldName];
      Object.keys(rules).forEach(ruleName => {
        const ruleValue = rules[ruleName];
        if (!is[ruleName](fieldValue, ruleValue)) {
          if (!errors[fieldName]) {
            errors[fieldName] = [];
          }
          errors[fieldName].push(getErrorMessage(ruleName, ruleValue));
        }
      });
    }
  });
  return errors;
};

const getErrorMessage = (ruleName, ruleValue) => {
  const errorMessages = {
    required: 'This field is required',
    email: 'Must be a valid email',
    url: 'Must be a valid URL',
    minLength: `Must be at least ${ruleValue} characters`,
    maxLength: `Must be no more than ${ruleValue} characters`,
    characterLimit: `Must be no more than ${ruleValue} characters`,
  };
  return errorMessages[ruleName] || 'Invalid value';
};

export const createValidator = (validationSchema) => {
  return (data) => generateErrors(data, validationSchema);
};

// Character limit constants
export const CHARACTER_LIMITS = {
  ISSUE_TITLE: 255,
  ISSUE_DESCRIPTION: 2000,
};

// Helper function to get character count info
export const getCharacterCountInfo = (text, limit) => {
  const currentLength = text ? text.length : 0;
  const remaining = limit - currentLength;
  const isOverLimit = currentLength > limit;
  const isNearLimit = remaining <= Math.floor(limit * 0.1); // Within 10% of limit
  
  return {
    currentLength,
    remaining,
    limit,
    isOverLimit,
    isNearLimit,
    percentage: (currentLength / limit) * 100,
  };
};