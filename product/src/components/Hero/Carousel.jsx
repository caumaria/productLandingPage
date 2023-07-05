import { useState } from "react";
import styled from "styled-components";

const imgs = [
  { id: 0, value: "image-product-1.jpg" },
  { id: 1, value: "image-product-2.jpg" },
  { id: 2, value: "image-product-3.jpg" },
  { id: 3, value: "image-product-4.jpg" },
];

const Conteiner = styled.div`
  width: 50%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 875px) {
    width: 100%;
  }
`;

const Thumbnail = styled.img`
  height: 366px;
  width: 360px;
  border-radius: 4%;
`;

const Div = styled.div`
  img:hover {
    border: 2px solid hsl(26, 100%, 55%);
    opacity: 0.4;
  }
`;

const Tiny = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 12%;
  margin-top: 1rem;
  margin-right: 0.8rem;
  @media screen and (max-width: 480px) {
    height: 4.6rem;
    width: 4.6rem;
    margin-left: .2rem;
  }
`;

const Carousel = () => {
  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <Conteiner>
      <div>
        <Thumbnail src={sliderData.value} />

        <Div>
          {imgs.map((data, i) => (
            <Tiny
              src={data.value}
              key={data.id}
              onClick={() => handleClick(i)}
              height="70"
              width="100"
            />
          ))}
        </Div>
      </div>
    </Conteiner>
  );
};

export default Carousel;
