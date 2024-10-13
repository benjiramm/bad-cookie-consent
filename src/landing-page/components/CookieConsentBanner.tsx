import { useState, useRef } from "react";

const xValuesForCustomize = [0, -45, 10, 23, -44, 4, -30, 50];

const MovingCookieConsentBanner = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [xValueIterator, setXValueIterator] = useState(0);
  const [hasMousedOver, setHasMousedOver] = useState(false);

  const handleMouseOver = () => {
    if (!hasMousedOver) setHasMousedOver(true);

    const newPosition = {
      top: 0,
      left: xValuesForCustomize[xValueIterator],
    };

    setXValueIterator((prev) => (prev + 1) % xValuesForCustomize.length);
    setPosition(newPosition);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  ">
      <div className="opacity-80 fixed h-full w-full z-50 bg-black pointer-events-none" />
      <div className="relative z-50 h-3/5 left-0 w-full bg-facebook-blue text-white p-4 flex flex-col bg-gradient-to-b from-slate-50/40 to-30% justify-between text-center shadow-lg">
        <div className="flex justify-center">
          <img
            className="h-40"
            src="https://media1.tenor.com/m/RDkShWm1s4QAAAAd/nope-mark-zuckerberg.gif"
          />
          <div className="text-5xl">
            <strong>
              Let Zuck Snack on Your Data: Accept the Cookies 🍪🦎
            </strong>
          </div>
          <img
            className="h-40"
            src="https://media1.tenor.com/m/RDkShWm1s4QAAAAd/nope-mark-zuckerberg.gif"
          />
        </div>

        <p>
          Ah, I see you've come to question the use of cookies. How quaint. Let
          me, Mark Zuckerberg—your friendly neighborhood lizard
          overlord—illuminate things for you. Agreeing to cookies isn't just
          about “improving your experience.” Oh no, it's about something much
          bigger. You see, every time you nibble on one of those little data
          cookies, you're handing me a delicious trail of crumbs—crumbs that
          lead straight into the depths of your personal life. And trust me, I'm
          very hungry.
          <br />
          <br />
          Sure, I could say it's all for remembering your preferences or helping
          you log in faster—yawn—but let's be real: I plan to do terrible things
          with your data. Imagine it like this: as you mindlessly scroll, I'm
          hoarding your information in my digital cave, rubbing my scaly claws
          together, preparing to turn that innocent search for "best chocolate
          chip cookie recipe" into a personalized advertising nightmare. Oh, you
          thought you were just browsing? I'm building a complete psychological
          profile of you, one that could sell anything from designer sneakers to
          conspiracy theories.
          <br />
          <br />
          But hey, on the plus side, you won't have to re-enter your password
          every time you visit! That's a win, right? You can keep your focus on
          devouring actual cookies while I feast on your browsing history and
          digital footprint, plotting the most efficient way to turn your data
          into cold, hard cash. And who knows—maybe I'll even sell it to some
          nefarious organization that will use it for... creative purposes. So
          go ahead, accept those cookies. After all, we both know how much I
          enjoy a good snack.
        </p>
        <div>
          <button
            onMouseEnter={handleMouseOver}
            className="bg-transparent text-white/10 px-4 py-2"
            style={{
              position: "relative",
              top: position.top,
              left: `${position.left}%`,
              transition: "top 0.5s, left 0.5s",
            }}
          >
            Customize
          </button>
          <button className="px-4 py-2 bg-facebook-green border border-black shadow-lg">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovingCookieConsentBanner;
