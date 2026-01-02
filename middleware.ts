// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token, // Trả về true nếu có session (token)
//     },
//     pages: {
//       signIn: "/admin/login", // Đường dẫn dự phòng nếu chưa login
//     },
//   }
// );

// // Chỉ áp dụng middleware cho các trang admin dashboard
// export const config = {
//   matcher: ["/(.*)/admin/dashboard/:path*"],
// };

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/admin/login", // Nếu chưa login, tự động đá về đây
  },
});

// Cấu hình các đường dẫn cần bảo vệ
export const config = {
  // Regex này bảo vệ tất cả các đường dẫn có cấu trúc /[lang]/[theme]/admin/dashboard
  matcher: ["/admin/:path*"],
};