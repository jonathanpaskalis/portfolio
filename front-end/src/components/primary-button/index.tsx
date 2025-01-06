import { component$ } from "@builder.io/qwik";

export interface PrimaryButtonProps {
  text: string;
}

export const PrimaryButton = component$<PrimaryButtonProps>((props) => {
  return (
    <button
      class="
      w-min
      rounded-lg
      border border-portfolio-yellow-2
      bg-portfolio-neutral-1
      px-4 py-2
      font-russo-one text-[0.75rem] text-portfolio-cyan-2
      hover:border-r-portfolio-yellow-3
      hover:text-portfolio-cyan-3
      hover:drop-shadow-portfolio-yellow-glow-sm
      active:bg-portfolio-cyan-3
      active:text-portfolio-neutral-1
      active:drop-shadow-portfolio-yellow-glow-lg
      md:text-[0.875rem]
      lg:text-[1rem]
    "
    >
      {props.text}
    </button>
  );
});
