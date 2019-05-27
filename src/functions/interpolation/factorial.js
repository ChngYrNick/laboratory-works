export default function factorial(num) {
  let res = 1;
  while (num > 0) {
    res *= num;
    --num;
  }
  return res;
}
