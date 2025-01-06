import { component$ } from '@builder.io/qwik';

export interface SecondaryButtonProps {
  text: string;
}

export const SecondaryButton = component$<SecondaryButtonProps>((props) => {
  return (
    <button class="
      w-min
      py-2 px-4
      border border-portfolio-neutral-4 hover:border-portfolio-neutral-5
      rounded-lg
      bg-portfolio-neutral-1 active:bg-portfolio-magenta-3
      hover:drop-shadow-portfolio-white-glow-sm active:drop-shadow-portfolio-white-glow-lg
      text-[0.75rem] md:text-[0.875rem] lg:text-[1rem]
      font-russo-one
      text-portfolio-magenta-2 hover:text-portfolio-magenta-3 active:text-portfolio-neutral-1
    ">
      {props.text}
    </button>
  );
});
