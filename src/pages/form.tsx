import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/Layout"
import { Box } from "@mui/material"
import Select from "react-select"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Input } from "@material-ui/core"

interface IFormInput {
    firstName: string
    lastName: string
    iceCreamType: { label: string; value: string }
  }
  

const FormPage: React.FC<PageProps> = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: {},
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
  return (
    <Layout>
      {/* box container center positions */}
      <Box sx={{ display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', height: '70vh' }}
        >
        <form >
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
            <Controller
                name="iceCreamType"
                control={control}
                render={({ field }) => (
                <Select
                    {...field}
                    options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" },
                    ]}
                />
                )}
            />
            <Input type="submit" />
            </form>
      </Box>
    </Layout>
  )
}

export default FormPage

export const Head: HeadFC = () => <title>Formulario</title>
