import React from 'react';
import { Avatar, Card, CardActions, CardHeader, CardMedia, Checkbox, IconButton ,Box} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export function Post({ post }) {
    console.log("A")
    return (
        <Card sx={{

            mx: { xs: 0, sm: 2 },
            height: "fit-content",
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Box minHeight={{xs:"20vh",sm:"40%"}} height="fit-content" width="100%">
                <CardMedia
                    component="img"
                    image={post.data.url}
                    alt="Paella dish" />
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