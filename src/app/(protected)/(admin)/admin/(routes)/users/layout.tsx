import React from "react";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const UsersLayout: React.FC<Props> = ({ children, modal }) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default UsersLayout;
