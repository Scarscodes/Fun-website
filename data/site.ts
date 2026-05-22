export type Tag = "weird" | "useful" | "art" | "chill" | "lol";

export interface Site {
  title: string;
  url: string;
  href: string;
  desc: string;
  tag: Tag;
}

export const TAG_LABELS: Record<Tag, string> = {
  weird: "weird",
  useful: "actually useful",
  art: "art & creative",
  chill: "chill",
  lol: "lol",
};

export const SITES: Site[] = [
  {
    title: "This is a Motherfucking Website",
    url: "thebestmotherfucking.website",
    href: "https://thebestmotherfucking.website",
    desc: "A rant about how the web got too complicated. Pure HTML, no BS.",
    tag: "weird",
  },
  {
    title: "No Hello",
    url: "nohello.net",
    href: "https://nohello.net",
    desc: "Please don't say just 'hello' in chat. Get to the point. A manifesto.",
    tag: "useful",
  },
  {
    title: "Do Nothing for 2 Minutes",
    url: "donothingfor2minutes.com",
    href: "https://www.donothingfor2minutes.com",
    desc: "Just listen to the waves. Don't touch anything for 120 seconds.",
    tag: "chill",
  },
  {
    title: "The Useless Web",
    url: "theuselessweb.com",
    href: "https://theuselessweb.com",
    desc: "Press a button. Get sent to a completely random useless website.",
    tag: "weird",
  },
  {
    title: "Patatap",
    url: "patatap.com",
    href: "https://www.patatap.com",
    desc: "Press keys on your keyboard. Make music and animations. Instant joy.",
    tag: "art",
  },
  {
    title: "GeoGuessr",
    url: "geoguessr.com",
    href: "https://www.geoguessr.com",
    desc: "You're dropped somewhere on Google Street View. Guess where you are.",
    tag: "useful",
  },
  {
    title: "Find the Invisible Cow",
    url: "findtheinvisiblecow.com",
    href: "https://findtheinvisiblecow.com",
    desc: "Move your mouse to find an invisible cow. Your speaker will guide you.",
    tag: "lol",
  },
  {
    title: "The Onion",
    url: "theonion.com",
    href: "https://www.theonion.com",
    desc: "America's finest news source. Completely fake, frequently more accurate than real news.",
    tag: "lol",
  },
  {
    title: "Pointer Pointer",
    url: "pointerpointer.com",
    href: "https://pointerpointer.com",
    desc: "Stop your mouse. It finds a photo of someone pointing at exactly your cursor.",
    tag: "weird",
  },
  {
    title: "Neal.fun",
    url: "neal.fun",
    href: "https://neal.fun",
    desc: "A collection of beautiful little interactive toys. Spend the whole day here.",
    tag: "art",
  },
  {
    title: "Draw a Stickman",
    url: "drawastickman.com",
    href: "https://www.drawastickman.com",
    desc: "Draw a little dude and watch him go on an adventure you help create.",
    tag: "art",
  },
  {
    title: "Dog API",
    url: "dog.ceo/dog-api",
    href: "https://dog.ceo/dog-api/",
    desc: "Just random dog pictures. There is literally no other purpose. Perfect.",
    tag: "lol",
  },
  {
    title: "100,000 Stars",
    url: "stars.chromeexperiments.com",
    href: "https://stars.chromeexperiments.com",
    desc: "A 3D map of 100,000 stars. Zoom out and feel appropriately tiny.",
    tag: "chill",
  },
  {
    title: "Is It Christmas?",
    url: "isitchristmas.com",
    href: "https://isitchristmas.com",
    desc: "Answers one question. Returns YES or NO. Updates once a year.",
    tag: "lol",
  },
  {
    title: "Chrome Music Lab",
    url: "musiclab.chromeexperiments.com",
    href: "https://musiclab.chromeexperiments.com",
    desc: "Google made a music playground. Unexpectedly good and endlessly fun.",
    tag: "art",
  },
  {
    title: "The Quiet Place",
    url: "thequietplace.com",
    href: "http://thequietplace.com",
    desc: "Puts your phone down and breathes with you. Surprisingly calming.",
    tag: "chill",
  },
  {
    title: "Brilliant",
    url: "brilliant.org",
    href: "https://brilliant.org",
    desc: "Actually learn math and science through puzzles. Sneakily educational.",
    tag: "useful",
  },
  {
    title: "Hacker News",
    url: "news.ycombinator.com",
    href: "https://news.ycombinator.com",
    desc: "Tech nerds arguing about startups and compilers since 2007. Strangely addictive.",
    tag: "useful",
  },
];
