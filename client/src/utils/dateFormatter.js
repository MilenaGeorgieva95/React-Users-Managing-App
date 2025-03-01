export const dateFormatter = (isoDate) => {
  // const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  const dateOptions = { month: "long", day: "numeric", year: "numeric" };
  return new Date(isoDate).toLocaleString("en-US", dateOptions);
};
