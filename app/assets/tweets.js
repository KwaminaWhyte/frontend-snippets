const tweets = [
  {
    id: 1,
    username: "Corrie",
    handle: "cartois0",
    createdAt: "11/23/2020",
    profile:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    image:
      "https://images.unsplash.com/photo-1639195276454-f0ec20b5bcb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    likes: 3967,
    retweets: 5317,
    comments: 1808,
    content:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 2,
    username: "Angus",
    handle: "adikels1",
    createdAt: "10/6/2021",
    profile:
      "https://images.unsplash.com/photo-1555703473-5601538f3fd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=558&q=80",
    image:
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    likes: 6541,
    retweets: 6043,
    comments: 964,
    content:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    id: 10,
    username: "Jesus",
    handle: "jarbuckel9",
    createdAt: "4/10/2021",
    profile:
      "https://images.unsplash.com/photo-1506551109886-6101f48c1ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    likes: 8413,
    retweets: 2396,
    comments: 171,
    content:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    id: 4,
    username: "Diane-marie",
    handle: "dhalliburton3",
    createdAt: "7/9/2019",
    profile:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    image:
      "https://images.unsplash.com/photo-1599420186985-5c3d1a038e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    likes: 1635,
    retweets: 5156,
    comments: 1622,
    content:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    id: 5,
    username: "Sybil",
    handle: "sdryden4",
    createdAt: "9/1/2020",
    profile:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
    likes: 8027,
    retweets: 453,
    comments: 1786,
    content:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 6,
    username: "Ethelin",
    handle: "eoshavlan5",
    createdAt: "11/7/2021",
    profile: "",
    image: "http://dummyimage.com/232x100.png/dddddd/000000",
    likes: 1181,
    retweets: 886,
    comments: 2036,
    content:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    id: 7,
    username: "Wilhelmina",
    handle: "wsummerill6",
    createdAt: "6/21/2021",
    profile: "",
    image: "http://dummyimage.com/129x100.png/dddddd/000000",
    likes: 2513,
    retweets: 3208,
    comments: 1534,
    content:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 3,
    username: "Cheri",
    handle: "cruffli2",
    createdAt: "3/15/2021",
    profile:
      "https://images.unsplash.com/photo-1506551109886-6101f48c1ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    image:
      "https://images.unsplash.com/photo-1639200413098-017ed1f7df45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    likes: 7074,
    retweets: 657,
    comments: 1167,
    content:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 8,
    username: "Mabelle",
    handle: "mgreenhalgh7",
    createdAt: "9/5/2021",
    image: "http://dummyimage.com/171x100.png/dddddd/000000",
    likes: 8859,
    retweets: 3071,
    comments: 567,
    content:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    id: 9,
    username: "Henka",
    handle: "hpablos8",
    createdAt: "8/24/2019",
    image: "http://dummyimage.com/243x100.png/dddddd/000000",
    likes: 8501,
    retweets: 6026,
    comments: 2844,
    content:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    id: 11,
    username: "Danila",
    handle: "dfrida",
    createdAt: "4/12/2020",
    image: "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
    likes: 5444,
    retweets: 844,
    comments: 1428,
    content:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    id: 12,
    username: "Noland",
    handle: "nwarcopb",
    createdAt: "9/6/2020",
    image: "http://dummyimage.com/139x100.png/dddddd/000000",
    likes: 498,
    retweets: 950,
    comments: 2870,
    content:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    id: 13,
    username: "Sean",
    handle: "scumbersc",
    createdAt: "10/11/2020",
    image: "http://dummyimage.com/216x100.png/dddddd/000000",
    likes: 407,
    retweets: 2003,
    comments: 753,
    content:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    id: 14,
    username: "Emylee",
    handle: "eherrievend",
    createdAt: "10/28/2019",
    image: "http://dummyimage.com/226x100.png/dddddd/000000",
    likes: 6826,
    retweets: 2687,
    comments: 2404,
    content:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    id: 15,
    username: "Ami",
    handle: "aewbankee",
    createdAt: "12/31/2019",
    image: "http://dummyimage.com/229x100.png/cc0000/ffffff",
    likes: 6626,
    retweets: 3056,
    comments: 2170,
    content:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 16,
    username: "Otis",
    handle: "ofallaf",
    createdAt: "10/7/2019",
    image: "http://dummyimage.com/177x100.png/cc0000/ffffff",
    likes: 1549,
    retweets: 614,
    comments: 3078,
    content:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    id: 17,
    username: "Gunilla",
    handle: "gtarbing",
    createdAt: "4/23/2021",
    image: "http://dummyimage.com/225x100.png/cc0000/ffffff",
    likes: 1305,
    retweets: 6202,
    comments: 401,
    content:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    id: 18,
    username: "Marie-jeanne",
    handle: "mboorerh",
    createdAt: "8/8/2020",
    image: "http://dummyimage.com/109x100.png/ff4444/ffffff",
    likes: 653,
    retweets: 4304,
    comments: 845,
    content:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 19,
    username: "Daisie",
    handle: "dreffordi",
    createdAt: "4/25/2020",
    image: "http://dummyimage.com/182x100.png/dddddd/000000",
    likes: 2539,
    retweets: 518,
    comments: 1331,
    content:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 20,
    username: "Casar",
    handle: "cgeorgesj",
    createdAt: "12/25/2020",
    image: "http://dummyimage.com/182x100.png/dddddd/000000",
    likes: 1597,
    retweets: 5330,
    comments: 1727,
    content:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    id: 21,
    username: "Clarey",
    handle: "ctrudek",
    createdAt: "5/3/2020",
    image: "http://dummyimage.com/229x100.png/cc0000/ffffff",
    likes: 7658,
    retweets: 4191,
    comments: 3724,
    content:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    id: 22,
    username: "Emalia",
    handle: "eturneuxl",
    createdAt: "6/5/2021",
    image: "http://dummyimage.com/199x100.png/cc0000/ffffff",
    likes: 8447,
    retweets: 1490,
    comments: 405,
    content:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: 23,
    username: "Joby",
    handle: "jbailesm",
    createdAt: "9/4/2019",
    image: "http://dummyimage.com/144x100.png/cc0000/ffffff",
    likes: 425,
    retweets: 829,
    comments: 3479,
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    id: 24,
    username: "Shelley",
    handle: "scoulthurstn",
    createdAt: "5/17/2020",
    image: "http://dummyimage.com/123x100.png/cc0000/ffffff",
    likes: 388,
    retweets: 4080,
    comments: 3345,
    content:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    id: 25,
    username: "Tiff",
    handle: "tstevensono",
    createdAt: "1/29/2021",
    image: "http://dummyimage.com/172x100.png/cc0000/ffffff",
    likes: 2636,
    retweets: 6095,
    comments: 2514,
    content:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: 26,
    username: "Claudius",
    handle: "cfucherp",
    createdAt: "7/20/2020",
    image: "http://dummyimage.com/214x100.png/dddddd/000000",
    likes: 2524,
    retweets: 5027,
    comments: 2630,
    content:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    id: 27,
    username: "Genevieve",
    handle: "gludlowq",
    createdAt: "2/14/2021",
    image: "http://dummyimage.com/191x100.png/5fa2dd/ffffff",
    likes: 7268,
    retweets: 1562,
    comments: 374,
    content:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: 28,
    username: "Erinn",
    handle: "elampardr",
    createdAt: "11/26/2019",
    image: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
    likes: 1238,
    retweets: 625,
    comments: 770,
    content:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: 29,
    username: "Jany",
    handle: "jspences",
    createdAt: "10/16/2019",
    image: "http://dummyimage.com/214x100.png/ff4444/ffffff",
    likes: 12,
    retweets: 5407,
    comments: 3325,
    content:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    id: 30,
    username: "Philipa",
    handle: "pmattissont",
    createdAt: "8/2/2021",
    image: "http://dummyimage.com/164x100.png/cc0000/ffffff",
    likes: 6165,
    retweets: 5047,
    comments: 3132,
    content:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
];

export default tweets;