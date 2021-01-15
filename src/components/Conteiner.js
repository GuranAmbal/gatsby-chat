import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav } from "../components"

export const Conteiner = ({ children }) => {
    return <ContainerWrapper><Nav></Nav>{children}</ContainerWrapper>
}

