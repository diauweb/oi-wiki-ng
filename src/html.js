import PropTypes from "prop-types"
import React from "react"

export default function HTML(props) {
  return (
    <html lang="zh-cmn-Hans" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script dangerouslySetInnerHTML={{
        __html: `window.MathJax = {
          tex: {
            inlineMath: [
              ["$", "$"],
            ],
            displayMath: [
              ["$$", "$$"],
            ],
          },
        }` }} />
      <script
        src="https://cdn.staticfile.org/mathjax/3.0.1/es5/tex-mml-chtml.js"
        id="MathJax-script"
      />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
