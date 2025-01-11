export const formatMC = (value: number) => {
  const valueInThousands = value / 1000000000;

  const units = ["K", "M", "B", "T"];
  let unitIndex = 0;

  let formattedValue = valueInThousands;
  while (formattedValue >= 1000 && unitIndex < units.length - 1) {
    formattedValue /= 1000;
    unitIndex++;
  }

  const roundedValue = Math.round(formattedValue * 100) / 100;

  const finalValue =
    roundedValue % 1 === 0 ? roundedValue.toString() : roundedValue.toFixed(2);

  return finalValue + units[unitIndex];
};

export const parseBoolean = (value: unknown) => {
  if (!value) return false;

  if (value === "true") return true;

  if (value === "false") return false;

  return true;
};
