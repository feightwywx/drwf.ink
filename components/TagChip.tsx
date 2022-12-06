import { Chip } from "@dotdirewolf/mui-m3-theme";
import { Grid } from "@mui/material";

export const TagChip: React.FC<{ tags: string[] }> = ({ tags, ...props }) => (
  <Grid container spacing={1} {...props}>
    {tags.map((tag: string) => (
      <Grid key={tag} item>
        <Chip
          label={tag}
          style={{ backgroundColor: "transparent" }}
          // onClick={(e) => {
          //   e.stopPropagation();
          //   router.push("/");
          // }}
          color="secondary"
        />
      </Grid>
    ))}
  </Grid>
);
