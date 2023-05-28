import React from 'react';
import Link from '@material-ui/core/Link';
import { Card, CardMedia, Grid } from '@material-ui/core'

function AboutMePage() {
	/* mailto_link.setAttribute('href','');
	make_footer_link(links,'Resume','');
  */
  let links = [
    {link: "mailto:benjaminyu.741@gmail.com", image: "/images/emailLogo.png", alt: "mail" },
    {link: "../documents/BenjaminYuResume.pdf", image: "/images/resumeLogo.png", alt: "resume" },
    {link: "https://github.com/benjaminyu7", image: "/images/github-mark.png", alt: "github" },
    {link: "https://www.linkedin.com/in/benjamin-yu-98592096/", image: "/images/LI-In-Bug.png", alt: "linkedin" },
    {link: "https://www.youtube.com/channel/UCzChIC0sJ0SZw6nETDi35oA", image: "/images/youtubelogo_icon_fullcolor_white.original.jpg", alt: "youtube" },
  ]
  return (
    <div>
        <Grid container spacing={2} justifyContent="center">
            {


                links.map((link)=> (
                <Grid item>
                    <Link href={link.link} target="_blank">
                        <Card style={{width: 300, height: 300, padding: 10, justifyContent:'center', display: 'flex', flexDirection: 'column'}}>
                            <CardMedia
                                component="img"
                                style={{objectFit:'contain'}}
                                image={`${process.env.PUBLIC_URL}` + link.image}
                                alt={link.alt}
                            />
                        </Card>
                    </Link>
                </Grid>
                ))
            }
        </Grid>
    </div>
  );
}

export default AboutMePage;