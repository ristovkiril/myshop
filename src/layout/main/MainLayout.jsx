import {AppBar, Badge, Button, IconButton, InputAdornment, Stack, TextField, Toolbar} from "@mui/material";
import logo from "../../assets/shoplogo.png";
import {IconSearch, IconShoppingCart} from "@tabler/icons-react";

export const MainLayout = ({children}) => {

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar

          sx={{
            justifyContent: "space-between",
            bgcolor: "#FFF"
          }}
        >
          <img src={logo} alt={"Logo"} width={70} />

          <Stack direction={"row"} gap={2}>
            <Button>
              Men
            </Button>
            <Button>
              Women
            </Button>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <TextField
              size={"small"}
              placeholder={"Search here..."}
              InputProps={{
                sx: {borderRadius: 5},
                endAdornment: <InputAdornment><IconSearch /></InputAdornment>
              }}
            />
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <IconShoppingCart />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {children}
    </>
  )
}