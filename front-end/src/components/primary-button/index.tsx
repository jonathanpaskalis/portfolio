import { component$ } from "@builder.io/qwik";

export interface PrimaryButtonProps {
  text: string;
}

export const PrimaryButton = component$<PrimaryButtonProps>((props) => {
  return (
    <button
      class="
      w-min
      px-4 py-2
      border border-portfolio-yellow-2 hover:border-r-portfolio-yellow-3
      rounded-lg
      bg-portfolio-neutral-1 active:bg-portfolio-cyan-3
      hover:drop-shadow-portfolio-yellow-glow-sm active:drop-shadow-portfolio-yellow-glow-lg
      text-[0.75rem] md:text-[0.875rem] lg:text-[1rem]
      font-russo-one
      text-portfolio-cyan-2 hover:text-portfolio-cyan-3 active:text-portfolio-neutral-1
    "
    >
      {props.text}
    </button>
  );
});
