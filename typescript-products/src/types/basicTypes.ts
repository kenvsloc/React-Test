type UserRole = "admin" | "editor" | "user" | "viewer";
type UserID = string | number;
type UserIsEdit = boolean;

type Ruler = {
  name: string;
  id: UserID;
  keyActive: UserID;
  role: UserRole;
  isEdit: UserIsEdit;
};

export const admin: Ruler = {
  name: "Huy chu",
  id: 123,
  keyActive: 1599,
  role: "admin",
  isEdit: true,
};

export const editor: Ruler = {
  name: "ND11223",
  id: 223,
  keyActive: 7580,
  role: "editor",
  isEdit: true,
};

export const user: Ruler = {
  name: "nam",
  id: 'U-303253',
  keyActive: 1599,
  role: "user",
  isEdit: false,
};

export const viewer: Ruler = {
  name: "thai",
  id: 'V-092237',
  keyActive: 1599,
  role: "viewer",
  isEdit: false,
};


