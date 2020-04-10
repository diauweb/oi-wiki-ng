import { makeStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import React from "react"

const useStyles = makeStyles((theme) => ({
  tab: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    minWidth: "0",
    "&:hover": {
      color: "#000",
      opacity: "1",
    },
  },
  indicator: {
    height: "3px"
  }
}))

export default function(props) {
  const classes = useStyles()

  const { tabs, location } = props
  const state = (() => { 
    for(const tab in tabs) 
      if((tabs[tab].link || "").startsWith(location)) return +tab 
    return false
  })()

  const [value, setValue] = React.useState(state)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Tabs value={value} onChange={handleChange} classes={classes}>
      {tabs.map(({ title, link }) => (
        <Tab
          disableRipple
          key={title}
          label={title}
          component="a"
          className={classes.tab}
          href={link ? link : "."}
        />
      ))}
    </Tabs>
  )
}
