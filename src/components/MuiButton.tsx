import { Button, IconButton } from "@mui/material"
import { Stack } from "@mui/system"
import SendIcon from '@mui/icons-material/Send'

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"} >
        <Button variant="text" href="www.google.com">Text</Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation disableRipple >
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
} 