import React from "react";
import PDF from "./xyz.pdf";
import { Box } from "@mui/system";

const Resume = () => (
	<Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
	justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
		<embed
		src={PDF}
		type="application/pdf"
		height={800}
		width={500}
        />
	</Box>
);

export default Resume;

{/* <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}></Box> */}