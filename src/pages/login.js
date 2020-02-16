import React, { useState, useEffect } from "react"
import { Row, Col, Input, Button, Alert, Icon } from "antd"
import { compare } from "../components/hash-funtions.js/index"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from "../components/table"

const Login = () => {
  const [usuarios, setUsuarios] = useState([])

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const [msg, setMsg] = useState("")

  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("usuarios")) || [])
  }, [])

  return (
    <Layout>
      <SEO title="Login" />
      <h1
        style={{
          textAlign: "center",
          padding: "20px 0",
          fontFamily: "'Hammersmith One', sans-serif",
          fontSize: "52px",
        }}
      >
        LOGIN
      </h1>
      <Row gutter={[16, 16]} style={{ padding: "20px 0" }}>
        <Col span={12} sm={10}>
          <Input
            onChange={event => {
              setUser(event.target.value)
            }}
            value={user}
            placeholder="Usuario"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Col>
        <Col span={12} sm={10}>
          <Input
            onChange={event => {
              setPass(event.target.value)
            }}
            value={pass}
            placeholder="Contraseña"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
        </Col>
        <Col span={12} sm={4}>
          <Button
            onClick={() => {
              if (
                compare(
                  pass,
                  (usuarios.filter(u => u.usuario === user)[0] || {}).hash
                )
              )
                setMsg("1")
              else setMsg("0")
            }}
            style={{ backgroundColor: "#d3f261" }}
            block
          >
            Comparar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {msg === "1" && (
            <Alert message="Contraseña correcta" type="success" showIcon />
          )}
          {msg === "0" && (
            <Alert message="Contraseña incorrecta" type="error" showIcon />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Table
            {...{
              data: usuarios.map(({ usuario, hash }) => ({ usuario, hash })),
            }}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export default Login
