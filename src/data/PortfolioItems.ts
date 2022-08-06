import { IPortfolioItem } from '../containers/_portfolio/IPortfolioItem';

export const data: IPortfolioItem[] = [
  {
    id: 1,
    title: "Sticker book",
    shortDescription:
      "Academic project with the purpose of choosing a subject to map and visually organize. The final result was of a sticker book aiming to raise animal adoption awareness.",
    lead: "Academic project with the purpose of choosing a subject to map and visually organize.",
    longDescription: "Cantinho do Tareco is an Animal Protection Association based in facilities provided by the Maia City Hall. Currently they have about 60 cats under their care. This project began with the carbarn of litter animals from a camping pitch, where about 80 cats currently live. The Association was officially constituted in 2009 and tries to create a paradise for our little furry friends. That’s their goal, that the cats who live there feel good with the volunteers, even though they don’t have a family yet. This academic project fell under the objective of creating a system that would rate cats from the less likely to be adopted to the most likely to be adopted, dividing them by three intuitive categories: gold, silver and bronze. After some research being done, a discovery was made that some points were believed to be disfavoring some shelter cats on their search for a family. The sticker book was supposed to allure possible adoptants to choose the “golden ticket” of cats, giving that the cats under the color of gold were the less likely to be adopted.",
    keywords: ["graphic design", "mapping"],
    date: "02/2019",
    featuredImage: "pathToImage",
    imageGallery: ["https://www.catarina-freitas.com/images/projects/project1/image1.jpg", "https://www.catarina-freitas.com/images/projects/project1/image2.jpg", "https://www.catarina-freitas.com/images/projects/project1/image1.jpg", "https://www.catarina-freitas.com/images/projects/project1/image2.jpg"],
  },
  {
    id: 2,
    title: "Sticker book",
    shortDescription:
      "Academic project with the purpose of choosing a subject to map and visually organize. The final result was of a sticker book aiming to raise animal adoption awareness.",
    lead: "Academic project with the purpose of choosing a subject to map and visually organize.",
    longDescription: "Cantinho do Tareco is an Animal Protection Association based in facilities provided by the Maia City Hall. Currently they have about 60 cats under their care. This project began with the carbarn of litter animals from a camping pitch, where about 80 cats currently live. The Association was officially constituted in 2009 and tries to create a paradise for our little furry friends. That’s their goal, that the cats who live there feel good with the volunteers, even though they don’t have a family yet. This academic project fell under the objective of creating a system that would rate cats from the less likely to be adopted to the most likely to be adopted, dividing them by three intuitive categories: gold, silver and bronze. After some research being done, a discovery was made that some points were believed to be disfavoring some shelter cats on their search for a family. The sticker book was supposed to allure possible adoptants to choose the “golden ticket” of cats, giving that the cats under the color of gold were the less likely to be adopted.",
    keywords: ["graphic design", "mapping"],
    date: "02/2019",
    featuredImage: "pathToImage",
    imageGallery: ["https://www.catarina-freitas.com/images/projects/project1/image1.jpg", "https://www.catarina-freitas.com/images/projects/project1/image2.jpg", "https://www.catarina-freitas.com/images/projects/project1/image1.jpg", "https://www.catarina-freitas.com/images/projects/project1/image2.jpg"],
  },
  {
    id: 3,
    title: "Sticker book",
    shortDescription:
      "Academic project with the purpose of choosing a subject to map and visually organize. The final result was of a sticker book aiming to raise animal adoption awareness.",
    lead: "Academic project with the purpose of choosing a subject to map and visually organize.",
    longDescription: "Cantinho do Tareco is an Animal Protection Association based in facilities provided by the Maia City Hall. Currently they have about 60 cats under their care. This project began with the carbarn of litter animals from a camping pitch, where about 80 cats currently live. The Association was officially constituted in 2009 and tries to create a paradise for our little furry friends. That’s their goal, that the cats who live there feel good with the volunteers, even though they don’t have a family yet. This academic project fell under the objective of creating a system that would rate cats from the less likely to be adopted to the most likely to be adopted, dividing them by three intuitive categories: gold, silver and bronze. After some research being done, a discovery was made that some points were believed to be disfavoring some shelter cats on their search for a family. The sticker book was supposed to allure possible adoptants to choose the “golden ticket” of cats, giving that the cats under the color of gold were the less likely to be adopted.",
    keywords: ["graphic design", "mapping"],
    date: "02/2019",
    featuredImage: "pathToImage",
    imageGallery: ["https://www.catarina-freitas.com/images/projects/project1/image1.jpg", "https://www.catarina-freitas.com/images/projects/project1/image2.jpg", "https://www.catarina-freitas.com/images/projects/project1/image1.jpg", "https://www.catarina-freitas.com/images/projects/project1/image2.jpg"],
  },
];

export function getItemById(id: string) {
  const item = data.find(item => item.id === parseInt(id));
  return item ? item : {} ;
}