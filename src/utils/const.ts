import { DropdownSideNavContentProps } from "./interface";

export const pbeDropdown = [
  {
    title: 'PBE Sign-Up Questions',
    sections: [
      {
        title: 'WHY IS THE PBE ONLY AVAILABLE IN NORTH AMERICA?',
        paragraphs: [
          "We want to be sure that any new features—even the ones we're testing—make the right first impression. To that end, we decided to start our experiment in North America, where most of our developers live. This lets us quickly react to feedback and efficiently implement updates on a regular basis. With the location locked in, we considered what would be best for players. As much as we wanted to open the doors to Agents from other regions, the resulting latency would ruin their experience and make it difficult to gather good data about new content.",
          "While there are other reasons (cost limitations, network logistics, etc.), we ultimately chose the path that would provide the best experience to a limited group of players, so we could use what we learned to benefit Agents around the world."
        ],
      },
      {
        title: 'WHAT ARE THE SIGN-UP REQUIREMENTS?',
        paragraphs: [
          'Your Live VALORANT account must:',
        ],
        list: [
          'Have no current bans or restrictions.',
          'Must be in the North America region, and you must consistently play from there.',
        ],
      },
      {
        title: 'IMPORTANT NOTES',
        paragraphs: [
          'Just keep in mind that meeting these requirements does not guarantee you\'ll be recruited.',
          'Also, joining the PBE does <b>not</b> create a PBE-only account! You\'ll be using your current VALORANT account to log in, so be sure to sign up using the account you want to use. This means if you\'re banned on the PBE, you\'ll also be banned on Live, and vice versa.',
        ],
      },
    ],
  },
  {
    title: 'PBE Client and Account Questions',
    sections: [
      {
        title: 'WHERE CAN I DOWNLOAD THE PBE CLIENT?',
        paragraphs: [
          `You can <a href='http://playvalorant.com/en-us/pbe-download/' class='font-bold hover:text-mainRed border-b border-b-mainRed'>download the PBE client here</a>. But just because you have it downloaded and installed, doesn't mean you'll be able to access the PBE—you'll still need an active account with a PBE invite to log in.`,
        ],
      },
      {
        title: 'WHY CAN’T I LOG IN TO THE PBE?',
        paragraphs: [
          'If <b>Platform is unavailable</b> comes up when logging in to the PBE, that means the environment is offline or down for maintenance.',
          `If you see <b>You are unable to patch due to lack of permissions</b>, then you don't have the credentials to access the PBE.`,
          `<b>Forget your password?</b> If I were human, I'd say "Happens to the best of us!". But my mind is a computational system realized by complex algorithms that prevents me from forgetting anything. So I'll just give you some advice—you can always use the forgotten password link to reset your password!`,
          `<b>Having a different problem</b>? <a href='https://support-valorant.riotgames.com/hc/requests/new' class='font-bold hover:text-mainRed border-b border-b-mainRed'>Submit a ticket</a>, and we'll help you out!`
        ]
      },
      {
        title: 'WHY IS THE PBE DOWN?',
        paragraphs: [
          `You might be trying to access the server on a day it's unavailable. The PBE is only available <b>one weekend per patch</b>, which means every other weekend. You'll only be able to log in on days it's available.`,
        ],
      },
      {
        title: 'HOW WILL I KNOW IF THE PBE IS AVAILABLE?',
        paragraphs: [
          `The PBE is only available <b>one weekend per patch</b>, which means every other weekend. But PBE availability isn't guaranteed with every patch!`,
          `Want to keep your finger on the PBE's pulse? Check out the <a href='https://www.reddit.com/r/VALORANTPBE' class='font-bold hover:text-mainRed border-b border-b-mainRed'>subreddit</a> for a schedule. The best laid plans of simulated environments and Agents often go sideways, so there may be unexpected changes to availability along the way.`,
          `If you see <b>Platform is unavailable</b> when you try to log in, the PBE is currently unavailable.`,
        ],
      },
      {
        title: `I USED TO HAVE ACCESS TO THE PBE, BUT NOW I DON'T. WHAT HAPPENED?`,
        paragraphs: [
          `Seeing <b>You are unable to patch due to lack of permissions</b> when logging in? A couple of things could be going on. Your access may have been revoked for bad behavior. Or... that you simply haven't logged in to the PBE in a very long time and you'll need to reapply.`
        ],
      },
      {
        title: `WHY AM I IN A LOGIN QUEUE?`,
        paragraphs: [
          `Agents are often excited to see what's new in the PBE, so when new content is released, we may have more recruits than we know what to do with. To handle this influx of interest, you may be placed in a queue before you can enter the PBE.`
        ],
      },
      {
        title: `CAN I SHARE MY PBE ACCOUNT?`,
        paragraphs: [
          `That's a negatory, good buddy. Each Agent must maintain their own account. Remember—your PBE account is the same as your Live account. Sharing it could get you permanently suspended (and nobody wants that!).`
        ],
      },
      {
        title: `WHERE CAN I FIND INFORMATION ON PBE UPDATES?`,
        paragraphs: [
          `A limited summary of changes and new features will be posted on the <a href='https://www.reddit.com/r/VALORANTPBE' class='font-bold hover:text-mainRed border-b border-b-mainRed'>VALORANT PBE Subreddit</a>.`
        ],
      },
    ],
  },
  {
    title: 'PBE Platform and Gameplay Questions',
    sections: [
      {
        title: 'HOW IS PLAYER BEHAVIOR MONITORED ON THE PBE?',
        paragraphs: [
          "Don’t worry—we'll be keeping an eye on reports made against accounts in the PBE.",
          "As you know, we hold our Agents to the highest standards—so <a href='https://support-valorant.riotgames.com/hc/articles/360044270174' class='font-bold hover:text-mainRed border-b border-b-mainRed'>be on your best behavior</a>! If you witness anyone besmirching the Agent name with less-than-appropriate conduct, be sure to report them through the client (or <a href='https://support-valorant.riotgames.com/hc/en-us/articles/360050787693' class='font-bold hover:text-mainRed border-b border-b-mainRed'>after the game</a>, if you forget!)."
        ],
      },
      {
        title: 'WHAT ARE THE CONSEQUENCES OF BAD BEHAVIOR?',
        paragraphs: [
          `Anyone caught behaving inappropriately on the PBE will face consequences similar to those found on the Live server. If an Agent conducts themselves poorly on Live, their access to the PBE could be temporarily—or even permanently—revoked. And if you're banned on one, you'll be banned on the other.`,
          `I also overheard Killjoy saying she might use the PBE to test out some new, uh, repercussions, and I for one wouldn't want to wind up being her test subject... So please do your fellow Agents proud by displaying the <b>valor</b> in VALORANT!`
        ],
      },
      {
        title: 'HOW DO I REPORT BUGS?',
        paragraphs: [
          `You can report bugs, as well as view previously reported ones, on the handy-dandy <a href='https://www.reddit.com/r/VALORANTPBE' class='font-bold hover:text-mainRed border-b border-b-mainRed'>VALORANT PBE Subreddit</a>. While I may have mastered all of the world's languages, our developers have not, so we'll only be accepting bug reports in English. If the bug you found has already been reported, please comment on that thread instead of creating a new one—I like to keep things tidy!`,
        ],
      },
      {
        title: 'DO I HAVE TO BUY ANYTHING IN THE PBE?',
        paragraphs: [
          `Nope! Everything in the PBE is free. You won't find any new gun skins before they're available on the Live server, though. Also, what's available on the PBE may change or be limited at any given time for testing purposes.`,
        ],
      },
      {
        title: 'WHY IS MY PING SO HIGH?',
        paragraphs: [
          `The PBE servers are hosted in North America. If you aren't playing from North America, you'll likely experience higher-than-normal ping.`,
        ],
      },
      {
        title: 'MATCHMAKING TAKES A LONG TIME AND I WIND UP IN UNFAIR MATCH-UPS!',
        paragraphs: [
          `The number of Agents in the PBE is small compared to the regional servers, so queues sometimes take longer to populate. This is also why you may wind up in uneven match-ups.`,
        ],
      },
    ],
  },
]

export const pbeContent = {
  title: 'VALORANT PUBLIC BETA ENVIRONMENT',
  sections: [
    {
      title: 'VALORANT PUBLIC BETA ENVIRONMENT',
      paragraphs: [
        'Greetings! The Public Beta Environment, or PBE for short, is looking for intrepid Agents like yourself to test cutting edge VALORANT content. So what is a PBE? Well, it\'s a server where you can try out upcoming features that aren\'t (and may never be) implemented in-game.',
        'You\'ll be able to break in new maps, assess new Agents, and more! Better yet, we\'ll try to squash any pesky bugs you find along the way to ensure our shiny new content is well-tuned and (hopefully) glitch-free before it goes live.',
      ],
    },
    {
      title: 'WHAT ARE THE SIGN-UP REQUIREMENTS?',
      paragraphs: [
        'Your Live VALORANT account must:',
      ],
      list: [
        'Have no current bans or restrictions.',
        'Must be in the North America region, and you must consistently play from there.',
      ],
    },
    {
      title: 'IMPORTANT NOTES',
      paragraphs: [
        'Just keep in mind that meeting these requirements does not guarantee you\'ll be recruited.',
        'Also, joining the PBE does <b>not</b> create a PBE-only account! You\'ll be using your current VALORANT account to log in, so be sure to sign up using the account you want to use. This means if you\'re banned on the PBE, you\'ll also be banned on Live, and vice versa.',
      ],
    },
  ],
};

export const GameInfoDropDownContent:DropdownSideNavContentProps[] = [
  {
    id: 1,
    label: 'agents',
    link: '/agents'
  },
  {
    id: 2,
    label: 'maps',
    link: '/maps'
  },
  {
    id: 3,
    label: 'arsenal',
    link: '/arsenal'
  },
  {
    id: 4,
    label: 'premier',
    link: '/premier'
  },
]

export const OurSocialDropdownContent:DropdownSideNavContentProps[] = [
  {
    id: 1,
    label: 'x',
    link: 'https://twitter.com/valorant'
  },
  {
    id: 2,
    label: 'youtube',
    link: 'https://www.youtube.com/@valorant'
  },
  {
    id: 3,
    label: 'instagram',
    link: 'https://instagram.com/valorant'
  },
  {
    id: 4,
    label: 'tiktok',
    link: 'https://www.tiktok.com/@valorant'
  },
  {
    id: 5,
    label: 'facebook',
    link: 'https://www.tiktok.com/@valorant'
  },
  {
    id: 6,
    label: 'discord',
    link: 'https://www.tiktok.com/@valorant'
  },
]

export const SupportDropdownContent:DropdownSideNavContentProps[] = [
  {
    id: 1,
    label: 'specs',
    link: '/specs'
  },
  {
    id: 2,
    label: 'support',
    link: 'https://support-valorant.riotgames.com/hc/en-us/'
  },
  {
    id: 3,
    label: 'community code',
    link: '/valorant-community-code'
  },
]

export const News = [
  {
    title: 'VALORANT Community Code',
    description: 'Here are our expectations of you as we build this long-lasting community together.',
    type: 'Announcement',
    date: '6/2/2020',
    image: "/agent_community.avif",
    link: '/valorant-community-code'
  },
  {
    title: `Beginer's Guide`,
    description: 'Wanna get good at VALORANT? Here’s your first stop.',
    type: 'Announcement',
    date: '8/2/2024',
    image: "/bg/news/bg_guide.avif",
    link: `/news/Beginer's Guide`
  },
  {
    title: `VCT Game Changers Champinship Merch Collection`,
    description: 'Limmited-edition merch drops 11 AM PT on Nov 22!',
    type: 'Announcement',
    date: '11/22/2023',
    image: "/bg/news/bg_merch.avif",
    link: 'https://merch.riotgames.com/en-us/collection/VALORANT/'
  },
  {
    title: `No more hiding // Story Trailer - Valorant`,
    description: 'Cypher and Deadlock’s peek behind the KINGDOM curtain is just the beginning. Keep your eyes open for more secrets and details to be revealed between now and August 26.',
    type: 'Announcement',
    date: '8/15/2023',
    image: "/bg/news/bg_trailers.avif",
    link: 'https://www.youtube.com/shorts/4DEpV4EGPdw'
  },
  {
    title: `UNITED TOGETHER // China Launch Official Cinematic - VALORANT`,
    description: 'Unite together. Save the world. Celebrate our China launch by taking a look back at VALORANT Protocol’s first steps into Haven.',
    type: 'Announcement',
    date: '7/12/2023',
    image: "/bg/news/bg_china_trailer.avif",
    link: 'https://www.youtube.com/watch?v=F5qEtdVtsvo'
  },
  {
    title: `UNMADE // Episode 7 Cinematic - VALORANT`,
    description: 'Become a part of VALORANT’s next bold steps in Episode 07: EVOLUTION.',
    type: 'Announcement',
    date: '6/25/2023',
    image: "/bg/news/bg_unmage.avif",
    link: 'https://www.youtube.com/watch?v=sUoSPryMZr0'
  },
  {
    title: `PRESS PLAY  // Radiant Entertainment System Skin Trailer - VALORANT`,
    description: 'Every game’s an opportunity for a new high score with the Radiant Entertainment System–just press play.',
    type: 'Announcement',
    date: '6/22/2023',
    image: "/bg/news/bg_pressPlay.avif",
    link: 'https://www.youtube.com/watch?v=MPemOdTvHTk'
  },
  {
    title: `Global Open Beta: How to Play // Premier - VALORANT`,
    description: 'Premier Global Open Beta launches April 25. Let’s run through the basics so you’re ready on day one.',
    type: 'Announcement',
    date: '4/17/2023',
    image: "/bg/news/bg_beta.avif",
    link: 'https://www.youtube.com/watch?v=5d0ZoVqrWuo'
  },
  {
    title: `CHECKMATE // Cypher’s Revenge Game Mode Trailer - VALORANT`,
    description: 'Finally.',
    type: 'Announcement',
    date: '4/1/2023',
    image: "/bg/news/bg_checkmate.avif",
    link: 'https://www.youtube.com/watch?v=9N_iC-Yc0FA'
  },
  {
    title: `GREATER THAN ONE // Gekko Agent Trailer - VALORANT`,
    description: 'Why pick one when you can have five? Say hi to Agent Gekko and his crew of creatures, launching with EP_06 // ACT II.',
    type: 'Announcement',
    date: '3/5/2023',
    image: "/bg/news/bg_gekko.avif",
    link: 'https://www.youtube.com/watch?v=iYFh_XAXSPk'
  },
  {
    title: `REVELATION // Episode 6 Cinematic - VALORANT`,
    description: 'From darkness, revelation. Join us for Episode 6: REVELATION–kicking off Jan 10, 2023.',
    type: 'Announcement',
    date: '1/5/2023',
    image: "/bg/news/bg_revelations.avif",
    link: 'https://www.youtube.com/watch?v=XfuMEmcz3k0'
  },
]