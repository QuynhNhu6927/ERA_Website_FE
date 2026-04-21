"use client";

import { LegalHeroSection } from "./LegalHeroSection";
import { LegalPageLayout } from "./LegalPageLayout";
import type { LegalSection } from "./LegalPageLayout";

const termsSections: LegalSection[] = [
  {
    id: "gioi-thieu",
    heading: "1. Giới thiệu",
    content: (
      <>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </>
    ),
  },
  {
    id: "chap-nhan-dieu-khoan",
    heading: "2. Chấp nhận điều khoản",
    content: (
      <>
        <p className="mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
        </p>
      </>
    ),
  },
  {
    id: "su-dung-website",
    heading: "3. Sử dụng website",
    content: (
      <>
        <p className="mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</li>
          <li>Et harum quidem rerum facilis est et expedita distinctio.</li>
          <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</li>
          <li>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.</li>
        </ul>
        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
      </>
    ),
  },
  {
    id: "quyen-so-huu",
    heading: "4. Quyền sở hữu trí tuệ",
    content: (
      <>
        <p className="mb-4">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p className="mb-4">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <p>
          Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>
      </>
    ),
  },
  {
    id: "gioi-han-trach-nhiem",
    heading: "5. Giới hạn trách nhiệm",
    content: (
      <>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    ),
  },
  {
    id: "thay-doi-dieu-khoan",
    heading: "6. Thay đổi điều khoản",
    content: (
      <>
        <p className="mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </>
    ),
  },
  {
    id: "luat-ap-dung",
    heading: "7. Luật áp dụng",
    content: (
      <>
        <p className="mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
        </p>
        <p>
          Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
        </p>
      </>
    ),
  },
  {
    id: "lien-he",
    heading: "8. Liên hệ",
    content: (
      <>
        <p className="mb-4">
          Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
        <p className="mb-4">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <div className="mt-4">
          <p className="mb-1">
            <strong>Công ty Cổ phần Bất động sản ERA Việt Nam</strong>
          </p>
          <p className="mb-1">Địa chỉ: Lầu 14, L14-01, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
          <p className="mb-1">Hotline: 1800 6701</p>
          <p>Email: info@era.com.vn</p>
        </div>
      </>
    ),
  },
];

export function TermsPage() {
  return (
    <main>
      <LegalHeroSection
        title="Điều khoản sử dụng"
        subtitle="Các điều khoản và điều kiện chi phối việc bạn truy cập và sử dụng website của ERA Vietnam."
      />
      <LegalPageLayout
        lastUpdated="21 Tháng 4, 2026"
        sections={termsSections}
      />
    </main>
  );
}
