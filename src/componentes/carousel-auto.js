import { UncontrolledCarousel } from "reactstrap";

export default function CarouselAuto() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <UncontrolledCarousel
        items={[
         
{
            altText: "Europa",

            key: 1,

            src: "/imagens/Continents Slide.png",
          }
         
          
          
        ]}
      />
    </div>
  );
}
