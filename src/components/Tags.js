/** @jsx jsx */
import Chip from "@material-ui/core/Chip"
import { makeStyles } from "@material-ui/core/styles"
import kebabCase from "lodash/kebabCase"
import { jsx } from "theme-ui"

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}))

function Tags({ tags }) {
  const arr = tags
  const classes = useStyles()
  return (
    <div>
      {arr &&
      arr.map((tag) => (
        <Chip
          label={` #${tag} `}
          href={"/tags/" + kebabCase(tag)}
          key={`tag-${tag}`}
          component={"a"}
          variant="outlined"
          clickable
          className={classes.chip}
        />
      ))}
    </div>
  )
}

export default Tags
