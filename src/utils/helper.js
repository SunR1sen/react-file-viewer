import { format, parse } from "date-fns";

export const formatDate = (date, schema = "dd/MM/yy") => {
  const newDate = parse(date, schema, new Date());
  return format(newDate, "dd.MM.yy");
};
