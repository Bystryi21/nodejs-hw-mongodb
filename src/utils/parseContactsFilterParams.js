// const parseValue = (value) => {
//   if (typeof value === 'string') return;

//   //   const parsedValue = parseInt(value);
//   if (Number.isNaN(value)) {
//     return value;
//   }
//   return parseValue;
// };

// export const parseContactsFilterParams = ({ isFavourite }) => {
//   const parsedIsFavourite = parseValue(isFavourite);

//   return { isFavourite: parsedIsFavourite };
// };

const parseValue = (value) => {
  const isString = typeof value === 'string';

  if (!isString) return;

  if (value === 'true') return true;
  if (value === 'false') return false;
  return;
};

export const parseContactsFilterParams = (query) => {
  const { isFavourite } = query;

  const parsedIsFavourite = parseValue(isFavourite);

  return {
    isFavourite: parsedIsFavourite,
  };
};
