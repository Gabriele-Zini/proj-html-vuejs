import { reactive } from "vue";

export const store = reactive({
  /* menu items */
  menu: [
    {
        text: "Home",
        href:"",
    },
    {
        text: "Pages",
        href:"",
    },
    {
        text: "Courses",
        href:"",
    },
    {
        text: "Features",
        href:"",
    },
    {
        text: "Blog",
        href:"",
    },
    {
        text: "Shop",
        href:"",
    },
],
  /* data little card 1 */
  /* data little card 2 */
  /* data little card 3 */

  /* data big card 1 */
  hero: {
    overtitle: "i'm wingman",
    title: "peace on earth a wonderful wish but no way",
    paragraph:"success isn't overnight. It's when you get a little better than the day before. It all adds up",
    imgPath: "hero-image.png"
  }
});
