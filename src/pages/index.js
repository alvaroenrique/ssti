import React, { useState, useEffect } from "react"
import { Row, Col, Input, Button, Icon, Card } from "antd"
import { hash, PEPPER } from "../components/hash-funtions.js/index"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Table from "../components/table"

const IndexPage = () => {
  const [usuarios, setUsuarios] = useState([])

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  useEffect(() => {
    setUsuarios(JSON.parse(localStorage.getItem("usuarios")) || [])
  }, [])

  return (
    <Layout>
      <SEO title="Registro" />

      <h1
        style={{
          textAlign: "center",
          padding: "20px 0",
          fontFamily: "'Hammersmith One', sans-serif",
          fontSize: "52px",
        }}
      >
        REGISTRO
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
              const newUsers = [
                ...usuarios,
                { usuario: user, contraseña: pass, hash: hash(pass) },
              ]
              setUsuarios(newUsers)
              localStorage.setItem("usuarios", JSON.stringify(newUsers))
            }}
            style={{ backgroundColor: "#d3f261" }}
            block
          >
            Registrar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table {...{ data: usuarios }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "300px", margin: "0 auto", marginTop: "30px" }}>
            <p style={{ margin: "0" }}>Pepper: {PEPPER}</p>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
