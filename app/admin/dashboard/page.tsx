"use client";

import { useSession, signOut } from "next-auth/react";
import useSWR from "swr";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Download,
  Trash2,
  Check,
  X,
  Search,
} from "lucide-react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"rsvp" | "messages">("rsvp");
  const [query, setQuery] = useState("");

  const { data: msgData, mutate: mutateMsg } = useSWR(
    "/api/admin/messages",
    fetcher
  );
  const { data: rsvpData, mutate: mutateRsvp } = useSWR(
    "/api/admin/rsvp",
    fetcher
  );

  // --- Tính toán thống kê RSVP ---
  const stats = useMemo(() => {
    const list = rsvpData?.rsvps || [];
    const attending = list.filter((r: any) => r.attending);
    const totalGuests = attending.reduce(
      (sum: number, r: any) => sum + (r.guest_count || 0),
      0
    );
    return {
      totalForms: list.length,
      attending: attending.length,
      declined: list.length - attending.length,
      totalGuests: totalGuests,
    };
  }, [rsvpData]);

  // --- Lọc dữ liệu hiển thị ---
  const filteredRsvps = (rsvpData?.rsvps || []).filter((r: any) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredMsgs = (msgData?.messages || []).filter((m: any) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  async function deleteItem(id: string, type: "rsvp" | "messages") {
    if (!confirm("Xác nhận xóa dữ liệu này?")) return;
    const endpoint =
      type === "rsvp" ? "/api/admin/rsvp" : "/api/admin/messages";
    await fetch(`${endpoint}?id=${id}`, { method: "DELETE" });
    type === "rsvp" ? mutateRsvp() : mutateMsg();
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] p-6 md:p-12">
      {/* Header & Stats */}
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-serif text-[#3D3831]">
              Hệ thống Quản trị
            </h1>
            <p className="text-[#BC8A5F] font-bold tracking-widest text-xs uppercase mt-2">
              D & L Wedding Control Panel
            </p>
          </div>
          <button
            onClick={() =>
              signOut({
                callbackUrl: `/admin/login`,
                redirect: true,
              })
            }
            className="text-xs font-bold text-red-400 hover:text-red-600 uppercase tracking-tighter transition-colors"
          >
            Đăng xuất
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox label="Số phản hồi" value={stats.totalForms} />
          <StatBox
            label="Sẽ tham gia"
            value={stats.attending}
            color="text-green-600"
          />
          <StatBox
            label="Tổng số khách"
            value={stats.totalGuests}
            color="text-blue-600"
          />
          <StatBox label="Lời chúc" value={msgData?.messages?.length || 0} />
        </div>

        {/* Tabs & Filter */}
        <div className="bg-white rounded-[2rem] shadow-sm p-4 border border-[#BC8A5F]/10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex bg-[#FAF7F2] p-1.5 rounded-2xl">
              <TabBtn
                active={activeTab === "rsvp"}
                onClick={() => setActiveTab("rsvp")}
                label="Danh sách RSVP"
                icon={<Users size={16} />}
              />
              <TabBtn
                active={activeTab === "messages"}
                onClick={() => setActiveTab("messages")}
                label="Lời chúc"
                icon={<MessageCircle size={16} />}
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />
                <input
                  className="bg-transparent border border-gray-100 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#BC8A5F]"
                  placeholder="Tìm tên khách..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <a
                href={`/api/admin/${activeTab}?export=csv`}
                className="p-2.5 bg-[#3D3831] text-white rounded-xl hover:bg-[#BC8A5F] transition-all"
              >
                <Download size={18} />
              </a>
            </div>
          </div>

          {/* Table Area */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#BC8A5F] text-[10px] uppercase tracking-widest border-b border-gray-50">
                  <th className="p-4">Khách mời</th>
                  {activeTab === "rsvp" ? (
                    <>
                      <th className="p-4">Trạng thái</th>
                      <th className="p-4 text-center">Số người</th>
                    </>
                  ) : (
                    <th className="p-4">Nội dung lời nhắn</th>
                  )}
                  <th className="p-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === "rsvp" ? filteredRsvps : filteredMsgs).map(
                  (item: any) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="font-bold text-[#3D3831]">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          {item.email || "Không có email"}
                        </div>
                      </td>
                      {activeTab === "rsvp" ? (
                        <>
                          <td className="p-4">
                            {item.attending ? (
                              <span className="flex items-center gap-1 text-green-600 text-xs font-bold">
                                <Check size={14} /> Sẽ đến
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-red-400 text-xs font-bold">
                                <X size={14} /> Rất tiếc
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-center font-serif">
                            {item.guest_count}
                          </td>
                        </>
                      ) : (
                        <td className="p-4 text-sm text-gray-600 italic">
                          "{item.message}"
                        </td>
                      )}
                      <td className="p-4 text-right">
                        <button
                          aria-label="c"
                          onClick={() => deleteItem(item.id, activeTab)}
                          className="text-gray-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components
function StatBox({ label, value, color = "text-[#3D3831]" }: any) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-[#BC8A5F]/10 shadow-sm">
      <p className="text-[10px] uppercase tracking-widest font-bold text-[#BC8A5F] mb-1">
        {label}
      </p>
      <p className={`text-3xl font-serif ${color}`}>{value}</p>
    </div>
  );
}

function TabBtn({ active, onClick, label, icon }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${active ? "bg-white shadow-sm text-[#3D3831]" : "text-gray-400 hover:text-[#BC8A5F]"}`}
    >
      {icon} {label}
    </button>
  );
}
