import { InputAdornment, TextField } from "@mui/material"
import { Stack } from "@mui/system"
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useState } from "react"

export const MuiTextField = () => {
  const [value, setValue] = useState("")

  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField variant="outlined" label={"name"} />
        <TextField variant="filled" label={"name"} />
        <TextField variant="standard" label={"name"} />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField variant="outlined" size="small" color="secondary" label="small secondary" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          variant="outlined"
          label="Form Input"
          value={value}
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do Not Share Your Password"}
        />
        <TextField variant="outlined" label="Form Input" required />
        <TextField variant="outlined" label="Read only" inputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label={"Amount"}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }} />
        <TextField
          label={"Wait"}
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }} />
        <TextField
          label={"Password"}
          type={"password"}
          helperText="Do not share you password with anyone"
          InputProps={{
            endAdornment: <InputAdornment position="end"><VisibilityIcon style={{ cursor: "pointer" }} /></InputAdornment>
          }} />
      </Stack>
    </Stack>
  )
}