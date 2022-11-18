import { Button } from "@mui/material"
import { Stack } from "@mui/system"

export const MuiButton = () => {
  return (
    <Stack spacing={2} direction={"row"} >
      <Button variant="text" href="www.google.com">Text</Button>
      <Button variant="contained">Text</Button>
      <Button variant="outlined">Text</Button>
    </Stack>
  )
}