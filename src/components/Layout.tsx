import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import React, { FC, PropsWithChildren } from 'react';
import Spinner from './Spinner';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();

    return (
        <div className="p-12 mx-auto max-w-screen-lg min-h-screen flex flex-col gap-y-8">
            { isFetching || isMutating ? <Spinner /> : null }
            {children}
        </div>
    );
};

export default Layout;
