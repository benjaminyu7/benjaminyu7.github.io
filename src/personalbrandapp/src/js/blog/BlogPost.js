import React from 'react';
import { useMediaQuery } from '@mui/material';
import Card from "@mui/material/Card";

export default function BlogPost(props) {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const isDesktop = useMediaQuery("(min-width: 701px)");

  return (
    <div>
      {isMobile && 
        <div
            style={{background: 'white'}}
        >
          <h1>{props.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>}
      {isDesktop && 
          <Card
            style={{
              padding: 20,
              objectFit: "contain",
              overflow: "hidden",
              maxWidth: '700px', 
              alignSelf: 'center',
            }}
          >
          <h1>{props.title}</h1>
          <div
            style={{
              width: "100",
              padding: 20,
              objectFit: "contain",
              overflow: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </Card>}
    </div>
  );
}