import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
// import Portfolio2 from "./myCourses/Portfolio";
import Portfolio3 from "./articles/Portfolio";
// import Todo from "./todos/Todo";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'/resume'} element={<Resume/>}/>
                  {/* <Route exact path={'/myCourses'} element={<Portfolio2/>}/> */}
                  <Route exact path={'/articles'} element={<Portfolio3/>}/>
                  {/* <Route exact path={'/todos'} element={<Todo/>}/> */}
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  {/* <p>template created with &hearts; by <a href={'https://paytonpierce.dev'}>Payton Pierce</a></p>
                  <p>&copy; 2022</p> */}
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

