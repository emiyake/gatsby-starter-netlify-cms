import React from 'react';
import { ImageBoxStyled, FrontImageStyled, BackImageStyled } from './image-box.component.style';


interface ImageBoxProps {
    frontImageUrl?: string;
    backImageUrl?: string;
    solidBackground?: boolean;
    alignFrontRight?: boolean;

}
export const ImageBox: React.FC< ImageBoxProps> = ({frontImageUrl, backImageUrl, solidBackground,alignFrontRight}) => {
  return (
      <ImageBoxStyled>
          <FrontImageStyled  frontImageUrl={frontImageUrl}  solidBackground={solidBackground} alignFrontRight={alignFrontRight}/>
          <BackImageStyled backImageUrl={backImageUrl} alignFrontRight={alignFrontRight}/>
      </ImageBoxStyled>
  );
}

