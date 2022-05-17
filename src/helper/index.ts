export const arrayToString = (arr) =>
    Array.isArray(arr) ? arr.map((item) => item.name).join(",") : "";
