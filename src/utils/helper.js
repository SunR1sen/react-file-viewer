import { format } from "date-fns";

export const formatDate = (date, schema = "dd.MM.yyyy") => format(date, schema);

