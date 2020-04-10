/** @jsx jsx */
import Divider from "@material-ui/core/Divider"
import Paper from "@material-ui/core/Paper"
import { useTheme } from "@material-ui/core/styles"
import { MdBuild, MdCopyright, MdEdit } from "react-icons/md"
import { jsx } from "theme-ui"
import AuthorsArray from "./AuthorsArray"
import Link from "./Link"
import Tags from "./Tags"

function Meta({ authors, tags, relativePath, modifiedTime, noMeta }) {
  const theme = useTheme()
  const editURL = "https://github.com/OI-wiki/OI-wiki/edit/master/docs/"
  const historyURL = "https://github.com/OI-wiki/OI-wiki/commits/master/docs/"
  if (noMeta === "false") {
    return (
      <Paper sx={{ padding: theme.spacing(2) }} variant="outlined">
        <AuthorsArray authors={authors}/>
        <Divider sx={{ marginTop: "8px", marginBottom: "8px" }}/>
        <Tags tags={tags}/>
        <div
          sx={{
            margin: "20px 0",
            paddingLeft: ".5rem",
            textDecoration: "none",
          }}
        >
          <span>
            <small>
              <MdBuild/>
            </small>
            本页面最近更新：
          </span>
          <span>{modifiedTime}</span>，
          <Link href={historyURL + relativePath}>更新历史</Link>
          <br/>
          <span>
            <small>
              <MdEdit/>
            </small>
            发现错误？想一起完善？{" "}
            <Link href={editURL + relativePath} title="编辑此页">
              在 GitHub 上编辑此页！
            </Link>
          </span>
          <br/>
          <span>
            <small>
              <MdCopyright/>
            </small>
            本页面的全部内容在{" "}
            <strong>
              <Link href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh">
                CC BY-SA 4.0
              </Link>{" "}
              和 <Link href="https://github.com/zTrix/sata-license">SATA</Link>
            </strong>{" "}
            协议之条款下提供，附加条款亦可能应用
          </span>
        </div>
      </Paper>
    )
  } else return <div/>
}

export default Meta
