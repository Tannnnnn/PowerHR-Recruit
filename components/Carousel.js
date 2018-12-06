import styled from 'styled-components'

const ColorBGHeader = styled.div`
height: 420px !important;
background-color: #363636;
`;

const TextSide = styled.p`
  color: #ffffff !important;
  font-size: 90px !important;
`;

export  const CarouselCompane =(name)=> {
    return (
        <ColorBGHeader>
            <center>
                <TextSide>
                <br/>
                    {name}
                </TextSide>
            </center>
        </ColorBGHeader>
    )
    
}