export function convertMinutesToSeconds(time: string) {
  const [minutes, seconds] = time.split(':');
  return Number(minutes) * 60 + Number(seconds);
}
// Formato padrão 4:23.75
