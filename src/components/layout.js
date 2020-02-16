/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { navigate } from "gatsby"
import { Tabs } from "antd"
import { Location } from "@reach/router"

import "./layout.css"

const { TabPane } = Tabs

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Location>
          {({ location: { pathname } }) => {
            return (
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "0",
                  width: "100%",
                }}
              >
                <Tabs
                  size="large"
                  tabPosition="bottom"
                  defaultActiveKey={pathname === "/login" ? "2" : "1"}
                  onChange={key => {
                    if (key === "2") navigate("/login")
                    if (key === "1") navigate("/")
                  }}
                >
                  <TabPane tab="Registro" key="1"></TabPane>
                  <TabPane tab="Login" key="2"></TabPane>
                </Tabs>
              </div>
            )
          }}
        </Location>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
