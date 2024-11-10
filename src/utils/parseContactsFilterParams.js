// const parseValue = (value) => {
//   if (typeof value === 'string') return;

// import { query } from 'express';

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

  if (isFavourite(value)) return value;
  return;
};

export const parseFilterParams = (query) => {
  const { isFavourite } = query;

  const parsedIsFavourite = parseValue(isFavourite);

  return {
    isFavourite: parsedIsFavourite,
  };
};
