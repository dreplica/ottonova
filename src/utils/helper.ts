const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const getDays = (ISODate: string) => {
	const day = new Date(ISODate).getDay() ?? 1
	const result = [];
	let count = day;
	while (true) {
	  if(result.length === DAYS.length) break
	  if (count >= DAYS.length) count = 0;
	  result.push(DAYS[count]);
	  count += 1;
	}
	return result
  };

