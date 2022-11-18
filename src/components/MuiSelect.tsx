import { Box, MenuItem, Stack, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"

export const MuiSelect = () => {
  const [country, setCountry] = useState("")
  const [countries, setCounties] = useState<string[]>([])

  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }
  const handleCountriesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log(value)
    setCounties(typeof value === "string" ? value.split(",") : value)
  }
  return (

    <Stack direction={"row"} spacing={2}>
      <Box width={"250px"}>
        <TextField
          label="Select country"
          value={country}
          select
          onChange={handleCountryChange}
          fullWidth
        >
          <MenuItem value={"IN"}>India</MenuItem>
          <MenuItem value={"CN"}>China</MenuItem>
          <MenuItem value={"USA"}>United States of America</MenuItem>
        </TextField>
      </Box>

      <Box width={"250px"}>
        <TextField
          label="Select countries"
          value={countries}
          select
          onChange={handleCountriesChange}
          fullWidth
          SelectProps={{
            multiple: true
          }}
          helperText="Please select your country"
          error={countries.length === 0 ? true : false}
        >
          <MenuItem value={"IN"}>India</MenuItem>
          <MenuItem value={"CN"}>China</MenuItem>
          <MenuItem value={"USA"}>United States of America</MenuItem>
        </TextField>
      </Box>
    </Stack >
  )
}