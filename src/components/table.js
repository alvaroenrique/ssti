import React from "react"
import { Table } from "antd"

const columns = [
  {
    title: "Usuario",
    dataIndex: "usuario",
    key: "usuario",
  },
  {
    title: "Contraseña",
    dataIndex: "contraseña",
    key: "contraseña",
  },
  {
    title: "Hash",
    dataIndex: "hash",
    key: "hash",
  },
]

function MyTable({ data }) {
  return (
    <Table
      rowKey="hash"
      pagination={false}
      columns={columns}
      dataSource={data}
      style={{ overflowX: "auto" }}
    />
  )
}

export default MyTable
