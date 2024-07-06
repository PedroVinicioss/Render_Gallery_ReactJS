import { CategoryList } from "../../components/CategoryList";
import anima from "../../assets/categories/anima2.png";
import cyber from "../../assets/categories/cyber2.png";
import gojo from "../../assets/categories/gojo2.png";
import personagens from "../../assets/categories/Personagens2.jpg";
import real from "../../assets/categories/real2.png";
import retro from "../../assets/categories/retrô2.png";

const categories = [
    { id: 1, name: "Animes", image: gojo },
    { id: 2, name: "PixelArt", image: anima },
    { id: 3, name: "Realismo", image: real },
    { id: 4, name: "Personagens", image: personagens },
    { id: 5, name: "Retrô", image: retro },
    { id: 6, name: "Cyberpunk", image: cyber },
];

export function Home(){
    return (
        <>
            <CategoryList categories={categories} />
        </>
    )
}