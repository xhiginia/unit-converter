

export const createConverter = (fromUnit, toUnit) => {
  const conversions = {
    lb: { kg: x => x * 0.45359237 },
    kg: { lb: x => x / 0.45359237 },

  };

  const convertFn = conversions[fromUnit]?.[toUnit];

  if (!convertFn) {
    throw new Error(`Conversion from ${fromUnit} to ${toUnit} not supported.`);
  }

  return (value) => {
    if (Array.isArray(value)) {
      return value.map(v => convertFn(Number(v)));
    }
    return convertFn(Number(value));
  };
};
