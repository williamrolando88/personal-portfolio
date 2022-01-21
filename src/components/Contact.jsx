import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-slate-50 text-2xl px-6 md:px-[10%] w-full py-28 md:flex md:gap-6 md:items-center">
      <p className="text-center md:w-2/5 md:text-5xl md:text-left md:font-bold">
        I'm always interested in hearing about new projects, so if you'd like to
        chat please get in touch.
      </p>
      <form
        className="flex flex-col gap-6 justify-center items-stretch mt-6 text-lg md:grow"
        action="submit">
        <input
          className="px-4 py-3.5 border-b-2 bg-slate-50"
          placeholder="Full name"
          type="text"
        />
        <input
          className="px-4 py-3.5 border-b-2 bg-slate-50"
          placeholder="Email address"
          type="text"
        />
        <textarea className="bg-slate-200" rows="5" name="Comment"></textarea>
        <button className="btn-primary self-center md:self-start" type="submit">
          Get in touch
        </button>
      </form>
    </div>
  );
};

export default Contact;
