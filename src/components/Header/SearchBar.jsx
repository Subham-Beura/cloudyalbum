import React from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display: "flex",
    alignItems: "center"

}))

export function SearchBar() {
    return (<Search width={{
        xs: "50%",
        sm: "50%"
    }}>
        <SearchIcon sx={{
            color: "GrayText"
        }} />
        <InputBase placeholder="Search..." sx={{
            width: "100%",
            mx: "0.8rem"
        }} />
    </Search>);
}