import React from 'react';
import { Avatar, Card, CardActions, CardHeader, CardMedia, Checkbox, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export function Post() {
    return (
        <Card sx={{

            mx: { xs: 0, sm: 2 },
            height:{sm:"fit-content"},
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardMedia
                component="img"
                sx={{height:{xs:"93%",sm:"80%"}}}
                image="https://source.unsplash.com/random"
                alt="Paella dish" />
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            bgcolor: "red"
                        }}
                        aria-label="recipe">
                        R
                    </Avatar>}
                title="username"
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