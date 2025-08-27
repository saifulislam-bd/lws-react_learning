export const useScrollCallback = (
  minimumOffset: number = 50, // Minimum height offset to actually execute the callback
  throttleLimit: number = 500, // Minimum time between calls in milliseconds
  callback: (scrollPosition: number) => void
) => {
  const [scrollPosition, setScrollPosition] = useState<number>(
    window.pageYOffset
  );

  const onThrottledScrollHandler = useCallback(() => {
    const currentScrollHeight = window.pageYOffset;
    setScrollPosition(currentScrollHeight);
    if (currentScrollHeight > minimumOffset) callback(scrollPosition);
  }, [minimumOffset, callback, scrollPosition]);

  const throttled = useThrottle(onThrottledScrollHandler, throttleLimit);

  useEffect(() => {
    window.addEventListener("scroll", throttled);

    // Return clause.
    return () => window.removeEventListener("scroll", throttled);
  }, [throttled]);
};