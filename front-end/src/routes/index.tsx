import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        <div class="flex flex-col">
        <span class="font-montserrat font-black">
            Happy coding.
          </span>
          <span class="font-montserrat font-extrabold">
            Happy coding.
          </span>
          <span class="font-montserrat font-bold">
            Happy coding.
          </span>
          <span class="font-montserrat font-semibold">
            Happy coding.
          </span>
          <span class="font-montserrat font-medium">
            Happy coding.
          </span>
          <span class="font-montserrat">
            Happy coding.
          </span>
          <span class="font-montserrat font-light">
            Happy coding.
          </span>
          <span class="font-montserrat font-extralight">
            Happy coding.
          </span>
          <span class="font-montserrat font-thin">
            Happy coding.
          </span>
          <span class="font-montserrat">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-black">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-extrabold">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-bold">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-semibold">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-medium">
            Happy coding.
          </span>
          <span class="font-montserrat-italic">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-light">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-extralight">
            Happy coding.
          </span>
          <span class="font-montserrat-italic font-thin">
            Happy coding.
          </span>
          <span class="font-russo-one">
            Happy coding.
          </span>
        </div>
        
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
