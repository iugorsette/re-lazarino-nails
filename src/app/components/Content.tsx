import TypingEffect from "../services/TypingEffect";
import { CarouselComponent } from "./Carousel";
export function Content() {
  const text = TypingEffect(
    `Combinando criatividade e habilidade, cada pincelada é uma obra de arte. *
    Aperfeiçoe o visual com unhas perfeitas e um toque de glamour em cada detalhe. *
    Agende seu horário e experimente a excelência em nails design`
  );
  return (
    <div className="flex p-4">
      <div className="flex flex-col p-4 md:flex-row">
        <div className="rounded-3xl overflow-hidden md:w-2/3">
          <CarouselComponent />
        </div>
        <div className="p-4 md:w-1/3">
          <h2 className="text-center text-zinc-800">{text}</h2>
        </div>
      </div>
    </div>
  );
}
