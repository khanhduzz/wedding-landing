// "use client";

// import { useSession, signOut } from "next-auth/react";
// import useSWR from "swr";
// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   LogOut,
//   Search,
//   Download,
//   Trash2,
//   Users,
//   CheckCircle,
//   XCircle,
//   MessageSquare,
// } from "lucide-react";

// const fetcher = (url: string) => fetch(url).then((r) => r.json());

// export default function Dashboard() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const params = useParams();
//   const lang = params?.lang || "vi";
//   const theme = params?.theme || "origin";

//   const { data, mutate } = useSWR("/api/admin/messages", fetcher);
//   const [query, setQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all"); // all, attending, declined

//   // Phân tích dữ liệu (Analytics)
//   const stats = useMemo(() => {
//     const messages = data?.messages || [];
//     const attending = messages.filter(
//       (m: any) => m.is_attending === true
//     ).length;
//     const totalGuests = messages.reduce(
//       (acc: number, m: any) => acc + (Number(m.guests) || 0),
//       0
//     );

//     return {
//       total: messages.length,
//       attending,
//       declined: messages.length - attending,
//       totalGuests: totalGuests + attending, // Ví dụ: Khách báo đi + số người đi kèm
//     };
//   }, [data]);

//   // Xử lý Lọc và Tìm kiếm
//   const filteredData = useMemo(() => {
//     return (data?.messages || []).filter((m: any) => {
//       const matchesQuery = [m.name, m.email, m.message].some((field) =>
//         field?.toLowerCase().includes(query.toLowerCase())
//       );
//       const matchesStatus =
//         statusFilter === "all"
//           ? true
//           : statusFilter === "attending"
//             ? m.is_attending === true
//             : m.is_attending === false;

//       return matchesQuery && matchesStatus;
//     });
//   }, [data, query, statusFilter]);

//   async function onDelete(id: string) {
//     if (!confirm("Bạn có chắc chắn muốn xóa lời nhắn này?")) return;
//     await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
//     mutate();
//   }

//   if (status === "loading")
//     return (
//       <div className="h-screen flex items-center justify-center font-serif italic text-[#BC8A5F]">
//         Đang tải dữ liệu...
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-[#FDFCFB] p-4 md:p-8">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
//         <div>
//           <h1 className="text-3xl font-serif text-[#3D3831]">
//             Quản lý khách mời
//           </h1>
//           <p className="text-sm text-[#BC8A5F] uppercase tracking-widest font-medium">
//             D & L Wedding Admin
//           </p>
//         </div>
//         <button
//           onClick={() => signOut({ callbackUrl: `/admin/login` })}
//           className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3D3831]/10 text-[#3D3831] hover:bg-red-50 hover:text-red-600 transition-all text-sm font-medium"
//         >
//           <LogOut size={16} /> Đăng xuất
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         <StatCard
//           icon={<MessageSquare className="text-blue-500" />}
//           label="Tổng phản hồi"
//           value={stats.total}
//         />
//         <StatCard
//           icon={<CheckCircle className="text-green-500" />}
//           label="Đồng ý tham gia"
//           value={stats.attending}
//         />
//         <StatCard
//           icon={<XCircle className="text-red-400" />}
//           label="Không thể đến"
//           value={stats.declined}
//         />
//         <StatCard
//           icon={<Users className="text-[#BC8A5F]" />}
//           label="Ước tính khách"
//           value={stats.totalGuests}
//         />
//       </div>

//       {/* Filters & Actions */}
//       <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-[#BC8A5F]/10 p-6 mb-6">
//         <div className="flex flex-col lg:flex-row gap-4 justify-between">
//           <div className="flex flex-1 flex-col md:flex-row gap-3">
//             <div className="relative flex-1">
//               <Search
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={18}
//               />
//               <input
//                 className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-[#BC8A5F]/20 outline-none transition-all"
//                 placeholder="Tìm tên, email hoặc lời nhắn..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//             </div>
//             <select
//               aria-label="filter status"
//               className="px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50/50 outline-none focus:ring-2 focus:ring-[#BC8A5F]/20 transition-all text-sm"
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               <option value="all">Tất cả trạng thái</option>
//               <option value="attending">Sẽ tham gia</option>
//               <option value="declined">Vắng mặt</option>
//             </select>
//           </div>
//           <a
//             href="/api/admin/messages?export=csv"
//             className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#3D3831] text-white rounded-xl hover:bg-[#BC8A5F] transition-all text-sm font-bold tracking-wide"
//           >
//             <Download size={16} /> XUẤT CSV
//           </a>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-[#BC8A5F]/10 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full border-collapse">
//             <thead>
//               <tr className="bg-[#FAF7F2] border-b border-[#BC8A5F]/10">
//                 <th className="text-left px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-[#BC8A5F]">
//                   Khách mời
//                 </th>
//                 <th className="text-left px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-[#BC8A5F]">
//                   Lời nhắn
//                 </th>
//                 <th className="text-center px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-[#BC8A5F]">
//                   Tham gia
//                 </th>
//                 <th className="text-left px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-[#BC8A5F]">
//                   Ngày gửi
//                 </th>
//                 <th className="px-6 py-4"></th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {filteredData.map((m: any) => (
//                 <motion.tr
//                   layout
//                   key={m.id}
//                   className="hover:bg-[#FAF7F2]/50 transition-colors"
//                 >
//                   <td className="px-6 py-4">
//                     <div className="font-medium text-[#3D3831]">{m.name}</div>
//                     <div className="text-xs text-gray-400">
//                       {m.email || "Không có email"}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <p
//                       className="text-sm text-[#3D3831]/80 max-w-xs truncate lg:max-w-md"
//                       title={m.message}
//                     >
//                       {m.message}
//                     </p>
//                   </td>
//                   <td className="px-6 py-4 text-center">
//                     {m.is_attending ? (
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                         {" "}
//                         Có{" "}
//                       </span>
//                     ) : (
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//                         {" "}
//                         Không{" "}
//                       </span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-400 italic">
//                     {new Date(m.created_at).toLocaleDateString(
//                       lang === "vi" ? "vi-VN" : "en-US"
//                     )}
//                   </td>
//                   <td className="px-6 py-4 text-right">
//                     <button
//                       aria-label="c"
//                       className="p-2 text-gray-300 hover:text-red-500 transition-colors"
//                       onClick={() => onDelete(m.id)}
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//           {filteredData.length === 0 && (
//             <div className="py-20 text-center text-gray-400 italic">
//               Không tìm thấy dữ liệu phù hợp...
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({
//   icon,
//   label,
//   value,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: number;
// }) {
//   return (
//     <div className="bg-white p-6 rounded-3xl border border-[#BC8A5F]/10 shadow-sm flex items-center gap-4">
//       <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl">
//         {icon}
//       </div>
//       <div>
//         <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
//           {label}
//         </div>
//         <div className="text-2xl font-serif text-[#3D3831]">{value}</div>
//       </div>
//     </div>
//   );
// }

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
            onClick={() => signOut()}
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
