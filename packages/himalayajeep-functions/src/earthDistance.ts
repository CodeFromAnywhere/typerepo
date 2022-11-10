/**
 * returns the distance between two places (not very precise but it's very efficient)
 */
export function earthDistance(
  lat1: number,
  long1: number,
  lat2: number,
  long2: number,
  response?: "m" | "km"
) {
  const m = Math.PI / 180;

  lat1 = lat1 * m;
  long1 = long1 * m;
  lat2 = lat2 * m;
  long2 = long2 * m;

  var R = 6371e3; // metres of earth radius

  var x = (long2 - long1) * Math.cos((lat1 + lat2) / 2);
  var y = lat2 - lat1;

  var d = Math.sqrt(x * x + y * y) * R;

  return response === "m" ? Math.round(d / 10) * 10 : Math.round(d / 1000);
}
