export function formatIsoDateToBrDateTime(isoDate?: string | null): string {
  /* Returns a placeholder if the input is null or empty.*/
  if (!isoDate) {
    return "--";
  }

  /* Creates a Date object from an ISO 8601 string.*/
  const date = new Date(isoDate);

  // Returns an error message if the date is invalid.
  if (isNaN(date.getTime())) {
    return "Data inválida ou não fornecida";
  }

  /* Uses UTC methods to obtain date components to avoid timezone adjustments.*/
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0"); /* Month is adjusted from 0-11 to 1-12.*/
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  /* Formats and returns the date in the format "dd/mm/yyyy at HHhMM".*/
  return `${day}/${month}/${year} às ${hours}h${minutes}`;
}
