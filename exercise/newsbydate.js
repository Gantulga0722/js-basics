let news = [
  {
    title: "Title1",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author1",
    pubDate: "12/04/2023",
    category: "Sport",
  },
  {
    title: "Title2",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author2",
    pubDate: "11/11/2023",
    category: "Trend",
  },
  {
    title: "Title3",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author3",
    pubDate: "11/30/2023",
    category: "Health",
  },
  {
    title: "Title4",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author4",
    pubDate: "12/01/2023",
    category: "Tech",
  },
  {
    title: "Title5",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author5",
    pubDate: "12/02/2023",
    category: "Health",
  },
  {
    title: "Title6",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author6",
    pubDate: "11/29/2023",
    category: "Tech",
  },
  {
    title: "Title7",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author7",
    pubDate: "12/03/2023",
    category: "Sport",
  },
  {
    title: "Title8",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author8",
    pubDate: "12/01/2023",
    category: "Trend",
  },
  {
    title: "Title9",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author9",
    pubDate: "11/28/2023",
    category: "Health",
  },
  {
    title: "Title10",
    descrip: "BLACKPINK” хамтлаг “YG” агентлагтай гэрээгээ сунгалаа",
    autor: "Author10",
    pubDate: "11/27/2023",
    category: "Sport",
  },
];
function filterByDate(bydate, num) {
  let swit;
  for (let i = 0; i < news.length; i++) {
    for (let a = i + 1; a < news.length; a++)
      if (news[i].pubDate > news[a].pubDate) {
        swit = news[i];
        news[i] = news[a];
        news[a] = swit;
      }
  }
  let foundNews = [];
  let count = 0;
  if (bydate == "First") {
    for (let b = 0; b < num; b++) {
      foundNews[count] = news[b];
      count++;
    }
  } else if (bydate == "Last") {
    for (let c = news.length - num; c < news.length; c++) {
      foundNews[count] = news[c];
      count++;
    }
  }
  return foundNews;
}
let oldDate = filterByDate("First", 5);
console.log("Old News:", oldDate);
