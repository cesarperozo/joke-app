export function randomClicksCount() {
  return 0; //Math.floor(Math.random(1000) * 1000);
}

export function randomDelay(min = 0, max = 60000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
