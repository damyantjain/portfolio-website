const useCalculateDuration = (target) => {
  const targetPosition = document.querySelector(target).offsetTop;
  const startPosition = window.scrollY;
  const distance = Math.abs(startPosition - targetPosition);
  const baseDuration = 400;
  const additionalDuration = Math.log(distance + 1) * 100;
  let duration = baseDuration + additionalDuration;
  const minDuration = 400;
  const maxDuration = 2000;
  duration = Math.min(Math.max(duration, minDuration), maxDuration);

  return duration;
};

export default useCalculateDuration;
