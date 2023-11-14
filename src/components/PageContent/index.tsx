import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import React from "react";

const PageContent = () => {
  return (
    <div>
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.25)",
                fontSize: 24,
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Orders"
          value={2321}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.25)",
                fontSize: 24,
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Inventory"
          value={2321}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0, 255, 255, 0.25)",
                fontSize: 24,
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Customers"
          value={2321}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.25)",
                fontSize: 24,
                borderRadius: 20,
                padding: 8,
              }}
            />
          }
          title="Revenue"
          value={2321}
        />
      </Space>
    </div>
  );
};
const DashboardCard = ({ title, value, icon }: any) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

function RecentOrders() {
  return (
    <Table
      columns={[
        { title: "Title", dataIndex: "title" },
        { title: "Quantity", dataIndex: "quantity" },
        { title: "Price", dataIndex: "discountedPrice" },
      ]}
    ></Table>
  );
}

export default PageContent;
