import React, { useEffect, useState } from "react";
import { Card } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  PlaneTakeoff,
  Users,
  FileText,
  PieChart as LucidePieChart,
  BarChart3,
} from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({ flights: 0, staff: 0, logs: 0 });

  const pieData = [
    { name: "On Time", value: 10 },
    { name: "Delayed", value: 4 },
    { name: "Cancelled", value: 2 },
  ];

  const barData = [
    { month: "Jan", flights: 20 },
    { month: "Feb", flights: 15 },
    { month: "Mar", flights: 22 },
    { month: "Apr", flights: 18 },
    { month: "May", flights: 25 },
  ];

  const COLORS = ["#52c41a", "#faad14", "#f5222d"];

  useEffect(() => {
    setStats({ flights: 37, staff: 12, logs: 102 });
  }, []);

  return (
    <div className="space-y-6 overflow-x-hidden px-4 md:px-8 pb-8">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Total Flights</p>
              <p className="text-3xl font-bold">{stats.flights}</p>
            </div>
            <PlaneTakeoff size={32} className="text-blue-950" />
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Total Staff</p>
              <p className="text-3xl font-bold">{stats.staff}</p>
            </div>
            <Users size={32} className="text-blue-950" />
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Total Logs</p>
              <p className="text-3xl font-bold">{stats.logs}</p>
            </div>
            <FileText size={32} className="text-blue-950" />
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title={
            <div className="flex items-center gap-2 font-semibold">
              <LucidePieChart size={20} /> Flight Status
            </div>
          }
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card
          title={
            <div className="flex items-center gap-2 font-semibold">
              <BarChart3 size={20} /> Flights Per Month
            </div>
          }
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={barData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="flights" fill="#1890ff" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
