import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
    <div className="p-12 mx-auto max-w-screen-lg min-h-screen flex flex-col gap-y-8">
        {children}
    </div>
);

export default Layout;
