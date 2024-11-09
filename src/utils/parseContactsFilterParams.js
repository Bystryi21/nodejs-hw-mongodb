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

  const isFavourite = (value) => ['true', 'false'].includes(value);

  return isFavourite(value);
};

export const parseContactsFilterParams = (query) => {
  const { isFavourite } = query;

  const parsedIsFavourite = parseValue(isFavourite);

  return {
    isFavourite: parsedIsFavourite,
  };
};
