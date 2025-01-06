import { component$ } from "@builder.io/qwik";

export interface SecondaryButtonProps {
  text: string;
}

export const SecondaryButton = component$<SecondaryButtonProps>((props) => {
  return (
    <button
      class="
      w-min
      rounded-lg
      border border-portfolio-neutral-4
      bg-portfolio-neutral-1
      px-4 py-2
      font-russo-one text-[0.75rem] text-portfolio-magenta-2
      hover:border-portfolio-neutral-5 
      hover:text-portfolio-magenta-3
      hover:drop-shadow-portfolio-white-glow-sm
      active:bg-portfolio-magenta-3
      active:text-portfolio-neutral-1
      active:drop-shadow-portfolio-white-glow-lg
      md:text-[0.875rem]
      lg:text-[1rem]
    "
    >
      {props.text}
    </button>
  );
});
