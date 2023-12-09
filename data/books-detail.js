//try to convert to currency format

const formatCurrency = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
const bookDetails = [
  {
    bookID: 1, // id của sản phẩm,
    bookName: "Flores and Miss Paula",
    author: "Melissa Rivero",
    oldPrice: 29.0,
    newPrice: 26.97,
    publisher: "Ecco Press",
    publishDate: new Date("2023-05-12"),
    pageLength: 272,
    dimensions: "6.2 X 8.9 X 1.0 inches",
    weight: 0.85,
    language: "English",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9780063272491.jpg?height=500&v=v2-94148ec9e58c48658adf994bd3a4504bs",
    description: `A wry, tender novel about a Peruvian immigrant mother and a millennial daughter who have one final chance to find common ground

    Thirtysomething Flores and her mother, Paula, still live in the same Brooklyn apartment, but that may be the only thing they have in common. It's been nearly three years since they lost beloved husband and father Martín, who had always been the bridge between them. One day, cleaning beneath his urn, Flores discovers a note written in her mother's handwriting: Perdóname si te falle. Recuerda que siempre te quise. ("Forgive me if I failed you. Remember that I always loved you.") But what would Paula need forgiveness for?
    
    Now newfound doubts and old memories come flooding in, complicating each woman's efforts to carve out a good life for herself--and to support the other in the same. Paula thinks Flores should spend her evenings meeting a future husband, not crunching numbers for a floundering aquarium startup. Flores wishes Paula would ask for a raise at her DollaBills retail job, or at least find a best friend who isn't a married man.
    
    When Flores and Paula learn they will be forced to move, they must finally confront their complicated past--and decide whether they share the same dreams for the future. Spirited and warm-hearted, Melissa Rivero's new novel showcases the complexities of the mother-daughter bond with fresh insight and empathy.`,
  },
  {
    bookID: 2, // id của sản phẩm,
    bookName: "All the Little Bird-Hearts",
    author: "Viktoria Lloyd-Barlow",
    oldPrice: 18.99,
    newPrice: 17.66,
    publisher: "Algonquin Books",
    publishDate: new Date("2023-02-12"),
    pageLength: 304,
    dimensions: "5.07 X 8.02 X 0.63 inches",
    weight: 0.53,
    language: "Paperback",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9781643756615.jpg?height=500&v=v2-541a68b2222722ae02c732a516a01c52",
    description: `Longlisted for the 2023 Booker Prize, this poetic and often funny debut -- "a motherhood story unlike any other" (Booklist) -- a by an author with autism is written from the point of view of an autistic woman as she and her headstrong adolescent daughter are befriended by a glamorous, charismatic couple with dark ulterior motives.
  I lived for and loved a bird-heart that summer; I only knew it afterwards.
  Sunday Forrester lives with her sixteen-year-old daughter, Dolly, in the house she grew up in. She does things more carefully than most people. On quiet days, she must eat only white foods. Her etiquette handbook guides her through confusing social situations, and to escape, she turns to her treasury of Sicilian folklore. The one thing very much out of her control is clever headstrong Dolly, now on the cusp of leaving home.
  Into this carefully ordered world step Vita and Rollo, a couple who move in next door, disarm Sunday with their glamor and charm, and proceed to deliciously break just about every rule in Sunday's book. Soon they are in and out of each others' homes, and Sunday feels loved and accepted like never before. But beneath Vita and Rollo's polish lies something else, something darker. For Sunday has precisely what Vita has always wanted for herself: a daughter of her own.
  An astute and poignant psychological portrait of a woman coming to terms with what love means, and why discovering our own unique gifts can save us.`,
  },
  {
    bookID: 3, // id của sản phẩm,
    bookName: "The Other Mothers",
    author: "Katherine Faulkner",
    oldPrice: 28.99,
    newPrice: 26.96,
    publisher: "Gallery Books",
    publishDate: new Date("2023-01-12"),
    pageLength: 384,
    dimensions: "5.98 X 9.06 X 1.34 inches ",
    weight: 0.92,
    language: "English",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9781668024782.jpg?height=500&v=v2-5203f4bb23a5cfcb26fe4c12d256ba8e",
    description: `The author of the "twisty, fast-paced" (The Sunday Times, London) Greenwich Park returns with a fresh and deftly paced thriller about murder, class, and motherhood in an exclusive London community.
    When a young nanny is found dead in mysterious circumstances, new mom, Tash, is intrigued. She has been searching for a story to launch her career as a freelance journalist. But she has also been searching for something else--new friends to help her navigate motherhood.
    She sees them at her son's new playgroup. The other mothers. A group of sleek, sophisticated women who live in a neighborhood of tree-lined avenues and stunning houses. The sort of mothers Tash herself would like to be. When the mothers welcome her into their circle, Tash discovers the kind of life she has always dreamt of--their elegant London townhouses a far cry from her cramped basement flat and endless bills. She is quickly swept up into their wealthy world via coffees, cocktails, and playdates.
    But when another young woman is found dead, it's clear there's much more to the community than meets the eye. The more Tash investigates, the more she's led uncomfortably close to the other mothers. Are these women really her friends? Or is there another, more dangerous reason why she has been so quickly accepted into their exclusive world? Who, exactly, is investigating who?`,
  },
  {
    bookID: 4, // id của sản phẩm,
    bookName: "Yours for the Taking",
    author: "Gabrielle Korn",
    oldPrice: 24.0,
    newPrice: 22.32,
    publisher: "St. Martin's Press",
    publishDate: new Date("2022-05-11"),
    pageLength: 336,
    dimensions: "6.4 X 9.3 X 1.2 inches",
    weight: 1.15,
    language: "English",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9781250283368.jpg?height=500&v=v2-db9d5d1e37cd8d5add4ca4658a8a7e7b",
    description: `The year is 2050. Ava and her girlfriend live in what's left of Brooklyn, and though they love each other, it's hard to find happiness while the effects of climate change rapidly eclipse their world. Soon, it won't be safe outside at all. The only people guaranteed survival are the ones whose applications are accepted to The Inside Project, a series of weather-safe, city-sized structures around the world.

    Jacqueline Millender is a reclusive billionaire/women's rights advocate, and thanks to a generous donation, she's just become the director of the Inside being built on the bones of Manhattan. Her ideas are unorthodox, yet alluring--she's built a whole brand around rethinking the very concept of empowerment.
    Shelby, a business major from a working-class family, is drawn to Jacqueline's promises of power and impact. When she lands her dream job as Jacqueline's personal assistant, she's instantly swept up into the glamourous world of corporatized feminism. Also drawn into Jacqueline's orbit is Olympia, who is finishing up medical school when Jacqueline recruits her to run the health department Inside. The more Olympia learns about the project, though, the more she realizes there's something much larger at play.
    When Ava is accepted to live Inside and her girlfriend isn't, she's forced to go alone. But her heartbreak is quickly replaced with a feeling of belonging: Inside seems like it's the safe space she's been searching for... most of the time. Other times she can't shake the feeling that something is deeply off. As she, Olympia, and Shelby start to notice the cracks in Jacqueline's system, Jacqueline tightens her grip, becoming increasingly unhinged and dangerous in what she is willing to do--and who she is willing to sacrifice--to keep her dream alive.
    At once a mesmerizing story of queer love, betrayal, and chosen family, and an unflinching indictment of white, corporate feminism, Gabrielle Korn's Yours for the Taking holds a mirror to our own world, in all its beauty and horror.`,
  },
  {
    bookID: 5, // id của sản phẩm,
    bookName: "Songs on Endless Repeat: Essays and Outtakes",
    author: "Anthony Veasna So",
    oldPrice: 28.99,
    newPrice: 26.96,
    publisher: "Ecco Press",
    publishDate: new Date("2020-05-10"),
    pageLength: 240,
    dimensions: "5.7 X 8.2 X 1.2 inches",
    weight: 0.65,
    language: "English",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9780063049963.jpg?height=500&v=v2-a502631439cc26902b17ce4688834b96",
    description: `A Most Anticipated Book of 2023 from: LA Times * Boston Globe * The Millions * LitHub

    By the New York Times bestselling author of the award-winning AFTERPARTIES comes a collection like none other: sharply funny, emotionally expansive essays and linked short fiction exploring family, queer desire, pop culture, and race
        The late Anthony Veasna So's debut story collection, Afterparties, was a landmark publication, hailed as a "bittersweet triumph for a fresh voice silenced too soon" (Fresh Air). And he was equally known for his comic, soulful essays, published in n+1, The New Yorker, and The Millions.
        Songs on Endless Repeat gathers those essays together, along with previously unpublished fiction. Written with razor-sharp wit and an unflinching eye, the essays examine his youth in California, the lives of his refugee parents, his intimate friendships, loss, pop culture, and more. And in linked fiction following three Cambodian American cousins who stand to inherit their late aunt's illegitimate loan-sharking business, So explores community, grief, and longing with inimitable humor and depth.
        Following "one of the most exciting contributions to Asian American literature in recent years" (Vulture), Songs on Endless Repeat is an astonishing final expression by a writer of "extraordinary achievement and immense promise" (The New Yorker).`,
  },
  {
    bookID: 6, // id của sản phẩm,
    bookName: "Orbital",
    author: "Samantha Harvey",
    oldPrice: 24.0,
    newPrice: 22.32,
    publisher: "Ecco Press",
    publishDate: new Date("2023-05-12"),
    pageLength: 272,
    dimensions: "6.2 X 8.9 X 1.0 inches",
    weight: 0.85,
    language: "English",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9780802161543.jpg?height=500&v=v2-8bf1635c2a2d1e8cbfc022d31efc4b25",
    description: `A slender novel of epic power, Orbital deftly snapshots one day in the lives of six women and men hurtling through space--not towards the moon or the vast unknown, but around our planet. Selected for one of the last space station missions of its kind before the program is dismantled, these astronauts and cosmonauts--from America, Russia, Italy, Britain, and Japan--have left their lives behind to travel at a speed of over seventeen thousand miles an hour as the earth reels below. We glimpse moments of their earthly lives through brief communications with family, their photos and talismans; we watch them whip up dehydrated meals, float in gravity-free sleep, and exercise in regimented routines to prevent atrophying muscles; we witness them form bonds that will stand between them and utter solitude. Most of all, we are with them as they behold and record their silent blue planet. Their experiences of sixteen sunrises and sunsets and the bright, blinking constellations of the galaxy are at once breathtakingly awesome and surprisingly intimate. So are the marks of civilization far below, encrusted on the planet on which we live.


    Profound, contemplative and gorgeous, Orbital is an eloquent meditation on space and a moving elegy to our humanity, environment, and planet.`,
  },
  {
    bookID: 7, // id của sản phẩm,
    bookName: "Welcome Home, Stranger",
    author: "Kate Christensen",
    oldPrice: 28.99,
    newPrice: 26.96,
    publisher: "Harper",
    publishDate: new Date("2023-05-12"),
    pageLength: 272,
    dimensions: "6.2 X 8.9 X 1.2 inches ",
    weight: 0.8,
    language: "English",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9780063299702.jpg?height=500&v=v2-8f0cf63e1c42332b9331a9003b24a6b6",
    description: `"Kate Christensen's new novel, Welcome Home, Stranger, is a revelation, offering characters as real as your family and friends, a rich, vividly drawn setting, grab-you-by-the-throat drama and always, lurking in the shadows, a fierce authorial intelligence. What more could you ask?"--Richard Russo, author of Somebody's Fool

    "To the great literature of going home again we can now add Kate Christensen's superb new novel Welcome Home, Stranger, a triumph of intelligence and wit (which will surprise none of her many fans). The prodigal here is a brilliant journalist grieving the loss of a very difficult mother while attempting peace with those she left behind: a resentful sister and an ex-lover who can be neither trusted nor forgotten. A spellbinding book from one of our best chroniclers of the very American struggle to strive for excellence while still living in community with others."--Ann Packer, author of The Children's Crusade
    
    From the PEN-Faulkner Award-winning author of The Great Man comes a novel about grief, love, growing older, and the complications of family that is the story of a fifty-something woman who goes home--reluctantly--to Maine after the death of her mother.
    
    Can you ever truly go home again?
    
    An environmental journalist in Washington, DC, Rachel has shunned her New England working-class family for years. Divorced and childless in her middle age, she's a true independent spirit with the pain and experience to prove it. Coping with challenges large and small, she thinks her life is in free fall-until she's summoned home to deal with the aftermath of her mother's death.
    
    Then things really fall apart.
    
    Surrounded by a cast of sometimes comic, sometimes heartbreakingly serious characters--an arriviste sister, an alcoholic brother-in-law and, most importantly, the love of her life recently married to the sister's best friend-Rachel must come to terms with her past, the sorrow she has long buried, and the ghost of the mother who, for better and worse, made her the woman she is.
    
    Lively, witty, and painfully familiar, this sophisticated and emotionally resonant novel from the author of The Great Man holds a mirror up to modern life as it considers the way some of us must carry on now.`,
  },
  {
    bookID: 8, // id của sản phẩm,
    bookName: "Dazzling",
    author: "Chikodili Emelumadu",
    oldPrice: 27.0,
    newPrice: 25.11,
    publisher: "Overlook Press",
    publishDate: new Date("2023-15-11"),
    pageLength: 352,
    dimensions: "5.67 X 8.27 X 1.34 inches",
    weight: 0.88,
    language: "English",
    type: "Hardcover",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9781419769795.jpg?height=500&v=v2",
    description: `The Girl with the Louding Voice meets The Water Dancer in Chịkọdịlị Emelụmadụ's magical, award-winning literary debut, Dazzling, offering a new take on West African mythology.
    Treasure and her mother lost everything when Treasure's father died. Haggling for scraps in the market, Treasure meets a man who promises to change their fortunes, but his feet are hovering just a few inches above the ground. He's a spirit, and he promises to bring Treasure's beloved father back to life if she'll do one terrible thing for him first.
    Ozoemena has an itch in the middle of her back. It's an itch that speaks to her patrilineal destiny, an honor never before bestowed upon a girl, to defend the land and protect its people by becoming a Leopard. Her father impressed upon her what an honor this was before he vanished, but it's one she couldn't want less--she has enough to worry about as she tries to fit in at a new boarding school.
    But as the two girls reckon with their burgeoning wildness and the legacy of their missing fathers, Ozoemena's fellow students start to vanish. Treasure's obligations to the spirit escalate, and Ozoemena's duty of protection as a Leopard grows. Soon the girls' destinies and choices alike set them on a dangerous collision course. Ultimately, they must ask themselves: in a world that always says no to women, what must two young girls sacrifice to get what is theirs?`,
  },
  {
    bookID: 9, // id của sản phẩm,
    bookName: "All the Hidden Paths",
    author: "Foz Meadows",
    oldPrice: 29.99,
    newPrice: 27.89,
    publisher: "Tor Books",
    publishDate: new Date("2019-01-12"),
    pageLength: 528,
    dimensions: "5.84 X 8.5 X 1.37 inches ",
    weight: 1.27,
    language: "English",
    type: "Paperback",
    thumbnail:
      "https://images-us.bookshop.org/ingram/9781250829306.jpg?height=500&v=v2-6d3e6fdd3c5d72ef6c76b71ec629e6cd",
    description: `The follow-up to Foz Meadows's A Strange and Stubborn Endurance, All the Hidden Paths is a sultry political & romantic fantasy exploring gender, sexuality, identity, and self-worth.

    With the plot against them foiled and the city of Qi-Katai in safe hands, newlywed and tentative lovers Velasin and Caethari have just begun to test the waters of their relationship. But the wider political ramifications of their marriage are still playing out across two nations, and all too soon, they're summoned north to Tithena's capital city, Qi-Xihan, to present themselves to its monarch.
    With Caethari newly invested as his grandmother's heir and Velasin's old ghosts gnawing at his heels, what little peace they've managed to find is swiftly put to the test. Cae's recent losses have left him racked with grief and guilt, while Vel struggles with the disconnect between instincts that have kept him safe in secrecy and what an open life requires of him now. Pursued by unknown assailants and with Qi-Xihan's court factions jockeying for power, Vel and Cae must use all the skills at their disposal to not only survive, but thrive.
    Because there's more than one way to end an alliance, and more than one person who wants to see them fail...and they will resort to murder if needed.`,
  },
];
// Loop through each book and update the price format
bookDetails.forEach((book) => {
  book.oldPrice = formatCurrency(book.oldPrice);
  book.newPrice = formatCurrency(book.newPrice);
});
export default bookDetails;
