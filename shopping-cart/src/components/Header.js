import React from 'react'

import { CssBaseline } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function Header({handleSearch}) {

    return (
        <div className="header">
            <div className="header-box app">
                <a href="/">
                    <Typography variant="h5">Shopping Cart App</Typography>
                </a>
            </div>
            <div className="header-box cart-icon">
                {/* <a href="#/cart">CART</a> */}
                <IconButton
                    color="info"
                    size="large"
                    aria-label="add to shopping cart"
                    // onClick={handleSearch}
                >
                    <ShoppingCart style={{ fontSize: 40 }} />
                </IconButton>
            </div>
        </div>
    );
}
