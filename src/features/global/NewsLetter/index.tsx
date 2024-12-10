export default function NewsLetter() {
  return (
    <section className="bg-[url('/background/newsletter-bg.png')] bg-cover bg-no-repeat flex items-center justify-center">
      <div className="flex flex-col gap-4 xl:gap-14 py-4 xl:py-40 px-7">
        <h1 className="text-base font-bold text-white text-center xl:text-5xl">
          Sign up to our newletter
        </h1>
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Your e-mail"
            className="flex-1 px-4 py-0.5 xl:py-4 bg-white outline-none text-xs xl:text-xl border border-[#BCBCBC]"
          />
          <button
            type="button"
            className="capitalize font-medium text-xs xl:text-xl text-[#EEF2F5] bg-[#19130E] px-5 py-0.5"
          >
            submit
          </button>
        </div>
      </div>
    </section>
  );
}
