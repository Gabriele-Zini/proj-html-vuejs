import { reactive } from "vue";

export const store = reactive({
  /* menu items */
  menu: [
    {
      text: "Home",
      href: "",
    },
    {
      text: "Pages",
      href: "",
    },
    {
      text: "Courses",
      href: "",
    },
    {
      text: "Features",
      href: "",
    },
    {
      text: "Blog",
      href: "",
    },
    {
      text: "Shop",
      href: "",
    },
  ],

  /* hero data */
  hero: {
    overtitle: "i'm wingman",
    title: "peace on earth a wonderful wish but no way",
    paragraph:
      "Success isn't overnight. It's when you get a little better than the day before. It all adds up.",
    imgPath: "hero-image.png",
  },

  /*  LITTLE CARD DATA */
  /* data little card 1 */
  littleCard1: [
    {
      imgPath: "motivation-course-01-480x298.jpg",
      price: 25.99,
      paragraph: "How to get successful: Create A Growth Mindset For Success",
      numberLesson: 3,
      numberStudent: 50,
    },
    {
      imgPath: "motivation-course-02-480x298.jpg",
      price: 30.0,
      paragraph: "How to get successful: Create A Growth Mindset For Success",
      numberLesson: 3,
      numberStudent: 50,
    },
    {
      imgPath: "motivation-course-03-480x298.jpg",
      price: 30.0,
      paragraph: "How to get successful: Create A Growth Mindset For Success",
      numberLesson: 3,
      numberStudent: 50,
    },
    {
      imgPath: "motivation-course-04-480x298.jpg",
      price: 39.99,
      paragraph: "How to get successful: Create A Growth Mindset For Success",
      numberLesson: 3,
      numberStudent: 50,
    },
    {
      imgPath: "motivation-course-05-480x298.jpg",
      price: 99.99,
      paragraph: "How to get successful: Create A Growth Mindset For Success",
      numberLesson: 3,
      numberStudent: 50,
    },
    {
      imgPath: "motivation-course-06-480x298.jpg",
      price: 30.0,
      paragraph: "How to get successful: Create A Growth Mindset For Success",
      numberLesson: 3,
      numberStudent: 50,
    },
  ],
  /* data little card 2 */

  littleCard2: [
    {
      imgPath: "motivation-blog-01-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
    {
      imgPath: "motivation-blog-02-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
    {
      imgPath: "motivation-blog-03-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
    {
      imgPath: "motivation-blog-04-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
    {
      imgPath: "motivation-blog-01-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
    {
      imgPath: "motivation-blog-02-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
    {
      imgPath: "motivation-blog-03-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
    {
      imgPath: "motivation-blog-04-480x325.jpg",
      date: "May 13, 2020",
      title: "how to stay true to your personal brand",
      paragraph:
        "when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want when it comes to your business or career you want ",
    },
  ],
  /*  /LITTLE CARD DATA */

  /* /BIG CARD DATA */
  /* data big card */
  bigCardData: [
    {
      overtitle: "real stories",
      paragraph: "Great study portal for peaple like me.",
      avatar: { imgPath: "01.jpg", name: "John Milton", job: "freelancer" },
      imgPath: "testimonial-image-768x562.jpg",
      id: 1,
    },
    {
      overtitle: "real stories",
      paragraph:
        "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for peaple like me.",
      avatar: { imgPath: "02.jpg", name: "Mina Hollace", job: "freelancer" },
      imgPath: "testimonial-image-768x562.jpg",
      id: 2,
    },
    {
      overtitle: "real stories",
      paragraph:
        "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for peaple like me.",
      avatar: {
        imgPath: "03.jpg",
        name: "William Burningham",
        job: "freelancer",
      },
      imgPath: "testimonial-image-768x562.jpg",
      id: 3,
    },
    {
      overtitle: "real stories",
      paragraph:
        "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for peaple like me.",
      avatar: { imgPath: "04.jpg", name: "Hal Ford", job: "freelancer" },
      imgPath: "testimonial-image-768x562.jpg",
      id: 4,
    },
  ],
  /* /BIG CARD DATA */

  /* BOOK STORE DATA */
  bookStore: [
    {
      imgPath: "product-book-10-400x400.jpg",
      title: "Alpha man by MaxCoach",
      price: 29.99,
    },
    {
      imgPath: "product-book-11-400x400.jpg",
      title: "Real Man 4.0 by MaxCoach",
      price: 39.99,
    },
  ],
  /* /BOOK STORE DATA */

  /* CLIENT LOGO */
  clientLogo: [
    {
      imgPath: "01",
      alt: "nome azienda",
    },
    {
      imgPath: "02",
      alt: "nome azienda",
    },
    {
      imgPath: "03",
      alt: "nome azienda",
    },
    {
      imgPath: "04",
      alt: "nome azienda",
    },
    {
      imgPath: "05",
      alt: "nome azienda",
    },
    {
      imgPath: "06",
      alt: "nome azienda",
    },
    {
      imgPath: "07",
      alt: "nome azienda",
    },
  ],
  /* /CLIENT LOGO */

  /*  RESULTS DATA */
  resultData: [
    {
      rate: "1.926",
      category: "finished sessions",
    },
    {
      rate: "100%",
      category: "finished sessions",
    },
    {
      rate: "3092+",
      category: "enrolled learners",
    },
    {
      rate: "200",
      category: "online instructors",
    },
  ],
  /*  /RESULTS DATA */
});
