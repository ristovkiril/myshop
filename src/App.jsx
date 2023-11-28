import {useState} from 'react'
import './App.css'
import {Box, Stack, Typography} from "@mui/material";
import {MainLayout} from "./layout/main/MainLayout.jsx";
import {productList} from "./utils/mock/productList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <Stack direction={"row"}>
          <Typography variant={"h5"}>
            Products
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={2} flexWrap={"wrap"} justifyContent={"space-between"} sx={{py: 2}}>
          {
            productList?.map(product => {
              return (
                <Box sx={{maxWidth: "240px", p: 1, width: "100%", textAlign: "center", cursor: "pointer", "&:hover": {boxShadow: 5} }}>
                  <img src={product?.image} alt={product?.name} width={"100%"}/>
                  <Typography fontWeight={700} fontSize={"1rem"}>{product?.name}</Typography>
                  <Typography fontWeight={400} fontSize={"0.9rem"}>${product?.price}</Typography>
                </Box>
              )
            })
          }
        </Stack>
      </MainLayout>
    </>
  )
}

export default App
