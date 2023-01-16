import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, text2, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <h3>{text2}</h3>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Link To My Article'} icon={'fa fa-chrome'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;