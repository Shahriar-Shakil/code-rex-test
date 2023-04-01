export const getFullName = (fName: string, lName: string) => {
  if (!fName || !lName) return "Loading...";
  return `${fName} ${lName}`;
};
