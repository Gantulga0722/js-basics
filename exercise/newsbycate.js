let news = [
  {
    title: "Title1",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author1",
    pubDate: "12/04/2023",
    category: "Sport",
  },
  {
    title: "Title2",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author2",
    pubDate: "11/11/2023",
    category: "Trend",
  },
  {
    title: "Title3",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author3",
    pubDate: "11/30/2023",
    category: "Health",
  },
  {
    title: "Title4",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author2",
    pubDate: "12/01/2023",
    category: "Tech",
  },
  {
    title: "Title5",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author3",
    pubDate: "12/02/2023",
    category: "Health",
  },
  {
    title: "Title6",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author6",
    pubDate: "11/29/2023",
    category: "Tech",
  },
  {
    title: "Title7",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author2",
    pubDate: "12/03/2023",
    category: "Sport",
  },
  {
    title: "Title8",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author2",
    pubDate: "12/01/2023",
    category: "Trend",
  },
  {
    title: "Title9",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author4",
    pubDate: "11/28/2023",
    category: "Health",
  },
  {
    title: "Title10",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    author: "Author1",
    pubDate: "11/27/2023",
    category: "Sport",
  },
];
function filterByCate(byCate) {
  let foundNews = [];
  let count = 0;
  for (let i = 0; i < news.length; i++) {
    if (byCate == news[i].category) {
      foundNews[count] = news[i];
      count++;
    }
  }
  return foundNews;
}
let cates = filterByCate("Sport");
console.log("Sorted by Category:", cates);
