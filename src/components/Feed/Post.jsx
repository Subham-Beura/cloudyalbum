import React from 'react';
import { Avatar, Card, CardActions, CardHeader, CardMedia, Checkbox, IconButton, Box, CircularProgress } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useState } from 'react';
export function Post({ post }) {
    const [imgLoaded, setImgLoaded] = useState(false)
    return (
        <Card sx={{

            mx: { xs: 0, sm: 2 },
            height: "fit-content",
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Box height={imgLoaded && "fit-content"} display={imgLoaded ? "block" : "none"} width="100%" >
                <CardMedia
                    component="img"
                    image={post.data.url}
                    onLoad={() => { setImgLoaded(true) }}
                    alt="Paella dish" />

            </Box>
            <Box height={!imgLoaded && "50vh"} display={imgLoaded ? "none" : "flex"} justifyContent="center" alignItems="center"  >
                <CircularProgress disableShrink />
            </Box>

            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            bgcolor: "red"
                        }}
                        aria-label="recipe">
                        R
                    </Avatar>}
                title={post.data.fileName}
                subheader="September 14, 2022" />

            <CardActions >
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>);
}