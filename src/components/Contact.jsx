import { useForm } from '@formspree/react';
import React from 'react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mgerbqlv');

  return (
    <div
      id="contact"
      className="bg-slate-50 text-2xl px-6 md:px-[10%] w-full py-28 md:flex md:gap-6 md:items-center"
    >
      {state.succeeded ? (
        <p>
          Thanks for taking your time to contact me, I will reach for you as
          soon as possible
        </p>
      ) : (
        <>
          <p className="text-center md:w-2/5 md:text-5xl md:text-left md:font-bold">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </p>
          <form
            className="flex flex-col gap-6 justify-center items-stretch mt-6 text-lg md:grow"
            onSubmit={handleSubmit}
          >
            <input
              className="px-4 py-3.5 border-b-2 bg-slate-50"
              placeholder="Full name"
              name="name"
              type="text"
            />
            <input
              className="px-4 py-3.5 border-b-2 bg-slate-50"
              placeholder="Email address"
              name="email"
              type="text"
            />
            <textarea
              className="bg-slate-200"
              rows="5"
              name="comments"
            ></textarea>
            <button
              disabled={state.submitting}
              className="btn-primary self-center md:self-start"
              type="submit"
            >
              Get in touch
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
