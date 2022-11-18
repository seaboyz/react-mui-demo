import { Button } from "@mui/material"
import { Stack } from "@mui/system"

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"} >
        <Button variant="text" href="www.google.com">Text</Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>
    </Stack>
  )
} 