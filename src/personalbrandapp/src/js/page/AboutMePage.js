import React from "react";
import Link from "@mui/material/Link";
import { Card, CardMedia, Grid } from "@mui/material";

function AboutMePage() {
  let links = [
    {
      link: "mailto:benjaminyu@yubenjamin.com",
      image: "/images/emailLogo.png",
      alt: "mail",
    },
    {
      link: "https://docs.google.com/document/d/1cGkj57Fdo9FfO1gtSKR_uN8Y10yQ7v5pLkcKuWlB59g/edit?usp=sharing",
      image: "/images/resumeLogo.png",
      alt: "resume",
    },
    {
      link: "https://github.com/benjaminyu7",
      image: "/images/github-mark.png",
      alt: "github",
    },
    {
      link: "https://www.linkedin.com/in/benjamin-yu-98592096/",
      image: "/images/LI-In-Bug.png",
      alt: "linkedin",
    },
    {
      link: "https://bsky.app/profile/moorguard.bsky.social",
      image: "/images/bluesky.png",
      alt: "bluesky",
    },
    {
      link: "https://www.youtube.com/channel/UCzChIC0sJ0SZw6nETDi35oA",
      image: "/images/youtubelogo_icon_fullcolor_white.original.jpg",
      alt: "youtube",
    },
  ];

  return (
    <div style={{ maxWidth: 1000, margin: 'auto' }}>
      <Grid container spacing={2} justifyContent="center" marginTop="0px">
        {links.map((link) => (
          <Grid item>
            <Link href={link.link} target="_blank">
              <Card
                style={{
                  width: 300,
                  height: 300,
                  padding: 10,
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  style={{ objectFit: "contain" }}
                  image={`${process.env.PUBLIC_URL}` + link.image}
                  alt={link.alt}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AboutMePage;
