export const empty = (value: any) => {
  if (!Array.isArray(value)) {
    if (Object.keys(value).length === 0) {
      return true;
    }
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return true;
    }
  }

  if (typeof value === 'string') {
    if (value.length === 0) {
      return true;
    }
  }

  if (!value) {
    return true;
  }

  return false;
};

export const maskLetters = (text: string) => {
  return text.replace(/[^ A-Za-zÀ-ÖØ-öø-ÿ]/g, '');
};