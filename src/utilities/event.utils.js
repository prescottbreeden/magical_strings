// findLastConcert :: Event -> string
export const findLastConcert = event => {
  const res = (event.performances ?? []).reduce((acc, curr) => {
    return Date.parse(curr.date) > Date.parse(acc) ? curr.date : acc;
  }, new Date().toString());
  return res;
};

// filterUpcomingEvents :: Event[] -> Event[]
export const filterUpcomingEvents = events =>
  events.filter(e => {
    return Date.parse(findLastConcert(e)) > Date.now();
  });

// filterUpcomingEvents :: Event[] -> Event[]
export const filterPastEvents = events =>
  events.filter(e => {
    return Date.parse(findLastConcert(e)) < Date.now();
  });

// getTime:: string -> number
export const getTime = time => {
  const h = Number(time.split(':')[0]);
  const pm = time.split('pm').length === 2;
  return pm ? h + 12 : h;
};

// upcomingPerformance :: Performance -> boolean
export const upcomingPerformance = p =>
  new Date(p.date).setHours(getTime(p.time)) > Date.now();
