const articlesArray = [
    {
        id: 1,
        image: '/images/art1.jpg',
        category: 'universe',
        text: 'Perseid meteor shower of 2021, likely the best of the year, is peaking now!',
        date: '04 May 2021',
        likes: 655,
        comments: 34,
        fullText:
            'The stunning Perseid meteor shower will peak tonight (Aug. 11) in what could well be the most brilliant "shooting star" display of the year. The Perseids are often one of the strongest meteor showers, and this year, the display will be particularly easy to observe, as the moon is just a few days past its new phase, keeping tonight\'s sky quite dark. Skywatchers began catching early Perseids in late July, and the meteor shower will continue until Aug. 18, but the peak of this meteor shower is well worth catching. Forecasts from Space.com and Sky & Telescope suggest that skywatchers who get themselves someplace dark enough could catch dozens of shooting stars each hour — perhaps one a minute — during the shower\'s peak, which continues into Thursday morning.',
    },
    {
        id: 2,
        image: '/images/art2.jpg',
        category: 'planet',
        text: 'Mercury-bound spacecraft snaps selfie with Venus in close flyby',
        date: '22 June 2021',
        likes: 587,
        comments: 59,
        fullText:
            "A European-Japanese BepiColombo probe headed to Mercury zoomed past Venus on Tuesday (Aug 10), beaming back selfies and other measurements that might reveal new facts about the cloudy planet's atmosphere. The European Space Agency (ESA), which cooperates on this mission with the Japan Aerospace Exploration Agency (JAXA), released the first Venus flyby image, taken shortly after BepiColombo's closest approach to the planet, on Tuesday evening (Aug. 10). /br During the encounter, the probe zipped within 340 miles (552 kilometers) of Venus. More images are expected to follow, ESA has said. The first Venus selfie image, taken on Tuesday at 9:57 a.m. EDT (13:57 pm GMT) when BepiColombo was at a distance of 977 miles (1,573 km) from the surface of Venus, was captured with one of the three  'selfie cameras' aboard the spacecraft.",
    },
    {
        id: 3,
        image: '/images/art3.jpg',
        category: 'earth',
        text: 'The devastating wildfires of 2021 are breaking records and satellites are tracking it all',
        date: '18 October 2021',
        likes: 237,
        comments: 90,
        fullText:
            "It's been a summer of climate-related disasters around the world. A landmark United Nations report on climate change, released on Monday (Aug. 9), confirmed the trend: the planet is not coping with human influences on its climate and the situation is bound to get worse. /br This year, record-breaking wildfires triggered by similarly historic heatwaves are ravaging swaths of land on three continents and Earth observation satellites — some operated by space agencies and others by private companies — have been tracking it all, just as they've done for years. /br In the U.S., the Dixie Fire has become the largest wildfire in the history of California, having destroyed more than 700 square miles (1,811 square kilometers) of land (as of Aug.8). European countries around the Mediterranean Sea, such as Greece, Turkey and Italy, have been forced to evacuate residents as well as tourists from several of their usually paradise-like holiday destinations. In Siberia, the sparsely inhabited region in the north-east of Russia, out of control wildfires have already broken annual records for fire-related emissions of greenhouse gases. ",
    },
    {
        id: 4,
        image: '/images/art4.png',
        category: 'universe',
        text: 'How big is a black hole? How messily it eats may be a clue.',
        date: '16 December 2021',
        likes: 998,
        comments: 2,
        fullText:
            'Astronomers think they have a new way to calculate the size of supermassive black holes: by studying the feeding patterns of these invisible giants. /br Scientists have long noticed flickering patterns in the brightness of accretion disks, the fat ring of matter pulled in by a black hole\'s gravity. But researchers weren\'t sure what caused the flickering. Now, by studying dozens of known supermassive black holes, a team of astrophysicists has determined that the flickering of an accretion disk relates to the mass of the black hole swathed inside it — and the scientists believe that the same technique also applies to much, much smaller objects as well. /br "These results suggest that the processes driving the flickering during accretion are universal, whether the central object is a supermassive black hole or a much more lightweight white dwarf," Yue Shen, a co-lead author on the new research and an astronomer at the University of Illinois Urbana-Champaign, said in a statement.',
    },
    {
        id: 5,
        image: '/images/art5.jpg',
        category: 'science',
        text: 'Cygnus cargo ship arrives at International Space Station with its biggest NASA haul ever',
        date: '05 April 2021',
        likes: 934,
        comments: 5,
        fullText:
            'A Northrop Grumman-built Cygnus cargo ship just made its biggest delivery yet for NASA at the International Space Station. /br The Cygnus NG-16 vessel was captured by astronauts wielding the station\'s robotic arm at 6:07 a.m. EDT (1107 GMT) on Thursday as both spacecraft soared over the Atlantic Ocean southwest of Portugal. The Cygnus supply ship was christened the S.S. Ellison Onizuka in honor of the first Asian American astronaut Ellison Onuzuka, who was killed along with six others in the Challenger shuttle disaster in 1986. /br "On behalf of the Expedition 65 crew I\'m pleased to bring the Cygnus spacecraft S.S. Ellison Onizuka aboard the International Space Station today," NASA astronaut Meghan McArthur radioed to Mission Control after grappling the cargo ship with the station\'s robotic arm. "This mission enables groundbreaking research through which we hope to meet Colonel Onizuka\'s challenge to enable the next generation to look out from a higher plateau." /br The spacecraft will be attached to an open berth on the station later today. You can watch that live on NASA TV starting at 8 a.m. EDT (1200 GMT). ',
    },
    {
        id: 6,
        image: '/images/art6.jpg',
        category: 'universe',
        text: "Our Milky Way galaxy isn't very well mixed, study suggests",
        date: '22 September 2021',
        likes: 45,
        comments: 2,
        fullText:
            'Our galaxy isn\'t as thoroughly mixed as scientists sometimes assume, according to a new study. </br> In particular, that new research focuses on the distribution of what astronomers regard as metals — which is really just every element besides hydrogen and helium, even when these elements are gases. In the new work, scientists used the Hubble Space Telescope and the Very Large Telescope in Chile to map the metal in dust across the Milky Way in hopes of improving models describing the galaxy\'s history. /br "Initially, when the Milky Way was formed, more than 10 billion years ago, it had no metals," Annalisa De Cia, an astronomer at the University of Geneva in Switzerland and lead author on the new research, said in a statement. "The stars gradually enriched the environment with the metals they produced."',
    },
    {
        id: 7,
        image: '/images/art7.jpg',
        category: 'technology',
        text: "Launch of SpaceX's private Inspiration4 mission slips by 24 hours",
        date: '07 August 2021',
        likes: 89,
        comments: 19,
        fullText:
            "Inspiration4, SpaceX's first all-civilian mission, will launch at least a day late. /br The three-day mission will now launch from the NASA Kennedy Space Center in Cape Canaveral, Florida no earlier than 8 p.m. EDT Wednesday, Sept. 15 (1200 GMT Thursday, Sept. 16) due to a combination of weather conditions and technical requirements, Inspiration4 said Friday (Sept. 10) in a mission update. /br Inspiration4 is a private mission to Earth orbit purchased by Jared Isaacman, the billionaire founder of Shift4 Payments. He'll be joined on the flight by Hayley Arceneaux, Sian Proctor and Chris Sembroski.",
    },
]

export const getArticlesObject = (array) =>
    array.reduce(
        (obj, article) => ({
            ...obj,
            [article.id]: article,
        }),
        {}
    )

export default articlesArray
