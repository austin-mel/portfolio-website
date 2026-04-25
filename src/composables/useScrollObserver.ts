import { onMounted, onBeforeUnmount } from 'vue';
 
/**
 * Attaches an IntersectionObserver to all elements matching the given selector
 * (scoped to the current component or document) and adds the `vis` class when visible.
 */
export function useScrollObserver(
  selector: string = '.anim-up,.num-card,.skill-cat,.tl-item,.feat-card',
  threshold: number = 0.08
) {
  let observer: IntersectionObserver | null = null;
 
  const observe = () => {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          }
        });
      },
      { threshold }
    );
    document.querySelectorAll(selector).forEach((el) => observer!.observe(el));
  };
 
  onMounted(() => {
    // Small delay to allow component DOM to settle
    setTimeout(observe, 80);
  });
 
  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });
 
  return { observe };
}