import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography
        variant="h4"
        component={"h1"}
        gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, dolores molestias corrupti obcaecati ab non enim deserunt rerum laudantium nemo repudiandae laboriosam molestiae itaque reiciendis ad recusandae eaque ratione aspernatur.</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis ratione nostrum delectus qui officiis, dolores pariatur voluptatem excepturi libero ex itaque blanditiis, error nemo quos praesentium facere sit! Est!</Typography>

    </div>
  )
}