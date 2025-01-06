import { component$ } from "@builder.io/qwik";

export interface SecondaryButtonProps {
  text: string;
}

export const SecondaryButton = component$<SecondaryButtonProps>((props) => {
  return (
    <button
      class="
      w-min
      px-4 py-2
      border border-portfolio-neutral-4 hover:border-portfolio-neutral-5
      rounded-lg
      bg-portfolio-neutral-1 active:bg-portfolio-magenta-3
      active:drop-shadow-portfolio-white-glow-lg
      text-[0.75rem] md:text-[0.875rem] lg:text-[1rem]
      text-portfolio-magenta-2 active:text-portfolio-neutral-1 
      font-russo-one
      hover:text-portfolio-magenta-3 hover:drop-shadow-portfolio-white-glow-sm 
    "
    >
      {props.text}
    </button>
  );
});
