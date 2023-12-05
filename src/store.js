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
  /* data little card 1 */
  /* data little card 2 */
  /* data little card 3 */

  /* BIG CARD DATA */
  bigCardData: {
    /* data big card 1 */
    hero: {
      overtitle: "i'm wingman",
      title: "peace on earth a wonderful wish but no way",
      paragraph:
        "Success isn't overnight. It's when you get a little better than the day before. It all adds up.",
      imgPath: "hero-image.png",
    },

    /* data big card 2 */
    bigCard2: [
      {
        overtitle: "real stories",
        paragraph:
          "Great study portal for peaple like me.",
        avatar: { imgPath: "01.jpg", name: "John Milton" },
        imgPath: "testimonial-image.jpg",
        id: 1,
      },
      {
        overtitle: "real stories",
        paragraph:
          "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for peaple like me.",
        avatar: { imgPath: "02.jpg", name: "Mina Hollace" },
        imgPath: "testimonial-image.jpg",
        id: 2,
      },
      {
        overtitle: "real stories",
        paragraph:
          "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for peaple like me.",
        avatar: { imgPath: "03.jpg", name: "William Burningham" },
        imgPath: "testimonial-image.jpg",
        id: 3,
      },
      {
        overtitle: "real stories",
        paragraph:
          "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for peaple like me.",
        avatar: { imgPath: "04.jpg", name: "Hal Ford" },
        imgPath: "testimonial-image.jpg",
        id: 4,
      },
    ],
    /* /BIG CARD DATA */
  },
});
