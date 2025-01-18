import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer(){
    return(
        <>
        <footer class="footer fixed-bottom bg-dark">
        <div class="container text-center">
 <span class="text-white">
 All rights are reserved...
 <h1><FacebookIcon /><TwitterIcon /><YouTubeIcon /></h1>
 </span>
 </div>
 </footer>
        </>
    );
}
export default Footer;