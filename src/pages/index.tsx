import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/Layout"
import { Box } from "@mui/material"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* box container center positions */}
      <Box sx={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', height: '70vh' }}>

        <h1>Inicio</h1>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
