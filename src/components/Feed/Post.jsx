import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export function Post() {
    return (
        <Card sx={{

            mx: { xs: 0, sm: 4 },
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardMedia
                component="img"
                height="5%"
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