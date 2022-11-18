import { Button, ButtonGroup, IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { Stack } from "@mui/system"
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import React, { useState } from "react"

export const MuiButton = () => {
  const [formats, setFormats] = useState(() => ["bold", "italic"])

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormat: string[]
  ) => {
    setFormats(newFormat)
  }

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

      <Stack direction={"row"} spacing={2}>
        <ButtonGroup variant="contained" >
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" >
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <ButtonGroup variant="text" orientation="vertical" >
          <Button >Left</Button>
          <Button >Center</Button>
          <Button >Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value={"bold"} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={"italic"} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={"underline"} aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

    </Stack >
  )
} 