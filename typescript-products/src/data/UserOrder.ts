import type { UserOrderType } from "@/types/UserOrder"

export const usersOrder: UserOrderType[] = [
    {
      id: "1",
      name: "Alex Thompson",
      username: "@alexthompson",
      image:
        "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-02_upqrxi.jpg",
      email: "alex.t@company.com",
      location: "San Francisco, US",
      status: "Active",
      balance: "$1,250.00",
    },
    {
      id: "2",
      name: "Sarah Chen",
      username: "@sarahchen",
      image:
        "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-01_ij9v7j.jpg",
      email: "sarah.c@company.com",
      location: "Singapore",
      status: "Active",
      balance: "$600.00",
    },
    {
      id: "4",
      name: "Maria Garcia",
      username: "@mariagarcia",
      image:
        "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-03_dkeufx.jpg",
      email: "m.garcia@company.com",
      location: "Madrid, Spain",
      status: "Active",
      balance: "$0.00",
    },
    {
      id: "5",
      name: "David Kim",
      username: "@davidkim",
      image:
        "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp1/avatar-40-05_cmz0mg.jpg",
      email: "d.kim@company.com",
      location: "Seoul, KR",
      status: "Active",
      balance: "-$1,000.00",
    },
  ]